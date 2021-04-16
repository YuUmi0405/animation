<!-- 背景图组件调用第三方接口实现刷新改变背景 -->
<template>
  <div class="slide">
    <transition name="fade" mode="out-in">
      <img v-bind:key="img_url" class="wallpaper" :src="img_url" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "back_banner",
  data() {
    return {
      show: true,
      img_url: require("../assets/img/default_bg.jpg")
    };
  },
  created() {
      this.$axios.get("/?lx=dongman&format=json").then(reponse => {
          this.img_url = reponse.data.imgurl
    });
  },
};
</script>

<style scoped>
.fade-enter-active,.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>