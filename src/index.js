import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './containers/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/common.css';

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
