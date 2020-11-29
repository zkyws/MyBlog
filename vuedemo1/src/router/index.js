import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Tasksdetail from '../components/Tasksdetail'
const HelloWorld = () => import('../components/HelloWorld')
const entrancePage = () => import('../components/entrance/entrancePage')
const blogMainView  = () => import('../components/blog/mainView')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      props: true,
      redirect: '/content',
    },
    {
      path: '/content/',
      name: 'content',
      component: entrancePage,
      children: [
        {
          path: 'blogs',
          component: blogMainView
        },
        {
          path: 'normal',
          component: HelloWorld
        }
      ]
    },
  ]
})



