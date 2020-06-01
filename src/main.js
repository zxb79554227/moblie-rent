import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './mixins/global.js'
import { TweenMax,TimelineLite } from 'gsap'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './style.less'


Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.prototype.Tmax = TweenMax
Vue.prototype.Tline = TimelineLite

router.beforeEach((to,from,next) => {
  let isAuthenticated = sessionStorage.token
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
