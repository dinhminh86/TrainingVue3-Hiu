import type { RouteLocationNormalizedLoaded } from "vue-router";

export const publicRoutes = [
  {
    path: "/auth",
    name: "Authorization",
    component: () => import("../pages/Auth.vue"),
    props: (route: RouteLocationNormalizedLoaded) => ({ isLogin: route.query.isLogin === "true" }),
  },{
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
];
