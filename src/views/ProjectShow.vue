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
    <h1>Show {{ $route.params.id }}</h1>
    <pre>{{ project }}</pre>
  </div>
</template>
