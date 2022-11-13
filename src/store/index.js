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
    updateCart(state, products) {
      // state.cart.push(products);
      console.log(products);
      // this push !
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
