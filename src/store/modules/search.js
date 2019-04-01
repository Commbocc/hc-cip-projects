export default {
  state: {
    term: '',
    drawer: false
  },
  mutations: {
    toggleSearchDrawer (state) {
      state.drawer = !state.drawer
    },
    resetSearch (state) {
      state.term = ''
    }
  },
  getters: {
    searchClause: state => {
      return (state.term) ? [
        'ProjectName',
        'CIP_Number'
      ].map(x => `${x} LIKE '%${state.term}%'`).join(' OR ') : null
    }
  }
}
