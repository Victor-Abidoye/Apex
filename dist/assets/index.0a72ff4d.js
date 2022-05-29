const Ys=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Ys();function Pr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Ks="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qs=Pr(Ks);function gi(e){return!!e||e===""}function Tr(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?Js(r):Tr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(Z(e))return e}}const Xs=/;(?![^(]*\))/g,Vs=/:(.+)/;function Js(e){const t={};return e.split(Xs).forEach(n=>{if(n){const r=n.split(Vs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Sr(e){let t="";if(te(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=Sr(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Gs=e=>te(e)?e:e==null?"":L(e)||Z(e)&&(e.toString===yi||!R(e.toString))?JSON.stringify(e,vi,2):String(e),vi=(e,t)=>t&&t.__v_isRef?vi(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:xi(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!L(t)&&!_i(t)?String(t):t,q={},xt=[],Ie=()=>{},Zs=()=>!1,Qs=/^on[^a-z]/,En=e=>Qs.test(e),Nr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Fr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},eo=Object.prototype.hasOwnProperty,B=(e,t)=>eo.call(e,t),L=Array.isArray,bt=e=>On(e)==="[object Map]",xi=e=>On(e)==="[object Set]",R=e=>typeof e=="function",te=e=>typeof e=="string",Mr=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",bi=e=>Z(e)&&R(e.then)&&R(e.catch),yi=Object.prototype.toString,On=e=>yi.call(e),to=e=>On(e).slice(8,-1),_i=e=>On(e)==="[object Object]",jr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ln=Pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),In=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},no=/-(\w)/g,Pe=In(e=>e.replace(no,(t,n)=>n?n.toUpperCase():"")),ro=/\B([A-Z])/g,Ct=In(e=>e.replace(ro,"-$1").toLowerCase()),Pn=In(e=>e.charAt(0).toUpperCase()+e.slice(1)),Kn=In(e=>e?`on${Pn(e)}`:""),Wt=(e,t)=>!Object.is(e,t),qn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},gn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ao=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let va;const io=()=>va||(va=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ce;class so{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ce&&(this.parent=Ce,this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function oo(e,t=Ce){t&&t.active&&t.effects.push(e)}const Lr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},wi=e=>(e.w&Xe)>0,ki=e=>(e.n&Xe)>0,lo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Xe},fo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];wi(a)&&!ki(a)?a.delete(e):t[n++]=a,a.w&=~Xe,a.n&=~Xe}t.length=n}},nr=new WeakMap;let Mt=0,Xe=1;const rr=30;let ve;const rt=Symbol(""),ar=Symbol("");class $r{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,oo(this,r)}run(){if(!this.active)return this.fn();let t=ve,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ve,ve=this,Ke=!0,Xe=1<<++Mt,Mt<=rr?lo(this):xa(this),this.fn()}finally{Mt<=rr&&fo(this),Xe=1<<--Mt,ve=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ve===this?this.deferStop=!0:this.active&&(xa(this),this.onStop&&this.onStop(),this.active=!1)}}function xa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const Ci=[];function At(){Ci.push(Ke),Ke=!1}function Et(){const e=Ci.pop();Ke=e===void 0?!0:e}function ue(e,t,n){if(Ke&&ve){let r=nr.get(e);r||nr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Lr()),Ai(a)}}function Ai(e,t){let n=!1;Mt<=rr?ki(e)||(e.n|=Xe,n=!wi(e)):n=!e.has(ve),n&&(e.add(ve),ve.deps.push(e))}function Me(e,t,n,r,a,i){const s=nr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&L(e))s.forEach((l,u)=>{(u==="length"||u>=r)&&o.push(l)});else switch(n!==void 0&&o.push(s.get(n)),t){case"add":L(e)?jr(n)&&o.push(s.get("length")):(o.push(s.get(rt)),bt(e)&&o.push(s.get(ar)));break;case"delete":L(e)||(o.push(s.get(rt)),bt(e)&&o.push(s.get(ar)));break;case"set":bt(e)&&o.push(s.get(rt));break}if(o.length===1)o[0]&&ir(o[0]);else{const l=[];for(const u of o)u&&l.push(...u);ir(Lr(l))}}function ir(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&ba(r);for(const r of n)r.computed||ba(r)}function ba(e,t){(e!==ve||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const co=Pr("__proto__,__v_isRef,__isVue"),Ei=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mr)),uo=Rr(),mo=Rr(!1,!0),po=Rr(!0),ya=ho();function ho(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,s=this.length;i<s;i++)ue(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){At();const r=U(this)[t].apply(this,n);return Et(),r}}),e}function Rr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?So:Si:t?Ti:Pi).get(r))return r;const s=L(r);if(!e&&s&&B(ya,a))return Reflect.get(ya,a,i);const o=Reflect.get(r,a,i);return(Mr(a)?Ei.has(a):co(a))||(e||ue(r,"get",a),t)?o:ee(o)?s&&jr(a)?o:o.value:Z(o)?e?Ni(o):Br(o):o}}const go=Oi(),vo=Oi(!0);function Oi(e=!1){return function(n,r,a,i){let s=n[r];if(Yt(s)&&ee(s)&&!ee(a))return!1;if(!e&&!Yt(a)&&(sr(a)||(a=U(a),s=U(s)),!L(n)&&ee(s)&&!ee(a)))return s.value=a,!0;const o=L(n)&&jr(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(o?Wt(a,s)&&Me(n,"set",r,a):Me(n,"add",r,a)),l}}function xo(e,t){const n=B(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Me(e,"delete",t,void 0),r}function bo(e,t){const n=Reflect.has(e,t);return(!Mr(t)||!Ei.has(t))&&ue(e,"has",t),n}function yo(e){return ue(e,"iterate",L(e)?"length":rt),Reflect.ownKeys(e)}const Ii={get:uo,set:go,deleteProperty:xo,has:bo,ownKeys:yo},_o={get:po,set(e,t){return!0},deleteProperty(e,t){return!0}},wo=ae({},Ii,{get:mo,set:vo}),zr=e=>e,Tn=e=>Reflect.getPrototypeOf(e);function tn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&ue(a,"get",t),ue(a,"get",i));const{has:s}=Tn(a),o=r?zr:n?Ur:Kt;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function nn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&ue(r,"has",e),ue(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function rn(e,t=!1){return e=e.__v_raw,!t&&ue(U(e),"iterate",rt),Reflect.get(e,"size",e)}function _a(e){e=U(e);const t=U(this);return Tn(t).has.call(t,e)||(t.add(e),Me(t,"add",e,e)),this}function wa(e,t){t=U(t);const n=U(this),{has:r,get:a}=Tn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?Wt(t,s)&&Me(n,"set",e,t):Me(n,"add",e,t),this}function ka(e){const t=U(this),{has:n,get:r}=Tn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Me(t,"delete",e,void 0),i}function Ca(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Me(e,"clear",void 0,void 0),n}function an(e,t){return function(r,a){const i=this,s=i.__v_raw,o=U(s),l=t?zr:e?Ur:Kt;return!e&&ue(o,"iterate",rt),s.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function sn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),s=bt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,u=a[e](...r),d=n?zr:t?Ur:Kt;return!t&&ue(i,"iterate",l?ar:rt),{next(){const{value:m,done:x}=u.next();return x?{value:m,done:x}:{value:o?[d(m[0]),d(m[1])]:d(m),done:x}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return e==="delete"?!1:this}}function ko(){const e={get(i){return tn(this,i)},get size(){return rn(this)},has:nn,add:_a,set:wa,delete:ka,clear:Ca,forEach:an(!1,!1)},t={get(i){return tn(this,i,!1,!0)},get size(){return rn(this)},has:nn,add:_a,set:wa,delete:ka,clear:Ca,forEach:an(!1,!0)},n={get(i){return tn(this,i,!0)},get size(){return rn(this,!0)},has(i){return nn.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:an(!0,!1)},r={get(i){return tn(this,i,!0,!0)},get size(){return rn(this,!0)},has(i){return nn.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:an(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=sn(i,!1,!1),n[i]=sn(i,!0,!1),t[i]=sn(i,!1,!0),r[i]=sn(i,!0,!0)}),[e,n,t,r]}const[Co,Ao,Eo,Oo]=ko();function Dr(e,t){const n=t?e?Oo:Eo:e?Ao:Co;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const Io={get:Dr(!1,!1)},Po={get:Dr(!1,!0)},To={get:Dr(!0,!1)},Pi=new WeakMap,Ti=new WeakMap,Si=new WeakMap,So=new WeakMap;function No(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fo(e){return e.__v_skip||!Object.isExtensible(e)?0:No(to(e))}function Br(e){return Yt(e)?e:Hr(e,!1,Ii,Io,Pi)}function Mo(e){return Hr(e,!1,wo,Po,Ti)}function Ni(e){return Hr(e,!0,_o,To,Si)}function Hr(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Fo(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function yt(e){return Yt(e)?yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function sr(e){return!!(e&&e.__v_isShallow)}function Fi(e){return yt(e)||Yt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Mi(e){return gn(e,"__v_skip",!0),e}const Kt=e=>Z(e)?Br(e):e,Ur=e=>Z(e)?Ni(e):e;function ji(e){Ke&&ve&&(e=U(e),Ai(e.dep||(e.dep=Lr())))}function Li(e,t){e=U(e),e.dep&&ir(e.dep)}function ee(e){return!!(e&&e.__v_isRef===!0)}function Xn(e){return jo(e,!1)}function jo(e,t){return ee(e)?e:new Lo(e,t)}class Lo{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Kt(t)}get value(){return ji(this),this._value}set value(t){t=this.__v_isShallow?t:U(t),Wt(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Kt(t),Li(this))}}function $o(e){return ee(e)?e.value:e}const Ro={get:(e,t,n)=>$o(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ee(a)&&!ee(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function $i(e){return yt(e)?e:new Proxy(e,Ro)}class zo{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new $r(t,()=>{this._dirty||(this._dirty=!0,Li(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return ji(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Do(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Ie):(r=e.get,a=e.set),new zo(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Sn(i,t,n)}return a}function ye(e,t,n,r){if(R(e)){const i=qe(e,t,n,r);return i&&bi(i)&&i.catch(s=>{Sn(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ye(e[i],t,n,r));return a}function Sn(e,t,n,r){if(t&&t.vnode,t){let a=t.parent;const i=t.proxy,s=n;for(;a;){const l=a.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,i,s)===!1)return}a=a.parent}const o=t.appContext.config.errorHandler;if(o){qe(o,null,10,[e,i,s]);return}}Bo(e)}function Bo(e,t,n,r){console.error(e)}let vn=!1,or=!1;const ce=[];let Fe=0;const Rt=[];let jt=null,mt=0;const zt=[];let We=null,pt=0;const Ri=Promise.resolve();let Wr=null,lr=null;function Ho(e){const t=Wr||Ri;return e?t.then(this?e.bind(this):e):t}function Uo(e){let t=Fe+1,n=ce.length;for(;t<n;){const r=t+n>>>1;qt(ce[r])<e?t=r+1:n=r}return t}function zi(e){(!ce.length||!ce.includes(e,vn&&e.allowRecurse?Fe+1:Fe))&&e!==lr&&(e.id==null?ce.push(e):ce.splice(Uo(e.id),0,e),Di())}function Di(){!vn&&!or&&(or=!0,Wr=Ri.then(Ui))}function Wo(e){const t=ce.indexOf(e);t>Fe&&ce.splice(t,1)}function Bi(e,t,n,r){L(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Di()}function Yo(e){Bi(e,jt,Rt,mt)}function Ko(e){Bi(e,We,zt,pt)}function Nn(e,t=null){if(Rt.length){for(lr=t,jt=[...new Set(Rt)],Rt.length=0,mt=0;mt<jt.length;mt++)jt[mt]();jt=null,mt=0,lr=null,Nn(e,t)}}function Hi(e){if(Nn(),zt.length){const t=[...new Set(zt)];if(zt.length=0,We){We.push(...t);return}for(We=t,We.sort((n,r)=>qt(n)-qt(r)),pt=0;pt<We.length;pt++)We[pt]();We=null,pt=0}}const qt=e=>e.id==null?1/0:e.id;function Ui(e){or=!1,vn=!0,Nn(e),ce.sort((n,r)=>qt(n)-qt(r));const t=Ie;try{for(Fe=0;Fe<ce.length;Fe++){const n=ce[Fe];n&&n.active!==!1&&qe(n,null,14)}}finally{Fe=0,ce.length=0,Hi(),vn=!1,Wr=null,(ce.length||Rt.length||zt.length)&&Ui(e)}}function qo(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:x}=r[d]||q;x&&(a=n.map(E=>E.trim())),m&&(a=n.map(ao))}let o,l=r[o=Kn(t)]||r[o=Kn(Pe(t))];!l&&i&&(l=r[o=Kn(Ct(t))]),l&&ye(l,e,6,a);const u=r[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,ye(u,e,6,a)}}function Wi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!R(e)){const l=u=>{const d=Wi(u,t,!0);d&&(o=!0,ae(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(r.set(e,null),null):(L(i)?i.forEach(l=>s[l]=null):ae(s,i),r.set(e,s),s)}function Fn(e,t){return!e||!En(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,Ct(t))||B(e,t))}let Ee=null,Yi=null;function xn(e){const t=Ee;return Ee=e,Yi=e&&e.type.__scopeId||null,t}function Qe(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ma(-1);const i=xn(t),s=e(...a);return xn(i),r._d&&Ma(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function Vn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:u,render:d,renderCache:m,data:x,setupState:E,ctx:j,inheritAttrs:z}=e;let N,b;const O=xn(e);try{if(n.shapeFlag&4){const D=a||r;N=Ae(d.call(D,D,m,i,E,x,j)),b=l}else{const D=t;N=Ae(D.length>1?D(i,{attrs:l,slots:o,emit:u}):D(i,null)),b=t.props?l:Xo(l)}}catch(D){Dt.length=0,Sn(D,e,1),N=$(Xt)}let F=N;if(b&&z!==!1){const D=Object.keys(b),{shapeFlag:K}=F;D.length&&K&7&&(s&&D.some(Nr)&&(b=Vo(b,s)),F=wt(F,b))}return n.dirs&&(F=wt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),N=F,xn(O),N}const Xo=e=>{let t;for(const n in e)(n==="class"||n==="style"||En(n))&&((t||(t={}))[n]=e[n]);return t},Vo=(e,t)=>{const n={};for(const r in e)(!Nr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Jo(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Aa(r,s,u):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const x=d[m];if(s[x]!==r[x]&&!Fn(u,x))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Aa(r,s,u):!0:!!s;return!1}function Aa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Fn(n,i))return!0}return!1}function Go({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Zo=e=>e.__isSuspense;function Qo(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):Ko(e)}function el(e,t){if(Q){let n=Q.provides;const r=Q.parent&&Q.parent.provides;r===n&&(n=Q.provides=Object.create(r)),n[e]=t}}function Jn(e,t,n=!1){const r=Q||Ee;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const Ea={};function fn(e,t,n){return Ki(e,t,n)}function Ki(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=q){const o=Q;let l,u=!1,d=!1;if(ee(e)?(l=()=>e.value,u=sr(e)):yt(e)?(l=()=>e,r=!0):L(e)?(d=!0,u=e.some(b=>yt(b)||sr(b)),l=()=>e.map(b=>{if(ee(b))return b.value;if(yt(b))return ht(b);if(R(b))return qe(b,o,2)})):R(e)?t?l=()=>qe(e,o,2):l=()=>{if(!(o&&o.isUnmounted))return m&&m(),ye(e,o,3,[x])}:l=Ie,t&&r){const b=l;l=()=>ht(b())}let m,x=b=>{m=N.onStop=()=>{qe(b,o,4)}};if(Jt)return x=Ie,t?n&&ye(t,o,3,[l(),d?[]:void 0,x]):l(),Ie;let E=d?[]:Ea;const j=()=>{if(!!N.active)if(t){const b=N.run();(r||u||(d?b.some((O,F)=>Wt(O,E[F])):Wt(b,E)))&&(m&&m(),ye(t,o,3,[b,E===Ea?void 0:E,x]),E=b)}else N.run()};j.allowRecurse=!!t;let z;a==="sync"?z=j:a==="post"?z=()=>oe(j,o&&o.suspense):z=()=>Yo(j);const N=new $r(l,z);return t?n?j():E=N.run():a==="post"?oe(N.run.bind(N),o&&o.suspense):N.run(),()=>{N.stop(),o&&o.scope&&Fr(o.scope.effects,N)}}function tl(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?qi(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const s=Q;kt(this);const o=Ki(a,i.bind(r),n);return s?kt(s):at(),o}function qi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ee(e))ht(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(xi(e)||bt(e))e.forEach(n=>{ht(n,t)});else if(_i(e))for(const n in e)ht(e[n],t);return e}function Yr(e){return R(e)?{setup:e,name:e.name}:e}const cn=e=>!!e.type.__asyncLoader,Xi=e=>e.type.__isKeepAlive;function nl(e,t){Vi(e,"a",t)}function rl(e,t){Vi(e,"da",t)}function Vi(e,t,n=Q){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Mn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Xi(a.parent.vnode)&&al(r,t,n,a),a=a.parent}}function al(e,t,n,r){const a=Mn(t,e,r,!0);Ji(()=>{Fr(r[t],a)},n)}function Mn(e,t,n=Q,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;At(),kt(n);const o=ye(t,n,e,s);return at(),Et(),o});return r?a.unshift(i):a.push(i),i}}const Re=e=>(t,n=Q)=>(!Jt||e==="sp")&&Mn(e,t,n),il=Re("bm"),sl=Re("m"),ol=Re("bu"),ll=Re("u"),fl=Re("bum"),Ji=Re("um"),cl=Re("sp"),ul=Re("rtg"),dl=Re("rtc");function ml(e,t=Q){Mn("ec",e,t)}function Ge(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(At(),ye(l,n,8,[e.el,o,e,t]),Et())}}const Gi="components";function jn(e,t){return hl(Gi,e,!0,t)||e}const pl=Symbol();function hl(e,t,n,r=!1){const a=Ee||Q;if(a){const i=a.type;if(e===Gi){const o=Yl(i);if(o&&(o===t||o===Pe(t)||o===Pn(Pe(t))))return i}const s=Oa(a[e]||i[e],t)||Oa(a.appContext[e],t);return!s&&r?i:s}}function Oa(e,t){return e&&(e[t]||e[Pe(t)]||e[Pn(Pe(t))])}const fr=e=>e?ls(e)?Vr(e)||e.proxy:fr(e.parent):null,bn=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fr(e.parent),$root:e=>fr(e.root),$emit:e=>e.emit,$options:e=>Qi(e),$forceUpdate:e=>e.f||(e.f=()=>zi(e.update)),$nextTick:e=>e.n||(e.n=Ho.bind(e.proxy)),$watch:e=>tl.bind(e)}),gl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let u;if(t[0]!=="$"){const E=s[t];if(E!==void 0)switch(E){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==q&&B(r,t))return s[t]=1,r[t];if(a!==q&&B(a,t))return s[t]=2,a[t];if((u=e.propsOptions[0])&&B(u,t))return s[t]=3,i[t];if(n!==q&&B(n,t))return s[t]=4,n[t];cr&&(s[t]=0)}}const d=bn[t];let m,x;if(d)return t==="$attrs"&&ue(e,"get",t),d(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==q&&B(n,t))return s[t]=4,n[t];if(x=l.config.globalProperties,B(x,t))return x[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==q&&B(a,t)?(a[t]=n,!0):r!==q&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==q&&B(e,s)||t!==q&&B(t,s)||(o=i[0])&&B(o,s)||B(r,s)||B(bn,s)||B(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let cr=!0;function vl(e){const t=Qi(e),n=e.proxy,r=e.ctx;cr=!1,t.beforeCreate&&Ia(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:u,created:d,beforeMount:m,mounted:x,beforeUpdate:E,updated:j,activated:z,deactivated:N,beforeDestroy:b,beforeUnmount:O,destroyed:F,unmounted:D,render:K,renderTracked:ne,renderTriggered:le,errorCaptured:_e,serverPrefetch:ie,expose:Pt,inheritAttrs:ft,components:Tt,directives:Qt,filters:ua}=t;if(u&&xl(u,r,null,e.appContext.config.unwrapInjectedRef),s)for(const G in s){const X=s[G];R(X)&&(r[G]=X.bind(n))}if(a){const G=a.call(n,n);Z(G)&&(e.data=Br(G))}if(cr=!0,i)for(const G in i){const X=i[G],Te=R(X)?X.bind(n,n):R(X.get)?X.get.bind(n,n):Ie,Un=!R(X)&&R(X.set)?X.set.bind(n):Ie,St=he({get:Te,set:Un});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>St.value,set:ct=>St.value=ct})}if(o)for(const G in o)Zi(o[G],r,n,G);if(l){const G=R(l)?l.call(n):l;Reflect.ownKeys(G).forEach(X=>{el(X,G[X])})}d&&Ia(d,e,"c");function se(G,X){L(X)?X.forEach(Te=>G(Te.bind(n))):X&&G(X.bind(n))}if(se(il,m),se(sl,x),se(ol,E),se(ll,j),se(nl,z),se(rl,N),se(ml,_e),se(dl,ne),se(ul,le),se(fl,O),se(Ji,D),se(cl,ie),L(Pt))if(Pt.length){const G=e.exposed||(e.exposed={});Pt.forEach(X=>{Object.defineProperty(G,X,{get:()=>n[X],set:Te=>n[X]=Te})})}else e.exposed||(e.exposed={});K&&e.render===Ie&&(e.render=K),ft!=null&&(e.inheritAttrs=ft),Tt&&(e.components=Tt),Qt&&(e.directives=Qt)}function xl(e,t,n,r=!1){L(e)&&(e=ur(e));for(const a in e){const i=e[a];let s;Z(i)?"default"in i?s=Jn(i.from||a,i.default,!0):s=Jn(i.from||a):s=Jn(i),ee(s)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[a]=s}}function Ia(e,t,n){ye(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zi(e,t,n,r){const a=r.includes(".")?qi(n,r):()=>n[r];if(te(e)){const i=t[e];R(i)&&fn(a,i)}else if(R(e))fn(a,e.bind(n));else if(Z(e))if(L(e))e.forEach(i=>Zi(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&fn(a,i,e)}}function Qi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>yn(l,u,s,!0)),yn(l,t,s)),i.set(t,l),l}function yn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&yn(e,i,n,!0),a&&a.forEach(s=>yn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=bl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const bl={data:Pa,props:et,emits:et,methods:et,computed:et,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:et,directives:et,watch:_l,provide:Pa,inject:yl};function Pa(e,t){return t?e?function(){return ae(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function yl(e,t){return et(ur(e),ur(t))}function ur(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function re(e,t){return e?[...new Set([].concat(e,t))]:t}function et(e,t){return e?ae(ae(Object.create(null),e),t):t}function _l(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=re(e[r],t[r]);return n}function wl(e,t,n,r=!1){const a={},i={};gn(i,Ln,1),e.propsDefaults=Object.create(null),es(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:Mo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function kl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=U(a),[l]=e.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let x=d[m];if(Fn(e.emitsOptions,x))continue;const E=t[x];if(l)if(B(i,x))E!==i[x]&&(i[x]=E,u=!0);else{const j=Pe(x);a[j]=dr(l,o,j,E,e,!1)}else E!==i[x]&&(i[x]=E,u=!0)}}}else{es(e,t,a,i)&&(u=!0);let d;for(const m in o)(!t||!B(t,m)&&((d=Ct(m))===m||!B(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=dr(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!B(t,m)&&!0)&&(delete i[m],u=!0)}u&&Me(e,"set","$attrs")}function es(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(ln(l))continue;const u=t[l];let d;a&&B(a,d=Pe(l))?!i||!i.includes(d)?n[d]=u:(o||(o={}))[d]=u:Fn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,s=!0)}if(i){const l=U(n),u=o||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=dr(a,l,m,u[m],e,!B(u,m))}}return s}function dr(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=B(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&R(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(kt(a),r=u[n]=l.call(null,t),at())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Ct(n))&&(r=!0))}return r}function ts(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[x,E]=ts(m,t,!0);ae(s,x),E&&o.push(...E)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,xt),xt;if(L(i))for(let d=0;d<i.length;d++){const m=Pe(i[d]);Ta(m)&&(s[m]=q)}else if(i)for(const d in i){const m=Pe(d);if(Ta(m)){const x=i[d],E=s[m]=L(x)||R(x)?{type:x}:x;if(E){const j=Fa(Boolean,E.type),z=Fa(String,E.type);E[0]=j>-1,E[1]=z<0||j<z,(j>-1||B(E,"default"))&&o.push(m)}}}const u=[s,o];return r.set(e,u),u}function Ta(e){return e[0]!=="$"}function Sa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Na(e,t){return Sa(e)===Sa(t)}function Fa(e,t){return L(t)?t.findIndex(n=>Na(n,e)):R(t)&&Na(t,e)?0:-1}const ns=e=>e[0]==="_"||e==="$stable",Kr=e=>L(e)?e.map(Ae):[Ae(e)],Cl=(e,t,n)=>{if(t._n)return t;const r=Qe((...a)=>Kr(t(...a)),n);return r._c=!1,r},rs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ns(a))continue;const i=e[a];if(R(i))t[a]=Cl(a,i,r);else if(i!=null){const s=Kr(i);t[a]=()=>s}}},as=(e,t)=>{const n=Kr(t);e.slots.default=()=>n},Al=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),gn(t,"_",n)):rs(t,e.slots={})}else e.slots={},t&&as(e,t);gn(e.slots,Ln,1)},El=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=q;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(ae(a,t),!n&&o===1&&delete a._):(i=!t.$stable,rs(t,a)),s=t}else t&&(as(e,t),s={default:1});if(i)for(const o in a)!ns(o)&&!(o in s)&&delete a[o]};function is(){return{app:null,config:{isNativeTag:Zs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ol=0;function Il(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!Z(a)&&(a=null);const i=is(),s=new Set;let o=!1;const l=i.app={_uid:Ol++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:ql,get config(){return i.config},set config(u){},use(u,...d){return s.has(u)||(u&&R(u.install)?(s.add(u),u.install(l,...d)):R(u)&&(s.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!o){const x=$(r,a);return x.appContext=i,d&&t?t(x,u):e(x,u,m),o=!0,l._container=u,u.__vue_app__=l,Vr(x.component)||x.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function mr(e,t,n,r,a=!1){if(L(e)){e.forEach((x,E)=>mr(x,t&&(L(t)?t[E]:t),n,r,a));return}if(cn(r)&&!a)return;const i=r.shapeFlag&4?Vr(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,u=t&&t.r,d=o.refs===q?o.refs={}:o.refs,m=o.setupState;if(u!=null&&u!==l&&(te(u)?(d[u]=null,B(m,u)&&(m[u]=null)):ee(u)&&(u.value=null)),R(l))qe(l,o,12,[s,d]);else{const x=te(l),E=ee(l);if(x||E){const j=()=>{if(e.f){const z=x?d[l]:l.value;a?L(z)&&Fr(z,i):L(z)?z.includes(i)||z.push(i):x?(d[l]=[i],B(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else x?(d[l]=s,B(m,l)&&(m[l]=s)):ee(l)&&(l.value=s,e.k&&(d[e.k]=s))};s?(j.id=-1,oe(j,n)):j()}}}const oe=Qo;function Pl(e){return Tl(e)}function Tl(e,t){const n=io();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:x,setScopeId:E=Ie,cloneNode:j,insertStaticContent:z}=e,N=(f,c,p,g=null,h=null,_=null,k=!1,y=null,w=!!c.dynamicChildren)=>{if(f===c)return;f&&!Ft(f,c)&&(g=en(f),Be(f,h,_,!0),f=null),c.patchFlag===-2&&(w=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:I}=c;switch(v){case qr:b(f,c,p,g);break;case Xt:O(f,c,p,g);break;case un:f==null&&F(c,p,g,k);break;case Ne:Qt(f,c,p,g,h,_,k,y,w);break;default:I&1?ne(f,c,p,g,h,_,k,y,w):I&6?ua(f,c,p,g,h,_,k,y,w):(I&64||I&128)&&v.process(f,c,p,g,h,_,k,y,w,ut)}P!=null&&h&&mr(P,f&&f.ref,_,c||f,!c)},b=(f,c,p,g)=>{if(f==null)r(c.el=o(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},O=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},F=(f,c,p,g)=>{[f.el,f.anchor]=z(f.children,c,p,g,f.el,f.anchor)},D=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=x(f),r(f,p,g),f=h;r(c,p,g)},K=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=x(f),a(f),f=p;a(c)},ne=(f,c,p,g,h,_,k,y,w)=>{k=k||c.type==="svg",f==null?le(c,p,g,h,_,k,y,w):Pt(f,c,h,_,k,y,w)},le=(f,c,p,g,h,_,k,y)=>{let w,v;const{type:P,props:I,shapeFlag:T,transition:M,patchFlag:H,dirs:W}=f;if(f.el&&j!==void 0&&H===-1)w=f.el=j(f.el);else{if(w=f.el=s(f.type,_,I&&I.is,I),T&8?d(w,f.children):T&16&&ie(f.children,w,null,g,h,_&&P!=="foreignObject",k,y),W&&Ge(f,null,g,"created"),I){for(const V in I)V!=="value"&&!ln(V)&&i(w,V,null,I[V],_,f.children,g,h,Se);"value"in I&&i(w,"value",null,I.value),(v=I.onVnodeBeforeMount)&&ke(v,g,f)}_e(w,f,f.scopeId,k,g)}W&&Ge(f,null,g,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;Y&&M.beforeEnter(w),r(w,c,p),((v=I&&I.onVnodeMounted)||Y||W)&&oe(()=>{v&&ke(v,g,f),Y&&M.enter(w),W&&Ge(f,null,g,"mounted")},h)},_e=(f,c,p,g,h)=>{if(p&&E(f,p),g)for(let _=0;_<g.length;_++)E(f,g[_]);if(h){let _=h.subTree;if(c===_){const k=h.vnode;_e(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},ie=(f,c,p,g,h,_,k,y,w=0)=>{for(let v=w;v<f.length;v++){const P=f[v]=y?Ye(f[v]):Ae(f[v]);N(null,P,c,p,g,h,_,k,y)}},Pt=(f,c,p,g,h,_,k)=>{const y=c.el=f.el;let{patchFlag:w,dynamicChildren:v,dirs:P}=c;w|=f.patchFlag&16;const I=f.props||q,T=c.props||q;let M;p&&Ze(p,!1),(M=T.onVnodeBeforeUpdate)&&ke(M,p,c,f),P&&Ge(c,f,p,"beforeUpdate"),p&&Ze(p,!0);const H=h&&c.type!=="foreignObject";if(v?ft(f.dynamicChildren,v,y,p,g,H,_):k||Te(f,c,y,null,p,g,H,_,!1),w>0){if(w&16)Tt(y,c,I,T,p,g,h);else if(w&2&&I.class!==T.class&&i(y,"class",null,T.class,h),w&4&&i(y,"style",I.style,T.style,h),w&8){const W=c.dynamicProps;for(let Y=0;Y<W.length;Y++){const V=W[Y],ge=I[V],dt=T[V];(dt!==ge||V==="value")&&i(y,V,ge,dt,h,f.children,p,g,Se)}}w&1&&f.children!==c.children&&d(y,c.children)}else!k&&v==null&&Tt(y,c,I,T,p,g,h);((M=T.onVnodeUpdated)||P)&&oe(()=>{M&&ke(M,p,c,f),P&&Ge(c,f,p,"updated")},g)},ft=(f,c,p,g,h,_,k)=>{for(let y=0;y<c.length;y++){const w=f[y],v=c[y],P=w.el&&(w.type===Ne||!Ft(w,v)||w.shapeFlag&70)?m(w.el):p;N(w,v,P,null,g,h,_,k,!0)}},Tt=(f,c,p,g,h,_,k)=>{if(p!==g){for(const y in g){if(ln(y))continue;const w=g[y],v=p[y];w!==v&&y!=="value"&&i(f,y,v,w,k,c.children,h,_,Se)}if(p!==q)for(const y in p)!ln(y)&&!(y in g)&&i(f,y,p[y],null,k,c.children,h,_,Se);"value"in g&&i(f,"value",p.value,g.value)}},Qt=(f,c,p,g,h,_,k,y,w)=>{const v=c.el=f?f.el:o(""),P=c.anchor=f?f.anchor:o("");let{patchFlag:I,dynamicChildren:T,slotScopeIds:M}=c;M&&(y=y?y.concat(M):M),f==null?(r(v,p,g),r(P,p,g),ie(c.children,p,P,h,_,k,y,w)):I>0&&I&64&&T&&f.dynamicChildren?(ft(f.dynamicChildren,T,p,h,_,k,y),(c.key!=null||h&&c===h.subTree)&&ss(f,c,!0)):Te(f,c,p,P,h,_,k,y,w)},ua=(f,c,p,g,h,_,k,y,w)=>{c.slotScopeIds=y,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,w):Hn(c,p,g,h,_,k,w):se(f,c,w)},Hn=(f,c,p,g,h,_,k)=>{const y=f.component=Dl(f,g,h);if(Xi(f)&&(y.ctx.renderer=ut),Bl(y),y.asyncDep){if(h&&h.registerDep(y,G),!f.el){const w=y.subTree=$(Xt);O(null,w,c,p)}return}G(y,f,c,p,h,_,k)},se=(f,c,p)=>{const g=c.component=f.component;if(Jo(f,c,p))if(g.asyncDep&&!g.asyncResolved){X(g,c,p);return}else g.next=c,Wo(g.update),g.update();else c.el=f.el,g.vnode=c},G=(f,c,p,g,h,_,k)=>{const y=()=>{if(f.isMounted){let{next:P,bu:I,u:T,parent:M,vnode:H}=f,W=P,Y;Ze(f,!1),P?(P.el=H.el,X(f,P,k)):P=H,I&&qn(I),(Y=P.props&&P.props.onVnodeBeforeUpdate)&&ke(Y,M,P,H),Ze(f,!0);const V=Vn(f),ge=f.subTree;f.subTree=V,N(ge,V,m(ge.el),en(ge),f,h,_),P.el=V.el,W===null&&Go(f,V.el),T&&oe(T,h),(Y=P.props&&P.props.onVnodeUpdated)&&oe(()=>ke(Y,M,P,H),h)}else{let P;const{el:I,props:T}=c,{bm:M,m:H,parent:W}=f,Y=cn(c);if(Ze(f,!1),M&&qn(M),!Y&&(P=T&&T.onVnodeBeforeMount)&&ke(P,W,c),Ze(f,!0),I&&Yn){const V=()=>{f.subTree=Vn(f),Yn(I,f.subTree,f,h,null)};Y?c.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=Vn(f);N(null,V,p,g,f,h,_),c.el=V.el}if(H&&oe(H,h),!Y&&(P=T&&T.onVnodeMounted)){const V=c;oe(()=>ke(P,W,V),h)}(c.shapeFlag&256||W&&cn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&oe(f.a,h),f.isMounted=!0,c=p=g=null}},w=f.effect=new $r(y,()=>zi(v),f.scope),v=f.update=()=>w.run();v.id=f.uid,Ze(f,!0),v()},X=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,kl(f,c.props,g,p),El(f,c.children,p),At(),Nn(void 0,f.update),Et()},Te=(f,c,p,g,h,_,k,y,w=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,I=c.children,{patchFlag:T,shapeFlag:M}=c;if(T>0){if(T&128){St(v,I,p,g,h,_,k,y,w);return}else if(T&256){Un(v,I,p,g,h,_,k,y,w);return}}M&8?(P&16&&Se(v,h,_),I!==v&&d(p,I)):P&16?M&16?St(v,I,p,g,h,_,k,y,w):Se(v,h,_,!0):(P&8&&d(p,""),M&16&&ie(I,p,g,h,_,k,y,w))},Un=(f,c,p,g,h,_,k,y,w)=>{f=f||xt,c=c||xt;const v=f.length,P=c.length,I=Math.min(v,P);let T;for(T=0;T<I;T++){const M=c[T]=w?Ye(c[T]):Ae(c[T]);N(f[T],M,p,null,h,_,k,y,w)}v>P?Se(f,h,_,!0,!1,I):ie(c,p,g,h,_,k,y,w,I)},St=(f,c,p,g,h,_,k,y,w)=>{let v=0;const P=c.length;let I=f.length-1,T=P-1;for(;v<=I&&v<=T;){const M=f[v],H=c[v]=w?Ye(c[v]):Ae(c[v]);if(Ft(M,H))N(M,H,p,null,h,_,k,y,w);else break;v++}for(;v<=I&&v<=T;){const M=f[I],H=c[T]=w?Ye(c[T]):Ae(c[T]);if(Ft(M,H))N(M,H,p,null,h,_,k,y,w);else break;I--,T--}if(v>I){if(v<=T){const M=T+1,H=M<P?c[M].el:g;for(;v<=T;)N(null,c[v]=w?Ye(c[v]):Ae(c[v]),p,H,h,_,k,y,w),v++}}else if(v>T)for(;v<=I;)Be(f[v],h,_,!0),v++;else{const M=v,H=v,W=new Map;for(v=H;v<=T;v++){const fe=c[v]=w?Ye(c[v]):Ae(c[v]);fe.key!=null&&W.set(fe.key,v)}let Y,V=0;const ge=T-H+1;let dt=!1,pa=0;const Nt=new Array(ge);for(v=0;v<ge;v++)Nt[v]=0;for(v=M;v<=I;v++){const fe=f[v];if(V>=ge){Be(fe,h,_,!0);continue}let we;if(fe.key!=null)we=W.get(fe.key);else for(Y=H;Y<=T;Y++)if(Nt[Y-H]===0&&Ft(fe,c[Y])){we=Y;break}we===void 0?Be(fe,h,_,!0):(Nt[we-H]=v+1,we>=pa?pa=we:dt=!0,N(fe,c[we],p,null,h,_,k,y,w),V++)}const ha=dt?Sl(Nt):xt;for(Y=ha.length-1,v=ge-1;v>=0;v--){const fe=H+v,we=c[fe],ga=fe+1<P?c[fe+1].el:g;Nt[v]===0?N(null,we,p,ga,h,_,k,y,w):dt&&(Y<0||v!==ha[Y]?ct(we,p,ga,2):Y--)}}},ct=(f,c,p,g,h=null)=>{const{el:_,type:k,transition:y,children:w,shapeFlag:v}=f;if(v&6){ct(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,ut);return}if(k===Ne){r(_,c,p);for(let I=0;I<w.length;I++)ct(w[I],c,p,g);r(f.anchor,c,p);return}if(k===un){D(f,c,p);return}if(g!==2&&v&1&&y)if(g===0)y.beforeEnter(_),r(_,c,p),oe(()=>y.enter(_),h);else{const{leave:I,delayLeave:T,afterLeave:M}=y,H=()=>r(_,c,p),W=()=>{I(_,()=>{H(),M&&M()})};T?T(_,H,W):W()}else r(_,c,p)},Be=(f,c,p,g=!1,h=!1)=>{const{type:_,props:k,ref:y,children:w,dynamicChildren:v,shapeFlag:P,patchFlag:I,dirs:T}=f;if(y!=null&&mr(y,null,p,f,!0),P&256){c.ctx.deactivate(f);return}const M=P&1&&T,H=!cn(f);let W;if(H&&(W=k&&k.onVnodeBeforeUnmount)&&ke(W,c,f),P&6)Ws(f.component,p,g);else{if(P&128){f.suspense.unmount(p,g);return}M&&Ge(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,p,h,ut,g):v&&(_!==Ne||I>0&&I&64)?Se(v,c,p,!1,!0):(_===Ne&&I&384||!h&&P&16)&&Se(w,c,p),g&&da(f)}(H&&(W=k&&k.onVnodeUnmounted)||M)&&oe(()=>{W&&ke(W,c,f),M&&Ge(f,null,c,"unmounted")},p)},da=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Ne){Us(p,g);return}if(c===un){K(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:y}=h,w=()=>k(p,_);y?y(f.el,_,w):w()}else _()},Us=(f,c)=>{let p;for(;f!==c;)p=x(f),a(f),f=p;a(c)},Ws=(f,c,p)=>{const{bum:g,scope:h,update:_,subTree:k,um:y}=f;g&&qn(g),h.stop(),_&&(_.active=!1,Be(k,f,c,p)),y&&oe(y,c),oe(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Se=(f,c,p,g=!1,h=!1,_=0)=>{for(let k=_;k<f.length;k++)Be(f[k],c,p,g,h)},en=f=>f.shapeFlag&6?en(f.component.subTree):f.shapeFlag&128?f.suspense.next():x(f.anchor||f.el),ma=(f,c,p)=>{f==null?c._vnode&&Be(c._vnode,null,null,!0):N(c._vnode||null,f,c,null,null,null,p),Hi(),c._vnode=f},ut={p:N,um:Be,m:ct,r:da,mt:Hn,mc:ie,pc:Te,pbc:ft,n:en,o:e};let Wn,Yn;return t&&([Wn,Yn]=t(ut)),{render:ma,hydrate:Wn,createApp:Il(ma,Wn)}}function Ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ss(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Ye(a[i]),o.el=s.el),n||ss(s,o))}}function Sl(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<u?i=o+1:s=o;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Nl=e=>e.__isTeleport,Ne=Symbol(void 0),qr=Symbol(void 0),Xt=Symbol(void 0),un=Symbol(void 0),Dt=[];let xe=null;function de(e=!1){Dt.push(xe=e?null:[])}function Fl(){Dt.pop(),xe=Dt[Dt.length-1]||null}let Vt=1;function Ma(e){Vt+=e}function Ml(e){return e.dynamicChildren=Vt>0?xe||xt:null,Fl(),Vt>0&&xe&&xe.push(e),e}function me(e,t,n,r,a,i){return Ml(C(e,t,n,r,a,i,!0))}function pr(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Ln="__vInternal",os=({key:e})=>e!=null?e:null,dn=({ref:e,ref_key:t,ref_for:n})=>e!=null?te(e)||ee(e)||R(e)?{i:Ee,r:e,k:t,f:!!n}:e:null;function C(e,t=null,n=null,r=0,a=null,i=e===Ne?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&os(t),ref:t&&dn(t),scopeId:Yi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return o?(Xr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Vt>0&&!s&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const $=jl;function jl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===pl)&&(e=Xt),pr(e)){const o=wt(e,t,!0);return n&&Xr(o,n),Vt>0&&!i&&xe&&(o.shapeFlag&6?xe[xe.indexOf(e)]=o:xe.push(o)),o.patchFlag|=-2,o}if(Kl(e)&&(e=e.__vccOpts),t){t=Ll(t);let{class:o,style:l}=t;o&&!te(o)&&(t.class=Sr(o)),Z(l)&&(Fi(l)&&!L(l)&&(l=ae({},l)),t.style=Tr(l))}const s=te(e)?1:Zo(e)?128:Nl(e)?64:Z(e)?4:R(e)?2:0;return C(e,t,n,r,a,s,i,!0)}function Ll(e){return e?Fi(e)||Ln in e?ae({},e):e:null}function wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?$l(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&os(o),ref:t&&t.ref?n&&a?L(a)?a.concat(dn(t)):[a,dn(t)]:dn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor}}function lt(e=" ",t=0){return $(qr,null,e,t)}function ze(e,t){const n=$(un,null,e);return n.staticCount=t,n}function Ae(e){return e==null||typeof e=="boolean"?$(Xt):L(e)?$(Ne,null,e.slice()):typeof e=="object"?Ye(e):$(qr,null,String(e))}function Ye(e){return e.el===null||e.memo?e:wt(e)}function Xr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Xr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Ln in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[lt(t)]):n=8);e.children=t,e.shapeFlag|=n}function $l(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Sr([t.class,r.class]));else if(a==="style")t.style=Tr([t.style,r.style]);else if(En(a)){const i=t[a],s=r[a];s&&i!==s&&!(L(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function ke(e,t,n,r=null){ye(e,t,7,[n,r])}const Rl=is();let zl=0;function Dl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Rl,i={uid:zl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new so(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ts(r,a),emitsOptions:Wi(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=qo.bind(null,i),e.ce&&e.ce(i),i}let Q=null;const kt=e=>{Q=e,e.scope.on()},at=()=>{Q&&Q.scope.off(),Q=null};function ls(e){return e.vnode.shapeFlag&4}let Jt=!1;function Bl(e,t=!1){Jt=t;const{props:n,children:r}=e.vnode,a=ls(e);wl(e,n,a,t),Al(e,r);const i=a?Hl(e,t):void 0;return Jt=!1,i}function Hl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Mi(new Proxy(e.ctx,gl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Wl(e):null;kt(e),At();const i=qe(r,e,0,[e.props,a]);if(Et(),at(),bi(i)){if(i.then(at,at),t)return i.then(s=>{ja(e,s,t)}).catch(s=>{Sn(s,e,0)});e.asyncDep=i}else ja(e,i,t)}else fs(e,t)}function ja(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=$i(t)),fs(e,n)}let La;function fs(e,t,n){const r=e.type;if(!e.render){if(!t&&La&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,u=ae(ae({isCustomElement:i,delimiters:o},s),l);r.render=La(a,u)}}e.render=r.render||Ie}kt(e),At(),vl(e),Et(),at()}function Ul(e){return new Proxy(e.attrs,{get(t,n){return ue(e,"get","$attrs"),t[n]}})}function Wl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ul(e))},slots:e.slots,emit:e.emit,expose:t}}function Vr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy($i(Mi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in bn)return bn[n](e)}}))}function Yl(e){return R(e)&&e.displayName||e.name}function Kl(e){return R(e)&&"__vccOpts"in e}const he=(e,t)=>Do(e,t,Jt);function cs(e,t,n){const r=arguments.length;return r===2?Z(t)&&!L(t)?pr(t)?$(e,null,[t]):$(e,t):$(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pr(n)&&(n=[n]),$(e,t,n))}const ql="3.2.36",Xl="http://www.w3.org/2000/svg",tt=typeof document!="undefined"?document:null,$a=tt&&tt.createElement("template"),Vl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?tt.createElementNS(Xl,e):tt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>tt.createTextNode(e),createComment:e=>tt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{$a.innerHTML=r?`<svg>${e}</svg>`:e;const o=$a.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Jl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Gl(e,t,n){const r=e.style,a=te(n);if(n&&!a){for(const i in n)hr(r,i,n[i]);if(t&&!te(t))for(const i in t)n[i]==null&&hr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ra=/\s*!important$/;function hr(e,t,n){if(L(n))n.forEach(r=>hr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Zl(e,t);Ra.test(n)?e.setProperty(Ct(r),n.replace(Ra,""),"important"):e[r]=n}}const za=["Webkit","Moz","ms"],Gn={};function Zl(e,t){const n=Gn[t];if(n)return n;let r=Pe(t);if(r!=="filter"&&r in e)return Gn[t]=r;r=Pn(r);for(let a=0;a<za.length;a++){const i=za[a]+r;if(i in e)return Gn[t]=i}return t}const Da="http://www.w3.org/1999/xlink";function Ql(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Da,t.slice(6,t.length)):e.setAttributeNS(Da,t,n);else{const i=qs(t);n==null||i&&!gi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function ef(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=gi(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}const[us,tf]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let gr=0;const nf=Promise.resolve(),rf=()=>{gr=0},af=()=>gr||(nf.then(rf),gr=us());function sf(e,t,n,r){e.addEventListener(t,n,r)}function of(e,t,n,r){e.removeEventListener(t,n,r)}function lf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=ff(t);if(r){const u=i[t]=cf(r,a);sf(e,o,u,l)}else s&&(of(e,o,s,l),i[t]=void 0)}}const Ba=/(?:Once|Passive|Capture)$/;function ff(e){let t;if(Ba.test(e)){t={};let n;for(;n=e.match(Ba);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ct(e.slice(2)),t]}function cf(e,t){const n=r=>{const a=r.timeStamp||us();(tf||a>=n.attached-1)&&ye(uf(r,n.value),t,5,[r])};return n.value=e,n.attached=af(),n}function uf(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ha=/^on[a-z]/,df=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?Jl(e,r,a):t==="style"?Gl(e,n,r):En(t)?Nr(t)||lf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mf(e,t,r,a))?ef(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ql(e,t,r,a))};function mf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ha.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ha.test(t)&&te(n)?!1:t in e}const pf=ae({patchProp:df},Vl);let Ua;function hf(){return Ua||(Ua=Pl(pf))}const gf=(...e)=>{const t=hf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=vf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function vf(e){return te(e)?document.querySelector(e):e}var xf="/assets/Logo.6076a904.svg";const bf={class:"rounded-md bg-[#FB8E0B] h-[50px] w-[167px] text-[16px] leading-[24px] text-white font"},Jr={name:"Button",props:["content"],setup(e){return(t,n)=>(de(),me("button",bf,Gs(e.content),1))}},yf={class:"h-14 flex relative md:sticky top-0 md:flex px-5 sm:px-10 md:px-10 lg:px-14 xl:px-20 justify-between items-center md:h-20 bg-white z-50"},_f=C("img",{src:xf,alt:"",class:"h-1/2"},null,-1),wf=lt("Demo"),kf=lt("About"),Cf=lt("Blog"),Af=lt("Pages"),Ef=lt("Contact"),Of={class:"list-none md:text-[16px] md:font-medium text-[#1B1C20]"},If=lt("Demo"),Pf=C("div",{class:"line1 w-[25px] h-[2px] rounded-md bg-black mb-1"},null,-1),Tf=C("div",{class:"line3 w-[25x] h-[2px] rounded-md bg-black mb-1"},null,-1),Sf=C("div",{class:"line3 w-[25px] h-[2px] bg-black rounded-md mb-1"},null,-1),Nf=[Pf,Tf,Sf],Ff={name:"Navbar",setup(e){const t=Xn(null),n=Xn(null),r=Xn(null),a=()=>{t.value.classList.value.split(" ").includes("hidden")||(n.value.classList.toggle("hidden"),n.value.classList.toggle("flex"),r.value.classList.toggle("hidden"),r.value.classList.toggle("flex"))};return(i,s)=>{const o=jn("router-link");return de(),me("nav",yf,[_f,C("ul",{ref_key:"navList",ref:n,class:"hidden absolute h-[60vh] left-0 md:h-fit md:flex md:w-min flex-col justify-evenly items-center w-full top-[56px] md:static md:text-[16px] md:font-medium text-[#1B1C20] md:flex-row md:gap-x-6 lg:gap-x-9 xl:gap-x-12 bg-white"},[C("li",null,[$(o,null,{default:Qe(()=>[wf]),_:1})]),C("li",null,[$(o,null,{default:Qe(()=>[kf]),_:1})]),C("li",null,[$(o,null,{default:Qe(()=>[Cf]),_:1})]),C("li",null,[$(o,null,{default:Qe(()=>[Af]),_:1})]),C("li",null,[$(o,null,{default:Qe(()=>[Ef]),_:1})])],512),C("div",{ref_key:"lowerNavList",ref:r,class:"hidden fixed flex-col bottom-4 justify-center left-0 lg:gap-x-9 gap-y-8 md:static md:flex-row w-full md:w-min md:flex md:gap-x-6 xl:gap-x-12 items-center bg-white"},[C("li",Of,[$(o,null,{default:Qe(()=>[If]),_:1})]),$(Jr,{content:"Get Started Free"})],512),C("div",{class:"burger md:hidden",ref_key:"burger",ref:t,onClick:a},Nf,512)])}}};var Mf="/assets/girl1.6bf053ac.svg",it="/assets/man2.d31e12d7.svg",jf="/assets/girl3.10888df7.svg",Lf="/assets/African-smiling-small.b7ba51f8.svg";const $f={class:"h-[1000px] md:h-[700px] px-5 md:px-10 lg:px-14 sm:px-10 flex flex-col gap-y-10 md:flex-row"},Rf={class:"md:w-[50%] lg:w-[40%] md:flex md:flex-col md:justify-center"},zf=C("h1",{class:"text-[34px] md:text-[40px] font-bold leading-[49px] md:leading-[52px] text-[#1B1C20] mb-6 md:mb-10"}," Start chatting with customers, anytime, anywhere with Apex ",-1),Df=C("p",{class:"text-[18px] font-normal leading-[32px] text-[#383A47] mb-6 md:mb-10"}," Great software that allows you to chat from any place at any time without any interruption. ",-1),Bf=ze('<div class="flex flex-wrap gap-x-5 gap-y-5"><div class="flex"><img class="h-[60px] border-4 border-white w-[60px] object-cover rounded-full -mr-4" src="'+Mf+'" alt=""><img class="h-[60px] w-[60px] border-4 border-white object-cover rounded-full -mr-4" src="'+it+'" alt=""><img class="h-[60px] w-[60px] border-4 border-white object-cover rounded-full" src="'+jf+'" alt=""></div><div><p class="text-[#12141D] text-[30px] leading-[32px] font-bold"> 2,291 </p><p class="text-[#383A47] text-[16px] leading-[24px] font-normal"> Happy Custoumers </p></div><div><p class="text-[#12141D] text-[30px] leading-[32px] font-bold"> 4.8/5 </p><p class="text-[#383A47] text-[16px] leading-[24px] font-normal"> Rating </p></div></div>',1),Hf=ze('<div class="md:w-[50%] lg:w-[60%] flex justify-center items-center relative"><div class="h-[250px] w-[250px] border-2 border-black rounded-full absolute -z-10"><div class="h-[250px] w-[250px] bg-[#FACC15] rounded-full absolute -z-10 top-6 -right-2"></div></div><img src="'+Lf+'" alt=""><div class="w-[140px] h-[55px] p-2 rounded-md bg-white opacity-90 flex gap-x-2 absolute left-[15%] top-[65%]"><img class="h-[40px] w-[40px] rounded-full object-cover" src="'+it+'" alt=""><div class="w-[65%]"><p class="text-[6px] font-bold">Jenny Wilson</p><p class="text-[6px]"> I commented on Figma, I want to add some fancy icons. Do you have any icon set? </p></div></div><div class="w-[140px] h-[55px] p-2 rounded-md bg-white opacity-90 flex gap-x-2 absolute left-1/2 top-1/3"><img class="h-[40px] w-[40px] rounded-full object-cover" src="'+it+'" alt=""><div class="w-[65%]"><p class="text-[6px] font-bold">Jenny Wilson</p><p class="text-[6px]"> I commented on Figma, I want to add some fancy icons. Do you have any icon set? </p></div></div></div>',1),Uf={name:"HeaderMain",setup(e){return(t,n)=>(de(),me("div",$f,[C("div",Rf,[zf,Df,$(Jr,{content:"Get started now \u279C",class:"mb-6 md:mb-10"}),Bf]),Hf]))}};var Ot=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const Wf={},Yf={class:"h-[790px] md:h-[600px] lg:h-[400px]"},Kf=C("p",{class:"text-[32px] font-bold leading-[40px] text-center py-5"},"Features for a better experience",-1),qf={class:"flex flex-col items-center md:flex-row md:flex-wrap md:justify-around gap-5"},Xf={class:"h-[206px] md:w-[416px] md:h-[153px] flex flex-col md:flex-row justify-around p-4 items-center md:gap-x-3"},Vf={class:"h-[50px] w-[50px] rounded-full bg-[#FD6003] flex justify-center items-center md:self-start md:mt-3"},Jf=C("div",{class:"md:w-[70%] md:flex md:flex-col justify-around md:h-full px-10 md:p-0"},[C("p",{class:"md:text-[21px] md:leading-[33px] font-bold text-center pb-4 md:p-0 md:text-left"},"Video messaging"),C("p",{class:"md:text-[16px] md:leading-[24px] text-center md:text-left"}," This software is very easy for you to manage. You can use it as you wish. ")],-1),Gf={class:"h-[206px] md:w-[416px] md:h-[153px] flex flex-col md:flex-row justify-around p-4 items-center md:gap-x-3"},Zf={class:"h-[50px] w-[50px] rounded-full bg-[#DBEDDC] flex justify-center items-center md:self-start md:mt-3"},Qf=C("div",{class:"md:w-[70%] md:flex md:flex-col justify-around md:h-full px-10 md:p-0"},[C("p",{class:"md:text-[21px] md:leading-[33px] font-bold text-center pb-4 md:p-0 md:text-left"},"Video messaging"),C("p",{class:"md:text-[16px] md:leading-[24px] text-center md:text-left"}," This software is very easy for you to manage. You can use it as you wish. ")],-1),ec={class:"h-[206px] md:w-[416px] md:h-[153px] flex flex-col md:flex-row justify-around p-4 items-center md:gap-x-3"},tc={class:"h-[50px] w-[50px] rounded-full bg-[#FEE8CE] flex justify-center items-center md:self-start md:mt-3"},nc=C("div",{class:"md:w-[70%] md:flex md:flex-col justify-around md:h-full px-10 md:p-0"},[C("p",{class:"md:text-[21px] md:leading-[33px] font-bold text-center pb-4 md:p-0 md:text-left"},"Video messaging"),C("p",{class:"md:text-[16px] md:leading-[24px] text-center md:text-left"}," This software is very easy for you to manage. You can use it as you wish. ")],-1);function rc(e,t){const n=jn("font-awesome-icon");return de(),me("div",Yf,[Kf,C("div",qf,[C("div",Xf,[C("div",Vf,[$(n,{icon:"video",color:"#F23936"})]),Jf]),C("div",Gf,[C("div",Zf,[$(n,{icon:"clock",color:"#4DA44E"})]),Qf]),C("div",ec,[C("div",tc,[$(n,{icon:"wifi-strong",color:"#FB8E0B"})]),nc])])])}var ac=Ot(Wf,[["render",rc]]),ic="/assets/phone.d4b8c0e2.svg",sc="/assets/thumb.e541cab5.svg";const oc={},lc={class:"h-[650px] md:h-[480px] lg:h-[585px] flex flex-col items-center px-5 md:px-10 lg:px-14 py-5 bg-[#F8F8FA] md:flex-row"},fc={class:"w-[350px] h-[245px] lg:h-[376px] bg-[url('./src/assets/call.svg')] bg-cover bg-center bg- lg:w-[50%] relative"},cc={class:"h-[55px] w-full bg-[#12141D] opacity-90 absolute bottom-0 flex px-[10%] gap-x-10 items-center"},uc=C("div",{class:"h-[34px] w-[34px] flex justify-center items-center bg-[#FF5555] rounded-full"},[C("img",{src:ic,alt:""})],-1),dc=C("div",{class:"ml-auto"},[C("img",{src:sc,alt:""})],-1),mc=C("div",{class:"h-[60%] flex flex-col justify-evenly md:px-10 lg:px-20 xl:px-32"},[C("h2",{class:"text-[28px] font-bold leading-[40px] text-[#1B1C20] lg:w-[90%] lg:text-[48px] lg:leading-[56px]"},"Meet your customers, with live video chat"),C("p",{class:"font-medium text-[18px] leading-[30px] text-[#383A47] lg:w-[90%]"},"Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim."),C("p",{class:"text-[16px] font-normal leading-[26px] text-[#383A47] lg:w-[90%]"},"Get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits")],-1);function pc(e,t){const n=jn("font-awesome-icon");return de(),me("div",lc,[C("div",fc,[C("div",cc,[$(n,{icon:"repeat",color:"#ffffff"}),$(n,{icon:"video",color:"#ffffff"}),uc,dc])]),mc])}var hc=Ot(oc,[["render",pc]]);const gc={class:"bg-[#07C5B9] h-[70px] w-[95px] lg:w-[200px] lg:h-[146px] text-[6px] lg:text-[13px] lg:leading-[17px] p-2 rounded-md text-white flex flex-col justify-around absolute z-10 top-[15%] -left-[25%] lg:top-[75%] lg:-left-[36%]"},vc=ze('<p>Will we have daily calls for every projects</p><div class="flex flex-col"><div class="flex justify-between pb-1 lg:pb-2"><p>Yes</p><p>65%</p></div><div class="w-full"><div class="w-[65%] h-[7.5px] bg-white rounded-md"></div></div></div><div class="flex flex-col"><div class="flex justify-between pb-1 lg:pb-2"><p>Yes</p><p>35%</p></div><div class="w-full rounded-sm"><div class="w-[35%] h-[7.5px] bg-white rounded-md"></div></div></div>',3),xc=[vc],bc={name:"Survey",props:["content"],setup(e){return(t,n)=>(de(),me("div",gc,xc))}};var yc="/assets/accept.e3a5eef8.svg",_c="/assets/decline.83527df1.svg";const wc={},kc={class:"h-[95px] w-[77px] lg:w-[138px] lg:h-[170px] bg-white rounded-md shadow-lg flex flex-col justify-around items-center absolute bottom-[20%] right-[-28%] lg:-right-[23%]"},Cc=ze('<img class="h-[25px] w-[25px] lg:h-[45px] lg:w-[45px] rounded-full object-cover" src="'+it+'" alt=""><div><h4 class="text-[7px] leading-[9px] font-medium mb-1 lg:text-[13px] lg:leading-[17px]">Alex Smith</h4><p class="text-[5px] leading-[6px] lg:text-[9px] lg:leading-[11px]">Project Manager</p></div><div><div class="flex gap-x-3"><div class="h-[20px] w-[20px] lg:h-[27px] lg:w-[27px] bg-[#B5EEEA] lg:bg-[#07C5B9] rounded-full flex justify-center items-center"><div class="h-[15px] w-[15px] rounded-full bg-[#07C5B9] flex justify-center items-center"><img src="'+yc+'" alt=""></div></div><div class="h-[20px] w-[20px] lg:h-[27px] lg:w-[27px] bg-[#FAC8C8] lg:bg-[#ED4546] rounded-full flex justify-center items-center"><div class="h-[15px] w-[15px] rounded-full bg-[#ED4546] flex justify-center items-center"><img src="'+_c+'" alt=""></div></div></div></div>',3),Ac=[Cc];function Ec(e,t){return de(),me("div",kc,Ac)}var Oc=Ot(wc,[["render",Ec]]);const Ic={class:"relative"},Pc=ze('<div class="h-[235px] w-[205px] lg:h-[420px] lg:w-[370px] shadow-2xl bg-white p-3 lg:py-8 lg:px-5 rounded-lg z-0"><div class="flex gap-x-4 pb-2 lg:pb-5"><img class="h-[22px] lg:h-[40px] w-[22px] lg:w-[40px] rounded-full object-cover" src="'+it+'" alt=""><p class="w-[80%] bg-[#F7F8FA] p-2 text-[8px] lg:text-[15px] lg:leading-[21px] leading-[12px] font-medium pb-2 rounded-sm"> Hello! My name is Alex, how can I help you? </p></div><div class="flex gap-x-4 pb-2 lg:pb-5"><img class="h-[22px] lg:h-[40px] w-[22px] lg:w-[40px] rounded-full object-cover order-2" src="'+it+'" alt=""><p class="w-[80%] bg-[#FD6003] lg:text-[15px] lg:leading-[21px] p-2 text-[8px] leading-[12px] font-medium order-1 rounded-sm ml-11"> Hello! My name is Alex, how can I help you? </p></div><div class="flex gap-x-4 pb-2 lg:pb-5"><img class="h-[22px] lg:h-[40px] w-[22px] lg:w-[40px] rounded-full object-cover" src="'+it+'" alt=""><p class="w-[80%] bg-[#F7F8FA] lg:text-[15px] lg:leading-[21px] p-2 text-[8px] leading-[12px] font-medium rounded-sm"> Hello! My name is Alex, how can I help you? </p></div><div class="flex gap-x-4 pb-2 lg:pb-5"><div class="h-[22px] lg:h-[40px] w-[22px] lg:w-[40px]"></div><p class="w-[15%] text-center lg:h-[20px] bg-[#F7F8FA] px-2 text-[8px] leading-[12px] font-extrabold rounded-lg"> ... </p></div><input class="lg:px-3 text-[8px] lg:text-[15px] lg:leading-[21px] leading-[12px] font-normal py-2 lg:py-4 rounded-md px-1 w-full border border-[#12141D]" type="text" name="" disabled placeholder="Write your reply..." id=""></div>',1),Tc={name:"DirectMessage",props:["content"],setup(e){return(t,n)=>(de(),me("div",Ic,[Pc,$(bc),$(Oc)]))}},Sc={class:"h-[610px] md:h-[450px] lg:h-[639px] flex flex-col items-center px-5 md:px-10 lg:px-14 py-5 md:flex-row"},Nc={class:"order-2 md:order-1 h-[60%] flex flex-col justify-evenly lg:px-6 xl:px-10 md:w-1/2 md:px-0"},Fc=C("h2",{class:"text-[32px] font-bold leading-[40px] text-[#1B1C20] lg:w-[90%] lg:text-[48px] lg:leading-[56px]"},"Start selling directly inside conversations",-1),Mc=C("p",{class:"font-normal text-[16px] leading-[26px] text-[#383A47] lg:w-[90%]"},"There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which don't look even slightly believable. ",-1),jc={class:"order-1 md:order-2 flex justify-center md:w-1/2"},Lc={name:"SectionThree",setup(e){return(t,n)=>(de(),me("div",Sc,[C("div",Nc,[Fc,Mc,$(Jr,{content:"Start Chatting Now "})]),C("div",jc,[$(Tc)])]))}};var $c="/assets/inbox.c4ff5f4d.svg",Rc="/assets/messanger.a28053dd.svg",zc="/assets/girl-hat.c9beac3e.svg",Dc="/assets/girl-curl.64c78a2c.svg",Bc="/assets/girl-dreads.ca7e0dfa.svg";const Hc={},Uc={class:"relative"},Wc={class:"h-[308px] w-[302px] lg:h-[407px] lg:w-[416px] shadow-2xl bg-white rounded-lg p-3"},Yc=ze('<div class="flex gap-x-3 items-center py-4"><div class="h-[35px] w-[35px] lg:h-[35px] lg:w-[35px] rounded-full bg-[#FFAF63] flex justify-center items-center"><img src="'+$c+'" alt=""></div><p class="text-[12px] leading-[17px] lg:text-[16px] lg:leading-[23px]">Inbox</p><div class="h-[12px] w-[12px] rounded-full bg-[#C4C4C4] ml-auto"></div><div class="h-[12px] w-[12px] rounded-full bg-[#C4C4C4]"></div><div class="h-[12px] w-[12px] rounded-full bg-[#C4C4C4]"></div></div>',1),Kc={class:"bg-[#C4C4C4] h-[223px] lg:h-[308px] rounded-md flex flex-col items-center justify-center gap-2"},qc={class:"lg:w-[335px] w-[243px] bg-white rounded-md flex gap-x-3 p-1 lg:p-3"},Xc={class:"h-[35px] w-[35px] bg-[#77F393] rounded-full flex justify-center items-center"},Vc=C("div",{class:"text-[8px] leading-[11px] lg:text-[12px] lg:leading-[16px]"},[C("p",{class:"font-bold text-[#12141D]"},"New Message"),C("p",{class:"font-medium text-[#12141D]"},"Hey Alex, are you free now?")],-1),Jc={class:"lg:w-[335px] w-[243px] bg-white rounded-md flex gap-x-3 p-1 lg:p-3"},Gc={class:"h-[35px] w-[35px] bg-[#ED4546] rounded-full flex justify-center items-center"},Zc=C("div",{class:"text-[8px] leading-[11px] lg:text-[12px] lg:leading-[16px]"},[C("p",{class:"font-bold text-[#12141D]"},"New Message"),C("p",{class:"font-medium text-[#12141D]"},"Hey Alex, are you free now?")],-1),Qc=ze('<div class="lg:w-[335px] w-[243px] bg-white rounded-md flex gap-x-3 p-1 lg:p-3"><div class="h-[35px] w-[35px] bg-[#008EFF] rounded-full flex justify-center items-center"><img src="'+Rc+'" alt=""></div><div class="text-[8px] leading-[11px] lg:text-[12px] lg:leading-[16px]"><p class="font-bold text-[#12141D]">New Message</p><p class="font-medium text-[#12141D]">Hey Alex, are you free now?</p></div></div>',1),eu={class:"lg:w-[335px] w-[243px] bg-white rounded-md flex gap-x-3 p-1 lg:p-3"},tu={class:"h-[35px] w-[35px] bg-[#77F393] rounded-full flex justify-center items-center"},nu=C("div",{class:"text-[8px] leading-[11px] lg:text-[12px] lg:leading-[16px]"},[C("p",{class:"font-bold text-[#12141D]"},"New Message"),C("p",{class:"font-medium text-[#12141D]"},"Hey Alex, are you free now?")],-1),ru=C("img",{class:"h-[44px] border-4 lg:h-[60px] lg:w-[60px] border-white w-[44px] object-cover rounded-full -mr-4 absolute z-10 top-[30%] -left-[10%]",src:zc,alt:""},null,-1),au=C("img",{class:"h-[44px] border-4 border-white lg:h-[60px] lg:w-[60px] w-[44px] object-cover rounded-full -mr-4 absolute top-[57%] -right-[2%] z-10",src:Dc,alt:""},null,-1),iu=C("img",{class:"h-[51px] border-4 lg:h-[60px] lg:w-[60px] border-white w-[51px] object-cover rounded-full -mr-4 absolute top-[92%] left-[10%]",src:Bc,alt:""},null,-1);function su(e,t){const n=jn("font-awesome-icon");return de(),me("div",Uc,[C("div",Wc,[Yc,C("div",Kc,[C("div",qc,[C("div",Xc,[$(n,{icon:"comment",color:"#FFFFFF"})]),Vc]),C("div",Jc,[C("div",Gc,[$(n,{icon:"envelope",color:"#FFFFFF"})]),Zc]),Qc,C("div",eu,[C("div",tu,[$(n,{icon:"comment",color:"#FFFFFF"})]),nu])])]),ru,au,iu])}var ou=Ot(Hc,[["render",su]]);const lu={class:"h-[748px] md:h-[500px] lg:h-[645px] flex flex-col items-center px-5 md:px-10 lg:px-14 py-5 md:flex-row bg-[#F8F8FA]"},fu={class:"flex justify-center md:w-1/2"},cu=ze('<div class="h-[60%] flex flex-col justify-evenly lg:px-6 xl:px-10 md:w-1/2 md:px-6"><h2 class="text-[32px] font-bold leading-[40px] text-[#1B1C20] lg:w-[90%] lg:text-[48px] lg:leading-[56px]">Get direct orders from your customers</h2><p class="font-normal text-[16px] leading-[26px] text-[#383A47] lg:w-[90%]">Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks easily build a page. There are many variations of passages of available. </p><div class="flex justify-between"><div class="flex"><p class="text-[32px] leading-[40px] font-medium lg:text-[42px] lg:leading-[56px] text-[#1B1C20]">4.3K+</p><div class="flex flex-col text-[14px] leading-[22px] text-[#383A47]"><p>Website&#39;s</p><p>Powering</p></div></div><div class="flex"><p class="text-[32px] leading-[40px] font-medium lg:text-[42px] lg:leading-[56px]">4.3K+</p><div class="flex flex-col text-[14px] leading-[22px]"><p>Website&#39;s</p><p>Powering</p></div></div></div></div>',1),uu={name:"sectionFour",setup(e){return(t,n)=>(de(),me("div",lu,[C("div",fu,[$(ou)]),cu]))}};var Wa="/assets/woman.bfa3aa34.svg";const du={},mu={class:"h-[927px] md:h-[480px] lg:h-[715px] flex flex-col items-center px-5 md:px-10 lg:px-14 py-5 bg-[#FB8E0B] md:flex-row"},pu=ze('<div class="w-full flex gap-5 flex-col md:flex-row justify-around"><div class="flex flex-col items-center"><div class="min-w-[343px] max-w-[600px] rounded-md shadow-lg bg-white p-5"><p>We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.</p></div><div class="flex text-white gap-x-2"><img class="h-[62px] w-[62px] object-cover rounded-full" src="'+Wa+'" alt=""><div><h4 class="text-[18px] leading-[30px]">Wade Waren</h4><p class="text-[14px] leading-[24px]">CEO, ABC Corporation</p></div></div></div><div class="flex flex-col items-center"><div class="min-w-[343px] max-w-[600px] rounded-md shadow-lg bg-white p-5"><p>We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.</p></div><div class="flex text-white gap-x-2"><img class="h-[62px] w-[62px] object-cover rounded-full" src="'+Wa+'" alt=""><div><h4 class="text-[18px] leading-[30px]">Wade Waren</h4><p class="text-[14px] leading-[24px]">CEO, ABC Corporation</p></div></div></div></div>',1),hu=[pu];function gu(e,t){return de(),me("div",mu,hu)}var vu=Ot(du,[["render",gu]]);const xu={name:"App",setup(e){return(t,n)=>(de(),me("div",null,[$(Ff),$(Uf),$(ac),$(hc),$(Lc),$(uu),$(vu)]))}};var bu=Ot(xu,[["__scopeId","data-v-37cf5f60"]]);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ya(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ya(Object(n),!0).forEach(function(r){wu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ya(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _n(e){return _n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_n(e)}function yu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ka(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _u(e,t,n){return t&&Ka(e.prototype,t),n&&Ka(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function wu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gr(e,t){return Cu(e)||Eu(e,t)||ds(e,t)||Iu()}function $n(e){return ku(e)||Au(e)||ds(e)||Ou()}function ku(e){if(Array.isArray(e))return vr(e)}function Cu(e){if(Array.isArray(e))return e}function Au(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Eu(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function ds(e,t){if(!!e){if(typeof e=="string")return vr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vr(e,t)}}function vr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ou(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qa=function(){},Zr={},ms={},ps=null,hs={mark:qa,measure:qa};try{typeof window!="undefined"&&(Zr=window),typeof document!="undefined"&&(ms=document),typeof MutationObserver!="undefined"&&(ps=MutationObserver),typeof performance!="undefined"&&(hs=performance)}catch{}var Pu=Zr.navigator||{},Xa=Pu.userAgent,Va=Xa===void 0?"":Xa,Ve=Zr,J=ms,Ja=ps,on=hs;Ve.document;var De=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",gs=~Va.indexOf("MSIE")||~Va.indexOf("Trident/"),je="___FONT_AWESOME___",xr=16,vs="fa",xs="svg-inline--fa",st="data-fa-i2svg",br="data-fa-pseudo-element",Tu="data-fa-pseudo-element-pending",Qr="data-prefix",ea="data-icon",Ga="fontawesome-i2svg",Su="async",Nu=["HTML","HEAD","STYLE","SCRIPT"],bs=function(){try{return!0}catch{return!1}}(),ta={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},wn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ys={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Fu={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Mu=/fa[srltdbk\-\ ]/,_s="fa-layers-text",ju=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Lu={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},ws=[1,2,3,4,5,6,7,8,9,10],$u=ws.concat([11,12,13,14,15,16,17,18,19,20]),Ru=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zu=[].concat($n(Object.keys(wn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nt.GROUP,nt.SWAP_OPACITY,nt.PRIMARY,nt.SECONDARY]).concat(ws.map(function(e){return"".concat(e,"x")})).concat($u.map(function(e){return"w-".concat(e)})),ks=Ve.FontAwesomeConfig||{};function Du(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Bu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Hu=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hu.forEach(function(e){var t=Gr(e,2),n=t[0],r=t[1],a=Bu(Du(n));a!=null&&(ks[r]=a)})}var Uu={familyPrefix:vs,styleDefault:"solid",replacementClass:xs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Bt=A(A({},Uu),ks);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var S={};Object.keys(Bt).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Bt[e]=n,mn.forEach(function(r){return r(S)})},get:function(){return Bt[e]}})});Ve.FontAwesomeConfig=S;var mn=[];function Wu(e){return mn.push(e),function(){mn.splice(mn.indexOf(e),1)}}var Ue=xr,Oe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yu(e){if(!(!e||!De)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Ku="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gt(){for(var e=12,t="";e-- >0;)t+=Ku[Math.random()*62|0];return t}function It(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function na(e){return e.classList?It(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Cs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Cs(e[n]),'" ')},"").trim()}function Rn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ra(e){return e.size!==Oe.size||e.x!==Oe.x||e.y!==Oe.y||e.rotate!==Oe.rotate||e.flipX||e.flipY}function Xu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Vu(e){var t=e.transform,n=e.width,r=n===void 0?xr:n,a=e.height,i=a===void 0?xr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&gs?l+="translate(".concat(t.x/Ue-r/2,"em, ").concat(t.y/Ue-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/Ue,"em), calc(-50% + ").concat(t.y/Ue,"em)) "):l+="translate(".concat(t.x/Ue,"em, ").concat(t.y/Ue,"em) "),l+="scale(".concat(t.size/Ue*(t.flipX?-1:1),", ").concat(t.size/Ue*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ju=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function As(){var e=vs,t=xs,n=S.familyPrefix,r=S.replacementClass,a=Ju;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var Za=!1;function Zn(){S.autoAddCss&&!Za&&(Yu(As()),Za=!0)}var Gu={mixout:function(){return{dom:{css:As,insertCss:Zn}}},hooks:function(){return{beforeDOMElementCreation:function(){Zn()},beforeI2svg:function(){Zn()}}}},Le=Ve||{};Le[je]||(Le[je]={});Le[je].styles||(Le[je].styles={});Le[je].hooks||(Le[je].hooks={});Le[je].shims||(Le[je].shims=[]);var be=Le[je],Es=[],Zu=function e(){J.removeEventListener("DOMContentLoaded",e),kn=1,Es.map(function(t){return t()})},kn=!1;De&&(kn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),kn||J.addEventListener("DOMContentLoaded",Zu));function Qu(e){!De||(kn?setTimeout(e,0):Es.push(e))}function Zt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Cs(e):"<".concat(t," ").concat(qu(r),">").concat(i.map(Zt).join(""),"</").concat(t,">")}function Qa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ed=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},Qn=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?ed(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)u=i[l],d=o(d,t[u],u,t);return d};function td(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function yr(e){var t=td(e);return t.length===1?t[0].toString(16):null}function nd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ei(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function _r(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ei(t);typeof be.hooks.addPack=="function"&&!a?be.hooks.addPack(e,ei(t)):be.styles[e]=A(A({},be.styles[e]||{}),i),e==="fas"&&_r("fa",t)}var Ht=be.styles,rd=be.shims,ad=Object.values(ys),aa=null,Os={},Is={},Ps={},Ts={},Ss={},id=Object.keys(ta);function sd(e){return~zu.indexOf(e)}function od(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!sd(a)?a:null}var Ns=function(){var t=function(i){return Qn(Ht,function(s,o,l){return s[l]=Qn(o,i,{}),s},{})};Os=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Is=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),Ss=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in Ht||S.autoFetchSvg,r=Qn(rd,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Ps=r.names,Ts=r.unicodes,aa=zn(S.styleDefault)};Wu(function(e){aa=zn(e.styleDefault)});Ns();function ia(e,t){return(Os[e]||{})[t]}function ld(e,t){return(Is[e]||{})[t]}function gt(e,t){return(Ss[e]||{})[t]}function Fs(e){return Ps[e]||{prefix:null,iconName:null}}function fd(e){var t=Ts[e],n=ia("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return aa}var sa=function(){return{prefix:null,iconName:null,rest:[]}};function zn(e){var t=ta[e],n=wn[e]||wn[t],r=e in be.styles?e:null;return n||r||null}function Dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(s,o){var l=od(S.familyPrefix,o);if(Ht[o]?(o=ad.includes(o)?Fu[o]:o,a=o,s.prefix=o):id.indexOf(o)>-1?(a=o,s.prefix=zn(o)):l?s.iconName=l:o!==S.replacementClass&&s.rest.push(o),!r&&s.prefix&&s.iconName){var u=a==="fa"?Fs(s.iconName):{},d=gt(s.prefix,s.iconName);u.prefix&&(a=null),s.iconName=u.iconName||d||s.iconName,s.prefix=u.prefix||s.prefix,s.prefix==="far"&&!Ht.far&&Ht.fas&&!S.autoFetchSvg&&(s.prefix="fas")}return s},sa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Je()||"fas"),i}var cd=function(){function e(){yu(this,e),this.definitions={}}return _u(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=A(A({},n.definitions[o]||{}),s[o]),_r(o,s[o]);var l=ys[o];l&&_r(l,s[o]),Ns()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,u=s.icon,d=u[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=u)}),n[o][l]=u}),n}}]),e}(),ti=[],vt={},_t={},ud=Object.keys(_t);function dd(e,t){var n=t.mixoutsTo;return ti=e,vt={},Object.keys(_t).forEach(function(r){ud.indexOf(r)===-1&&delete _t[r]}),ti.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),_n(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){vt[s]||(vt[s]=[]),vt[s].push(i[s])})}r.provides&&r.provides(_t)}),n}function wr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=vt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=vt[e]||[];a.forEach(function(i){i.apply(null,n)})}function $e(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return _t[e]?_t[e].apply(null,t):void 0}function kr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(!!t)return t=gt(n,t)||t,Qa(Ms.definitions,n,t)||Qa(be.styles,n,t)}var Ms=new cd,md=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,ot("noAuto")},pd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return De?(ot("beforeI2svg",t),$e("pseudoElements2svg",t),$e("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,Qu(function(){gd({autoReplaceSvgRoot:n}),ot("watch",t)})}},hd={icon:function(t){if(t===null)return null;if(_n(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:gt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=zn(t[0]);return{prefix:r,iconName:gt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.familyPrefix,"-"))>-1||t.match(Mu))){var a=Dn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:gt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:gt(i,t)||t}}}},pe={noAuto:md,config:S,dom:pd,parse:hd,library:Ms,findIconDefinition:kr,toHtml:Zt},gd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(be.styles).length>0||S.autoFetchSvg)&&De&&S.autoReplaceSvg&&pe.dom.i2svg({node:r})};function Bn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Zt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!De){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function vd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(ra(s)&&n.found&&!r.found){var o=n.width,l=n.height,u={x:o/l/2,y:.5};a.style=Rn(A(A({},i),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function xd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(S.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:s}),children:r}]}]}function oa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,x=e.watchable,E=x===void 0?!1:x,j=r.found?r:n,z=j.width,N=j.height,b=a==="fak",O=[S.replacementClass,i?"".concat(S.familyPrefix,"-").concat(i):""].filter(function(ie){return m.classes.indexOf(ie)===-1}).filter(function(ie){return ie!==""||!!ie}).concat(m.classes).join(" "),F={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(N)})},D=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(z/N*16*.0625,"em")}:{};E&&(F.attributes[st]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||Gt())},children:[l]}),delete F.attributes.title);var K=A(A({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:s,symbol:o,styles:A(A({},D),m.styles)}),ne=r.found&&n.found?$e("generateAbstractMask",K)||{children:[],attributes:{}}:$e("generateAbstractIcon",K)||{children:[],attributes:{}},le=ne.children,_e=ne.attributes;return K.children=le,K.attributes=_e,o?xd(K):vd(K)}function ni(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,u=A(A(A({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(u[st]="");var d=A({},s.styles);ra(a)&&(d.transform=Vu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Rn(d);m.length>0&&(u.style=m);var x=[];return x.push({tag:"span",attributes:u,children:[t]}),i&&x.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),x}function bd(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Rn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var er=be.styles;function Cr(e){var t=e[0],n=e[1],r=e.slice(4),a=Gr(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(S.familyPrefix,"-").concat(nt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.familyPrefix,"-").concat(nt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.familyPrefix,"-").concat(nt.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var yd={found:!1,width:512,height:512};function _d(e,t){!bs&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ar(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if($e("missingIconAbstract"),n==="fa"){var i=Fs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&er[t]&&er[t][e]){var s=er[t][e];return r(Cr(s))}_d(e,t),r(A(A({},yd),{},{icon:S.showMissingIcons&&e?$e("missingIconAbstract")||{}:{}}))})}var ri=function(){},Er=S.measurePerformance&&on&&on.mark&&on.measure?on:{mark:ri,measure:ri},Lt='FA "6.1.1"',wd=function(t){return Er.mark("".concat(Lt," ").concat(t," begins")),function(){return js(t)}},js=function(t){Er.mark("".concat(Lt," ").concat(t," ends")),Er.measure("".concat(Lt," ").concat(t),"".concat(Lt," ").concat(t," begins"),"".concat(Lt," ").concat(t," ends"))},la={begin:wd,end:js},pn=function(){};function ai(e){var t=e.getAttribute?e.getAttribute(st):null;return typeof t=="string"}function kd(e){var t=e.getAttribute?e.getAttribute(Qr):null,n=e.getAttribute?e.getAttribute(ea):null;return t&&n}function Cd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Ad(){if(S.autoReplaceSvg===!0)return hn.replace;var e=hn[S.autoReplaceSvg];return e||hn.replace}function Ed(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Od(e){return J.createElement(e)}function Ls(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ed:Od:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(Ls(s,{ceFn:r}))}),a}function Id(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var hn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ls(a),n)}),n.getAttribute(st)===null&&S.keepOriginalSource){var r=J.createComment(Id(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~na(n).indexOf(S.replacementClass))return hn.replace(t);var a=new RegExp("".concat(S.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===S.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return Zt(o)}).join(`
`);n.setAttribute(st,""),n.innerHTML=s}};function ii(e){e()}function $s(e,t){var n=typeof t=="function"?t:pn;if(e.length===0)n();else{var r=ii;S.mutateApproach===Su&&(r=Ve.requestAnimationFrame||ii),r(function(){var a=Ad(),i=la.begin("mutate");e.map(a),i(),n()})}}var fa=!1;function Rs(){fa=!0}function Or(){fa=!1}var Cn=null;function si(e){if(!!Ja&&!!S.observeMutations){var t=e.treeCallback,n=t===void 0?pn:t,r=e.nodeCallback,a=r===void 0?pn:r,i=e.pseudoElementsCallback,s=i===void 0?pn:i,o=e.observeMutationsRoot,l=o===void 0?J:o;Cn=new Ja(function(u){if(!fa){var d=Je();It(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ai(m.addedNodes[0])&&(S.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&ai(m.target)&&~Ru.indexOf(m.attributeName))if(m.attributeName==="class"&&kd(m.target)){var x=Dn(na(m.target)),E=x.prefix,j=x.iconName;m.target.setAttribute(Qr,E||d),j&&m.target.setAttribute(ea,j)}else Cd(m.target)&&a(m.target)})}}),De&&Cn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pd(){!Cn||Cn.disconnect()}function Td(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Sd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Dn(na(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=ld(a.prefix,e.innerText)||ia(a.prefix,yr(e.innerText))),a}function Nd(e){var t=It(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||Gt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Fd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Oe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Sd(e),r=n.iconName,a=n.prefix,i=n.rest,s=Nd(e),o=wr("parseNodeAttributes",{},e),l=t.styleParser?Td(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Oe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Md=be.styles;function zs(e){var t=S.autoReplaceSvg==="nest"?oi(e,{styleParser:!1}):oi(e);return~t.extra.classes.indexOf(_s)?$e("generateLayersText",e,t):$e("generateSvgReplacementMutation",e,t)}function li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!De)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(Ga,"-").concat(m))},a=function(m){return n.remove("".concat(Ga,"-").concat(m))},i=S.autoFetchSvg?Object.keys(ta):Object.keys(Md),s=[".".concat(_s,":not([").concat(st,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(st,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=It(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=la.begin("onTree"),u=o.reduce(function(d,m){try{var x=zs(m);x&&d.push(x)}catch(E){bs||E.name==="MissingIcon"&&console.error(E)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(x){$s(x,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(x){l(),m(x)})})}function jd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zs(e).then(function(n){n&&$s([n],t)})}function Ld(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:kr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:kr(a||{})),e(r,A(A({},n),{},{mask:a}))}}var $d=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Oe:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,u=n.maskId,d=u===void 0?null:u,m=n.title,x=m===void 0?null:m,E=n.titleId,j=E===void 0?null:E,z=n.classes,N=z===void 0?[]:z,b=n.attributes,O=b===void 0?{}:b,F=n.styles,D=F===void 0?{}:F;if(!!t){var K=t.prefix,ne=t.iconName,le=t.icon;return Bn(A({type:"icon"},t),function(){return ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(x?O["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(j||Gt()):(O["aria-hidden"]="true",O.focusable="false")),oa({icons:{main:Cr(le),mask:l?Cr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:ne,transform:A(A({},Oe),a),symbol:s,title:x,maskId:d,titleId:j,extra:{attributes:O,styles:D,classes:N}})})}},Rd={mixout:function(){return{icon:Ld($d)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=li,n.nodeCallback=jd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,s=i===void 0?function(){}:i;return li(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,x=r.extra;return new Promise(function(E,j){Promise.all([Ar(a,o),d.iconName?Ar(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var N=Gr(z,2),b=N[0],O=N[1];E([n,oa({icons:{main:b,mask:O},prefix:o,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:s,extra:x,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=Rn(o);l.length>0&&(a.style=l);var u;return ra(s)&&(u=$e("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},zd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Bn({type:"layer"},function(){ot("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(S.familyPrefix,"-layers")].concat($n(i)).join(" ")},children:s}]})}}}},Dd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Bn({type:"counter",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:r}),bd({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(S.familyPrefix,"-layers-counter")].concat($n(o))}})})}}}},Bd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Oe:a,s=r.title,o=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,x=r.styles,E=x===void 0?{}:x;return Bn({type:"text",content:n},function(){return ot("beforeDOMElementCreation",{content:n,params:r}),ni({content:n,transform:A(A({},Oe),i),title:o,extra:{attributes:m,styles:E,classes:["".concat(S.familyPrefix,"-layers-text")].concat($n(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(gs){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/u,l=d.height/u}return S.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,ni({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},Hd=new RegExp('"',"ug"),fi=[1105920,1112319];function Ud(e){var t=e.replace(Hd,""),n=nd(t,0),r=n>=fi[0]&&n<=fi[1],a=t.length===2?t[0]===t[1]:!1;return{value:yr(a?t[0]:t),isSecondary:r||a}}function ci(e,t){var n="".concat(Tu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=It(e.children),s=i.filter(function(ne){return ne.getAttribute(br)===t})[0],o=Ve.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(ju),u=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?wn[l[2].toLowerCase()]:Lu[u],E=Ud(m),j=E.value,z=E.isSecondary,N=l[0].startsWith("FontAwesome"),b=ia(x,j),O=b;if(N){var F=fd(j);F.iconName&&F.prefix&&(b=F.iconName,x=F.prefix)}if(b&&!z&&(!s||s.getAttribute(Qr)!==x||s.getAttribute(ea)!==O)){e.setAttribute(n,O),s&&e.removeChild(s);var D=Fd(),K=D.extra;K.attributes[br]=t,Ar(b,x).then(function(ne){var le=oa(A(A({},D),{},{icons:{main:ne,mask:sa()},prefix:x,iconName:O,extra:K,watchable:!0})),_e=J.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=le.map(function(ie){return Zt(ie)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Wd(e){return Promise.all([ci(e,"::before"),ci(e,"::after")])}function Yd(e){return e.parentNode!==document.head&&!~Nu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(br)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ui(e){if(!!De)return new Promise(function(t,n){var r=It(e.querySelectorAll("*")).filter(Yd).map(Wd),a=la.begin("searchPseudoElements");Rs(),Promise.all(r).then(function(){a(),Or(),t()}).catch(function(){a(),Or(),n()})})}var Kd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ui,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;S.searchPseudoElements&&ui(a)}}},di=!1,qd={mixout:function(){return{dom:{unwatch:function(){Rs(),di=!0}}}},hooks:function(){return{bootstrap:function(){si(wr("mutationObserverCallbacks",{}))},noAuto:function(){Pd()},watch:function(n){var r=n.observeMutationsRoot;di?Or():si(wr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},mi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Xd={mixout:function(){return{parse:{transform:function(n){return mi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=mi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},x={transform:"translate(".concat(s/2*-1," -256)")},E={outer:o,inner:m,path:x};return{tag:"g",attributes:A({},E.outer),children:[{tag:"g",attributes:A({},E.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),E.path)}]}]}}}},tr={x:0,y:0,width:"100%",height:"100%"};function pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Vd(e){return e.tag==="g"?e.children:[e]}var Jd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Dn(a.split(" ").map(function(s){return s.trim()})):sa();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,u=i.width,d=i.icon,m=s.width,x=s.icon,E=Xu({transform:l,containerWidth:m,iconWidth:u}),j={tag:"rect",attributes:A(A({},tr),{},{fill:"white"})},z=d.children?{children:d.children.map(pi)}:{},N={tag:"g",attributes:A({},E.inner),children:[pi(A({tag:d.tag,attributes:A(A({},d.attributes),E.path)},z))]},b={tag:"g",attributes:A({},E.outer),children:[N]},O="mask-".concat(o||Gt()),F="clip-".concat(o||Gt()),D={tag:"mask",attributes:A(A({},tr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,b]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Vd(x)},D]};return r.push(K,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(O,")")},tr)}),{children:r,attributes:a}}}},Gd={provides:function(t){var n=!1;Ve.matchMedia&&(n=Ve.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=A(A({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Zd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Qd=[Gu,Rd,zd,Dd,Bd,Kd,qd,Xd,Jd,Gd,Zd];dd(Qd,{mixoutsTo:pe});pe.noAuto;var Ds=pe.config,em=pe.library;pe.dom;var Bs=pe.parse;pe.findIconDefinition;pe.toHtml;var tm=pe.icon;pe.layer;var nm=pe.text;pe.counter;var rm=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function am(e,t){return t={exports:{}},e(t,t.exports),t.exports}var im=am(function(e){(function(t){var n=function(b,O,F){if(!u(O)||m(O)||x(O)||E(O)||l(O))return O;var D,K=0,ne=0;if(d(O))for(D=[],ne=O.length;K<ne;K++)D.push(n(b,O[K],F));else{D={};for(var le in O)Object.prototype.hasOwnProperty.call(O,le)&&(D[b(le,F)]=n(b,O[le],F))}return D},r=function(b,O){O=O||{};var F=O.separator||"_",D=O.split||/(?=[A-Z])/;return b.split(D).join(F)},a=function(b){return j(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(O,F){return F?F.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var O=a(b);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(b,O){return r(b,O).toLowerCase()},o=Object.prototype.toString,l=function(b){return typeof b=="function"},u=function(b){return b===Object(b)},d=function(b){return o.call(b)=="[object Array]"},m=function(b){return o.call(b)=="[object Date]"},x=function(b){return o.call(b)=="[object RegExp]"},E=function(b){return o.call(b)=="[object Boolean]"},j=function(b){return b=b-0,b===b},z=function(b,O){var F=O&&"process"in O?O.process:O;return typeof F!="function"?b:function(D,K){return F(D,b,K)}},N={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(b,O){return n(z(a,O),b)},decamelizeKeys:function(b,O){return n(z(s,O),b,O)},pascalizeKeys:function(b,O){return n(z(i,O),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(rm)}),sm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$t=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},An=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},om=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Ir=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function lm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=im.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function fm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ca(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=fm(d);break;case"style":l.style=lm(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=om(n,["class","style"]);return cs(e.tag,An({},t,{class:a.class,style:An({},a.style,s)},a.attrs,o),r)}var Hs=!1;try{Hs=!0}catch{}function cm(){if(!Hs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ut(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?$t({},e,t):{}}function um(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},$t(t,"fa-"+e.size,e.size!==null),$t(t,"fa-rotate-"+e.rotation,e.rotation!==null),$t(t,"fa-pull-"+e.pull,e.pull!==null),$t(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function hi(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":sm(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var dm=Yr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=he(function(){return hi(t.icon)}),i=he(function(){return Ut("classes",um(t))}),s=he(function(){return Ut("transform",typeof t.transform=="string"?Bs.transform(t.transform):t.transform)}),o=he(function(){return Ut("mask",hi(t.mask))}),l=he(function(){return tm(a.value,An({},i.value,s.value,o.value,{symbol:t.symbol,title:t.title}))});fn(l,function(d){if(!d)return cm("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var u=he(function(){return l.value?ca(l.value.abstract[0],{},r):null});return function(){return u.value}}});Yr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Ds.familyPrefix,i=he(function(){return[a+"-layers"].concat(Ir(t.fixedWidth?[a+"-fw"]:[]))});return function(){return cs("div",{class:i.value},r.default?r.default():[])}}});Yr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Ds.familyPrefix,i=he(function(){return Ut("classes",[].concat(Ir(t.counter?[a+"-layers-counter"]:[]),Ir(t.position?[a+"-layers-"+t.position]:[])))}),s=he(function(){return Ut("transform",typeof t.transform=="string"?Bs.transform(t.transform):t.transform)}),o=he(function(){var u=nm(t.value.toString(),An({},s.value,i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=he(function(){return ca(o.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var mm={prefix:"fas",iconName:"arrow-left-long",icon:[512,512,["long-arrow-left"],"f177","M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"]},pm={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"]},hm={prefix:"fas",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"]},gm={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,61443,9993],"f0e0","M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"]},vm={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"]},xm={prefix:"fas",iconName:"repeat",icon:[512,512,[128257],"f363","M480 256c-17.67 0-32 14.31-32 32c0 52.94-43.06 96-96 96H192L192 344c0-9.469-5.578-18.06-14.23-21.94C169.1 318.3 159 319.8 151.9 326.2l-80 72C66.89 402.7 64 409.2 64 416s2.891 13.28 7.938 17.84l80 72C156.4 509.9 162.2 512 168 512c3.312 0 6.615-.6875 9.756-2.062C186.4 506.1 192 497.5 192 488L192 448h160c88.22 0 160-71.78 160-160C512 270.3 497.7 256 480 256zM160 128h159.1L320 168c0 9.469 5.578 18.06 14.23 21.94C337.4 191.3 340.7 192 343.1 192c5.812 0 11.57-2.125 16.07-6.156l80-72C445.1 109.3 448 102.8 448 95.1s-2.891-13.28-7.938-17.84l-80-72c-7.047-6.312-17.19-7.875-25.83-4.094C325.6 5.938 319.1 14.53 319.1 24L320 64H160C71.78 64 0 135.8 0 224c0 17.69 14.33 32 32 32s32-14.31 32-32C64 171.1 107.1 128 160 128z"]},bm={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"]},ym={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"]},_m={prefix:"fas",iconName:"wifi",icon:[640,512,["wifi-3","wifi-strong"],"f1eb","M319.1 351.1c-35.35 0-64 28.66-64 64.01s28.66 64.01 64 64.01c35.34 0 64-28.66 64-64.01S355.3 351.1 319.1 351.1zM320 191.1c-70.25 0-137.9 25.6-190.5 72.03C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 191.1 320 191.1zM630.2 156.7C546.3 76.28 436.2 32 320 32S93.69 76.28 9.844 156.7c-12.75 12.25-13.16 32.5-.9375 45.25c12.22 12.78 32.47 13.12 45.25 .9375C125.1 133.1 220.4 96 320 96s193.1 37.97 265.8 106.9C592.1 208.8 600 211.8 608 211.8c8.406 0 16.81-3.281 23.09-9.844C643.3 189.2 642.9 168.1 630.2 156.7z"]},wm=_m;em.add(vm,mm,bm,ym,pm,wm,xm,hm,gm);gf(bu).component("font-awesome-icon",dm).mount("#app");
