<template lang="html">
  <div v-if="project">

    <h1 class="mb-0 font-weight-bold">
      {{ project.ProjectName }}
    </h1>

    <h2 class="mb-0 text-primary font-weight-bold">
      #{{ project.CIP_Number }}
    </h2>

    <hr>

    <!-- facts -->
    <div id="project-facts">

      <div class="row align-items-center">
        <div class="col-md-6">
          <h3>Quick Facts</h3>
          <a v-if="project.thumb_url" :href="project.thumb_url" target="_blank">
            Printable Fact Sheet
          </a>
          <ul>
            <li>Location: {{ project.Community }}</li>
            <li>Project Type: {{ project.Project_Type }}</li>
            <li>Phase: {{ project.Current_Phase }}</li>
          </ul>
        </div>

        <div class="col-md-6">
          <img v-if="project.PhaseGraphic" :src="project.PhaseGraphic" :alt="`Current Project Phase: ${project.Current_Phase}`" class="img-fluid img-responsive my-3">
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
              Total: {{ project.currency('Project_Budget') }}
              <ul>
                <li v-if="project.DesignBudget">Design: {{ project.currency('DesignBudget') }}</li>
                <li v-if="project.PlanningBudget">Land Acquisition: {{ project.currency('PlanningBudget') }}</li>
                <li v-if="project.Constr_Budget">Construction: {{ project.currency('Constr_Budget') }}</li>
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
          <!-- <li v-if="project.DESC3">{{ project.DESC3 }}</li> -->
        </ul>
      </div>

      <div class="row">
        <div class="col-md-12">
          <!-- <div class="col-md-5"> -->
          <h3>Objectives</h3>
          <ul>
            <li v-if="project.Obj1">{{ project.Obj1 }}</li>
            <li v-if="project.Obj2">{{ project.Obj2 }}</li>
            <li v-if="project.Obj3">{{ project.Obj3 }}</li>
            <li v-if="project.Obj4">{{ project.Obj4 }}</li>
          </ul>

          <div class="">
            <h4>Questions?</h4>
            <p>
              For more information about this project please contact (813) 635-5400 or visit <a href="https://hcflgov.net/atyourservice" target="_blank">At Your Service</a>
            </p>
          </div>
          <!-- </div> -->

          <!-- <div class="col-md-7"> -->
          <!-- map -->
          <div v-if="false" class="embed-responsive embed-responsive-16by9 my-3">
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
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import Project from '../store/models/project'
// import ProjMap from '../components/Map'

export default {
  props: ['id'],
  // components: { ProjMap },
  created () {
    this.fetchProject(this.id).then(() => {
      this.$store.commit('setPageTitle', this.project.ProjectName)
    })
  },
  methods: mapActions(['fetchProject']),
  computed: {
    ...mapState({
      project: state => state.projects.active
    }),
    isDev () {
      return (process.env.NODE_ENV !== 'production')
    }
  }
}
</script>
