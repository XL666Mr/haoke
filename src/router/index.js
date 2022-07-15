import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => {
      return import('@/views/Layout')
    },
    children: [
      {
        path: '/home',
        component: () => {
          return import('@/views/Home')
        }
      },
      {
        path: '/home/list',
        component: () => {
          return import('@/views/List')
        }
      },
      {
        path: '/home/news',
        component: () => {
          return import('@/views/News')
        }
      },
      {
        path: '/home/profile',
        component: () => {
          return import('@/views/Profile')
        }
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
