import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/resumes",
    component: () => import("../views/ResumesView.vue"),
  },
  {
    path: "/careers",
    component: () => import("../views/CareersView.vue"),
  },
  {
    path: "/chat",
    component: () => import("../views/ChatView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHashHistory(),
  routes,
});

export default router;
