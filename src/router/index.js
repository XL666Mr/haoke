import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/views/Profile'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 0,
    component: () => {
      return import('@/views/Home')
    },
    children: [
      {
        path: '/home/profile',
        name: 3,
        component: Profile
      }
    ]
  },
  {
    path: '/login',
    component: () => {
      return import('@/views/Login')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
