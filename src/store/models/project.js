import _ from 'lodash'
import axios from 'axios'

export default class Project {
  constructor (feature) {
    this.geometry = feature.geometry
    _.forEach(feature.attributes, (v, k) => {
      this[k] = v
    })
  }

  static get endpoint () {
    return 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CIP/CIP_Layers/FeatureServer/2'
  }

  static get linesEndpoint () {
    return 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CIP/CIP_Layers/FeatureServer/1'
  }

  static All (params = {}) {
    let queryParams = Object.assign({
      f: 'json',
      where: '1=1',
      outFields: '*',
      supportsPagination: true
    }, params)

    let encodedQueryParams = _.map(queryParams, (v, k) => `${k}=${v}`).join('&')

    let url = `${this.endpoint}/query?${encodedQueryParams}`

    return new Promise((resolve, reject) => {
      axios.get(url).then(response => {
        let projects = response.data.features.map(x => new Project(x))
        axios.get(`${url}&returnCountOnly=true`).then(count => {
          resolve({ projects, ...count.data })
        }).catch(err => reject(err))
      }).catch(err => reject(err))
    })
  }

  static Find (id) {
    return axios.get(`${this.endpoint}/${id}?f=json`).then(response => new Project(response.data.feature))
  }

  static uniqValuesOfField (field) {
    return axios.get(`${this.endpoint}/query?outFields=${field}&where=1=1&returnDistinctValues=true&returnGeometry=false&f=json`).then(response => {
      return response.data.features.map(x => x.attributes[field]).sort()
    })
  }

  static SearchString (term = '') {
    let fields = [
      'ProjectName',
      'CIP_Number'
    ]

    let expressions = fields.map(x => `${x}+LIKE+'%25${term}%25'`).join('+OR+')

    return `(${expressions})`
  }

  static FilterString (str) {
    let fields = str.split(',')
    return fields.map(f => {
      let pair = f.split(':')
      return `${pair[0]} = '${pair[1]}'`
    }).join(' AND ')
  }

  get path () {
    return `/${this.OBJECTID}`
  }
}
