import { computed, reactive, ref } from 'vue'

export const searchTerm = ref<string>('')

export enum FILTERABLE_FIELDS {
  type = 'Project_Type',
  category = 'Major_Category',
  phase = 'Current_Phase',
  community = 'Community',
}

export const filters = reactive({
  type: '',
  category: '',
  phase: '',
  community: '',
})

export const defaultWhereClause = `Current_Phase <> 'Completed'`

export const whereClause = computed(() =>
  [defaultWhereClause, searchClause.value, filterClause.value]
    .filter(Boolean)
    .join(' AND ')
)

export const searchClause = computed(() =>
  searchTerm.value
    ? ['ProjectName', 'CIP_Number']
        .map((x) => `${x} LIKE '%${searchTerm.value}%'`)
        .join(' OR ')
    : null
)

export const filterClause = computed(() => {
  let expressions: string[] = []

  let key: keyof typeof FILTERABLE_FIELDS
  for (key in filters) {
    if (!filters[key]) break
    expressions.push(`${FILTERABLE_FIELDS[key]} = '${filters[key]}'`)
  }
  return expressions.join(' AND ')
})
