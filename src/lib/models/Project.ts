export default class Project {
  id: string
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
    // this.someMoneyValue = this.currency(attributes['A_Number_Field'])

    this.geometry = geometry?.toJSON()
  }

  currency(val: number): string {
    const fixed = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return `$${fixed}`
  }

  get path(): string {
    return `/${this.id}`
  }
}
