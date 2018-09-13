import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

const loadData = ({ dispatch }) => dispatch(fetchCurrentUser());

export default {
  component: App,
  loadData
};