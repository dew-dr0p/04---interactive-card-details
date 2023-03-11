import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../views/Form.vue'
import Success from '../views/Success.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      name: 'home' ,
      component: Home 
    },
    { 
      path: '/success', 
      name: 'success',
      component: Success 
    }
  ]
})

export default router
