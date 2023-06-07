import { createStore } from 'vuex';
import camp from './modules/camp';
import counter from './modules/counter';
export default createStore({
  // 可替代computed属性
 
  modules: {
    camp,
    counter
  }
})
