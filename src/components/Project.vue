<template lang="html">
  <div v-if="project" class="bg-white py-5">
    <div class="container">

      <h2 class="mb-0 text-primary font-weight-bold">
        {{ project.attributes.name }}
        <br>
        <small class="text-muted">
          #{{ project.attributes.PLACENUMSL }}
        </small>
      </h2>

      <hr>

      <!-- facts -->
      <div id="project-facts">

        <div class="quick-fact">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: {{ project.attributes.DESC5 }}</li>
            <!-- <li>Length: -</li> -->
            <li>Category: {{ project.attributes.Major_Category }} - {{ project.attributes.SHORT_DESC }}</li>
            <li>Schedule: {{ project.attributes.Current_Phase_CompleteDate }}</li>
          </ul>
        </div>

        <div class="quick-fact">
          <h3>Overview</h3>
          <ul>
            <li>{{ project.attributes.DESC1 }}</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          </ul>
        </div>

        <div class="quick-fact">
          <h3>Benefits</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          </ul>
        </div>

        <div class="quick-fact">
          <h3>Cost Estimate</h3>
          <ul>
            <li>Total: ${{ project.attributes.Project_Budget }}</li>
            <li>Design: $</li>
            <li>Land Acquisition: $ </li>
            <li>Construction: $</li>
          </ul>
        </div>

        <div class="quick-fact">
          <h3>Funding</h3>
          <ul>
            <li>Lorem: $ </li>
            <li>Lorem: $ </li>
            <li>Lorem: $ </li>
          </ul>
        </div>
      </div>

      <!-- map -->
      <div class="embed-responsive embed-responsive-16by9 my-5">
        <div is="ProjMap" :geometry="project.geometry"></div>
      </div>

      <hr>

      <div class="d-flex justify-content-end align-items-end">
        <small class="">Current as of <strong>{{ new Date().toLocaleDateString() }}</strong></small>
      </div>

      <div class="my-3 p-3 bg-dark text-light d-print-none">
        <details open>
          <pre class="text-light">{{ project }}</pre>
        </details>
      </div>

    </div>
  </div>
</template>

<script>
import Project from '../store/project'
import ProjMap from './Map'

export default {
  props: ['id'],
  components: { ProjMap },
  data () {
    return {
      project: null
    }
  },
  created () {
    this.$store.state.loading = true
    Project.Find(this.id).then(project => {
      this.project = project
    }).catch(err => console.error(err)).finally(() => {
      this.$store.state.loading = false
    })
  }
}
</script>
