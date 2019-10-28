import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import fastclick from "fastclick"
import VueLazyload from 'vue-lazyload'
import db from './utils/localstorage'
import { util } from './utils/util.js'

import 'vant/lib/index.css';
import  'amfe-flexible' // 适配

Vue.use(Vant)
Vue.use(VueLazyload)

// 去除移动端点击200ms延迟
fastclick.attach(document.body);

Vue.prototype.$db = db

Vue.prototype.util = util

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
