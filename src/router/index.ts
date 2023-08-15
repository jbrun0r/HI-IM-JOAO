import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../components/pages/HomeView/HomeView.vue"),
    meta: { auth: false, blockAuthUser: true },
  },
  {
    path: "/",
    name: "homeView",
    component: () => import("../components/pages/HomeView/HomeView.vue"),
    meta: { auth: false, blockAuthUser: true },
  },
  {
    path: "/contact",
    name: "contactView",
    component: () => import("../components/pages/ContactView/ContactView.vue"),
    meta: { auth: false, blockAuthUser: true },
  },
  {
    path: "/about",
    name: "aboutView",
    component: () => import("../components/pages/AboutView/AboutView.vue"),
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
  history: createWebHashHistory(),
  routes,
});

export default router;
