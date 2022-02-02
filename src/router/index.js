import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';
import Contact from  '../views/Contact.vue';
import About from '../views/About.vue';
import Notfound from "../views/error.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'Home'
    }
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
    meta:{
      title:'contact'
    }
  },  
  {
    path: '/About',
    name: 'About',
    component: About,
    meta:{
      title:'About'
    }
  }, 
  {
    path: '/:catchAll(.*)*',
    name: 'error',
    component: Notfound,
    meta:{
        title:'404-notfound'
    }
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to , from , next) => {
  let documentTitle = `Miracool - ${to.meta.title}`;
  document.title = documentTitle;
  next()
});

export default router
