import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import logo from '../../assets/img/logo.svg';
import './index.css';
import Dashboard from '../../components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Dashboard />
        </main>
      </div>
    );
  }
}

export default hot(module)(App);
