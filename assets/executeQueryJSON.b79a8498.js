var I=Object.defineProperty;var f=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var m=(n,t,o)=>t in n?I(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,l=(n,t)=>{for(var o in t||(t={}))g.call(t,o)&&m(n,o,t[o]);if(f)for(var o of f(t))b.call(t,o)&&m(n,o,t[o]);return n};import{_ as i,$ as a,ao as y,a0 as x,ap as v,ae as u,ai as j}from"./vendor.b8b0b9ef.js";import{o as c}from"./utils.931ca8bb.js";import{x as w,d as N,c as O}from"./query.c705041e.js";function S(n){const{exifInfo:t,exifName:o,tagName:r}=n;if(!t||!o||!r)return null;const s=t.find(d=>d.name===o);return s?$({tagName:r,tags:s.tags}):null}function $(n){const{tagName:t,tags:o}=n;if(!o||!t)return null;const r=o.find(s=>s.name===t);return r&&r.value||null}var p;const k={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let e=p=class extends v{constructor(n){super(n),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:n}=this,t=S({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:n});return k[t]||null}clone(){return new p({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};i([a({type:String})],e.prototype,"contentType",void 0),i([a()],e.prototype,"exifInfo",void 0),i([a({readOnly:!0})],e.prototype,"orientationInfo",null),i([a({type:y})],e.prototype,"id",void 0),i([a({type:String})],e.prototype,"globalId",void 0),i([a({type:String})],e.prototype,"keywords",void 0),i([a({type:String})],e.prototype,"name",void 0),i([a({json:{read:!1}})],e.prototype,"parentGlobalId",void 0),i([a({json:{read:!1}})],e.prototype,"parentObjectId",void 0),i([a({type:y})],e.prototype,"size",void 0),i([a({json:{read:!1}})],e.prototype,"url",void 0),e=p=i([x("esri.layers.support.AttachmentInfo")],e);const E=e;async function F(n,t,o){const r=c(n);return w(r,u.from(t),l({},o)).then(s=>s.data.count)}async function J(n,t,o){const r=c(n);return N(r,u.from(t),l({},o)).then(s=>s.data.objectIds)}async function R(n,t,o){const r=await z(n,t,o);return j.fromJSON(r)}async function z(n,t,o){const r=c(n),s=l({},o),d=u.from(t),{data:h}=await O(r,d,d.sourceSpatialReference,s);return h}export{z as a,R as b,E as l,F as n,J as s};
