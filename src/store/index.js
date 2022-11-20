import Vue from "vue";
import Vuex from "vuex";
import axios from "@/axios/axios.js";
Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async getProducts(context) {
      const products = await axios.get("/products");
      context.commit("updateProducts", products.data);
    },
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
    toggleDataCart(state, products) {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.index === products.index) {
            isProductExists = true;
            state.cart.splice(item, 1);
            console.log("del", item);
          }
        });
        if (!isProductExists) {
          console.log("можно выбрать только один товар!");
        }
      } else {
        state.cart.push(products);
      }
    },
    fullReprimandCart(state) {
      state.cart = [];
      console.log("полное удаление!");
      // полное удаление!
    },
  },
  state: {
    products: [],
    cart: [],
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
