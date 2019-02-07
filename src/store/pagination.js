export default {
  state: {
    count: 0,
    resultRecordCount: 50,
    resultOffset: 0
  },
  mutations: {
    setCount (state, data) {
      state.count = data
    },
    setOffset (state, pageIndex) {
      state.resultOffset = state.resultRecordCount * pageIndex
    },
    setPerPage (state, data) {
      state.resultRecordCount = data
    }
  },
  getters: {
    currentIndex: (state) => Math.ceil(state.resultOffset/state.resultRecordCount),
    pageCount: (state) => Math.ceil(state.count/state.resultRecordCount),
    showPagination: (state) => (state.count > state.resultRecordCount)
  }
}
