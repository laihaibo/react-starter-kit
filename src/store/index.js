/*
 * @Author: laihaib
 * @Date: 2018-01-19 15:57:01
 * @Last Modified by: laihaib
 * @Last Modified time: 2018-01-19 16:34:29
 */

import DataStore from './DataStore';
import UIStore from './UIStore';

import api from '../api';

const dataStore = new DataStore();
const uiStore = new UIStore();


dataStore.init(api.data);
uiStore.initShow('entry');

const store = {
  dataStore,
  uiStore
};

export default store;