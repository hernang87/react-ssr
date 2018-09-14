import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class HomePage extends Component {
  head() {
    return (
      <Helmet>
        <title>SSR App - Homepage</title>
        <meta property="og:title" content="SSR App Home" />
      </Helmet>
    );
  }

  render() {
    return (
      <div className="center-align">
        {this.head()}
        <h3>Welcome</h3>
        <p>My React SSR App</p>
      </div>
    );
  }
}

export default {
  component: HomePage
};