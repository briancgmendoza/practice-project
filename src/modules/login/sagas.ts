import { all, call, takeLatest, put } from 'redux-saga/effects';
import { actionTypes } from './reducer';
import {
  login as loginService,
  googleLogin as googleLoginService,
  refreshToken as refreshTokenService
} from './service';
import { Body, LoginSaga } from './interface';
import { setToken, getToken, getRefreshToken } from '../../utils/token';

function* login({ body }: Body): Generator<any> {
  try {
    const data = yield call(loginService, body);
    yield put({ type: actionTypes.LOGIN_SUCCESS, data });
  } catch (err) {
    yield put({ type: actionTypes.LOGIN_FAILED, err });
  }
}

function* googleLogin({ body }: LoginSaga): Generator<any> {
  try {
    const newRequestBody = { 
      googleId: body.googleId,
      googleIdToken: body.googleIdToken,
    };
    const data: any = yield call(googleLoginService, newRequestBody);
    data.googleId = body.googleId;
    data.googleIdToken = body.googleIdToken;
    data.profilePicture = body.imageUrl;
    yield put({ type: actionTypes.GOOGLE_LOGIN_SUCCESS, data });
  } catch (err) {
    yield put({ type: actionTypes.GOOGLE_LOGIN_FAILED, err });
  }
}

function* refreshToken(): Generator<any> {
  try {
    const body = {
      accessToken: getToken(),
      refreshToken: getRefreshToken(),
    };
    const data: any = yield call(refreshTokenService, body);
    setToken(data.accessToken, data.refreshToken);
    yield put({
      type: actionTypes.REFRESH_TOKEN_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: actionTypes.LOGOUT_SUCCESS,
    });
  }
}

function* watchAuthRequests() {
  yield all([
    takeLatest(actionTypes.LOGIN_REQUEST, login),
    takeLatest(actionTypes.REFRESH_TOKEN, refreshToken),
    takeLatest(actionTypes.GOOGLE_LOGIN_REQUEST, googleLogin),
  ]);
}

export default [watchAuthRequests()];
