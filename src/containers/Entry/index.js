import React, { Component } from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';

import { Button } from 'antd';

import './index.css';

import logo from '../../assets/images/logo.svg';

@inject('dataStore')
@observer
class Entry extends Component {
  @computed get dataStore() {
    return this.props.dataStore;
  }

  onClick() {
    console.log(this.dataStore.id);
  }

  render() {
    return (
      <div className="Entry">
        <header className="App_header">
          <img src={logo} className="App_logo" alt="logo" />
          <h1 className="App_title">Welcome to React!</h1>
        </header>
        <p className="App_intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App_intro">
          <Button type="primary" onClick={this.onClick.bind(this)}>shepipi</Button>
        </p>
      </div>
    );
  }
}

export default Entry;