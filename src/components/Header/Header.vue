<template>
  <div id="header" style="margin-top: 10px; min-width: 1200px">
    <el-row>
      <el-col :span="1">
        <MenuIcon></MenuIcon>
      </el-col>
      <el-col :span="2">
        <!--Logo-->
        <img src="" height="30px" style="margin-top: 5px"/>
      </el-col>
      <!--搜索-->
      <el-col :span="3" class="search">
        <el-input placeholder="UID">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="3" class="search">
        <el-input placeholder="PID">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="4" class="search">
        <el-input placeholder="搜索作品">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="2">
        <span class="add_member">加入会员</span>
      </el-col>
      <el-col :span="2">
        <el-dropdown trigger="click">
          <el-button round>
            投稿作品<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-picture-outline">插画</el-dropdown-item>
            <el-dropdown-item icon="el-icon-menu">漫画</el-dropdown-item>
            <el-dropdown-item icon="el-icon-reading">小说</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2">
        <span class="msg_bell"><el-button icon="el-icon-message" circle size="small"></el-button></span>
        <span class="msg_bell"><el-button icon="el-icon-bell" circle size="small"></el-button></span>
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
  components: {
    MenuIcon,
    Avatar
  },
};
</script>

<style scoped>
.add_member {
  line-height: 40px;
  font-size: 14px;
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
.msg_bell {
  margin-right: 10px;
}
</style>