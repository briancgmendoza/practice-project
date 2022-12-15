import { actionTypes } from './reducer';
import { take, takeEvery, takeLatest, put, all, delay, call, fork } from 'redux-saga/effects';
import { getTaskStart, getTaskSuccess, getTaskError } from './reducer';
import { taskLogApi } from './api';

export function* getTaskStartAsync(): any {
    try {
        const response = yield call(taskLogApi); 
        if (response.status === 200) {
            yield delay(500);
            yield put(getTaskSuccess(response.data))
        }
    } catch (err: any) {
        yield put(getTaskError(err.response.data));
    }
}

export function* loadTaskLog() {
    yield takeEvery(actionTypes.GET_TASK_START, getTaskStartAsync);
}

const taskLogSagas = [fork(loadTaskLog)];

export default function* dashboardSagaS() {
    yield all([...taskLogSagas])
}
// import { actionTypes } from './reducer';

// function* taskSaga(data) {
//     try {
//         const response = yield call(); 
//         if (response.status === 200) {
//             yield delay(500);
//             yield put()
//         }
//     } catch (err) {
//         console.log('Errror ', err);
//     }
// }
