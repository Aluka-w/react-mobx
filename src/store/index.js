// 导入各个分store
import homeStore from '../pages/Home/store';
import {  } from "mobx";
// 创建根store, 并且做合并
class Store {
  constructor () {
    this.homeStore = homeStore
  }
}
const store = new Store()
export default store;