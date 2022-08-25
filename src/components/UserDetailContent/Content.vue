<template>
  <div style="margin-top:20px;">

    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt=""/>
    </div>


    <el-container>
      <el-aside width="356px"></el-aside>
      <el-aside width="250px" class="user_left_menu">
        <el-upload
            class="avatar-uploader"
            :action="this.$api.upload_avator_api"
            :show-file-list="false"
            :headers="heads"
            :name="avatar_name"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="user_left_menu_distance">
          <span class="user_name">sadnesspineapple</span>
        </div>
        <div class="user_left_menu_distance">
          <span style="font-family: 'GothamBook';">{{ concern_num }}已关注</span>
        </div>
        <div class="user_left_menu_distance">
          <el-button class="user_left_menu_button" style="background: #66CCFF;">
            <svg t="1661327062536" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2082" width="17px" style="position:relative; top:4px;">
              <path
                  d="M684.202667 117.248c15.893333-15.872 42.154667-15.36 58.922666 1.408l90.517334 90.517333c16.661333 16.661333 17.344 42.986667 1.429333 58.922667l-445.653333 445.653333c-7.936 7.914667-23.104 16.746667-34.218667 19.776l-143.701333 39.253334c-21.909333 5.994667-35.114667-7.104-29.568-28.949334l37.248-146.773333c2.773333-10.944 11.562667-26.346667 19.392-34.176l445.653333-445.653333zM268.736 593.066667c-2.901333 2.901333-8.106667 12.074667-9.130667 16.021333l-29.12 114.773333 111.957334-30.570666c4.437333-1.216 13.632-6.549333 16.810666-9.728l445.653334-445.653334-90.517334-90.496-445.653333 445.653334zM682.794667 178.986667l90.517333 90.517333-30.186667 30.186667-90.496-90.517334 30.165334-30.165333z m-362.026667 362.048l90.496 90.517333-30.165333 30.165333-90.517334-90.496 30.165334-30.186666zM170.666667 874.666667c0-11.776 9.429333-21.333333 21.461333-21.333334h661.077333a21.333333 21.333333 0 1 1 0 42.666667H192.128A21.333333 21.333333 0 0 1 170.666667 874.666667z"
                  fill="#ffffff" p-id="2083"></path>
            </svg>
            <span>
              修改您的个人信息
            </span>

          </el-button>
        </div>
        <div class="user_left_menu_distance">
          <el-button class="user_left_menu_button" style="background: #F8C541;">加入会员</el-button>
        </div>
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main>
          <!--收藏图片-->
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我的收藏" name="first">

              <!--设置图片-->
              <div class="demo-image">
                <el-row>
                  <div class="block" v-for="img_url in img_url_list" :key="img_url">
                    <el-col :span="4" class="display_img_col">
                      <el-image class="display_img" :src="img_url" :fit="'cover'"></el-image>
                    </el-col>
                  </div>
                </el-row>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>


  </div>
</template>

<script>
import {mapState} from "vuex";
import {get_static_image_url, valid_status} from "../../assets/js/utils";
import {getToken} from "../../utils/auth";
import '@/assets/css/img.css'

export default {
  name: "Content",
  computed: mapState({
    user_info: state => state.user_info
  }),
  data() {
    return {
      imageUrl: '',
      heads: {
        "Authorization": getToken()
      },
      avatar_name: "avatar",
      activeName: 'first',
      background_img: require("@/assets/img/icon2.png"),
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      img_url_list: [],
      imgSrc: require('@/assets/img/user_detail_background.jpg'),
      concern_num: 1

    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    get_user_rel_images() {
      //    获取用户收藏的图片信息
      let result = this.$api.get_user_rel_image(this.$page, this.$page_size)
      result.then(res => {
        res.data.data.forEach(r => {
          this.img_url_list.push(get_static_image_url(r.url))
        })
      })
    }
  },
  mounted() {
    this.imageUrl = this.$api.base_url + this.user_info.avatar
    this.get_user_rel_images()
  }
}
</script>

<style scoped>
.user_header {
  background-image: url("/src/assets/img/icon2.png");
}

/deep/ .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 40px;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.background {
  left: 0;
  top: 0;
  width: 100%;
  height: 150px; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
}

.user_left_menu {
  /* Rectangle 10 */

  position: absolute;
  width: 376px;
  height: 600px;
  left: 66px;
  top: 100px;

  background: #FFFFFF;
  box-shadow: 9px 4px 21px rgba(202, 202, 202, 0.25);
  border-radius: 30px;
  z-index: 10;
}

.user_name {
  font-family: 'GothamBold', "微软雅黑";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  color: #000000;

  mix-blend-mode: normal;
}

.user_left_menu_distance {
  margin-top: 10px;
}

.user_left_menu_button {
  width: 80%;
  color: #FFFFFF;
}

/deep/ .el-button {
  border-radius: 20px;
}
/deep/ .el-button:hover{
  color: #FFFFFF;
}
/deep/ .el-image__inner{
  height: 184px;
  width: 184px;
}

</style>