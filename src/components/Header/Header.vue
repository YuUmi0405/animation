<template>
  <div id="header" style="margin-top: 10px;min-width: 1200px">
    <el-row>
      <el-col :span="1">
        <MenuIcon></MenuIcon>
      </el-col>

      <el-col :span="2">
        <img src="@/assets/img/icon2.png" height="30px" style="margin-top: 5px">
      </el-col>
      <el-col :offset="5" :span="5">
        <SearchBox></SearchBox>
      </el-col>
      <el-col :offset="3" :span="2">
        <span class="add_member">加入会员</span>
      </el-col>
      <el-col :span="2">
        <span class="work_submitted">作品投稿</span>
      </el-col>
      <el-col :span="1">
        <MessageIcon></MessageIcon>
      </el-col>
      <el-col :span="2">
        <Avatar></Avatar>
      </el-col>

    </el-row>

  </div>
</template>

<script>
import SearchBox from "./SearchBox";
import MenuIcon from "./MenuIcon";
import MessageIcon from "./MessageIcon"
import Avatar from "./Avatar"

export default {
  name: "Header",
  components: {
    SearchBox,
    MenuIcon,
    MessageIcon,
    Avatar
  }
}
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
.message_icon {
  line-height: 40px;
  font-size: 20px;
}
</style>