import App from './App';
import {
  HomePage,
  UserListPage,
  AdminListPage,
  NotFoundPage
} from './pages';

export default [{
  ...App,
  routes: [
    {
      ...HomePage,
      path: '/',
      exact: true
    }, {
      ...UserListPage,
      path: '/users'
    }, {
      ...AdminListPage,
      path: '/admins'
    }, {
      ...NotFoundPage,
    }
  ]
}];
