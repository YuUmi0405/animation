<template>
  <div>
    <Header></Header>
    <Content></Content>
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
  }
}
</script>

<style scoped>

</style>