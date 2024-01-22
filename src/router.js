import { createRouter, createWebHistory } from 'vue-router'
import AppAbout from './pages/AppAbout.vue'
import AppProjects from './pages/AppProjects.vue'
import AppContacts from './pages/AppContacts.vue'
import SingleProject from './pages/SingleProject.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AppAbout
    },
    {
      path: '/projects',
      name: 'projects',
      component: AppProjects
    },
    {
      path: '/projects/:slug',
      name: 'project',
      component: SingleProject
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: AppContacts
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'not-found',
      component: NotFound
    },

    
  ]
})

export default router
