import { createStore } from 'vuex';
import camp from './modules/camp';
import counter from './modules/counter';
import germany from './modules/germany';
import newGermanCommander from './modules/newGermanCommander';
export default createStore({
  // 可替代computed属性
 
  modules: {
    camp,
    counter,
    germany,
    newGermanCommander
  }
})
