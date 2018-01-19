import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';

import 'normalize.css';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './components/App';

import store from './store';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider {...store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
};

render(App);

// ReactDOM.render(<Provider {...store}>
//   <App />
// </Provider>, document.getElementById('root'));
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}

registerServiceWorker();
