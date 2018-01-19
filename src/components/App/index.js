import React, { Component } from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';

import Entry from '../../containers/Entry';

import './index.css';

@inject('uiStore')
@observer
class App extends Component {
  @computed get uiStore() {
    return this.props.uiStore;
  }

  render() {
    return (
      <div className="App">
        {this.uiStore.show.entry && <Entry />}
      </div>
    );
  }
}

export default App;
