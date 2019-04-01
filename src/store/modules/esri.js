import { loadModules } from 'esri-loader'
import _compact from 'lodash.compact'

export default {
  getters: {
    projectsFeatureLayer: () => {
      return loadModules(['esri/layers/FeatureLayer']).then(([FeatureLayer]) => {
        return new FeatureLayer({
          url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CIP/CIP_Layers/FeatureServer/2'
        })
      })
    },
    linesFeatureLayer: () => {
      return loadModules(['esri/layers/FeatureLayer']).then(([FeatureLayer]) => {
        return new FeatureLayer({
          url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CIP/CIP_Layers/FeatureServer/1'
        })
      })
    },
    defaultWhere: () => "Current_Phase <> 'Completed'",
    whereClause: (state, getters) => {
      return _compact([
        getters.defaultWhere,
        getters.searchClause,
        getters.filterClause
      ]).join(' AND ')
    },
    queryParams: (state, getters, rootState) => {
      return {
        outFields: '*',
        orderByFields: getters.orderByFields,
        num: rootState.pagination.resultRecordCount,
        start: rootState.pagination.resultOffset,
        where: getters.whereClause
      }
    }
  }
}
