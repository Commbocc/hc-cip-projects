<template lang="html">
  <form @submit="search" class="form-inline">

    <details>
      <summary class="mb-2 small">Advanced Filtering</summary>
      <div class="input-group mb-3">
        <label class="sr-only" for="searchTerm">Search Projects</label>
        <input v-model="term" type="text" id="searchTerm" class="form-control" placeholder="Search Projects" aria-label="Search Projects">
        <div class="input-group-append">
          <button class="btn btn-secondary" type="submit">Search</button>
        </div>
      </div>
    </details>

  </form>
</template>

<script>
export default {
  data () {
    return {
      term: this.$route.query.q
    }
  },
  methods: {
    search () {
      this.$router.push({
        name: 'Index',
        query: {
          q: this.term
        }
      })
    }
  }
}
</script>
