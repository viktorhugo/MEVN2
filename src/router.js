import Vue from 'vue'
import Router from 'vue-router'
import tareas from './components/tareas.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'tareas',
      component: tareas
    },

  ]
})
