<template>
  <div>
    <Header></Header>
    <UserContent></UserContent>
    <Footer></Footer>
  </div>

</template>

<script>
import Header from "../components/Header/Header";
import Footer from "../components/Footer"
import UserContent from "../components/UserDetailContent/Content"
export default {
  name: "userDetail",
  components: {
    Header,
    UserContent,
    Footer
  }
}
</script>

<style scoped>

</style>