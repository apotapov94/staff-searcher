<template>
  <div v-if="users" class="users-list__wrap">
    <div class="users-list">
      <User v-for="user in users" :user="user" />
    </div>
  </div>
</template>

<script>
import User from "@c/Users/Item.vue";
export default {
  components: {
    User,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    searchUsers(e) {
      e.preventDefault();
      this.$store.dispatch("searchUsers");
    },
  },
};
</script>

<style lang="scss" scoped>
.users-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.users-list__wrap {
  overflow-y: scroll;
  max-height: 500px;
  padding: 0 10px;
  margin: 0 -10px;
  &::-webkit-scrollbar {
    width: 6px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* цвет зоны отслеживания */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e31f24; /* цвет бегунка */
    border-radius: 4px; /* округлось бегунка */
    border: 3px solid transparent; /* отступ вокруг бегунка */
  }
}
</style>
