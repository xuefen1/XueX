import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router=new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:()=>import('../components/home.vue'),
      meta: {
        title:"加班/休假"
      }
    },
    {
      path: '/order',
      component:()=>import('../components/order.vue')
    },
    {
      path: '/addJia/:type',
      component:()=>import('../components/addJia.vue'),
      meta:{
        title:"提交"
      },
      props:true
    },
    {
      path: '/login',
      component:()=>import('../components/login'),
      meta: {
        title:"加班"
      },
    },
    {
      path: '/detail/:type/:id',
      component:()=>import('../components/detailVue.vue'),
      meta: {
        title:"申请表"
      },
      props:true
    },
  ]
})
export default router
