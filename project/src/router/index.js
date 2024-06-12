import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Home from '@/pages/Home.vue';
import Profile from '@/pages/Profile.vue';
import 'bootstrap/dist/css/bootstrap.css';
import ReportTable from '../pages/RecentReport/ReportTable.vue';
const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL
  ),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/ReportTable',
      name: 'Table',
      component: ReportTable,
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
    },
  ],
});

export default router;
