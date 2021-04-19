import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home'
import Register from '../views/Register'
import Login from "../views/Login";
import Home from "../views/Home";
import ForgetPasswd from "../views/ForgetPasswd";

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
  },
    {
    path: '/forget',
    name: 'Forget',
    component: ForgetPasswd
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
