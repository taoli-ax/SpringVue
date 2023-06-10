import { createStore } from 'vuex';
import camp from './modules/camp';
import counter from './modules/counter';
import germany from './modules/germany';
import american from './modules/american';
import british from './modules/british';
import soviet from './modules/soviet';
import newGermanCommander from './modules/newGermanCommander';
export default createStore({
  // 可替代computed属性
 
  modules: {
    camp,
    counter,
    germany,
    american,
    british,
    soviet,
    newGermanCommander
  }
})
