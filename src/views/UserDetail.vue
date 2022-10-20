<template>
  <div>
    <Header></Header>
    <UserContent></UserContent>
  </div>

</template>

<script>
import Header from "../components/Header/Header";
import UserContent from "../components/UserDetailContent/Content"
export default {
  name: "userDetail",
  components: {
    Header,
    UserContent,
  }
}
</script>

<style scoped>

</style>