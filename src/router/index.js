import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/info",
    name: "info",
    component: () =>
      import(/* webpackChunkName: "info" */ "../views/InfoView.vue"),
  },
  {
    path: "/next",
    name: "next",
    component: () =>
      import(/* webpackChunkName: "next" */ "../views/NextView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
