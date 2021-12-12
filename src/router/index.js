import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue');
const Contact = () => import('../views/Contact.vue');

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
