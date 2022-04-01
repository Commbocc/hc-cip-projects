var q=Object.defineProperty,X=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var V=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,G=(e,t)=>{for(var r in t||(t={}))te.call(t,r)&&V(e,r,t[r]);if(_)for(var r of _(t))re.call(t,r)&&V(e,r,t[r]);return e},H=(e,t)=>X(e,ee(t));import{bA as O,_ as s,$ as i,bB as I,a0 as $,ap as x,C as se,Z as ie,H as B,a5 as oe,bz as R,ai as W,J as ne,I as E,bb as ae,ay as le,E as F,D as Y,N as D,bC as C,b1 as pe}from"./vendor.b8b0b9ef.js";import{s as P,o as ue}from"./utils.931ca8bb.js";import{a as ce}from"./GPMessage.9d5ad170.js";const de=e=>{if(!Array.isArray(e))return!1;const[t]=e;return typeof t=="number"||typeof t=="string"};class me{constructor(t={}){this._options=t}toQueryParams(t){if(!t)return null;const r=t.toJSON(),n={};return Object.keys(r).forEach(o=>{const a=this._options[o];if(a){const p=typeof a!="boolean"&&a.name?a.name:o,u=typeof a!="boolean"&&a.getter?a.getter(r):r[o];u!=null&&(n[p]=de(u)?u.join(","):typeof u=="object"?JSON.stringify(u):u)}else n[o]=r[o]},this),n}}function Ue(e){return new me(e)}const ye=O()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"});O()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"});O()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"});O()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"});O()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"});const he=O()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"});O()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"});O()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"});const fe=O()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"});var J;let v=J=class extends x{constructor(e){super(e),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}clone(){return new J(se({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}};s([i({type:[Object],json:{write:!0}})],v.prototype,"attributeParameterValues",void 0),s([i({type:String,json:{write:!0}})],v.prototype,"description",void 0),s([i({type:String,json:{write:!0}})],v.prototype,"distanceAttributeName",void 0),s([i({type:String,json:{write:!0}})],v.prototype,"id",void 0),s([i({type:String,json:{write:!0}})],v.prototype,"impedanceAttributeName",void 0),s([i({type:String,json:{write:!0}})],v.prototype,"name",void 0),s([i({type:[String],json:{write:!0}})],v.prototype,"restrictionAttributeNames",void 0),s([i({type:Number,json:{write:!0}})],v.prototype,"simplificationTolerance",void 0),s([I(ye)],v.prototype,"simplificationToleranceUnits",void 0),s([i({type:String,json:{write:!0}})],v.prototype,"timeAttributeName",void 0),s([I(fe)],v.prototype,"type",void 0),s([i({type:Boolean,json:{write:!0}})],v.prototype,"useHierarchy",void 0),s([I(he)],v.prototype,"uturnAtJunctions",void 0),v=J=s([$("esri.rest.support.TravelMode")],v);const ve=v;let w=class extends x{constructor(e){super(e),this.currentVersion=null,this.defaultTravelMode=null,this.directionsLanguage=null,this.directionsSupportedLanguages=null,this.directionsTimeAttribute=null,this.hasZ=null,this.impedance=null,this.networkDataset=null,this.supportedTravelModes=null}};s([i()],w.prototype,"currentVersion",void 0),s([i()],w.prototype,"defaultTravelMode",void 0),s([i()],w.prototype,"directionsLanguage",void 0),s([i()],w.prototype,"directionsSupportedLanguages",void 0),s([i()],w.prototype,"directionsTimeAttribute",void 0),s([i()],w.prototype,"hasZ",void 0),s([i()],w.prototype,"impedance",void 0),s([i()],w.prototype,"networkDataset",void 0),s([i({type:[ve]})],w.prototype,"supportedTravelModes",void 0),w=s([$("esri.rest.support.NetworkServiceDescription")],w);const ge=w,z=new ie({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let k=class extends ce{constructor(e){super(e),this.type=null}};s([i({type:String,json:{read:z.read,write:z.write}})],k.prototype,"type",void 0),k=s([$("esri.rest.support.NAMessage")],k);const Te=k;let j=class extends B{};s([i()],j.prototype,"events",void 0),s([i()],j.prototype,"strings",void 0),j=s([$("esri.rest.support.DirectionsFeature")],j);const K=j;let g=class extends W{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){var r;if(!e)return[];const n=(r=t.summary.envelope.spatialReference)!=null?r:t.spatialReference,o=n&&ne.fromJSON(n);return e.map(a=>{var p,u;const y=this._decompressGeometry(a.compressedGeometry),A=new E(H(G({},y),{spatialReference:o})),l=(p=(u=a.events)==null?void 0:u.map(M=>{const{arriveTimeUTC:T,ETA:d,point:{x:c,y:h,z:f},strings:N}=M;return new K({geometry:new ae({x:c,y:h,z:f,hasZ:f!==void 0,spatialReference:o}),attributes:{ETA:d,arriveTimeUTC:T},strings:N})}))!=null?p:[];return new K({attributes:a.attributes,events:l,geometry:A,strings:a.strings})})}get mergedGeometry(){if(!this.features)return null;const e=this.features.map(({geometry:r})=>le(r)),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map(({strings:e})=>e)}_decompressGeometry(e){let t=0,r=0,n=0,o=0;const a=[];let p,u,y,A,l,M,T,d,c=0,h=0,f=0;if(l=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),l||(l=[]),parseInt(l[c],32)===0){c=2;const N=parseInt(l[c],32);c++,M=parseInt(l[c],32),c++,1&N&&(h=l.indexOf("|")+1,T=parseInt(l[h],32),h++),2&N&&(f=l.indexOf("|",h)+1,d=parseInt(l[f],32),f++)}else M=parseInt(l[c],32),c++;for(;c<l.length&&l[c]!=="|";){p=parseInt(l[c],32)+t,c++,t=p,u=parseInt(l[c],32)+r,c++,r=u;const N=[p/M,u/M];h&&(A=parseInt(l[h],32)+n,h++,n=A,N.push(A/T)),f&&(y=parseInt(l[f],32)+o,f++,o=y,N.push(y/d)),a.push(N)}return{paths:[a],hasZ:h>0,hasM:f>0}}_mergePolylinesToSinglePath(e,t){if(e.length===0)return new E({spatialReference:t});const r=[];for(const p of e)for(const u of p.paths)r.push(...u);const n=[];r.forEach((p,u)=>{u!==0&&p[0]===r[u-1][0]&&p[1]===r[u-1][1]||n.push(p)});const{hasM:o,hasZ:a}=e[0];return new E({hasM:o,hasZ:a,paths:[n],spatialReference:t})}};s([i({type:oe,json:{read:{source:"summary.envelope"}}})],g.prototype,"extent",void 0),s([i()],g.prototype,"features",void 0),s([R("features")],g.prototype,"readFeatures",null),s([i()],g.prototype,"geometryType",void 0),s([i({readOnly:!0})],g.prototype,"mergedGeometry",null),s([i()],g.prototype,"routeId",void 0),s([i()],g.prototype,"routeName",void 0),s([i({value:null,readOnly:!0})],g.prototype,"strings",null),s([i({json:{read:{source:"summary.totalDriveTime"}}})],g.prototype,"totalDriveTime",void 0),s([i({json:{read:{source:"summary.totalLength"}}})],g.prototype,"totalLength",void 0),s([i({json:{read:{source:"summary.totalTime"}}})],g.prototype,"totalTime",void 0),g=s([$("esri.rest.support.DirectionsFeatureSet")],g);const Ne=g;let S=class extends x{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};s([i({type:Ne,json:{write:!0}})],S.prototype,"directions",void 0),s([i({type:B,json:{write:!0}})],S.prototype,"route",void 0),s([i({type:String,json:{write:!0}})],S.prototype,"routeName",void 0),s([i({type:[B],json:{write:!0}})],S.prototype,"stops",void 0),S=s([$("esri.rest.support.RouteResult")],S);const Ae=S;function L(e){return e&&W.fromJSON(e).features.map(t=>t)}let b=class extends x{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return L(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return L(e)}readPolygonBarriers(e){return L(e)}};s([i({aliasOf:"pointBarriers"})],b.prototype,"barriers",void 0),s([i({type:[Te]})],b.prototype,"messages",void 0),s([i({type:[B]})],b.prototype,"pointBarriers",void 0),s([R("pointBarriers",["barriers","pointBarriers"])],b.prototype,"readPointBarriers",null),s([i({type:[B]})],b.prototype,"polylineBarriers",void 0),s([R("polylineBarriers")],b.prototype,"readPolylineBarriers",null),s([i({type:[B]})],b.prototype,"polygonBarriers",void 0),s([R("polygonBarriers")],b.prototype,"readPolygonBarriers",null),s([i({type:[Ae]})],b.prototype,"routeResults",void 0),b=s([$("esri.rest.support.RouteResultsContainer")],b);const we=b;function je(e,t,r,n){n[r]=[t.length,t.length+e.length],e.forEach(o=>{t.push(o.geometry)})}function De(e,t){for(let r=0;r<t.length;r++){const n=e[t[r]];if(n&&n.length)for(const o of n)o.z=void 0}console.log(`The remote Network Analysis service is powered by a network dataset which is not Z-aware.
Z-coordinates of the input geometry are ignored.`)}function Re(e){const t=[],r=[],{directions:n=[],routes:{features:o=[],spatialReference:a=null}={},stops:{features:p=[],spatialReference:u=null}={},barriers:y,polygonBarriers:A,polylineBarriers:l,messages:M}=e.data,T="esri.tasks.RouteTask.NULL_ROUTE_NAME";let d,c,h=!0;const f=o&&a||p&&u||y&&y.spatialReference||A&&A.spatialReference||l&&l.spatialReference;n.forEach(m=>{t.push(d=m.routeName),r[d]={directions:m}}),o.forEach(m=>{t.indexOf(d=m.attributes.Name)===-1&&(t.push(d),r[d]={}),F(m.geometry)&&(m.geometry.spatialReference=f),r[d].route=m}),p.forEach(m=>{c=m.attributes,t.indexOf(d=c.RouteName||T)===-1&&(t.push(d),r[d]={}),d!==T&&(h=!1),F(m.geometry)&&(m.geometry.spatialReference=f),r[d].stops==null&&(r[d].stops=[]),r[d].stops.push(m)}),p.length>0&&h===!0&&(r[t[0]].stops=r[T].stops,delete r[T],t.splice(t.indexOf(T),1));const N=t.map(m=>(r[m].routeName=m===T?null:m,r[m]));return we.fromJSON({routeResults:N,pointBarriers:y,polygonBarriers:A,polylineBarriers:l,messages:M})}function ke(e,t){for(let r=0;r<t.length;r++){const n=e[t[r]];if(n&&n.length){for(const o of n)if(F(o)&&o.hasZ)return!0}}return!1}async function Pe(e,t,r){if(!e)throw new Y("network-service:missing-url","Url to Network service is missing");const n=P({f:"json",token:t},r),{data:o}=await D(e,n);o.supportedTravelModes||(o.supportedTravelModes=[]);for(let y=0;y<o.supportedTravelModes.length;y++)o.supportedTravelModes[y].id||(o.supportedTravelModes[y].id=o.supportedTravelModes[y].itemId);const a=o.currentVersion>=10.4?Me(e,t,r):be(e,r),{defaultTravelMode:p,supportedTravelModes:u}=await a;return o.defaultTravelMode=p,o.supportedTravelModes=u,ge.fromJSON(o)}async function be(e,t){var r,n;const o=P({f:"json"},t),{data:a}=await D(e.replace(/\/rest\/.*$/i,"/info"),o);if(!a||!a.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};const{owningSystemUrl:p}=a,u=C(p)+"/sharing/rest/portals/self",{data:y}=await D(u,o),A=pe("helperServices.routingUtilities.url",y);if(!A)return{supportedTravelModes:[],defaultTravelMode:null};const l=ue(p),M=/\/solve$/i.test(l.path)?"Route":/\/solveclosestfacility$/i.test(l.path)?"ClosestFacility":"ServiceAreas",T=P({f:"json",serviceName:M},t),d=C(A)+"/GetTravelModes/execute",c=await D(d,T),h=[];let f=null;if(c!=null&&(r=c.data)!=null&&(n=r.results)!=null&&n.length){const m=c.data.results;for(const U of m){var N;if(U.paramName==="supportedTravelModes"){if((N=U.value)!=null&&N.features){for(const{attributes:Z}of U.value.features)if(Z){const Q=JSON.parse(Z.TravelMode);h.push(Q)}}}else U.paramName==="defaultTravelMode"&&(f=U.value)}}return{supportedTravelModes:h,defaultTravelMode:f}}async function Me(e,t,r){try{const n=P({f:"json",token:t},r),o=C(e)+"/retrieveTravelModes",{data:{supportedTravelModes:a,defaultTravelMode:p}}=await D(o,n);return{supportedTravelModes:a,defaultTravelMode:p}}catch(n){throw new Y("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:n})}}export{Te as a,Pe as b,Ne as c,ke as d,Re as f,Ue as o,De as p,je as u};
