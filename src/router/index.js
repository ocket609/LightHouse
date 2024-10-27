import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ConsumerLayout from '../views/consumer/ConsumerLayout.vue'
import ConsumerHome from '../views/consumer/HomePage.vue'
import ConsumerLocation from '@/views/consumer/ConsumerLocation.vue'


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
        {
          path: 'location',
          name: 'consumerLocation',
          component: ConsumerLocation,
          meta: { title: '燈塔列表' },
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