export default class Project {
  id: number;
  cipNumber: string;
  name: string;
  projectType: string;
  category: string;
  phase: string;
  community: string;

  geometry?: __esri.Geometry;

  constructor(feature: __esri.Graphic) {
    this.id = feature.attributes["OBJECTID"];
    this.cipNumber = feature.attributes["CIP_Number"];
    this.name = feature.attributes["ProjectName"];
    this.projectType = feature.attributes["Project_Type"];
    this.category = feature.attributes["Major_Category"];
    this.phase = feature.attributes["Current_Phase"];
    this.community = feature.attributes["Community"];

    this.geometry = feature.geometry?.toJSON();

    // for (var k in feature.attributes) {
    //   this[k] = feature.attributes[k];
    // }
  }

  currency(val: number): string {
    // let fixed = (this[field]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    const fixed = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `$${fixed}`;
  }

  get path(): string {
    return `/${this.id}`;
  }
}
