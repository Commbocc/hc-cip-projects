import { computed, reactive } from 'vue'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import Project from './models/Project'
import { pagination, resultOffset } from './pagination'
import { RouteLocationNormalized } from 'vue-router'
import { EFilterableFields, filters, searchTerm, whereClause } from './filters'
import { sortOrderClause } from './sorting'

export const projectsFeatureLayer = new FeatureLayer({
  url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CIP/CIP_Layers/FeatureServer/2',
})

const queryParams = computed<__esri.QueryProperties>(() => {
  return {
    outFields: ['*'],
    orderByFields: sortOrderClause.value,
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

export async function queryFeatures() {
  projects.loading = true

  try {
    const [{ features }, count] = await Promise.all([
      projectsFeatureLayer.queryFeatures(queryParams.value),
      projectsFeatureLayer.queryFeatureCount(queryParams.value),
    ])

    pagination.count = count

    projects.data = features.map((x: any) => new Project(x))
  } catch (error) {
    projects.error = 'An error occurred'
    console.warn(error)
  } finally {
    projects.loading = false
  }
}

export async function fetchProjects(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
): Promise<void> {
  const { page, q, ...filterQueryParams } = to.query

  // pagination
  pagination.page = page
    ? parseInt((Array.isArray(page) ? page?.[0] : page) as string)
    : 1

  // search
  searchTerm.value = q?.toString() || ''

  // filters
  let key: keyof typeof EFilterableFields
  for (key in filters) {
    filters[key] = filterQueryParams[key]?.toString() || ''
  }

  queryFeatures()
}

//
export const singleProject = reactive<IReactiveSingleProject>({
  loading: false,
  data: undefined,
})

export async function fetchProject(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  singleProject.data = undefined
  singleProject.loading = true

  try {
    const { id } = to.params

    const {
      features: [feature],
    } = await projectsFeatureLayer.queryFeatures({
      where: `OBJECTID = '${id}'`,
      outFields: ['*'],
    })

    singleProject.data = new Project(feature)
  } catch (error) {
    // 404
  } finally {
    singleProject.loading = false
  }
}
