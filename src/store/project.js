import { orderBy } from 'lodash'

export default class Project {

  constructor (feature) {
    this.attributes = feature.attributes
    this.geometry = feature.geometry
  }

  static get endpoint () {
    return 'https://services.arcgis.com/apTfC6SUmnNfnxuF/ArcGIS/rest/services/CIP_Points_Final/FeatureServer/0'
  }

  static All (where = "1=1") {
    let fields = "OBJECTID,name,PLACENUMSL,Major_Category,SHORT_DESC,Current_Phase,Commisioner_District,DESC5"
    return fetch(`${this.endpoint}/query?where=${where}&f=json&outFields=${fields}`).then(res => res.json()).then(json => {
      let projects = json.features.map(x => new Project(x))
      return orderBy(projects, ['attributes.name'], ['asc'])
    })
  }

  static Find (id) {
    return fetch(`${this.endpoint}/${id}?f=json`).then(res => res.json()).then(json => new Project(json.feature))
  }

  get path () {
    return `/${this.attributes.OBJECTID}`
  }
}
