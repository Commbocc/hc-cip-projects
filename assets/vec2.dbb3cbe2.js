import{dx as f,dy as b}from"./vendor.b8b0b9ef.js";function x(n,r){return n[0]=r[0],n[1]=r[1],n}function p(n,r,t){return n[0]=r,n[1]=t,n}function g(n,r,t){return n[0]=r[0]+t[0],n[1]=r[1]+t[1],n}function a(n,r,t){return n[0]=r[0]-t[0],n[1]=r[1]-t[1],n}function M(n,r,t){return n[0]=r[0]*t[0],n[1]=r[1]*t[1],n}function h(n,r,t){return n[0]=r[0]/t[0],n[1]=r[1]/t[1],n}function v(n,r){return n[0]=Math.ceil(r[0]),n[1]=Math.ceil(r[1]),n}function _(n,r){return n[0]=Math.floor(r[0]),n[1]=Math.floor(r[1]),n}function y(n,r,t){return n[0]=Math.min(r[0],t[0]),n[1]=Math.min(r[1],t[1]),n}function A(n,r,t){return n[0]=Math.max(r[0],t[0]),n[1]=Math.max(r[1],t[1]),n}function j(n,r){return n[0]=Math.round(r[0]),n[1]=Math.round(r[1]),n}function z(n,r,t){return n[0]=r[0]*t,n[1]=r[1]*t,n}function D(n,r,t,o){return n[0]=r[0]+t[0]*o,n[1]=r[1]+t[1]*o,n}function l(n,r){const t=r[0]-n[0],o=r[1]-n[1];return Math.sqrt(t*t+o*o)}function d(n,r){const t=r[0]-n[0],o=r[1]-n[1];return t*t+o*o}function m(n){const r=n[0],t=n[1];return Math.sqrt(r*r+t*t)}function q(n){const r=n[0],t=n[1];return r*r+t*t}function I(n,r){return n[0]=-r[0],n[1]=-r[1],n}function L(n,r){return n[0]=1/r[0],n[1]=1/r[1],n}function P(n,r){const t=r[0],o=r[1];let u=t*t+o*o;return u>0&&(u=1/Math.sqrt(u),n[0]=r[0]*u,n[1]=r[1]*u),n}function E(n,r){return n[0]*r[0]+n[1]*r[1]}function O(n,r,t){const o=r[0]*t[1]-r[1]*t[0];return n[0]=n[1]=0,n[2]=o,n}function k(n,r,t,o){const u=r[0],c=r[1];return n[0]=u+o*(t[0]-u),n[1]=c+o*(t[1]-c),n}function w(n,r){r=r||1;const t=2*b()*Math.PI;return n[0]=Math.cos(t)*r,n[1]=Math.sin(t)*r,n}function B(n,r,t){const o=r[0],u=r[1];return n[0]=t[0]*o+t[2]*u,n[1]=t[1]*o+t[3]*u,n}function C(n,r,t){const o=r[0],u=r[1];return n[0]=t[0]*o+t[2]*u+t[4],n[1]=t[1]*o+t[3]*u+t[5],n}function F(n,r,t){const o=r[0],u=r[1];return n[0]=t[0]*o+t[3]*u+t[6],n[1]=t[1]*o+t[4]*u+t[7],n}function G(n,r,t){const o=r[0],u=r[1];return n[0]=t[0]*o+t[4]*u+t[12],n[1]=t[1]*o+t[5]*u+t[13],n}function H(n,r,t,o){const u=r[0]-t[0],c=r[1]-t[1],e=Math.sin(o),s=Math.cos(o);return n[0]=u*s-c*e+t[0],n[1]=u*e+c*s+t[1],n}function J(n,r){const t=n[0],o=n[1],u=r[0],c=r[1];let e=t*t+o*o;e>0&&(e=1/Math.sqrt(e));let s=u*u+c*c;s>0&&(s=1/Math.sqrt(s));const i=(t*u+o*c)*e*s;return i>1?0:i<-1?Math.PI:Math.acos(i)}function K(n){return"vec2("+n[0]+", "+n[1]+")"}function N(n,r){return n[0]===r[0]&&n[1]===r[1]}function S(n,r){const t=n[0],o=n[1],u=r[0],c=r[1];return Math.abs(t-u)<=f*Math.max(1,Math.abs(t),Math.abs(u))&&Math.abs(o-c)<=f*Math.max(1,Math.abs(o),Math.abs(c))}function Q(n,r,t,o,u){let c=r[0]-t[0],e=r[1]-t[1];const s=(o[0]*c+o[1]*e)*(u-1);return c=o[0]*s,e=o[1]*s,n[0]=r[0]+c,n[1]=r[1]+e,n}const R=m,T=a,U=M,V=h,W=l,X=d,Y=q;Object.freeze({__proto__:null,copy:x,set:p,add:g,subtract:a,multiply:M,divide:h,ceil:v,floor:_,min:y,max:A,round:j,scale:z,scaleAndAdd:D,distance:l,squaredDistance:d,length:m,squaredLength:q,negate:I,inverse:L,normalize:P,dot:E,cross:O,lerp:k,random:w,transformMat2:B,transformMat2d:C,transformMat3:F,transformMat4:G,rotate:H,angle:J,str:K,exactEquals:N,equals:S,projectAndScale:Q,len:R,sub:T,mul:U,div:V,dist:W,sqrDist:X,sqrLen:Y});export{C as D,l as d,p as r};
