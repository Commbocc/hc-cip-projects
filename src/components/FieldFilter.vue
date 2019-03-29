<template lang="html">
  <div class="mb-1 mt-1">
    <label class="mr-sm-1 mb-1" for="">{{ label }}</label>
    <select class="form-control form-control-sm mr-sm-2" :value="value" @change="$emit('input', $event.target.value)">
      <option :value="null">-</option>
      <option v-for="(val, i) in uniqValues" :key="i" :value="val">{{ val }}</option>
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
    },
    value: {
      type: String
    }
  },
  data () {
    return {
      uniqValues: [],
      selected: null
    }
  },
  methods: mapActions(['uniqValuesOfField']),
  mounted () {
    this.uniqValuesOfField(this.field).then(data => {
      this.uniqValues = data
    }).then(() => {
      if (this.$route.query.f) {
        this.$route.query.f.split(',').forEach(f => {
          let pair = f.split(':')
          if (pair[0] == this.field) {
            this.$emit('input', pair[1])
          }
        })
      }
    })
  }
}
</script>
