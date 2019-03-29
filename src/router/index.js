import Vue from 'vue'
import VueRouter from 'vue-router'

import ProjectIndex from '../views/ProjectIndex'
import Project from '../views/Project'

// import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'Index',
      path: '/',
      component: ProjectIndex
    },
    {
      name: 'Show',
      path: '/:id',
      component: Project,
      props: (route) => ({ id: route.params.id })
    }
  ]
})

export default router
