import{d4 as r}from"./vendor.b8b0b9ef.js";class a{constructor(t,e){this._storage=new r,this._storage.maxSize=t,e&&this._storage.registerRemoveFunc("",e)}put(t,e){this._storage.put(t,e,1,1)}pop(t){return this._storage.pop(t)}get(t){return this._storage.get(t)}clear(){this._storage.clearAll()}destroy(){this._storage.destroy()}}export{a as e};
