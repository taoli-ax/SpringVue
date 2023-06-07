export default {
    namespaced:true,
    state:{
        counter:10
    },
    getters: {
        newCounter(state){
          return state.counter+100;
        }
      },
    mutations: {
    // 默认第一个参数state对象
    increment(state){
        state.counter++;
    },
    decrement(state){
        state.counter--;
    }
    }
}