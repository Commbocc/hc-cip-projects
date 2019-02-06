<template lang="html">
  <form @submit.prevent="search" class="mb-3">

    <div class="input-group mb-3">
      <label class="sr-only" for="searchTerm">Search Projects</label>
      <input v-model="term" type="text" id="searchTerm" class="form-control" placeholder="Search Projects" aria-label="Search Projects">
      <div class="input-group-append">
        <button class="btn btn-secondary" type="submit">Search</button>
      </div>
    </div>

    <details class="bg-light p-2 small">
      <summary>Advanced Search</summary>

      <div v-for="(v,k,i) in filters">
        <div is="FieldFilter" v-model="filters[k]" :field="k" :label="filterLabels[i]"></div>
      </div>

      <div class="text-right">
        <button @click.prevent="reset" type="reset" class="btn btn-warning btn-sm mt-2">Reset</button>
      </div>
    </details>

  </form>
</template>

<script>
import FieldFilter from './FieldFilter'

export default {
  components: { FieldFilter },
  data () {
    return {
      term: this.$route.query.q,
      filterLabels: ['Type', 'Phase', 'Area'],
      filters: {
        'SHORT_DESC': null,
        'Current_Phase': null,
        'DESC5': null
      }
    }
  },
  methods: {
    search () {
      this.$router.replace({
        name: 'Index',
        query: {
          q: this.term,
          f: this.filteredStr,
          t: Date.now()
        }
      })
    },
    reset () {
      if (confirm('Are you sure?')) {
        this.$el.reset()
      }
    }
  },
  computed: {
    filteredStr () {
      return Object.keys(this.filters).filter(k => this.filters[k]).map(k => {
        if (this.filters[k]) {
          return `${k}:${this.filters[k]}`
        }
      }).join(',')
    }
  }
}
</script>
