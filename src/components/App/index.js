import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Dashboard from '../../containers/Dashboard';
import Days from '../../containers/Days';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Days />
      </div>
    );
  }
}

export default hot(module)(App);
// export default App;
