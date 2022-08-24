<template>
  <div style="margin-top:20px;">

    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt=""/>
    </div>


    <el-container>
      <el-aside width="356px"></el-aside>
      <el-aside width="250px" class="user_menu_left">
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
                    <el-col :span="4" class="display_img">
                      <el-image style="width: 100%;height: 100%" :src="img_url" :fit="'fill'"></el-image>
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
import '@/assets/css/global.css'

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
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      img_url_list: [],
      imgSrc: require('@/assets/img/user_detail_background.jpg')

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

<style>
.user_header {
  background-image: url("/src/assets/img/icon2.png");
}

.avatar-uploader .el-upload {
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

.user_menu_left {
  /* Rectangle 10 */

  position: absolute;
  width: 376px;
  height: 821px;
  left: 66px;
  top: 142px;

  background: #FFFFFF;
  box-shadow: 9px 4px 21px rgba(202, 202, 202, 0.25);
  border-radius: 30px;
  z-index: 10;
}


</style>