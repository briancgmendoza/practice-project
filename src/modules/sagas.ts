import { all, call, takeLatest, put } from 'redux-saga/effects';
import { actionTypes } from './reducer';
import {
    login as loginService,
    googleLogin as googleLoginService,
    refreshToken as refreshTokenService,
    getProfile as getProfileService,
} from './service';
import { Body, GetProfileSaga, LoginSaga } from './interface';

function* login({ body }: Body): Generator<any> {
    try {
        // const data = yield call(loginService, body);
        // yield put({ type: actionTypes.LOGIN_SUCCESS, data });
    } catch (err) {

    }
}

function* googleLogin ({ body }: LoginSaga): Generator<any> {
    try {

    } catch (err) {

    }
}

function* refreshToken(): Generator<any> {
    try {

    } catch (err) {

    }
}

function* sagas() {

}

export default sagas;
