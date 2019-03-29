<template lang="html">
  <form @submit.prevent="search" class="mb-3">

    <div class="input-group mb-3">
      <label class="sr-only" for="searchTerm">Search Projects</label>
      <input v-model="term" type="text" id="searchTerm" class="form-control" placeholder="Search Projects" aria-label="Search Projects">
      <div class="input-group-append input-group-btn">
        <button class="btn btn-secondary" type="submit">Search</button>
      </div>
    </div>

    <!-- filters -->
    <section aria-label="Advanced Search" class="bg-white p-2 small">
      <div @click="advSearchOpen = !advSearchOpen" class="py-1" style="cursor: pointer;">
        <h6 class="m-0">
          <span class="fa fa-fw" :class="(advSearchOpen) ? 'fa-chevron-down' : 'fa-chevron-right'" aria-label="Toggle"></span>
          Advanced Search
        </h6>
      </div>
      <!--  -->
      <div v-if="advSearchOpen" class="">
        <div v-for="(v,k,i) in filters" :key="i">
          <div is="FieldFilter" v-model="filters[k]" :field="k" :label="filterLabels[i]"></div>
        </div>

        <div class="text-right">
          <button @click.prevent="reset" type="reset" class="btn btn-warning btn-sm mt-2">Reset</button>
          <button @click.prevent="search" type="submit" class="btn btn-secondary btn-sm mt-2">Search</button>
        </div>
      </div>
    </section>

  </form>
</template>

<script>
import FieldFilter from './FieldFilter'

export default {
  components: { FieldFilter },
  data () {
    return {
      advSearchOpen: (this.$route.query.f) ? true : false,
      term: this.$route.query.q,
      filters: {
        'Project_Type': null,
        'Major_Category': null,
        'Current_Phase': null,
        'Community': null
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
          // t: Date.now()
        }
      })
    },
    reset () {
      if (confirm('Are you sure?')) {
        this.term = null
        Object.keys(this.filters).forEach(k => this.$set(this.filters, k, null))
        this.$el.reset()
        this.search()
      }
    }
  },
  computed: {
    filterLabels () {
      return ['Type', 'Category', 'Phase', 'Community']
    },
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
