var D=Object.defineProperty,R=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var I=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))N.call(t,r)&&I(e,r,t[r]);if(b)for(var r of b(t))Q.call(t,r)&&I(e,r,t[r]);return e},m=(e,t)=>R(e,U(t));import{_ as s,$ as o,a0 as j,ap as q,R as k,bF as C,bG as G,bH as K,eT as V,bI as z,f5 as M,bN as Z,E as d,cv as W,fo as w,bK as B,b9 as H,ae as J,eZ as X,U as g,D as p,aj as Y,N as ee,eU as te,bR as re,gf as se,gg as ie,gh as oe,g7 as ae,bz as h,f7 as ne,fr as le,fs as pe,ft as L,ff as de,gi as ye,e$ as ue,f0 as ce,f1 as he,fw as fe,f2 as ge}from"./vendor.b8b0b9ef.js";import{N as me}from"./SceneService.2f637e28.js";import{s as ve,l as be}from"./FetchAssociatedFeatureLayer.a3c4beff.js";import{s as E,l as Ie,u as we,m as Le}from"./I3SLayerDefinitions.6e30e4cf.js";import"./uuid.e03e9d3d.js";import"./resourceUtils.98795d5a.js";let u=class extends q{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};s([o({type:String,json:{read:!0,write:!0}})],u.prototype,"name",void 0),s([o({type:String,json:{read:!0,write:!0}})],u.prototype,"field",void 0),s([o({type:[Number],json:{read:!0,write:!0}})],u.prototype,"currentRangeExtent",void 0),s([o({type:[Number],json:{read:!0,write:!0}})],u.prototype,"fullRangeExtent",void 0),s([o({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=s([j("esri.layers.support.RangeInfo")],u);const Fe=u,Se=["3DObject","Point"],c=k.getLogger("esri.layers.SceneLayer"),F=ge();let i=class extends me(C(G(K(V(z(M(Z))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return typeof e=="string"?f({url:e},t):e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,a,n,l;const y=(r=this.getFeatureType(t==null?void 0:t.feature))==null||(a=r.domains)==null?void 0:a[e];return y&&y.type!=="inherited"?y:(n=(l=this.getField(e))==null?void 0:l.domain)!=null?n:null}getFeatureType(e){return e&&d(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return d(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return d(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return d(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new W(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:E.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return je[this.profile]||"mesh"}set renderer(e){w(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){const e=d(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:ve,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:a,supportsUploadWithItemId:n,supportsReturnServiceEditsInSourceSpatialReference:l},data:{supportsZ:y,supportsM:O,isVersioned:T,supportsAttachment:_},operations:{supportsEditing:$,supportsUpdate:P,supportsQuery:x,supportsQueryAttachments:A}}=e,v=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:l,supportsRollbackOnFailure:a,supportsGeometryUpdate:!1,supportsUploadWithItemId:n},data:{supportsAttachment:_,supportsZ:y,supportsM:O,isVersioned:T},operations:{supportsQuery:x,supportsQueryAttachments:A,supportsEditing:$&&v,supportsAdd:!1,supportsDelete:!1,supportsUpdate:P&&v}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){e!=null?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return d(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){return d(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return r!=null&&S[r]?S[r]:(c.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=d(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(B).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t)])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>H(this,{origin:"service"},t)).then(()=>w(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}createQuery(){const e=new J;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const a of r.features)a.layer=this,a.sourceLayer=this;return r})}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(c.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return X(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return d(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),g(this.associatedLayer))throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new p("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new p("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const a of this.statisticsInfo)if(a.name===r.name){const n=Y(this.parsedUrl.path,a.href);return ee(n,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(l=>l.data)}throw new p("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,m(f({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(0,e)}async applyEdits(e,t){const r=await import("./editingSupport.ecadd7d4.js");if(await this.load(),g(this.associatedLayer))throw new p(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),r.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&Se.indexOf(e.layerType)===-1)throw new p("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});function t(r,a){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const y=a&&a.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=y;break;case"vertex-reference-frame":n=!0,l=!y;break;default:n=!1}}if(!n)throw new p("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new p("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new p("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(n=>n.name===e.name)),r=!!(d(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(n=>n&&e.name===n.name)),a={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=a}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if(g(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(g(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=te(this);for(let r=0;r<e.length;r++){const a=e[r],n=this.originIdOf(a),l=this.associatedLayer.originIdOf(a);n<l&&(l===2||l===3)&&t.setAtOrigin(a,this.associatedLayer[a],l)}}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].indexOf(this.profile)===-1)return;const t=new be(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){re(r)||this._logWarningOnPopupEnabled()}}_logWarningOnPopupEnabled(){se(this,["popupTemplate","popupEnabled"],()=>this.popupEnabled&&this.popupTemplate!=null).then(()=>()=>{const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?c.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):c.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)})}_validateElevationInfo(){const e=this.elevationInfo;e&&(this.profile==="mesh-pyramids"&&e.mode!=="absolute-height"&&c.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&c.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};s([o({types:{key:"type",base:ie,typeMap:{selection:oe}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],i.prototype,"featureReduction",void 0),s([o({type:[Fe],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],i.prototype,"rangeInfos",void 0),s([o({json:{read:!1}})],i.prototype,"associatedLayer",void 0),s([o({type:["show","hide"]})],i.prototype,"listMode",void 0),s([o({type:["ArcGISSceneServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),s([o(m(f({},F.fields),{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],i.prototype,"fields",void 0),s([o()],i.prototype,"types",null),s([o()],i.prototype,"typeIdField",null),s([o()],i.prototype,"formTemplate",null),s([o({readOnly:!0})],i.prototype,"fieldsIndex",null),s([o({type:ae,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),s([o(F.outFields)],i.prototype,"outFields",void 0),s([o({type:E,readOnly:!0,json:{read:!1}})],i.prototype,"nodePages",void 0),s([h("service","nodePages",["nodePages","pointNodePages"])],i.prototype,"readNodePages",null),s([o({type:[Ie],readOnly:!0})],i.prototype,"materialDefinitions",void 0),s([o({type:[we],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),s([o({type:[Le],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),s([o({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),s([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),s([o({readOnly:!0})],i.prototype,"statisticsInfo",void 0),s([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),s([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([o(ne)],i.prototype,"elevationInfo",null),s([o({type:String})],i.prototype,"geometryType",null),s([o(le)],i.prototype,"labelsVisible",void 0),s([o({type:[pe],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:L},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:L},write:!0}})],i.prototype,"labelingInfo",void 0),s([o(de)],i.prototype,"legendEnabled",void 0),s([o({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var r,a;if(typeof e=="number"&&e>=0&&e<=1)return e;const n=(r=t.layerDefinition)==null||(a=r.drawingInfo)==null?void 0:a.transparency;return n!==void 0?ye(n):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],i.prototype,"opacity",void 0),s([o({types:ue,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",null),s([o({json:{read:!1}})],i.prototype,"cachedDrawingInfo",void 0),s([h("service","cachedDrawingInfo")],i.prototype,"readCachedDrawingInfo",null),s([o({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),s([o({type:Boolean,json:{read:!1}})],i.prototype,"editingEnabled",null),s([o(ce)],i.prototype,"popupEnabled",void 0),s([o({type:he,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),s([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),s([o({type:String,json:{read:!1}})],i.prototype,"objectIdField",void 0),s([h("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdField",null),s([o({type:String,json:{read:!1}})],i.prototype,"globalIdField",void 0),s([h("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdField",null),s([o({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),s([o({type:String,json:{read:!1}})],i.prototype,"profile",void 0),s([h("service","profile",["store.profile"])],i.prototype,"readProfile",null),s([o({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),s([o(fe)],i.prototype,"screenSizePerspectiveEnabled",void 0),i=s([j("esri.layers.SceneLayer")],i);const S={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},je={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},Ae=i;export{Ae as default};
