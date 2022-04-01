import{gX as p,D as o,N as h,E as c,gY as d,d5 as b,gZ as w}from"./vendor.b8b0b9ef.js";import{e as v}from"./ItemCache.866d790e.js";let i=a();function a(){return new v(50)}function x(){i=a()}function I(e,r){if(e.type==="icon")return y(e,r);if(e.type==="object")return f(e,r);throw new o("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function P(e,r){if(e.type==="icon")return z(e,r);if(e.type==="object")return j(e,r);throw new o("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function y(e,r){if(e.resource.href)return g(e.resource.href).then(t=>[t.width,t.height]);if(e.resource.primitive)return c(r)?[r,r]:[256,256];throw new o("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function z(e,r){return y(e,r).then(t=>{if(e.size==null)return t;const n=t[0]/t[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]})}function g(e){return h(e,{responseType:"image"}).then(r=>r.data)}function f(e,r){return B(e,r).then(t=>p(t))}async function j(e,r){const t=await f(e,r);return d(t,e)}async function B(e,r){if(!e.isPrimitive){const n=e.resource.href,s=i.get(n);if(s!==void 0)return Promise.resolve(s);const l=await import("./objectResourceUtils.75a5991c.js").then(function(m){return m.o}),u=await l.fetch(n,{disableTextures:!0});return i.put(n,u.referenceBoundingBox),u.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=b(w(e.resource.primitive)),c(r)))for(let n=0;n<t.length;n++)t[n]*=r;return t?Promise.resolve(t):Promise.reject(new o("symbol:invalid-resource","The symbol does not have a valid resource"))}export{x as clearBoundingBoxCache,y as computeIconLayerResourceSize,I as computeLayerResourceSize,P as computeLayerSize,f as computeObjectLayerResourceSize};
