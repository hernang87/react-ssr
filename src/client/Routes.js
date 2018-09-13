import App from './App';
import { HomePage, UserListPage, NotFoundPage } from './pages';

export default [{
  ...App,
  routes: [{
    ...HomePage,
    path: '/',
    exact: true
  }, {
    ...UserListPage,
    path: '/users'
  }, {
    ...NotFoundPage,
  }]
}];




