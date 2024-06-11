import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Home from '@/pages/Home.vue';
import Profile from '@/pages/Profile.vue';
import 'bootstrap/dist/css/bootstrap.css';

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
      path: '/Profile',
      name: 'Profile',
      component: Profile,
    },
  ],
});

export default router;
