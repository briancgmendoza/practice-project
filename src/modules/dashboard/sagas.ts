import { actionTypes } from './reducer';
import { all, call, takeLatest, put, delay } from 'redux-saga/effects';
import { getAllDataRequest } from './api';
import axios from 'axios';

function* getTaskStartAsync(): Generator<any> {
    try {
        const response: any = yield call(getAllDataRequest);
        const { data } = response
        yield put({ type: actionTypes.GET_TASK_SUCCESS, data })
    } catch (err: any) {
        yield put({ type: actionTypes.GET_TASK_FAILED, err });
    }
}

function* watchAuthRequests() {
    yield all([
        takeLatest(actionTypes.GET_TASK_REQUEST, getTaskStartAsync),
    ]);
}

export default [watchAuthRequests()];

