import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MercyMainBuyView from "@/views/BuyView.vue";
import MercyPageNotFound from "@/views/404View.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/buy",
    name: "MercyMainBuyView",
    component: MercyMainBuyView,
  },
  {
    path: "/:catchAll(.*)*",
    name: "MercyPageNotFound",
    component: MercyPageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
