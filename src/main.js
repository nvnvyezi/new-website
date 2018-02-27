// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { getCookie } from './js/cookie'

// Vue.http.interceptors.push(function (request, next) {
//   //拦截器
//   // 跨域携带cookie
//   request.credentials = true;
//   next()
// });

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const token = getCookie('username');
  if (to.matched.some(record => record.meta.boolean)) {
    if (token) {
      next('admin')
    }
    next()
  } else {
    if (token) {
      next()
    } else {
      next('')
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