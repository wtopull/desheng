import Vue from 'vue'
import Router from 'vue-router'
import desheng from '@/components/desheng'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'desheng',
      component: desheng
    }
  ]
})
