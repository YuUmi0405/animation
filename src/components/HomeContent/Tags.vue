<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px" :autoplay=false>
      <el-carousel-item v-for="item in 6" :key="item">
        <a class="sc-1ij5ui8-1 eirlVF sc-1xl36rp-4 dwUxFD gtm-toppage-tag-recommend-illustration md-opjjpmhoiojifppkkcdabiobhakljdgm_doc"
          color="#c8c27e" status="normal" href="/tags/ディルガイ">
          <div class="sc-1xl36rp-1 iYRMgo">
            <div class="sc-1xl36rp-2 jgcmFb">#ディルガイ</div>
          </div>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script> 
export default {
  name: "Tags"
}
</script>

<style scoped>
.iYRMgo {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-width: 0px;
}
.dwUxFD {
  display: flex;
  min-height: 40px;
  -webkit-box-align: center;
  align-items: center;
  max-width: 200px;
  padding: 0px 24px;
  box-sizing: border-box;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  background-color: rgb(200, 194, 126);
  text-align: center;
}
.jgcmFb {
  font-size: 14px;
  line-height: 22px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
}
</style>