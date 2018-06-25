/*
 * @Author: laihaib
 * @Date: 2018-06-25 15:40:38
 * @Last Modified by: laihaib
 * @Last Modified time: 2018-06-25 15:46:39
 */

import { observable, action, computed } from 'mobx';

import { UserModel } from '../model/UserModel';

import { users } from '../api';

class DataStore {
  @observable users = [];
  @observable me = {};

  constructor() {
    this.updateUsers(users);
  }

  @computed
  get id() {
    return this.me.uuid;
  }

  @action
  updateUsers(arr) {
    this.users = arr.map(u => new UserModel(u));
  }
}

export default DataStore;
