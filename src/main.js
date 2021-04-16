import Vue from 'vue'
import App from './App.vue'
import cookies from 'vue-cookies'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import '@/assets/css/global.css'
import settings from './assets/js/settings.js'
import router from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.prototype.$cookies = cookies;
Vue.prototype.$settings = settings
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// 解决第三方接口跨域问题
axios.defaults.baseURL = '/api'


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
