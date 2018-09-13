import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Routes from './Routes';

const initialState = window.INITIAL_STATE
  ? window.INITIAL_STATE
  : {};

const axiosInstance = axios.create({
  baseUrl: '/api'
});

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

delete window.INITIAL_STATE;

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {renderRoutes(Routes)}
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);