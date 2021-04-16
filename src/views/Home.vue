<template>
  <div>
    <Header></Header>
    <Contents></Contents> 
    <Footer></Footer>
  </div>

</template>

<script>
import Header from "../components/Header/Header";
import Footer from "../components/Footer"
import Contents from "../components/HomeContent/Content"
export default {
  name: "home",
  components: {
    Header,
    Footer,
    Contents
  }
}
</script>

<style scoped>

</style>