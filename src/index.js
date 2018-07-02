import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'mobx-react';
import { Provider } from 'react-redux';

import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';
import './assets/css/common.css';
import configStore from './store';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
