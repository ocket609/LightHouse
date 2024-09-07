import { createRouter, createWebHashHistory } from 'vue-router'
import ConsumerLayout from '../views/consumer/ConsumerLayout.vue'
import ConsumerHome from '../views/consumer/HomePage.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/consumer',
      name: 'consumer',
      component: ConsumerLayout,
      children: [
        {
          path: 'home',
          name: 'consumerHome',
          component: ConsumerHome,
          meta: { title: '燈塔網站' },
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFount',
      redirect: '/consumer/home'
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '默認標題'
  next()
})
export default router
