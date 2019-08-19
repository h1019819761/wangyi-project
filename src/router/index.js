import Vue from 'vue'
import VueRouter from 'vue-router'

import Fenlei from '../pages/fenlei/fenlei.vue'
import Geren from '../pages/geren/geren.vue'
import Home from '../pages/home/home.vue'
import Shiwu from '../pages/shiwu/shiwu.vue'
import Shop from '../pages/shop/shop.vue'
import Search from  '../pages/search/search.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/shop',
      component:Shop,
      meta:{
        footerShow:true
      }
    },
    {
      path:'/fenlei',
      component:Fenlei,
      meta:{
        footerShow:true
      }
    },
     {
      path:'/geren',
      component:Geren,
      meta:{
        footerShow:false
      }
    },
     {
      path:'/home',
      component:Home,
      meta:{
        footerShow:true
      }
    },
     {
      path:'/shiwu',
      component:Shiwu,
      meta:{
        footerShow:true
      }
    },
    {
      path:'/search',
      component:Search,
     
    },
   
  ]
})