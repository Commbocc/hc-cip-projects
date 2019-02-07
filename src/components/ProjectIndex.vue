<template lang="html">
  <div class="py-5 bg-white">
    <div class="container">

      <form is="Search"></form>

      <div v-if="hasProjects" class="table-responsive">
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
                {{ project.Commisioner_District }} - {{ project.Community }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="bg-light text-center text-muted p-5">
        <p class="h4 font-weight-bold m-0">
          No Results
        </p>
        <p class="m-0">
          <span class="fas fa-search fa-2x mt-3 " aria-hidden="true"></span>
        </p>
      </div>

      <nav is="Pagination"></nav>

    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import TableHeader from './TableHeader'
import Pagination from './Pagination'
import Search from './Search'

export default {
  components: { TableHeader, Pagination, Search },
  computed: {
    ...mapState({
      projects: state => state.projects.index
    }),
    ...mapGetters(['hasProjects'])
  },
  methods: mapActions(['fetchProjects']),
  beforeRouteEnter (to, from, next) {
    // console.log('beforeRouteEnter', to)
    next(vm => {
      vm.$store.commit('setPageTitle')
      vm.fetchProjects(to.query)
    })
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('beforeRouteUpdate', to)
    this.$store.commit('setPageTitle')
    this.fetchProjects(to.query)
    next()
  }
}
</script>
