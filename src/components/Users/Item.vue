<template>
  <div :class="`user ${user.id === curUserID ? 'active' : ''}`" @click="getProfile">
    <div class="user__left">
      <img src="@images/user.png" />
    </div>
    <div class="user__right">
      <div class="user__name">{{ user.username }}</div>
      <div class="user__email">{{ user.email }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    curUserID() {
      return this.$store.getters.getCurUserID;
    },
  },
  methods: {
    getProfile() {
      this.$store.dispatch("getUserByID", this.user.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  box-shadow: 0px 0px 10px 0px #0000001a;
  display: flex;
  font-size: 14px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  &__left img {
    height: 100%;
  }
  &__name {
    color: #333333;
    font-weight: 600;
  }
  &__email {
    color: #76787d;
  }
  &__right {
    padding: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
  }
  &:hover {
    .user__right {
      background: #e0e0e0;
    }
  }
  &.active {
    .user__right {
      background: #e0e0e0;
    }
  }
}
</style>
