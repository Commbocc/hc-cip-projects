export default {
  state: {
    count: 0
  },
  mutations: {
    setCount (state, data) {
      state.count = data
    }
  },
  getters: {
    currentIndex: (state, getters, rootState) => Math.ceil(rootState.projects.resultOffset/rootState.projects.resultRecordCount),
    pageCount: (state, getters, rootState) => Math.ceil(state.count/rootState.projects.resultRecordCount)
  }
}
