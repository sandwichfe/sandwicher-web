import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入element-ui  vue3 下的是element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

var Vue =  createApp(App)
//使用element-ui
Vue.use(ElementPlus);


Vue.use(store).use(router).use(ElementPlus).mount('#app')
