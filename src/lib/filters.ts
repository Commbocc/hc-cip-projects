import { computed, reactive } from "vue";
import { IReactiveFilters } from "./types";

export const filters = reactive<IReactiveFilters>({
  searchTerm: "",
  fields: [
    {
      key: "Project_Type",
      label: "Type",
      selectedValue: null,
    },
    {
      key: "Major_Category",
      label: "Category",
      selectedValue: null,
    },
    {
      key: "Current_Phase",
      label: "Phase",
      selectedValue: null,
    },
    {
      key: "Community",
      label: "Community",
      selectedValue: null,
    },
  ],
});

export const defaultWhereClause = `Current_Phase <> 'Completed'`;

export const whereClause = computed(() =>
  [defaultWhereClause, searchClause.value, filterClause.value]
    .filter(Boolean)
    .join(" AND "),
);

export const searchClause = computed(() =>
  filters.searchTerm
    ? ["ProjectName", "CIP_Number"]
        .map((x) => `${x} LIKE '%${filters.searchTerm}%'`)
        .join(" OR ")
    : null,
);

export const filterClause = computed(() => {
  const expressions = filters.fields.map((field) =>
    field.selectedValue ? `${field.key} = '${field.selectedValue}'` : null,
  );
  return expressions.filter(Boolean).join(" AND ");
});
