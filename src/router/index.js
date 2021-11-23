import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Employee from '../views/Employee.vue'
import auth from '../middleware/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee,
    meta: {
      middleware: [
          auth
      ]
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
