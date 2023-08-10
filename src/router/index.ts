import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/:pathMatch(.*)*",
  //   component: () => import("../components/pages/HomeView/HomeView.vue"),
  //   meta: { auth: false, blockAuthUser: true },
  // },
  {
    path: "/home",
    name: "homeView",
    component: () => import("../components/pages/HomeView/HomeView.vue"),
    meta: { auth: false, blockAuthUser: true },
  },
  {
    path: "/void",
    name: "voidView",
    component: () => import("../components/pages/VoidView/VoidView.vue"),
    meta: { auth: false, blockAuthUser: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
