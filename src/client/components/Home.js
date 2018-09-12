import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home simple component</div>
        <button onClick={() => console.log('clicked!')}>Click me</button>
      </div>
    );
  }
}

export default Home;