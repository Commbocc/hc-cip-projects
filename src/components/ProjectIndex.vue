<template lang="html">
  <div class="py-5 bg-white">
    <div class="container">

      <form is="Search"></form>

      <div class="table-responsive">
        <table class="table table-striped mb-0">
          <thead>
            <tr>
              <th is="TableHeader" field="name">
                Project
              </th>
              <th is="TableHeader" field="Major_Category">
                Type
              </th>
              <th is="TableHeader" field="Current_Phase">
                Phase
              </th>
              <th is="TableHeader" field="Commisioner_District">
                District
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects">
              <td>
                <router-link :to="project.path">
                  {{ project.name }}
                </router-link>
                <br>
                <small class="text-muted">
                  #{{ project.PLACENUMSL }}
                </small>
              </td>
              <td class="small text-muted">
                {{ project.Major_Category }} -
                {{ project.SHORT_DESC }}
              </td>
              <td class="small text-muted">
                {{ project.Current_Phase }}
              </td>
              <td class="small text-muted">
                {{ project.Commisioner_District }} - {{ project.DESC5 }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav is="Pagination"></nav>

    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TableHeader from './TableHeader'
import Pagination from './Pagination'
import Search from './Search'

export default {
  components: { TableHeader, Pagination, Search },
  computed: mapState({
    projects: state => state.projects.index
  }),
  methods: mapActions(['fetchProjects']),
  beforeRouteEnter (to, from, next) {
    // console.log('beforeRouteEnter', to)
    next(vm => vm.fetchProjects(to.query))
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('beforeRouteUpdate', to)
    this.fetchProjects(to.query)
    next()
  }
}
</script>
