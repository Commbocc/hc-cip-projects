<script setup lang="ts">
import { computed } from 'vue'
import { pagination, showPagination, pageCount } from '../lib/pagination'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const prevDisabled = computed<boolean>(() => pagination.page === 1)
const nextDisabled = computed<boolean>(
  () => pagination.page + 1 > pageCount.value
)

const goToPage = (page: number) => {
  router.push({
    path: '/',
    query: {
      ...route.query,
      page,
    },
  })
}
</script>

<template>
  <nav
    v-if="showPagination"
    aria-label="Page navigation example"
    class="my-3 text-center"
  >
    <ul class="pagination justify-content-center flex-wrap">
      <!-- prev -->
      <li class="page-item" :class="{ disabled: prevDisabled }">
        <a
          class="page-link"
          href="#"
          @click.prevent="goToPage(pagination.page - 1)"
        >
          Previous
        </a>
      </li>

      <!-- loop -->
      <li
        v-for="(n, i) in pageCount"
        class="page-item"
        :class="n == pagination.page ? 'active' : null"
      >
        <a class="page-link" href="#" @click.prevent="goToPage(n)">{{ n }}</a>
      </li>

      <!-- next -->
      <li class="page-item" :class="{ disabled: nextDisabled }">
        <a
          class="page-link"
          href="#"
          @click.prevent="goToPage(pagination.page + 1)"
        >
          Next
        </a>
      </li>
    </ul>
  </nav>
</template>
