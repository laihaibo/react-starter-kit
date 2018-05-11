/*
 * @Author: laihaib
 * @Date: 2018-01-19 16:08:52
 * @Last Modified by: laihaib
 * @Last Modified time: 2018-05-11 14:13:01
 */

import { observable, action } from 'mobx';

class UIStore {
  @observable
  show = {
    entry: false
  };

  @action
  initShow(page) {
    // 页面显示，如何和要显示的页相同则，则显示，否则不显示
    for (let key in this.show) {
      key === page ? (this.show[key] = true) : (this.show[key] = false);
    }
  }
}

export default UIStore;
