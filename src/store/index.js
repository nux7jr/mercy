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
            if (item.id === products.id) {
              isProductExists = true;
              state.cart.splice(item, 1);
              console.log("del", item)
            }
          })
          if (!isProductExists) {
            state.cart.push(products)
          }
        } else {
      state.cart.push(products)
    }
    },
    deleteCartItem(state, data) {
      // state.products
      // итерируюсь по массиву и удаляю если он там есть
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
