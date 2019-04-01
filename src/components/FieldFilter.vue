<template lang="html">
  <div class="my-1">
    <label class="mr-sm-1 mb-1" for="">{{ label }}</label>
    <div v-if="loading">Loading Filter... <i class="fas fa-spinner fa-pulse"></i></div>
    <select v-else v-model="$store.state.filters.fields[field].selected" class="form-control form-control-sm mr-sm-2">
      <option :value="null">-</option>
      <option v-for="(val, i) in values" :key="i">{{ val }}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    field: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data: () => ({
    loading: false,
    values: []
  }),
  mounted () {
    this.loading = true
    this.fetchDistinctValuesOfField(this.field).then(x => this.values = x).then(() => this.loading = false)
  },
  methods: mapActions(['fetchDistinctValuesOfField'])
}
</script>
