<template>
  <span class="block">

      <el-dropdown trigger="click">
        <div class="el-dropdown-link">
          <el-avatar :size="40  " src="http://127.0.0.1:8000/media/avatar/default.png"></el-avatar>
          <i class="el-icon-arrow-down el-icon--right icon_down"></i>
        </div>

        <el-dropdown-menu slot="dropdown">
          <!-- 下拉设置 -->
          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>


  </span>
</template>

<script>
export default {
  name: "Avatar"

}
</script>

<style scoped>
.icon_down {
  stroke: none;
  fill: currentcolor;
  width: 16px;
  height: 30px;
  line-height: 0;
  margin-left: 10px;
  margin-bottom: 0px;
  vertical-align: middle;
}
</style>