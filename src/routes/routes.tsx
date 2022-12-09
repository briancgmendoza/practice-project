import login from '../modules/login/routes';
import dashboard from '../modules/dashboard/routes'
import orders from '../modules/order/routes'

export default [
  ...login,
  ...dashboard,
  ...orders,
];
