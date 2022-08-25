<template>
  <div class="page">
    <div class="nav">
      <div v-for="(item,index) in navList" :key="index" :class="index == active?'active':''" @mousemove="active = index" @mouseout="active = null"
        @click="toPage(index)">{{ item.name }}
      </div>
    </div>
    <div style="height:600px">
<!--      <el-image class="img" width="100%" :src="require('@/assets/img/banner-1.jpg')" fit="cover">-->
<!--        </el-image>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data () {
    return {
      active: null,
      navList: [
        { name: '首页' },
        { name: '产品列表' },
        { name: '产品详情' },
        { name: '购物车' },
        { name: '加入我们' },
        { name: '企业文化' },
      ]
    }
  },
  created () {
    this.active = this.$route.query.active
  },
  methods: {
    toPage (e) {
      console.log(e, 'e')
      switch (e) {
        case 0:
          this.$router.push({ path: '/index', query: { active: this.active } })
          break
        case 1:
          this.$router.push({ path: '/index', query: { active: this.active } })
          break
        case 2:
          this.$router.push({ path: '/food', query: { active: this.active } })
          break
        case 3:
          this.$router.push({ path: '/me', query: { active: this.active } })
          break
        case 4:
          this.$router.push({ path: '/joinUs' })
          break

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    z-index: 9;
    position: absolute;
    top: 20px;
    font-size: 20px;
    cursor: pointer;
    div{
      width: 150px;
      text-align: center;
      line-height: 50px;
    }
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .active {
    background: #486341;
    color: #ffffff;
    // padding: 0 5px;
    //min-width: 120px;
  }
}
</style>
