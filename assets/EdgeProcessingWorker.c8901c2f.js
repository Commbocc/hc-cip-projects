var At=Object.defineProperty,It=Object.defineProperties;var xt=Object.getOwnPropertyDescriptors;var tt=Object.getOwnPropertySymbols;var bt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable;var nt=(t,n,e)=>n in t?At(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,et=(t,n)=>{for(var e in n||(n={}))bt.call(n,e)&&nt(t,e,n[e]);if(tt)for(var e of tt(n))Lt.call(n,e)&&nt(t,e,n[e]);return t},ot=(t,n)=>It(t,xt(n));import{n as Nt}from"./deduplicate.5b3fe61c.js";import{y as St,u as Vt,i as Et,c as Ft,l as Ut,p as Dt,o as Wt,m as kt,T as Bt,h as Mt,a as zt,b as Ht,d as Pt,A as Ot,O as Tt,x as qt,g as Ct,w as jt,E as Gt,L as Jt,B as Rt,F as _t,I as Kt,U as Qt,j as Xt,V as Yt,M as Zt,S as tn,k as nn,q as en,v as on,z as rn,C as sn,D as an,G as cn,H as ln}from"./BufferView.b4397dad.js";import{dh as un,di as dt,cH as x,dj as fn,cL as rt,dk as dn,dl as gn,dm as P,dn as st,dp as T,dq as gt,dr as pn,ds as mn,dt as it,du as hn}from"./vendor.b8b0b9ef.js";import{A as R}from"./InterleavedLayout.495b0ffd.js";import"./vec2.dbb3cbe2.js";import"./types.2ac9edfd.js";function at(t,n,e){const s=n/3,r=new Uint32Array(e+1),a=new Uint32Array(e+1),g=(o,i)=>{o<i?r[o+1]++:a[i+1]++};for(let o=0;o<s;o++){const i=t[3*o],f=t[3*o+1],d=t[3*o+2];g(i,f),g(f,d),g(d,i)}let c=0,p=0;for(let o=0;o<e;o++){const i=r[o+1],f=a[o+1];r[o+1]=c,a[o+1]=p,c+=i,p+=f}const l=new Uint32Array(6*s),u=r[e],h=(o,i,f)=>{if(o<i){const d=r[o+1]++;l[2*d]=i,l[2*d+1]=f}else{const d=a[i+1]++;l[2*u+2*d]=o,l[2*u+2*d+1]=f}};for(let o=0;o<s;o++){const i=t[3*o],f=t[3*o+1],d=t[3*o+2];h(i,f,o),h(f,d,o),h(d,i,o)}const w=(o,i)=>{const f=2*o,d=i-o;for(let y=1;y<d;y++){const I=l[f+2*y],N=l[f+2*y+1];let v=y-1;for(;v>=0&&l[f+2*v]>I;v--)l[f+2*v+2]=l[f+2*v],l[f+2*v+3]=l[f+2*v+1];l[f+2*v+2]=I,l[f+2*v+3]=N}};for(let o=0;o<e;o++)w(r[o],r[o+1]),w(u+a[o],u+a[o+1]);const m=new Int32Array(3*s),b=(o,i)=>o===t[3*i]?0:o===t[3*i+1]?1:o===t[3*i+2]?2:-1,$=(o,i)=>{const f=b(o,i);m[3*i+f]=-1},L=(o,i,f,d)=>{const y=b(o,i);m[3*i+y]=d;const I=b(f,d);m[3*d+I]=i};for(let o=0;o<e;o++){let i=r[o];const f=r[o+1];let d=a[o];const y=a[o+1];for(;i<f&&d<y;){const I=l[2*i],N=l[2*u+2*d];I===N?(L(o,l[2*i+1],N,l[2*u+2*d+1]),i++,d++):I<N?($(o,l[2*i+1]),i++):($(N,l[2*u+2*d+1]),d++)}for(;i<f;)$(o,l[2*i+1]),i++;for(;d<y;)$(l[2*u+2*d],l[2*u+2*d+1]),d++}return m}function ct(t,n){return n.push(t.buffer),{buffer:t.buffer,layout:wn(t.layout)}}function wn(t){const n=new Array;return t.fields.forEach((e,s)=>{const r=ot(et({},e),{constructor:pt(e.constructor)});n.push([s,r])}),{stride:t.stride,fields:n,fieldNames:t.fieldNames}}const $n=[St,Vt,Et,Ft,Ut,Dt,Wt,kt,Bt,Mt,zt,Ht,Pt,Ot,Tt,qt,Ct,jt,Gt,Jt,Rt,_t,Kt,Qt,Xt,Yt,Zt,tn,nn,en,on,rn,sn,an,cn,ln];function pt(t){return`${t.ElementType}_${t.ElementCount}`}const yn=new Map;$n.forEach(t=>yn.set(pt(t),t));function _(t,n=0){const e=t.stride;return t.fieldNames.filter(s=>{const r=t.fields.get(s).optional;return!(r&&r.glPadding)}).map(s=>{const r=t.fields.get(s),a=r.constructor.ElementCount,g=vn(r.constructor.ElementType),c=r.offset,p=!(!r.optional||!r.optional.glNormalized);return{name:s,stride:e,count:a,type:g,offset:c,normalized:p,divisor:n}})}function vn(t){const n=An[t];if(n)return n;throw new Error("BufferType not supported in WebGL")}const An={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126},mt=R().vec3f("position").u16("componentIndex").u16("u16padding"),In=R().vec2u8("sideness");_(In);const ht=R().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0}),q=ht.clone().vec3f("normal"),C=ht.clone().vec3f("normalA").vec3f("normalB");class wt{updateSettings(n){this.settings=n,this.edgeHashFunction=n.reducedPrecision?bn:xn}write(n,e,s){const r=this.edgeHashFunction(s);M.seed=r;const a=M.getIntRange(0,255),g=M.getIntRange(0,this.settings.variants-1),c=.7,p=M.getFloat(),l=255*(.5*Ln(-(1-Math.min(p/c,1))+Math.max(0,p-c)/(1-c),1.2)+.5);n.position0.setVec(e,s.position0),n.position1.setVec(e,s.position1),n.componentIndex.set(e,s.componentIndex),n.variantOffset.set(e,a),n.variantStroke.set(e,g),n.variantExtension.set(e,l)}trim(n,e){return n.slice(0,e)}}const K=new Float32Array(6),z=new Uint32Array(K.buffer),S=new Uint32Array(1);function xn(t){const n=K;n[0]=t.position0[0],n[1]=t.position0[1],n[2]=t.position0[2],n[3]=t.position1[0],n[4]=t.position1[1],n[5]=t.position1[2],S[0]=5381;for(let e=0;e<z.length;e++)S[0]=31*S[0]+z[e];return S[0]}function bn(t){const n=K;n[0]=U(t.position0[0]),n[1]=U(t.position0[1]),n[2]=U(t.position0[2]),n[3]=U(t.position1[0]),n[4]=U(t.position1[1]),n[5]=U(t.position1[2]),S[0]=5381;for(let e=0;e<z.length;e++)S[0]=31*S[0]+z[e];return S[0]}const lt=1e4;function U(t){return Math.round(t*lt)/lt}function Ln(t,n){const e=t<0?-1:1;return Math.abs(t)**n*e}class j{constructor(){this.commonWriter=new wt}updateSettings(n){this.commonWriter.updateSettings(n)}allocate(n){return q.createBuffer(n)}write(n,e,s){this.commonWriter.write(n,e,s),un(B,s.faceNormal0,s.faceNormal1),dt(B,B),n.normal.setVec(e,B)}trim(n,e){return this.commonWriter.trim(n,e)}}j.Layout=q,j.glLayout=_(q,1);class G{constructor(){this.commonWriter=new wt}updateSettings(n){this.commonWriter.updateSettings(n)}allocate(n){return C.createBuffer(n)}write(n,e,s){this.commonWriter.write(n,e,s),n.normalA.setVec(e,s.faceNormal0),n.normalB.setVec(e,s.faceNormal1)}trim(n,e){return this.commonWriter.trim(n,e)}}G.Layout=C,G.glLayout=_(C,1);const B=x(),M=new fn,V=-1;function Nn(t,n,e,s=Dn){const r=t.vertices.position,a=t.vertices.componentIndex,g=rt(s.anglePlanar),c=rt(s.angleSignificantEdge),p=Math.cos(c),l=Math.cos(g),u=J.edge,h=u.position0,w=u.position1,m=u.faceNormal0,b=u.faceNormal1,$=Un(t),L=Fn(t),o=L.length/4,i=n.allocate(o);let f=0;const d=o,y=e.allocate(d);let I=0,N=0,v=0;const Q=dn(0,o),W=new Float32Array(o);gn(W,(E,A,D)=>{r.getVec(L[4*A+0],h),r.getVec(L[4*A+1],w),D[A]=hn(h,w)}),Q.sort((E,A)=>W[A]-W[E]);const X=new Array,Y=new Array;for(let E=0;E<o;E++){const A=Q[E],D=W[A],H=L[4*A+0],vt=L[4*A+1],F=L[4*A+2],k=L[4*A+3],Z=k===V;if(r.getVec(H,h),r.getVec(vt,w),Z)P(m,$[3*F+0],$[3*F+1],$[3*F+2]),st(b,m),u.componentIndex=a.get(H),u.cosAngle=T(m,b);else{if(P(m,$[3*F+0],$[3*F+1],$[3*F+2]),P(b,$[3*k+0],$[3*k+1],$[3*k+2]),u.componentIndex=a.get(H),u.cosAngle=T(m,b),Vn(u,l))continue;u.cosAngle<-.9999&&st(b,m)}N+=D,v++,Z||Sn(u,p)?(n.write(i,f++,u),X.push(D)):En(u,g)&&(e.write(y,I++,u),Y.push(D))}const $t=new Float32Array(X.reverse()),yt=new Float32Array(Y.reverse());return{regular:{instancesData:n.trim(i,f),lodInfo:{lengths:$t}},silhouette:{instancesData:e.trim(y,I),lodInfo:{lengths:yt}},averageEdgeLength:N/v}}function Sn(t,n){return t.cosAngle<n}function Vn(t,n){return t.cosAngle>n}function En(t,n){const e=pn(t.cosAngle),s=J.fwd,r=J.ortho;return mn(s,t.position1,t.position0),e*(T(gt(r,t.faceNormal0,t.faceNormal1),s)>0?-1:1)>n}function Fn(t){const n=t.faces.length/3,e=t.faces,s=t.neighbors;let r=0;for(let c=0;c<n;c++){const p=s[3*c+0],l=s[3*c+1],u=s[3*c+2],h=e[3*c+0],w=e[3*c+1],m=e[3*c+2];r+=p===V||h<w?1:0,r+=l===V||w<m?1:0,r+=u===V||m<h?1:0}const a=new Int32Array(4*r);let g=0;for(let c=0;c<n;c++){const p=s[3*c+0],l=s[3*c+1],u=s[3*c+2],h=e[3*c+0],w=e[3*c+1],m=e[3*c+2];(p===V||h<w)&&(a[g++]=h,a[g++]=w,a[g++]=c,a[g++]=p),(l===V||w<m)&&(a[g++]=w,a[g++]=m,a[g++]=c,a[g++]=l),(u===V||m<h)&&(a[g++]=m,a[g++]=h,a[g++]=c,a[g++]=u)}return a}function Un(t){const n=t.faces.length/3,e=t.vertices.position,s=t.faces,r=O.v0,a=O.v1,g=O.v2,c=new Float32Array(3*n);for(let p=0;p<n;p++){const l=s[3*p+0],u=s[3*p+1],h=s[3*p+2];e.getVec(l,r),e.getVec(u,a),e.getVec(h,g),it(a,a,r),it(g,g,r),gt(r,a,g),dt(r,r),c[3*p+0]=r[0],c[3*p+1]=r[1],c[3*p+2]=r[2]}return c}const J={edge:{position0:x(),position1:x(),faceNormal0:x(),faceNormal1:x(),componentIndex:0,cosAngle:0},ortho:x(),fwd:x()},O={v0:x(),v1:x(),v2:x()},Dn={anglePlanar:4,angleSignificantEdge:35};async function jn(t){const n=kn(t),e=Wn(n),s=[n.data.buffer];return{result:Bn(e,s),transferList:s}}function Wn(t){const n=Mn(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return ut.updateSettings(t.writerSettings),ft.updateSettings(t.writerSettings),Nn(n,ut,ft)}function kn(t){return{data:mt.createView(t.dataBuffer),indices:t.indicesType==="Uint32Array"?new Uint32Array(t.indicesBuffer):t.indicesType==="Uint16Array"?new Uint16Array(t.indicesBuffer):void 0,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function Bn(t,n){return n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:ct(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:ct(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}function Mn(t,n,e,s){if(n)return{faces:e,facesLength:s,neighbors:at(e,s,t.count),vertices:t};const r=Nt(t.buffer,t.stride/4,{originalIndices:e,originalIndicesLength:s}),a=at(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:a,vertices:mt.createView(r.buffer)}}const ut=new j,ft=new G;export{Wn as work,jn as wrappedWork};
