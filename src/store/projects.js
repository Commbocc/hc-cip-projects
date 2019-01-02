import Project from './models/project'

export default {
  state: {
    index: [],
    resultRecordCount: 50,
    resultOffset: 0
  },
  actions: {
    fetchProjects ({ state, commit }, toRoute) {
      commit('setLoading')

      // pagination
      let pageIndex = toRoute.p || 0
      commit('setOffset', state.resultRecordCount * pageIndex)

      // filters
      let queryParams = {
        orderByFields: toRoute.s || 'name ASC',
        resultRecordCount: state.resultRecordCount,
        resultOffset: state.resultOffset
      }

      // search
      if (toRoute.q) {
        queryParams.where = Project.SearchString(toRoute.q)
      }

      return Project.All(queryParams).then(response => {
        commit('setProjects', response.projects)
        commit('setCount', response.count)
      }).catch(err => console.error(err)).then(() => {
        commit('setLoading', false)
      })
    }
  },
  mutations: {
    setProjects (state, data) {
      state.index = data
    },
    setPerPage (state, data) {
      state.resultRecordCount = data
    },
    setOffset (state, data) {
      state.resultOffset = data
    }
  },
  getters: {
    hasProjects: state => (state.index.length > 0)
  }
}
