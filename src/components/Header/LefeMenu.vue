<template>
  <div>

    <el-drawer title="我是标题" :visible.sync="menu_open" :with-header="false" direction="ltr" size='200px'>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
        <img src="@/assets/img/icon2.png" alt="" height="30px" class="left_menu_icon">
        <el-menu-item index="1">
          <template slot="title">
            <svg viewBox="0 0 24 24" size="24" class="icon">
              <path d="M6 4C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569
              21 17V7C21 5.34315 19.6569 4 18 4H6ZM19 12.5L15 14.5L9 11.5L5 13.5V17C5 17.5523 5.44772 18 6
              18H18C18.5523 18 19 17.5523 19 17V12.5ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046
              14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z" transform="" fill-rule="evenodd"
                clip-rule="evenodd">
              </path>
            </svg>
            <span slot="title">插画</span>
          </template>
        </el-menu-item>
        <el-menu-item index="2">
          <svg viewBox="0 0 24 24" size="24" class="icon">
            <path d="M20 6C20 4.34315 18.6569 3 17 3L7 3C5.34315 3 4 4.34315 4 6L4 18C4 19.6569 5.34314
              21 7 21H17C18.6568 21 20 19.6569 20 18V6ZM17 5C17.5523 5 18 5.44772 18 6V11H14V5L17 5ZM13 5H7C6.44772
              5 6 5.44772 6 6L6 11H13V5ZM6 12L6 18C6 18.5523 6.44771 19 7 19H9V12H6ZM17 19H10V12H18L18 18C18 18.5523
              17.5523 19 17 19Z" transform="" fill-rule="evenodd" clip-rule="evenodd">
            </path>
          </svg>
          <span slot="title">漫画</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">小说</span>
        </el-menu-item>
        <el-menu-item index="4">
          <svg viewBox="0 0 24 24" size="24" class="icon">
            <path
              d="M14 6C14 6.74952 13.5877 7.40275 12.9775 7.74524C13.6552 8.75308 14.6342 9.85092 15.75 10C16.601 10.1137 17.5864 9.68282 18.394 9.19222C18.1465 8.8593 18 8.44676 18 8C18 6.89543 18.8954 6 20 6C21.1046 6 22 6.89543 22 8C22 9.10457 21.1046 10 20 10C19.888 10 19.7781 9.99079 19.6712 9.97309L18.7785 15.3288C18.6178 16.2932 17.7834 17 16.8057 17H7.19425C6.21658 17 5.3822 16.2932 5.22147 15.3288L4.32885 9.97309C4.22186 9.99079 4.11201 10 4 10C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6C5.10457 6 6 6.89543 6 8C6 8.44676 5.85352 8.8593 5.60596 9.19222C6.41356 9.68282 7.399 10.1137 8.25 10C9.36576 9.85092 10.3448 8.75308 11.0225 7.74524C10.4123 7.40275 10 6.74952 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z">
            </path>
            <path
              d="M7 18C6.44772 18 6 18.4477 6 19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18H7Z">
            </path>
          </svg>
          <span slot="title">排行榜</span>
        </el-menu-item>
        <el-menu-item index="5">
          <svg viewBox="0 0 24 24" size="24" class="icon">
            <path d="M2 10L5.49999 12L7.5 17L9.49999 12L13 10L9.49999 8L7.49101 3L5.49999 8L2 10Z"></path>
            <path d="M11 14L14.5 16L16.5 21L18.5 16L22 14L18.5 12L16.491 7L14.5 12L11 14Z"></path>
          </svg>
          <span slot="title">本站最新作品</span>
        </el-menu-item>
      </el-menu>

    </el-drawer>

  </div>
</template>

<script>
export default {
  name: "LefeMenu",
  props: {
    menu_open: Boolean
  },
  data () {
    return {
      is_open: this.menu_open
    }
  },
  watch: {
    menu_open (newValue) {

      this.$emit('is_open', newValue)
    }

  }
}
</script>

<style scoped>
  .left_menu_icon{
    margin-top: 15px;

  }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.icon {
  stroke: none;
  fill: currentcolor;
  width: 24px;
  height: 24px;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  margin-right: 5px;
  color: rgba(0, 0, 0, 0.32);
}
</style>