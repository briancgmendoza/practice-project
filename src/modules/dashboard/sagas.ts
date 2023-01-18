import { actionTypes } from './reducer';
import { all, call, takeLatest, put, take } from 'redux-saga/effects';
import { getAllDataRequest, createTaskLogApi, updateTaskLogApi, deleteTaskLogApi, selectedTaskLogApi } from './api';
import { taskLog } from "./interface";
import * as Effects from 'redux-saga/effects';

function* getTaskRequestAsync(): Generator<any> {
    try {
        const response: any = yield call(getAllDataRequest);
        const { data } = response
        yield put({ type: actionTypes.GET_TASK_SUCCESS, data });
    } catch (err: any) {
        yield put({ type: actionTypes.GET_TASK_FAILED, err });
    }
}

function* createTaskRequestAsync({ payload }: any): Generator<any> {
    try {
        const response: any = yield call(createTaskLogApi, payload);
        const { data } = response;
        yield put({ type: actionTypes.CREATE_TASK_SUCCESS, data});
    } catch (err: any) {
        yield put({ type: actionTypes.CREATE_TASK_FAILED, err });
    }
}

function* updateTaskRequestAsync({ id } : any): Generator<any> {
    try {
        const response: any = yield call(updateTaskLogApi, id );
        const  { data } = response;
        yield put({ type: actionTypes.UPDATE_TASK_SUCCESS, data});
    } catch (err: any) {
        yield put({ type: actionTypes.UPDATE_TASK_FAILED, err});
    }
}

function* selectedTaskRequestAsync({ payload }: any ): Generator<any> {
    try {
        const response: any = yield call(selectedTaskLogApi, payload );
        yield put({ type: actionTypes.SELECTED_TASK_SUCCESS, response });
    } catch (err: any) {
        yield put({ type: actionTypes.SELECTED_TASK_FAILED, err });
    }
} 

function* deleteTaskRequestAsync({ id } : any): Generator<any> {
    try {
        const response: any = yield call(deleteTaskLogApi, id);
        yield put({ type: actionTypes.DELETE_TASK_SUCCESS, response });
        alert("Deleted Successfully");
    } catch (err: any) {
        yield put({ type: actionTypes.DELETE_TASK_FAILED, err });
    }
}

// const takeLatest: any = Effects.takeLatest;

function* watchAuthRequests() {
    yield all([
        takeLatest(actionTypes.GET_TASK_REQUEST, getTaskRequestAsync),
        takeLatest(actionTypes.CREATE_TASK_REQUEST, createTaskRequestAsync),
        takeLatest(actionTypes.UPDATE_TASK_REQUEST, updateTaskRequestAsync),
        takeLatest(actionTypes.DELETE_TASK_REQUEST, deleteTaskRequestAsync),
        takeLatest(actionTypes.SELECTED_TASK_REQUEST, selectedTaskRequestAsync)
    ]);
}

export default [watchAuthRequests()];

