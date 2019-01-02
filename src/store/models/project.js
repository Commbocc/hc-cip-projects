import _ from 'lodash'

export default class Project {
  constructor (feature) {
    this.geometry = feature.geometry
    _.forEach(feature.attributes, (v, k) => {
      this[k] = v
    })
  }

  static get endpoint () {
    return 'https://services.arcgis.com/apTfC6SUmnNfnxuF/ArcGIS/rest/services/CIP_Points_Final/FeatureServer/0'
  }

  static All (params = {}) {
    let outFields = "OBJECTID,name,PLACENUMSL,Major_Category,SHORT_DESC,Current_Phase,Commisioner_District,DESC5"

    let queryParams = Object.assign({
      f: 'json',
      where: '1=1',
      outFields,
      supportsPagination: true
    }, params)

    let encodedQueryParams = _.map(queryParams, (v, k) => `${k}=${v}`).join('&')

    let url = `${this.endpoint}/query?${encodedQueryParams}`

    return new Promise((resolve, reject) => {
      fetch(url).then(res => res.json()).then(json => {
        let projects = json.features.map(x => new Project(x))
        fetch(`${url}&returnCountOnly=true`).then(res => res.json()).then(count => {
          resolve({ projects, ...count })
        }).catch(err => reject(err))
      }).catch(err => reject(err))
    })
  }

  static Find (id) {
    return fetch(`${this.endpoint}/${id}?f=json`).then(res => res.json()).then(json => new Project(json.feature))
  }

  static SearchString (term = '') {
    let expressions = [
      'name',
      'CAST (PLACENUMSL AS VARCHAR)'
    ]
    return expressions.map(x => `${x} LIKE '%${term}%'`).join(' OR ')
  }

  get path () {
    return `/${this.OBJECTID}`
  }
}
