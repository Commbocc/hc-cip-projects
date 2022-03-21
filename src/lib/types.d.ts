import { FILTERABLE_FIELDS } from './filters'
import Project from './models/Project'

interface IReactiveProjects {
  loading: boolean
  error: string
  data: Project[] | null
}

type IFilterableFormField = {
  name: string
  esriField: FILTERABLE_FIELDS
  value: string
}
