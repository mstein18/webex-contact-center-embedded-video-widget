(function(d,M){typeof exports=="object"&&typeof module<"u"?M(exports,require("webex"),require("@wxcc-desktop/sdk")):typeof define=="function"&&define.amd?define(["exports","webex","@wxcc-desktop/sdk"],M):(d=typeof globalThis<"u"?globalThis:d||self,M(d.WebexVideoWidget={},d.Webex,d.Desktop))})(this,function(d,M,P){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ue;const H=globalThis,I=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),Q=new WeakMap;let X=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==L)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(I&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Q.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Q.set(t,e))}return e}toString(){return this.cssText}};const pe=o=>new X(typeof o=="string"?o:o+"",void 0,L),fe=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new X(t,o,L)},ge=(o,e)=>{if(I)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},Y=I?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return pe(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$e,defineProperty:me,getOwnPropertyDescriptor:_e,getOwnPropertyNames:ye,getOwnPropertySymbols:ve,getPrototypeOf:be}=Object,g=globalThis,ee=g.trustedTypes,Ae=ee?ee.emptyScript:"",q=g.reactiveElementPolyfillSupport,O=(o,e)=>o,N={toAttribute(o,e){switch(e){case Boolean:o=o?Ae:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},B=(o,e)=>!$e(o,e),te={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:B};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=te){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&me(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=_e(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){const l=s==null?void 0:s.call(this);n==null||n.call(this,r),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??te}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=be(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,i=[...ye(t),...ve(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Y(s))}else e!==void 0&&t.push(Y(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ge(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:N).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){var n,r;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:N;this._$Em=s;const c=a.fromAttribute(t,l.type);this[s]=c??((r=this._$Ej)==null?void 0:r.get(s))??c,this._$Em=null}}requestUpdate(e,t,i){var s;if(e!==void 0){const n=this.constructor,r=this[e];if(i??(i=n.getPropertyOptions(e)),!((i.hasChanged??B)(r,t)||i.useDefault&&i.reflect&&r===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??t??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,r]of s){const{wrapped:l}=r,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,r,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[O("elementProperties")]=new Map,E[O("finalized")]=new Map,q==null||q({ReactiveElement:E}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,j=k.trustedTypes,ie=j?j.createPolicy("lit-html",{createHTML:o=>o}):void 0,se="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,oe="?"+$,we=`<${oe}>`,y=document,T=()=>y.createComment(""),U=o=>o===null||typeof o!="object"&&typeof o!="function",K=Array.isArray,Ee=o=>K(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",F=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ne=/-->/g,re=/>/g,v=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ae=/'/g,le=/"/g,he=/^(?:script|style|textarea|title)$/i,Se=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),J=Se(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ce=new WeakMap,b=y.createTreeWalker(y,129);function de(o,e){if(!K(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ie!==void 0?ie.createHTML(e):e}const xe=(o,e)=>{const t=o.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",r=V;for(let l=0;l<t;l++){const a=o[l];let c,p,h=-1,f=0;for(;f<a.length&&(r.lastIndex=f,p=r.exec(a),p!==null);)f=r.lastIndex,r===V?p[1]==="!--"?r=ne:p[1]!==void 0?r=re:p[2]!==void 0?(he.test(p[2])&&(s=RegExp("</"+p[2],"g")),r=v):p[3]!==void 0&&(r=v):r===v?p[0]===">"?(r=s??V,h=-1):p[1]===void 0?h=-2:(h=r.lastIndex-p[2].length,c=p[1],r=p[3]===void 0?v:p[3]==='"'?le:ae):r===le||r===ae?r=v:r===ne||r===re?r=V:(r=v,s=void 0);const _=r===v&&o[l+1].startsWith("/>")?" ":"";n+=r===V?a+we:h>=0?(i.push(c),a.slice(0,h)+se+a.slice(h)+$+_):a+$+(h===-2?l:_)}return[de(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class W{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0;const l=e.length-1,a=this.parts,[c,p]=xe(e,t);if(this.el=W.createElement(c,i),b.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=b.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(se)){const f=p[r++],_=s.getAttribute(h).split($),D=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:D[2],strings:_,ctor:D[1]==="."?Me:D[1]==="?"?Pe:D[1]==="@"?Oe:z}),s.removeAttribute(h)}else h.startsWith($)&&(a.push({type:6,index:n}),s.removeAttribute(h));if(he.test(s.tagName)){const h=s.textContent.split($),f=h.length-1;if(f>0){s.textContent=j?j.emptyScript:"";for(let _=0;_<f;_++)s.append(h[_],T()),b.nextNode(),a.push({type:2,index:++n});s.append(h[f],T())}}}else if(s.nodeType===8)if(s.data===oe)a.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf($,h+1))!==-1;)a.push({type:7,index:n}),h+=$.length-1}n++}}static createElement(e,t){const i=y.createElement("template");return i.innerHTML=e,i}}function x(o,e,t=o,i){var r,l;if(e===S)return e;let s=i!==void 0?(r=t._$Co)==null?void 0:r[i]:t._$Cl;const n=U(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=x(o,s._$AS(o,e.values),s,i)),e}class Ce{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??y).importNode(t,!0);b.currentNode=s;let n=b.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new R(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new ke(n,this,e)),this._$AV.push(c),a=i[++l]}r!==(a==null?void 0:a.index)&&(n=b.nextNode(),r++)}return b.currentNode=y,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class R{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),U(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ee(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=W.createElement(de(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const r=new Ce(s,this),l=r.u(this.options);r.p(t),this.T(l),this._$AH=r}}_$AC(e){let t=ce.get(e.strings);return t===void 0&&ce.set(e.strings,t=new W(e)),t}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new R(this.O(T()),this.O(T()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(e,t=this,i,s){const n=this.strings;let r=!1;if(n===void 0)e=x(this,e,t,0),r=!U(e)||e!==this._$AH&&e!==S,r&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=x(this,l[i+a],t,a),c===S&&(c=this._$AH[a]),r||(r=!U(c)||c!==this._$AH[a]),c===u?e=u:e!==u&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}r&&!s&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Me extends z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class Pe extends z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class Oe extends z{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??u)===S)return;const i=this._$AH,s=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==u&&(i===u||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class ke{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const Z=k.litHtmlPolyfillSupport;Z==null||Z(W,R),(k.litHtmlVersions??(k.litHtmlVersions=[])).push("3.3.1");const Te=(o,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new R(e.insertBefore(T(),n),n,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;class C extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Te(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return S}}C._$litElement$=!0,C.finalized=!0,(ue=A.litElementHydrateSupport)==null||ue.call(A,{LitElement:C});const G=A.litElementPolyfillSupport;G==null||G({LitElement:C}),(A.litElementVersions??(A.litElementVersions=[])).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:B},We=(o=Ve,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),n.set(t.name,o),i==="accessor"){const{name:r}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,a,o)},init(l){return l!==void 0&&this.C(r,void 0,o,l),l}}}if(i==="setter"){const{name:r}=t;return function(l){const a=this[r];e.call(this,l),this.requestUpdate(r,a,o)}}throw Error("Unsupported decorator location: "+i)};function Re(o){return(e,t)=>typeof t=="object"?We(o,e,t):((i,s,n)=>{const r=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),r?Object.getOwnPropertyDescriptor(s,n):void 0})(o,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(o){return Re({...o,state:!0,attribute:!1})}var He=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,m=(o,e,t,i)=>{for(var s=i>1?void 0:i?Ne(e,t):e,n=o.length-1,r;n>=0;n--)(r=o[n])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&He(e,t,s),s};d.WebexVideoWidget=class extends C{constructor(){super(...arguments),this.webex=null,this.meeting=null,this.webexInitialized=!1,this.agentInfo=null,this.currentTask=null,this.isMuted=!1,this.isVideoOff=!1}connectedCallback(){super.connectedCallback(),this.initializeDesktopSDK()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup()}async initializeDesktopSDK(){var e;try{await P.init(),console.log("Desktop SDK initialized");const t=(e=P.agentStateInfo)==null?void 0:e.latestData;this.agentInfo=t,console.log("Agent Info:",t),P.agentContact.addEventListener(i=>{console.log("Agent Contact Event:",i),this.handleContactEvent(i)});try{const i=await P.actions.getTaskMap();console.log("Current Tasks:",i)}catch(i){console.log("No current tasks:",i)}}catch(t){console.error("Error initializing Desktop SDK:",t)}}async initializeWebex(){try{const e=await P.actions.getAccessToken();this.webex=await M.init({credentials:{access_token:e}}),await this.webex.meetings.register(),console.log("Webex SDK initialized and registered"),this.webexInitialized=!0}catch(e){console.error("Error initializing Webex:",e)}}async handleContactEvent(e){switch(console.log("Contact Event Type:",e.type),e.type){case"OFFERED":console.log("Call offered:",e.data),this.currentTask=e.data;break;case"CONNECTED":console.log("Call connected, joining video..."),await this.joinVideoMeeting(e.data);break;case"ENDED":console.log("Call ended"),await this.leaveMeeting();break}}async joinVideoMeeting(e){try{this.webex||await this.initializeWebex();const t=e.destination||e.callerId||"test@example.com";this.meeting=await this.webex.meetings.create(t),await this.meeting.join({enableMultistream:!1,moderator:!1});const i=await this.meeting.getMediaStreams({sendAudio:!0,sendVideo:!0,receiveAudio:!0,receiveVideo:!0});await this.meeting.addMedia({localStream:i,mediaSettings:{receiveVideo:!0,receiveAudio:!0,receiveShare:!1,sendVideo:!0,sendAudio:!0,sendShare:!1}}),this.meeting.on("media:ready",s=>{this.attachMediaStream(s)}),this.meeting.on("meeting:participantJoined",s=>{console.log("Participant joined:",s)}),console.log("Successfully joined video meeting"),this.requestUpdate()}catch(t){console.error("Error joining video meeting:",t)}}attachMediaStream(e){setTimeout(()=>{var s,n;const t=(s=this.shadowRoot)==null?void 0:s.querySelector("#local-video"),i=(n=this.shadowRoot)==null?void 0:n.querySelector("#remote-video");e.type==="local"&&t?(t.srcObject=e.stream,console.log("Local video attached")):e.type==="remoteVideo"&&i&&(i.srcObject=e.stream,console.log("Remote video attached"))},100)}async leaveMeeting(){try{this.meeting&&(await this.meeting.leave(),this.meeting=null,this.isMuted=!1,this.isVideoOff=!1,this.requestUpdate())}catch(e){console.error("Error leaving meeting:",e)}}async toggleMute(){if(this.meeting)try{this.isMuted?(await this.meeting.unmuteAudio(),this.isMuted=!1):(await this.meeting.muteAudio(),this.isMuted=!0),this.requestUpdate()}catch(e){console.error("Error toggling mute:",e)}}async toggleVideo(){if(this.meeting)try{this.isVideoOff?(await this.meeting.unmuteVideo(),this.isVideoOff=!1):(await this.meeting.muteVideo(),this.isVideoOff=!0),this.requestUpdate()}catch(e){console.error("Error toggling video:",e)}}async cleanup(){this.meeting&&await this.leaveMeeting()}render(){var e;return J`
      <div class="video-container">
        ${this.meeting?J`
          <div class="status">
            Connected to: ${((e=this.currentTask)==null?void 0:e.callerId)||"Customer"}
          </div>
          <div class="video-grid">
            <video id="remote-video" autoplay playsinline></video>
            <video id="local-video" autoplay muted playsinline></video>
          </div>
          <div class="controls">
            <button class="btn-primary" @click=${this.toggleMute}>
              ${this.isMuted?"🔇 Unmute":"🔊 Mute"}
            </button>
            <button class="btn-primary" @click=${this.toggleVideo}>
              ${this.isVideoOff?"📹 Start Video":"🚫 Stop Video"}
            </button>
            <button class="btn-danger" @click=${this.leaveMeeting}>
              ❌ End Call
            </button>
          </div>
        `:J`
          <div class="waiting">
            <p>🎥 Video Widget Ready</p>
            <p style="font-size: 14px; color: #888;">
              ${this.webexInitialized?"Waiting for incoming call...":"Initializing Webex..."}
            </p>
          </div>
        `}
      </div>
    `}},d.WebexVideoWidget.shadowRootOptions={...C.shadowRootOptions,mode:"open"},d.WebexVideoWidget.styles=fe`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      font-family: 'CiscoSansTT', Arial, sans-serif;
    }

    .video-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #000;
      position: relative;
    }

    .video-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      padding: 10px;
      flex: 1;
    }

    .video-single {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      flex: 1;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      background: #1a1a1a;
    }

    .controls {
      display: flex;
      justify-content: center;
      gap: 15px;
      padding: 20px;
      background: rgba(0, 0, 0, 0.8);
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      transition: background-color 0.3s;
    }

    .btn-primary {
      background: #007aa3;
      color: white;
    }

    .btn-primary:hover {
      background: #005a7a;
    }

    .btn-danger {
      background: #d32f2f;
      color: white;
    }

    .btn-danger:hover {
      background: #9a0007;
    }

    .status {
      padding: 10px;
      text-align: center;
      background: #1a1a1a;
      color: #fff;
      font-size: 14px;
    }

    .waiting {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #fff;
      font-size: 18px;
      gap: 20px;
    }

    .error {
      color: #ff6b6b;
      padding: 20px;
      text-align: center;
    }
  `,m([w()],d.WebexVideoWidget.prototype,"webex",2),m([w()],d.WebexVideoWidget.prototype,"meeting",2),m([w()],d.WebexVideoWidget.prototype,"webexInitialized",2),m([w()],d.WebexVideoWidget.prototype,"agentInfo",2),m([w()],d.WebexVideoWidget.prototype,"currentTask",2),m([w()],d.WebexVideoWidget.prototype,"isMuted",2),m([w()],d.WebexVideoWidget.prototype,"isVideoOff",2),d.WebexVideoWidget=m([Ue("webex-video-widget")],d.WebexVideoWidget),Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
