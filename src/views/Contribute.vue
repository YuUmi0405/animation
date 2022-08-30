<template>
  <div class="cropper-app">
    <img style="max-height: 600px; max-width: 600px" :src="previews.url" alt="">
    <el-form :model="formValidate" :rules="ruleValidate" ref="formValidate" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="mainImage">
        <div class="list-img-box">
          <div v-if="previews.url !==''">
            {{ previews.blob }}
            <div :style="previews.div" class="preview">
              <img :src="previews.blob" alt="自定义封面">
            </div>
          </div>
          <div v-else class="upload-btn" style="height: 120px;" @click="uploadPicture('flagImg')">
            <i class="el-icon-plus" style="font-size: 30px;"></i>
            <span>图片上传</span>
          </div>
        </div>
        <input type="hidden" v-model="formValidate.mainImage" placeholder="请添加封面">
      </el-form-item>
    </el-form>
    <!-- 剪裁组件弹窗 -->
    <el-dialog
        title="缩略图"
        :visible.sync="cropperModel"
        width="950px"
        center
    >
      <cropper-image
          :Name="cropperName"
          @uploadImgSuccess="handleUploadSuccess"
          ref="child">
      </cropper-image>
    </el-dialog>
    <!--查看大封面-->
    <el-dialog
        title="查看大封面"
        :visible.sync="imgVisible"
        center>
      <img :src="imgName" v-if="imgVisible" style="width: 100%" alt="查看">
    </el-dialog>
  </div>
</template>

<script>
import CropperImage from "@/components/Contribute/Cropper.vue";

export default {
  name: "Tailoring",
  components: {CropperImage},
  data() {
    return {
      formValidate: {
        mainImage: '',
      },
      ruleValidate: {
        mainImage: [
          {required: true, message: '请上传封面', trigger: 'blur'}
        ],
      },
      //裁切图片参数
      cropperModel: false,
      cropperName: '',
      imgName: '',
      imgVisible: false,
      previews: {
        url: '',
      },
      // thumbnail: ""
    }
  },
  methods: {
    //封面设置
    uploadPicture(name) {
      this.cropperName = name;
      this.cropperModel = true;
    },
    //图片上传成功后
    handleUploadSuccess(data) {
      this.previews = data
      // this.thumbnail = res
      this.cropperModel = false;
      // console.log(data.url)
    }
  }
}
</script>
<style scoped>
.upload-list-cover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  background: rgba(0, 0, 0, .6);
  opacity: 0;
  transition: opacity 1s;
}

.cover_icon {
  font-size: 30px;
}

.upload-btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 1px #cccccc;
}

.upload-btn:hover {
  border: 1px solid #69b7ed;
}

.upload-btn i {
  margin: 5px;
}

.preview {
  overflow: hidden;
  border: 1px solid #67c23a;
  background: #cccccc;
}
</style>
