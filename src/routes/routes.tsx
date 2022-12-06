import login from '../modules/login/routes';
import dashboard from '../modules/dashboard/routes'

export default [
  ...login,
  ...dashboard
];
