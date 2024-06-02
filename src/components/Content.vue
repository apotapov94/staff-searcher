<template>
  <section class="content">
    <Profile v-if="user" :user="user" />
    <p v-if="!user" class="profile-message">Выберите сотрудника, чтобы посмотреть его профиль</p>
    <div v-if="loading.profile" class="loading-mask">
      <div class="loader"></div>
    </div>
  </section>
</template>

<script>
import Profile from "@c/Users/Profile.vue";
export default {
  components: {
    Profile,
  },
  computed: {
    user() {
      return this.$store.getters.getCurrentUser;
    },
    loading() {
      return this.$store.getters.getLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  border-left: 1px solid #dededd;
  padding: 40px 24px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}
.profile-message {
  color: #76787d;
  font-size: 14px;
}
@media (max-width: 768px) {
  .content {
    border-left: 0;
    border-top: 1px solid #dededd;
  }
}
</style>
