/*
 * @Author: laihaib
 * @Date: 2018-06-25 15:39:48
 * @Last Modified by:   laihaib
 * @Last Modified time: 2018-06-25 15:39:48
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
