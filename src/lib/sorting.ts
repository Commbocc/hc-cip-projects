import { computed, reactive } from 'vue'
import { queryFeatures } from './projects'

export enum ESortableFields {
  name = 'ProjectName',
  type = 'Project_Type',
  phase = 'Current_Phase',
  community = 'Community',
}

export const sorting = reactive<IReactiveSorting>({
  field: 'name',
  ascending: true,
})

export function setSortOrder(field: TSortableFieldValues) {
  sorting.ascending = field === sorting.field ? !sorting.ascending : true
  sorting.field = field
  queryFeatures()
}

export const sortOrderClause = computed(() => [
  `${ESortableFields[sorting.field]} ${sorting.ascending ? 'ASC' : 'DESC'}`,
])
