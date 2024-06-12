import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Profile from "@/pages/Profile.vue";
import "bootstrap/dist/css/bootstrap.css";
import RecentReport from "../pages/RecentReport/RecentReport.vue";
import MonthlyReport from "../pages/MonthlyReport/MonthlyReport.vue";
import Summary from "../pages/MonthlyReport/Summary.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/Summary",
            name: "Table",
            component: Summary,
        },
        {
            path: "/MonthlyReport",
            name: "Table",
            component: MonthlyReport,
        },
        {
            path: "/RecentReport",
            name: "Table",
            component: RecentReport,
        },
        {
            path: "/Profile",
            name: "Profile",
            component: Profile,
        },
    ],
});

export default router;
