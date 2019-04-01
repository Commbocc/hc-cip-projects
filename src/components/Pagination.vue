<template lang="html">
  <nav v-if="showPagination" aria-label="Page navigation example" class="my-3 text-center">
    <ul class="pagination justify-content-center flex-wrap">
      <li class="page-item" :class="prevDisabled">
        <a class="page-link" href="#" @click.prevent="goToPage(currentIndex - 1)">Previous</a>
      </li>

      <li v-for="(n, i) in pageCount" :key="i" class="page-item" :class="(i == currentIndex) ? 'active' : null">
        <a class="page-link" href="#" @click.prevent="goToPage(i)">{{ n }}</a>
      </li>

      <li class="page-item" :class="nextDisabled">
        <a class="page-link" href="#" @click.prevent="goToPage(currentIndex + 1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: mapActions(['goToPage']),
  computed: {
    ...mapGetters([
      'showPagination',
      'currentIndex',
      'pageCount'
    ]),
    nextDisabled () {
      return (this.currentIndex + 1 == this.pageCount) ? 'disabled' : null
    },
    prevDisabled () {
      return (this.currentIndex == 0) ? 'disabled' : null
    }
  }
}
</script>
