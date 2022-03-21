import { computed, reactive } from 'vue'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import Project from './models/Project'
import { IReactiveProjects } from './types'
import { pagination, resultOffset } from './pagination'
import { RouteLocationNormalized } from 'vue-router'
import { filters, searchTerm, whereClause, FILTERABLE_FIELDS } from './filters'

export const projectsFeatureLayer = new FeatureLayer({
  url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CIP/CIP_Layers/FeatureServer/2',
})

const queryParams = computed<__esri.QueryProperties>(() => {
  return {
    outFields: ['*'],
    // orderByFields: getters.orderByFields,
    where: whereClause.value,
    num: pagination.resultRecordCount,
    start: resultOffset.value,
  }
})

export const projects = reactive<IReactiveProjects>({
  loading: false,
  error: '',
  data: null,
})

export async function fetchProjects(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
): Promise<void> {
  projects.loading = true

  const { page, q, ...rest } = to.query
  // const { page, q, type, category, phase, community } = to.query

  // pagination
  pagination.page = page
    ? parseInt((Array.isArray(page) ? page?.[0] : page) as string)
    : 1

  // search
  searchTerm.value = q?.toString() || ''

  // filters
  let key: keyof typeof FILTERABLE_FIELDS
  for (key in filters) {
    filters[key] = rest[key]?.toString() || ''
  }

  try {
    const [{ features }, count] = await Promise.all([
      projectsFeatureLayer.queryFeatures(queryParams.value),
      projectsFeatureLayer.queryFeatureCount(queryParams.value),
    ])

    // console.log({ features, count });

    pagination.count = count

    projects.data = features.map((x: any) => new Project(x))
  } catch (error) {
    projects.error = 'An error occurred'
    console.warn(error)
  } finally {
    projects.loading = false
  }
}
