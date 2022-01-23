<template>
  <div style="margin-top:20px">
    <el-row style="height: auto">
      <el-col :offset="4" :span="16">
        <el-tabs v-model="activeName">
          <el-tab-pane label="主页" name="first">
          </el-tab-pane>
          <el-tab-pane label="插画" name="second">
          </el-tab-pane>
          <el-tab-pane label="收藏" name="third">
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      activeName: "first",
    };
  },
}
</script>

<style scoped>

</style>