import { actionTypes } from './reducer';
import { take, takeEvery, takeLatest, put, all, delay, call, fork } from 'redux-saga/effects';
import {
    getTasksStart,
    getTasksSuccess,
    getTasksError,
    createTaskSuccess,
    createTaskError,
    deleteTaskSuccess,
    deleteTaskError,
} from './reducer';
import { tasksLogApi, createTaskLogApi, deleteTaskLogApi } from './api';

export function* getTaskStartAsync(): any {
    try {
        const response = yield call(tasksLogApi); 
        console.log(response)
        if (response.status === 200) {
            yield delay(500);
            yield put(getTasksSuccess(newFunction(response)))
        }
    } catch (err: any) {
        yield put(getTasksError(err.response));
    }
} 

function newFunction(response: any): any {
    return { tasksLog: response.data };
}

export function* createTaskStartAsync({payload}: any): any {
    try {
        const response = yield call(createTaskLogApi, payload);
        if (response.status === 200) {
            yield put(createTaskSuccess())
        }
    } catch (err: any) {
        yield put(createTaskError(err.response));
    }
}

export function* loadTaskLog() {
    yield takeEvery(actionTypes.GET_TASK_START, getTaskStartAsync);
}

export function* createTaskLog() {
    yield takeLatest(actionTypes.CREATE_TASK_START, createTaskStartAsync);
}

function* deleteTaskLogAsync(taskLogId: number): any {
    try {
        const response = yield call(deleteTaskLogApi, taskLogId); 
        if (response.status === 200) {
            yield put(deleteTaskSuccess(response.data))
        }
    } catch (err: any) {
        yield put(createTaskError(err.response));
    }
}

function* deleteTaskLog() {
    while(true) {
        const {payload: taskLogId} = yield take(actionTypes.DELETE_TASK_START);
        yield call(deleteTaskLogAsync, taskLogId)
    }
}
const taskLogSagas = [fork(loadTaskLog), fork(createTaskLog)];

export default function* dashboardSagaS() {
    yield all([...taskLogSagas])
}

