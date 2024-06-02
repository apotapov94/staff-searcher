export default {
  state: {
    users: null,
    loading: {
      search: false,
      profile: false,
    },
    curUserID: 0,
    currentUser: null,
    search: {
      value: "",
      resultMessage: "Начните поиск",
      mode: "username",
    },
  },
  mutations: {
    searchUsers(state, users) {
      state.users = users;
    },
    updateSearchValue(state, value) {
      state.search.value = value;
    },
    setMessage(state, message) {
      state.search.resultMessage = message;
    },
    setLoading(state, type) {
      if (type) {
        state.loading[type] = true;
      } else {
        for (let key in state.loading) {
          state.loading[key] = false;
        }
      }
    },
    setSearchMode(state, mode) {
      state.search.mode = mode;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    setCurUserID(state, id) {
      state.curUserID = id;
    },
    resetSearch(state) {
      state.users = null;
    },
    resetCurrentUser(state) {
      state.currentUser = null;
      state.curUserID = 0;
    },
  },
  actions: {
    searchUsers({ commit, state }) {
      commit("setMessage", "");
      commit("resetSearch");
      commit("resetCurrentUser");
      commit("setLoading", "search");
      let explodedValues = state.search.value.split(",");
      let queryString = "";
      explodedValues.forEach((value, key) => {
        let searchValue;
        if (/[0-9]/.test(value)) {
          searchValue = key > 0 ? `&id=${value.trim()}` : `id=${value.trim()}`;
        } else {
          searchValue = key > 0 ? `&username=${value.trim()}` : `username=${value.trim()}`;
        }
        queryString += searchValue;
      });
      queryString = `https://jsonplaceholder.typicode.com/users/?${queryString}`;
      fetch(queryString)
        .then((response) => {
          if (!response.ok) {
            commit("setLoading", false);
            commit("setMessage", "Нет соединения с интернетом");
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((users) => {
          commit("setLoading", false);
          if (users.length > 0) {
            commit("searchUsers", users);
          } else {
            commit("setMessage", "Ничего не найдено");
          }
        })
        .catch((error) => {
          commit("setLoading", false);
          commit("setMessage", "Что то пошло не так");
        });
    },
    getUserByID({ commit }, id) {
      commit("setLoading", "profile");
      let queryString = `https://jsonplaceholder.typicode.com/users/?id=${id}`;
      fetch(queryString)
        .then((response) => {
          if (!response.ok) {
            commit("setLoading", false);
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((user) => {
          commit("setLoading", false);

          commit("setCurrentUser", user[0]);
          commit("setCurUserID", user[0].id);
        })
        .catch((error) => {
          commit("setLoading", false);
          console.error("There was a problem with the fetch operation:", error.message);
        });
    },
    updateSearchValue({ commit, state }, value) {
      let newValue;
      if (/[0-9]/.test(value)) {
        if (state.search.value === "") {
          commit("setSearchMode", "id");
          newValue = value;
        } else if (state.search.mode === "username") {
          newValue = value.replace(/\d/g, "");
        } else {
          newValue = value.replace(/[a-zA-Z]/g, "");
        }
      } else {
        console.log("Введен текст");
        if (state.search.value === "") {
          commit("setSearchMode", "username");
          newValue = value;
        } else if (state.search.mode === "id") {
          newValue = value.replace(/[a-zA-Z]/g, "");
        } else {
          newValue = value.replace(/\d/g, "");
        }
      }
      newValue = newValue.replace(/^,*|,*$/g, "");
      commit("updateSearchValue", newValue);
    },
  },
  getters: {
    getAllUsers(state) {
      return state.users;
    },
    getSearchValue(state) {
      return state.search.value;
    },
    getLoading(state) {
      return state.loading;
    },
    getMessage(state) {
      return state.search.resultMessage;
    },
    getCurrentUser(state) {
      return state.currentUser;
    },
    getCurUserID(state) {
      return state.curUserID;
    },
    getSearchMode(state) {
      return state.search.mode;
    },
  },
};
