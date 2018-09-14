import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class NotFoundPage extends Component {
  head() {
    return (
      <Helmet>
        <title>SSR App - 404</title>
        <meta property="og:title" content="SSR App 404 Not Found" />
      </Helmet>
    );
  }

  render() {
    const staticContext = this.props.staticContext || {};
    staticContext.notFound = true;

    return (
      <div className="center-align">
        <h3>Oops!</h3>
        <p>Not found...</p>
      </div>
    );
  }
}

export default {
  component: NotFoundPage
};