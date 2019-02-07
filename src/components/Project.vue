<template lang="html">
  <div v-if="project" class="bg-white py-5">
    <div class="container">

      <h2 class="mb-0 text-primary font-weight-bold">
        #{{ project.PLACENUMSL }}
      </h2>

      <hr>

      <!-- facts -->
      <div id="project-facts">

        <div class="row align-items-center">
          <div class="col-md-6">
            <h3>Quick Facts</h3>
            <ul>
              <li>Location: {{ project.Community }}</li>
              <li>Project Type: {{ project.SHORT_DESC }}</li>
              <li>Phase: {{ project.Current_Phase }}</li>
            </ul>
          </div>

          <div class="col-md-6">
            <img v-if="project.PhaseGraphic" :src="project.PhaseGraphic" alt="Current Phase" class="img-fluid my-3">
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>Schedule</h3>
            <ul>
              <li>Planning complete: {{ project.PlanningDate }}</li>
              <li>Design complete: {{ project.DesignDate }}</li>
              <li>Construction begins: {{ project.Constr_Start }}</li>
              <li>Construction complete: {{ project.Constr_End }}</li>
            </ul>
          </div>

          <div class="col-md-6">
            <h3>Budget Breakdown</h3>
            <ul>
              <li>
                Total: {{ currency(project.Project_Budget) }}
                <ul>
                  <li v-if="project.DesignBudget">Design: {{ currency(project.DesignBudget) }}</li>
                  <li v-if="project.PlanningBudget">Land Acquisition: {{ currency(project.PlanningBudget) }}</li>
                  <li v-if="project.Constr_Budget">Construction: {{ currency(project.Constr_Budget) }}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="">
          <h3>Overview</h3>
          <ul>
            <li v-if="project.DESC1">{{ project.DESC1 }}</li>
            <li v-if="project.DESC2">{{ project.DESC2 }}</li>
            <li v-if="project.DESC3">{{ project.DESC3 }}</li>
          </ul>
        </div>

        <div class="row">
          <div class="col-md-5">
            <h3>Objectives</h3>
            <ul>
              <li v-if="project.Obj1">{{ project.Obj1 }}</li>
              <li v-if="project.Obj2">{{ project.Obj2 }}</li>
              <li v-if="project.Obj3">{{ project.Obj3 }}</li>
              <li v-if="project.Obj4">{{ project.Obj4 }}</li>
            </ul>

            <div v-if="false" class="">
              <h3>Project Manager</h3>
              <ul>
                <li>Lorem: </li>
                <li>Lorem: </li>
                <li>Lorem: </li>
              </ul>
            </div>

            <div class="">
              <h4>Questions?</h4>
              <p>
                For more information about this project please contact public Works at (813) 635-5400 or visit <a href="http://hcflgov.net/atyourservice" target="_blank">At Your Service</a>
              </p>
            </div>
          </div>

          <div class="col-md-7">
            <!-- map -->
            <div class="embed-responsive embed-responsive-16by9 my-3">
              <div is="ProjMap" :geometry="project.geometry"></div>
            </div>
          </div>
        </div>

      </div>

      <hr>

      <div class="d-flex justify-content-end align-items-end">
        <small class="">Current as of <strong>{{ new Date(project.EditDate).toLocaleDateString() }}</strong></small>
      </div>

      <div v-if="isDev" class="my-3 p-3 bg-dark text-light d-print-none">
        <details>
          <summary>Development Details</summary>
          <pre class="text-light">{{ project }}</pre>
        </details>
      </div>

    </div>
  </div>
</template>

<script>
import Project from '../store/models/project'
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
      this.$store.commit('setPageTitle', project.name)
    }).catch(err => console.error(err)).finally(() => {
      this.$store.state.loading = false
    })
  },
  methods: {
    currency (int) {
      int = (int) ? int : 0
      let fixed = (int).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      return `$${fixed}`
    }
  },
  computed: {
    isDev () {
      return (process.env.NODE_ENV !== 'production')
    }
  }
}
</script>
