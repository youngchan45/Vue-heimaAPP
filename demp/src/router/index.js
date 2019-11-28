import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/tabbar/Home.vue'
const Home=()=>import('../components/tabbar/Home.vue')
// import Shopcar from '../components/tabbar/Shopcar.vue'
const Shopcar =()=>import('../components/tabbar/Shopcar.vue')
// import Search from '../components/tabbar/Search.vue'
const Search =()=>import('../components/tabbar/Search.vue')
// import Member from '../components/tabbar/Member.vue'
const Member =()=>import('../components/tabbar/Member.vue')
// import Newslist from '../components/news/Newslist.vue'
const Newslist=()=>import('../components/news/Newslist.vue')
// import Newsinfo from '../components/news/Newsinfo.vue'
const Newsinfo =()=>import('../components/news/Newsinfo.vue')
// import Imglist from '../components/imgshare/Imglist.vue'
const Imglist=()=>import('../components/imgshare/Imglist.vue')
// import Imginfo from '../components/imgshare/Imginfo.vue'
const Imginfo=()=>import('../components/imgshare/Imginfo.vue')
// import Goodslist from '../components/goods/Goodslist.vue'
const Goodslist=()=>import('../components/goods/Goodslist.vue')
// import Goodsinfo from '../components/goods/Goodsinfo.vue'
const Goodsinfo=()=>import('../components/goods/Goodsinfo.vue')
// import Goodsintro from '../components/goods/Goodsintro.vue'
const Goodsintro=()=>import('../components/goods/Goodsintro.vue')
// import Goodscom from '../components/goods/Goodscom.vue'
const Goodscom=()=>import('../components/goods/Goodscom.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: '陈杨商城',
      path: '/',
      // component: Home ,
      redirect: '/home'
    },
    {
      name: '陈杨商城',
      path: '/home',
      component: Home
    },
    {
      name: '陈杨会员',
      path: '/member',
      component: Member
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      name: '陈杨购物车',
      path: '/shopcar',
      component: Shopcar
    },
    {
      name: '陈杨搜索',
      path: '/search',
      component: Search
    },
    {
      name: '陈杨新闻',
      path: '/home/newslist',
      component: Newslist
    },
    {
      name: '新闻详情',
      path: '/home/newslist/newsinfo/:id',
      component: Newsinfo
    },
    {
      name: '陈杨图片',
      path: '/home/imglist',
      component: Imglist
    },
    {
      name: '图片详情',
      path: '/home/imglist/imginfo/:id',
      component: Imginfo
    },
    {
      name: '陈杨商品',
      path: '/home/goodslist',
      component: Goodslist
    },
    {
      name: '商品详情',
      path: '/home/goodslist/goodsinfo/:id',
      component: Goodsinfo
    },
    {
      name: '商品介绍',
      path: '/home/goodslist/goodsinfo/goodsintro/:id',
      component: Goodsintro
    },
    {
      name: '商品评论',
      path: '/home/goodslist/goodsinfo/goodscom/:id',
      component: Goodscom
    },
  ]
})
