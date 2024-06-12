import { createRouter, createWebHistory } from "vue-router";
import ReportTable from "../pages/RecentReport/ReportTable.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     path: "/",
        //     name: "Home",
        //     component: Home,
        // },
        {
            path: "/ReportTable",
            name: "Table",
            component: ReportTable,
        },
        // {
        //     path: "/recent-report", // 경로를 추가합니다.
        //     name: "RecentReport",
        //     component: RecentReport, // 컴포넌트를 추가합니다.
        // },
    ],
});

export default router;
