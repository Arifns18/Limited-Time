import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Admin from '../pages/admin/AdminView.vue'
import User from '../pages/user/UserView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin },
  { path: '/user', component: User }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
