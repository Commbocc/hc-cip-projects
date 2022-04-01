<script setup lang="ts">
import { setSortOrder, sorting } from '../lib/sorting'

defineProps<{ field: TSortableFieldValues }>()
</script>

<template>
  <th>
    <a
      href="#"
      @click.prevent="setSortOrder(field)"
      class="text-secondary d-flex justify-content-between align-items-center"
    >
      <span>
        <slot></slot>
      </span>

      <svg
        v-if="sorting.field === field"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          v-if="sorting.ascending"
          fill-rule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
        <path
          v-else
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </a>
  </th>
</template>
