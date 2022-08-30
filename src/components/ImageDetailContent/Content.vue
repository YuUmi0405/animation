<template>
  <!-- <div style="background-color: #66CCFF"> -->

  <!--  大于-->
  <el-row style="background-color: #F0F0F0">
    <el-col :offset="2">
      <el-container>
        <el-aside width="70%" style="background-color: #FFFFFF;">
          <el-image
              :src="image_url"
              :fit="'cover'"
              :preview-src-list="image_url_list"
          ></el-image>

        </el-aside>
        <el-container>
          <el-header>
            <el-avatar class="avatar" :size="35" :src="avatar"/>
            <span>作者名称</span>
          </el-header>
          <el-main>其他作品</el-main>
          <el-footer>收藏功能</el-footer>
        </el-container>
      </el-container>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "Content",
  props: {
    id: String
  },
  watch: {

    id(newValue, oldValue) {
      // alert(newValue);
      let result = this.$api.get_image_detail(newValue)
      result.then(res => {
        this.image_url = this.$api.base_url + res.data.data.thumbnail_url
        this.image_url_list.push(this.$api.base_url + res.data.data.thumbnail_url)


      })
    }
  },

  data() {
    return {
      activeName: "first",
      image_url: "",
      image_url_list: []
    };
  },
  mounted() {
    // alert(this.id)
    // this.$api.get_image_detail(this.id)
  }
}
</script>

<style scoped>
/deep/ .el-image__inner {
  max-width: 100%;
  max-height: 800px;
}
</style>