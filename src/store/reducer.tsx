import { combineReducers } from 'redux';

import login from '../modules/login/reducer';
// import dashboard from '../modules/dashboard/reducer'

export const rootReducer = combineReducers({
  login,
  // dashboard
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;
