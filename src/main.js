import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import JwPagination from "jw-vue-pagination";
const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.component("jw-pagination", JwPagination);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
