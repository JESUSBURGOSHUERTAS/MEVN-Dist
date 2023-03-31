import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/tasks",
    name: "tasks",
    component: () => import("@/components/ProductoList.vue"),
  },

  {
    path: "/tasks/new",
    name: "tasks-new",
    component: () => import("@/components/ProductoForm.vue"),
  },

  {
    path: "/tasks/:id",
    name: "tasks-details",
    component: () => import("@/components/ProductoDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
