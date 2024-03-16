import { createStore } from "vuex";

export default createStore({
  state: {
    //
    token: null,
    isAuthenticated: false,
  },
  mutations: {
    //
  },
  actions: {
    //check user status
    checkUserAuthenticationStatus({ commit }) {
      //api/authenticated
      axios
        .get("api/autheticated")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    //
  },
});
