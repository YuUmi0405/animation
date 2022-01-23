<template>
  <div>
    <Model>
      <template v-slot:tags>
        <!-- 漫画标签 -->
        <IkonTag></IkonTag>
      </template>

      <!--关注用户的作品-->
      <template v-slot:concern_work>
        <ConcernWork ></ConcernWork>
      </template>

      <!--推荐作品-->
      <template v-slot:recommend_work>
        <RecommendWork></RecommendWork>
      </template>

      <!--排行榜-->
      <template v-slot:ranking_list>
        <RankList></RankList>
      </template>


    </Model>
  </div>

</template>

<script>
import Model from '../../Model'
import IkonTag from './IkonTag'
import ConcernWork from './ConcernWork'
import RecommendWork from './RecommendWork'
import RankList from './RankList'
export default {
  components: {
    Model,
    IkonTag,
    ConcernWork,
    RecommendWork,
    RankList
  },
  methods:{
  }

}
</script>
<style scoped>
</style>