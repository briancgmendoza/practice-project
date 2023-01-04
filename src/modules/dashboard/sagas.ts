import { actionTypes } from './reducer';
import { all, call, takeLatest, put, delay } from 'redux-saga/effects';
import { getAllDataRequest, createTaskLogApi } from './api';
import axios from 'axios';

function* getTaskRequestAsync(): Generator<any> {
    try {
        const response: any = yield call(getAllDataRequest);
        const { data } = response
        yield put({ type: actionTypes.GET_TASK_SUCCESS, data });
        console.log('@sagaGET ',data)
    } catch (err: any) {
        yield put({ type: actionTypes.GET_TASK_FAILED, err });
    }
}

function* createTaskRequestAsync({payload}: any): Generator<any> {
    try {
        const response: any = yield call(createTaskLogApi, {payload});
        const { data } = response;
        yield put({ type: actionTypes.CREATE_TASK_SUCCESS, data});
        console.log('@sagaCREATE ',data)
    } catch (err: any) {
        yield put({ type: actionTypes.CREATE_TASK_FAILED, err });
    }
}

function* watchAuthRequests() {
    yield all([
        takeLatest(actionTypes.GET_TASK_REQUEST, getTaskRequestAsync),
        takeLatest(actionTypes.CREATE_TASK_REQUEST, createTaskRequestAsync)
    ]);
}

export default [watchAuthRequests()];

