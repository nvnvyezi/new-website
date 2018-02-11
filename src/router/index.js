import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import HelloWorld from '@/components/HelloWorld'
import admin from '@/components/admin'
import home from '@/Subcomponent/home'
import android from '@/Subcomponent/android'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { boolean: true}
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        {
          path: '/',
          component: home,
          name: 'home'
        },
        {
          path: '/android',
          component: android,
          name: 'android'
        }
      ]
    }
  ]
})
