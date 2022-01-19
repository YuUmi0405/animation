<template>
  <span class="block">
    <!--登录前-->
    <div v-if="!is_login">
      <router-link to="login" class="_btn"><el-button type="primary" size="mini">登录</el-button></router-link>
      <router-link to="register" class="_btn"><el-button type="primary" size="mini">注册</el-button></router-link>
    </div>
    <!--登录后-->
    <div v-else>
      <el-dropdown trigger="click">
        <div class="el-dropdown-link">
          <el-avatar class="avatar" :size="35" src="http://127.0.0.1:8000/media/avatar/default.png"/>
          <i class="el-icon-arrow-down el-icon--right icon_down"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <!-- 下拉设置 -->
          <el-dropdown-item icon="el-icon-star-off">我的收藏</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">用户设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-back">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </span>
</template>

<script>
export default {
  name: "Avatar",
  data() {
    return {
      is_login: false,
    };
  },
};
</script>

<style scoped>
.icon_down {
  stroke: none;
  fill: currentcolor;
  width: 16px;
  height: 30px;
  line-height: 0;
  margin-left: 10px;
  margin-bottom: 0;
  vertical-align: middle;
}
.avatar {
  margin-top: 10px;
}
._btn {
  margin-right: 5px;
}
</style>