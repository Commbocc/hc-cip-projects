import { computed, reactive } from "vue";

export const pagination = reactive({
  count: 0,
  page: 1,
  resultRecordCount: 50,
});

export const resultOffset = computed(
  () => (pagination.page - 1) * pagination.resultRecordCount,
);

export const currentIndex = computed(() =>
  Math.ceil(resultOffset.value / pagination.resultRecordCount),
);

export const pageCount = computed(() =>
  Math.ceil(pagination.count / pagination.resultRecordCount),
);

export const showPagination = computed(
  () => pagination.count > pagination.resultRecordCount,
);
