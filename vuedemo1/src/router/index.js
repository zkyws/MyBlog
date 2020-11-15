import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index1',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index2',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})



