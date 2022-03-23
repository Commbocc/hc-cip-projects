<script setup lang="ts">
import { projects, fetchProjects } from '../lib/projects'
import { onBeforeRouteUpdate } from 'vue-router'
import FiltersForm from '../components/FiltersForm.vue'
import PaginationNav from '../components/PaginationNav.vue'
import TableHeader from '../components/TableHeader.vue'

onBeforeRouteUpdate(fetchProjects)
</script>

<template>
  <FiltersForm />

  <div v-if="projects.loading" class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else-if="projects.data?.length" class="table-responsive">
    <table class="table table-striped mb-0">
      <thead>
        <tr>
          <TableHeader field="name">Project</TableHeader>
          <TableHeader field="type">Type</TableHeader>
          <TableHeader field="phase">Phase</TableHeader>
          <TableHeader field="community">Community</TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects.data">
          <td>
            <router-link :to="project.path">
              {{ project.name }}
            </router-link>
            <br />
            <small class="text-muted"> #{{ project.cipNumber }} </small>
          </td>
          <td class="small text-muted">
            {{ project.projectType }} -
            {{ project.category }}
          </td>
          <td class="small text-muted">
            {{ project.phase }}
          </td>
          <td class="small text-muted">
            {{ project.community }} -
            {{ project.district }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-else class="bg-light text-center text-muted p-5">
    <p class="h4 font-weight-bold m-0">No Results</p>
    <p class="m-0">
      <span class="fas fa-search fa-2x mt-3" aria-hidden="true"></span>
    </p>
  </div>

  <!-- <pre>{{ projects }}</pre> -->

  <PaginationNav />
</template>
