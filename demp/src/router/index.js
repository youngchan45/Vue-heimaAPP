import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tabbar/Home.vue'
import Shopcar from '../components/tabbar/Shopcar.vue'
import Search from '../components/tabbar/Search.vue'
import Member from '../components/tabbar/Member.vue'
import Newslist from '../components/news/Newslist.vue'
import Newsinfo from '../components/news/Newsinfo.vue'
import Imglist from '../components/imgshare/Imglist.vue'
import Imginfo from '../components/imgshare/Imginfo.vue'
import Goodslist from '../components/goods/Goodslist.vue'
import Goodsinfo from '../components/goods/Goodsinfo.vue'
import Goodsintro from '../components/goods/Goodsintro.vue'
import Goodscom from '../components/goods/Goodscom.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // component: Home ,
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newslist',
      component: Newslist
    },
    {
      path: '/home/newslist/newsinfo/:id',
      component: Newsinfo
    },
    {
      path: '/home/imglist',
      component: Imglist
    },
    {
      path: '/home/imglist/imginfo/:id',
      component: Imginfo
    },
    {
      path: '/home/goodslist',
      component: Goodslist
    },
    {
      path: '/home/goodslist/goodsinfo/:id',
      component: Goodsinfo
    },
    {
      path: '/home/goodslist/goodsinfo/goodsintro/:id',
      component: Goodsintro
    },
    {
      path: '/home/goodslist/goodsinfo/goodscom/:id',
      component: Goodscom
    },
  ]
})
