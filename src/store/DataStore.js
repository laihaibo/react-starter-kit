/*
 * @Author: laihaib
 * @Date: 2018-01-19 15:53:34
 * @Last Modified by: laihaib
 * @Last Modified time: 2018-01-19 17:14:12
 */

import { observable, action, computed } from 'mobx';

import Models from '../model/index';

const { MeModel } = Models;

class DataStore {
  @observable me = {};

  @computed get id() {
    // 计算属性，输入是否和默认的相等
    return this.me.uuid;
  };

  @action init({me}) {
    this.me = new MeModel(me);
  };
}

export default DataStore;