import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Top',
    component: async () => {
      const top = await import('@/pages/Top.vue');
      return top;
    }
  },
  {
    path: '/About',
    name: 'About',
    component: async () => {
      const about = await import('@/pages/About.vue');
      return about;
    }
  },
  {
    path: '/CV',
    name: 'CV',
    component: async () => {
      const cv = await import('@/pages/CV.vue');
      return cv;
    }
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: async () => {
      const skills = await import('@/pages/Skills.vue');
      return skills;
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
