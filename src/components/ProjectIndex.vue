<template lang="html">
  <div class="py-5 bg-white">
    <div class="container">

      <div class="card">
        <table class="table table-striped tabel-bordered table-responsive mb-0">
          <thead>
            <tr>
              <th>Project</th>
              <th>Type</th>
              <th>Phase</th>
              <th>District</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects">
              <td>
                <router-link :to="project.path">
                  {{ project.attributes.name }}
                </router-link>
                <br>
                <small class="text-muted">
                  #{{ project.attributes.PLACENUMSL }}
                </small>
              </td>
              <td class="small text-muted">
                {{ project.attributes.Major_Category }} -
                {{ project.attributes.SHORT_DESC }}
              </td>
              <td class="small text-muted">
                {{ project.attributes.Current_Phase }}
              </td>
              <td class="small text-muted">
                {{ project.attributes.Commisioner_District }} - {{ project.attributes.DESC5 }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
import Project from '../store/project'

export default {
  data () {
    return {
      projects: []
    }
  },
  created () {
    this.$store.state.loading = true
    Project.All().then(json => {
      this.projects = json
    }).catch(err => console.error(err)).finally(() => {
      this.$store.state.loading = false
    })
  }
}
</script>
