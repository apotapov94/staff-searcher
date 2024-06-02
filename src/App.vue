<template>
  <div class="content-wrapper container">
    <Header />
    <main>
      <Sidebar />
      <Content />
    </main>
  </div>
</template>

<script>
import Header from "@c/Header.vue";
import Sidebar from "@c/Sidebar.vue";
import Content from "@c/Content.vue";
export default {
  components: {
    Header,
    Sidebar,
    Content,
  },
  computed: {
    staff() {
      return this.$store.getters.getAllStaff;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: green;
}
main {
  box-shadow: 0px 0px 10px 0px #0000001a;
  background: #fdfdfd;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 350px auto;
  height: 100vh;
  overflow: hidden;
  max-height: 750px;
}
@media (max-width: 768px) {
  main {
    display: flex;
    flex-direction: column;
    height: auto;
    max-height: 100%;
  }
}
</style>
