import router from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/global.css'
import api from './assets/js/api.js'
import 'swiper/swiper-bundle.css'
import da from "element-ui/src/locale/lang/da";

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$throw = (error) => errorHandler(error, this);
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user_info:null,
        username: "",
        avatar: ""
    },
    mutations: {
        USER_INFO(state, info) {
            state.user_info = info
        }
    },
    actions: {
        saveUserInfo({commit}, data) {
            commit('USER_INFO', data)
        },

    },
});

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
