import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MercyMainBuyView from "@/views/BuyView.vue";
import MercyMainNewsView from "@/views/NewsView.vue";
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
    path: "/news",
    name: "MercyMainNewsView",
    component: MercyMainNewsView,
  },
  {
    path: "/news/:id",
    name: "MercyMainNewsItemView",
    component: MercyMainNewsView,
  },
  {
    path: "/:catchAll(.*)*",
    name: "MercyPageNotFound",
    component: MercyPageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
