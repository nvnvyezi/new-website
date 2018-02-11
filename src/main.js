// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { getCookie } from './js/cookie'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const token = getCookie('username');
  if (to.meta.boolean) {
    if (token) {
      next('/admin')
    }
    next()
  } else {
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})