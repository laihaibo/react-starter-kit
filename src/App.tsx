import React, { Component } from 'react';
import uuid from './utils/uuid';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';

import Wrapper from './containers/Wrapper';

class App extends Component {
  componentDidMount() {
    function greeter(person: string) {
      return 'hello, ' + person;
    }

    let user = greeter(uuid());
    console.log(user);
  }

  render() {
    return (
      <div className={styles.App}>
        <header className={styles.App_header}>
          <img src={logo} className={styles.App_logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={styles.App_link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Wrapper />
      </div>
    );
  }
}

export default App;
