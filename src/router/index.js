import { createRouter, createWebHistory } from "vue-router";
import CashDetail from "@/pages/Cash/CashDetail.vue";
import Cash from "@/pages/Cash/Cash.vue";
import Home from "@/components/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Cash/edit/:id",
      component: CashDetail,
    },
    {
      path: "/Cash",
      component: Cash,
    },
  ],
});

export default router;
