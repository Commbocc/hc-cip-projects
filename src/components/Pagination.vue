<template lang="html">
  <nav v-if="showPagination" aria-label="Page navigation example" class="my-3 text-center">
    <ul class="pagination justify-content-center flex-wrap">
      <li class="page-item" :class="prevDisabled">
        <a class="page-link" href="#" @click.prevent="prevPage">Previous</a>
      </li>

      <li v-for="(n, i) in pageCount" :key="i" class="page-item" :class="isActive(i)">
        <a class="page-link" href="#" @click.prevent="goTo(i)">{{ n }}</a>
      </li>

      <li class="page-item" :class="nextDisabled">
        <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    isActive (i) {
      return (i == this.currentIndex) ? 'active' : null
    },
    goTo (p) {
      this.$router.push({
        name: 'Index',
        query: {
          ...this.$route.query,
          p
        }
      })
    },
    prevPage () {
      this.goTo(this.currentIndex-1)
    },
    nextPage () {
      this.goTo(this.currentIndex+1)
    }
  },
  computed: {
    ...mapGetters([
      'showPagination',
      'currentIndex',
      'pageCount'
    ]),
    nextDisabled () {
      return (this.currentIndex+1 == this.pageCount) ? 'disabled' : null
    },
    prevDisabled () {
      return (this.currentIndex == 0) ? 'disabled' : null
    }
  }
}
</script>
