import router from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/global.css'
import api from './assets/js/api.js'
import 'swiper/swiper-bundle.css'


Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$throw = (error) => errorHandler(error, this);


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
