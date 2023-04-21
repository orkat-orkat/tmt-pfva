//ここにあるものが、RouterView/RouterLinkに使える

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/Top',
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
    path: '/Contact',
    name: 'Contact',
    component: async () => {
      const contact = await import('@/pages/Contact.vue');
      return contact;
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
  {
    path: '/Projects',
    name: 'Projects',
    component: async () => {
      const projects = await import('@/pages/Projects.vue');
      return projects;
    }
  },
  {
    path: '/English',
    name: 'English',
    component: async () => {
      const english = await import('@/pages/English.vue');
      return english;
    }
  },
  /* {
    path: '/Timeline',
    name: 'Timeline',
    component: async () => {
      const timeline = await import('@/pages/Timeline.vue');
      return timeline;
    }
  }, */
  {
    path: '/',
    name: 'none',
    component: async () => {
      const top = await import('@/pages/Top.vue');
      return top;
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: async () => {
      const notfound = await import('@/pages/NotFound.vue');
      return notfound;
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
