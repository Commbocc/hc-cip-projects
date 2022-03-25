interface IReactiveProjects {
  loading: boolean
  error: string
  data: import('./models/Project').default[] | null
}

interface IReactiveSingleProject {
  loading: boolean
  data: import('./models/Project').default | undefined
}

type TSortableFieldValues = keyof typeof import('./sorting').ESortableFields

interface IReactiveSorting {
  field: TSortableFieldValues
  ascending: boolean
}

interface IReactiveFilterableFieldOptions {
  loading: boolean
  data: any[] | undefined
}
