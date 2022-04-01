import{bu as p,as as l,cu as o,E as g,cv as _,ay as d,D as u,cq as f,bR as w,R as E}from"./vendor.b8b0b9ef.js";import{e as q,n as F}from"./featureConversionUtils.e458978f.js";import{m as S}from"./FeatureStore.eebe7e5e.js";import{g as x,L as T,f as b}from"./QueryEngine.1366a379.js";import{O as I,L as j}from"./geojson.96f6f98d.js";import{d as C}from"./sourceUtils.a10b6a11.js";import{K as P}from"./wfsUtils.ea46c7cf.js";import"./OptimizedGeometry.11fe4dff.js";import"./OptimizedFeatureSet.2633cdc7.js";import"./PooledRBush.5396116a.js";import"./quickselect.32614045.js";import"./centroid.d50789f9.js";import"./normalizeUtils.7353462f.js";import"./ItemCache.866d790e.js";import"./WhereClause.cf4da79a.js";import"./projection.4e77876b.js";import"./json.2d0d6862.js";import"./QueryEngineCapabilities.83e56447.js";import"./utils.4264471a.js";import"./ClassBreaksDefinition.612bb8f1.js";import"./xmlUtils.9790bce4.js";class Y{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await P(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await I(s),p(e);const a=j(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!l(this._queryEngine.spatialReference,o))for(const r of a)g(r.geometry)&&(r.geometry=q(x(F(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};C(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:h,objectIdField:y,customParameters:m}=e;this._featureType=h,this._customParameters=m,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new _(r),await this._checkProjection(n),p(t),this._queryEngine=new T({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new S({geometryType:i,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(d(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=f(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),w(s)||E.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await b(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{Y as default};
