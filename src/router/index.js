import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favs',
    name: 'Favories',
    component: () => import('../views/Favories.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
