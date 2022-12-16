import { actionTypes } from './reducer';
import { take, takeEvery, takeLatest, put, all, delay, call, fork } from 'redux-saga/effects';
import { getTasksStart, getTasksSuccess, getTasksError } from './reducer';
import { tasksLogApi } from './api';

export function* getTaskStartAsync(): any {
    try {
        const response = yield call(tasksLogApi); 
        console.log(response)
        if (response.status === 200) {
            yield delay(500);
            yield put(getTasksSuccess(response))
        }
    } catch (err: any) {
        yield put(getTasksError(err.response));
    }
}

export function* loadTaskLog() {
    yield takeEvery(actionTypes.GET_TASK_START, getTaskStartAsync);
}

const taskLogSagas = [fork(loadTaskLog)];

export default function* dashboardSagaS() {
    yield all([...taskLogSagas])
}

