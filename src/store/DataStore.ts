import { observable, action, computed } from 'mobx';
import { User, UserModel } from '../models/UserModel';

export default class DataStore {
  @observable
  score: number = 0; //得分， 是一个数组

  @observable
  page: number = 0; //页面

  @observable
  users: User[] = [];

  @action
  init({ score, users }: any) {
    this.score = score;
    this.users = users.map((user: any): User => new UserModel(user));
  }

  @computed
  get finScore() {
    return this.score;
  }
}
