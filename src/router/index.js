import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views'
import Login from '../views/Login'

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
              require(['../views/order/index.vue'], resolve)
            }
          },
          {
            path:'/account',
            name:'Account',
            component: function(resolve){
              require(['../views/account/index.vue'], resolve)
            }
          },
          {
            path:'/notify',
            name:'Notify',
            component: function(resolve){
              require(['../views/notify/index.vue'], resolve)
            }
          },
          {
            path:'/user',
            name:'User',
            component: function(resolve){
              require(['../views/user/index.vue'], resolve)
            },
            children:[
              {
                path:'/user/setpassword',
                name:'Setpassword',
                component: function(resolve){
                  require(['../views/user/Setpassword.vue'], resolve)
                },
              }
            ]
          }
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
