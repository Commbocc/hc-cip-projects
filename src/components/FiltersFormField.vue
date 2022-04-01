<script setup lang="ts">
import { reactive } from 'vue'
import { projectsFeatureLayer } from '../lib/projects'
import { defaultWhereClause, EFilterableFields, filters } from '../lib/filters'

const props = defineProps<{ field: keyof typeof EFilterableFields }>()

const fieldOptions = reactive<IReactiveFilterableFieldOptions>({
  loading: false,
  data: [],
})

const fetchDistinctValues = async () => {
  fieldOptions.loading = true

  const params: __esri.QueryProperties = {
    outFields: [EFilterableFields[props.field]],
    returnDistinctValues: true,
    where: defaultWhereClause,
  }

  try {
    const { features } = await projectsFeatureLayer.queryFeatures(params)
    fieldOptions.data = features?.map(
      (x) => x.attributes[EFilterableFields[props.field]]
    )
  } catch (error) {
    //
  } finally {
    fieldOptions.loading = false
  }
}

fetchDistinctValues()
</script>

<template>
  <div class="my-1">
    <label class="mr-sm-1 mb-1 text-capitalize" :for="field">
      {{ field }}
    </label>
    <div v-if="fieldOptions.loading">
      Loading Filter... <i class="fas fa-spinner fa-pulse"></i>
    </div>
    <select
      v-else
      class="form-control form-control-sm mr-sm-2"
      :name="field"
      :value="filters[field]"
      :id="field"
    >
      <option value="">-</option>
      <option v-for="(val, i) in fieldOptions.data">{{ val }}</option>
    </select>
  </div>
</template>
