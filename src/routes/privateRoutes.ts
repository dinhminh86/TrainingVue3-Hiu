export const privateRoutes = [
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../pages/Contact.vue"),
    meta: { requiresAuth: true },
  },
];
