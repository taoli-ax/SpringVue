import { createRouter, createWebHashHistory ,createWebHistory} from 'vue-router'
import Login from '../views/login/login.vue'

const routes = [
  {
    path: '/',
    redirect: '/site'
  },
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
      },
      {
        path: 'updateCamp',
        name:'updateCamp',
        component: ()=>import("../components/camp/updateCamp.vue")
      },
      {
        path: 'counter',
        name: 'counter',
        component: ()=>import("../components/01-counter/Counter.vue")
      }
    ]
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})
// 全局前置守卫
router.beforeEach((to,from,next)=>{
  if(to.path.includes('/site')){
      if(true){
        console.log('global guard')
      }else{

      }
  }
  next()

})
export default router
