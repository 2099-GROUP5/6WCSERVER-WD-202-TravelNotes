import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { 
    path: '/',
    name:'/home', 
    component:()=> import('../components/Dashboard') 
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/Dashboard')
  },
  {
    path: '/infotravel',
    name: 'infotravel',
    component: () => import('../components/InfoTravel')
  },
  {
    path: '/newessential',
    name: 'newessential',
    component: () => import('../components/NewEssential')
  },
  {
    path: '/newlocation',
    name: 'newlocation',
    component: () => import('../components/NewLocation')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/Contact')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/About')
  },
  {
    path: '/manage-essential', 
    name: 'manageessentials',
    component:() => import('../components/ManageEssential')
  } ,
  { 
    path: '/manage-travels', 
    name: 'managetravels',
    component: () => import('../components/ManageTravels') 
  }, 

  {
    path: '/edit-essential', 
    name: 'editessential', 
    component : () => import('../components/EditEssential') 
  } ,
  {
    path: '/edit-travel', 
    name: 'edittravels', 
    component : () => import('../components/EditTravel') 
  }

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router