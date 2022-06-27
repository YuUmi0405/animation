<template>
  <div>
    <Model>
      <template v-slot:tags>
        <!-- 漫画标签 -->
        <ImageTag :slot_type="slot_type[0]"></ImageTag>
      </template>

      <!--关注用户的作品-->
      <template v-slot:concern_work>
        <ImageConcern :slot_type="slot_type[1]"></ImageConcern>
      </template>

      <!--推荐作品-->
      <template v-slot:recommend_work>
        <ImageRecommend :slot_type="slot_type[2]"></ImageRecommend>
      </template>

      <!--排行榜-->
      <template v-slot:ranking_list>
        <ImageRank :slot_type="slot_type[3]"></ImageRank>
      </template>


    </Model>
  </div>

</template>

<script>
import Model from '../../Model'
import ImageTag from "./ImageSlide";
import ImageConcern from "./ImageSlide";
import ImageRecommend from "./ImageSlide";
import ImageRank from "./ImageSlide";
export default {
  components: {
    Model,
    ImageTag,
    ImageConcern,
    ImageRecommend,
    ImageRank

  },
  data(){
    return {
      slot_type: ["image_tag","concern_work","recommend_work","rank_list"]
    }
  }

}
</script>
<style scoped>
</style>