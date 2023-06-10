import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-plus';;
import 'element-plus/dist/index.css';



const app=createApp(App);

app.use(store).use(router).use(ElementUI).mount('#app');

