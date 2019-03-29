export default {
  state: {
    field: 'ProjectName',
    ascending: true
  },
  actions: {
    setSortOrder ({state, commit, getters}, field) {
      commit('setSortAscending', (field == state.field) ? !state.ascending : true)
      commit('setSortField', field)
      return getters.orderByFields
    }
  },
  mutations: {
    setSortField (state, data) {
      state.field = data
    },
    setSortAscending (state, data) {
      state.ascending = data
    }
  },
  getters: {
    orderByFields: state => `${state.field} ${state.ascending ? 'ASC' : 'DESC'}`
  }
}
