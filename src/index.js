import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

// 热替换
if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}
// webworker
registerServiceWorker();