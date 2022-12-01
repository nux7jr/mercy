import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async getProducts(context) {
      // for me
    //   const products = await axios.post('http://api.tiksan.ru/api/products', {
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //         'Connection': 'keep-alive',
    //         'Accept': 'application/json, */*; q=0.01'
    //       },
    //       body: {
    //         action: "all",
    //       }
    // })

    const res = await axios.post('http://api.tiksan.ru/api/products', { action: 'all' }, {
      headers: {
        // 'application/json' is the modern content-type for JSON, but some
        // older servers may use 'text/json'.
        // See: http://bit.ly/text-json
        'content-type': 'text/json'
      }
    });
    res.data.headers['Content-Type'];
          console.log(res)
          // context.commit("updateProducts", products);
          // for prod 
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
        console.log('пуст');
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
