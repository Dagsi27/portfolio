import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Możesz dodać kolejne trasy tutaj
];

const router = createRouter({
  history: createWebHistory(), // Lub createWebHashHistory() jeśli używasz hash mode
  routes
});

export default router;
