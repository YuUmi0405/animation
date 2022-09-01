<template>
  <div>
    <el-row>
      <el-col :offset="2" :span="20">
        <div class="cropper-app">
          <div style="margin-bottom: 10px">
            <img style="max-height: 600px; max-width: 600px" :src="previews.url" alt="">

          </div>
          <el-form :model="formValidate" :rules="ruleValidate" ref="formValidate" label-width="100px"
                   class="demo-ruleForm">
            <el-form-item prop="mainImage">
              <div class="list-img-box">
                <div v-if="previews.url !==''">
                  <div :style="previews.div" class="preview">
                    <img style="height: 100%;width: 100%" :src="previews.blob" alt="自定义封面">
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

        </div>

      </el-col>

    </el-row>
    <el-row>
      <el-form ref="form" :model="form" label-width="80px">

        <el-col :offset="2" :span="20">
          <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="2" :span="20">

          <el-form-item label="说明">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="2" :span="20">

          <el-form-item label="创作者" class="tag_left">
            <el-radio-group v-model="form.contribute_option">
              <el-radio label="0">本人</el-radio>
              <el-radio label="1">他人</el-radio>

            </el-radio-group>
          </el-form-item>
        </el-col>

        <el-col v-if="form.contribute_option === '1'" :offset="2" :span="6">
          <el-form-item label="作者姓名">
            <el-input v-model="form.author_name"></el-input>
          </el-form-item>
        </el-col>

        <el-col :offset="2" :span="20">
          <el-form-item label="标签" class="tag_left">


            <el-tag
                :key="tag"
                v-for="tag in form.tags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
              {{ tag }}
            </el-tag>

            <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

          </el-form-item>

        </el-col>
        <el-col :offset="2" :span="20">
          <el-form-item label="推荐标签" class="tag_left">

            <el-tag
                :key="tag"
                v-for="tag in form.tags"
                :disable-transitions="false"
            >
              {{ tag }}
            </el-tag>
          </el-form-item>

        </el-col>

        <el-col :offset="2" :span="20">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">投稿</el-button>
          </el-form-item>

        </el-col>

      </el-form>

    </el-row>

  </div>

</template>

<script>
import CropperImage from "@/components/Contribute/Cropper.vue";
import {objectToFormData} from "../assets/js/utils";

export default {
  name: "Tailoring",
  components: {CropperImage},
  data() {
    return {
      form: {
        title: '',
        author_name: "",
        contribute_option: '',
        desc: '',
        tags: ['标签一', '标签二', '标签三'],//动态标签
      },
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

      recommendTags: [], //推荐标签
      inputVisible: false,
      inputValue: ''
      // thumbnail: ""
    }
  },
  methods: {
    onSubmit() {
      let param = new FormData();
      // console.log(...this.form)
      // param.append(...this.form)
      param = objectToFormData(this.form)
      // param.append()
      param.append("original_img", this.previews.original_img)
      param.append("thumbnail_img", this.previews.thumbnail_img)
      let result = this.$api.upload_image(param)
      // result.then(res => {
      //   console.log(res)
      // })
    },
    handleClose(tag) {
      this.form.tags.splice(this.form.tags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.form.tags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
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
    },

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
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

}

.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.tag_left {
  text-align: left;
}
</style>
