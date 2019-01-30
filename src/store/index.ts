import DataStore from './DataStore';

const dataStore = new DataStore();

const defults = {
  score: 0,
  users: [{ id: '1', name: '乐乐', age: 1 }, { id: '2', name: '饭饭', age: 2 }]
};

dataStore.init(defults);

const store = {
  dataStore
};

export default store;
