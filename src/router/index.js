import { createWebHistory, createRouter } from "vue-router";

import LearningManagementPage from "../components/Pages/LearningManagementPage";


const routes = [

  {
    path: "/",
    name: "LearningManagementPage",
    component: LearningManagementPage,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
