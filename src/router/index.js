import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ConsumerLayout from '@/views/consumer/ConsumerLayout.vue'
import ConsumerHome from '../views/consumer/HomePage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/consumer',
      name: 'consumer',
      redirect: {
        path: '/consumer/home'
      },
      component: ConsumerLayout,
      children: [
        {
          path: 'home',
          name: 'consumerHome',
          component: ConsumerHome,
          meta: { title: '燈塔網站' }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '默認標題'
  next()
})

export default router
