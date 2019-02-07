import Vue from 'vue'
import Vuex from 'vuex'

import projects from './projects'
import pagination from './pagination'
import sorting from './sorting'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { projects, pagination, sorting },
  state: {
    loading: false,
    pageTitle: 'Capital Improvement Projects'
  },
  mutations: {
    setLoading (state, data = true) {
      state.loading = data
    },
    setPageTitle (state, data = 'Capital Improvement Projects') {
      state.pageTitle = data
    }
  }
})
