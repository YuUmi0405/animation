<template>
  <div>
    <Header></Header>
    <Contents></Contents> 
  </div>

</template>

<script>
import Header from "../components/Header/Header";
import Contents from "../components/HomeContent/Content"
export default {
  name: "home",
  components: {
    Header,
    Contents
  }
}
</script>

<style scoped>

</style>