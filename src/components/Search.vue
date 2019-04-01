<template lang="html">
  <form @submit.prevent="fetchProjects(true)" @reset.prevent="reset" class="mb-3">

    <div class="input-group mb-3">
      <label class="sr-only" for="searchTerm">Search Projects</label>
      <input v-model="$store.state.search.term" type="text" id="searchTerm" class="form-control" placeholder="Search Projects" aria-label="Search Projects">
      <div class="input-group-append input-group-btn">
        <button class="btn btn-secondary" type="submit">Search</button>
      </div>
    </div>

    <!-- filters -->
    <div aria-label="Advanced Search" class="bg-white small">
      <a @click.prevent="toggleSearchDrawer" href="#" class="p-2 h6 text-secondary text-decoration-none d-block">
        <span class="fa fa-fw" :class="(searchDrawer) ? 'fa-chevron-down' : 'fa-chevron-right'" aria-label="Toggle"></span>
        Advanced Search
      </a>

      <div v-show="searchDrawer" class="p-2">

        <div v-for="(v,k,i) in filterFields" is="FieldFilter" :key="i" :field="k" :label="v.label"></div>

        <!-- actions -->
        <div class="text-right">
          <button type="reset" class="btn btn-warning btn-sm mt-2">Reset</button>
          <button type="submit" class="btn btn-secondary btn-sm mt-2">Search</button>
        </div>
      </div>
    </div>

  </form>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import FieldFilter from './FieldFilter'

export default {
  components: { FieldFilter },
  computed: mapState({
    filterFields: state => state.filters.fields,
    searchTerm: state => state.search.term,
    searchDrawer: state => state.search.drawer
  }),
  methods: {
    ...mapActions(['fetchProjects']),
    ...mapMutations([
      'toggleSearchDrawer',
      'resetSearch',
      'resetFilters'
    ]),
    reset () {
      if (confirm('Are you sure?')) {
        this.resetSearch()
        this.resetFilters()
        this.$el.reset()
        this.fetchProjects(true)
      }
    }
  }
}
</script>
