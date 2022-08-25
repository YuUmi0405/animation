<template>
  <div>
    <Header></Header>
    <Content :id="id"></Content>
    <Footer></Footer>
  </div>

</template>

<script>
import Header from "../components/Header/Header";
import Footer from "../components/Footer"
import Content from "../components/ImageDetailContent/Content"

export default {
  name: "home",
  components: {
    Header,
    Content,
    Footer
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