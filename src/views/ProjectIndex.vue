<template lang="html">
  <div class="">

    <form is="Search"></form>

    <div v-if="hasProjects" class="table-responsive">
      <table class="table table-striped mb-0">
        <thead>
          <tr>
            <th is="TableHeader" field="ProjectName">
              Project
            </th>
            <th is="TableHeader" field="Project_Type">
              Type
            </th>
            <th is="TableHeader" field="Current_Phase">
              Phase
            </th>
            <th is="TableHeader" field="Community">
              Community
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project, i) in projects" :key="i">
            <td>
              <router-link :to="project.path">
                {{ project.ProjectName }}
              </router-link>
              <br>
              <small class="text-muted">
                #{{ project.CIP_Number }}
              </small>
            </td>
            <td class="small text-muted">
              {{ project.Project_Type }} -
              {{ project.Major_Category }}
            </td>
            <td class="small text-muted">
              {{ project.Current_Phase }}
            </td>
            <td class="small text-muted">
              {{ project.Community }} - {{ project.Commisioner_District }}
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
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import TableHeader from '../components/TableHeader'
import Pagination from '../components/Pagination'
import Search from '../components/Search'

export default {
  components: { TableHeader, Pagination, Search },
  methods: mapActions(['fetchProjects']),
  computed: {
    ...mapState({
      projects: state => state.projects.index
    }),
    ...mapGetters(['hasProjects'])
  },
  mounted () {
    this.$store.commit('setPageTitle')
    this.fetchProjects()
  }
}
</script>
