import { createStore, applyMiddleware } from 'redux';
import reducers from '../client/reducers';
import thunk from 'redux-thunk';

export default (initialState = {}) => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));

  return store;
}