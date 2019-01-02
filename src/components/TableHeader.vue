<template lang="html">
  <th>
    <a href="#" @click.prevent="sortBy" class="text-secondary">
      <slot></slot>
      <small v-if="activeField" class="fas text-info" :class="chevronClass"></small>
    </a>
  </th>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions(['setSortOrder']),
    sortBy () {
      this.setSortOrder(this.field).then(sortStr => {
        this.$router.push({
          name: 'Index',
          query: {
            s: sortStr
          }
        })
      })
    }
  },
  computed: {
    ...mapState({
      sortField: state => state.sorting.field,
      sortAsc: state => state.sorting.ascending
    }),
    activeField () {
      return (this.sortField == this.field)
    },
    chevronClass () {
      return (this.sortAsc) ? 'fa-chevron-up' : 'fa-chevron-down'
    }
  },
  props: {
    field: {
      type: String,
      required: true
    }
  }
}
</script>
