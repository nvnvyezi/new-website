import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import HelloWorld from '@/components/HelloWorld'
import admin from '@/components/admin'
import home from '@/Subcomponent/home'
import android from '@/Subcomponent/android'
import signup from '@/Subcomponent/signup'
import web from '@/Subcomponent/web'
import ios from '@/Subcomponent/ios'
import produce from '@/Subcomponent/produce'
import java from '@/Subcomponent/java'
// import test from '@/Subcomponent/test'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(MintUI)

export default new Router({
  mode: 'history',
  base: '/dist/',
  routes: [
    {
      path: '/',
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
        // {
        //   path: '/',
        //   component: test,
        //   name: 'test'
        // },
        {
          path: '/android',
          component: android,
          name: 'android'
        },
        {
          path: '/signup',
          component: signup,
          name: 'signup'
        },
        {
          path: '/web',
          component: web,
          name: 'web'
        },
        {
          path: '/ios',
          component: ios,
          name: 'ios'
        },
        {
          path: '/java',
          component: java,
          name: 'java'
        },
        {
          path: '/product',
          component: produce,
          name: 'produce'
        }
      ]
    }
  ]
})
