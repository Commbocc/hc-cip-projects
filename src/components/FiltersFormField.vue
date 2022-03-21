<script setup lang="ts">
import { reactive } from 'vue'
import { projectsFeatureLayer } from '../lib/projects'
import { defaultWhereClause } from '../lib/filters'

interface IReactiveFieldValues {
  loading: boolean
  data: any[] | undefined
}

const props = defineProps<{ field: any }>()

const fieldValues = reactive<IReactiveFieldValues>({
  loading: false,
  data: [],
})

const fetchDistinctValues = async () => {
  fieldValues.loading = true

  const params: __esri.QueryProperties = {
    outFields: [props.field.esriField],
    returnDistinctValues: true,
    where: defaultWhereClause,
  }

  try {
    const { features } = await projectsFeatureLayer.queryFeatures(params)
    fieldValues.data = features?.map((x) => x.attributes[props.field.esriField])
  } catch (error) {
    //
  } finally {
    fieldValues.loading = false
  }
}

fetchDistinctValues()
</script>

<template>
  <div class="my-1">
    <label class="mr-sm-1 mb-1 text-capitalize" for="">{{ field.name }}</label>
    <div v-if="fieldValues.loading">
      Loading Filter... <i class="fas fa-spinner fa-pulse"></i>
    </div>
    <select
      v-else
      class="form-control form-control-sm mr-sm-2"
      :name="field.name"
      :value="field.value"
    >
      <option value="">-</option>
      <option v-for="(val, i) in fieldValues.data">{{ val }}</option>
    </select>
  </div>
</template>
