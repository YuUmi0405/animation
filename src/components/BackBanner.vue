<!-- 背景图组件调用第三方接口实现刷新改变背景 -->
<template>
  <div class="slide">
    <transition name="fade" mode="out-in">
      <img v-bind:key="img_url" class="wallpaper" :src="img_url"/>
      <!--            <img v-bind:key="next_url" v-show="show" class="wallpaper" :src="next_url"/>-->
    </transition>

  </div>
</template>

<script>
export default {
  name: "back_banner",
  data() {
    return {
      img_url: require("../assets/img/icon2.png"),
      img_list: [],
      flag: 0
    };
  },
  created() {
    //获取首页背景轮播图
    let res_data
    res_data = this.$api.get_banner(1, 10)
    res_data.then(res => {
      console.log(res)
      res.data.data.image_urls.forEach(item => {
        this.img_list.push(item)
      })
    })


  },
  mounted() {
    setInterval(() => {
      this.img_url = this.img_list[this.flag]
      this.flag += 1
      if (this.flag === 10) {
        this.flag = 0
      }
    }, 15000)

  },
  methods: {
    sleep(d) {
      return new Promise((resolve) => setTimeout(resolve, d))
    }
  }
};
</script>

<style scoped>
.fade-leave-active {
  transition: opacity 1s;
}

.fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 60%;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>