/*
 * @Author: laihaib
 * @Date: 2018-06-25 15:39:48
 * @Last Modified by: laihaib
 * @Last Modified time: 2018-07-02 17:05:01
 */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [thunkMiddleware, createLogger()];

export default function configStore() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );
  return store;
}
