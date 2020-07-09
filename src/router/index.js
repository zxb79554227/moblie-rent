import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views'
import Login from '../views/Login'
import Apply from '../views/Apply'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/home',
    children:[
      {
        path:'/login',
        name:'Login',
        component: Login
      },
      {
        path:'/apply',
        name:'Apply',
        component:Apply
      },
      {
        path:'/home',
        name:'Home',
        component: function(resolve){
          require(['../views/Home/index.vue'], resolve)
        },
        children:[
          {
            path:'/order',
            name:'Order',
            component: function(resolve){
              require(['../views/Order/index.vue'], resolve)
            }
          },
          {
            path:'/account',
            name:'Account',
            component: function(resolve){
              require(['../views/Account/index.vue'], resolve)
            }
          },
          {
            path:'/notify',
            name:'Notify',
            component: function(resolve){
              require(['../views/Notify/index.vue'], resolve)
            }
          },

        ]
      }
    ]
  },
  
]





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
