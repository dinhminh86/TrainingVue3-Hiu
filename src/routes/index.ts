import { createRouter, createWebHistory } from "vue-router";

import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

import { useAuthStore } from "../store/authStore";

const routes = [...publicRoutes, ...privateRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ path: "/auth", query: { isLogin: 'true', redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
