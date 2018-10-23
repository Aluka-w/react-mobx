import { observable, computed, action, autorun, extendObservable } from "mobx";

class HomeStore {
  // observable 创建一个被监听的对象, 没有@observable声明的视图不能检测到变化
  @observable list = [1, 2, 3]
  // computed 类比vue的Computed, 当依赖的值有变化时会执行一遍
  @computed get filterList () {
    return this.list.filter(item => item !== 2)
  } 
  // action 改变store的值的操作
  @action changeValAction = (content) => {
    this.val = content
  }
  @action addListAction = (content) => {
    this.list.push(content)
  }
  @action deleteListAction = (index) => {
    this.list.splice(index, 1)
  }
}
// autorun mobx 内部的方法, 初始执行一次, 当依赖的值有变化时候就会执行里面的函数
// 此方法在mobx-react中被 @observer 所替代
// autorun (() => {
//   console.log(this.list)
// })
const homeStore = new HomeStore()

// extendObservable 初始为被 @observable设置为被监听值的, 可以通过extendObservable添加
// 否则自行添加的没办法被mobx检测到变化
extendObservable(homeStore, {
  val: '123'
})
export default homeStore;