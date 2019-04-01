import Project from '../models/project'

export default {
  state: {
    index: [],
    active: null
  },
  actions: {
    fetchProjects ({ commit, getters }, resetPaging = false) {
      commit('setLoading')

      if (resetPaging) {
        commit('setOffset', 0)
      }

      getters.projectsFeatureLayer.then(fl => {
        Promise.all([
          fl.queryFeatures(getters.queryParams),
          fl.queryFeatureCount(getters.queryParams)
        ]).then(response => {
          commit('setProjects', response[0].features.map(x => new Project(x)))
          commit('setCount', response[1])
        }).catch(err => console.error(err)).then(() => {
          commit('setLoading', false)
        })
      })
    },
    fetchProject ({ commit, getters }, id) {
      commit('setLoading')

      return getters.projectsFeatureLayer.then(fl => {
        return fl.queryFeatures({
          where: `OBJECTID = '${id}'`,
          outFields: '*'
        }).then(response => {
          if (response.features.length) {
            commit('setLoading', false)
            return commit('setActiveProject', new Project(response.features[0]))
          }
        })
      })
    }
  },
  mutations: {
    setProjects (state, data) {
      state.index = data
    },
    setActiveProject (state, data) {
      state.active = data
    }
  },
  getters: {
    hasProjects: state => state.index.length
  }
}
