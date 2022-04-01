import { createRouter, createWebHashHistory } from 'vue-router'
import { fetchProjects, fetchProject } from './lib/projects'

// 1. Define route components.
// These can be imported from other files
// const Home = { template: "<div>Home</div>" };
// const About = { template: "<div>About</div>" };
import ProjectIndex from './views/ProjectIndex.vue'
import ProjectShow from './views/ProjectShow.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
export const routes = [
  {
    name: 'Index',
    path: '/',
    component: ProjectIndex,
    beforeEnter: fetchProjects,
  },
  {
    name: 'Show',
    path: '/:id',
    component: ProjectShow,
    beforeEnter: fetchProject,
  },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
