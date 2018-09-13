import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className="center-align">
        <h3>Welcome</h3>
        <p>My React SSR App</p>
      </div>
    );
  }
}

export default {
  component: HomePage
};