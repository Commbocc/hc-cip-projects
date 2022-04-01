import{dx as z,dR as Y,dw as O,dS as D,dT as F,dU as L,dV as W,dW as X,dX as Z,dY as v,dZ as H,d_ as N,dp as R,dq as I,d$ as S,di as U,cH as k,dz as P,dy as A}from"./vendor.b8b0b9ef.js";function b(){return[1,0,0,0,1,0,0,0,1]}function B(n){return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8]]}function C(n,r,e,o,t,c,a,u,i){return[n,r,e,o,t,c,a,u,i]}function G(n,r){return new Float64Array(n,r,9)}Object.freeze({__proto__:null,create:b,clone:B,fromValues:C,createView:G});function m(){return[0,0,0,1]}function J(n){return[n[0],n[1],n[2],n[3]]}function K(n,r,e,o){return[n,r,e,o]}function Q(n,r){return new Float64Array(n,r,4)}const nn=m();Object.freeze({__proto__:null,create:m,clone:J,fromValues:K,createView:Q,IDENTITY:nn});function rn(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function j(n,r,e){e*=.5;const o=Math.sin(e);return n[0]=o*r[0],n[1]=o*r[1],n[2]=o*r[2],n[3]=Math.cos(e),n}function on(n,r){const e=2*Math.acos(r[3]),o=Math.sin(e/2);return o>z?(n[0]=r[0]/o,n[1]=r[1]/o,n[2]=r[2]/o):(n[0]=1,n[1]=0,n[2]=0),e}function w(n,r,e){const o=r[0],t=r[1],c=r[2],a=r[3],u=e[0],i=e[1],h=e[2],s=e[3];return n[0]=o*s+a*u+t*h-c*i,n[1]=t*s+a*i+c*u-o*h,n[2]=c*s+a*h+o*i-t*u,n[3]=a*s-o*u-t*i-c*h,n}function tn(n,r,e){e*=.5;const o=r[0],t=r[1],c=r[2],a=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i+a*u,n[1]=t*i+c*u,n[2]=c*i-t*u,n[3]=a*i-o*u,n}function en(n,r,e){e*=.5;const o=r[0],t=r[1],c=r[2],a=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i-c*u,n[1]=t*i+a*u,n[2]=c*i+o*u,n[3]=a*i-t*u,n}function cn(n,r,e){e*=.5;const o=r[0],t=r[1],c=r[2],a=r[3],u=Math.sin(e),i=Math.cos(e);return n[0]=o*i+t*u,n[1]=t*i-o*u,n[2]=c*i+a*u,n[3]=a*i-c*u,n}function an(n,r){const e=r[0],o=r[1],t=r[2];return n[0]=e,n[1]=o,n[2]=t,n[3]=Math.sqrt(Math.abs(1-e*e-o*o-t*t)),n}function p(n,r,e,o){const t=r[0],c=r[1],a=r[2],u=r[3];let i,h,s,f,l,d=e[0],$=e[1],_=e[2],q=e[3];return h=t*d+c*$+a*_+u*q,h<0&&(h=-h,d=-d,$=-$,_=-_,q=-q),1-h>z?(i=Math.acos(h),s=Math.sin(i),f=Math.sin((1-o)*i)/s,l=Math.sin(o*i)/s):(f=1-o,l=o),n[0]=f*t+l*d,n[1]=f*c+l*$,n[2]=f*a+l*_,n[3]=f*u+l*q,n}function un(n){const r=A(),e=A(),o=A(),t=Math.sqrt(1-r),c=Math.sqrt(r);return n[0]=t*Math.sin(2*Math.PI*e),n[1]=t*Math.cos(2*Math.PI*e),n[2]=c*Math.sin(2*Math.PI*o),n[3]=c*Math.cos(2*Math.PI*o),n}function hn(n,r){const e=r[0],o=r[1],t=r[2],c=r[3],a=e*e+o*o+t*t+c*c,u=a?1/a:0;return n[0]=-e*u,n[1]=-o*u,n[2]=-t*u,n[3]=c*u,n}function sn(n,r){return n[0]=-r[0],n[1]=-r[1],n[2]=-r[2],n[3]=r[3],n}function V(n,r){const e=r[0]+r[4]+r[8];let o;if(e>0)o=Math.sqrt(e+1),n[3]=.5*o,o=.5/o,n[0]=(r[5]-r[7])*o,n[1]=(r[6]-r[2])*o,n[2]=(r[1]-r[3])*o;else{let t=0;r[4]>r[0]&&(t=1),r[8]>r[3*t+t]&&(t=2);const c=(t+1)%3,a=(t+2)%3;o=Math.sqrt(r[3*t+t]-r[3*c+c]-r[3*a+a]+1),n[t]=.5*o,o=.5/o,n[3]=(r[3*c+a]-r[3*a+c])*o,n[c]=(r[3*c+t]+r[3*t+c])*o,n[a]=(r[3*a+t]+r[3*t+a])*o}return n}function Mn(n,r,e,o){const t=.5*Math.PI/180;r*=t,e*=t,o*=t;const c=Math.sin(r),a=Math.cos(r),u=Math.sin(e),i=Math.cos(e),h=Math.sin(o),s=Math.cos(o);return n[0]=c*i*s-a*u*h,n[1]=a*u*s+c*i*h,n[2]=a*i*h-c*u*s,n[3]=a*i*s+c*u*h,n}function fn(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const ln=Y,dn=O,$n=D,_n=w,qn=F,pn=L,mn=W,E=X,In=E,T=Z,An=T,g=v,gn=H,xn=N;function yn(n,r,e){const o=R(r,e);return o<-.999999?(I(M,zn,r),S(M)<1e-6&&I(M,Pn,r),U(M,M),j(n,M,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(I(M,r,e),n[0]=M[0],n[1]=M[1],n[2]=M[2],n[3]=1+o,g(n,n))}const M=k(),zn=P(1,0,0),Pn=P(0,1,0);function bn(n,r,e,o,t,c){return p(x,r,t,c),p(y,e,o,c),p(n,x,y,2*c*(1-c)),n}const x=m(),y=m();function jn(n,r,e,o){const t=wn;return t[0]=e[0],t[3]=e[1],t[6]=e[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],g(n,V(n,t))}const wn=b();Object.freeze({__proto__:null,identity:rn,setAxisAngle:j,getAxisAngle:on,multiply:w,rotateX:tn,rotateY:en,rotateZ:cn,calculateW:an,slerp:p,random:un,invert:hn,conjugate:sn,fromMat3:V,fromEuler:Mn,str:fn,copy:ln,set:dn,add:$n,mul:_n,scale:qn,dot:pn,lerp:mn,length:E,len:In,squaredLength:T,sqrLen:An,normalize:g,exactEquals:gn,equals:xn,rotationTo:yn,sqlerp:bn,setAxes:jn});export{Mn as C,j as I,gn as N,on as P,b as a,nn as b,Q as c,m as e,J as n,G as t,w as v,sn as w};
