/*
 * @Author: laihaib
 * @Date: 2018-06-25 15:36:12
 * @Last Modified by: laihaib
 * @Last Modified time: 2018-06-25 15:37:00
 */

import uuid from '../utils/uuid';

export class UserModel {
  /**
   * 创建一个UserModel实例
   * @param {object} store 传入TodoStore，获取领域模型状态和方法
   * @param {number} id 用于前端操作的实例id
   * @param {string} name 姓名
   * @memberof UserModel
   */

  constructor({ id, name }) {
    this.nickname = name;
    this.id = id;
    this.uuid = uuid();
  }
}
