import Project from './models/project'

export default {
  state: {
    index: []
  },
  actions: {
    fetchProjects ({ state, commit, rootState }, toRoute) {
      commit('setLoading')

      // pagination
      let pageIndex = toRoute.p || 0
      commit('setOffset', pageIndex)

      // filters
      let queryParams = {
        orderByFields: toRoute.s || 'name ASC',
        resultRecordCount: rootState.pagination.resultRecordCount,
        resultOffset: rootState.pagination.resultOffset
      }

      var whereClause = [
        // 'Display IS NOT NULL',
        // 'thumb_url IS NOT NULL'
      ]

      // search
      if (toRoute.q) {
        whereClause.push(Project.SearchString(toRoute.q))
      }

      // field filters
      if (toRoute.f) {
        whereClause.push(Project.FilterString(toRoute.f))
      }

      if (whereClause.length) {
        queryParams.where = whereClause.join(' AND ')
      }

      return Project.All(queryParams).then(response => {
        commit('setProjects', response.projects)
        commit('setCount', response.count)
      }).catch(err => console.error(err)).then(() => {
        commit('setLoading', false)
      })
    },
    uniqValuesOfField ({}, field) {
      return Project.uniqValuesOfField(field)
    }
  },
  mutations: {
    setProjects (state, data) {
      state.index = data
    }
  },
  getters: {
    hasProjects: state => (state.index.length > 0)
  }
}
