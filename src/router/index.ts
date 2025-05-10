import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // 如果浏览器有保存的滚动位置，则使用它
    } else {
      return { top: 0 } // 否则滚动到页面顶部
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/ArticlesView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/timeLine',
      name: 'timeLine',
      component: () => import('../views/TimeLineView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/article/:articleNum',
      name: 'article',
      component: () => import('../views/ArticleView.vue')
    },
    {
      path: '/drawing/:galleryNum',
      name: 'drawing',
      component: () => import('../views/DrawingView.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/WorksView.vue')
    },
    {
      path: '/works/:worksDetails',
      name: 'worksDetails',
      component: () => import('../views/WorksDetails.vue')
    }
  ]
})

export default router
