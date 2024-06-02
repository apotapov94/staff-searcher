<template>
  <div class="profile">
    <div class="profile__left">
      <img src="@images/profile.jpg" />
    </div>
    <div class="profile__right">
      <div class="profile__name">{{ user.name }}</div>
      <div class="profile__email">
        email: <span>{{ user.email }}</span>
      </div>
      <div class="profile__phone">
        phone: <span>{{ user.phone }}</span>
      </div>
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
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  width: 100%;
  gap: 32px;
  height: 100%;
  &__name {
    font-weight: 600;
  }
  &__email {
    font-size: 14px;
    font-weight: 600;
    span {
      color: #76787d;
      font-weight: 400;
    }
  }
  &__phone {
    font-size: 14px;
    font-weight: 600;
    span {
      color: #76787d;
      font-weight: 400;
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
.profile-message {
  text-align: center;
}
@media (max-width: 1200px) {
  .profile {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
}
</style>
