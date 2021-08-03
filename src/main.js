import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
Vue.use(VueRouter);
import {routes} from "./routes";
var router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes
})

import ElementUI from "element-ui"
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css';

import axios from "axios";
Vue.prototype.$axios=axios
axios.defaults.baseURL='http://localhost:8081' // 表示以后所有的请求路径前面都会默认加上这个baseURL，减少url长度

Vue.config.productionTip = false

new Vue({
  // 注意这个挂载
  router,
  render: h => h(App),
}).$mount('#app')
