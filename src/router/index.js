import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register'
import Login from "../views/Login";
import Home from "../views/Home";
import ForgetPasswd from "../views/ForgetPasswd";
import ImageDetail from "../views/ImageDetail";
import UserDetail from "../views/UserDetail";
import Contribute from "../views/Contribute.vue";
import {Message} from 'element-ui'
import {getToken} from "../utils/auth";
import {get_user_info} from "../assets/js/api";
import {store} from "../main";
// import {Navbar} from "../components/navbar";
import VueCropper from "vue-cropper";

Vue.use(VueCropper);

Vue.use(VueRouter)

const routes = [
    {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/forget',
        name: 'Forget',
        component: ForgetPasswd
    }, {
        path: '/image_detail/:id',
        name: 'ImageDetail',
        component: ImageDetail
    }, {
        path: '/user_detail',
        name: 'UserDetail',
        component: UserDetail
    }, {
        path: '/contribute',
        name: 'contribute',
        component: Contribute
    }


]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
//如果去往登录页则放行
    if (to.path === '/login' || to.path === '/register') {
        next();
    } else {

        // 从cookie里获取token
        let token = getToken()
        // 判断token是否为空如果为空则跳转到登录页 如果有则放行
        if (!token) {
            Message.error({
                message: "请先登录",
                duration: 1000
            })
            next({path: '/login'});
        } else {
            //如果数据既不在sessionStorage也不再vuex中，发送请求，获取数据
            if (!store.state.user_info && !sessionStorage.getItem('user_info')) {
                let result = get_user_info()
                result.then(res => {
                    store.dispatch('saveUserInfo', res.data.data);//请求回来后，把用户信息存储到VUEX里
                    next();
                })
            } else {
                next();
            }

        }
    }
});

export default router
