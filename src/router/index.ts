//ここにあるものが、RouterView/RouterLinkに使える

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue'
import NotFound from '@/pages/NotFound.vue'


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
    path: '/ProjectList',
    name: 'ProjectList',
    component: async () => {
      const projectlist = await import('@/pages/ProjectList.vue');
      return projectlist;
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
    path: '/Output',
    name: 'Output',
    component: async () => {
      const output = await import('@/pages/Output.vue');
      return output;
    }
  },
  {
    path: '/Feature',
    name: 'Feature',
    component: async () => {
      const feature = await import('@/pages/Feature.vue');
      return feature;
    }
  },
  {
    path: '/ProgrammingList',
    name: 'ProgrammingList',
    component: async () => {
      const programminglist = await import('@/pages/ProgrammingList.vue');
      return programminglist;
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
  {
    path: '/Booklist',
    name: 'Booklist',
    component: async () => {
      const booklist = await import('@/pages/Booklist.vue');
      return booklist;
    }
  },
  {
    path: '/UXStudy',
    name: 'UXStudy',
    component: async () => {
      const uxstudy = await import('@/pages/UXStudy.vue');
      return uxstudy;
    }
  },
  {
    path: '/Future',
    name: 'Future',
    component: async () => {
      const future = await import('@/pages/Future.vue');
      return future;
    }
  },
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
  },

  { path: '/:catchAll(.*)', component: NotFound } // ココ

];


//遷移の時にtopを表示する
import { RouteLocationNormalized } from 'vue-router';
const scrollBehavior = (to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition: { x: 0, y: 0 } | null) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
