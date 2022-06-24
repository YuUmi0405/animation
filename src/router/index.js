import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register'
import Login from "../views/Login";
import Home from "../views/Home";
import ForgetPasswd from "../views/ForgetPasswd";
import ImageDetail from "../views/ImageDetail";
import {Message} from 'element-ui'
import {getToken} from "../utils/auth";

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
        path: '/image_detail',
        name: 'ImageDetail',
        component: ImageDetail
    },


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
        // alert("我走了")
        let token = getToken("pic_token")
        // 判断token是否为空如果为空则跳转到登录页 如果有则放行
        if (!token) {
            Message.error({
                message: "请先登录",
                duration: 1000
            })
            next({path: '/login'});
        } else {
            next();
        }
    }
});

export default router
