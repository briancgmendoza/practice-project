import { all } from 'redux-saga/effects';
import loginSagas from '../modules/login/sagas';
import dashboardSagas from '../modules/dashboard/sagas';

export default function* rootSaga() {
  yield all([
    ...loginSagas,
    ...dashboardSagas
  ]);
}
