import Project from "./models/Project";

interface IReactiveProjects {
  loading: boolean;
  error: string;
  data: Project[] | null;
}

interface IFilterField {
  key: string;
  label: string;
  selectedValue: string | null;
}

interface IReactiveFilters {
  searchTerm: string | null;
  fields: IFilterField[];
}

interface IReactiveFieldValues {
  loading: boolean;
  data: any[] | null;
}
