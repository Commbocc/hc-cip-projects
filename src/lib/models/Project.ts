export default class Project {
  id: number
  cipNumber: string
  name: string
  projectType: string
  category: string
  phase: string
  community: string
  district: string

  geometry?: __esri.Geometry

  constructor({ attributes, geometry }: __esri.Graphic) {
    this.id = attributes['OBJECTID']
    this.cipNumber = attributes['CIP_Number']
    this.name = attributes['ProjectName']
    this.projectType = attributes['Project_Type']
    this.category = attributes['Major_Category']
    this.phase = attributes['Current_Phase']
    this.community = attributes['Community']
    this.district = attributes['Commisioner_District']

    this.geometry = geometry?.toJSON()

    // for (var k in attributes) {
    //   this[k] = attributes[k];
    // }
  }

  currency(val: number): string {
    // let fixed = (this[field]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    const fixed = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return `$${fixed}`
  }

  get path(): string {
    return `/${this.id}`
  }
}
