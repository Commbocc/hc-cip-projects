var Ui=Object.defineProperty,Vi=Object.defineProperties;var Hi=Object.getOwnPropertyDescriptors;var Gt=Object.getOwnPropertySymbols;var ki=Object.prototype.hasOwnProperty,Gi=Object.prototype.propertyIsEnumerable;var Wt=(t,e,r)=>e in t?Ui(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,V=(t,e)=>{for(var r in e||(e={}))ki.call(e,r)&&Wt(t,r,e[r]);if(Gt)for(var r of Gt(e))Gi.call(e,r)&&Wt(t,r,e[r]);return t},Re=(t,e)=>Vi(t,Hi(e));import{a as Wi}from"./devEnvironmentUtils.444b8fd1.js";import{N as $r,bT as Fr,cH as N,dz as Pt,dK as qi,g$ as yt,h0 as ji,eh as Xi,U,aB as Ki,R as Se,eA as Ye,gT as qt,h1 as jt,E as v,h2 as wt,aE as Qi,fX as Xt,gL as Yi,eB as Le,gU as ze,h3 as Zi,aW as Ji,bU as eo,dv as Kt,ag as to,D as Pr,d7 as ro,bJ as pe,h4 as io,d5 as oo,cN as no,dm as $e,h5 as ao,h6 as so,dq as St,di as nt,dh as at,eQ as ye,dp as Et,dt as Q,dr as Er,gS as oe,dR as lo,dn as Dr,cI as co,dB as uo,dD as Ct,du as ho,h7 as mo,h8 as Qt,h9 as Or,eP as mt,a3 as fo,ha as po,cJ as go,_ as R,dN as vo,hb as Ze,bx as Rr,ay as xo,bK as Lr,hc as Yt,hd as zr,ck as bo,dC as _o,he as Zt}from"./vendor.b8b0b9ef.js";import{e as Ir,a as To,j as Jt,f as yo,r as er,c as wo}from"./vec33.bd51d8d6.js";import{a as Je}from"./quat.cc27939b.js";import{c as Mt,x as He,u as Nr,i as Me,L as So,O as tr,E as Co}from"./BufferView.b4397dad.js";import{m as rr,u as Mo,p as Ao,s as $o,q as Fo,a as st,v as we,w as Po,l as Eo,n as Do,o as Ce,r as be,b as Oo,c as Ro,f as ir,e as Lo,t as zo,i as Io,h as No,j as Bo}from"./DefaultMaterial_COLOR_GAMMA.d65e4d18.js";import{r as Br}from"./Version.edd17048.js";import"./vec2.dbb3cbe2.js";import{o as k,r as G,s as We,f as or,c as lt,n as Uo,u as Vo}from"./Texture.8104da2b.js";import{A as Ur}from"./InterleavedLayout.495b0ffd.js";import{t as Ho}from"./vec3f32.9cc42d31.js";async function Vr(t,e){const{data:r}=await $r(t,V({responseType:"image"},e));return r}class ko{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function W(t,e){if(!t){e=e||"assert";const r=new Error(e);throw r.stack&&console.log(r.stack),new ko(e)}}class Dt{constructor(e,r,i,o){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=o,this.center=N(),W(e.length>=1),W(i.length%this._numIndexPerPrimitive==0),W(i.length>=e.length*this._numIndexPerPrimitive),W(o.size===3||o.size===4);const{data:n,size:a}=o,s=e.length;let c=a*i[this._numIndexPerPrimitive*e[0]];ge.clear(),ge.push(c),this.bbMin=Pt(n[c],n[c+1],n[c+2]),this.bbMax=qi(this.bbMin);for(let u=0;u<s;++u){const f=this._numIndexPerPrimitive*e[u];for(let m=0;m<this._numIndexPerPrimitive;++m){c=a*i[f+m],ge.push(c);let p=n[c];this.bbMin[0]=Math.min(p,this.bbMin[0]),this.bbMax[0]=Math.max(p,this.bbMax[0]),p=n[c+1],this.bbMin[1]=Math.min(p,this.bbMin[1]),this.bbMax[1]=Math.max(p,this.bbMax[1]),p=n[c+2],this.bbMin[2]=Math.min(p,this.bbMin[2]),this.bbMax[2]=Math.max(p,this.bbMax[2])}}yt(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let u=0;u<ge.length;++u){c=ge.getItemAt(u);const f=n[c]-this.center[0],m=n[c+1]-this.center[1],p=n[c+2]-this.center[2],h=f*f+m*m+p*p;if(h<=l)continue;const b=Math.sqrt(h),y=.5*(b-this.radius);this.radius=this.radius+y,l=this.radius*this.radius;const _=y/b;this.center[0]+=f*_,this.center[1]+=m*_,this.center[2]+=p*_}ge.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(ji(this.bbMin,this.bbMax)>1){const e=yt(N(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let l=0;l<8;++l)o[l]=0;const{data:n,size:a}=this.position;for(let l=0;l<r;++l){let u=0;const f=this._numIndexPerPrimitive*this.primitiveIndices[l];let m=a*this.indices[f],p=n[m],h=n[m+1],b=n[m+2];for(let y=1;y<this._numIndexPerPrimitive;++y){m=a*this.indices[f+y];const _=n[m],I=n[m+1],A=n[m+2];_<p&&(p=_),I<h&&(h=I),A<b&&(b=A)}p<e[0]&&(u|=1),h<e[1]&&(u|=2),b<e[2]&&(u|=4),i[l]=u,++o[u]}let s=0;for(let l=0;l<8;++l)o[l]>0&&++s;if(s<2)return;const c=new Array(8);for(let l=0;l<8;++l)c[l]=o[l]>0?new Uint32Array(o[l]):void 0;for(let l=0;l<8;++l)o[l]=0;for(let l=0;l<r;++l){const u=i[l];c[u][o[u]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)c[l]!==void 0&&(this._children[l]=new Dt(c[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){ge.prune()}}const ge=new Fr({deallocator:null});class Ot{constructor(){this.id=Xi()}unload(){}}class Hr extends Ot{constructor(e,r=[],i=0,o=-1){super(),this._primitiveType=i,this.edgeIndicesLength=o,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,a]of e)a&&this._vertexAttributes.set(n,V({},a));if(r==null||r.length===0){const n=Go(this._vertexAttributes),a=rr(n);this.edgeIndicesLength=this.edgeIndicesLength<0?n:this.edgeIndicesLength;for(const s of this._vertexAttributes.keys())this._indices.set(s,a)}else for(const[n,a]of r)a&&(this._indices.set(n,Wo(a)),n==="position"&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r.data=Array.from(r.data),r.exclusive=!0),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return U(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===0?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const r=this.indices.get("position"),i=this.vertexAttributes.get("position");return Mo(i,r,e)}computeAttachmentOriginPoints(e){const r=this.indices.get("position"),i=this.vertexAttributes.get("position");return Ao(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(e.length===0)return null;const r=this.primitiveType===0?3:1;W(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=rr(e.length/r),o=this.vertexAttributes.get("position");return new Dt(i,r,e,o)}}function Go(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function Wo(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}function qo(){if(U(ft)){const t=e=>Ki(`esri/libs/basisu/${e}`);ft=import("./basis_transcoder.9bee1268.js").then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return ft}let ft;function jo(t,e){return t.vertexBuffers[e].size/Xo(t.layout[e])}function Xo(t){return t[0].stride}function Ko(t,e,r,i,o){const n=t.gl,a=t.capabilities.instancing;t.bindBuffer(r);for(const s of i){const c=e.get(s.name);c===void 0&&console.error(`There is no location for vertex attribute '${s.name}' defined.`),s.baseInstance&&!s.divisor&&console.error(`Vertex attribute '${s.name}' uses baseInstanceOffset without divisor.`);const l=(o||(0+s.baseInstance?s.baseInstance:0))*s.stride;if(s.count<=4)n.vertexAttribPointer(c,s.count,s.type,s.normalized,s.stride,s.offset+l),n.enableVertexAttribArray(c),s.divisor>0&&a&&a.vertexAttribDivisor(c,s.divisor);else if(s.count===9)for(let u=0;u<3;u++)n.vertexAttribPointer(c+u,3,s.type,s.normalized,s.stride,s.offset+12*u+l),n.enableVertexAttribArray(c+u),s.divisor>0&&a&&a.vertexAttribDivisor(c+u,s.divisor);else if(s.count===16)for(let u=0;u<4;u++)n.vertexAttribPointer(c+u,4,s.type,s.normalized,s.stride,s.offset+16*u+l),n.enableVertexAttribArray(c+u),s.divisor>0&&a&&a.vertexAttribDivisor(c+u,s.divisor);else console.error("Unsupported vertex attribute element count: "+s.count)}}function Qo(t,e,r,i){const o=t.gl,n=t.capabilities.instancing;t.bindBuffer(r);for(const a of i){const s=e.get(a.name);if(a.count<=4)o.disableVertexAttribArray(s),a.divisor&&a.divisor>0&&n&&n.vertexAttribDivisor(s,0);else if(a.count===9)for(let c=0;c<3;c++)o.disableVertexAttribArray(s+c),a.divisor&&a.divisor>0&&n&&n.vertexAttribDivisor(s+c,0);else if(a.count===16)for(let c=0;c<4;c++)o.disableVertexAttribArray(s+c),a.divisor&&a.divisor>0&&n&&n.vertexAttribDivisor(s+c,0);else console.error("Unsupported vertex attribute element count: "+a.count)}t.unbindBuffer(34962)}function kr(t){switch(t){case 6406:case 6409:case 36168:case 33778:case 33779:case 37490:case 37491:case 37496:case 37497:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34837:return 12;case 34836:return 16;case 33776:case 33777:case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return .5}return 0}function At(t){if(U(t))return 0;if("descriptor"in t)return t.glName?At(t.descriptor):0;const e=t.internalFormat||"pixelFormat"in t&&t.pixelFormat;if(!e)return 0;const r="hasMipmap"in t&&t.hasMipmap?1.3:1,i=t.width*t.height;return kr(e)*i*r}let Y=null,qe=null;async function Gr(){return U(qe)&&(qe=qo(),Y=await qe),qe}function Yo(t,e){if(U(Y))return t.byteLength;const r=new Y.BasisFile(new Uint8Array(t)),i=qr(r)?Wr(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function Zo(t,e){if(U(Y))return t.byteLength;const r=new Y.KTX2File(new Uint8Array(t)),i=jr(r)?Wr(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function Wr(t,e,r,i,o){const n=kr(e?37496:37492),a=o&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*n*a)}function qr(t){return t.getNumImages()>=1&&!t.isUASTC()}function jr(t){return t.getFaces()>=1&&t.isETC1S()}async function Jo(t,e,r){U(Y)&&(Y=await Gr());const i=new Y.BasisFile(new Uint8Array(r));if(!qr(i))return null;i.startTranscoding();const o=Xr(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(n,a)=>i.getImageTranscodedSizeInBytes(0,n,a),(n,a,s)=>i.transcodeImage(s,0,n,a,0,0));return i.close(),i.delete(),o}async function en(t,e,r){U(Y)&&(Y=await Gr());const i=new Y.KTX2File(new Uint8Array(r));if(!jr(i))return null;i.startTranscoding();const o=Xr(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(n,a)=>i.getImageTranscodedSizeInBytes(n,0,0,a),(n,a,s)=>i.transcodeImage(s,n,0,0,a,0,-1,-1));return i.close(),i.delete(),o}function Xr(t,e,r,i,o,n,a,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=t.capabilities,[u,f]=c?i?[1,37496]:[0,37492]:l?i?[3,33779]:[2,33776]:[13,6408],m=e.hasMipmap?r:Math.min(1,r),p=[];for(let _=0;_<m;_++)p.push(new Uint8Array(a(_,u))),s(_,u,p[_]);const h=p.length>1,b=h?9987:9729,y=Re(V({},e),{samplingMode:b,hasMipmap:h,internalFormat:f,width:o,height:n});return new k(t,y,{type:"compressed",levels:p})}const Ie=Se.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),tn=542327876,rn=131072,on=4;function Rt(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function nn(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const an=Rt("DXT1"),sn=Rt("DXT3"),ln=Rt("DXT5"),cn=31,dn=0,un=1,hn=2,mn=3,fn=4,pn=7,gn=20,vn=21;function xn(t,e,r){const{textureData:i,internalFormat:o,width:n,height:a}=bn(r,e.hasMipmap);return e.samplingMode=i.levels.length>1?9987:9729,e.hasMipmap=i.levels.length>1,e.internalFormat=o,e.width=n,e.height=a,new k(t,e,i)}function bn(t,e){const r=new Int32Array(t,0,cn);if(r[dn]!==tn)return Ie.error("Invalid magic number in DDS header"),null;if(!(r[gn]&on))return Ie.error("Unsupported format, must contain a FourCC code"),null;const i=r[vn];let o,n;switch(i){case an:o=8,n=33776;break;case sn:o=16,n=33778;break;case ln:o=16,n=33779;break;default:return Ie.error("Unsupported FourCC code:",nn(i)),null}let a=1,s=r[fn],c=r[mn];(3&s)==0&&(3&c)==0||(Ie.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,u=c;let f,m;r[hn]&rn&&e!==!1&&(a=Math.max(1,r[pn])),a===1||Ye(s)&&Ye(c)||(Ie.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let p=r[un]+4;const h=[];for(let b=0;b<a;++b)m=(s+3>>2)*(c+3>>2)*o,f=new Uint8Array(t,p,m),h.push(f),p+=m,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:h},internalFormat:n,width:l,height:u}}const ct=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),_n=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Tn=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}],se=Se.getLogger("esri.views.webgl.BufferObject");class et{constructor(e,r,i,o,n){this._context=e,this.bufferType=r,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(G.Buffer,this),this._glName=this._context.gl.createBuffer(),We(this._context.gl),o&&this.setData(o,n)}static createIndex(e,r,i,o){return new et(e,34963,r,i,o)}static createVertex(e,r,i){return new et(e,34962,r,i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===34962?this._size:this._indexType===5125?4*this._size:2*this._size}dispose(){var e;(e=this._context)!=null&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(G.Buffer,this),this._context=null):this._glName&&se.warn("Leaked WebGL buffer object")}setData(e,r){if(!e)return;if(typeof e=="number"){if(e<0&&se.error("Buffer size cannot be negative!"),this._size=e,this.bufferType===34963&&r)switch(this._indexType=r,this._size=e,r){case 5123:e*=2;break;case 5125:e*=4}}else{let n=e.byteLength;qt(e)&&(n/=2,this._indexType=5123),jt(e)&&(n/=4,this._indexType=5125),this._size=n}const i=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const o=this._context.gl;o.bufferData(this.bufferType,e,this.usage),We(o),this._context.bindVAO(i)}setSubData(e,r=0,i=0,o=e.byteLength){if(!e)return;(r<0||r>=this._size)&&se.error("offset is out of range!");let n=r,a=i,s=o,c=e.byteLength;qt(e)?(c/=2,n*=2,a*=2,s*=2):jt(e)&&(c/=4,n*=4,a*=4,s*=4),o===void 0&&(o=c-1),i>=o&&se.error("end must be bigger than start!"),r+i-o>this._size&&se.error("An attempt to write beyond the end of the buffer!");const l=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const u=this._context.gl,f=ArrayBuffer.isView(e)?e.buffer:e,m=a===0&&s===e.byteLength?f:f.slice(a,s);u.bufferSubData(this.bufferType,n,m),We(u),this._context.bindVAO(l)}setSubDataFromView(e,r,i,o){if(!e)return;(r<0||r>=this._size)&&se.error("offset is out of range!"),i>=o&&se.error("end must be bigger than start!"),r+i-o>this._size&&se.error("An attempt to write beyond the end of the buffer!");const n=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const a=this._context.gl,s=i===0&&o===e.length?e:e.subarray(i,o);a.bufferSubData(this.bufferType,r*e.BYTES_PER_ELEMENT,s),We(a),this._context.bindVAO(n)}}const ve=Se.getLogger("esri.views.webgl.VertexArrayObject");class yn{constructor(e,r,i,o,n=null){this._context=e,this._locations=r,this._layout=i,this._buffers=o,this._indexBuffer=n,this._glName=null,this._initialized=!1,e.instanceCounter.increment(G.VAO,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((e,r)=>e+this._buffers[r].size,v(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(!this._context)return void((this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&ve.warn("Leaked WebGL VAO"));if(this._glName){var r,i;const o=(r=this._context)==null||(i=r.capabilities)==null?void 0:i.vao;o?(o.deleteVertexArray(this._glName),this._glName=null):ve.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const o in this._buffers)this._buffers[o].dispose(),delete this._buffers[o];this._indexBuffer=wt(this._indexBuffer)}this._context.instanceCounter.decrement(G.VAO,this),this._context=null}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const r=e.createVertexArray();e.bindVertexArray(r),this._bindLayout(),e.bindVertexArray(null),this._glName=r}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:e,_layout:r,_indexBuffer:i}=this;e||ve.error("Vertex buffer dictionary is empty!");const o=this._context.gl;for(const n in e){const a=e[n];a||ve.error("Vertex buffer is uninitialized!");const s=r[n];s||ve.error("Vertex element descriptor is empty!"),Ko(this._context,this._locations,a,s)}v(i)&&(this._context.capabilities.vao?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:e,_layout:r}=this;e||ve.error("Vertex buffer dictionary is empty!");for(const i in e){const o=e[i];o||ve.error("Vertex buffer is uninitialized!");const n=r[i];Qo(this._context,this._locations,o,n)}v(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}function wn(t,e=_n,r=ct,i=-1,o=1){let n=null;return e===Tn?n=new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):n=new Float32Array([i,i,o,i,i,o,o,o]),new yn(t,r,{geometry:e},{geometry:et.createVertex(t,35044,n)})}class je{constructor(e,r){this._context=e,this._desc=r,this._context.instanceCounter.increment(G.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this),i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}get descriptor(){return this._desc}resize(e,r){const i=this._desc;if(i.width===e&&i.height===r)return;i.width=e,i.height=r;const o=this._context.gl;this._context.bindRenderbuffer(this),o.renderbufferStorage(o.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(G.Renderbuffer,this),this._context=null)}}const Sn=Se.getLogger("esri.views.webgl.FrameBufferObject");class le{constructor(e,r,i=null,o=null){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc=V({},r),e.instanceCounter.increment(G.Framebuffer,this),v(i)){Array.isArray(i)||(i=[i]);for(let c=0;c<i.length;++c){var n,a;const l=i[c];let u;xe(l)?(u=l.descriptor,this._colorAttachments.set(36064+c,l)):(u=l,this._colorAttachments.set(36064+c,new k(e,l))),((n=this._desc)==null?void 0:n.colorTarget)!==0&&((a=this._desc)==null?void 0:a.colorTarget)!==2&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateColorAttachmentPoint(36064+c),this._validateTextureDimensions(u,this._desc)}}if(o instanceof je){var s;const c=(s=this._desc.depthStencilTarget)!=null?s:3;c===2?this._stencilAttachment=o:c===1||c===3?this._depthAttachment=o:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),nr(o.descriptor,this._desc)}else if(v(o)){let c;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),xe(o)?(this._depthStencilTexture=o,c=o.descriptor):this._depthStencilTexture=new k(this._context,o),this._validateTextureDimensions(c,this._desc)}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(G.Framebuffer,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(36064);return e&&xe(e)?e:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return At(this.colorAttachment)+At(this.depthStencilAttachment)}getColorTexture(e){const r=this._colorAttachments.get(e);return r&&xe(r)?r:null}framebufferTexture2D(e,r,i=36064,o=3553,n=0){r.framebufferTexture2D(r.FRAMEBUFFER,i,o,e,n)}attachColorTexture(e,r=36064){if(!e)return;this._validateColorAttachmentPoint(r);const i=e.descriptor;this._validateTextureDimensions(i,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(e.glName,this._context.gl,r)),this._colorAttachments.set(r,e)}detachColorTexture(e=36064){const r=this._colorAttachments.get(e);if(xe(r)){const i=r;return this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,e)),this._colorAttachments.delete(e),i}}attachDepthStencilTexture(e){if(U(e))return;const r=e.descriptor;r.pixelFormat!==34041&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),r.dataType!==34042&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(r,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==4&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(e.glName,this._context.gl,or)),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,or)),this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if(U(e))return;const r=e.descriptor;if(r.internalFormat!==34041&&r.internalFormat!==33189&&console.error("Depth/Stencil buffer must have correct internalFormat"),nr(r,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=r.internalFormat===34041?3:1,this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,o=this._desc.depthStencilTarget===1?i.DEPTH_ATTACHMENT:i.DEPTH_STENCIL_ATTACHMENT;i.framebufferRenderbuffer(i.FRAMEBUFFER,o,i.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,r=this._depthAttachment;if(r&&this._initialized){this._context.bindFramebuffer(this);const i=this._desc.depthStencilTarget===1?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,null)}return this._depthAttachment=null,r}detachAll(){this.detachColorTexture(),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(e,r,i,o,n,a,s){(e<0||r<0||n<0||a<0)&&console.error("Offsets cannot be negative!"),(i<=0||o<=0)&&console.error("Copy width and height must be greater than zero!");const c=this._desc,l=s.descriptor;s.descriptor.target!==3553&&console.error("Texture target must be TEXTURE_2D!"),(e+i>c.width||r+o>c.height||n+i>l.width||a+o>l.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const u=this._context,f=u.bindTexture(s,k.TEXTURE_UNIT_FOR_UPDATES);u.bindFramebuffer(this),u.gl.copyTexSubImage2D(3553,0,n,a,e,r,i,o),u.bindTexture(f,k.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,r,i,o,n,a,s){(i<=0||o<=0)&&console.error("Copy width and height must be greater than zero!"),s||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,r,i,o,n,a,s)}resize(e,r){const i=this._desc;if(i.width!==e||i.height!==r){if(!this._initialized)return i.width=e,i.height=r,this._colorAttachments.forEach(o=>{o&&o.resize(e,r)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,r));i.width=e,i.height=r,this._colorAttachments.forEach(o=>{o&&o.resize(e,r)}),this._depthStencilTexture!=null?this._depthStencilTexture.resize(e,r):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,r),this._stencilAttachment&&this._stencilAttachment.resize(e,r)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(e=3553){var r,i,o,n;const a=this._context.gl;if(this._initialized)return void a.bindFramebuffer(a.FRAMEBUFFER,this.glName);this._glName&&a.deleteFramebuffer(this._glName);const s=this._context,c=a.createFramebuffer(),l=this._desc,u=(r=l.colorTarget)!=null?r:1,f=(i=l.width)!=null?i:1,m=(o=l.height)!=null?o:1;if(a.bindFramebuffer(a.FRAMEBUFFER,c),this._colorAttachments.size===0)if(u===0)this._colorAttachments.set(36064,Cn(s,l,this.descriptor.colorTarget===2?34067:3553));else{const h=new je(s,{internalFormat:32854,width:f,height:m});this._colorAttachments.set(36064,h)}this._colorAttachments.forEach((h,b)=>{h&&(xe(h)?this.framebufferTexture2D(h.glName,a,b,e):a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,h.glName))});const p=(n=l.depthStencilTarget)!=null?n:0;switch(p){case 1:case 3:{this._depthAttachment||(this._depthAttachment=new je(s,{internalFormat:l.depthStencilTarget===1?33189:34041,width:f,height:m}));const h=p===1?a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT;a.framebufferRenderbuffer(a.FRAMEBUFFER,h,a.RENDERBUFFER,this._depthAttachment.glName);break}case 2:this._stencilAttachment||(this._stencilAttachment=new je(s,{internalFormat:36168,width:f,height:m})),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.STENCIL_ATTACHMENT,a.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:if(!this._depthStencilTexture){s.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const h={target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:f,height:m};this._depthStencilTexture=new k(s,h)}this.framebufferTexture2D(this._depthStencilTexture.glName,a,a.DEPTH_STENCIL_ATTACHMENT,e)}lt()&&a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=c,this._initialized=!0}_disposeColorAttachments(){this._colorAttachments.forEach((e,r)=>{if(xe(e))this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,r)),e.dispose();else if(e instanceof WebGLRenderbuffer){const i=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),i.framebufferRenderbuffer(i.FRAMEBUFFER,r,i.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(e)}}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const r=this._desc.depthStencilTarget===1?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,e,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateTextureDimensions(e,r){e.target!==3553&&e.target!==34067&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),r.width!==void 0&&r.width>=0&&r.height!==void 0&&r.height>=0?r.width===e.width&&r.height===e.height||console.error("Color attachment texture must match the framebuffer's!"):(r.width=e.width,r.height=e.height)}_validateColorAttachmentPoint(e){if(le._MAX_COLOR_ATTACHMENTS===-1){const i=this._context.capabilities.drawBuffers;if(i){const o=this._context.gl;le._MAX_COLOR_ATTACHMENTS=o.getParameter(i.MAX_COLOR_ATTACHMENTS)}else le._MAX_COLOR_ATTACHMENTS=1}const r=e-36064;r+1>le._MAX_COLOR_ATTACHMENTS&&Sn.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${r+1}. Implementation supports up to ${le._MAX_COLOR_ATTACHMENTS} color attachments`)}}function xe(t){return"type"in t&&t.type==="texture"}function Cn(t,e,r){return new k(t,{target:r,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:e.width,height:e.height})}function nr(t,e){e.width!==void 0&&e.width>=0&&e.height!==void 0&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}le._MAX_COLOR_ATTACHMENTS=-1;class H extends Ot{constructor(e,r){super(),this.data=e,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Qi,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=H.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;U(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Xt(e.src)||e.preload==="auto"&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){Yi(e.src)||Xt(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,r){if(U(e))return 0;if(Le(e)||ze(e))return r.encoding===H.KTX2_ENCODING?Zo(e,r.mipmap):r.encoding===H.BASIS_ENCODING?Yo(e,r.mipmap):e.byteLength;const{width:i,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?H.getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*o*(r.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var r;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:(r=this.params.maxAnisotropy)!=null?r:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,r){if(v(this._glTexture))return this._glTexture;if(v(this._loadingPromise))return this._loadingPromise;const i=this.data;return U(i)?(this._glTexture=new k(e,this.createDescriptor(e),null),this._glTexture):typeof i=="string"?this.loadFromURL(e,r,i):i instanceof Image?this.loadFromImageElement(e,r,i):i instanceof HTMLVideoElement?this.loadFromVideoElement(e,r,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this.loadFromImage(e,i,r):(Le(i)||ze(i))&&this.params.encoding===H.DDS_ENCODING?this.loadFromDDSData(e,i):(Le(i)||ze(i))&&this.params.encoding===H.KTX2_ENCODING?this.loadFromKTX2(e,i):(Le(i)||ze(i))&&this.params.encoding===H.BASIS_ENCODING?this.loadFromBasis(e,i):ze(i)?this.loadFromPixelData(e,i):Le(i)?this.loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,r,i){if(!(this.data instanceof HTMLVideoElement)||U(this._glTexture)||this.data.readyState<2||i===this.data.currentTime)return i;if(v(this._powerOfTwoStretchInfo)){const{framebuffer:o,vao:n,sourceTexture:a}=this._powerOfTwoStretchInfo;a.setData(this.data),this.drawStretchedTexture(e,r,o,n,a,this._glTexture)}else{const{width:o,height:n}=this.data,{width:a,height:s}=this._glTexture.descriptor;o!==a||n!==s?this._glTexture.updateData(0,0,0,Math.min(o,a),Math.min(n,s),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,r){return this._glTexture=xn(e,this.createDescriptor(e),r),this._glTexture}loadFromKTX2(e,r){return this.loadAsync(()=>en(e,this.createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}loadFromBasis(e,r){return this.loadAsync(()=>Jo(e,this.createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}loadFromPixelData(e,r){W(this.params.width>0&&this.params.height>0);const i=this.createDescriptor(e);return i.pixelFormat=this.params.components===1?6409:this.params.components===3?6407:6408,i.width=this.params.width,i.height=this.params.height,this._glTexture=new k(e,i,r),this._glTexture}loadFromURL(e,r,i){return this.loadAsync(async o=>{const n=await Vr(i,{signal:o});return this.loadFromImage(e,n,r)})}loadFromImageElement(e,r,i){return i.complete?this.loadFromImage(e,i,r):this.loadAsync(async o=>{const n=await Zi(i,i.src,!1,o);return this.loadFromImage(e,n,r)})}loadFromVideoElement(e,r,i){return i.readyState>=2?this.loadFromImage(e,i,r):this.loadFromVideoElementAsync(e,r,i)}loadFromVideoElementAsync(e,r,i){return this.loadAsync(o=>new Promise((n,a)=>{const s=()=>{i.removeEventListener("loadeddata",c),i.removeEventListener("error",l),ro(u)},c=()=>{i.readyState>=2&&(s(),n(this.loadFromImage(e,i,r)))},l=f=>{s(),a(f||new Pr("Failed to load video"))};i.addEventListener("loadeddata",c),i.addEventListener("error",l);const u=Ji(o,()=>l(eo()))}))}loadFromImage(e,r,i){const o=H.getDataDimensions(r);this.params.width=o.width,this.params.height=o.height;const n=this.createDescriptor(e);return n.pixelFormat=this.params.components===3?6407:6408,!this.requiresPowerOfTwo(e,n)||Ye(o.width)&&Ye(o.height)?(n.width=o.width,n.height=o.height,this._glTexture=new k(e,n,r),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(e,r,o,n,i),this._glTexture)}loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const o=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(o,o),i}requiresPowerOfTwo(e,r){const o=typeof r.wrapMode=="number"?r.wrapMode===33071:r.wrapMode.s===33071&&r.wrapMode.t===33071;return!Uo(e.gl)&&(r.hasMipmap||!o)}makePowerOfTwoTexture(e,r,i,o,n){const{width:a,height:s}=i,c=Kt(a),l=Kt(s);let u;switch(o.width=c,o.height=l,this.params.powerOfTwoResizeMode){case 2:o.textureCoordinateScaleFactor=[a/c,s/l],u=new k(e,o),u.updateData(0,0,0,a,s,r);break;case 1:case null:case void 0:u=this.stretchToPowerOfTwo(e,r,o,n());break;default:to(this.params.powerOfTwoResizeMode)}return o.hasMipmap&&u.generateMipmap(),u}stretchToPowerOfTwo(e,r,i,o){const n=new k(e,i),a=new le(e,{colorTarget:0,depthStencilTarget:0},n),s=new k(e,{target:3553,pixelFormat:i.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},r),c=wn(e),l=e.getBoundFramebufferObject();return this.drawStretchedTexture(e,o,a,c,s,n),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:c,sourceTexture:s,framebuffer:a}:(c.dispose(!0),s.dispose(),a.detachColorTexture(),a.dispose()),e.bindFramebuffer(l),n}drawStretchedTexture(e,r,i,o,n,a){e.bindFramebuffer(i);const s=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const c=r.program;e.useProgram(c),c.setUniform4f("color",1,1,1,1),c.bindTexture(n,"tex"),e.bindVAO(o),r.bindPipelineState(e),e.drawArrays(5,0,jo(o,"geometry")),e.bindFramebuffer(null),e.setViewport(s.x,s.y,s.width,s.height)}unload(){if(v(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:i}=this._powerOfTwoStretchInfo;r.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(v(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),v(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}H.DDS_ENCODING="image/vnd-ms.dds",H.KTX2_ENCODING="image/ktx2",H.BASIS_ENCODING="image/x.basis";function d(t,...e){let r="";for(let i=0;i<e.length;i++)r+=t[i]+e[i];return r+=t[t.length-1],r}(function(t){function e(i){return Math.round(i).toString()}function r(i){return i.toPrecision(8)}t.int=e,t.float=r})(d||(d={}));const Mn=.1,Lt=.001;function _e(t,e){const r=t.fragment;switch(e.alphaDiscardMode){case 0:r.code.add(d`
        #define discardOrAdjustAlpha(color) { if (color.a < ${d.float(Lt)}) { discard; } }
      `);break;case 1:r.code.add(d`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(d`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:t.fragment.uniforms.add("textureAlphaCutoff","float"),t.fragment.code.add(d`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}class An{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,r,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,r),this._technique),this._technique}ensureResources(e){return 2}}class $n extends An{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId).then(r=>this._texture=r),this._acquire(e.normalTextureId).then(r=>this._textureNormal=r),this._acquire(e.emissiveTextureId).then(r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId).then(r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId).then(r=>this._textureMetallicRoughness=r)}dispose(){this._texture=pe(this._texture),this._textureNormal=pe(this._textureNormal),this._textureEmissive=pe(this._textureEmissive),this._textureOcclusion=pe(this._textureOcclusion),this._textureMetallicRoughness=pe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?2:1}updateTexture(e){(U(this._texture)||e!==this._texture.id)&&(this._texture=pe(this._texture),this._textureId=e,this._acquire(this._textureId).then(r=>this._texture=r))}bindTextures(e){v(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),v(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),v(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),v(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),v(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const r=v(this._texture)?this._texture.glTexture:null;v(r)&&r.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){return U(e)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(e).then(r=>this._disposed?(pe(r),null):r).finally(()=>--this._numLoading))}}function Fn(t){return Math.abs(t*t*t)}function Pn(t,e,r){const i=r.parameters,o=r.paddingPixelsOverride;return Ne.scale=Math.min(i.divisor/(e-i.offset),1),Ne.factor=Fn(t),Ne.minPixelSize=i.minPixelSize,Ne.paddingPixels=o,Ne}function En(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function Dn(t,e){return Math.max(io(t*e.scale,t,e.factor),En(t,e))}function On(t,e,r,i){return Dn(t,Pn(e,r,i))}const Ne={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function Rn(t,e,r){for(let i=0;i<r;++i)e[2*i]=t[i],e[2*i+1]=t[i]-e[2*i]}function Ln(t,e,r,i){for(let o=0;o<i;++o)ar[0]=t[o],Rn(ar,pt,1),e[o]=pt[0],r[o]=pt[1]}const ar=new Float64Array(1),pt=new Float32Array(2);function zn(t){return!!v(t)&&!t.visible}const Xe=oo();function In(t,e,r,i,o,n,a){if(!zn(e))if(t.boundingInfo){W(t.primitiveType===0);const s=r.tolerance;Kr(t.boundingInfo,i,o,s,n,a)}else{const s=t.indices.get("position"),c=t.vertexAttributes.get("position");Yr(i,o,0,s.length/3,s,c,void 0,n,a)}}const Nn=N();function Kr(t,e,r,i,o,n){if(U(t))return;const a=Un(e,r,Nn);if(ao(Xe,t.getBBMin()),so(Xe,t.getBBMax()),v(o)&&o.applyToAabb(Xe),Vn(Xe,e,a,i)){const{primitiveIndices:s,indices:c,position:l}=t,u=s?s.length:c.length/3;if(u>jn){const f=t.getChildren();if(f!==void 0){for(let m=0;m<8;++m)f[m]!==void 0&&Kr(f[m],e,r,i,o,n);return}}Yr(e,r,0,u,c,l,s,o,n)}}const Qr=N();function Yr(t,e,r,i,o,n,a,s,c){if(a)return Bn(t,e,r,i,o,n,a,s,c);const l=n.data,u=n.stride||n.size,f=t[0],m=t[1],p=t[2],h=e[0]-f,b=e[1]-m,y=e[2]-p;for(let _=r,I=3*r;_<i;++_){let A=u*o[I++],M=l[A++],P=l[A++],w=l[A];A=u*o[I++];let T=l[A++],$=l[A++],g=l[A];A=u*o[I++];let S=l[A++],O=l[A++],x=l[A];v(s)&&([M,P,w]=s.applyToVertex(M,P,w,_),[T,$,g]=s.applyToVertex(T,$,g,_),[S,O,x]=s.applyToVertex(S,O,x,_));const C=T-M,F=$-P,E=g-w,z=S-M,j=O-P,te=x-w,de=b*te-j*y,Pe=y*z-te*h,Ee=h*j-z*b,X=C*de+F*Pe+E*Ee;if(Math.abs(X)<=Number.EPSILON)continue;const q=f-M,ue=m-P,he=p-w,Z=q*de+ue*Pe+he*Ee;if(X>0){if(Z<0||Z>X)continue}else if(Z>0||Z<X)continue;const re=ue*E-F*he,De=he*C-E*q,Oe=q*F-C*ue,me=h*re+b*De+y*Oe;if(X>0){if(me<0||Z+me>X)continue}else if(me>0||Z+me<X)continue;const fe=(z*re+j*De+te*Oe)/X;fe>=0&&c(fe,Zr(C,F,E,z,j,te,Qr),_,!1)}}function Bn(t,e,r,i,o,n,a,s,c){const l=n.data,u=n.stride||n.size,f=t[0],m=t[1],p=t[2],h=e[0]-f,b=e[1]-m,y=e[2]-p;for(let _=r;_<i;++_){const I=a[_];let A=3*I,M=u*o[A++],P=l[M++],w=l[M++],T=l[M];M=u*o[A++];let $=l[M++],g=l[M++],S=l[M];M=u*o[A];let O=l[M++],x=l[M++],C=l[M];v(s)&&([P,w,T]=s.applyToVertex(P,w,T,_),[$,g,S]=s.applyToVertex($,g,S,_),[O,x,C]=s.applyToVertex(O,x,C,_));const F=$-P,E=g-w,z=S-T,j=O-P,te=x-w,de=C-T,Pe=b*de-te*y,Ee=y*j-de*h,X=h*te-j*b,q=F*Pe+E*Ee+z*X;if(Math.abs(q)<=Number.EPSILON)continue;const ue=f-P,he=m-w,Z=p-T,re=ue*Pe+he*Ee+Z*X;if(q>0){if(re<0||re>q)continue}else if(re>0||re<q)continue;const De=he*z-E*Z,Oe=Z*F-z*ue,me=ue*E-F*he,fe=h*De+b*Oe+y*me;if(q>0){if(fe<0||re+fe>q)continue}else if(fe>0||re+fe<q)continue;const kt=(j*De+te*Oe+de*me)/q;kt>=0&&c(kt,Zr(F,E,z,j,te,de,Qr),I,!1)}}const sr=N(),lr=N();function Zr(t,e,r,i,o,n,a){return $e(sr,t,e,r),$e(lr,i,o,n),St(a,sr,lr),nt(a,a),a}function Un(t,e,r){return $e(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function Vn(t,e,r,i){return Hn(t,e,r,i,1/0)}function Hn(t,e,r,i,o){const n=(t[0]-i-e[0])*r[0],a=(t[3]+i-e[0])*r[0];let s=Math.min(n,a),c=Math.max(n,a);const l=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0||(s=Math.max(s,Math.min(l,u)),s>c))return!1;const f=(t[2]-i-e[2])*r[2],m=(t[5]+i-e[2])*r[2];return c=Math.min(c,Math.max(f,m)),!(c<0)&&(s=Math.max(s,Math.min(f,m)),!(s>c)&&s<o)}function kn(t,e,r,i,o){let n=(r.screenLength||0)*t.pixelRatio;o&&(n=On(n,i,e,o));const a=n*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return no(a*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function Gn(t,e,r){if(!t)return;const i=t.parameters,o=t.paddingPixelsOverride;e.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,o)}function Jr(t,e){const r=e?Jr(e):{};for(const i in t){let o=t[i];o&&o.forEach&&(o=qn(o)),o==null&&i in r||(r[i]=o)}return r}function Wn(t,e){let r=!1;for(const i in e){const o=e[i];o!==void 0&&(r=!0,Array.isArray(o)?t[i]=o.slice():t[i]=o)}return r}function qn(t){const e=[];return t.forEach(r=>e.push(r)),e}const cr={multiply:1,ignore:2,replace:3,tint:4},jn=1e3;class Xn extends Ot{constructor(e,r){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=ct,this._parameters=Jr(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){Wn(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){v(this.repository)&&this.repository.materialChanged(this)}}const Kn={renderOccluded:1};function ei(t,e,r=32774,i=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function Qn(t,e,r,i,o=32774,n=32774,a=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:n,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}const Yn={face:1029,mode:2305},Zn={face:1028,mode:2305},Jn=t=>t===2?Yn:t===1?Zn:null,ea={zNear:0,zFar:1},ta={r:!0,g:!0,b:!0,a:!0};function ra(t){return ua.intern(t)}function ia(t){return ha.intern(t)}function oa(t){return ma.intern(t)}function na(t){return fa.intern(t)}function aa(t){return pa.intern(t)}function sa(t){return ga.intern(t)}function la(t){return va.intern(t)}function ca(t){return xa.intern(t)}function da(t){return ba.intern(t)}class ne{constructor(e,r){this.makeKey=e,this.makeRef=r,this.interns=new Map}intern(e){if(!e)return null;const r=this.makeKey(e),i=this.interns;return i.has(r)||i.set(r,this.makeRef(e)),i.get(r)}}function ae(t){return"["+t.join(",")+"]"}const ua=new ne(ti,t=>V({__tag:"Blending"},t));function ti(t){return t?ae([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const ha=new ne(ri,t=>V({__tag:"Culling"},t));function ri(t){return t?ae([t.face,t.mode]):null}const ma=new ne(ii,t=>V({__tag:"PolygonOffset"},t));function ii(t){return t?ae([t.factor,t.units]):null}const fa=new ne(oi,t=>V({__tag:"DepthTest"},t));function oi(t){return t?ae([t.func]):null}const pa=new ne(ni,t=>V({__tag:"StencilTest"},t));function ni(t){return t?ae([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const ga=new ne(ai,t=>V({__tag:"DepthWrite"},t));function ai(t){return t?ae([t.zNear,t.zFar]):null}const va=new ne(si,t=>V({__tag:"ColorWrite"},t));function si(t){return t?ae([t.r,t.g,t.b,t.a]):null}const xa=new ne(li,t=>V({__tag:"StencilWrite"},t));function li(t){return t?ae([t.mask]):null}const ba=new ne(_a,t=>({blending:ra(t.blending),culling:ia(t.culling),polygonOffset:oa(t.polygonOffset),depthTest:na(t.depthTest),stencilTest:aa(t.stencilTest),depthWrite:sa(t.depthWrite),colorWrite:la(t.colorWrite),stencilWrite:ca(t.stencilWrite)}));function _a(t){return t?ae([ti(t.blending),ri(t.culling),ii(t.polygonOffset),oi(t.depthTest),ni(t.stencilTest),ai(t.depthWrite),si(t.colorWrite),li(t.stencilWrite)]):null}const Ta=Qn(770,1,771,771),ya=ei(1,1),wa=ei(0,771);function Sa(t){return t===2?null:t===1?wa:ya}const Ca=5e5,Ma={factor:-1,units:-2};function Aa(t){return t?Ma:null}function $a(t){return t===3||t===2?513:515}function Fa(t,e,r){const i=Et(t.direction,Q(r,e,t.origin));return at(r,t.origin,ye(r,t.direction,i)),r}function Pa(){return{origin:null,direction:null}}new $o(Pa);function Ea(t,e){const r=Et(t,e)/(oe(t)*oe(e));return-Er(r)}const Da=Se.getLogger("esri.geometry.support.sphere");function zt(){return Fo()}function ci(t,e=zt()){return lo(e,t)}function Oa(t,e){return st(t[0],t[1],t[2],e)}function Ra(t){return t}function La(t){t[0]=t[1]=t[2]=t[3]=0}function za(t){return t}function It(t){return Array.isArray(t)?t[3]:t}function ce(t){return Array.isArray(t)?t:qa}function Ia(t,e,r,i){return st(t,e,r,i)}function Na(t,e,r){return t!==r&&Dr(r,t),r[3]=t[3]+e,r}function Ba(t,e,r){return Da.error("sphere.setExtent is not yet supported"),t===r?r:ci(t,r)}function dt(t,e,r){if(U(e))return!1;const{origin:i,direction:o}=e,n=Ua;n[0]=i[0]-t[0],n[1]=i[1]-t[1],n[2]=i[2]-t[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],s=2*(o[0]*n[0]+o[1]*n[1]+o[2]*n[2]),c=s*s-4*a*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-t[3]*t[3]);if(c<0)return!1;const l=Math.sqrt(c);let u=(-s-l)/(2*a);const f=(-s+l)/(2*a);return(u<0||f<u&&f>0)&&(u=f),!(u<0)&&(r&&(r[0]=i[0]+o[0]*u,r[1]=i[1]+o[1]*u,r[2]=i[2]+o[2]*u),!0)}const Ua=N();function Va(t,e){return dt(t,e,null)}function Ha(t,e,r){if(dt(t,e,r))return r;const i=di(t,e,we.get());return at(r,e.origin,ye(we.get(),e.direction,ho(e.origin,i)/oe(e.direction))),r}function di(t,e,r){const i=we.get(),o=Po.get();St(i,e.origin,e.direction);const n=It(t);St(r,i,e.origin),ye(r,r,1/oe(r)*n);const a=hi(t,e.origin),s=Ea(e.origin,r);return co(o),uo(o,o,s+a,i),Ct(r,r,o),r}function ka(t,e,r){return dt(t,e,r)?r:(Fa(e,ce(t),r),ui(t,r,r))}function ui(t,e,r){const i=Q(we.get(),e,ce(t)),o=ye(we.get(),i,t[3]/oe(i));return at(r,o,ce(t))}function Ga(t,e){const r=Q(we.get(),e,ce(t)),i=mo(r),o=t[3]*t[3];return Math.sqrt(Math.abs(i-o))}function hi(t,e){const r=Q(we.get(),e,ce(t)),i=oe(r),o=It(t),n=o+Math.abs(o-i);return Er(o/n)}const gt=N();function mi(t,e,r,i){const o=Q(gt,e,ce(t));switch(r){case 0:{const n=Qt(o,gt)[2];return $e(i,-Math.sin(n),Math.cos(n),0)}case 1:{const n=Qt(o,gt),a=n[1],s=n[2],c=Math.sin(a);return $e(i,-c*Math.cos(s),-c*Math.sin(s),Math.cos(a))}case 2:return nt(i,o);default:return}}function fi(t,e){const r=Q($t,e,ce(t));return oe(r)-t[3]}function Wa(t,e,r,i){const o=fi(t,e),n=mi(t,e,2,$t),a=ye($t,n,r-o);return at(i,e,a)}const qa=N(),$t=N();Object.freeze({__proto__:null,create:zt,copy:ci,fromCenterAndRadius:Oa,wrap:Ra,clear:La,fromRadius:za,getRadius:It,getCenter:ce,fromValues:Ia,elevate:Na,setExtent:Ba,intersectRay:dt,intersectsRay:Va,intersectRayClosestSilhouette:Ha,closestPointOnSilhouette:di,closestPoint:ka,projectPoint:ui,distanceToSilhouette:Ga,angleToSilhouette:hi,axisAt:mi,altitudeAt:fi,setAltitudeAt:Wa});class ja{constructor(e=0){this.offset=e,this.sphere=zt(),this.tmpVertex=N()}applyToVertex(e,r,i){const o=this.objectTransform.transform;let n=o[0]*e+o[4]*r+o[8]*i+o[12],a=o[1]*e+o[5]*r+o[9]*i+o[13],s=o[2]*e+o[6]*r+o[10]*i+o[14];const c=this.offset/Math.sqrt(n*n+a*a+s*s);n+=n*c,a+=a*c,s+=s*c;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*n+l[4]*a+l[8]*s+l[12],this.tmpVertex[1]=l[1]*n+l[5]*a+l[9]*s+l[13],this.tmpVertex[2]=l[2]*n+l[6]*a+l[10]*s+l[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const o=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*o,r[1]+=r[1]*o,r[2]+=r[2]*o}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}}const dr=new ja;function Xa(t){return v(t)?(dr.offset=t,dr):null}function Ka(t,e,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=t.length;i*=n;for(let s=0;s<a;++s){const c=2*t[s];o[i]=e[c],o[i+1]=e[c+1],i+=n}}function pi(t,e,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=t.length;if(i*=a,o==null||o===1)for(let c=0;c<s;++c){const l=3*t[c];n[i]=e[l],n[i+1]=e[l+1],n[i+2]=e[l+2],i+=a}else for(let c=0;c<s;++c){const l=3*t[c];for(let u=0;u<o;++u)n[i]=e[l],n[i+1]=e[l+1],n[i+2]=e[l+2],i+=a}}function Qa(t,e,r,i,o=1){const n=r.typedBuffer,a=r.typedBufferStride,s=t.length;if(i*=a,o===1)for(let c=0;c<s;++c){const l=4*t[c];n[i]=e[l],n[i+1]=e[l+1],n[i+2]=e[l+2],n[i+3]=e[l+3],i+=a}else for(let c=0;c<s;++c){const l=4*t[c];for(let u=0;u<o;++u)n[i]=e[l],n[i+1]=e[l+1],n[i+2]=e[l+2],n[i+3]=e[l+3],i+=a}}function Ya(t,e,r,i,o,n=1){if(!r)return void pi(t,e,i,o,n);const a=i.typedBuffer,s=i.typedBufferStride,c=t.length,l=r[0],u=r[1],f=r[2],m=r[4],p=r[5],h=r[6],b=r[8],y=r[9],_=r[10],I=r[12],A=r[13],M=r[14];if(o*=s,n===1)for(let P=0;P<c;++P){const w=3*t[P],T=e[w],$=e[w+1],g=e[w+2];a[o]=l*T+m*$+b*g+I,a[o+1]=u*T+p*$+y*g+A,a[o+2]=f*T+h*$+_*g+M,o+=s}else for(let P=0;P<c;++P){const w=3*t[P],T=e[w],$=e[w+1],g=e[w+2],S=l*T+m*$+b*g+I,O=u*T+p*$+y*g+A,x=f*T+h*$+_*g+M;for(let C=0;C<n;++C)a[o]=S,a[o+1]=O,a[o+2]=x,o+=s}}function Za(t,e,r,i,o,n=1){if(!r)return void pi(t,e,i,o,n);const a=r,s=i.typedBuffer,c=i.typedBufferStride,l=t.length,u=a[0],f=a[1],m=a[2],p=a[4],h=a[5],b=a[6],y=a[8],_=a[9],I=a[10],A=!Or(a),M=1e-6,P=1-M;if(o*=c,n===1)for(let w=0;w<l;++w){const T=3*t[w],$=e[T],g=e[T+1],S=e[T+2];let O=u*$+p*g+y*S,x=f*$+h*g+_*S,C=m*$+b*g+I*S;if(A){const F=O*O+x*x+C*C;if(F<P&&F>M){const E=1/Math.sqrt(F);O*=E,x*=E,C*=E}}s[o+0]=O,s[o+1]=x,s[o+2]=C,o+=c}else for(let w=0;w<l;++w){const T=3*t[w],$=e[T],g=e[T+1],S=e[T+2];let O=u*$+p*g+y*S,x=f*$+h*g+_*S,C=m*$+b*g+I*S;if(A){const F=O*O+x*x+C*C;if(F<P&&F>M){const E=1/Math.sqrt(F);O*=E,x*=E,C*=E}}for(let F=0;F<n;++F)s[o+0]=O,s[o+1]=x,s[o+2]=C,o+=c}}function Ja(t,e,r,i,o,n=1){if(!r)return void Qa(t,e,i,o,n);const a=r,s=i.typedBuffer,c=i.typedBufferStride,l=t.length,u=a[0],f=a[1],m=a[2],p=a[4],h=a[5],b=a[6],y=a[8],_=a[9],I=a[10],A=!Or(a),M=1e-6,P=1-M;if(o*=c,n===1)for(let w=0;w<l;++w){const T=4*t[w],$=e[T],g=e[T+1],S=e[T+2],O=e[T+3];let x=u*$+p*g+y*S,C=f*$+h*g+_*S,F=m*$+b*g+I*S;if(A){const E=x*x+C*C+F*F;if(E<P&&E>M){const z=1/Math.sqrt(E);x*=z,C*=z,F*=z}}s[o+0]=x,s[o+1]=C,s[o+2]=F,s[o+3]=O,o+=c}else for(let w=0;w<l;++w){const T=4*t[w],$=e[T],g=e[T+1],S=e[T+2],O=e[T+3];let x=u*$+p*g+y*S,C=f*$+h*g+_*S,F=m*$+b*g+I*S;if(A){const E=x*x+C*C+F*F;if(E<P&&E>M){const z=1/Math.sqrt(E);x*=z,C*=z,F*=z}}for(let E=0;E<n;++E)s[o+0]=x,s[o+1]=C,s[o+2]=F,s[o+3]=O,o+=c}}function ur(t,e,r,i,o,n=1){const a=i.typedBuffer,s=i.typedBufferStride,c=t.length;if(o*=s,n===1){if(r===4)for(let l=0;l<c;++l){const u=4*t[l];a[o]=e[u],a[o+1]=e[u+1],a[o+2]=e[u+2],a[o+3]=e[u+3],o+=s}else if(r===3)for(let l=0;l<c;++l){const u=3*t[l];a[o]=e[u],a[o+1]=e[u+1],a[o+2]=e[u+2],a[o+3]=255,o+=s}}else if(r===4)for(let l=0;l<c;++l){const u=4*t[l];for(let f=0;f<n;++f)a[o]=e[u],a[o+1]=e[u+1],a[o+2]=e[u+2],a[o+3]=e[u+3],o+=s}else if(r===3)for(let l=0;l<c;++l){const u=3*t[l];for(let f=0;f<n;++f)a[o]=e[u],a[o+1]=e[u+1],a[o+2]=e[u+2],a[o+3]=255,o+=s}}function es(t,e,r,i,o,n){for(const a of e.fieldNames){const s=t.vertexAttributes.get(a),c=t.indices.get(a);if(s&&c)switch(a){case"position":{W(s.size===3);const l=o.getField(a,Me);l&&Ya(c,s.data,r,l,n);break}case"normal":{W(s.size===3);const l=o.getField(a,Me);l&&Za(c,s.data,i,l,n);break}case"uv0":{W(s.size===2);const l=o.getField(a,Nr);l&&Ka(c,s.data,l,n);break}case"color":{W(s.size===3||s.size===4);const l=o.getField(a,He);l&&ur(c,s.data,s.size,l,n);break}case"symbolColor":{W(s.size===3||s.size===4);const l=o.getField(a,He);l&&ur(c,s.data,s.size,l,n);break}case"tangent":{W(s.size===4);const l=o.getField(a,Mt);l&&Ja(c,s.data,i,l,n);break}}}}function Te(t,e){if(e.slicePlaneEnabled){t.extensions.add("GL_OES_standard_derivatives"),e.sliceEnabledForVertexPrograms&&(t.vertex.uniforms.add("slicePlaneOrigin","vec3"),t.vertex.uniforms.add("slicePlaneBasis1","vec3"),t.vertex.uniforms.add("slicePlaneBasis2","vec3")),t.fragment.uniforms.add("slicePlaneOrigin","vec3"),t.fragment.uniforms.add("slicePlaneBasis1","vec3"),t.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=d`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=d`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=e.sliceHighlightDisabled?d`#define highlightSlice(_color_, _pos_) (_color_)`:d`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(r),t.fragment.code.add(r),t.fragment.code.add(o)}else{const r=d`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;e.sliceEnabledForVertexPrograms&&t.vertex.code.add(r),t.fragment.code.add(r)}}function ts(t,e,r,i){e.slicePlaneEnabled&&(v(r)?(i?(Q(hr,r.origin,i),t.setUniform3fv("slicePlaneOrigin",hr)):t.setUniform3fv("slicePlaneOrigin",r.origin),t.setUniform3fv("slicePlaneBasis1",r.basis1),t.setUniform3fv("slicePlaneBasis2",r.basis2)):(t.setUniform3fv("slicePlaneBasis1",mt),t.setUniform3fv("slicePlaneBasis2",mt),t.setUniform3fv("slicePlaneOrigin",mt)))}const hr=N();function gi({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(d`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(d`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function vi(t){return!!fo("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}function ke(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add("modelOriginHi","vec3"),t.attributes.add("modelOriginLo","vec3"),t.attributes.add("model","mat3"),t.attributes.add("modelNormal","mat3")),e.instancedDoublePrecision&&(t.vertex.include(gi,e),t.vertex.uniforms.add("viewOriginHi","vec3"),t.vertex.uniforms.add("viewOriginLo","vec3"));const r=[d`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,d`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?d`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,d`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,d`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,e.vertexTangents?d`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:d``];t.vertex.code.add(r[0]),t.vertex.code.add(r[1]),t.vertex.code.add(r[2]),e.output===2&&t.vertex.code.add(r[3]),t.vertex.code.add(r[4])}(function(t){class e{}function r(i,o){Ln(o,mr,fr,3),i.setUniform3fv("viewOriginHi",mr),i.setUniform3fv("viewOriginLo",fr)}t.Uniforms=e,t.bindCustomOrigin=r})(ke||(ke={}));const mr=N(),fr=N();function rs(t){t.vertex.code.add(d`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(d`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(d`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(d`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(d`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(d`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),t.vertex.code.add(d`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function xi(t,e){const r=t.vertex.code;e.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),e.screenSizePerspectiveEnabled&&(t.include(rs),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(d`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${e.viewingMode===1?d`vec3 worldNormal = normalize(worldPos + localOrigin);`:d`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${e.screenSizePerspectiveEnabled?d`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:d`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(d`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function is(t,e,r){if(!e.verticalOffset)return;const i=os(e.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;t.setUniform4f("verticalOffset",i.screenLength*o,i.perDistance,i.minWorldLength,i.maxWorldLength)}function os(t,e,r,i=ns){return i.screenLength=t.screenLength,i.perDistance=Math.tan(.5*e)/(.5*r),i.minWorldLength=t.minWorldLength,i.maxWorldLength=t.maxWorldLength,i}const ns={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},as=st(1,1,0,1),ss=st(1,0,1,1);function ls(t){t.fragment.uniforms.add("depthTex","sampler2D"),t.fragment.uniforms.add("highlightViewportPixelSz","vec4"),t.fragment.constants.add("occludedHighlightFlag","vec4",as).add("unoccludedHighlightFlag","vec4",ss),t.fragment.code.add(d`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function cs(t,e){t.bindTexture(e.highlightDepthTexture,"depthTex"),t.setUniform4f("highlightViewportPixelSz",0,0,e.inverseViewport[0],e.inverseViewport[1])}function tt(t,e){t.fragment.uniforms.add("terrainDepthTexture","sampler2D"),t.fragment.uniforms.add("cameraNearFar","vec2"),t.fragment.uniforms.add("inverseViewport","vec2"),t.fragment.code.add(d`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function ds(t,e){e.multipassTerrainEnabled&&e.terrainLinearDepthTexture&&t.bindTexture(e.terrainLinearDepthTexture,"terrainDepthTexture")}function Ae(t,e){e.attributeTextureCoordinates===1&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),e.attributeTextureCoordinates===2&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(d`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),e.attributeTextureCoordinates===0&&t.vertex.code.add(d`void forwardTextureCoordinates() {}`)}function us(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function bi(t,e){t.include(Ae,e),t.fragment.code.add(d`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.attributeTextureCoordinates===1&&t.fragment.code.add(d`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),e.attributeTextureCoordinates===2&&(t.include(us),t.fragment.code.add(d`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}Ho(0,.6,.2);function _i(t,e){const r=t.fragment,i=e.hasMetalnessAndRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;e.pbrMode===1&&i&&t.include(bi,e),e.pbrMode!==2?(e.pbrMode===0&&r.code.add(d`float getBakedOcclusion() { return 1.0; }`),e.pbrMode===1&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(d`vec3 mrr;
vec3 emission;
float occlusion;`),e.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(d`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(d`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),e.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(d`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(d`float getBakedOcclusion() { return 1.0; }`),r.code.add(d`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${e.hasMetalnessAndRoughnessTexture?e.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(d`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function hs(t,e,r=!1){r||(t.setUniform3fv("mrrFactors",e.mrrFactors),t.setUniform3fv("emissionFactor",e.emissiveFactor))}function Nt(t){t.code.add(d`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Bt(t){t.fragment.include(Nt),t.fragment.uniforms.add("uShadowMapTex","sampler2D"),t.fragment.uniforms.add("uShadowMapNum","int"),t.fragment.uniforms.add("uShadowMapDistance","vec4"),t.fragment.uniforms.add("uShadowMapMatrix","mat4",4),t.fragment.uniforms.add("uDepthHalfPixelSz","float"),t.fragment.code.add(d`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function ms(t,e,r){e.shadowMappingEnabled&&e.shadowMap.bindView(t,r)}function Ue(t,e){e.vvInstancingEnabled&&(e.vvSize||e.vvColor)&&t.attributes.add("instanceFeatureAttribute","vec4"),e.vvSize?(t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),t.vertex.uniforms.add("vvSymbolAnchor","vec3"),t.vertex.code.add(d`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),t.vertex.code.add(d`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.vvInstancingEnabled?d`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):t.vertex.code.add(d`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(t.vertex.constants.add("vvColorNumber","int",8),t.vertex.code.add(d`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.vvInstancingEnabled?d`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):t.vertex.code.add(d`vec4 vvColor() { return vec4(1.0); }`)}function fs(t,e){e.vvSizeEnabled&&(t.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),t.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),t.setUniform3fv("vvSizeOffset",e.vvSizeOffset),t.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(t.setUniform1fv("vvColorValues",e.vvColorValues),t.setUniform4fv("vvColorColors",e.vvColorColors))}function ps(t,e){fs(t,e),e.vvSizeEnabled&&(t.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),t.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix))}function gs(t,e,r){t.setUniform3f("camPos",r[3]-e[0],r[7]-e[1],r[11]-e[2])}function vs(t,e){t.setUniformMatrix4fv("proj",e)}function xs(t,e,r){go(pr,r,e),t.setUniform3fv("localOrigin",e),t.setUniformMatrix4fv("view",pr)}const pr=po();class Ti{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class bs{constructor(e,r,i=()=>this.dispose()){this.release=i,r&&(this._config=r.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=wt(this._program),this._pipeline=this._config=null}reload(e){wt(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,r){}bindMaterial(e,r){}bindDraw(e){}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}getPipelineState(e,r){return this._pipeline}}class _s{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}}function L(t={}){return(e,r)=>{var i,o;e._parameterNames=(i=e._parameterNames)!=null?i:[],e._parameterNames.push(r);const n=e._parameterNames.length-1,a=t.count||2,s=Math.ceil(Math.log2(a)),c=(o=e._parameterBits)!=null?o:[0];let l=0;for(;c[l]+s>16;)l++,l>=c.length&&c.push(0);e._parameterBits=c;const u=c[l],f=(1<<s)-1<<u;c[l]+=s,Object.defineProperty(e,r,{get(){return this[n]},set(m){if(this[n]!==m&&(this[n]=m,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~f|+m<<u&f,typeof m!="number"&&typeof m!="boolean"))throw"Configuration value for "+r+" must be boolean or number, got "+typeof m}})}}const Ts=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var gr,yi={exports:{}};(gr=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])!==void 0&&(yi.exports=gr);const ys=yi.exports;var vr,wi={exports:{}};vr=wi,function(t){var e=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];e!==void 0&&(vr.exports=e)}();const xr=wi.exports;var Si={exports:{}};(function(t){(function(e){var r=function(){return["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]}();r!==void 0&&(t.exports=r)})()})(Si);const ws=Si.exports;var K=999,br=9999,vt=0,xt=1,_r=2,Tr=3,yr=4,Ke=5,Ss=6,Cs=7,Ms=8,wr=9,As=10,Sr=11,$s=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function Fs(){var t,e,r,i=0,o=0,n=K,a=[],s=[],c=1,l=0,u=0,f=!1,m=!1,p="";return function(x){return s=[],x!==null?b(x.replace?x.replace(/\r\n/g,`
`):x):y()};function h(x){x.length&&s.push({type:$s[n],data:x,position:u,line:c,column:l})}function b(x){var C;for(i=0,r=(p+=x).length;t=p[i],i<r;){switch(C=i,n){case vt:i=P();break;case xt:i=M();break;case _r:i=A();break;case Tr:i=w();break;case yr:i=g();break;case Sr:i=$();break;case Ke:i=S();break;case br:i=O();break;case wr:i=I();break;case K:i=_()}C!==i&&(p[C]===`
`?(l=0,++c):++l)}return o+=i,p=p.slice(i),s}function y(x){return a.length&&h(a.join("")),n=As,h("(eof)"),s}function _(){return a=a.length?[]:a,e==="/"&&t==="*"?(u=o+i-1,n=vt,e=t,i+1):e==="/"&&t==="/"?(u=o+i-1,n=xt,e=t,i+1):t==="#"?(n=_r,u=o+i,i):/\s/.test(t)?(n=wr,u=o+i,i):(f=/\d/.test(t),m=/[^\w_]/.test(t),u=o+i,n=f?yr:m?Tr:br,i)}function I(){return/[^\s]/g.test(t)?(h(a.join("")),n=K,i):(a.push(t),e=t,i+1)}function A(){return t!=="\r"&&t!==`
`||e==="\\"?(a.push(t),e=t,i+1):(h(a.join("")),n=K,i)}function M(){return A()}function P(){return t==="/"&&e==="*"?(a.push(t),h(a.join("")),n=K,i+1):(a.push(t),e=t,i+1)}function w(){if(e==="."&&/\d/.test(t))return n=Ke,i;if(e==="/"&&t==="*")return n=vt,i;if(e==="/"&&t==="/")return n=xt,i;if(t==="."&&a.length){for(;T(a););return n=Ke,i}if(t===";"||t===")"||t==="("){if(a.length)for(;T(a););return h(t),n=K,i+1}var x=a.length===2&&t!=="=";if(/[\w_\d\s]/.test(t)||x){for(;T(a););return n=K,i}return a.push(t),e=t,i+1}function T(x){for(var C,F,E=0;;){if(C=xr.indexOf(x.slice(0,x.length+E).join("")),F=xr[C],C===-1){if(E--+x.length>0)continue;F=x.slice(0,1).join("")}return h(F),u+=F.length,(a=a.slice(F.length)).length}}function $(){return/[^a-fA-F0-9]/.test(t)?(h(a.join("")),n=K,i):(a.push(t),e=t,i+1)}function g(){return t==="."||/[eE]/.test(t)?(a.push(t),n=Ke,e=t,i+1):t==="x"&&a.length===1&&a[0]==="0"?(n=Sr,a.push(t),e=t,i+1):/[^\d]/.test(t)?(h(a.join("")),n=K,i):(a.push(t),e=t,i+1)}function S(){return t==="f"&&(a.push(t),e=t,i+=1),/[eE]/.test(t)||t==="-"&&/[eE]/.test(e)?(a.push(t),e=t,i+1):/[^\d]/.test(t)?(h(a.join("")),n=K,i):(a.push(t),e=t,i+1)}function O(){if(/[^\d\w_]/.test(t)){var x=a.join("");return n=ys.indexOf(x)>-1?Ms:ws.indexOf(x)>-1?Cs:Ss,h(a.join("")),n=K,i}return a.push(t),e=t,i+1}}function Ps(t){var e=Fs(),r=[];return r=(r=r.concat(e(t))).concat(e(null))}function Es(t){return Ps(t)}function Ds(t){return t.map(e=>e.type!=="eof"?e.data:"").join("")}const bt=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function Os(t,e="100",r="300 es"){const i=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const o of t)if(o.type==="preprocessor"){const n=i.exec(o.data);if(n){const a=n[1].replace(/\s\s+/g," ");if(a===r)return a;if(a===e)return o.data="#version "+r,e;throw new Error("unknown glsl version: "+a)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:`
`}),null}function Rs(t,e){for(let r=e-1;r>=0;r--){const i=t[r];if(i.type!=="whitespace"&&i.type!=="block-comment"){if(i.type!=="keyword")break;if(i.data==="attribute"||i.data==="in")return!0}}return!1}function Be(t,e,r,i){i=i||r;for(const o of t)if(o.type==="ident"&&o.data===r)return i in e?e[i]++:e[i]=0,Be(t,e,i+"_"+e[i],i);return r}function Ci(t,e,r="afterVersion"){function i(c,l){for(let u=l;u<c.length;u++){const f=c[u];if(f.type==="operator"&&f.data===";")return u}return null}function o(c){let l=-1,u=0,f=-1;for(let m=0;m<c.length;m++){const p=c[m];if(p.type==="preprocessor"&&(p.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++u:p.data.match(/\#endif\s*.*/)&&--u),r!=="afterVersion"&&r!=="afterPrecision"||p.type==="preprocessor"&&/^#version/.test(p.data)&&(f=Math.max(f,m)),r==="afterPrecision"&&p.type==="keyword"&&p.data==="precision"){const h=i(c,m);if(h===null)throw new Error("precision statement not followed by any semicolons!");f=Math.max(f,h)}l<f&&u===0&&(l=m)}return l+1}const n={data:`
`,type:"whitespace"},a=c=>c<t.length&&/[^\r\n]$/.test(t[c].data);let s=o(t);a(s-1)&&t.splice(s++,0,n);for(const c of e)t.splice(s++,0,c);a(s-1)&&a(s)&&t.splice(s,0,n)}function Ls(t,e,r,i="lowp"){Ci(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function zs(t,e,r,i,o="lowp"){Ci(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:i.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:o},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function Is(t,e){let r,i,o=-1;for(let n=e;n<t.length;n++){const a=t[n];if(a.type==="operator"&&(a.data==="["&&(r=n),a.data==="]")){i=n;break}a.type==="integer"&&(o=parseInt(a.data,10))}return r&&i&&t.splice(r,i-r+1),o}function Ns(t,e){const r=Bs();if(v(r))return r;const i=Es(t);if(Os(i,"100","300 es")==="300 es")throw new Error("shader is already glsl 300 es");let o=null,n=null;const a={},s={};for(let c=0;c<i.length;++c){const l=i[c];switch(l.type){case"keyword":e===35633&&l.data==="attribute"?l.data="in":l.data==="varying"&&(l.data=e===35633?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(l.data.trim())&&(l.data=l.data.replace(/(2D|Cube|EXT)/g,"")),e===35632&&l.data==="gl_FragColor"&&(o||(o=Be(i,a,"fragColor"),Ls(i,o,"vec4")),l.data=o),e===35632&&l.data==="gl_FragData"){const u=Is(i,c+1),f=Be(i,a,"fragData");zs(i,f,"vec4",u,"mediump"),l.data=f}else e===35632&&l.data==="gl_FragDepthEXT"&&(n||(n=Be(i,a,"gl_FragDepth")),l.data=n);break;case"ident":if(Ts.indexOf(l.data)>=0){if(e===35633&&Rs(i,c))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");l.data in s||(s[l.data]=Be(i,a,l.data)),l.data=s[l.data]}}}for(let c=i.length-1;c>=0;--c){const l=i[c];if(l.type==="preprocessor"){const u=l.data.match(/\#extension\s+(.*)\:/);if(u&&u[1]&&bt.indexOf(u[1].trim())>=0){const p=i[c+1];i.splice(c,p&&p.type==="whitespace"?2:1)}const f=l.data.match(/\#ifdef\s+(.*)/);f&&f[1]&&bt.indexOf(f[1].trim())>=0&&(l.data="#if 1");const m=l.data.match(/\#ifndef\s+(.*)/);m&&m[1]&&bt.indexOf(m[1].trim())>=0&&(l.data="#if 0")}}return Us(t,Ds(i))}function Bs(t){return null}function Us(t,e){return e}class Vs{constructor(e,r,i,o){this._context=e,this._locations=o,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},e||console.error("RenderingContext isn't initialized!"),r.length===0&&console.error("Shaders source should not be empty!"),this._vShader=Cr(this._context,35633,r),this._fShader=Cr(this._context,35632,i),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(G.VertexShader,this),this._context.instanceCounter.increment(G.FragmentShader,this)}get glName(){if(v(this._glName))return this._glName;if(U(this._vShader))return null;const e=this._context.gl,r=e.createProgram();return e.attachShader(r,this._vShader),e.attachShader(r,this._fShader),this._locations.forEach((i,o)=>e.bindAttribLocation(r,i,o)),e.linkProgram(r),lt()&&!e.getProgramParameter(r,e.LINK_STATUS)&&console.error(`Could not link shader
validated: ${e.getProgramParameter(r,e.VALIDATE_STATUS)}, gl error ${e.getError()}, vertex: ${e.getShaderParameter(this._vShader,e.COMPILE_STATUS)}, fragment: ${e.getShaderParameter(this._fShader,e.COMPILE_STATUS)}, info log: ${e.getProgramInfoLog(r)}`),this._glName=r,this._context.instanceCounter.increment(G.Program,this),r}dispose(){const e=this._context.gl;this._vShader&&(e.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(G.VertexShader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null,this._context.instanceCounter.decrement(G.FragmentShader,this)),this._glName&&(e.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(G.Program,this))}_getUniformLocation(e){return this._nameToUniformLocation[e]===void 0&&(this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this.glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return this._getUniformLocation(e)!==null}setUniform1i(e,r){const i=this._nameToUniform1[e];(i===void 0||r!==i)&&(this._context.useProgram(this),this._context.gl.uniform1i(this._getUniformLocation(e),r),this._nameToUniform1[e]=r)}setUniform1iv(e,r){const i=this._nameToUniform1v[e];ee(i,r)&&(this._context.useProgram(this),this._context.gl.uniform1iv(this._getUniformLocation(e),r),i===void 0?this._nameToUniform1v[e]=Array.from(r):J(r,i))}setUniform2iv(e,r){const i=this._nameToUniform2[e];ee(i,r)&&(this._context.useProgram(this),this._context.gl.uniform2iv(this._getUniformLocation(e),r),i===void 0?this._nameToUniform2[e]=Array.from(r):J(r,i))}setUniform3iv(e,r){const i=this._nameToUniform3[e];ee(i,r)&&(this._context.useProgram(this),this._context.gl.uniform3iv(this._getUniformLocation(e),r),i===void 0?this._nameToUniform3[e]=Array.from(r):J(r,i))}setUniform4iv(e,r){const i=this._nameToUniform4[e];ee(i,r)&&(this._context.useProgram(this),this._context.gl.uniform4iv(this._getUniformLocation(e),r),i===void 0?this._nameToUniform4[e]=Array.from(r):J(r,i))}setUniform1f(e,r){const i=this._nameToUniform1[e];(i===void 0||r!==i)&&(this._context.useProgram(this),this._context.gl.uniform1f(this._getUniformLocation(e),r),this._nameToUniform1[e]=r)}setUniform1fv(e,r){const i=this._nameToUniform1v[e];ee(i,r)&&(this._context.useProgram(this),this._context.gl.uniform1fv(this._getUniformLocation(e),r),i===void 0?this._nameToUniform1v[e]=Array.from(r):J(r,i))}setUniform2f(e,r,i){const o=this._nameToUniform2[e];(o===void 0||r!==o[0]||i!==o[1])&&(this._context.useProgram(this),this._context.gl.uniform2f(this._getUniformLocation(e),r,i),o===void 0?this._nameToUniform2[e]=[r,i]:(o[0]=r,o[1]=i))}setUniform2fv(e,r){const i=this._nameToUniform2[e];ee(i,r)&&(this._context.useProgram(this),this._context.gl.uniform2fv(this._getUniformLocation(e),r),i===void 0?this._nameToUniform2[e]=Array.from(r):J(r,i))}setUniform3f(e,r,i,o){const n=this._nameToUniform3[e];(n===void 0||r!==n[0]||i!==n[1]||o!==n[2])&&(this._context.useProgram(this),this._context.gl.uniform3f(this._getUniformLocation(e),r,i,o),n===void 0?this._nameToUniform3[e]=[r,i,o]:(n[0]=r,n[1]=i,n[2]=o))}setUniform3fv(e,r){const i=this._nameToUniform3[e];ee(i,r)&&(this._context.useProgram(this),this._context.gl.uniform3fv(this._getUniformLocation(e),r),i===void 0?this._nameToUniform3[e]=Array.from(r):J(r,i))}setUniform4f(e,r,i,o,n){const a=this._nameToUniform4[e];(a===void 0||r!==a[0]||i!==a[1]||o!==a[2]||n!==a[3])&&(this._context.useProgram(this),this._context.gl.uniform4f(this._getUniformLocation(e),r,i,o,n),a===void 0?this._nameToUniform4[e]=[r,i,o,n]:(a[0]=r,a[1]=i,a[2]=o,a[3]=n))}setUniform4fv(e,r){const i=this._nameToUniform4[e];ee(i,r)&&(this._context.useProgram(this),this._context.gl.uniform4fv(this._getUniformLocation(e),r),i===void 0?this._nameToUniform4[e]=Array.from(r):J(r,i))}setUniformMatrix3fv(e,r,i=!1,o=!1){const n=this._nameToUniformMatrix3[e];(o?n!==r:Gs(n,r))&&(this._context.useProgram(this),this._context.gl.uniformMatrix3fv(this._getUniformLocation(e),i,r),n===void 0?this._nameToUniformMatrix3[e]=Array.from(r):J(r,n))}setUniformMatrix4fv(e,r,i=!1){const o=this._nameToUniformMatrix4[e];Ws(o,r)&&(this._context.useProgram(this),this._context.gl.uniformMatrix4fv(this._getUniformLocation(e),i,r),o===void 0?this._nameToUniformMatrix4[e]=Array.from(r):J(r,o))}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){}}function ee(t,e){if(U(t)||t.length!==e.length)return!0;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!0;return!1}function Cr(t,e,r){const i=t.webglVersion==="webgl2"?Ns(r,e):r,o=t.gl,n=o.createShader(e);return o.shaderSource(n,i),o.compileShader(n),lt()&&!o.getShaderParameter(n,o.COMPILE_STATUS)&&(console.error("Compile error in ".concat(e===35633?"vertex":"fragment"," shader")),console.error(o.getShaderInfoLog(n)),console.error(Hs(i)),t.webglVersion==="webgl2"&&(console.log("Shader source before transpilation:"),console.log(r))),n}function Hs(t){let e=2;return t.replace(/\n/g,()=>`
`+ks(e++)+":")}function ks(t){return t>=1e3?t.toString():("  "+t).slice(-3)}function J(t,e){for(let r=0;r<t.length;++r)e[r]=t[r]}function Gs(t,e){return!!U(t)||(t.length!==9?ee(t,e):t.length!==9||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8])}function Ws(t,e){return!!U(t)||(t.length!==16?ee(t,e):t.length!==16||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8]||t[9]!==e[9]||t[10]!==e[10]||t[11]!==e[11]||t[12]!==e[12]||t[13]!==e[13]||t[14]!==e[14]||t[15]!==e[15])}class Mi extends Vs{constructor(e,r,i){super(e,r.generateSource("vertex"),r.generateSource("fragment"),i),this._textures=new Map,this._freeTextureUnits=new Fr({deallocator:null}),this._fragmentUniforms=Vo()?r.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(U(e)||e.glName==null){const o=this._textures.get(r);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(r)),null}let i=this._textures.get(r);return i==null?(i=this._allocTextureUnit(e),this._textures.set(r,i)):i.texture=e,this._context.useProgram(this),this.setUniform1i(r,i.unit),this._context.bindTexture(e,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),v(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{if((e.type==="sampler2D"||e.type==="samplerCube")&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const qs={mask:255},js={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Xs={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};function Ai(t,e){e.output===0&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(d`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):e.output===1||e.output===3?(t.varyings.add("linearDepth","float"),t.vertex.uniforms.add("cameraNearFar","vec2"),t.vertex.code.add(d`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):t.vertex.code.add(d`void forwardLinearDepth() {}`)}function $i(t){t.vertex.code.add(d`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ve(t,e){e.linearDepth?t.vertex.code.add(d`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):t.vertex.code.add(d`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Ks(t){const e=d`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.fragment.code.add(e),t.vertex.code.add(e)}function ut(t,e){e.normalType===0&&(t.attributes.add("normal","vec3"),t.vertex.code.add(d`vec3 normalModel() {
return normal;
}`)),e.normalType===1&&(t.include(Ks),t.attributes.add("normalCompressed","vec2"),t.vertex.code.add(d`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===3&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}function Ut(t){t.attributes.add("position","vec3"),t.vertex.code.add(d`vec3 positionModel() { return position; }`)}function Qs(t){t.vertex.code.add(d`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${d.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${d.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${d.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${d.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Fi(t,e){e.symbolColor?(t.include(Qs),t.attributes.add("symbolColor","vec4"),t.varyings.add("colorMixMode","mediump float")):t.fragment.uniforms.add("colorMixMode","int"),e.symbolColor?t.vertex.code.add(d`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):t.vertex.code.add(d`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function Pi(t,e){e.attributeColor?(t.attributes.add("color","vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(d`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(d`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(d`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Ft(t,e){t.include(Ut),t.vertex.include(gi,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),t.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),t.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),t.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),t.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),t.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),t.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),t.vertex.uniforms.add("uTransform_ProjFromView","mat4"),t.vertex.code.add(d`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),t.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),t.fragment.code.add(d`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}(function(t){class e{constructor(){this.worldFromModel_RS=Je(),this.worldFromModel_TH=N(),this.worldFromModel_TL=N()}}t.ModelTransform=e;class r{constructor(){this.worldFromView_TH=N(),this.worldFromView_TL=N(),this.viewFromCameraRelative_RS=Je(),this.projFromView=Ir()}}function i(n,a){n.setUniformMatrix3fv("uTransform_WorldFromModel_RS",a.worldFromModel_RS),n.setUniform3fv("uTransform_WorldFromModel_TH",a.worldFromModel_TH),n.setUniform3fv("uTransform_WorldFromModel_TL",a.worldFromModel_TL)}function o(n,a){n.setUniform3fv("uTransform_WorldFromView_TH",a.worldFromView_TH),n.setUniform3fv("uTransform_WorldFromView_TL",a.worldFromView_TL),n.setUniformMatrix4fv("uTransform_ProjFromView",a.projFromView),n.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",a.viewFromCameraRelative_RS)}t.ViewProjectionTransform=r,t.bindModelTransform=i,t.bindViewProjTransform=o})(Ft||(Ft={}));function rt(t,e){e.normalType===0||e.normalType===1?(t.include(ut,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),t.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),t.vertex.code.add(d`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):e.normalType===2?(t.include(Ft,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(d`
    void forwardNormal() {
      vNormalWorld = ${e.viewingMode===1?d`normalize(vPositionWorldCameraRelative);`:d`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(d`void forwardNormal() {}`)}(function(t){function e(r,i){r.setUniformMatrix4fv("viewNormal",i)}t.bindUniforms=e})(rt||(rt={}));function Ys(t,e){t.fragment.include(Nt),e.output===3?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(d`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):e.output===1&&t.fragment.code.add(d`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function Ei(t,e){const r=t.vertex.code,i=t.fragment.code;e.output!==1&&e.output!==3||(t.include(Ve,{linearDepth:!0}),t.include(Ae,e),t.include(Ue,e),t.include(Ys,e),t.include(Te,e),t.vertex.uniforms.add("cameraNearFar","vec2"),t.varyings.add("depth","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),r.add(d`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),t.include(_e,e),i.add(d`
      void main(void) {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),e.output===2&&(t.include(Ve,{linearDepth:!1}),t.include(ut,e),t.include(rt,e),t.include(Ae,e),t.include(Ue,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.vertex.uniforms.add("viewNormal","mat4"),t.varyings.add("vPositionView","vec3"),r.add(d`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${e.normalType===0?d`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),t.include(Te,e),t.include(_e,e),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${e.normalType===3?d`
            vec3 normal = screenDerivativeNormal(vPositionView);`:d`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),e.output===4&&(t.include(Ve,{linearDepth:!1}),t.include(Ae,e),t.include(Ue,e),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),r.add(d`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(Te,e),t.include(_e,e),t.include(ls),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function it(t){t.include(Nt),t.code.add(d`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function Zs(t,e){const r=t.fragment;e.vertexTangents?(t.attributes.add("tangent","vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===2?r.code.add(d`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(d`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(d`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.attributeTextureCoordinates!==0&&(t.include(bi,e),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(d`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function Vt(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(d`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(d`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function Js(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(d`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==1&&e.pbrMode!==2||r.code.add(d`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function el(t){const e=t.fragment;e.uniforms.add("lightingMainDirection","vec3"),e.uniforms.add("lightingMainIntensity","vec3"),e.uniforms.add("lightingFixedFactor","float"),e.code.add(d`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function tl(t){const e=t.fragment.code;e.add(d`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(d`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(d`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Di(t){t.vertex.code.add(d`const float PI = 3.141592653589793;`),t.fragment.code.add(d`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Ht(t,e){const r=t.fragment.code;t.include(Di),e.pbrMode===3||e.pbrMode===4?(r.add(d`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(d`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(d`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(d`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(d`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==1&&e.pbrMode!==2||(t.include(tl),r.add(d`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(d`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(d`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(d`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(d`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(d`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Oi(t,e){const r=t.fragment;t.include(el),t.include(Vt,e),e.pbrMode!==0&&t.include(Ht,e),t.include(Js,e),e.receiveShadows&&t.include(Bt,e),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),t.include(Di),r.code.add(d`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===0?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(d`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.viewingMode===1?d`normalize(vPosWorld)`:d`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(d`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),e.pbrMode===0||e.pbrMode===4?r.code.add(d`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):e.pbrMode!==1&&e.pbrMode!==2||(r.code.add(d`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(d`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(d`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(d`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(d`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===2?d`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function rl(t,e){const r=t.fragment;r.code.add(d`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode===1?r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):e.doubleSidedMode===2?r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(d`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}function il(t,e){const r=d`
  /*
  *  ${e.name}
  *  ${e.output===0?"RenderOutput: Color":e.output===1?"RenderOutput: Depth":e.output===3?"RenderOutput: Shadow":e.output===2?"RenderOutput: Normal":e.output===4?"RenderOutput: Highlight":""}
  */
  `;lt()&&(t.fragment.code.add(r),t.vertex.code.add(r))}function ol(t){t.code.add(d`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function ot(t){t.include(ol),t.code.add(d`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${d.int(1)}) {
        return allMixed;
      }
      else if (mode == ${d.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${d.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${d.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${d.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}const nl=Se.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Ri{constructor(){this.includedModules=new Map}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&nl.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r))}}class Li extends Ri{constructor(){super(...arguments),this.vertex=new Mr,this.fragment=new Mr,this.attributes=new ll,this.varyings=new cl,this.extensions=new Fe,this.constants=new B}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),o=this.varyings.generateSource(),n=e==="vertex"?this.vertex:this.fragment,a=n.uniforms.generateSource(),s=n.code.generateSource(),c=e==="vertex"?ul:dl,l=this.constants.generateSource().concat(n.constants.generateSource());return`
${r.join(`
`)}

${c}

${l.join(`
`)}

${a.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${s.join(`
`)}`}}class al{constructor(){this._entries=new Map}add(e,r,i){const o=`${e}_${r}_${i}`;return this._entries.set(o,{name:e,type:r,arraySize:i}),this}generateSource(){const e=r=>r?`[${r}]`:"";return Array.from(this._entries.values()).map(r=>`uniform ${r.type} ${r.name}${e(r.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class sl{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class Mr extends Ri{constructor(){super(...arguments),this.uniforms=new al,this.code=new sl,this.constants=new B}get builder(){return this}}class ll{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}}class cl{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class Fe{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?Fe.ALLOWLIST_VERTEX:Fe.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}}Fe.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Fe.ALLOWLIST_VERTEX=[];class B{constructor(){this._entries=[]}add(e,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=B.numberToFloatStr(i);break;case"int":o=B.numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${B.numberToFloatStr(i[0])},                            ${B.numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${B.numberToFloatStr(i[0])},                            ${B.numberToFloatStr(i[1])},                            ${B.numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${B.numberToFloatStr(i[0])},                            ${B.numberToFloatStr(i[1])},                            ${B.numberToFloatStr(i[2])},                            ${B.numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${B.numberToIntStr(i[0])},                             ${B.numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${B.numberToIntStr(i[0])},                             ${B.numberToIntStr(i[1])},                             ${B.numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${B.numberToIntStr(i[0])},                             ${B.numberToIntStr(i[1])},                             ${B.numberToIntStr(i[2])},                             ${B.numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,n=>B.numberToFloatStr(n)).join(", ")})`}return this._entries.push(`const ${r} ${e} = ${o};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const dl=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,ul=`precision highp float;
precision highp sampler2D;`;function hl(t){const e=new Li,r=e.vertex.code,i=e.fragment.code;return e.include(il,{name:"Default Material Shader",output:t.output}),e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),e.include(Ut),e.varyings.add("vpos","vec3"),e.include(Ue,t),e.include(ke,t),e.include(xi,t),t.output!==0&&t.output!==7||(e.include(ut,t),e.include(Ve,{linearDepth:!1}),t.normalType===0&&t.offsetBackfaces&&e.include($i),e.include(Zs,t),e.include(rt,t),t.instancedColor&&e.attributes.add("instanceColor","vec4"),e.varyings.add("localvpos","vec3"),e.include(Ae,t),e.include(Ai,t),e.include(Fi,t),e.include(Pi,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),r.add(d`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${d.float(Lt)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===0?d`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${t.normalType===0&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${t.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),t.output===7&&(e.include(Te,t),e.include(_e,t),t.multipassTerrainEnabled&&(e.fragment.include(it),e.include(tt,t)),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(ot),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?d`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===0&&(e.include(Te,t),e.include(Oi,t),e.include(Vt,t),e.include(_e,t),t.receiveShadows&&e.include(Bt,t),t.multipassTerrainEnabled&&(e.fragment.include(it),e.include(tt,t)),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(_i,t),e.include(Ht,t),e.fragment.include(ot),e.include(rl,t),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${t.normalType===3?d`
        vec3 normal = screenDerivativeNormal(localvpos);`:d`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===1?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===1?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?d`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t.hasNormalTexture?d`
              mat3 tangentSpace = ${t.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${t.pbrMode===1||t.pbrMode===2?t.viewingMode===1?d`vec3 normalGround = normalize(vpos + localOrigin);`:d`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:d``}
        ${t.pbrMode===1||t.pbrMode===2?d`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(Ei,t),e}const ml=Object.freeze({__proto__:null,build:hl});class Ge extends bs{initializeProgram(e){const r=Ge.shader.get(),i=this.configuration,o=r.build({OITEnabled:i.transparencyPassType===0,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?i.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?3:0,doubleSidedMode:i.doubleSidedMode,vertexTangents:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:vi(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new Mi(e.rctx,o,ct)}bindPass(e,r){var i,o;vs(this.program,r.camera.projectionMatrix);const n=this.configuration.output;(this.configuration.output===1||r.multipassTerrainEnabled||n===3)&&this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),ds(this.program,r)),n===7&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",cr[e.colorMixMode])),n===0?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",cr[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&hs(this.program,e,this.configuration.isSchematic)):n===4&&cs(this.program,r),ps(this.program,e),is(this.program,e,r),Gn(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==2&&e.textureAlphaMode!==3||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),(i=r.shadowMap)==null||i.bind(this.program),(o=r.ssaoHelper)==null||o.bind(this.program,r.camera)}bindDraw(e){const r=this.configuration.instancedDoublePrecision?Pt(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;xs(this.program,r,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===0||this.configuration.output===7||this.configuration.output===1&&this.configuration.screenSizePerspective||this.configuration.output===2&&this.configuration.screenSizePerspective||this.configuration.output===4&&this.configuration.screenSizePerspective)&&gs(this.program,r,e.camera.viewInverseTransposeMatrix),this.configuration.output===2&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&ke.bindCustomOrigin(this.program,r),ts(this.program,this.configuration,e.slicePlane,r),this.configuration.output===0&&ms(this.program,e,r)}setPipeline(e,r){const i=this.configuration,o=e===3,n=e===2;return da({blending:i.output!==0&&i.output!==7||!i.transparent?null:o?Ta:Sa(e),culling:fl(i)&&Jn(i.cullFace),depthTest:{func:$a(e)},depthWrite:o||n?i.writeDepth&&ea:null,colorWrite:ta,stencilWrite:i.sceneHasOcludees?qs:null,stencilTest:i.sceneHasOcludees?r?Xs:js:null,polygonOffset:o||n?null:Aa(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function fl(t){return t.cullFace?t.cullFace!==0:!t.slicePlaneEnabled&&!t.transparent&&!t.doubleSidedMode}Ge.shader=new Ti(ml,()=>import("./DefaultMaterial.glsl.7f4d43f4.js"));class D extends _s{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}R([L({count:8})],D.prototype,"output",void 0),R([L({count:4})],D.prototype,"alphaDiscardMode",void 0),R([L({count:3})],D.prototype,"doubleSidedMode",void 0),R([L()],D.prototype,"isSchematic",void 0),R([L()],D.prototype,"vertexColors",void 0),R([L()],D.prototype,"offsetBackfaces",void 0),R([L()],D.prototype,"symbolColors",void 0),R([L()],D.prototype,"vvSize",void 0),R([L()],D.prototype,"vvColor",void 0),R([L()],D.prototype,"verticalOffset",void 0),R([L()],D.prototype,"receiveShadows",void 0),R([L()],D.prototype,"slicePlaneEnabled",void 0),R([L()],D.prototype,"sliceHighlightDisabled",void 0),R([L()],D.prototype,"receiveAmbientOcclusion",void 0),R([L()],D.prototype,"screenSizePerspective",void 0),R([L()],D.prototype,"textureAlphaPremultiplied",void 0),R([L()],D.prototype,"hasColorTexture",void 0),R([L()],D.prototype,"usePBR",void 0),R([L()],D.prototype,"hasMetalnessAndRoughnessTexture",void 0),R([L()],D.prototype,"hasEmissionTexture",void 0),R([L()],D.prototype,"hasOcclusionTexture",void 0),R([L()],D.prototype,"hasNormalTexture",void 0),R([L()],D.prototype,"instanced",void 0),R([L()],D.prototype,"instancedColor",void 0),R([L()],D.prototype,"instancedDoublePrecision",void 0),R([L()],D.prototype,"vertexTangents",void 0),R([L()],D.prototype,"normalsTypeDerivate",void 0),R([L()],D.prototype,"writeDepth",void 0),R([L()],D.prototype,"sceneHasOcludees",void 0),R([L()],D.prototype,"transparent",void 0),R([L()],D.prototype,"enableOffset",void 0),R([L({count:3})],D.prototype,"cullFace",void 0),R([L({count:4})],D.prototype,"transparencyPassType",void 0),R([L()],D.prototype,"multipassTerrainEnabled",void 0),R([L()],D.prototype,"cullAboveGround",void 0);function pl(t){const e=new Li,r=e.vertex.code,i=e.fragment.code;return e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),e.include(Ut),e.varyings.add("vpos","vec3"),e.include(Ue,t),e.include(ke,t),e.include(xi,t),t.output!==0&&t.output!==7||(e.include(ut,t),e.include(Ve,{linearDepth:!1}),t.offsetBackfaces&&e.include($i),t.instancedColor&&e.attributes.add("instanceColor","vec4"),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("localvpos","vec3"),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),e.include(Ae,t),e.include(Ai,t),e.include(Fi,t),e.include(Pi,t),e.vertex.uniforms.add("externalColor","vec4"),e.varyings.add("vcolorExt","vec4"),r.add(d`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${d.float(Lt)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${t.multipassTerrainEnabled?d`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===7&&(e.include(Te,t),e.include(_e,t),t.multipassTerrainEnabled&&(e.fragment.include(it),e.include(tt,t)),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.fragment.include(ot),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?d`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        ${t.attributeColor?d`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===0&&(e.include(Te,t),e.include(Oi,t),e.include(Vt,t),e.include(_e,t),t.receiveShadows&&e.include(Bt,t),t.multipassTerrainEnabled&&(e.fragment.include(it),e.include(tt,t)),e.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.fragment.uniforms.add("view","mat4"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.include(_i,t),e.include(Ht,t),e.fragment.include(ot),i.add(d`
      void main() {
        discardBySlice(vpos);
        ${t.multipassTerrainEnabled?d`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?d`
        vec4 texColor = texture2D(tex, vuv0);
        ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:d`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${t.pbrMode===1?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.viewingMode===1?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.attributeColor?d`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:d`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${d`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${t.pbrMode===1||t.pbrMode===2?t.viewingMode===1?d`vec3 normalGround = normalize(vpos + localOrigin);`:d`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:d``}
        ${t.pbrMode===1||t.pbrMode===2?d`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.include(Ei,t),e}const gl=Object.freeze({__proto__:null,build:pl});class ht extends Ge{initializeProgram(e){const r=ht.shader.get(),i=this.configuration,o=r.build({OITEnabled:i.transparencyPassType===0,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:vi(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new Mi(e.rctx,o,ct)}}ht.shader=new Ti(gl,()=>import("./RealisticTree.glsl.867d9375.js"));class zi extends Xn{constructor(e){super(e,xl),this.supportsEdges=!0,this.techniqueConfig=new D,this.vertexBufferLayout=_l(this.parameters),this.instanceBufferLayout=e.instanced?Tl(this.parameters):null}isVisibleInPass(e){return e!==4&&e!==6&&e!==7||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const r=e.instanced,i=e.vertexColors,o=e.symbolColors,n=!!r&&r.indexOf("color")>-1,a=e.vvColorEnabled,s=e.colorMixMode==="replace",c=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(n||a||o)?!!s||c:i?s?l:c:n||a||o?!!s||c:s?l:c}getTechniqueConfig(e,r){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=this.parameters.verticalOffset!==null,this.techniqueConfig.screenSizePerspective=this.parameters.screenSizePerspective!==null,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate=this.parameters.normals==="screenDerivative",this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=r.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=r.cullAboveGround,e!==0&&e!==7||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?1:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!r.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=r.transparencyPassType,this.techniqueConfig.enableOffset=r.camera.relativeElevation<Ca),this.techniqueConfig}intersect(e,r,i,o,n,a,s){if(this.parameters.verticalOffset!==null){const c=o.camera;$e(Tt,i[12],i[13],i[14]);let l=null;switch(o.viewingMode){case 1:l=nt(Ar,Tt);break;case 2:l=Dr(Ar,Sl)}let u=0;if(this.parameters.verticalOffset!==null){const f=Q(Cl,Tt,c.eye),m=oe(f),p=ye(f,f,1/m);let h=null;this.parameters.screenSizePerspective&&(h=Et(l,p)),u+=kn(c,m,this.parameters.verticalOffset,h,this.parameters.screenSizePerspective)}ye(l,l,u),vo(_t,l,o.transform.inverseRotation),n=Q(yl,n,_t),a=Q(wl,a,_t)}In(e,r,o,n,a,Xa(o.verticalOffset),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||e===20}createGLMaterial(e){return e.output===0||e.output===7||e.output===1||e.output===2||e.output===3||e.output===4?new vl(e):null}createBufferWriter(){return new bl(this.vertexBufferLayout,this.instanceBufferLayout)}}class vl extends $n{constructor(e){super(V(V({},e),e.material.parameters))}updateParameters(e){const r=this._material.parameters;return this.updateTexture(r.textureId),this.ensureTechnique(r.treeRendering?ht:Ge,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==0&&this._output!==7||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,r){r.bindPass(this._material.parameters,e),this.bindTextures(r.program)}}const xl=V({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Je(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:Mn,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},Kn);class bl{constructor(e,r){this.vertexBufferLayout=e,this.instanceBufferLayout=r}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,r,i,o){es(r,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,o)}}function _l(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,r=Ur().vec3f("position").vec3f("normal");return t.vertexTangents&&r.vec4f("tangent"),e&&r.vec2f("uv0"),t.vertexColors&&r.vec4u8("color"),t.symbolColors&&r.vec4u8("symbolColor"),r}function Tl(t){let e=Ur();return e=t.instancedDoublePrecision?e.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):e.mat4f("model").mat4f("modelNormal"),t.instanced&&t.instanced.indexOf("color")>-1&&(e=e.vec4f("instanceColor")),t.instanced&&t.instanced.indexOf("featureAttribute")>-1&&(e=e.vec4f("instanceFeatureAttribute")),e}const yl=N(),wl=N(),Sl=Pt(0,0,1),Ar=N(),_t=N(),Tt=N(),Cl=N(),ie=Se.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Ml(t,e){const r=await Al(t,e);return{resource:r,textures:await Dl(r.textureDefinitions,e)}}async function Al(t,e){const r=v(e)&&e.streamDataRequester;if(r)return $l(t,r,e);const i=await Rr($r(t,xo(e)));if(i.ok===!0)return i.value.data;Lr(i.error),Ii(i.error)}async function $l(t,e,r){const i=await Rr(e.request(t,"json",r));if(i.ok===!0)return i.value;Lr(i.error),Ii(i.error.details.url)}function Ii(t){throw new Pr("",`Request for object resource failed: ${t}`)}function Fl(t){const e=t.params,r=e.topology;let i=!0;switch(e.vertexAttributes||(ie.warn("Geometry must specify vertex attributes"),i=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const n=e.faces;if(n){if(e.vertexAttributes)for(const a in e.vertexAttributes){const s=n[a];s&&s.values?(s.valueType!=null&&s.valueType!=="UInt32"&&(ie.warn(`Unsupported indexed geometry indices type '${s.valueType}', only UInt32 is currently supported`),i=!1),s.valuesPerElement!=null&&s.valuesPerElement!==1&&(ie.warn(`Unsupported indexed geometry values per element '${s.valuesPerElement}', only 1 is currently supported`),i=!1)):(ie.warn(`Indexed geometry does not specify face indices for '${a}' attribute`),i=!1)}}else ie.warn("Indexed geometries must specify faces"),i=!1;break}default:ie.warn(`Unsupported topology '${r}'`),i=!1}t.params.material||(ie.warn("Geometry requires material"),i=!1);const o=t.params.vertexAttributes;for(const n in o)o[n].values||(ie.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Pl(t,e){const r=[],i=[],o=[],n=[],a=t.resource,s=Br.parse(a.version||"1.0","wosr");Rl.validate(s);const c=a.model.name,l=a.model.geometries,u=a.materialDefinitions,f=t.textures;let m=0;const p=new Map;for(let h=0;h<l.length;h++){const b=l[h];if(!Fl(b))continue;const y=Ol(b),_=b.params.vertexAttributes,I=[];for(const g in _){const S=_[g],O=S.values;I.push([g,{data:O,size:S.valuesPerElement,exclusive:!0}])}const A=[];if(b.params.topology!=="PerAttributeArray"){const g=b.params.faces;for(const S in g)A.push([S,new Uint32Array(g[S].values)])}const M=f&&f[y.texture];if(M&&!p.has(y.texture)){const{image:g,params:S}=M,O=new H(g,S);n.push(O),p.set(y.texture,O)}const P=p.get(y.texture),w=P?P.id:void 0;let T=o[y.material]?o[y.material][y.texture]:null;if(!T){const g=u[y.material.substring(y.material.lastIndexOf("/")+1)].params;g.transparency===1&&(g.transparency=0);const S=M&&M.alphaChannelUsage,O=g.transparency>0||S==="transparency"||S==="maskAndTransparency",x=M?Ni(M.alphaChannelUsage):void 0,C={ambient:Yt(g.diffuse),diffuse:Yt(g.diffuse),opacity:1-(g.transparency||0),transparent:O,textureAlphaMode:x,textureAlphaCutoff:.33,textureId:w,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:g.externalColorMixMode||"tint",textureAlphaPremultiplied:!!M&&!!M.params.preMultiplyAlpha};v(e)&&e.materialParamsMixin&&Object.assign(C,e.materialParamsMixin),T=new zi(C),o[y.material]||(o[y.material]={}),o[y.material][y.texture]=T}i.push(T);const $=new Hr(I,A);m+=A.position?A.position.length:0,r.push($)}return{name:c,stageResources:{textures:n,materials:i,geometries:r},pivotOffset:a.model.pivotOffset,boundingBox:El(r),numberOfVertices:m,lodThreshold:null}}function El(t){const e=zr();return t.forEach(r=>{const i=r.boundingInfo;v(i)&&(Ze(e,i.getBBMin()),Ze(e,i.getBBMax()))}),e}async function Dl(t,e){const r=[];for(const n in t){const a=t[n],s=a.images[0].data;if(!s){ie.warn("Externally referenced texture data is not yet supported");continue}const c=a.encoding+";base64,"+s,l="/textureDefinitions/"+n,u=a.channels==="rgba"?a.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:Ni(u)!==1},m=v(e)&&e.disableTextures?Promise.resolve(null):Vr(c,e);r.push(m.then(p=>({refId:l,image:p,params:f,alphaChannelUsage:u})))}const i=await Promise.all(r),o={};for(const n of i)o[n.refId]=n;return o}function Ni(t){switch(t){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function Ol(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Rl=new Br(1,2,"wosr");async function Ll(t,e){const r=Bi(Wi(t));if(r.fileType==="wosr"){const c=await(e.cache?e.cache.loadWOSR(r.url,e):Ml(r.url,e)),l=Pl(c,e);return{lods:[l],referenceBoundingBox:l.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:c.remove}}const i=await(e.cache?e.cache.loadGLTF(r.url,e,e.usePBR):Eo(new Do(e.streamDataRequester),r.url,e,e.usePBR)),o=bo(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&v(o)&&i.meta.uri.indexOf("/RealisticTrees/")!==-1&&Nl(i,o);const n=i.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},a=Re(V({},e.materialParamsMixin),{treeRendering:i.customMeta.esriTreeRendering});if(r.specifiedLodIndex!=null){const c=Qe(i,n,a,r.specifiedLodIndex);let l=c[0].boundingBox;return r.specifiedLodIndex!==0&&(l=Qe(i,n,a,0)[0].boundingBox),{lods:c,referenceBoundingBox:l,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const s=Qe(i,n,a);return{lods:s,referenceBoundingBox:s[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function Bi(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Qe(t,e,r,i){const o=t.model,n=Je(),a=new Array,s=new Map,c=new Map;return o.lods.forEach((l,u)=>{if(i!==void 0&&u!==i)return;const f={name:l.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:v(l.lodThreshold)?l.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:zr()};a.push(f),l.parts.forEach(m=>{const p=m.material+(m.attributes.normal?"_normal":"")+(m.attributes.color?"_color":"")+(m.attributes.texCoord0?"_texCoord0":"")+(m.attributes.tangent?"_tangent":""),h=o.materials.get(m.material),b=v(m.attributes.texCoord0),y=v(m.attributes.normal),_=zl(h.alphaMode);if(!s.has(p)){if(b){if(v(h.textureColor)&&!c.has(h.textureColor)){const z=o.textures.get(h.textureColor),j=Re(V({},z.parameters),{preMultiplyAlpha:_!==1});c.set(h.textureColor,new H(z.data,j))}if(v(h.textureNormal)&&!c.has(h.textureNormal)){const z=o.textures.get(h.textureNormal);c.set(h.textureNormal,new H(z.data,z.parameters))}if(v(h.textureOcclusion)&&!c.has(h.textureOcclusion)){const z=o.textures.get(h.textureOcclusion);c.set(h.textureOcclusion,new H(z.data,z.parameters))}if(v(h.textureEmissive)&&!c.has(h.textureEmissive)){const z=o.textures.get(h.textureEmissive);c.set(h.textureEmissive,new H(z.data,z.parameters))}if(v(h.textureMetallicRoughness)&&!c.has(h.textureMetallicRoughness)){const z=o.textures.get(h.textureMetallicRoughness);c.set(h.textureMetallicRoughness,new H(z.data,z.parameters))}}const g=h.color[0]**(1/Ce),S=h.color[1]**(1/Ce),O=h.color[2]**(1/Ce),x=h.emissiveFactor[0]**(1/Ce),C=h.emissiveFactor[1]**(1/Ce),F=h.emissiveFactor[2]**(1/Ce),E=v(h.textureColor)&&b?c.get(h.textureColor):null;s.set(p,new zi(V(Re(V({},e),{transparent:_===0,textureAlphaMode:_,textureAlphaCutoff:h.alphaCutoff,diffuse:[g,S,O],ambient:[g,S,O],opacity:h.opacity,doubleSided:h.doubleSided,doubleSidedType:"winding-order",cullFace:h.doubleSided?0:2,vertexColors:!!m.attributes.color,vertexTangents:!!m.attributes.tangent,normals:y?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:v(E)?E.id:void 0,colorMixMode:h.colorMixMode,normalTextureId:v(h.textureNormal)&&b?c.get(h.textureNormal).id:void 0,textureAlphaPremultiplied:v(E)&&!!E.params.preMultiplyAlpha,occlusionTextureId:v(h.textureOcclusion)&&b?c.get(h.textureOcclusion).id:void 0,emissiveTextureId:v(h.textureEmissive)&&b?c.get(h.textureEmissive).id:void 0,metallicRoughnessTextureId:v(h.textureMetallicRoughness)&&b?c.get(h.textureMetallicRoughness).id:void 0,emissiveFactor:[x,C,F],mrrFactors:[h.metallicFactor,h.roughnessFactor,e.mrrFactors[2]],isSchematic:!1}),r)))}const I=Il(m.indices||m.attributes.position.count,m.primitiveType),A=m.attributes.position.count,M=be(Me,A);To(M,m.attributes.position,m.transform);const P=[["position",{data:M.typedBuffer,size:M.elementCount,exclusive:!0}]],w=[["position",I]];if(v(m.attributes.normal)){const g=be(Me,A);Jt(n,m.transform),yo(g,m.attributes.normal,n),P.push(["normal",{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]),w.push(["normal",I])}if(v(m.attributes.tangent)){const g=be(Mt,A);Jt(n,m.transform),Oo(g,m.attributes.tangent,n),P.push(["tangent",{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]),w.push(["tangent",I])}if(v(m.attributes.texCoord0)){const g=be(Nr,A);Ro(g,m.attributes.texCoord0),P.push(["uv0",{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]),w.push(["uv0",I])}if(v(m.attributes.color)){const g=be(He,A);if(m.attributes.color.elementCount===4)m.attributes.color instanceof Mt?ir(g,m.attributes.color,255):m.attributes.color instanceof He?Lo(g,m.attributes.color):m.attributes.color instanceof So&&ir(g,m.attributes.color,1/256);else{zo(g,255,255,255,255);const S=new tr(g.buffer,0,4);m.attributes.color instanceof Me?er(S,m.attributes.color,255):m.attributes.color instanceof tr?wo(S,m.attributes.color):m.attributes.color instanceof Co&&er(S,m.attributes.color,1/256)}P.push(["color",{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]),w.push(["color",I])}const T=new Hr(P,w);f.stageResources.geometries.push(T),f.stageResources.materials.push(s.get(p)),b&&(v(h.textureColor)&&f.stageResources.textures.push(c.get(h.textureColor)),v(h.textureNormal)&&f.stageResources.textures.push(c.get(h.textureNormal)),v(h.textureOcclusion)&&f.stageResources.textures.push(c.get(h.textureOcclusion)),v(h.textureEmissive)&&f.stageResources.textures.push(c.get(h.textureEmissive)),v(h.textureMetallicRoughness)&&f.stageResources.textures.push(c.get(h.textureMetallicRoughness))),f.numberOfVertices+=A;const $=T.boundingInfo;v($)&&(Ze(f.boundingBox,$.getBBMin()),Ze(f.boundingBox,$.getBBMax()))})}),a}function zl(t){switch(t){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}function Il(t,e){switch(e){case 4:return Bo(t);case 5:return No(t);case 6:return Io(t)}}function Nl(t,e){for(let r=0;r<t.model.lods.length;++r){const i=t.model.lods[r];t.customMeta.esriTreeRendering=!0;for(const o of i.parts){const n=o.attributes.normal;if(U(n))return;const a=o.attributes.position,s=a.count,c=N(),l=N(),u=N(),f=be(He,s),m=be(Me,s),p=_o(Ir(),o.transform);for(let h=0;h<s;h++){a.getVec(h,l),n.getVec(h,c),Ct(l,l,o.transform),Q(u,l,e.center),Zt(u,u,e.radius);const b=u[2],y=oe(u),_=Math.min(.45+.55*y*y,1);Zt(u,u,e.radius),Ct(u,u,p),nt(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&yt(u,u,c,b>-1?.2:Math.min(-4*b-3.8,1)),m.setVec(h,u),f.set(h,0,255*_),f.set(h,1,255*_),f.set(h,2,255*_),f.set(h,3,255)}o.attributes.normal=m,o.attributes.color=f}}}var Yl=Object.freeze(Object.defineProperty({__proto__:null,fetch:Ll,gltfToEngineResources:Qe,parseUrl:Bi},Symbol.toStringTag,{value:"Module"}));export{hl as P,pl as j,Yl as o};
