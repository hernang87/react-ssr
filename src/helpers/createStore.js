import { createStore, applyMiddleware } from 'redux';
import reducers from '../client/reducers';
import thunk from 'redux-thunk';
import axios from 'axios';

export default (req, initialState = {}) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com/',
    headers: {
      cookie: req.get('cookie') || ''
    }
  });

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
}