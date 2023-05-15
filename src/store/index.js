import { createStore } from 'vuex'

export default createStore({
  // 相当于data
  state: {
    counter: 10
  },
  getters: {
  },
  // 相当于 methods,修改state中的变量
  mutations: {
    // 默认第一个参数state对象
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    }
  },
  actions: {
  },
  modules: {
  }
})
