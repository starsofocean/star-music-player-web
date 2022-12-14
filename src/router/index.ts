import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/Index.vue"),
  },
  {
    path:'/login',
    name:'login',
    component: ()=> import("@/views/Login.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
