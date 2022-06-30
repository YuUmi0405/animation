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
          <el-avatar class="avatar" :size="35" :src="avatar"/>
          <i class="el-icon-arrow-down el-icon--right icon_down"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <!-- 下拉设置 -->
          <el-dropdown-item icon="el-icon-star-off">我的收藏</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">
           <router-link to="/user_detail"><span style="color:#409EFF">用户设置</span></router-link>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-back">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </span>
</template>

<script>
    import {getToken} from "../../utils/auth";
    import {mapState} from 'vuex'   //导入映射
    export default {
        name: "Avatar",
        computed: mapState({
            user_info: state => state.user_info
        })
        ,
        data() {
            return {
                is_login: false,
                avatar: null,
            };
        },
        created() {
            let token = getToken()
            this.is_login = !!token;
        },
        mounted() {
            this.avatar = this.$api.base_url + this.user_info.avatar
        }
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