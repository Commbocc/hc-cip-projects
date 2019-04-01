import _compact from 'lodash.compact'

const defaultFields = () => ({
  'Project_Type': {
    label: 'Type',
    selected: null
  },
  'Major_Category': {
    label: 'Category',
    selected: null
  },
  'Current_Phase': {
    label: 'Phase',
    selected: null
  },
  'Community': {
    label: 'Community',
    selected: null
  }
})

export default {
  state: {
    fields: defaultFields()
  },
  actions: {
    fetchDistinctValuesOfField ({ getters }, field) {
      let params = {
        outFields: field,
        returnDistinctValues: true,
        where: getters.defaultWhere
      }

      return new Promise((resolve, reject) => {
        getters.projectsFeatureLayer.then(fl => {
          fl.queryFeatures(params).then(response => {
            let values = response.features.map(x => x.attributes[field])
            resolve(_compact(values))
          }).catch(err => reject(err))
        }).catch(err => reject(err))
      })
    }
  },
  mutations: {
    resetFilters (state) {
      state.fields = defaultFields()
    }
  },
  getters: {
    filterClause: state => {
      let expressions = Object.keys(state.fields).map(k => (state.fields[k].selected) ? `${k} = '${state.fields[k].selected}'` : null)
      return _compact(expressions).join(' AND ')
    }
  }
}
