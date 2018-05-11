/*
 * @Author: laihaib
 * @Date: 2018-01-19 15:57:01
 * @Last Modified by: laihaib
 * @Last Modified time: 2018-05-11 14:10:01
 */

import DataStore from './DataStore';
import UIStore from './UIStore';

const dataStore = new DataStore();
const uiStore = new UIStore();

const store = {
  dataStore,
  uiStore
};

export default store;
