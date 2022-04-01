<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { singleProject } from '../lib/projects'
const route = useRoute()

const isIndex = computed(() => route.name === 'Index')
const indexTitle = 'Capital Improvement Projects'
</script>

<template>
  <nav aria-label="breadcrumb" class="bg-light">
    <ol class="breadcrumb p-2">
      <!-- index -->
      <li v-if="isIndex" class="breadcrumb-item active" aria-current="page">
        {{ indexTitle }}
      </li>
      <li v-else class="breadcrumb-item">
        <router-link to="/">
          {{ indexTitle }}
        </router-link>
      </li>

      <!-- show -->
      <li v-if="!isIndex" class="breadcrumb-item active" aria-current="page">
        {{ singleProject?.data?.name }}
      </li>
    </ol>
  </nav>
</template>
