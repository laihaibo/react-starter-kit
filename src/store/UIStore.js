import { observable, action } from 'mobx';

class UIStore {
  @observable color = 'red';

  constructor() {
    this.updateColor('black');
  }

  @action
  updateColor(color) {
    // 页面显示，如何和要显示的页相同则，则显示，否则不显示
    this.color = color;
  }
}

export default UIStore;
