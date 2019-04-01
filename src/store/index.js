import Vue from 'vue'
import Vuex from 'vuex'

import * as modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { ...modules },
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
