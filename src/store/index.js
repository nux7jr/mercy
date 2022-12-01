import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async getProducts(context) {
      const params = new URLSearchParams();
      const headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      headers.append(
        "Accept",
        "application/json;text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
      );
      params.set("action", "all");
      const products = await fetch("https://api.tiksan.ru/api/products", {
        method: "POST",
        headers: headers,
        body: params,
        mode: "cors",
      });

      let res = await products; // тут ждать промис!
      console.log("PROD:", res);

      // context.commit("updateProducts", products);

      // поставить prod true
      // const products = await axios.get("https://tiksan-record.ru/db.json");
      // context.commit("updateProducts", products.data.products);
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
        console.log("пуст");
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
