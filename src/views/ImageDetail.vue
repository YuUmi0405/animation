<template>
  <div>
    <Header></Header>
    <Content :id="id"></Content>
  </div>

</template>

<script>
import Header from "../components/Header/Header";
import Content from "../components/ImageDetailContent/Content"

export default {
  name: "home",
  components: {
    Header,
    Content,
  },
  data() {
    return {
      id: ""
    }
  },
  mounted() {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

</style>