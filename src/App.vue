<template>
  <div id="app">
    <router-view></router-view>
        <Footer></Footer>
  </div>
</template>

<script>


import {mapState} from "vuex";
import {get_user_info} from "./assets/js/api";
import Footer from "./components/Footer";

export default {
  name: 'app',
  computed: mapState({
    user_info: state => state.user_info
  }),
  components: {
    Footer
  },
  created() {
    //如果数据既不在sessionStorage也不再vuex中，发送请求，获取数据
    if (!this.user_info && !sessionStorage.getItem('user_info')) {
      let result = get_user_info()
      result.then(res => {
        this.$store.dispatch('saveUserInfo', res.data.data);//请求回来后，把用户信息存储到VUEX里
      })
    }

    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('user_info')) {
      this.$store.dispatch('saveUserInfo', JSON.parse(sessionStorage.getItem('user_info')));//请求回来后，把用户信息存储到VUEX里

    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里,beforeunload事件在页面刷新时先触发
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('user_info', JSON.stringify(this.user_info))
    })
  }
}
</script>

<style>
#app {
  font-family: sans-serif, "宋体";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /*background: yellow;*/
  position: absolute;
}
</style>
