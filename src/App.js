import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.css';

import { Button } from 'antd';

class App extends Component {
  onClick() {
    console.log(456);
  }
  render() {
    return (
      <div className={style.App}>
        <header className={style.App_header}>
          <img src={logo} className={style.App_logo} alt="logo" />
          <h1 className={style.App_title}>Welcome to React!</h1>
        </header>
        <p className={style.App_intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary" onClick={this.onClick.bind(this)}>热替换</Button>
      </div>
    );
  }
}

export default App;
