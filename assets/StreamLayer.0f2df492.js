var x=Object.defineProperty,j=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var m=(t,i,o)=>i in t?x(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,p=(t,i)=>{for(var o in i||(i={}))R.call(i,o)&&m(t,o,i[o]);if(f)for(var o of f(i))F.call(i,o)&&m(t,o,i[o]);return t},c=(t,i)=>j(t,T(i));import{_ as e,$ as s,a0 as I,ap as N,R as P,fm as O,eS as D,fn as k,eT as E,eV as _,bF as L,bG as J,bH as U,bI as A,fl as C,bN as G,J as S,D as d,E as V,bK as q,fo as h,gj as z,fN as M,gk as W,eZ as Z,ae as B,N as H,fp as K,b9 as Q,e_ as X,fq as Y,a5 as ee,eJ as g,fr as te,fs as ie,ft as re,ff as se,ao as v,gl as oe,gm as ae,f0 as ne,f1 as le,fv as pe,e$ as de,bz as b,fw as ye,bM as ue,gn as fe,go as me,f2 as ce}from"./vendor.b8b0b9ef.js";var u;let n=u=class extends N{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new u({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([s({type:Number,json:{write:!0}})],n.prototype,"age",void 0),e([s({type:Number,json:{write:!0}})],n.prototype,"ageReceived",void 0),e([s({type:Number,json:{write:!0}})],n.prototype,"displayCount",void 0),e([s({type:Number,json:{write:!0}})],n.prototype,"maxObservations",void 0),n=u=e([I("esri.layers.support.PurgeOptions")],n);const $=n,he=P.getLogger("esri.layers.StreamLayer"),w=ce();let r=class extends O(D(k(E(_(L(J(U(A(C(G)))))))))){constructor(...t){super(...t),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new $,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=S.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(t,i){return typeof t=="string"?p({url:t},i):t}load(t){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const i=V(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},t).catch(q).then(()=>this._fetchService(i))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(t){h(t,this.fieldsIndex),this._set("renderer",t)}readRenderer(t,i,o){const a=(i=i.layerDefinition||i).drawingInfo&&i.drawingInfo.renderer||void 0;if(a){const l=z(a,i,o)||void 0;return l||he.error("Failed to create renderer",{rendererDefinition:i.drawingInfo.renderer,layer:this,context:o}),l}if(i.defaultSymbol)return i.types&&i.types.length?new M({defaultSymbol:y(i.defaultSymbol,i,o),field:i.typeIdField,uniqueValueInfos:i.types.map(l=>({id:l.id,symbol:y(l.symbol,l,o)}))}):new W({symbol:y(i.defaultSymbol,i,o)})}createPopupTemplate(t){return Z(this,t)}createQuery(){const t=new B;return t.returnGeometry=!0,t.outFields=["*"],t.where=this.definitionExpression||"1=1",t}getFieldDomain(t,i){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===t&&(o=a.domain),!!o)),o}getField(t){return this.fieldsIndex.get(t)}async _fetchService(t){var i;if(this.webSocketUrl){var o;if((o=this.timeInfo)==null||!o.trackIdField)throw new d("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new d("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new d("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new d("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:a}=await H(this.parsedUrl.path,{query:p(p({f:"json"},this.customParameters),this.parsedUrl.query),responseType:"json",signal:t});this.sourceJSON=a}return this.sourceJSON=c(p({},(i=this.sourceJSON)!=null?i:{}),{objectIdField:"__esri_stream_id__"}),this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),h(this.renderer,this.fieldsIndex),K(this.timeInfo,this.fieldsIndex),Q(this,{origin:"service"})}};e([s({type:String})],r.prototype,"copyright",void 0),e([s({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),e([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],r.prototype,"definitionExpression",void 0),e([s({type:String})],r.prototype,"displayField",void 0),e([s({type:X})],r.prototype,"elevationInfo",void 0),e([s(Y)],r.prototype,"featureReduction",void 0),e([s(w.fields)],r.prototype,"fields",void 0),e([s(w.fieldsIndex)],r.prototype,"fieldsIndex",void 0),e([s({type:ee})],r.prototype,"geometryDefinition",void 0),e([s({type:g.apiValues,json:{read:{reader:g.read}}})],r.prototype,"geometryType",void 0),e([s(te)],r.prototype,"labelsVisible",void 0),e([s({type:[ie],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:re},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],r.prototype,"labelingInfo",void 0),e([s(se)],r.prototype,"legendEnabled",void 0),e([s({type:["show","hide"]})],r.prototype,"listMode",void 0),e([s({type:v})],r.prototype,"maxReconnectionAttempts",void 0),e([s({type:v})],r.prototype,"maxReconnectionInterval",void 0),e([s(oe)],r.prototype,"maxScale",void 0),e([s(ae)],r.prototype,"minScale",void 0),e([s({type:String})],r.prototype,"objectIdField",void 0),e([s({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],r.prototype,"operationalLayerType",void 0),e([s(ne)],r.prototype,"popupEnabled",void 0),e([s({type:le,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),e([s({type:$})],r.prototype,"purgeOptions",void 0),e([s({types:pe,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:de,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],r.prototype,"renderer",null),e([b("service","renderer",["drawingInfo.renderer","defaultSymbol"]),b("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],r.prototype,"readRenderer",null),e([s(ye)],r.prototype,"screenSizePerspectiveEnabled",void 0),e([s({type:S,json:{origins:{service:{read:{source:"spatialReference"}}}}})],r.prototype,"spatialReference",void 0),e([s({json:{read:!1}})],r.prototype,"type",void 0),e([s(ue)],r.prototype,"url",void 0),e([s({type:Number})],r.prototype,"updateInterval",void 0),e([s({type:String})],r.prototype,"webSocketUrl",void 0),r=e([I("esri.layers.StreamLayer")],r);const y=fe({types:me}),be=r;export{be as default};
