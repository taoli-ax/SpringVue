import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/login.vue'
import Register from '../views/register/register.vue'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    // lazy loading
    component: ()=>import('../views/register/register.vue')
  },
  {
    path: '/register_success',
    name: 'register_success',
    component: ()=>import('../views/register/registerSuccess.vue')
  },
  {
    path: '/site',
    name:'site',
    props:true,
    component:()=>import('../views/site/site.vue'),
    children:[
      {
        path:'campList',
        component: ()=>import('../components/camp/campList.vue')
      },
      {
        path:'newCamp',
        component:()=>import('../components/camp/newCamp.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
