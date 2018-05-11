import React, { Component } from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';

import { Button } from 'antd';

import './index.css';

import logo from '../../assets/img/logo.svg';

@inject('dataStore')
@observer
class Dashboard extends Component {
  onClick() {
    console.log(this.props.dataStore.id);
  }

  render() {
    return (
      <div className="Dashboard">
        <header className="App_header">
          <img src={logo} className="App_logo" alt="logo" />
          <h1 className="App_title">Welcome to MfOBX!</h1>
        </header>
        <p className="App_intro">
          To get started, edit <code>src/A3ppd2.2djs</code> and save to reload.
        </p>
        <p className="App_intro">
          <Button type="primary" onClick={this.onClick.bind(this)}>
            shepif
          </Button>
        </p>
      </div>
    );
  }
}

export default Dashboard;
