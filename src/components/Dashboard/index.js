import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Button } from 'antd';

import styles from './index.css';

@inject('uiStore')
@observer
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    console.log(this.props.uiStore.color);
  }

  render() {
    return (
      <div className={styles.Dashboard}>
        <Button type="primary" onClick={this.onClick}>
          shepi
        </Button>
      </div>
    );
  }
}

export default Dashboard;
