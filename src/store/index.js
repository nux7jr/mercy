import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async getProducts(context, response) {
      const params = new URLSearchParams();
      const headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      headers.append(
        "Accept",
        "application/json;text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
      );
      params.set("action", "all");
      fetch("https://api.tiksan.ru/api/products", {
        method: "POST",
        headers: headers,
        body: params,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          context.commit("updateProducts", data);
        });
    },
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
    toggleDataCart(state, products) {
      if (state.cart.length) {
        state.cart = products;
      } else {
        state.cart = products;
      }
    },
    fullReprimandCart(state) {
      if (Object.keys(state.cart).length == 0) {
      } else {
        state.cart = {};
      }
    },
  },
  state: {
    products: [],
    cart: {},
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    allCart(state) {
      return state.cart;
    },
  },
  modules: {},
});
