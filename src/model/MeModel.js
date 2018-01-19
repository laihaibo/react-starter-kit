/*
 * @Author: laihaib
 * @Date: 2018-01-19 15:50:43
 * @Last Modified by: laihaib
 * @Last Modified time: 2018-01-19 17:13:44
 */

import uuid from '../untils/uuid';

class MeModel {
  /**
   * 创建一个MeModel实例
   * @param {object} store 传入TodoStore，获取领域模型状态和方法
   * @param {number} id 用于前端操作的实例id
   * @param {string} name 姓名
   * @memberof MeModel
  */

  constructor({id, name}) {
    this.nickname = name;
    this.id = id;
    this.uuid = uuid();
  }
}

export default MeModel;