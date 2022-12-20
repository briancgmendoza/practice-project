import { combineReducers } from 'redux';
import loginReducer from '../modules/login/reducer';
import dashboardReducer from '../modules/dashboard/reducer'

export const rootReducer = combineReducers({
  login: loginReducer,
  taskLog: dashboardReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;
