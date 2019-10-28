/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-const */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constRouter = [
  //  login
  {
    path: '/login',
    name:'login',
    component: () => import('@/views/login'),
  },
  //  首页
  {
    path: '/',
    name:'home',
    component: () => import('@/views/home/index.vue'),
    meta:{
        showBottom:true
    }
  },
  //  类别
  {
    path: '/types',
    name:'types',
    component: () => import('@/views/types/index.vue'),
    meta:{
        showBottom:true
    }
  },
  //  购物车
  {
    path: '/shopCar',
    name:'shopCar',
    component: () => import('@/views/shopCar'),
    meta:{
        showBottom:true
    }
  },
  //  我的
  {
    path: '/mine',
    name:'mine',
    component: () => import('@/views/mine/index.vue'),
    meta:{
        showBottom:true
    }
  },
]

let router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constRouter
})

export default router
