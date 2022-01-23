<template>
  <span id="menu_icon" class="menu_icon">
    <button title="菜单" class="btn" @click="menu_show">
      <svg viewBox="0 0 24 24" class="cnPRWk">
        <path d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20
                     7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11
                     5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772
                     13 4 12.5523 4 12ZM5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5
                     18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H5Z"></path>
      </svg>
    </button>
    <LeftMenu :menu_open.sync='left_menu_open' @is_open='is_open'></LeftMenu>

  </span>

</template>

<script>
import '@/assets/css/header_btn.css'
import LeftMenu from './LeftMenu'
export default {
  name: "MenuIcon",
  data () {
    return {
      is_show: true,
      left_menu_open: false
    }
  },
  methods: {
    menu_show () {
      this.left_menu_open = !this.left_menu_open

    }, is_open (newValue) {
      this.left_menu_open = newValue
    }

  },
  components: {
    LeftMenu
  }
}
</script>

<style scoped>
.cnPRWk {
  stroke: none;
  fill: currentcolor;
  width: 24px;
  height: 24px;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
}
</style> 