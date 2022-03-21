<script setup lang="ts">
import { reactive } from "vue";
import { defaultWhereClause, projectsFeatureLayer } from "../lib";
import { IFilterField, IReactiveFieldValues } from "../lib/types";

const props = defineProps<{ filterField: IFilterField }>();

const fieldValues = reactive<IReactiveFieldValues>({
  loading: false,
  data: null,
});

const fetchDistinctValues = async (field: string) => {
  fieldValues.loading = true;

  const params: __esri.QueryProperties = {
    outFields: [props.filterField.key],
    returnDistinctValues: true,
    where: defaultWhereClause,
  };

  try {
    const { features } = await projectsFeatureLayer.queryFeatures(params);
    fieldValues.data = features.map((x) => x.attributes[props.filterField.key]);
  } catch (error) {
    //
  } finally {
    fieldValues.loading = false;
  }
};

fetchDistinctValues(props.filterField.key);
</script>

<template>
  <div class="my-1">
    <label class="mr-sm-1 mb-1" for="">{{ filterField.label }}</label>
    <div v-if="fieldValues.loading">
      Loading Filter... <i class="fas fa-spinner fa-pulse"></i>
    </div>
    <select
      v-else
      v-model="filterField.selectedValue"
      class="form-control form-control-sm mr-sm-2"
    >
      <option :value="null">-</option>
      <option v-for="(val, i) in fieldValues.data">{{ val }}</option>
    </select>
  </div>
</template>
