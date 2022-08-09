import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientView from '../views/ClientView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'client',
    component: ClientView
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
