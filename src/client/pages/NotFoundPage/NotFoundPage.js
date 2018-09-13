import React, { Component } from 'react';

class NotFoundPage extends Component {
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