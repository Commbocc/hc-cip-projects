export default class Project {
  constructor (feature) {
    this.geometry = feature.geometry
    for (var k in feature.attributes) {
      this[k] = feature.attributes[k]
    }
  }

  currency (field) {
    let fixed = (this[field]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    return `$${fixed}`
  }

  get path () {
    return `/${this.OBJECTID}`
  }
}
