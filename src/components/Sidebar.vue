<template>
  <aside class="sidebar">
    <h2>Поиск сотрудников</h2>
    <form class="search-form" @submit.prevent="searchUsers">
      <p class="search-mode">
        Режим поиска по <span>{{ searchMode === "username" ? "имени пользователя" : "id" }}</span>
      </p>
      <input class="search-form__input" placeholder="Введите Id или имя " type="text" v-model="searchValue" />
      <span class="search-reset" @click="searchReset">Сбросить поиск</span>
    </form>
    <div class="search-results">
      <h2>Результаты</h2>
      <Users v-if="users" :users="users" />
      <div v-if="!users" class="search-message">{{ message }}</div>
    </div>
    <div v-if="loading.search" class="loading-mask">
      <div class="loader"></div>
    </div>
  </aside>
</template>

<script>
import Users from "@c/Users/List.vue";
export default {
  components: {
    Users,
  },
  computed: {
    searchValue: {
      get() {
        return this.$store.getters.getSearchValue;
      },
      set(value) {
        this.$store.dispatch("updateSearchValue", value);
      },
    },
    users() {
      return this.$store.getters.getAllUsers;
    },
    loading() {
      return this.$store.getters.getLoading;
    },
    message() {
      return this.$store.getters.getMessage;
    },
    searchMode() {
      return this.$store.getters.getSearchMode;
    },
  },
  methods: {
    searchUsers(e) {
      e.preventDefault();
      this.$store.dispatch("searchUsers");
    },
    searchReset() {
      this.$store.dispatch("searchReset");
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 16px;
  margin: 0;
}
.sidebar {
  padding: 40px 24px;
  position: relative;
}
.search-reset {
  font-size: 12px;
  text-decoration: underline;
  color: #e31f24;
  margin-top: 8px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}

.search-form {
  margin: 24px 0;
  &__input {
    border: 1.5px solid #e9ecef;
    padding: 16px;
    color: #76787d;
    border-radius: 8px;
    width: 100%;
    &:focus-visible {
      outline: none;
    }
  }
}
.search-message {
  color: #76787d;
  font-size: 14px;
}
.search-results h2 {
  margin-bottom: 24px;
}
.search-mode {
  color: #76787d;
  font-size: 12px;
  span {
    color: #e31f24;
  }
}
</style>
