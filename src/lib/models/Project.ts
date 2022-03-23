export default class Project {
  id: string
  cipNumber: string
  name: string
  projectType: string
  category: string
  phase: string
  community: string
  district: string
  planningDate: string
  phaseGraphic: string
  factSheet: string
  designDate: string
  constructionStart: string
  constructionEnd: string
  descriptionOne: string
  descriptionTwo: string
  objectiveOne: string
  objectiveTwo: string
  objectiveThree: string
  objectiveFour: string
  lastEditedDate: string
  projectBudget: string
  planningBudget: string
  designBudget: string
  constructionBudget: string

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
    this.planningDate = attributes['PlanningDate']
    this.factSheet = attributes['thumb_url']
    this.designDate = attributes['DesignDate']
    this.constructionStart = attributes['Constr_Start']
    this.constructionEnd = attributes['Constr_End']
    this.descriptionOne = attributes['DESC1']
    this.descriptionTwo = attributes['DESC2']
    this.objectiveOne = attributes['Obj1']
    this.objectiveTwo = attributes['Obj2']
    this.objectiveThree = attributes['Obj3']
    this.objectiveFour = attributes['Obj4']
    this.lastEditedDate = attributes['last_edited_date']
    this.phaseGraphic = attributes['PhaseGraphic']
    this.projectBudget = this.currency(attributes['Project_Budget'])
    this.planningBudget = this.currency(attributes['PlanningBudget'])
    this.designBudget = this.currency(attributes['DesignBudget'])
    this.constructionBudget = this.currency(attributes['Constr_Budget'])

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
