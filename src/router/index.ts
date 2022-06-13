import { createRouter, createWebHashHistory } from 'vue-router'
import List from '@/pages/list/index.vue'

const routes = [
  {
    path: '/lancer',
    component: List
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router