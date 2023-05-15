import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  // 相当于data
  state: {
    counter: 10,
    page:{
      pageNum:1,
      pageSize:20
  },
  campList:[]

  },
  // 可替代computed属性
  getters: {
    newCounter(state){
      return state.counter+100;
    }
  },
  // 相当于 methods,修改state中的变量
  mutations: {
    // 默认第一个参数state对象
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    responseData(state,resp){
      state.campList=resp;
    }
  },
  actions: {
    // 竟然必须要通过mutations的方法才能修改state中的属性，这样未免太麻烦了吧
    async getCoh2(context){
      const {data}=await axios({
          url:`/CoH2/${context.state.page.pageNum}/${context.state.page.pageSize}/`,
          method:'get',
      });
      if(data.success){
        context.commit('responseData',data.data.list)
         
      }
  },
  },
  modules: {
  }
})
