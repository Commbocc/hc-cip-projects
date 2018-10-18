import Vue from 'vue'
import VueRouter from 'vue-router'

import ProjectModel from '../store/project'

// import store from '../store'
// import Hello from '../components/Hello'
import ProjectIndex from '../components/ProjectIndex'
import Project from '../components/Project'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: ProjectIndex
    },
    {
      path: '/:id',
      component: Project,
      props: (route) => ({ id: route.params.id })
    }
  ]
})

export default router
