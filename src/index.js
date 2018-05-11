import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import './assets/css/common.css';
import App from './components/App';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
