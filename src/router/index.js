import Vue from 'vue'
import VueRouter from 'vue-router'

// import store from '../store'
// import Hello from '../components/Hello'
import ProjectIndex from '../components/ProjectIndex'
import Project from '../components/Project'

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

// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }
