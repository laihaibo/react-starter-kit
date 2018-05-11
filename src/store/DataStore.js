/*
 * @Author: laihaib
 * @Date: 2018-01-19 15:53:34
 * @Last Modified by: laihaib
 * @Last Modified time: 2018-05-11 14:14:47
 */

import { observable, action, computed } from 'mobx';

import { START, END, NOW, getRange } from '../untils/times';

import api from '../api';

import Models from '../model/index';

const { MeModel } = Models;

class DataStore {
  @observable me = {};

  @observable startToNow;

  @observable startToEnd;

  @observable nowToEnd;

  constructor() {
    this.init(api.data);

    this.nowToEnd = getRange(NOW, END);
    this.startToEnd = getRange(START, END);
    this.startToNow = getRange(START, NOW);
  }

  @computed
  get id() {
    return this.me.uuid;
  }

  @computed
  get pasted() {
    return parseFloat((this.startToNow / this.startToEnd * 100).toFixed(2), 10);
  }

  @action
  init({ me }) {
    this.me = new MeModel(me);
  }
}

export default DataStore;
