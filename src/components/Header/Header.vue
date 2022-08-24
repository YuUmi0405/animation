<template>
  <div id="header" style="margin-top: 10px; min-width: 1200px;height: 55px">
    <el-row>
      <el-col :span="1">
        <MenuIcon></MenuIcon>
      </el-col>
      <el-col :span="2">
        <!--Logo-->
        <router-link to="/">
          <img v-bind:key="img_url" :src="img_url" style="height:50px"/>
        </router-link>
      </el-col>
      <el-col :offset="5" :span="5" class="search">
        <el-input placeholder="搜索作品" class="search_input">
          <i slot="prefix" class="el-input__icon el-icon-search "></i>
        </el-input>
      </el-col>
      <el-col :offset="2" :span="1">
        <span class="add_member">加入会员</span>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-dropdown trigger="click">
          <el-button round>
            投稿作品<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-picture-outline"
            >插画
            </el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-menu">漫画</el-dropdown-item>
            <el-dropdown-item icon="el-icon-reading">小说</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2">
        <span class="msg_bell">
          <el-button icon="el-icon-message" circle size="small"></el-button>
        </span>
        <span class="msg_bell">
          <el-button icon="el-icon-bell" circle size="small"></el-button>
        </span>
      </el-col>
      <el-col :span="2">
        <Avatar></Avatar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuIcon from "./MenuIcon";
import Avatar from "./Avatar";

export default {
  name: "Header",
  data() {
    return {
      img_url: require("@/assets/img/picshare.png"),
    };
  },
  mounted() {
    // console.log(this.$store.state.user)
  },
  components: {
    MenuIcon,
    Avatar,
  },
};
</script>

<style scoped>
.add_member {
  display: block;
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  color: rgb(253, 158, 22);
  white-space: nowrap;
}

.work_submitted {
  line-height: 40px;
  font-size: 14px;
  white-space: nowrap;
}

.search {
  margin-right: 10px;
}

/deep/ .el-input__inner {
  /* Rectangle 1 */
  border: 1px solid #A7A7A7;
  border-radius: 35px;

}

.msg_bell {
  margin-right: 10px;
}

.el-row {
  height: 100%;
  text-align: center;
}

#header div, span {
  line-height: 50px;
}

</style>