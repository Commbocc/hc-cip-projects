import { computed, reactive, ref } from 'vue'

export const searchTerm = ref<string>('')

export enum EFilterableFields {
  type = 'Project_Type',
  category = 'Major_Category',
  phase = 'Current_Phase',
  community = 'Community',
}

export const filters = reactive<Record<keyof typeof EFilterableFields, string>>(
  {
    type: '',
    category: '',
    phase: '',
    community: '',
  }
)

export const defaultWhereClause = `Current_Phase <> 'Completed'`

export const whereClause = computed(() =>
  [searchClause.value, defaultWhereClause, filterClause.value]
    .filter(Boolean)
    .join(' AND ')
)

export const searchClause = computed(() => {
  if (!searchTerm.value) return null
  const value = ['ProjectName', 'CIP_Number']
    .map((x) => `${x} LIKE '%${searchTerm.value}%'`)
    .join(' OR ')
  return `(${value})`
})

export const filterClause = computed(() => {
  let expressions: string[] = []

  let key: keyof typeof EFilterableFields
  for (key in filters) {
    if (!filters[key]) continue
    expressions.push(`${EFilterableFields[key]} = '${filters[key]}'`)
  }
  return expressions.join(' AND ')
})
