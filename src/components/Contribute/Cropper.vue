<template>
  <div class="cropper-content">
    <!--预览效果图-->
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="16" style="height: 300px">
            <vue-cropper
                ref="cropper"
                :img="option.img"
                :outputSize="option.outputSize"
                :outputType="option.outputType"
                :info="option.info"
                :canScale="option.canScale"
                :autoCrop="option.autoCrop"
                :autoCropWidth="option.autoCropWidth"
                :autoCropHeight="option.autoCropHeight"
                :fixed="option.fixed"
                :fixedNumber="option.fixedNumber"
                :full="option.full"
                :fixedBox="option.fixedBox"
                :canMove="option.canMove"
                :canMoveBox="option.canMoveBox"
                :original="option.original"
                :centerBox="option.centerBox"
                :height="option.height"
                :infoTrue="option.infoTrue"
                :maxImgSize="option.maxImgSize"
                :enlarge="option.enlarge"
                :mode="option.mode"
                @realTime="realTime"
                @imgLoad="imgLoad">
            </vue-cropper>

          </el-col>
          <el-col :offset="2" :span="6">
            <!--预览效果图-->
            <div class="show-preview">
              <div :style="previews.div" class="preview">
                <img :src="previews.url" :style="previews.img">
              </div>
            </div>
          </el-col>
        </el-row>

        <div class="cropper-box">


          <!--底部操作工具按钮-->
          <div class="footer-btn">
            <div class="scope-btn">
              <label class="upload_btn" for="uploads">图片上传</label>
              <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);"
                     accept="image/png, image/jpeg, image/gif, image/jpg" @change="selectImg($event)">
              <!--              <el-button size="mini" type="danger" plain icon="el-icon-zoom-in" @click="changeScale(1)">放大</el-button>-->
              <!--              <el-button size="mini" type="danger" plain icon="el-icon-zoom-out" @click="changeScale(-1)">缩小</el-button>-->
            </div>
            <div class="upload-btn">
              <el-button size="mini" type="success" @click="uploadImg()">确定
              </el-button>
            </div>
          </div>
        </div>

      </el-main>
    </el-container>


  </div>
</template>

<script>
import {VueCropper} from 'vue-cropper'

export default {
  name: "CropperImage",
  components: {
    VueCropper
  },
  props: ['Name'],
  data() {
    return {
      name: this.Name,
      previews: {},
      option: {
        img: '',             //裁剪图片的地址
        outputSize: 1,       //裁剪生成图片的质量(可选0.1 - 1)
        outputType: 'jpeg',  //裁剪生成图片的格式（jpeg || png || webp）
        info: true,          //图片大小信息
        canScale: true,      //图片是否允许滚轮缩放
        autoCrop: true,      //是否默认生成截图框
        autoCropWidth: 200,  //默认生成截图框宽度
        autoCropHeight: 200, //默认生成截图框高度
        fixed: true,         //是否开启截图框宽高固定比例
        // fixedNumber: [1.53, 1], //截图框的宽高比例
        full: false,         //false按原比例裁切图片，不失真
        fixedBox: true,      //固定截图框大小，不允许改变
        canMove: false,      //上传图片是否可以移动
        canMoveBox: true,    //截图框能否拖动
        original: false,     //上传图片按照原始比例渲染
        centerBox: false,    //截图框是否被限制在图片里面
        height: true,        //是否按照设备的dpr 输出等比例图片
        infoTrue: false,     //true为展示真实输出图片宽高，false展示看到的截图框宽高
        maxImgSize: 600,    //限制图片最大宽度和高度
        enlarge: 1,          //图片根据截图框输出比例倍数
        // mode: '230px 150px'  //图片默认渲染方式
      },
      original_img: ""
    };
  },
  methods: {
    //初始化函数
    imgLoad(msg) {
      console.log("工具初始化函数=====" + msg)

    },

    //实时预览函数
    realTime(data) {
      this.previews = data
      // console.log(this.previews)
    },
    //选择图片
    selectImg(e) {
      this.original_img = e.target.files[0]
      // console.log(this.previews.original_img)
      let file = e.target.files[0]
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
        this.$message({
          message: '图片类型要求：jpeg、jpg、png',
          type: "error"
        });
        return false
      }
      //转化为blob
      let reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        this.option.img = data


      }
      // console.log(this.option.img)
      //转化为base64
      reader.readAsDataURL(file)


    },
    //上传图片
    uploadImg() {
      this.$refs.cropper.getCropBlob(data => {
        this.blobToDataURI(data, (res) => {
          this.previews.blob = res
          this.previews.thumbnail_img = this.dataURLtoFile(res, "thumbnail_img")
          this.previews.original_img = this.original_img
          this.$emit('uploadImgSuccess', this.previews);

        })

      })

    },
    // blob 装 base64
    blobToDataURI(blob, callback) {
      const reader = new FileReader();
      reader.readAsDataURL(blob);

      reader.onload = function (e) {
        callback(e.target.result);
      }
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(',')
      var mime = arr[0].match(/:(.*?);/)[1]
      var bstr = atob(arr[1])
      var n = bstr.length
      var u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, {type: mime})
    },
  },
}
</script>

<style scoped lang="scss">
.cropper-content {
  //display: flex;
  //display: -webkit-flex;
  //justify-content: flex-end;

  .cropper-box {
    //flex: 1;
    width: 100%;

    .cropper {
      width: auto;
      height: 300px;
    }
  }

  .show-preview {
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;

    .preview {
      overflow: hidden;
      border: 1px solid #67c23a;
      background: #cccccc;
    }
  }
}

.footer-btn {
  margin-top: 30px;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;

  .scope-btn {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    padding-right: 10px;
  }

  .upload-btn {
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }

  .upload_btn {
    outline: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 8px 15px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #409EFF;
    border-color: #409EFF;
    margin-right: 10px;
  }
}
</style>

