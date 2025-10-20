import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'web',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/website.vue')
  },
  {
    path: '/details/one',
    name: 'one',
    component: () => import('../details/one.vue')
  },
  {
    path: '/details/two',
    name: 'two',
    component: () => import('../details/two.vue')
  },
  {
    path: '/details/three',
    name: 'three',
    component: () => import('../details/three.vue')
  },
  {
    path: '/title/home-one',
    name: 'home-one',
    component: () => import('../title_detail/home-one.vue')
  },
  {
    path: '/title/home-two',
    name: 'home-two',
    component: () => import('../title_detail/home-two.vue')
  },
  {
    path: '/title/home-three',
    name: 'home-three',
    component: () => import('../title_detail/home-three.vue')
  },
  {
    path: '/title/wine-one',
    name: 'wine-one',
    component: () => import('../title_detail/wine-one.vue')
  },
  {
    path: '/title/wine-two',
    name: 'wine-two',
    component: () => import('../title_detail/wine-two.vue')
  },
  {
    path: '/title/wine-three',
    name: 'wine-three',
    component: () => import('../title_detail/wine-three.vue')
  },
  {
    path: '/title/story-one',
    name: 'story-one',
    component: () => import('../title_detail/story-one.vue')
  },
  {
    path: '/title/story-two',
    name: 'story-two',
    component: () => import('../title_detail/story-two.vue')
  },
  {
    path: '/title/story-three',
    name: 'story-three',
    component: () => import('../title_detail/story-three.vue')
  },
  {
    path: '/title/vip-one',
    name: 'vip-one',
    component: () => import('../title_detail/vip-one.vue')
  },
  {
    path: '/title/vip-two',
    name: 'vip-two',
    component: () => import('../title_detail/vip-two.vue')
  },
  {
    path: '/title/vip-three',
    name: 'vip-three',
    component: () => import('../title_detail/vip-three.vue')
  },
  {
    path: '/title/contact-one',
    name: 'contact-one',
    component: () => import('../title_detail/contact-one.vue')
  },
  {
    path: '/title/contact-two',
    name: 'contact-two',
    component: () => import('../title_detail/contact-two.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
