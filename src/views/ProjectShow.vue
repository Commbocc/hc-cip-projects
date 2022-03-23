<script setup lang="ts">
import { computed } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { fetchProject, singleProject } from '../lib/projects'

const project = computed(() => singleProject.data)

onBeforeRouteUpdate(fetchProject)
</script>

<template>
  <div v-if="singleProject.loading">Loading...</div>
  <div v-else-if="project">
    <h1 class="mb-0 font-weight-bold">
      {{ project.name }}
    </h1>

    <h2 class="mb-0 text-primary font-weight-bold">#{{ project.cipNumber }}</h2>

    <hr />

    <!-- facts -->
    <div id="project-facts">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h3>Quick Facts</h3>
          <a v-if="project.factSheet" :href="project.factSheet" target="_blank">
            Printable Fact Sheet
          </a>
          <ul>
            <li>Location: {{ project.community }}</li>
            <li>Project Type: {{ project.projectType }}</li>
            <li>Phase: {{ project.phase }}</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img
            v-if="project.phaseGraphic"
            :src="project.phaseGraphic"
            :alt="`Current Project Phase: ${project.phase}`"
            class="img-fluid img-responsive my-3"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <h3>Schedule</h3>
          <ul>
            <li>Planning complete: {{ project.planningDate }}</li>
            <li>Design complete: {{ project.designDate }}</li>
            <li>Construction begins: {{ project.constructionStart }}</li>
            <li>Construction complete: {{ project.constructionEnd }}</li>
          </ul>
        </div>

        <div class="col-md-6">
          <h3>Budget Breakdown</h3>
          <ul>
            <li>
              Total: {{ project.projectBudget }}
              <ul>
                <li v-if="project.planningBudget">
                  Planning: {{ project.planningBudget }}
                </li>
                <li v-if="project.designBudget">
                  Design and Land: {{ project.designBudget }}
                </li>
                <li v-if="project.constructionBudget">
                  Construction: {{ project.constructionBudget }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="">
        <h3>Overview</h3>
        <ul>
          <li v-if="project.descriptionOne">{{ project.descriptionOne }}</li>
          <li v-if="project.descriptionTwo">{{ project.descriptionTwo }}</li>
          <!-- <li v-if="project.DESC3">{{ project.DESC3 }}</li> -->
        </ul>
      </div>

      <div class="row">
        <div class="col-md-12">
          <!-- <div class="col-md-5"> -->
          <h3>Objectives</h3>
          <ul>
            <li v-if="project.objectiveOne">{{ project.objectiveOne }}</li>
            <li v-if="project.objectiveTwo">{{ project.objectiveTwo }}</li>
            <li v-if="project.objectiveThree">{{ project.objectiveThree }}</li>
            <li v-if="project.objectiveFour">{{ project.objectiveFour }}</li>
          </ul>

          <div class="">
            <h4>Questions?</h4>
            <p>
              For more information about this project please contact (813)
              635-5400 or visit
              <a href="https://hcflgov.net/atyourservice" target="_blank"
                >At Your Service</a
              >
            </p>
          </div>
          <!-- </div> -->

          <!-- <div class="col-md-7"> -->
          <!-- map -->
          <div
            v-if="false"
            class="embed-responsive embed-responsive-16by9 my-3"
          >
            <div is="ProjMap" :geometry="project.geometry"></div>
          </div>
        </div>
      </div>
    </div>

    <p class="small font-italic">
      Note: The cost and schedule data shown here are the County's current best
      estimates and are subject to frequent change. Changes (if any) are updated
      once a month.
    </p>

    <hr />

    <div class="d-flex justify-content-end align-items-end">
      <small class=""
        >Current as of
        <strong>{{
          new Date(project.lastEditedDate).toLocaleDateString()
        }}</strong></small
      >
    </div>
  </div>
</template>
