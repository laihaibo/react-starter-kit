import React, { Component } from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import styles from './index.module.css';

@inject('dataStore')
@observer
class index extends Component<any, any> {
  @computed
  get dataStore() {
    return this.props.dataStore;
  }

  componentDidMount() {
    console.log(this.dataStore.users);
  }

  render() {
    return <div className={styles.Wrapper} />;
  }
}

export default index;
