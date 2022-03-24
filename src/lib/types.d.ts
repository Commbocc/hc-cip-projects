interface IReactiveProjects {
  loading: boolean
  error: string
  data: import('./models/Project').default[] | null
}
interface IReactiveSingleProject {
  loading: boolean
  data: import('./models/Project').default | undefined
}

type IFilterableFormField = {
  name: string
  esriField: import('./filters').EFilterableFields
  value: string
}

type TSortableFieldValues = keyof typeof import('./sorting').ESortableFields

interface IReactiveSorting {
  field: TSortableFieldValues
  ascending: boolean
}

interface IReactiveFieldValues {
  loading: boolean
  data: any[] | undefined
}

interface IFormDataQuery {
  [key: string]: string
}
