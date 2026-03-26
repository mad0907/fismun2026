(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function MM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var W0={exports:{}},Bu={},j0={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),EM=Symbol.for("react.portal"),TM=Symbol.for("react.fragment"),wM=Symbol.for("react.strict_mode"),AM=Symbol.for("react.profiler"),CM=Symbol.for("react.provider"),RM=Symbol.for("react.context"),PM=Symbol.for("react.forward_ref"),bM=Symbol.for("react.suspense"),LM=Symbol.for("react.memo"),DM=Symbol.for("react.lazy"),Hp=Symbol.iterator;function NM(t){return t===null||typeof t!="object"?null:(t=Hp&&t[Hp]||t["@@iterator"],typeof t=="function"?t:null)}var X0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y0=Object.assign,$0={};function ao(t,e,n){this.props=t,this.context=e,this.refs=$0,this.updater=n||X0}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function q0(){}q0.prototype=ao.prototype;function nh(t,e,n){this.props=t,this.context=e,this.refs=$0,this.updater=n||X0}var ih=nh.prototype=new q0;ih.constructor=nh;Y0(ih,ao.prototype);ih.isPureReactComponent=!0;var Gp=Array.isArray,K0=Object.prototype.hasOwnProperty,rh={current:null},Z0={key:!0,ref:!0,__self:!0,__source:!0};function Q0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)K0.call(e,i)&&!Z0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ma,type:t,key:s,ref:o,props:r,_owner:rh.current}}function IM(t,e){return{$$typeof:Ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ma}function UM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wp=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UM(""+t.key):e.toString(36)}function Fl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ma:case EM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+yc(o,0):i,Gp(r)?(n="",t!=null&&(n=t.replace(Wp,"$&/")+"/"),Fl(r,e,n,"",function(u){return u})):r!=null&&(sh(r)&&(r=IM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Gp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+yc(s,a);o+=Fl(s,e,n,l,r)}else if(l=NM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+yc(s,a++),o+=Fl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return Fl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function FM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Ol={transition:null},OM={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:rh};function J0(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!sh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=ao;Oe.Fragment=TM;Oe.Profiler=AM;Oe.PureComponent=nh;Oe.StrictMode=wM;Oe.Suspense=bM;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OM;Oe.act=J0;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Y0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)K0.call(e,l)&&!Z0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ma,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:RM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CM,_context:t},t.Consumer=t};Oe.createElement=Q0;Oe.createFactory=function(t){var e=Q0.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:PM,render:t}};Oe.isValidElement=sh;Oe.lazy=function(t){return{$$typeof:DM,_payload:{_status:-1,_result:t},_init:FM}};Oe.memo=function(t,e){return{$$typeof:LM,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};Oe.unstable_act=J0;Oe.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Oe.useContext=function(t){return Qt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Oe.useId=function(){return Qt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Qt.current.useRef(t)};Oe.useState=function(t){return Qt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Qt.current.useTransition()};Oe.version="18.3.1";j0.exports=Oe;var K=j0.exports;const kM=MM(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BM=K,VM=Symbol.for("react.element"),zM=Symbol.for("react.fragment"),HM=Object.prototype.hasOwnProperty,GM=BM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,WM={key:!0,ref:!0,__self:!0,__source:!0};function e_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)HM.call(e,i)&&!WM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:VM,type:t,key:s,ref:o,props:r,_owner:GM.current}}Bu.Fragment=zM;Bu.jsx=e_;Bu.jsxs=e_;W0.exports=Bu;var D=W0.exports,Bf={},t_={exports:{}},Sn={},n_={exports:{}},i_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,H){var G=L.length;L.push(H);e:for(;0<G;){var ie=G-1>>>1,he=L[ie];if(0<r(he,H))L[ie]=H,L[G]=he,G=ie;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var H=L[0],G=L.pop();if(G!==H){L[0]=G;e:for(var ie=0,he=L.length,Be=he>>>1;ie<Be;){var W=2*(ie+1)-1,ee=L[W],ue=W+1,re=L[ue];if(0>r(ee,G))ue<he&&0>r(re,ee)?(L[ie]=re,L[ue]=G,ie=ue):(L[ie]=ee,L[W]=G,ie=W);else if(ue<he&&0>r(re,G))L[ie]=re,L[ue]=G,ie=ue;else break e}}return H}function r(L,H){var G=L.sortIndex-H.sortIndex;return G!==0?G:L.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var H=n(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=L)i(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function S(L){if(y=!1,g(L),!_)if(n(l)!==null)_=!0,te(C);else{var H=n(u);H!==null&&X(S,H.startTime-L)}}function C(L,H){_=!1,y&&(y=!1,h(P),P=-1),p=!0;var G=d;try{for(g(H),f=n(l);f!==null&&(!(f.expirationTime>H)||L&&!I());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,d=f.priorityLevel;var he=ie(f.expirationTime<=H);H=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&i(l),g(H)}else i(l);f=n(l)}if(f!==null)var Be=!0;else{var W=n(u);W!==null&&X(S,W.startTime-H),Be=!1}return Be}finally{f=null,d=G,p=!1}}var T=!1,A=null,P=-1,E=5,x=-1;function I(){return!(t.unstable_now()-x<E)}function j(){if(A!==null){var L=t.unstable_now();x=L;var H=!0;try{H=A(!0,L)}finally{H?N():(T=!1,A=null)}}else T=!1}var N;if(typeof v=="function")N=function(){v(j)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,$=Y.port2;Y.port1.onmessage=j,N=function(){$.postMessage(null)}}else N=function(){m(j,0)};function te(L){A=L,T||(T=!0,N())}function X(L,H){P=m(function(){L(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,te(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var G=d;d=H;try{return L()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=d;d=L;try{return H()}finally{d=G}},t.unstable_scheduleCallback=function(L,H,G){var ie=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ie+G:ie):G=ie,L){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=G+he,L={id:c++,callback:H,priorityLevel:L,startTime:G,expirationTime:he,sortIndex:-1},G>ie?(L.sortIndex=G,e(u,L),n(l)===null&&L===n(u)&&(y?(h(P),P=-1):y=!0,X(S,G-ie))):(L.sortIndex=he,e(l,L),_||p||(_=!0,te(C))),L},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(L){var H=d;return function(){var G=d;d=H;try{return L.apply(this,arguments)}finally{d=G}}}})(i_);n_.exports=i_;var jM=n_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XM=K,yn=jM;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r_=new Set,ea={};function qr(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(ea[t]=e,t=0;t<e.length;t++)r_.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=Object.prototype.hasOwnProperty,YM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},Xp={};function $M(t){return Vf.call(Xp,t)?!0:Vf.call(jp,t)?!1:YM.test(t)?Xp[t]=!0:(jp[t]=!0,!1)}function qM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KM(t,e,n,i){if(e===null||typeof e>"u"||qM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var oh=/[\-:]([a-z])/g;function ah(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(oh,ah);Ot[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(oh,ah);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(oh,ah);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lh(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KM(e,n,r,i)&&(n=null),i||r===null?$M(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=XM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),uh=Symbol.for("react.strict_mode"),zf=Symbol.for("react.profiler"),s_=Symbol.for("react.provider"),o_=Symbol.for("react.context"),ch=Symbol.for("react.forward_ref"),Hf=Symbol.for("react.suspense"),Gf=Symbol.for("react.suspense_list"),fh=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),a_=Symbol.for("react.offscreen"),Yp=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=Yp&&t[Yp]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,xc;function Do(t){if(xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xc=e&&e[1]||""}return`
`+xc+t}var Sc=!1;function Mc(t,e){if(!t||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Do(t):""}function ZM(t){switch(t.tag){case 5:return Do(t.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Wf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case vs:return"Portal";case zf:return"Profiler";case uh:return"StrictMode";case Hf:return"Suspense";case Gf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case o_:return(t.displayName||"Context")+".Consumer";case s_:return(t._context.displayName||"Context")+".Provider";case ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fh:return e=t.displayName||null,e!==null?e:Wf(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return Wf(t(e))}catch{}}return null}function QM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wf(e);case 8:return e===uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function l_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JM(t){var e=l_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=JM(t))}function u_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=l_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jf(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function c_(t,e){e=e.checked,e!=null&&lh(t,"checked",e,!1)}function Xf(t,e){c_(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yf(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yf(t,e,n){(e!=="number"||Jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var No=Array.isArray;function Os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(No(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function f_(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function d_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?d_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,h_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eE=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){eE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function p_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function m_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=p_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tE=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kf(t,e){if(e){if(tE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Zf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qf=null;function dh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jf=null,ks=null,Bs=null;function Qp(t){if(t=wa(t)){if(typeof Jf!="function")throw Error(J(280));var e=t.stateNode;e&&(e=Wu(e),Jf(t.stateNode,t.type,e))}}function g_(t){ks?Bs?Bs.push(t):Bs=[t]:ks=t}function v_(){if(ks){var t=ks,e=Bs;if(Bs=ks=null,Qp(t),e)for(t=0;t<e.length;t++)Qp(e[t])}}function __(t,e){return t(e)}function y_(){}var Ec=!1;function x_(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return __(t,e,n)}finally{Ec=!1,(ks!==null||Bs!==null)&&(y_(),v_())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var i=Wu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var ed=!1;if(Ti)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){ed=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{ed=!1}function nE(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var zo=!1,eu=null,tu=!1,td=null,iE={onError:function(t){zo=!0,eu=t}};function rE(t,e,n,i,r,s,o,a,l){zo=!1,eu=null,nE.apply(iE,arguments)}function sE(t,e,n,i,r,s,o,a,l){if(rE.apply(this,arguments),zo){if(zo){var u=eu;zo=!1,eu=null}else throw Error(J(198));tu||(tu=!0,td=u)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function S_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jp(t){if(Kr(t)!==t)throw Error(J(188))}function oE(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Jp(r),t;if(s===i)return Jp(r),e;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function M_(t){return t=oE(t),t!==null?E_(t):null}function E_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=E_(t);if(e!==null)return e;t=t.sibling}return null}var T_=yn.unstable_scheduleCallback,em=yn.unstable_cancelCallback,aE=yn.unstable_shouldYield,lE=yn.unstable_requestPaint,xt=yn.unstable_now,uE=yn.unstable_getCurrentPriorityLevel,hh=yn.unstable_ImmediatePriority,w_=yn.unstable_UserBlockingPriority,nu=yn.unstable_NormalPriority,cE=yn.unstable_LowPriority,A_=yn.unstable_IdlePriority,Vu=null,ii=null;function fE(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Vu,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:pE,dE=Math.log,hE=Math.LN2;function pE(t){return t>>>=0,t===0?32:31-(dE(t)/hE|0)|0}var Xa=64,Ya=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function iu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Io(a):(s&=o,s!==0&&(i=Io(s)))}else o=n&~r,o!==0?i=Io(o):s!==0&&(i=Io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function mE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=mE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function C_(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function vE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ph(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function R_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P_,mh,b_,L_,D_,id=!1,$a=[],qi=null,Ki=null,Zi=null,ia=new Map,ra=new Map,Gi=[],_E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tm(t,e){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function yo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wa(e),e!==null&&mh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function yE(t,e,n,i,r){switch(e){case"focusin":return qi=yo(qi,t,e,n,i,r),!0;case"dragenter":return Ki=yo(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=yo(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ia.set(s,yo(ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ra.set(s,yo(ra.get(s)||null,t,e,n,i,r)),!0}return!1}function N_(t){var e=Nr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=S_(n),e!==null){t.blockedOn=e,D_(t.priority,function(){b_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qf=i,n.target.dispatchEvent(i),Qf=null}else return e=wa(n),e!==null&&mh(e),t.blockedOn=n,!1;e.shift()}return!0}function nm(t,e,n){kl(t)&&n.delete(e)}function xE(){id=!1,qi!==null&&kl(qi)&&(qi=null),Ki!==null&&kl(Ki)&&(Ki=null),Zi!==null&&kl(Zi)&&(Zi=null),ia.forEach(nm),ra.forEach(nm)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,id||(id=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,xE)))}function sa(t){function e(r){return xo(r,t)}if(0<$a.length){xo($a[0],t);for(var n=1;n<$a.length;n++){var i=$a[n];i.blockedOn===t&&(i.blockedOn=null)}}for(qi!==null&&xo(qi,t),Ki!==null&&xo(Ki,t),Zi!==null&&xo(Zi,t),ia.forEach(e),ra.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)N_(n),n.blockedOn===null&&Gi.shift()}var Vs=Li.ReactCurrentBatchConfig,ru=!0;function SE(t,e,n,i){var r=$e,s=Vs.transition;Vs.transition=null;try{$e=1,gh(t,e,n,i)}finally{$e=r,Vs.transition=s}}function ME(t,e,n,i){var r=$e,s=Vs.transition;Vs.transition=null;try{$e=4,gh(t,e,n,i)}finally{$e=r,Vs.transition=s}}function gh(t,e,n,i){if(ru){var r=rd(t,e,n,i);if(r===null)Ic(t,e,i,su,n),tm(t,i);else if(yE(r,t,e,n,i))i.stopPropagation();else if(tm(t,i),e&4&&-1<_E.indexOf(t)){for(;r!==null;){var s=wa(r);if(s!==null&&P_(s),s=rd(t,e,n,i),s===null&&Ic(t,e,i,su,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ic(t,e,i,null,n)}}var su=null;function rd(t,e,n,i){if(su=null,t=dh(i),t=Nr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=S_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return su=t,null}function I_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uE()){case hh:return 1;case w_:return 4;case nu:case cE:return 16;case A_:return 536870912;default:return 16}default:return 16}}var Xi=null,vh=null,Bl=null;function U_(){if(Bl)return Bl;var t,e=vh,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Bl=r.slice(t,1<i?1-i:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function im(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:im,this.isPropagationStopped=im,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=Mn(lo),Ta=pt({},lo,{view:0,detail:0}),EE=Mn(Ta),wc,Ac,So,zu=pt({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(wc=t.screenX-So.screenX,Ac=t.screenY-So.screenY):Ac=wc=0,So=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),rm=Mn(zu),TE=pt({},zu,{dataTransfer:0}),wE=Mn(TE),AE=pt({},Ta,{relatedTarget:0}),Cc=Mn(AE),CE=pt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),RE=Mn(CE),PE=pt({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bE=Mn(PE),LE=pt({},lo,{data:0}),sm=Mn(LE),DE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IE[t])?!!e[t]:!1}function yh(){return UE}var FE=pt({},Ta,{key:function(t){if(t.key){var e=DE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yh,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OE=Mn(FE),kE=pt({},zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=Mn(kE),BE=pt({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yh}),VE=Mn(BE),zE=pt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),HE=Mn(zE),GE=pt({},zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WE=Mn(GE),jE=[9,13,27,32],xh=Ti&&"CompositionEvent"in window,Ho=null;Ti&&"documentMode"in document&&(Ho=document.documentMode);var XE=Ti&&"TextEvent"in window&&!Ho,F_=Ti&&(!xh||Ho&&8<Ho&&11>=Ho),am=" ",lm=!1;function O_(t,e){switch(t){case"keyup":return jE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function YE(t,e){switch(t){case"compositionend":return k_(e);case"keypress":return e.which!==32?null:(lm=!0,am);case"textInput":return t=e.data,t===am&&lm?null:t;default:return null}}function $E(t,e){if(ys)return t==="compositionend"||!xh&&O_(t,e)?(t=U_(),Bl=vh=Xi=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return F_&&e.locale!=="ko"?null:e.data;default:return null}}var qE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qE[t.type]:e==="textarea"}function B_(t,e,n,i){g_(i),e=ou(e,"onChange"),0<e.length&&(n=new _h("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Go=null,oa=null;function KE(t){K_(t,0)}function Hu(t){var e=Ms(t);if(u_(e))return t}function ZE(t,e){if(t==="change")return e}var V_=!1;if(Ti){var Rc;if(Ti){var Pc="oninput"in document;if(!Pc){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),Pc=typeof cm.oninput=="function"}Rc=Pc}else Rc=!1;V_=Rc&&(!document.documentMode||9<document.documentMode)}function fm(){Go&&(Go.detachEvent("onpropertychange",z_),oa=Go=null)}function z_(t){if(t.propertyName==="value"&&Hu(oa)){var e=[];B_(e,oa,t,dh(t)),x_(KE,e)}}function QE(t,e,n){t==="focusin"?(fm(),Go=e,oa=n,Go.attachEvent("onpropertychange",z_)):t==="focusout"&&fm()}function JE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(oa)}function eT(t,e){if(t==="click")return Hu(e)}function tT(t,e){if(t==="input"||t==="change")return Hu(e)}function nT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:nT;function aa(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vf.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,e){var n=dm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dm(n)}}function H_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?H_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function G_(){for(var t=window,e=Jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jl(t.document)}return e}function Sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iT(t){var e=G_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&H_(n.ownerDocument.documentElement,n)){if(i!==null&&Sh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=hm(n,s);var o=hm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rT=Ti&&"documentMode"in document&&11>=document.documentMode,xs=null,sd=null,Wo=null,od=!1;function pm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;od||xs==null||xs!==Jl(i)||(i=xs,"selectionStart"in i&&Sh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&aa(Wo,i)||(Wo=i,i=ou(sd,"onSelect"),0<i.length&&(e=new _h("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xs)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},bc={},W_={};Ti&&(W_=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Gu(t){if(bc[t])return bc[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in W_)return bc[t]=e[n];return t}var j_=Gu("animationend"),X_=Gu("animationiteration"),Y_=Gu("animationstart"),$_=Gu("transitionend"),q_=new Map,mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){q_.set(t,e),qr(e,[t])}for(var Lc=0;Lc<mm.length;Lc++){var Dc=mm[Lc],sT=Dc.toLowerCase(),oT=Dc[0].toUpperCase()+Dc.slice(1);fr(sT,"on"+oT)}fr(j_,"onAnimationEnd");fr(X_,"onAnimationIteration");fr(Y_,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr($_,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function gm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sE(i,e,void 0,t),t.currentTarget=null}function K_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gm(r,a,u),s=l}}}if(tu)throw t=td,tu=!1,td=null,t}function tt(t,e){var n=e[fd];n===void 0&&(n=e[fd]=new Set);var i=t+"__bubble";n.has(i)||(Z_(e,t,2,!1),n.add(i))}function Nc(t,e,n){var i=0;e&&(i|=4),Z_(n,t,i,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[Za]){t[Za]=!0,r_.forEach(function(n){n!=="selectionchange"&&(aT.has(n)||Nc(n,!1,t),Nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Za]||(e[Za]=!0,Nc("selectionchange",!1,e))}}function Z_(t,e,n,i){switch(I_(e)){case 1:var r=SE;break;case 4:r=ME;break;default:r=gh}n=r.bind(null,e,n,t),r=void 0,!ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ic(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Nr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}x_(function(){var u=s,c=dh(n),f=[];e:{var d=q_.get(t);if(d!==void 0){var p=_h,_=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":p=OE;break;case"focusin":_="focus",p=Cc;break;case"focusout":_="blur",p=Cc;break;case"beforeblur":case"afterblur":p=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=wE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=VE;break;case j_:case X_:case Y_:p=RE;break;case $_:p=HE;break;case"scroll":p=EE;break;case"wheel":p=WE;break;case"copy":case"cut":case"paste":p=bE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=om}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var v=u,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=na(v,h),S!=null&&y.push(ua(v,S,g)))),m)break;v=v.return}0<y.length&&(d=new p(d,_,null,n,c),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Qf&&(_=n.relatedTarget||n.fromElement)&&(Nr(_)||_[wi]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Nr(_):null,_!==null&&(m=Kr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=rm,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=om,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:Ms(p),g=_==null?d:Ms(_),d=new y(S,v+"leave",p,n,c),d.target=m,d.relatedTarget=g,S=null,Nr(c)===u&&(y=new y(h,v+"enter",_,n,c),y.target=g,y.relatedTarget=m,S=y),m=S,p&&_)t:{for(y=p,h=_,v=0,g=y;g;g=Qr(g))v++;for(g=0,S=h;S;S=Qr(S))g++;for(;0<v-g;)y=Qr(y),v--;for(;0<g-v;)h=Qr(h),g--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=Qr(y),h=Qr(h)}y=null}else y=null;p!==null&&vm(f,d,p,y,!1),_!==null&&m!==null&&vm(f,m,_,y,!0)}}e:{if(d=u?Ms(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=ZE;else if(um(d))if(V_)C=tT;else{C=JE;var T=QE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=eT);if(C&&(C=C(t,u))){B_(f,C,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Yf(d,"number",d.value)}switch(T=u?Ms(u):window,t){case"focusin":(um(T)||T.contentEditable==="true")&&(xs=T,sd=u,Wo=null);break;case"focusout":Wo=sd=xs=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,pm(f,n,c);break;case"selectionchange":if(rT)break;case"keydown":case"keyup":pm(f,n,c)}var A;if(xh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ys?O_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(F_&&n.locale!=="ko"&&(ys||P!=="onCompositionStart"?P==="onCompositionEnd"&&ys&&(A=U_()):(Xi=c,vh="value"in Xi?Xi.value:Xi.textContent,ys=!0)),T=ou(u,P),0<T.length&&(P=new sm(P,t,null,n,c),f.push({event:P,listeners:T}),A?P.data=A:(A=k_(n),A!==null&&(P.data=A)))),(A=XE?YE(t,n):$E(t,n))&&(u=ou(u,"onBeforeInput"),0<u.length&&(c=new sm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=A))}K_(f,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=na(t,n),s!=null&&i.unshift(ua(t,s,r)),s=na(t,e),s!=null&&i.push(ua(t,s,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=na(n,s),l!=null&&o.unshift(ua(n,l,a))):r||(l=na(n,s),l!=null&&o.push(ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lT=/\r\n?/g,uT=/\u0000|\uFFFD/g;function _m(t){return(typeof t=="string"?t:""+t).replace(lT,`
`).replace(uT,"")}function Qa(t,e,n){if(e=_m(e),_m(t)!==e&&n)throw Error(J(425))}function au(){}var ad=null,ld=null;function ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,cT=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,fT=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(t){return ym.resolve(null).then(t).catch(dT)}:cd;function dT(t){setTimeout(function(){throw t})}function Uc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sa(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),ei="__reactFiber$"+uo,ca="__reactProps$"+uo,wi="__reactContainer$"+uo,fd="__reactEvents$"+uo,hT="__reactListeners$"+uo,pT="__reactHandles$"+uo;function Nr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xm(t);t!==null;){if(n=t[ei])return n;t=xm(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[ei]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function Wu(t){return t[ca]||null}var dd=[],Es=-1;function dr(t){return{current:t}}function rt(t){0>Es||(t.current=dd[Es],dd[Es]=null,Es--)}function Je(t,e){Es++,dd[Es]=t.current,t.current=e}var ar={},Yt=dr(ar),on=dr(!1),Hr=ar;function Ys(t,e){var n=t.type.contextTypes;if(!n)return ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function lu(){rt(on),rt(Yt)}function Sm(t,e,n){if(Yt.current!==ar)throw Error(J(168));Je(Yt,e),Je(on,n)}function Q_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,QM(t)||"Unknown",r));return pt({},n,i)}function uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Hr=Yt.current,Je(Yt,t),Je(on,on.current),!0}function Mm(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=Q_(t,e,Hr),i.__reactInternalMemoizedMergedChildContext=t,rt(on),rt(Yt),Je(Yt,t)):rt(on),Je(on,n)}var _i=null,ju=!1,Fc=!1;function J_(t){_i===null?_i=[t]:_i.push(t)}function mT(t){ju=!0,J_(t)}function hr(){if(!Fc&&_i!==null){Fc=!0;var t=0,e=$e;try{var n=_i;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,ju=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),T_(hh,hr),r}finally{$e=e,Fc=!1}}return null}var Ts=[],ws=0,cu=null,fu=0,Cn=[],Rn=0,Gr=null,xi=1,Si="";function wr(t,e){Ts[ws++]=fu,Ts[ws++]=cu,cu=t,fu=e}function ey(t,e,n){Cn[Rn++]=xi,Cn[Rn++]=Si,Cn[Rn++]=Gr,Gr=t;var i=xi;t=Si;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-jn(e)+r|n<<r|i,Si=s+t}else xi=1<<s|n<<r|i,Si=t}function Mh(t){t.return!==null&&(wr(t,1),ey(t,1,0))}function Eh(t){for(;t===cu;)cu=Ts[--ws],Ts[ws]=null,fu=Ts[--ws],Ts[ws]=null;for(;t===Gr;)Gr=Cn[--Rn],Cn[Rn]=null,Si=Cn[--Rn],Cn[Rn]=null,xi=Cn[--Rn],Cn[Rn]=null}var gn=null,pn=null,lt=!1,Gn=null;function ty(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,pn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:xi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,pn=null,!0):!1;default:return!1}}function hd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pd(t){if(lt){var e=pn;if(e){var n=e;if(!Em(t,e)){if(hd(t))throw Error(J(418));e=Qi(n.nextSibling);var i=gn;e&&Em(t,e)?ty(i,n):(t.flags=t.flags&-4097|2,lt=!1,gn=t)}}else{if(hd(t))throw Error(J(418));t.flags=t.flags&-4097|2,lt=!1,gn=t}}}function Tm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Ja(t){if(t!==gn)return!1;if(!lt)return Tm(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ud(t.type,t.memoizedProps)),e&&(e=pn)){if(hd(t))throw ny(),Error(J(418));for(;e;)ty(t,e),e=Qi(e.nextSibling)}if(Tm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=gn?Qi(t.stateNode.nextSibling):null;return!0}function ny(){for(var t=pn;t;)t=Qi(t.nextSibling)}function $s(){pn=gn=null,lt=!1}function Th(t){Gn===null?Gn=[t]:Gn.push(t)}var gT=Li.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wm(t){var e=t._init;return e(t._payload)}function iy(t){function e(h,v){if(t){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=nr(h,v),h.index=0,h.sibling=null,h}function s(h,v,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,g,S){return v===null||v.tag!==6?(v=Gc(g,h.mode,S),v.return=h,v):(v=r(v,g),v.return=h,v)}function l(h,v,g,S){var C=g.type;return C===_s?c(h,v,g.props.children,S,g.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zi&&wm(C)===v.type)?(S=r(v,g.props),S.ref=Mo(h,v,g),S.return=h,S):(S=Yl(g.type,g.key,g.props,null,h.mode,S),S.ref=Mo(h,v,g),S.return=h,S)}function u(h,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Wc(g,h.mode,S),v.return=h,v):(v=r(v,g.children||[]),v.return=h,v)}function c(h,v,g,S,C){return v===null||v.tag!==7?(v=Vr(g,h.mode,S,C),v.return=h,v):(v=r(v,g),v.return=h,v)}function f(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Gc(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ga:return g=Yl(v.type,v.key,v.props,null,h.mode,g),g.ref=Mo(h,null,v),g.return=h,g;case vs:return v=Wc(v,h.mode,g),v.return=h,v;case zi:var S=v._init;return f(h,S(v._payload),g)}if(No(v)||vo(v))return v=Vr(v,h.mode,g,null),v.return=h,v;el(h,v)}return null}function d(h,v,g,S){var C=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(h,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ga:return g.key===C?l(h,v,g,S):null;case vs:return g.key===C?u(h,v,g,S):null;case zi:return C=g._init,d(h,v,C(g._payload),S)}if(No(g)||vo(g))return C!==null?null:c(h,v,g,S,null);el(h,g)}return null}function p(h,v,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,a(v,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ga:return h=h.get(S.key===null?g:S.key)||null,l(v,h,S,C);case vs:return h=h.get(S.key===null?g:S.key)||null,u(v,h,S,C);case zi:var T=S._init;return p(h,v,g,T(S._payload),C)}if(No(S)||vo(S))return h=h.get(g)||null,c(v,h,S,C,null);el(v,S)}return null}function _(h,v,g,S){for(var C=null,T=null,A=v,P=v=0,E=null;A!==null&&P<g.length;P++){A.index>P?(E=A,A=null):E=A.sibling;var x=d(h,A,g[P],S);if(x===null){A===null&&(A=E);break}t&&A&&x.alternate===null&&e(h,A),v=s(x,v,P),T===null?C=x:T.sibling=x,T=x,A=E}if(P===g.length)return n(h,A),lt&&wr(h,P),C;if(A===null){for(;P<g.length;P++)A=f(h,g[P],S),A!==null&&(v=s(A,v,P),T===null?C=A:T.sibling=A,T=A);return lt&&wr(h,P),C}for(A=i(h,A);P<g.length;P++)E=p(A,h,P,g[P],S),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?P:E.key),v=s(E,v,P),T===null?C=E:T.sibling=E,T=E);return t&&A.forEach(function(I){return e(h,I)}),lt&&wr(h,P),C}function y(h,v,g,S){var C=vo(g);if(typeof C!="function")throw Error(J(150));if(g=C.call(g),g==null)throw Error(J(151));for(var T=C=null,A=v,P=v=0,E=null,x=g.next();A!==null&&!x.done;P++,x=g.next()){A.index>P?(E=A,A=null):E=A.sibling;var I=d(h,A,x.value,S);if(I===null){A===null&&(A=E);break}t&&A&&I.alternate===null&&e(h,A),v=s(I,v,P),T===null?C=I:T.sibling=I,T=I,A=E}if(x.done)return n(h,A),lt&&wr(h,P),C;if(A===null){for(;!x.done;P++,x=g.next())x=f(h,x.value,S),x!==null&&(v=s(x,v,P),T===null?C=x:T.sibling=x,T=x);return lt&&wr(h,P),C}for(A=i(h,A);!x.done;P++,x=g.next())x=p(A,h,P,x.value,S),x!==null&&(t&&x.alternate!==null&&A.delete(x.key===null?P:x.key),v=s(x,v,P),T===null?C=x:T.sibling=x,T=x);return t&&A.forEach(function(j){return e(h,j)}),lt&&wr(h,P),C}function m(h,v,g,S){if(typeof g=="object"&&g!==null&&g.type===_s&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ga:e:{for(var C=g.key,T=v;T!==null;){if(T.key===C){if(C=g.type,C===_s){if(T.tag===7){n(h,T.sibling),v=r(T,g.props.children),v.return=h,h=v;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zi&&wm(C)===T.type){n(h,T.sibling),v=r(T,g.props),v.ref=Mo(h,T,g),v.return=h,h=v;break e}n(h,T);break}else e(h,T);T=T.sibling}g.type===_s?(v=Vr(g.props.children,h.mode,S,g.key),v.return=h,h=v):(S=Yl(g.type,g.key,g.props,null,h.mode,S),S.ref=Mo(h,v,g),S.return=h,h=S)}return o(h);case vs:e:{for(T=g.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(h,v.sibling),v=r(v,g.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Wc(g,h.mode,S),v.return=h,h=v}return o(h);case zi:return T=g._init,m(h,v,T(g._payload),S)}if(No(g))return _(h,v,g,S);if(vo(g))return y(h,v,g,S);el(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,g),v.return=h,h=v):(n(h,v),v=Gc(g,h.mode,S),v.return=h,h=v),o(h)):n(h,v)}return m}var qs=iy(!0),ry=iy(!1),du=dr(null),hu=null,As=null,wh=null;function Ah(){wh=As=hu=null}function Ch(t){var e=du.current;rt(du),t._currentValue=e}function md(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){hu=t,wh=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(wh!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(hu===null)throw Error(J(308));As=t,hu.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Ir=null;function Rh(t){Ir===null?Ir=[t]:Ir.push(t)}function sy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function Ph(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,Rh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ph(t,n)}}function Am(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pu(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=pt({},f,d);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=f}}function Cm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Aa={},ri=dr(Aa),fa=dr(Aa),da=dr(Aa);function Ur(t){if(t===Aa)throw Error(J(174));return t}function bh(t,e){switch(Je(da,e),Je(fa,t),Je(ri,Aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qf(e,t)}rt(ri),Je(ri,e)}function Ks(){rt(ri),rt(fa),rt(da)}function ay(t){Ur(da.current);var e=Ur(ri.current),n=qf(e,t.type);e!==n&&(Je(fa,t),Je(ri,n))}function Lh(t){fa.current===t&&(rt(ri),rt(fa))}var dt=dr(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function Dh(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var Hl=Li.ReactCurrentDispatcher,kc=Li.ReactCurrentBatchConfig,Wr=0,ht=null,wt=null,Dt=null,gu=!1,jo=!1,ha=0,vT=0;function Vt(){throw Error(J(321))}function Nh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Ih(t,e,n,i,r,s){if(Wr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?ST:MT,t=n(i,r),jo){s=0;do{if(jo=!1,ha=0,25<=s)throw Error(J(301));s+=1,Dt=wt=null,e.updateQueue=null,Hl.current=ET,t=n(i,r)}while(jo)}if(Hl.current=vu,e=wt!==null&&wt.next!==null,Wr=0,Dt=wt=ht=null,gu=!1,e)throw Error(J(300));return t}function Uh(){var t=ha!==0;return ha=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Un(){if(wt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Dt===null?ht.memoizedState:Dt.next;if(e!==null)Dt=e,wt=t;else{if(t===null)throw Error(J(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function pa(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=Un(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Wr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ht.lanes|=c,jr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Un(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ly(){}function uy(t,e){var n=ht,i=Un(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,Fh(dy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,ma(9,fy.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(J(349));Wr&30||cy(n,e,r)}return r}function cy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fy(t,e,n,i){e.value=n,e.getSnapshot=i,hy(e)&&py(t)}function dy(t,e,n){return n(function(){hy(e)&&py(t)})}function hy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function py(t){var e=Ai(t,1);e!==null&&Xn(e,t,1,-1)}function Rm(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=xT.bind(null,ht,t),[e.memoizedState,t]}function ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function my(){return Un().memoizedState}function Gl(t,e,n,i){var r=Zn();ht.flags|=t,r.memoizedState=ma(1|e,n,void 0,i===void 0?null:i)}function Xu(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Nh(i,o.deps)){r.memoizedState=ma(e,n,s,i);return}}ht.flags|=t,r.memoizedState=ma(1|e,n,s,i)}function Pm(t,e){return Gl(8390656,8,t,e)}function Fh(t,e){return Xu(2048,8,t,e)}function gy(t,e){return Xu(4,2,t,e)}function vy(t,e){return Xu(4,4,t,e)}function _y(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yy(t,e,n){return n=n!=null?n.concat([t]):null,Xu(4,4,_y.bind(null,e,t),n)}function Oh(){}function xy(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Sy(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function My(t,e,n){return Wr&21?(Yn(n,e)||(n=C_(),ht.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function _T(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{$e=n,kc.transition=i}}function Ey(){return Un().memoizedState}function yT(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ty(t))wy(e,n);else if(n=sy(t,e,n,i),n!==null){var r=Kt();Xn(n,t,i,r),Ay(n,e,i)}}function xT(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ty(t))wy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Rh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=sy(t,e,r,i),n!==null&&(r=Kt(),Xn(n,t,i,r),Ay(n,e,i))}}function Ty(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function wy(t,e){jo=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ay(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ph(t,n)}}var vu={readContext:In,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},ST={readContext:In,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Pm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,_y.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yT.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Rm,useDebugValue:Oh,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Rm(!1),e=t[0];return t=_T.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Zn();if(lt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Nt===null)throw Error(J(349));Wr&30||cy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Pm(dy.bind(null,i,s,t),[t]),i.flags|=2048,ma(9,fy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Nt.identifierPrefix;if(lt){var n=Si,i=xi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MT={readContext:In,useCallback:xy,useContext:In,useEffect:Fh,useImperativeHandle:yy,useInsertionEffect:gy,useLayoutEffect:vy,useMemo:Sy,useReducer:Bc,useRef:my,useState:function(){return Bc(pa)},useDebugValue:Oh,useDeferredValue:function(t){var e=Un();return My(e,wt.memoizedState,t)},useTransition:function(){var t=Bc(pa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:ly,useSyncExternalStore:uy,useId:Ey,unstable_isNewReconciler:!1},ET={readContext:In,useCallback:xy,useContext:In,useEffect:Fh,useImperativeHandle:yy,useInsertionEffect:gy,useLayoutEffect:vy,useMemo:Sy,useReducer:Vc,useRef:my,useState:function(){return Vc(pa)},useDebugValue:Oh,useDeferredValue:function(t){var e=Un();return wt===null?e.memoizedState=t:My(e,wt.memoizedState,t)},useTransition:function(){var t=Vc(pa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:ly,useSyncExternalStore:uy,useId:Ey,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yu={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=tr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Xn(e,t,r,i),zl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=tr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Xn(e,t,r,i),zl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=tr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(Xn(e,t,i,n),zl(e,t,i))}};function bm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,i)||!aa(r,s):!0}function Cy(t,e,n){var i=!1,r=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=an(e)?Hr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yu.enqueueReplaceState(e,e.state,null)}function vd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ph(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=an(e)?Hr:Yt.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yu.enqueueReplaceState(r,r.state,null),pu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=ZM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TT=typeof WeakMap=="function"?WeakMap:Map;function Ry(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){yu||(yu=!0,Rd=i),_d(t,e)},n}function Py(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_d(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new TT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kT.bind(null,t,e,n),e.then(t,t))}function Nm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Im(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var wT=Li.ReactCurrentOwner,sn=!1;function qt(t,e,n,i){e.child=t===null?ry(e,null,n,i):qs(e,t.child,n,i)}function Um(t,e,n,i,r){n=n.render;var s=e.ref;return zs(e,r),i=Ih(t,e,n,i,s,r),n=Uh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(lt&&n&&Mh(e),e.flags|=1,qt(t,e,i,r),e.child)}function Fm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,by(t,e,s,i,r)):(t=Yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function by(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(aa(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return yd(t,e,n,i,r)}function Ly(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(Rs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Je(Rs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Je(Rs,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Je(Rs,hn),hn|=i;return qt(t,e,r,n),e.child}function Dy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yd(t,e,n,i,r){var s=an(n)?Hr:Yt.current;return s=Ys(e,s),zs(e,r),n=Ih(t,e,n,i,s,r),i=Uh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(lt&&i&&Mh(e),e.flags|=1,qt(t,e,n,r),e.child)}function Om(t,e,n,i,r){if(an(n)){var s=!0;uu(e)}else s=!1;if(zs(e,r),e.stateNode===null)Wl(t,e),Cy(e,n,i),vd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=an(n)?Hr:Yt.current,u=Ys(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Lm(e,o,i,u),Hi=!1;var d=e.memoizedState;o.state=d,pu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||on.current||Hi?(typeof c=="function"&&(gd(e,n,c,i),l=e.memoizedState),(a=Hi||bm(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,oy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=an(n)?Hr:Yt.current,l=Ys(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Lm(e,o,i,l),Hi=!1,d=e.memoizedState,o.state=d,pu(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||on.current||Hi?(typeof p=="function"&&(gd(e,n,p,i),_=e.memoizedState),(u=Hi||bm(e,n,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return xd(t,e,n,i,s,r)}function xd(t,e,n,i,r,s){Dy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mm(e,n,!1),Ci(t,e,s);i=e.stateNode,wT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&Mm(e,n,!0),e.child}function Ny(t){var e=t.stateNode;e.pendingContext?Sm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sm(t,e.context,!1),bh(t,e.containerInfo)}function km(t,e,n,i,r){return $s(),Th(r),e.flags|=256,qt(t,e,n,i),e.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function Md(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iy(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Je(dt,r&1),t===null)return pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ku(o,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Md(n),e.memoizedState=Sd,t):kh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return AT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sd,i}return s=t.child,t=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kh(t,e){return e=Ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,i){return i!==null&&Th(i),qs(e,t.child,null,n),t=kh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=zc(Error(J(422))),tl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ku({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=Md(o),e.memoizedState=Sd,s);if(!(e.mode&1))return tl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=zc(s,i,void 0),tl(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),Xn(i,t,r,-1))}return Wh(),i=zc(Error(J(421))),tl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=BT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Qi(r.nextSibling),gn=e,lt=!0,Gn=null,t!==null&&(Cn[Rn++]=xi,Cn[Rn++]=Si,Cn[Rn++]=Gr,xi=t.id,Si=t.overflow,Gr=e),e=kh(e,i.children),e.flags|=4096,e)}function Bm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),md(t.return,e,n)}function Hc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Uy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bm(t,n,e);else if(t.tag===19)Bm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Je(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&mu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&mu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hc(e,!0,n,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CT(t,e,n){switch(e.tag){case 3:Ny(e),$s();break;case 5:ay(e);break;case 1:an(e.type)&&uu(e);break;case 4:bh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Je(du,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Je(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Iy(t,e,n):(Je(dt,dt.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);Je(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Uy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Je(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ly(t,e,n)}return Ci(t,e,n)}var Fy,Ed,Oy,ky;Fy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ed=function(){};Oy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(ri.current);var s=null;switch(n){case"input":r=jf(t,r),i=jf(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=$f(t,r),i=$f(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=au)}Kf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ky=function(t,e,n,i){n!==i&&(e.flags|=4)};function Eo(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function RT(t,e,n){var i=e.pendingProps;switch(Eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return an(e.type)&&lu(),zt(e),null;case 3:return i=e.stateNode,Ks(),rt(on),rt(Yt),Dh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Ld(Gn),Gn=null))),Ed(t,e),zt(e),null;case 5:Lh(e);var r=Ur(da.current);if(n=e.type,t!==null&&e.stateNode!=null)Oy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return zt(e),null}if(t=Ur(ri.current),Ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[ca]=s,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<Uo.length;r++)tt(Uo[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":$p(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":Kp(i,s),tt("invalid",i)}Kf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(n){case"input":Wa(i),qp(i,s,!0);break;case"textarea":Wa(i),Zp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=au)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=d_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[ca]=i,Fy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zf(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Uo.length;r++)tt(Uo[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":$p(t,i),r=jf(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),tt("invalid",t);break;case"textarea":Kp(t,i),r=$f(t,i),tt("invalid",t);break;default:r=i}Kf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?m_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&h_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(t,l):typeof l=="number"&&ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",t):l!=null&&lh(t,s,l,o))}switch(n){case"input":Wa(t),qp(t,i,!1);break;case"textarea":Wa(t),Zp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Os(t,!!i.multiple,s,!1):i.defaultValue!=null&&Os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=au)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)ky(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=Ur(da.current),Ur(ri.current),Ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return zt(e),null;case 13:if(rt(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&pn!==null&&e.mode&1&&!(e.flags&128))ny(),$s(),e.flags|=98560,s=!1;else if(s=Ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[ei]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Gn!==null&&(Ld(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?At===0&&(At=3):Wh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ks(),Ed(t,e),t===null&&la(e.stateNode.containerInfo),zt(e),null;case 10:return Ch(e.type._context),zt(e),null;case 17:return an(e.type)&&lu(),zt(e),null;case 19:if(rt(dt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Eo(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mu(t),o!==null){for(e.flags|=128,Eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Je(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Qs&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=mu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return zt(e),null}else 2*xt()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=dt.current,Je(dt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Gh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function PT(t,e){switch(Eh(e),e.tag){case 1:return an(e.type)&&lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),rt(on),rt(Yt),Dh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(rt(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(dt),null;case 4:return Ks(),null;case 10:return Ch(e.type._context),null;case 22:case 23:return Gh(),null;case 24:return null;default:return null}}var nl=!1,jt=!1,bT=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Td(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Vm=!1;function LT(t,e){if(ad=ru,t=G_(),Sh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ld={focusedElem:t,selectionRange:n},ru=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(S){vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=Vm,Vm=!1,_}function Xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Td(e,n,s)}r=r.next}while(r!==i)}}function $u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function By(t){var e=t.alternate;e!==null&&(t.alternate=null,By(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[ca],delete e[fd],delete e[hT],delete e[pT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vy(t){return t.tag===5||t.tag===3||t.tag===4}function zm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=au));else if(i!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}function Cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cd(t,e,n),t=t.sibling;t!==null;)Cd(t,e,n),t=t.sibling}var It=null,Hn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)zy(t,e,n),n=n.sibling}function zy(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Vu,n)}catch{}switch(n.tag){case 5:jt||Cs(n,e);case 6:var i=It,r=Hn;It=null,Ni(t,e,n),It=i,Hn=r,It!==null&&(Hn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Hn?(t=It,n=n.stateNode,t.nodeType===8?Uc(t.parentNode,n):t.nodeType===1&&Uc(t,n),sa(t)):Uc(It,n.stateNode));break;case 4:i=It,r=Hn,It=n.stateNode.containerInfo,Hn=!0,Ni(t,e,n),It=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Td(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!jt&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Ni(t,e,n),jt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function Hm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bT),e.forEach(function(i){var r=VT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Hn=!1;break e;case 3:It=a.stateNode.containerInfo,Hn=!0;break e;case 4:It=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(It===null)throw Error(J(160));zy(s,o,r),It=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hy(e,t),e=e.sibling}function Hy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Kn(t),i&4){try{Xo(3,t,t.return),$u(3,t)}catch(y){vt(t,t.return,y)}try{Xo(5,t,t.return)}catch(y){vt(t,t.return,y)}}break;case 1:Fn(e,t),Kn(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Fn(e,t),Kn(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{ta(r,"")}catch(y){vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&c_(r,s),Zf(a,o);var u=Zf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?m_(r,f):c==="dangerouslySetInnerHTML"?h_(r,f):c==="children"?ta(r,f):lh(r,c,f,u)}switch(a){case"input":Xf(r,s);break;case"textarea":f_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Os(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Os(r,!!s.multiple,s.defaultValue,!0):Os(r,!!s.multiple,s.multiple?[]:"",!1))}r[ca]=s}catch(y){vt(t,t.return,y)}}break;case 6:if(Fn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){vt(t,t.return,y)}}break;case 3:if(Fn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(y){vt(t,t.return,y)}break;case 4:Fn(e,t),Kn(t);break;case 13:Fn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(zh=xt())),i&4&&Hm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||c,Fn(e,t),jt=u):Fn(e,t),Kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(fe=t,c=t.child;c!==null;){for(f=fe=c;fe!==null;){switch(d=fe,p=d.child,d.tag){case 0:case 11:case 14:case 15:Xo(4,d,d.return);break;case 1:Cs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){vt(i,n,y)}}break;case 5:Cs(d,d.return);break;case 22:if(d.memoizedState!==null){Wm(f);continue}}p!==null?(p.return=d,fe=p):Wm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=p_("display",o))}catch(y){vt(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){vt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),Kn(t),i&4&&Hm(t);break;case 21:break;default:Fn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vy(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ta(r,""),i.flags&=-33);var s=zm(t);Cd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=zm(t);Ad(t,a,o);break;default:throw Error(J(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DT(t,e,n){fe=t,Gy(t)}function Gy(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=nl;var u=jt;if(nl=o,(jt=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?jm(r):l!==null?(l.return=o,fe=l):jm(r);for(;s!==null;)fe=s,Gy(s),s=s.sibling;fe=r,nl=a,jt=u}Gm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Gm(t)}}function Gm(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||$u(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}jt||e.flags&512&&wd(e)}catch(d){vt(e,e.return,d)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function Wm(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function jm(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$u(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{wd(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{wd(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var NT=Math.ceil,_u=Li.ReactCurrentDispatcher,Bh=Li.ReactCurrentOwner,Dn=Li.ReactCurrentBatchConfig,Ge=0,Nt=null,Et=null,Ft=0,hn=0,Rs=dr(0),At=0,ga=null,jr=0,qu=0,Vh=0,Yo=null,tn=null,zh=0,Qs=1/0,vi=null,yu=!1,Rd=null,er=null,il=!1,Yi=null,xu=0,$o=0,Pd=null,jl=-1,Xl=0;function Kt(){return Ge&6?xt():jl!==-1?jl:jl=xt()}function tr(t){return t.mode&1?Ge&2&&Ft!==0?Ft&-Ft:gT.transition!==null?(Xl===0&&(Xl=C_()),Xl):(t=$e,t!==0||(t=window.event,t=t===void 0?16:I_(t.type)),t):1}function Xn(t,e,n,i){if(50<$o)throw $o=0,Pd=null,Error(J(185));Ea(t,n,i),(!(Ge&2)||t!==Nt)&&(t===Nt&&(!(Ge&2)&&(qu|=n),At===4&&Wi(t,Ft)),ln(t,i),n===1&&Ge===0&&!(e.mode&1)&&(Qs=xt()+500,ju&&hr()))}function ln(t,e){var n=t.callbackNode;gE(t,e);var i=iu(t,t===Nt?Ft:0);if(i===0)n!==null&&em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&em(n),e===1)t.tag===0?mT(Xm.bind(null,t)):J_(Xm.bind(null,t)),fT(function(){!(Ge&6)&&hr()}),n=null;else{switch(R_(i)){case 1:n=hh;break;case 4:n=w_;break;case 16:n=nu;break;case 536870912:n=A_;break;default:n=nu}n=Zy(n,Wy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wy(t,e){if(jl=-1,Xl=0,Ge&6)throw Error(J(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=iu(t,t===Nt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Su(t,i);else{e=i;var r=Ge;Ge|=2;var s=Xy();(Nt!==t||Ft!==e)&&(vi=null,Qs=xt()+500,Br(t,e));do try{FT();break}catch(a){jy(t,a)}while(!0);Ah(),_u.current=s,Ge=r,Et!==null?e=0:(Nt=null,Ft=0,e=At)}if(e!==0){if(e===2&&(r=nd(t),r!==0&&(i=r,e=bd(t,r))),e===1)throw n=ga,Br(t,0),Wi(t,i),ln(t,xt()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!IT(r)&&(e=Su(t,i),e===2&&(s=nd(t),s!==0&&(i=s,e=bd(t,s))),e===1))throw n=ga,Br(t,0),Wi(t,i),ln(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Ar(t,tn,vi);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=zh+500-xt(),10<e)){if(iu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cd(Ar.bind(null,t,tn,vi),e);break}Ar(t,tn,vi);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*NT(i/1960))-i,10<i){t.timeoutHandle=cd(Ar.bind(null,t,tn,vi),i);break}Ar(t,tn,vi);break;case 5:Ar(t,tn,vi);break;default:throw Error(J(329))}}}return ln(t,xt()),t.callbackNode===n?Wy.bind(null,t):null}function bd(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Su(t,e),t!==2&&(e=tn,tn=n,e!==null&&Ld(e)),t}function Ld(t){tn===null?tn=t:tn.push.apply(tn,t)}function IT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~Vh,e&=~qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Xm(t){if(Ge&6)throw Error(J(327));Hs();var e=iu(t,0);if(!(e&1))return ln(t,xt()),null;var n=Su(t,e);if(t.tag!==0&&n===2){var i=nd(t);i!==0&&(e=i,n=bd(t,i))}if(n===1)throw n=ga,Br(t,0),Wi(t,e),ln(t,xt()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,tn,vi),ln(t,xt()),null}function Hh(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(Qs=xt()+500,ju&&hr())}}function Xr(t){Yi!==null&&Yi.tag===0&&!(Ge&6)&&Hs();var e=Ge;Ge|=1;var n=Dn.transition,i=$e;try{if(Dn.transition=null,$e=1,t)return t()}finally{$e=i,Dn.transition=n,Ge=e,!(Ge&6)&&hr()}}function Gh(){hn=Rs.current,rt(Rs)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cT(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(Eh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lu();break;case 3:Ks(),rt(on),rt(Yt),Dh();break;case 5:Lh(i);break;case 4:Ks();break;case 13:rt(dt);break;case 19:rt(dt);break;case 10:Ch(i.type._context);break;case 22:case 23:Gh()}n=n.return}if(Nt=t,Et=t=nr(t.current,null),Ft=hn=e,At=0,ga=null,Vh=qu=jr=0,tn=Yo=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ir=null}return t}function jy(t,e){do{var n=Et;try{if(Ah(),Hl.current=vu,gu){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gu=!1}if(Wr=0,Dt=wt=ht=null,jo=!1,ha=0,Bh.current=null,n===null||n.return===null){At=1,ga=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Nm(o);if(p!==null){p.flags&=-257,Im(p,o,a,s,e),p.mode&1&&Dm(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Dm(s,u,e),Wh();break e}l=Error(J(426))}}else if(lt&&a.mode&1){var m=Nm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Im(m,o,a,s,e),Th(Zs(l,a));break e}}s=l=Zs(l,a),At!==4&&(At=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Ry(s,l,e);Am(s,h);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(er===null||!er.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Py(s,a,e);Am(s,S);break e}}s=s.return}while(s!==null)}$y(n)}catch(C){e=C,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function Xy(){var t=_u.current;return _u.current=vu,t===null?vu:t}function Wh(){(At===0||At===3||At===2)&&(At=4),Nt===null||!(jr&268435455)&&!(qu&268435455)||Wi(Nt,Ft)}function Su(t,e){var n=Ge;Ge|=2;var i=Xy();(Nt!==t||Ft!==e)&&(vi=null,Br(t,e));do try{UT();break}catch(r){jy(t,r)}while(!0);if(Ah(),Ge=n,_u.current=i,Et!==null)throw Error(J(261));return Nt=null,Ft=0,At}function UT(){for(;Et!==null;)Yy(Et)}function FT(){for(;Et!==null&&!aE();)Yy(Et)}function Yy(t){var e=Ky(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?$y(t):Et=e,Bh.current=null}function $y(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PT(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Et=null;return}}else if(n=RT(n,e,hn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);At===0&&(At=5)}function Ar(t,e,n){var i=$e,r=Dn.transition;try{Dn.transition=null,$e=1,OT(t,e,n,i)}finally{Dn.transition=r,$e=i}return null}function OT(t,e,n,i){do Hs();while(Yi!==null);if(Ge&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vE(t,s),t===Nt&&(Et=Nt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||il||(il=!0,Zy(nu,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=$e;$e=1;var a=Ge;Ge|=4,Bh.current=null,LT(t,n),Hy(n,t),iT(ld),ru=!!ad,ld=ad=null,t.current=n,DT(n),lE(),Ge=a,$e=o,Dn.transition=s}else t.current=n;if(il&&(il=!1,Yi=t,xu=r),s=t.pendingLanes,s===0&&(er=null),fE(n.stateNode),ln(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yu)throw yu=!1,t=Rd,Rd=null,t;return xu&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===Pd?$o++:($o=0,Pd=t):$o=0,hr(),null}function Hs(){if(Yi!==null){var t=R_(xu),e=Dn.transition,n=$e;try{if(Dn.transition=null,$e=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,xu=0,Ge&6)throw Error(J(331));var r=Ge;for(Ge|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:Xo(8,c,s)}var f=c.child;if(f!==null)f.return=c,fe=f;else for(;fe!==null;){c=fe;var d=c.sibling,p=c.return;if(By(c),c===u){fe=null;break}if(d!==null){d.return=p,fe=d;break}fe=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,fe=h;break e}fe=s.return}}var v=t.current;for(fe=v;fe!==null;){o=fe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,fe=g;else e:for(o=v;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$u(9,a)}}catch(C){vt(a,a.return,C)}if(a===o){fe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,fe=S;break e}fe=a.return}}if(Ge=r,hr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Vu,t)}catch{}i=!0}return i}finally{$e=n,Dn.transition=e}}return!1}function Ym(t,e,n){e=Zs(n,e),e=Ry(t,e,1),t=Ji(t,e,1),e=Kt(),t!==null&&(Ea(t,1,e),ln(t,e))}function vt(t,e,n){if(t.tag===3)Ym(t,t,n);else for(;e!==null;){if(e.tag===3){Ym(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=Zs(n,t),t=Py(e,t,1),e=Ji(e,t,1),t=Kt(),e!==null&&(Ea(e,1,t),ln(e,t));break}}e=e.return}}function kT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ft&n)===n&&(At===4||At===3&&(Ft&130023424)===Ft&&500>xt()-zh?Br(t,0):Vh|=n),ln(t,e)}function qy(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=Kt();t=Ai(t,e),t!==null&&(Ea(t,e,n),ln(t,n))}function BT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qy(t,n)}function VT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),qy(t,n)}var Ky;Ky=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,CT(t,e,n);sn=!!(t.flags&131072)}else sn=!1,lt&&e.flags&1048576&&ey(e,fu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wl(t,e),t=e.pendingProps;var r=Ys(e,Yt.current);zs(e,n),r=Ih(null,e,i,t,r,n);var s=Uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,uu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ph(e),r.updater=Yu,e.stateNode=r,r._reactInternals=e,vd(e,i,t,n),e=xd(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&Mh(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HT(i),t=zn(i,t),r){case 0:e=yd(null,e,i,t,n);break e;case 1:e=Om(null,e,i,t,n);break e;case 11:e=Um(null,e,i,t,n);break e;case 14:e=Fm(null,e,i,zn(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),yd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Om(t,e,i,r,n);case 3:e:{if(Ny(e),t===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,oy(t,e),pu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(J(423)),e),e=km(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(J(424)),e),e=km(t,e,i,n,r);break e}else for(pn=Qi(e.stateNode.containerInfo.firstChild),gn=e,lt=!0,Gn=null,n=ry(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=Ci(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return ay(e),t===null&&pd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ud(i,r)?o=null:s!==null&&ud(i,s)&&(e.flags|=32),Dy(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&pd(e),null;case 13:return Iy(t,e,n);case 4:return bh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Um(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Je(du,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!on.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),md(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),md(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zs(e,n),r=In(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Fm(t,e,i,r,n);case 15:return by(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Wl(t,e),e.tag=1,an(i)?(t=!0,uu(e)):t=!1,zs(e,n),Cy(e,i,r),vd(e,i,r,n),xd(null,e,i,!0,t,n);case 19:return Uy(t,e,n);case 22:return Ly(t,e,n)}throw Error(J(156,e.tag))};function Zy(t,e){return T_(t,e)}function zT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new zT(t,e,n,i)}function jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HT(t){if(typeof t=="function")return jh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ch)return 11;if(t===fh)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")jh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Vr(n.children,r,s,e);case uh:o=8,r|=8;break;case zf:return t=bn(12,n,e,r|2),t.elementType=zf,t.lanes=s,t;case Hf:return t=bn(13,n,e,r),t.elementType=Hf,t.lanes=s,t;case Gf:return t=bn(19,n,e,r),t.elementType=Gf,t.lanes=s,t;case a_:return Ku(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case s_:o=10;break e;case o_:o=9;break e;case ch:o=11;break e;case fh:o=14;break e;case zi:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function Ku(t,e,n,i){return t=bn(22,t,i,e),t.elementType=a_,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xh(t,e,n,i,r,s,o,a,l){return t=new GT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ph(s),t}function WT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qy(t){if(!t)return ar;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(an(n))return Q_(t,n,e)}return e}function Jy(t,e,n,i,r,s,o,a,l){return t=Xh(n,i,!0,t,r,s,o,a,l),t.context=Qy(null),n=t.current,i=Kt(),r=tr(n),s=Ei(i,r),s.callback=e??null,Ji(n,s,r),t.current.lanes=r,Ea(t,r,i),ln(t,i),t}function Zu(t,e,n,i){var r=e.current,s=Kt(),o=tr(r);return n=Qy(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,o),t!==null&&(Xn(t,r,o,s),zl(t,r,o)),o}function Mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yh(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function jT(){return null}var ex=typeof reportError=="function"?reportError:function(t){console.error(t)};function $h(t){this._internalRoot=t}Qu.prototype.render=$h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));Zu(t,e,null,null)};Qu.prototype.unmount=$h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){Zu(null,t,null,null)}),e[wi]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=L_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&N_(t)}};function qh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qm(){}function XT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Mu(o);s.call(u)}}var o=Jy(e,i,t,0,null,!1,!1,"",qm);return t._reactRootContainer=o,t[wi]=o.current,la(t.nodeType===8?t.parentNode:t),Xr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Mu(l);a.call(u)}}var l=Xh(t,0,!1,null,null,!1,!1,"",qm);return t._reactRootContainer=l,t[wi]=l.current,la(t.nodeType===8?t.parentNode:t),Xr(function(){Zu(e,l,n,i)}),l}function ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Mu(o);a.call(l)}}Zu(e,o,t,r)}else o=XT(n,e,t,r,i);return Mu(o)}P_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(ph(e,n|1),ln(e,xt()),!(Ge&6)&&(Qs=xt()+500,hr()))}break;case 13:Xr(function(){var i=Ai(t,1);if(i!==null){var r=Kt();Xn(i,t,1,r)}}),Yh(t,1)}};mh=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=Kt();Xn(e,t,134217728,n)}Yh(t,134217728)}};b_=function(t){if(t.tag===13){var e=tr(t),n=Ai(t,e);if(n!==null){var i=Kt();Xn(n,t,e,i)}Yh(t,e)}};L_=function(){return $e};D_=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};Jf=function(t,e,n){switch(e){case"input":if(Xf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wu(i);if(!r)throw Error(J(90));u_(i),Xf(i,r)}}}break;case"textarea":f_(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};__=Hh;y_=Xr;var YT={usingClientEntryPoint:!1,Events:[wa,Ms,Wu,g_,v_,Hh]},To={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$T={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=M_(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||jT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Vu=rl.inject($T),ii=rl}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YT;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qh(e))throw Error(J(200));return WT(t,e,null,n)};Sn.createRoot=function(t,e){if(!qh(t))throw Error(J(299));var n=!1,i="",r=ex;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xh(t,1,!1,null,null,n,!1,i,r),t[wi]=e.current,la(t.nodeType===8?t.parentNode:t),new $h(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=M_(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Xr(t)};Sn.hydrate=function(t,e,n){if(!Ju(e))throw Error(J(200));return ec(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!qh(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ex;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Jy(e,null,t,1,n??null,r,!1,s,o),t[wi]=e.current,la(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Qu(e)};Sn.render=function(t,e,n){if(!Ju(e))throw Error(J(200));return ec(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(J(40));return t._reactRootContainer?(Xr(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1};Sn.unstable_batchedUpdates=Hh;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ju(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return ec(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function tx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tx)}catch(t){console.error(t)}}tx(),t_.exports=Sn;var qT=t_.exports,Km=qT;Bf.createRoot=Km.createRoot,Bf.hydrateRoot=Km.hydrateRoot;const Kh=K.createContext({});function Ca(t){const e=K.useRef(null);return e.current===null&&(e.current=t()),e.current}const tc=K.createContext(null),Ra=K.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class KT extends K.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ZT({children:t,isPresent:e}){const n=K.useId(),i=K.useRef(null),r=K.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=K.useContext(Ra);return K.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:u}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return s&&(c.nonce=s),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),D.jsx(KT,{isPresent:e,childRef:i,sizeRef:r,children:K.cloneElement(t,{ref:i})})}const QT=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Ca(JT),l=K.useId(),u=K.useCallback(f=>{a.set(f,!0);for(const d of a.values())if(!d)return;i&&i()},[a,i]),c=K.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:u,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),u]:[n,u]);return K.useMemo(()=>{a.forEach((f,d)=>a.set(d,!1))},[n]),K.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=D.jsx(ZT,{isPresent:n,children:t})),D.jsx(tc.Provider,{value:c,children:t})};function JT(){return new Map}function nx(t=!0){const e=K.useContext(tc);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=K.useId();K.useEffect(()=>{t&&r(s)},[t]);const o=K.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const sl=t=>t.key||"";function Zm(t){const e=[];return K.Children.forEach(t,n=>{K.isValidElement(n)&&e.push(n)}),e}const Zh=typeof window<"u",nc=Zh?K.useLayoutEffect:K.useEffect,e1=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=nx(o),u=K.useMemo(()=>Zm(t),[t]),c=o&&!a?[]:u.map(sl),f=K.useRef(!0),d=K.useRef(u),p=Ca(()=>new Map),[_,y]=K.useState(u),[m,h]=K.useState(u);nc(()=>{f.current=!1,d.current=u;for(let S=0;S<m.length;S++){const C=sl(m[S]);c.includes(C)?p.delete(C):p.get(C)!==!0&&p.set(C,!1)}},[m,c.length,c.join("-")]);const v=[];if(u!==_){let S=[...u];for(let C=0;C<m.length;C++){const T=m[C],A=sl(T);c.includes(A)||(S.splice(C,0,T),v.push(T))}s==="wait"&&v.length&&(S=v),h(Zm(S)),y(u);return}const{forceRender:g}=K.useContext(Kh);return D.jsx(D.Fragment,{children:m.map(S=>{const C=sl(S),T=o&&!a?!1:u===m||c.includes(C),A=()=>{if(p.has(C))p.set(C,!0);else return;let P=!0;p.forEach(E=>{E||(P=!1)}),P&&(g==null||g(),h(d.current),o&&(l==null||l()),i&&i())};return D.jsx(QT,{isPresent:T,initial:!f.current||n?void 0:!1,custom:T?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:T?void 0:A,children:S},C)})})},vn=t=>t;let ix=vn;function Qh(t){let e;return()=>(e===void 0&&(e=t()),e)}const Yr=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},si=t=>t*1e3,oi=t=>t/1e3,t1={useManualTiming:!1};function n1(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),t()),u(o)}const l={schedule:(u,c=!1,f=!1)=>{const p=f&&i?e:n;return c&&s.add(u),p.has(u)||p.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(u))}};return l}const ol=["read","resolveKeyframes","update","preRender","render","postRender"],i1=40;function rx(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=ol.reduce((h,v)=>(h[v]=n1(s),h),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:d}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,i1),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),f.process(r),d.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},_=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:ol.reduce((h,v)=>{const g=o[v];return h[v]=(S,C=!1,T=!1)=>(n||_(),g.schedule(S,C,T)),h},{}),cancel:h=>{for(let v=0;v<ol.length;v++)o[ol[v]].cancel(h)},state:r,steps:o}}const{schedule:Ze,cancel:Ri,state:Lt,steps:jc}=rx(typeof requestAnimationFrame<"u"?requestAnimationFrame:vn,!0),sx=K.createContext({strict:!1}),Qm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Js={};for(const t in Qm)Js[t]={isEnabled:e=>Qm[t].some(n=>!!e[n])};function r1(t){for(const e in t)Js[e]={...Js[e],...t[e]}}const s1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Eu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||s1.has(t)}let ox=t=>!Eu(t);function o1(t){t&&(ox=e=>e.startsWith("on")?!Eu(e):t(e))}try{o1(require("@emotion/is-prop-valid").default)}catch{}function a1(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(ox(r)||n===!0&&Eu(r)||!e&&!Eu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function l1(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const ic=K.createContext({});function va(t){return typeof t=="string"||Array.isArray(t)}function rc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Jh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ep=["initial",...Jh];function sc(t){return rc(t.animate)||ep.some(e=>va(t[e]))}function ax(t){return!!(sc(t)||t.variants)}function u1(t,e){if(sc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||va(n)?n:void 0,animate:va(i)?i:void 0}}return t.inherit!==!1?e:{}}function c1(t){const{initial:e,animate:n}=u1(t,K.useContext(ic));return K.useMemo(()=>({initial:e,animate:n}),[Jm(e),Jm(n)])}function Jm(t){return Array.isArray(t)?t.join(" "):t}const f1=Symbol.for("motionComponentSymbol");function Ps(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function d1(t,e,n){return K.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ps(n)&&(n.current=i))},[e])}const tp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),h1="framerAppearId",lx="data-"+tp(h1),{schedule:np}=rx(queueMicrotask,!1),ux=K.createContext({});function p1(t,e,n,i,r){var s,o;const{visualElement:a}=K.useContext(ic),l=K.useContext(sx),u=K.useContext(tc),c=K.useContext(Ra).reducedMotion,f=K.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const d=f.current,p=K.useContext(ux);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&m1(f.current,n,r,p);const _=K.useRef(!1);K.useInsertionEffect(()=>{d&&_.current&&d.update(n,u)});const y=n[lx],m=K.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return nc(()=>{d&&(_.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),np.render(d.render),m.current&&d.animationState&&d.animationState.animateChanges())}),K.useEffect(()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,y)}),m.current=!1))}),d}function m1(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:cx(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Ps(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}function cx(t){if(t)return t.options.allowProjection!==!1?t.projection:cx(t.parent)}function g1({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&r1(t);function a(u,c){let f;const d={...K.useContext(Ra),...u,layoutId:v1(u)},{isStatic:p}=d,_=c1(u),y=i(u,p);if(!p&&Zh){_1();const m=y1(d);f=m.MeasureLayout,_.visualElement=p1(r,y,d,e,m.ProjectionNode)}return D.jsxs(ic.Provider,{value:_,children:[f&&_.visualElement?D.jsx(f,{visualElement:_.visualElement,...d}):null,n(r,u,d1(y,_.visualElement,c),y,p,_.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=K.forwardRef(a);return l[f1]=r,l}function v1({layoutId:t}){const e=K.useContext(Kh).id;return e&&t!==void 0?e+"-"+t:t}function _1(t,e){K.useContext(sx).strict}function y1(t){const{drag:e,layout:n}=Js;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const x1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ip(t){return typeof t!="string"||t.includes("-")?!1:!!(x1.indexOf(t)>-1||/[A-Z]/u.test(t))}function eg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function rp(t,e,n,i){if(typeof e=="function"){const[r,s]=eg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=eg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Dd=t=>Array.isArray(t),S1=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),M1=t=>Dd(t)?t[t.length-1]||0:t,_t=t=>!!(t&&t.getVelocity);function $l(t){const e=_t(t)?t.get():t;return S1(e)?e.toValue():e}function E1({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:T1(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const fx=t=>(e,n)=>{const i=K.useContext(ic),r=K.useContext(tc),s=()=>E1(t,e,i,r);return n?s():Ca(s)};function T1(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=$l(s[d]);let{initial:o,animate:a}=t;const l=sc(t),u=ax(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;if(f&&typeof f!="boolean"&&!rc(f)){const d=Array.isArray(f)?f:[f];for(let p=0;p<d.length;p++){const _=rp(t,d[p]);if(_){const{transitionEnd:y,transition:m,...h}=_;for(const v in h){let g=h[v];if(Array.isArray(g)){const S=c?g.length-1:0;g=g[S]}g!==null&&(r[v]=g)}for(const v in y)r[v]=y[v]}}}return r}const co=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Zr=new Set(co),dx=t=>e=>typeof e=="string"&&e.startsWith(t),hx=dx("--"),w1=dx("var(--"),sp=t=>w1(t)?A1.test(t.split("/*")[0].trim()):!1,A1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,px=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Pi=(t,e,n)=>n>e?e:n<t?t:n,fo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},_a={...fo,transform:t=>Pi(0,1,t)},al={...fo,default:1},Pa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Vi=Pa("deg"),ai=Pa("%"),Se=Pa("px"),C1=Pa("vh"),R1=Pa("vw"),tg={...ai,parse:t=>ai.parse(t)/100,transform:t=>ai.transform(t*100)},P1={borderWidth:Se,borderTopWidth:Se,borderRightWidth:Se,borderBottomWidth:Se,borderLeftWidth:Se,borderRadius:Se,radius:Se,borderTopLeftRadius:Se,borderTopRightRadius:Se,borderBottomRightRadius:Se,borderBottomLeftRadius:Se,width:Se,maxWidth:Se,height:Se,maxHeight:Se,top:Se,right:Se,bottom:Se,left:Se,padding:Se,paddingTop:Se,paddingRight:Se,paddingBottom:Se,paddingLeft:Se,margin:Se,marginTop:Se,marginRight:Se,marginBottom:Se,marginLeft:Se,backgroundPositionX:Se,backgroundPositionY:Se},b1={rotate:Vi,rotateX:Vi,rotateY:Vi,rotateZ:Vi,scale:al,scaleX:al,scaleY:al,scaleZ:al,skew:Vi,skewX:Vi,skewY:Vi,distance:Se,translateX:Se,translateY:Se,translateZ:Se,x:Se,y:Se,z:Se,perspective:Se,transformPerspective:Se,opacity:_a,originX:tg,originY:tg,originZ:Se},ng={...fo,transform:Math.round},op={...P1,...b1,zIndex:ng,size:Se,fillOpacity:_a,strokeOpacity:_a,numOctaves:ng},L1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},D1=co.length;function N1(t,e,n){let i="",r=!0;for(let s=0;s<D1;s++){const o=co[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=px(a,op[o]);if(!l){r=!1;const c=L1[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function ap(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(Zr.has(l)){o=!0;continue}else if(hx(l)){r[l]=u;continue}else{const c=px(u,op[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=N1(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}const I1={offset:"stroke-dashoffset",array:"stroke-dasharray"},U1={offset:"strokeDashoffset",array:"strokeDasharray"};function F1(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?I1:U1;t[s.offset]=Se.transform(-i);const o=Se.transform(e),a=Se.transform(n);t[s.array]=`${o} ${a}`}function ig(t,e,n){return typeof t=="string"?t:Se.transform(e+n*t)}function O1(t,e,n){const i=ig(e,t.x,t.width),r=ig(n,t.y,t.height);return`${i} ${r}`}function lp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,f){if(ap(t,u,f),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:p,dimensions:_}=t;d.transform&&(_&&(p.transform=d.transform),delete d.transform),_&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=O1(_,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),o!==void 0&&F1(d,o,a,l,!1)}const up=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),mx=()=>({...up(),attrs:{}}),cp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function gx(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const vx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function _x(t,e,n,i){gx(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(vx.has(r)?r:tp(r),e.attrs[r])}const Tu={};function k1(t){Object.assign(Tu,t)}function yx(t,{layout:e,layoutId:n}){return Zr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Tu[t]||t==="opacity")}function fp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(_t(r[o])||e.style&&_t(e.style[o])||yx(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function xx(t,e,n){const i=fp(t,e,n);for(const r in t)if(_t(t[r])||_t(e[r])){const s=co.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function B1(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const rg=["x","y","width","height","cx","cy","r"],V1={useVisualState:fx({scrapeMotionValuesFromProps:xx,createRenderState:mx,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(Zr.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<rg.length;a++){const l=rg[a];t[l]!==e[l]&&(o=!0)}o&&Ze.read(()=>{B1(n,i),Ze.render(()=>{lp(i,r,cp(n.tagName),t.transformTemplate),_x(n,i)})})}})},z1={useVisualState:fx({scrapeMotionValuesFromProps:fp,createRenderState:up})};function Sx(t,e,n){for(const i in e)!_t(e[i])&&!yx(i,n)&&(t[i]=e[i])}function H1({transformTemplate:t},e){return K.useMemo(()=>{const n=up();return ap(n,e,t),Object.assign({},n.vars,n.style)},[e])}function G1(t,e){const n=t.style||{},i={};return Sx(i,n,t),Object.assign(i,H1(t,e)),i}function W1(t,e){const n={},i=G1(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function j1(t,e,n,i){const r=K.useMemo(()=>{const s=mx();return lp(s,e,cp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Sx(s,t.style,t),r.style={...s,...r.style}}return r}function X1(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(ip(n)?j1:W1)(i,s,o,n),u=a1(i,typeof n=="string",t),c=n!==K.Fragment?{...u,...l,ref:r}:{},{children:f}=i,d=K.useMemo(()=>_t(f)?f.get():f,[f]);return K.createElement(n,{...c,children:d})}}function Y1(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...ip(i)?V1:z1,preloadedFeatures:t,useRender:X1(r),createVisualElement:e,Component:i};return g1(o)}}function Mx(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function oc(t,e,n){const i=t.getProps();return rp(i,e,n!==void 0?n:i.custom,t)}const $1=Qh(()=>window.ScrollTimeline!==void 0);class q1{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if($1()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Ex extends q1{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function dp(t,e){return t?t[e]||t.default||t:void 0}const wu=2e4;function hp(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<wu;)e+=n,i=t.next(e);return e>=wu?1/0:e}function K1(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(hp(i),wu);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:oi(r)}}function ac(t){return typeof t=="function"}function sg(t,e){t.timeline=e,t.onfinish=null}const pp=t=>Array.isArray(t)&&typeof t[0]=="number",Z1={linearEasing:void 0};function Q1(t,e){const n=Qh(t);return()=>{var i;return(i=Z1[e])!==null&&i!==void 0?i:n()}}const Au=Q1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Tx=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(Yr(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function wx(t){return!!(typeof t=="function"&&Au()||!t||typeof t=="string"&&(t in Nd||Au())||pp(t)||Array.isArray(t)&&t.every(wx))}const Fo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Nd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fo([0,.65,.55,1]),circOut:Fo([.55,0,1,.45]),backIn:Fo([.31,.01,.66,-.59]),backOut:Fo([.33,1.53,.69,.99])};function Ax(t,e){if(t)return typeof t=="function"&&Au()?Tx(t,e):pp(t)?Fo(t):Array.isArray(t)?t.map(n=>Ax(n,e)||Nd.easeOut):Nd[t]}const Vn={x:!1,y:!1};function Cx(){return Vn.x||Vn.y}function mp(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=n==null?void 0:n[t])!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function Rx(t,e){const n=mp(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function og(t){return e=>{e.pointerType==="touch"||Cx()||t(e)}}function J1(t,e,n={}){const[i,r,s]=Rx(t,n),o=og(a=>{const{target:l}=a,u=e(a);if(typeof u!="function"||!l)return;const c=og(f=>{u(f),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const Px=(t,e)=>e?t===e?!0:Px(t,e.parentElement):!1,gp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,ew=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function tw(t){return ew.has(t.tagName)||t.tabIndex!==-1}const Oo=new WeakSet;function ag(t){return e=>{e.key==="Enter"&&t(e)}}function Xc(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const nw=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=ag(()=>{if(Oo.has(n))return;Xc(n,"down");const r=ag(()=>{Xc(n,"up")}),s=()=>Xc(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function lg(t){return gp(t)&&!Cx()}function iw(t,e,n={}){const[i,r,s]=Rx(t,n),o=a=>{const l=a.currentTarget;if(!lg(a)||Oo.has(l))return;Oo.add(l);const u=e(a),c=(p,_)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),!(!lg(p)||!Oo.has(l))&&(Oo.delete(l),typeof u=="function"&&u(p,{success:_}))},f=p=>{c(p,n.useGlobalTarget||Px(l,p.target))},d=p=>{c(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{!tw(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",u=>nw(u,r),r)}),s}function rw(t){return t==="x"||t==="y"?Vn[t]?null:(Vn[t]=!0,()=>{Vn[t]=!1}):Vn.x||Vn.y?null:(Vn.x=Vn.y=!0,()=>{Vn.x=Vn.y=!1})}const bx=new Set(["width","height","top","left","right","bottom",...co]);let ql;function sw(){ql=void 0}const li={now:()=>(ql===void 0&&li.set(Lt.isProcessing||t1.useManualTiming?Lt.timestamp:performance.now()),ql),set:t=>{ql=t,queueMicrotask(sw)}};function vp(t,e){t.indexOf(e)===-1&&t.push(e)}function lc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class _p{constructor(){this.subscriptions=[]}add(e){return vp(this.subscriptions,e),()=>lc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Lx(t,e){return e?t*(1e3/e):0}const ug=30,ow=t=>!isNaN(parseFloat(t)),qo={current:void 0};class aw{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=li.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=li.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=ow(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new _p);const i=this.events[e].add(n);return e==="change"?()=>{i(),Ze.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return qo.current&&qo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=li.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ug)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ug);return Lx(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function eo(t,e){return new aw(t,e)}function lw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,eo(n))}function uw(t,e){const n=oc(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=M1(s[o]);lw(t,o,a)}}function cw(t){return!!(_t(t)&&t.add)}function Id(t,e){const n=t.getValue("willChange");if(cw(n))return n.add(e)}function Dx(t){return t.props[lx]}const Nx=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,fw=1e-7,dw=12;function hw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Nx(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>fw&&++a<dw);return o}function ba(t,e,n,i){if(t===e&&n===i)return vn;const r=s=>hw(s,0,1,t,n);return s=>s===0||s===1?s:Nx(r(s),e,i)}const Ix=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Ux=t=>e=>1-t(1-e),Fx=ba(.33,1.53,.69,.99),yp=Ux(Fx),Ox=Ix(yp),kx=t=>(t*=2)<1?.5*yp(t):.5*(2-Math.pow(2,-10*(t-1))),xp=t=>1-Math.sin(Math.acos(t)),Bx=Ux(xp),Vx=Ix(xp),zx=t=>/^0[^.\s]+$/u.test(t);function pw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||zx(t):!0}const Ko=t=>Math.round(t*1e5)/1e5,Sp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function mw(t){return t==null}const gw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mp=(t,e)=>n=>!!(typeof n=="string"&&gw.test(n)&&n.startsWith(t)||e&&!mw(n)&&Object.prototype.hasOwnProperty.call(n,e)),Hx=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Sp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},vw=t=>Pi(0,255,t),Yc={...fo,transform:t=>Math.round(vw(t))},Fr={test:Mp("rgb","red"),parse:Hx("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Yc.transform(t)+", "+Yc.transform(e)+", "+Yc.transform(n)+", "+Ko(_a.transform(i))+")"};function _w(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Ud={test:Mp("#"),parse:_w,transform:Fr.transform},bs={test:Mp("hsl","hue"),parse:Hx("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ai.transform(Ko(e))+", "+ai.transform(Ko(n))+", "+Ko(_a.transform(i))+")"},Wt={test:t=>Fr.test(t)||Ud.test(t)||bs.test(t),parse:t=>Fr.test(t)?Fr.parse(t):bs.test(t)?bs.parse(t):Ud.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Fr.transform(t):bs.transform(t)},yw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function xw(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Sp))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(yw))===null||n===void 0?void 0:n.length)||0)>0}const Gx="number",Wx="color",Sw="var",Mw="var(",cg="${}",Ew=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ya(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(Ew,l=>(Wt.test(l)?(i.color.push(s),r.push(Wx),n.push(Wt.parse(l))):l.startsWith(Mw)?(i.var.push(s),r.push(Sw),n.push(l)):(i.number.push(s),r.push(Gx),n.push(parseFloat(l))),++s,cg)).split(cg);return{values:n,split:a,indexes:i,types:r}}function jx(t){return ya(t).values}function Xx(t){const{split:e,types:n}=ya(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===Gx?s+=Ko(r[o]):a===Wx?s+=Wt.transform(r[o]):s+=r[o]}return s}}const Tw=t=>typeof t=="number"?0:t;function ww(t){const e=jx(t);return Xx(t)(e.map(Tw))}const lr={test:xw,parse:jx,createTransformer:Xx,getAnimatableNone:ww},Aw=new Set(["brightness","contrast","saturate","opacity"]);function Cw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Sp)||[];if(!i)return t;const r=n.replace(i,"");let s=Aw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Rw=/\b([a-z-]*)\(.*?\)/gu,Fd={...lr,getAnimatableNone:t=>{const e=t.match(Rw);return e?e.map(Cw).join(" "):t}},Pw={...op,color:Wt,backgroundColor:Wt,outlineColor:Wt,fill:Wt,stroke:Wt,borderColor:Wt,borderTopColor:Wt,borderRightColor:Wt,borderBottomColor:Wt,borderLeftColor:Wt,filter:Fd,WebkitFilter:Fd},Ep=t=>Pw[t];function Yx(t,e){let n=Ep(t);return n!==Fd&&(n=lr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const bw=new Set(["auto","none","0"]);function Lw(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!bw.has(s)&&ya(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=Yx(n,r)}const fg=t=>t===fo||t===Se,dg=(t,e)=>parseFloat(t.split(", ")[e]),hg=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return dg(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?dg(s[1],t):0}},Dw=new Set(["x","y","z"]),Nw=co.filter(t=>!Dw.has(t));function Iw(t){const e=[];return Nw.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const to={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:hg(4,13),y:hg(5,14)};to.translateX=to.x;to.translateY=to.y;const zr=new Set;let Od=!1,kd=!1;function $x(){if(kd){const t=Array.from(zr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=Iw(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}kd=!1,Od=!1,zr.forEach(t=>t.complete()),zr.clear()}function qx(){zr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(kd=!0)})}function Uw(){qx(),$x()}class Tp{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(zr.add(this),Od||(Od=!0,Ze.read(qx),Ze.resolveKeyframes($x))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),zr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,zr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Kx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Fw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Ow(t){const e=Fw.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function Zx(t,e,n=1){const[i,r]=Ow(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Kx(o)?parseFloat(o):o}return sp(r)?Zx(r,e,n+1):r}const Qx=t=>e=>e.test(t),kw={test:t=>t==="auto",parse:t=>t},Jx=[fo,Se,ai,Vi,R1,C1,kw],pg=t=>Jx.find(Qx(t));class eS extends Tp{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),sp(u))){const c=Zx(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!bx.has(i)||e.length!==2)return;const[r,s]=e,o=pg(r),a=pg(s);if(o!==a)if(fg(o)&&fg(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)pw(e[r])&&i.push(r);i.length&&Lw(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=to[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=to[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const mg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(lr.test(t)||t==="0")&&!t.startsWith("url("));function Bw(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Vw(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=mg(r,e),a=mg(s,e);return!o||!a?!1:Bw(t)||(n==="spring"||ac(n))&&i}const zw=t=>t!==null;function uc(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(zw),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const Hw=40;class tS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=li.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Hw?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Uw(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=li.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!Vw(e,i,r,s))if(o)this.options.duration=0;else{l&&l(uc(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const ut=(t,e,n)=>t+(e-t)*n;function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Gw({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=$c(l,a,t+1/3),s=$c(l,a,t),o=$c(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Cu(t,e){return n=>n>0?e:t}const qc=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},Ww=[Ud,Fr,bs],jw=t=>Ww.find(e=>e.test(t));function gg(t){const e=jw(t);if(!e)return!1;let n=e.parse(t);return e===bs&&(n=Gw(n)),n}const vg=(t,e)=>{const n=gg(t),i=gg(e);if(!n||!i)return Cu(t,e);const r={...n};return s=>(r.red=qc(n.red,i.red,s),r.green=qc(n.green,i.green,s),r.blue=qc(n.blue,i.blue,s),r.alpha=ut(n.alpha,i.alpha,s),Fr.transform(r))},Xw=(t,e)=>n=>e(t(n)),La=(...t)=>t.reduce(Xw),Bd=new Set(["none","hidden"]);function Yw(t,e){return Bd.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function $w(t,e){return n=>ut(t,e,n)}function wp(t){return typeof t=="number"?$w:typeof t=="string"?sp(t)?Cu:Wt.test(t)?vg:Zw:Array.isArray(t)?nS:typeof t=="object"?Wt.test(t)?vg:qw:Cu}function nS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>wp(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function qw(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=wp(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function Kw(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const Zw=(t,e)=>{const n=lr.createTransformer(e),i=ya(t),r=ya(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Bd.has(t)&&!r.values.length||Bd.has(e)&&!i.values.length?Yw(t,e):La(nS(Kw(i,r),r.values),n):Cu(t,e)};function iS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ut(t,e,n):wp(t)(t,e)}const Qw=5;function rS(t,e,n){const i=Math.max(e-Qw,0);return Lx(n-t(i),e-i)}const gt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Kc=.001;function Jw({duration:t=gt.duration,bounce:e=gt.bounce,velocity:n=gt.velocity,mass:i=gt.mass}){let r,s,o=1-e;o=Pi(gt.minDamping,gt.maxDamping,o),t=Pi(gt.minDuration,gt.maxDuration,oi(t)),o<1?(r=u=>{const c=u*o,f=c*t,d=c-n,p=Vd(u,o),_=Math.exp(-f);return Kc-d/p*_},s=u=>{const f=u*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,_=Math.exp(-f),y=Vd(Math.pow(u,2),o);return(-r(u)+Kc>0?-1:1)*((d-p)*_)/y}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-Kc+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=tA(r,s,a);if(t=si(t),isNaN(l))return{stiffness:gt.stiffness,damping:gt.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const eA=12;function tA(t,e,n){let i=n;for(let r=1;r<eA;r++)i=i-t(i)/e(i);return i}function Vd(t,e){return t*Math.sqrt(1-e*e)}const nA=["duration","bounce"],iA=["stiffness","damping","mass"];function _g(t,e){return e.some(n=>t[n]!==void 0)}function rA(t){let e={velocity:gt.velocity,stiffness:gt.stiffness,damping:gt.damping,mass:gt.mass,isResolvedFromDuration:!1,...t};if(!_g(t,iA)&&_g(t,nA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Pi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:gt.mass,stiffness:r,damping:s}}else{const n=Jw(t);e={...e,...n,mass:gt.mass},e.isResolvedFromDuration=!0}return e}function Ap(t=gt.visualDuration,e=gt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:f,velocity:d,isResolvedFromDuration:p}=rA({...n,velocity:-oi(n.velocity||0)}),_=d||0,y=u/(2*Math.sqrt(l*c)),m=o-s,h=oi(Math.sqrt(l/c)),v=Math.abs(m)<5;i||(i=v?gt.restSpeed.granular:gt.restSpeed.default),r||(r=v?gt.restDelta.granular:gt.restDelta.default);let g;if(y<1){const C=Vd(h,y);g=T=>{const A=Math.exp(-y*h*T);return o-A*((_+y*h*m)/C*Math.sin(C*T)+m*Math.cos(C*T))}}else if(y===1)g=C=>o-Math.exp(-h*C)*(m+(_+h*m)*C);else{const C=h*Math.sqrt(y*y-1);g=T=>{const A=Math.exp(-y*h*T),P=Math.min(C*T,300);return o-A*((_+y*h*m)*Math.sinh(P)+C*m*Math.cosh(P))/C}}const S={calculatedDuration:p&&f||null,next:C=>{const T=g(C);if(p)a.done=C>=f;else{let A=0;y<1&&(A=C===0?si(_):rS(g,C,T));const P=Math.abs(A)<=i,E=Math.abs(o-T)<=r;a.done=P&&E}return a.value=a.done?o:T,a},toString:()=>{const C=Math.min(hp(S),wu),T=Tx(A=>S.next(C*A).value,C,30);return C+"ms "+T}};return S}function yg({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],d={done:!1,value:f},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,_=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=n*e;const m=f+y,h=o===void 0?m:o(m);h!==m&&(y=h-f);const v=P=>-y*Math.exp(-P/i),g=P=>h+v(P),S=P=>{const E=v(P),x=g(P);d.done=Math.abs(E)<=u,d.value=d.done?h:x};let C,T;const A=P=>{p(d.value)&&(C=P,T=Ap({keyframes:[d.value,_(d.value)],velocity:rS(g,P,d.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return A(0),{calculatedDuration:null,next:P=>{let E=!1;return!T&&C===void 0&&(E=!0,S(P),A(P)),C!==void 0&&P>=C?T.next(P-C):(!E&&S(P),d)}}}const sA=ba(.42,0,1,1),oA=ba(0,0,.58,1),sS=ba(.42,0,.58,1),oS=t=>Array.isArray(t)&&typeof t[0]!="number",aA={linear:vn,easeIn:sA,easeInOut:sS,easeOut:oA,circIn:xp,circInOut:Vx,circOut:Bx,backIn:yp,backInOut:Ox,backOut:Fx,anticipate:kx},xg=t=>{if(pp(t)){ix(t.length===4);const[e,n,i,r]=t;return ba(e,n,i,r)}else if(typeof t=="string")return aA[t];return t};function lA(t,e,n){const i=[],r=n||iS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||vn:e;a=La(l,a)}i.push(a)}return i}function aS(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(ix(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=lA(e,i,r),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(c<t[f+1]);f++);const d=Yr(t[f],t[f+1],c);return a[f](d)};return n?c=>u(Pi(t[0],t[s-1],c)):u}function lS(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Yr(0,e,i);t.push(ut(n,1,r))}}function uS(t){const e=[0];return lS(e,t.length-1),e}function uA(t,e){return t.map(n=>n*e)}function cA(t,e){return t.map(()=>e||sS).splice(0,t.length-1)}function Ru({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=oS(i)?i.map(xg):xg(i),s={done:!1,value:e[0]},o=uA(n&&n.length===e.length?n:uS(e),t),a=aS(o,e,{ease:Array.isArray(r)?r:cA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const fA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Ze.update(e,!0),stop:()=>Ri(e),now:()=>Lt.isProcessing?Lt.timestamp:li.now()}},dA={decay:yg,inertia:yg,tween:Ru,keyframes:Ru,spring:Ap},hA=t=>t/100;class cc extends tS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Tp,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=ac(n)?n:dA[n]||Ru;let l,u;a!==Ru&&typeof e[0]!="number"&&(l=La(hA,iS(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});s==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=hp(c));const{calculatedDuration:f}=c,d=f+r,p=d*(i+1)-r;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:p,repeatType:_,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?h<0:h>c;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let g=this.currentTime,S=s;if(p){const P=Math.min(this.currentTime,c)/f;let E=Math.floor(P),x=P%1;!x&&P>=1&&(x=1),x===1&&E--,E=Math.min(E,p+1),!!(E%2)&&(_==="reverse"?(x=1-x,y&&(x-=y/f)):_==="mirror"&&(S=o)),g=Pi(0,1,x)*f}const C=v?{done:!1,value:l[0]}:S.next(g);a&&(C.value=a(C.value));let{done:T}=C;!v&&u!==null&&(T=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return A&&r!==void 0&&(C.value=uc(l,this.options,r)),m&&m(C.value),A&&this.finish(),C}get duration(){const{resolved:e}=this;return e?oi(e.calculatedDuration):0}get time(){return oi(this.currentTime)}set time(e){e=si(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=oi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=fA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function pA(t){return new cc(t)}const mA=new Set(["opacity","clipPath","filter","transform"]);function gA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=Ax(a,r);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const vA=Qh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Pu=10,_A=2e4;function yA(t){return ac(t.type)||t.type==="spring"||!wx(t.ease)}function xA(t,e){const n=new cc({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<_A;)i=n.sample(s),r.push(i.value),s+=Pu;return{times:void 0,keyframes:r,duration:s-Pu,ease:"linear"}}const cS={anticipate:kx,backInOut:Ox,circInOut:Vx};function SA(t){return t in cS}class Sg extends tS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new eS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Au()&&SA(s)&&(s=cS[s]),yA(this.options)){const{onComplete:f,onUpdate:d,motionValue:p,element:_,...y}=this.options,m=xA(e,y);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const c=gA(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(sg(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:f}=this.options;a.set(uc(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return oi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return oi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=si(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return vn;const{animation:i}=n;sg(i,e)}return vn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:d,...p}=this.options,_=new cc({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=si(this.time);u.setWithVelocity(_.sample(y-Pu).value,_.sample(y).value,Pu)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return vA()&&i&&mA.has(i)&&!l&&!u&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const MA={type:"spring",stiffness:500,damping:25,restSpeed:10},EA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),TA={type:"keyframes",duration:.8},wA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},AA=(t,{keyframes:e})=>e.length>2?TA:Zr.has(t)?t.startsWith("scale")?EA(e[1]):MA:wA;function CA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const Cp=(t,e,n,i={},r,s)=>o=>{const a=dp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-si(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};CA(a)||(c={...c,...AA(t,c)}),c.duration&&(c.duration=si(c.duration)),c.repeatDelay&&(c.repeatDelay=si(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const d=uc(c.keyframes,a);if(d!==void 0)return Ze.update(()=>{c.onUpdate(d),c.onComplete()}),new Ex([])}return!s&&Sg.supports(c)?new Sg(c):new cc(c)};function RA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Rp(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const d=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),p=l[f];if(p===void 0||c&&RA(c,f))continue;const _={delay:n,...dp(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const h=Dx(t);if(h){const v=window.MotionHandoffAnimation(h,f,Ze);v!==null&&(_.startTime=v,y=!0)}}Id(t,f),d.start(Cp(f,d,p,t.shouldReduceMotion&&bx.has(f)?{type:!1}:_,t,y));const m=d.animation;m&&u.push(m)}return a&&Promise.all(u).then(()=>{Ze.update(()=>{a&&uw(t,a)})}),u}function zd(t,e,n={}){var i;const r=oc(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(Rp(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:d}=s;return PA(t,e,c+u,f,d,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function PA(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(bA).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(zd(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function bA(t,e){return t.sortNodePosition(e)}function LA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>zd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=zd(t,e,n);else{const r=typeof e=="function"?oc(t,e,n.custom):e;i=Promise.all(Rp(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const DA=ep.length;function fS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?fS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<DA;n++){const i=ep[n],r=t.props[i];(va(r)||r===!1)&&(e[i]=r)}return e}const NA=[...Jh].reverse(),IA=Jh.length;function UA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>LA(t,n,i)))}function FA(t){let e=UA(t),n=Mg(),i=!0;const r=l=>(u,c)=>{var f;const d=oc(t,c,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:p,transitionEnd:_,...y}=d;u={...u,...y,..._}}return u};function s(l){e=l(t)}function o(l){const{props:u}=t,c=fS(t.parent)||{},f=[],d=new Set;let p={},_=1/0;for(let m=0;m<IA;m++){const h=NA[m],v=n[h],g=u[h]!==void 0?u[h]:c[h],S=va(g),C=h===l?v.isActive:null;C===!1&&(_=m);let T=g===c[h]&&g!==u[h]&&S;if(T&&i&&t.manuallyAnimateOnMount&&(T=!1),v.protectedKeys={...p},!v.isActive&&C===null||!g&&!v.prevProp||rc(g)||typeof g=="boolean")continue;const A=OA(v.prevProp,g);let P=A||h===l&&v.isActive&&!T&&S||m>_&&S,E=!1;const x=Array.isArray(g)?g:[g];let I=x.reduce(r(h),{});C===!1&&(I={});const{prevResolvedValues:j={}}=v,N={...j,...I},Y=X=>{P=!0,d.has(X)&&(E=!0,d.delete(X)),v.needsAnimating[X]=!0;const L=t.getValue(X);L&&(L.liveStyle=!1)};for(const X in N){const L=I[X],H=j[X];if(p.hasOwnProperty(X))continue;let G=!1;Dd(L)&&Dd(H)?G=!Mx(L,H):G=L!==H,G?L!=null?Y(X):d.add(X):L!==void 0&&d.has(X)?Y(X):v.protectedKeys[X]=!0}v.prevProp=g,v.prevResolvedValues=I,v.isActive&&(p={...p,...I}),i&&t.blockInitialAnimation&&(P=!1),P&&(!(T&&A)||E)&&f.push(...x.map(X=>({animation:X,options:{type:h}})))}if(d.size){const m={};d.forEach(h=>{const v=t.getBaseTarget(h),g=t.getValue(h);g&&(g.liveStyle=!0),m[h]=v??null}),f.push({animation:m})}let y=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(f):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=t.variantChildren)===null||c===void 0||c.forEach(d=>{var p;return(p=d.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const f=o(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Mg(),i=!0}}}function OA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Mx(e,t):!1}function _r(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Mg(){return{animate:_r(!0),whileInView:_r(),whileHover:_r(),whileTap:_r(),whileDrag:_r(),whileFocus:_r(),exit:_r()}}class pr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class kA extends pr{constructor(e){super(e),e.animationState||(e.animationState=FA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();rc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let BA=0;class VA extends pr{constructor(){super(...arguments),this.id=BA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const zA={animation:{Feature:kA},exit:{Feature:VA}};function xa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Da(t){return{point:{x:t.pageX,y:t.pageY}}}const HA=t=>e=>gp(e)&&t(e,Da(e));function Zo(t,e,n,i){return xa(t,e,HA(n),i)}const Eg=(t,e)=>Math.abs(t-e);function GA(t,e){const n=Eg(t.x,e.x),i=Eg(t.y,e.y);return Math.sqrt(n**2+i**2)}class dS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Qc(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=GA(f.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:_}=f,{timestamp:y}=Lt;this.history.push({..._,timestamp:y});const{onStart:m,onMove:h}=this.handlers;d||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Zc(d,this.transformPagePoint),Ze.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:p,onSessionEnd:_,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Qc(f.type==="pointercancel"?this.lastMoveEventInfo:Zc(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,m),_&&_(f,m)},!gp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Da(e),a=Zc(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Lt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,Qc(a,this.history)),this.removeListeners=La(Zo(this.contextWindow,"pointermove",this.handlePointerMove),Zo(this.contextWindow,"pointerup",this.handlePointerUp),Zo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ri(this.updatePoint)}}function Zc(t,e){return e?{point:e(t.point)}:t}function Tg(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Qc({point:t},e){return{point:t,delta:Tg(t,hS(e)),offset:Tg(t,WA(e)),velocity:jA(e,.1)}}function WA(t){return t[0]}function hS(t){return t[t.length-1]}function jA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=hS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>si(e)));)n--;if(!i)return{x:0,y:0};const s=oi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const pS=1e-4,XA=1-pS,YA=1+pS,mS=.01,$A=0-mS,qA=0+mS;function xn(t){return t.max-t.min}function KA(t,e,n){return Math.abs(t-e)<=n}function wg(t,e,n,i=.5){t.origin=i,t.originPoint=ut(e.min,e.max,t.origin),t.scale=xn(n)/xn(e),t.translate=ut(n.min,n.max,t.origin)-t.originPoint,(t.scale>=XA&&t.scale<=YA||isNaN(t.scale))&&(t.scale=1),(t.translate>=$A&&t.translate<=qA||isNaN(t.translate))&&(t.translate=0)}function Qo(t,e,n,i){wg(t.x,e.x,n.x,i?i.originX:void 0),wg(t.y,e.y,n.y,i?i.originY:void 0)}function Ag(t,e,n){t.min=n.min+e.min,t.max=t.min+xn(e)}function ZA(t,e,n){Ag(t.x,e.x,n.x),Ag(t.y,e.y,n.y)}function Cg(t,e,n){t.min=e.min-n.min,t.max=t.min+xn(e)}function Jo(t,e,n){Cg(t.x,e.x,n.x),Cg(t.y,e.y,n.y)}function QA(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ut(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ut(n,t,i.max):Math.min(t,n)),t}function Rg(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function JA(t,{top:e,left:n,bottom:i,right:r}){return{x:Rg(t.x,n,r),y:Rg(t.y,e,i)}}function Pg(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function eC(t,e){return{x:Pg(t.x,e.x),y:Pg(t.y,e.y)}}function tC(t,e){let n=.5;const i=xn(t),r=xn(e);return r>i?n=Yr(e.min,e.max-i,t.min):i>r&&(n=Yr(t.min,t.max-r,e.min)),Pi(0,1,n)}function nC(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Hd=.35;function iC(t=Hd){return t===!1?t=0:t===!0&&(t=Hd),{x:bg(t,"left","right"),y:bg(t,"top","bottom")}}function bg(t,e,n){return{min:Lg(t,e),max:Lg(t,n)}}function Lg(t,e){return typeof t=="number"?t:t[e]||0}const Dg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ls=()=>({x:Dg(),y:Dg()}),Ng=()=>({min:0,max:0}),mt=()=>({x:Ng(),y:Ng()});function An(t){return[t("x"),t("y")]}function gS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function rC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function sC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Jc(t){return t===void 0||t===1}function Gd({scale:t,scaleX:e,scaleY:n}){return!Jc(t)||!Jc(e)||!Jc(n)}function Cr(t){return Gd(t)||vS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function vS(t){return Ig(t.x)||Ig(t.y)}function Ig(t){return t&&t!=="0%"}function bu(t,e,n){const i=t-n,r=e*i;return n+r}function Ug(t,e,n,i,r){return r!==void 0&&(t=bu(t,r,i)),bu(t,n,i)+e}function Wd(t,e=0,n=1,i,r){t.min=Ug(t.min,e,n,i,r),t.max=Ug(t.max,e,n,i,r)}function _S(t,{x:e,y:n}){Wd(t.x,e.translate,e.scale,e.originPoint),Wd(t.y,n.translate,n.scale,n.originPoint)}const Fg=.999999999999,Og=1.0000000000001;function oC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ns(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,_S(t,o)),i&&Cr(s.latestValues)&&Ns(t,s.latestValues))}e.x<Og&&e.x>Fg&&(e.x=1),e.y<Og&&e.y>Fg&&(e.y=1)}function Ds(t,e){t.min=t.min+e,t.max=t.max+e}function kg(t,e,n,i,r=.5){const s=ut(t.min,t.max,r);Wd(t,e,n,s,i)}function Ns(t,e){kg(t.x,e.x,e.scaleX,e.scale,e.originX),kg(t.y,e.y,e.scaleY,e.scale,e.originY)}function yS(t,e){return gS(sC(t.getBoundingClientRect(),e))}function aC(t,e,n){const i=yS(t,n),{scroll:r}=e;return r&&(Ds(i.x,r.offset.x),Ds(i.y,r.offset.y)),i}const xS=({current:t})=>t?t.ownerDocument.defaultView:null,lC=new WeakMap;class uC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=mt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Da(c).point)},s=(c,f)=>{const{drag:d,dragPropagation:p,onDragStart:_}=this.getProps();if(d&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=rw(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),An(m=>{let h=this.getAxisMotionValue(m).get()||0;if(ai.test(h)){const{projection:v}=this.visualElement;if(v&&v.layout){const g=v.layout.layoutBox[m];g&&(h=xn(g)*(parseFloat(h)/100))}}this.originPoint[m]=h}),_&&Ze.postRender(()=>_(c,f)),Id(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:_,onDrag:y}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:m}=f;if(p&&this.currentDirection===null){this.currentDirection=cC(m),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),y&&y(c,f)},a=(c,f)=>this.stop(c,f),l=()=>An(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new dS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:xS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&Ze.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!ll(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=QA(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ps(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=JA(r.layoutBox,n):this.constraints=!1,this.elastic=iC(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&An(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=nC(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ps(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=aC(i,r.root,this.visualElement.getTransformPagePoint());let o=eC(r.layout.layoutBox,s);if(n){const a=n(rC(o));this.hasMutatedConstraints=!!a,a&&(o=gS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=An(c=>{if(!ll(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,_={type:"inertia",velocity:i?e[c]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,_)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Id(this.visualElement,e),i.start(Cp(e,i,0,n,this.visualElement,!1))}stopAnimation(){An(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){An(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){An(n=>{const{drag:i}=this.getProps();if(!ll(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-ut(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ps(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};An(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=tC({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),An(o=>{if(!ll(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(ut(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;lC.set(this.visualElement,this);const e=this.visualElement.current,n=Zo(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ps(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),Ze.read(i);const o=xa(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(An(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Hd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function ll(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function cC(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class fC extends pr{constructor(e){super(e),this.removeGroupControls=vn,this.removeListeners=vn,this.controls=new uC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||vn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Bg=t=>(e,n)=>{t&&Ze.postRender(()=>t(e,n))};class dC extends pr{constructor(){super(...arguments),this.removePointerDownListener=vn}onPointerDown(e){this.session=new dS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:xS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Bg(e),onStart:Bg(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&Ze.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Zo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Kl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Vg(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const wo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Se.test(t))t=parseFloat(t);else return t;const n=Vg(t,e.target.x),i=Vg(t,e.target.y);return`${n}% ${i}%`}},hC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=lr.parse(t);if(r.length>5)return i;const s=lr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=ut(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class pC extends K.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;k1(mC),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Kl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Ze.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),np.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function SS(t){const[e,n]=nx(),i=K.useContext(Kh);return D.jsx(pC,{...t,layoutGroup:i,switchLayoutGroup:K.useContext(ux),isPresent:e,safeToRemove:n})}const mC={borderRadius:{...wo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wo,borderTopRightRadius:wo,borderBottomLeftRadius:wo,borderBottomRightRadius:wo,boxShadow:hC};function MS(t,e,n){const i=_t(t)?t:eo(t);return i.start(Cp("",i,e,n)),i.animation}function ES(t){return t instanceof SVGElement&&t.tagName!=="svg"}const gC=(t,e)=>t.depth-e.depth;class vC{constructor(){this.children=[],this.isDirty=!1}add(e){vp(this.children,e),this.isDirty=!0}remove(e){lc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(gC),this.isDirty=!1,this.children.forEach(e)}}function _C(t,e){const n=li.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ri(i),t(s-e))};return Ze.read(i,!0),()=>Ri(i)}const TS=["TopLeft","TopRight","BottomLeft","BottomRight"],yC=TS.length,zg=t=>typeof t=="string"?parseFloat(t):t,Hg=t=>typeof t=="number"||Se.test(t);function xC(t,e,n,i,r,s){r?(t.opacity=ut(0,n.opacity!==void 0?n.opacity:1,SC(i)),t.opacityExit=ut(e.opacity!==void 0?e.opacity:1,0,MC(i))):s&&(t.opacity=ut(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<yC;o++){const a=`border${TS[o]}Radius`;let l=Gg(e,a),u=Gg(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Hg(l)===Hg(u)?(t[a]=Math.max(ut(zg(l),zg(u),i),0),(ai.test(u)||ai.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=ut(e.rotate||0,n.rotate||0,i))}function Gg(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const SC=wS(0,.5,Bx),MC=wS(.5,.95,vn);function wS(t,e,n){return i=>i<t?0:i>e?1:n(Yr(t,e,i))}function Wg(t,e){t.min=e.min,t.max=e.max}function Tn(t,e){Wg(t.x,e.x),Wg(t.y,e.y)}function jg(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Xg(t,e,n,i,r){return t-=e,t=bu(t,1/n,i),r!==void 0&&(t=bu(t,1/r,i)),t}function EC(t,e=0,n=1,i=.5,r,s=t,o=t){if(ai.test(e)&&(e=parseFloat(e),e=ut(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ut(s.min,s.max,i);t===s&&(a-=e),t.min=Xg(t.min,e,n,a,r),t.max=Xg(t.max,e,n,a,r)}function Yg(t,e,[n,i,r],s,o){EC(t,e[n],e[i],e[r],e.scale,s,o)}const TC=["x","scaleX","originX"],wC=["y","scaleY","originY"];function $g(t,e,n,i){Yg(t.x,e,TC,n?n.x:void 0,i?i.x:void 0),Yg(t.y,e,wC,n?n.y:void 0,i?i.y:void 0)}function qg(t){return t.translate===0&&t.scale===1}function AS(t){return qg(t.x)&&qg(t.y)}function Kg(t,e){return t.min===e.min&&t.max===e.max}function AC(t,e){return Kg(t.x,e.x)&&Kg(t.y,e.y)}function Zg(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function CS(t,e){return Zg(t.x,e.x)&&Zg(t.y,e.y)}function Qg(t){return xn(t.x)/xn(t.y)}function Jg(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class CC{constructor(){this.members=[]}add(e){vp(this.members,e),e.scheduleRender()}remove(e){if(lc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function RC(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:d,skewX:p,skewY:_}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),_&&(i+=`skewY(${_}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Rr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ko=typeof window<"u"&&window.MotionDebug!==void 0,ef=["","X","Y","Z"],PC={visibility:"hidden"},ev=1e3;let bC=0;function tf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function RS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Dx(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Ze,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&RS(i)}function PS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=bC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ko&&(Rr.totalNodes=Rr.resolvedTargetDeltas=Rr.recalculatedProjection=0),this.nodes.forEach(NC),this.nodes.forEach(kC),this.nodes.forEach(BC),this.nodes.forEach(IC),ko&&window.MotionDebug.record(Rr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new vC)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new _p),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ES(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=_C(d,250),Kl.hasAnimatedSinceResize&&(Kl.hasAnimatedSinceResize=!1,this.nodes.forEach(nv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||WC,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=c.getProps(),v=!this.targetLayout||!CS(this.targetLayout,_)||p,g=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const S={...dp(y,"layout"),onPlay:m,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else d||nv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ri(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(VC),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&RS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(tv);return}this.isUpdating||this.nodes.forEach(FC),this.isUpdating=!1,this.nodes.forEach(OC),this.nodes.forEach(LC),this.nodes.forEach(DC),this.clearAllSnapshots();const a=li.now();Lt.delta=Pi(0,1e3/60,a-Lt.timestamp),Lt.timestamp=a,Lt.isProcessing=!0,jc.update.process(Lt),jc.preRender.process(Lt),jc.render.process(Lt),Lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,np.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(UC),this.sharedNodes.forEach(zC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ze.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ze.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=mt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!AS(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Cr(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),jC(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return mt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(XC))){const{scroll:c}=this.root;c&&(Ds(l.x,c.offset.x),Ds(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=mt();if(Tn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:d}=c;c!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&Tn(l,o),Ds(l.x,f.offset.x),Ds(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=mt();Tn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ns(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Cr(c.latestValues)&&Ns(l,c.latestValues)}return Cr(this.latestValues)&&Ns(l,this.latestValues),l}removeTransform(o){const a=mt();Tn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Cr(u.latestValues))continue;Gd(u.latestValues)&&u.updateSnapshot();const c=mt(),f=u.measurePageBox();Tn(c,f),$g(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Cr(this.latestValues)&&$g(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=Lt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=mt(),this.relativeTargetOrigin=mt(),Jo(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=mt(),this.targetWithTransforms=mt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ZA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tn(this.target,this.layout.layoutBox),_S(this.target,this.targetDelta)):Tn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=mt(),this.relativeTargetOrigin=mt(),Jo(this.relativeTargetOrigin,this.target,p.target),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ko&&Rr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Gd(this.parent.latestValues)||vS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Lt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Tn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;oC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=mt());const{target:_}=a;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(jg(this.prevProjectionDelta.x,this.projectionDelta.x),jg(this.prevProjectionDelta.y,this.projectionDelta.y)),Qo(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==p||!Jg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Jg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),ko&&Rr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ls(),this.projectionDelta=Ls(),this.projectionDeltaWithTransform=Ls()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Ls();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=mt(),p=l?l.source:void 0,_=this.layout?this.layout.source:void 0,y=p!==_,m=this.getStack(),h=!m||m.members.length<=1,v=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(GC));this.animationProgress=0;let g;this.mixTargetDelta=S=>{const C=S/1e3;iv(f.x,o.x,C),iv(f.y,o.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Jo(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),HC(this.relativeTarget,this.relativeTargetOrigin,d,C),g&&AC(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=mt()),Tn(g,this.relativeTarget)),y&&(this.animationValues=c,xC(c,u,this.latestValues,C,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ri(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ze.update(()=>{Kl.hasAnimatedSinceResize=!0,this.currentAnimation=MS(0,ev,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ev),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&bS(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||mt();const f=xn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=xn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Tn(a,l),Ns(a,c),Qo(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new CC),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&tf("z",o,u,this.animationValues);for(let c=0;c<ef.length;c++)tf(`rotate${ef[c]}`,o,u,this.animationValues),tf(`skew${ef[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return PC;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=$l(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=$l(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Cr(this.latestValues)&&(y.transform=c?c({},""):"none",this.hasProjected=!1),y}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=RC(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:p,y:_}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${_.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in Tu){if(d[y]===void 0)continue;const{correct:m,applyTo:h}=Tu[y],v=u.transform==="none"?d[y]:m(d[y],f);if(h){const g=h.length;for(let S=0;S<g;S++)u[h[S]]=v}else u[y]=v}return this.options.layoutId&&(u.pointerEvents=f===this?$l(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(tv),this.root.sharedNodes.clear()}}}function LC(t){t.updateLayout()}function DC(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?An(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=xn(d);d.min=i[f].min,d.max=d.min+p}):bS(s,n.layoutBox,i)&&An(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=xn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Ls();Qo(a,i,n.layoutBox);const l=Ls();o?Qo(l,t.applyTransform(r,!0),n.measuredBox):Qo(l,i,n.layoutBox);const u=!AS(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const _=mt();Jo(_,n.layoutBox,d.layoutBox);const y=mt();Jo(y,i,p.layoutBox),CS(_,y)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=_,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function NC(t){ko&&Rr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function IC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function UC(t){t.clearSnapshot()}function tv(t){t.clearMeasurements()}function FC(t){t.isLayoutDirty=!1}function OC(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function nv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function kC(t){t.resolveTargetDelta()}function BC(t){t.calcProjection()}function VC(t){t.resetSkewAndRotation()}function zC(t){t.removeLeadSnapshot()}function iv(t,e,n){t.translate=ut(e.translate,0,n),t.scale=ut(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function rv(t,e,n,i){t.min=ut(e.min,n.min,i),t.max=ut(e.max,n.max,i)}function HC(t,e,n,i){rv(t.x,e.x,n.x,i),rv(t.y,e.y,n.y,i)}function GC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const WC={duration:.45,ease:[.4,0,.1,1]},sv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ov=sv("applewebkit/")&&!sv("chrome/")?Math.round:vn;function av(t){t.min=ov(t.min),t.max=ov(t.max)}function jC(t){av(t.x),av(t.y)}function bS(t,e,n){return t==="position"||t==="preserve-aspect"&&!KA(Qg(e),Qg(n),.2)}function XC(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const YC=PS({attachResizeListener:(t,e)=>xa(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),nf={current:void 0},LS=PS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!nf.current){const t=new YC({});t.mount(window),t.setOptions({layoutScroll:!0}),nf.current=t}return nf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),$C={pan:{Feature:dC},drag:{Feature:fC,ProjectionNode:LS,MeasureLayout:SS}};function lv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&Ze.postRender(()=>s(e,Da(e)))}class qC extends pr{mount(){const{current:e}=this.node;e&&(this.unmount=J1(e,n=>(lv(this.node,n,"Start"),i=>lv(this.node,i,"End"))))}unmount(){}}class KC extends pr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=La(xa(this.node.current,"focus",()=>this.onFocus()),xa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function uv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&Ze.postRender(()=>s(e,Da(e)))}class ZC extends pr{mount(){const{current:e}=this.node;e&&(this.unmount=iw(e,n=>(uv(this.node,n,"Start"),(i,{success:r})=>uv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const jd=new WeakMap,rf=new WeakMap,QC=t=>{const e=jd.get(t.target);e&&e(t)},JC=t=>{t.forEach(QC)};function eR({root:t,...e}){const n=t||document;rf.has(n)||rf.set(n,{});const i=rf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(JC,{root:t,...e})),i[r]}function tR(t,e,n){const i=eR(e);return jd.set(t,n),i.observe(t),()=>{jd.delete(t),i.unobserve(t)}}const nR={some:0,all:1};class iR extends pr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:nR[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return tR(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(rR(e,n))&&this.startObserver()}unmount(){}}function rR({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const sR={inView:{Feature:iR},tap:{Feature:ZC},focus:{Feature:KC},hover:{Feature:qC}},oR={layout:{ProjectionNode:LS,MeasureLayout:SS}},Xd={current:null},DS={current:!1};function aR(){if(DS.current=!0,!!Zh)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Xd.current=t.matches;t.addListener(e),e()}else Xd.current=!1}const lR=[...Jx,Wt,lr],uR=t=>lR.find(Qx(t)),no=new WeakMap;function cR(t,e,n){for(const i in e){const r=e[i],s=n[i];if(_t(r))t.addValue(i,r);else if(_t(s))t.addValue(i,eo(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,eo(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const cv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class NS{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Tp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=li.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Ze.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=sc(n),this.isVariantNode=ax(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const _=d[p];l[p]!==void 0&&_t(_)&&_.set(l[p],!1)}}mount(e){this.current=e,no.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),DS.current||aR(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Xd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){no.delete(this.current),this.projection&&this.projection.unmount(),Ri(this.notifyUpdate),Ri(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Zr.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&Ze.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Js){const n=Js[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):mt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<cv.length;i++){const r=cv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=cR(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=eo(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Kx(r)||zx(r))?r=parseFloat(r):!uR(r)&&lr.test(n)&&(r=Yx(e,n)),this.setBaseTarget(e,_t(r)?r.get():r)),_t(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=rp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!_t(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new _p),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class IS extends NS{constructor(){super(...arguments),this.KeyframeResolver=eS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;_t(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function fR(t){return window.getComputedStyle(t)}class US extends IS{constructor(){super(...arguments),this.type="html",this.renderInstance=gx}readValueFromInstance(e,n){if(Zr.has(n)){const i=Ep(n);return i&&i.default||0}else{const i=fR(e),r=(hx(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return yS(e,n)}build(e,n,i){ap(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return fp(e,n,i)}}class FS extends IS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=mt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Zr.has(n)){const i=Ep(n);return i&&i.default||0}return n=vx.has(n)?n:tp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return xx(e,n,i)}build(e,n,i){lp(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){_x(e,n,i,r)}mount(e){this.isSVGTag=cp(e.tagName),super.mount(e)}}const dR=(t,e)=>ip(t)?new FS(e):new US(e,{allowProjection:t!==K.Fragment}),hR=Y1({...zA,...sR,...$C,...oR},dR),it=l1(hR);function Lu(t){const e=Ca(()=>eo(t)),{isStatic:n}=K.useContext(Ra);if(n){const[,i]=K.useState(t);K.useEffect(()=>e.on("change",i),[])}return e}function Pp(t,e){const n=Lu(e()),i=()=>n.set(e());return i(),nc(()=>{const r=()=>Ze.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),Ri(i)}}),n}function fv(t,...e){const n=t.length;function i(){let r="";for(let s=0;s<n;s++){r+=t[s];const o=e[s];o&&(r+=_t(o)?o.get():o)}return r}return Pp(e.filter(_t),i)}function dv(t){return typeof t=="number"?t:parseFloat(t)}function hv(t,e={}){const{isStatic:n}=K.useContext(Ra),i=K.useRef(null),r=Lu(_t(t)?dv(t.get()):t),s=K.useRef(r.get()),o=K.useRef(()=>{}),a=()=>{const u=i.current;u&&u.time===0&&u.sample(Lt.delta),l(),i.current=pA({keyframes:[r.get(),s.current],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:o.current})},l=()=>{i.current&&i.current.stop()};return K.useInsertionEffect(()=>r.attach((u,c)=>n?c(u):(s.current=u,o.current=c,Ze.update(a),r.get()),l),[JSON.stringify(e)]),nc(()=>{if(_t(t))return t.on("change",u=>r.set(dv(u)))},[r]),r}const pR=t=>t&&typeof t=="object"&&t.mix,mR=t=>pR(t)?t.mix:void 0;function gR(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=aS(r,s,{mixer:mR(s[0]),...o});return e?a(i):a}function vR(t){qo.current=[],t();const e=Pp(qo.current,t);return qo.current=void 0,e}function Jr(t,e,n,i){if(typeof t=="function")return vR(t);const r=typeof e=="function"?e:gR(e,n,i);return Array.isArray(t)?pv(t,r):pv([t],([s])=>r(s))}function pv(t,e){const n=Ca(()=>[]);return Pp(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}const _R=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function OS(t,e){return oS(t)?t[_R(0,t.length,e)]:t}function bp(t){return typeof t=="object"&&!Array.isArray(t)}function kS(t,e,n,i){return typeof t=="string"&&bp(e)?mp(t,n,i):t instanceof NodeList?Array.from(t):Array.isArray(t)?t:[t]}function yR(t,e,n){return t*(e+1)}function mv(t,e,n,i){var r;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(r=i.get(e))!==null&&r!==void 0?r:t}function xR(t,e,n){for(let i=0;i<t.length;i++){const r=t[i];r.at>e&&r.at<n&&(lc(t,r),i--)}}function SR(t,e,n,i,r,s){xR(t,r,s);for(let o=0;o<e.length;o++)t.push({value:e[o],at:ut(r,s,i[o]),easing:OS(n,o)})}function MR(t,e){for(let n=0;n<t.length;n++)t[n]=t[n]/(e+1)}function ER(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const TR="easeInOut";function wR(t,{defaultTransition:e={},...n}={},i,r){const s=e.duration||.3,o=new Map,a=new Map,l={},u=new Map;let c=0,f=0,d=0;for(let p=0;p<t.length;p++){const _=t[p];if(typeof _=="string"){u.set(_,f);continue}else if(!Array.isArray(_)){u.set(_.name,mv(f,_.at,c,u));continue}let[y,m,h={}]=_;h.at!==void 0&&(f=mv(f,h.at,c,u));let v=0;const g=(S,C,T,A=0,P=0)=>{const E=AR(S),{delay:x=0,times:I=uS(E),type:j="keyframes",repeat:N,repeatType:Y,repeatDelay:$=0,...te}=C;let{ease:X=e.ease||"easeOut",duration:L}=C;const H=typeof x=="function"?x(A,P):x,G=E.length,ie=ac(j)?j:r==null?void 0:r[j];if(G<=2&&ie){let ee=100;if(G===2&&PR(E)){const Te=E[1]-E[0];ee=Math.abs(Te)}const ue={...te};L!==void 0&&(ue.duration=si(L));const re=K1(ue,ee,ie);X=re.ease,L=re.duration}L??(L=s);const he=f+H;I.length===1&&I[0]===0&&(I[1]=1);const Be=I.length-E.length;if(Be>0&&lS(I,Be),E.length===1&&E.unshift(null),N){L=yR(L,N);const ee=[...E],ue=[...I];X=Array.isArray(X)?[...X]:[X];const re=[...X];for(let Te=0;Te<N;Te++){E.push(...ee);for(let Re=0;Re<ee.length;Re++)I.push(ue[Re]+(Te+1)),X.push(Re===0?"linear":OS(re,Re-1))}MR(I,N)}const W=he+L;SR(T,E,X,I,he,W),v=Math.max(H+L,v),d=Math.max(W,d)};if(_t(y)){const S=gv(y,a);g(m,h,vv("default",S))}else{const S=kS(y,m,i,l),C=S.length;for(let T=0;T<C;T++){m=m,h=h;const A=S[T],P=gv(A,a);for(const E in m)g(m[E],CR(h,E),vv(E,P),T,C)}}c=f,f+=v}return a.forEach((p,_)=>{for(const y in p){const m=p[y];m.sort(ER);const h=[],v=[],g=[];for(let C=0;C<m.length;C++){const{at:T,value:A,easing:P}=m[C];h.push(A),v.push(Yr(0,d,T)),g.push(P||"easeOut")}v[0]!==0&&(v.unshift(0),h.unshift(h[0]),g.unshift(TR)),v[v.length-1]!==1&&(v.push(1),h.push(null)),o.has(_)||o.set(_,{keyframes:{},transition:{}});const S=o.get(_);S.keyframes[y]=h,S.transition[y]={...e,duration:d,ease:g,times:v,...n}}}),o}function gv(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function vv(t,e){return e[t]||(e[t]=[]),e[t]}function AR(t){return Array.isArray(t)?t:[t]}function CR(t,e){return t&&t[e]?{...t,...t[e]}:{...t}}const RR=t=>typeof t=="number",PR=t=>t.every(RR);function bR(t,e){return t in e}class LR extends NS{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,n){if(bR(n,e)){const i=e[n];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(e,n){delete n.output[e]}measureInstanceViewportBox(){return mt()}build(e,n){Object.assign(e.output,n)}renderInstance(e,{output:n}){Object.assign(e,n)}sortInstanceNodePosition(){return 0}}function DR(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=ES(t)?new FS(e):new US(e);n.mount(t),no.set(t,n)}function NR(t){const e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new LR(e);n.mount(t),no.set(t,n)}function IR(t,e){return _t(t)||typeof t=="number"||typeof t=="string"&&!bp(e)}function BS(t,e,n,i){const r=[];if(IR(t,e))r.push(MS(t,bp(e)&&e.default||e,n&&(n.default||n)));else{const s=kS(t,e,i),o=s.length;for(let a=0;a<o;a++){const l=s[a],u=l instanceof Element?DR:NR;no.has(l)||u(l);const c=no.get(l),f={...n};"delay"in f&&typeof f.delay=="function"&&(f.delay=f.delay(a,o)),r.push(...Rp(c,{...e,transition:f},{}))}}return r}function UR(t,e,n){const i=[];return wR(t,e,n,{spring:Ap}).forEach(({keyframes:s,transition:o},a)=>{i.push(...BS(a,s,o))}),i}function FR(t){return Array.isArray(t)&&t.some(Array.isArray)}function OR(t){function e(n,i,r){let s=[];return FR(n)?s=UR(n,i,t):s=BS(n,i,r,t),new Ex(s)}return e}const kR=OR(),BR={some:0,all:1};function VR(t,e,{root:n,margin:i,amount:r="some"}={}){const s=mp(t),o=new WeakMap,a=u=>{u.forEach(c=>{const f=o.get(c.target);if(c.isIntersecting!==!!f)if(c.isIntersecting){const d=e(c);typeof d=="function"?o.set(c.target,d):l.unobserve(c.target)}else typeof f=="function"&&(f(c),o.delete(c.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:typeof r=="number"?r:BR[r]});return s.forEach(u=>l.observe(u)),()=>l.disconnect()}function zR(t,{root:e,margin:n,amount:i,once:r=!1}={}){const[s,o]=K.useState(!1);return K.useEffect(()=>{if(!t.current||r&&s)return;const a=()=>(o(!0),r?void 0:()=>o(!1)),l={root:e&&e.current||void 0,margin:n,amount:i};return VR(t.current,a,l)},[e,t,n,r,i]),s}const Ao=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches;function HR({committee:t,index:e}){var v;const n=K.useRef(null),i=Lu(0),r=Lu(0),s=hv(i,{stiffness:260,damping:26,mass:.55}),o=hv(r,{stiffness:260,damping:26,mass:.55}),a=Jr(o,[-.5,.5],[14,-14]),l=Jr(s,[-.5,.5],[-14,14]),u=Jr(s,[-.5,.5],["8%","92%"]),c=Jr(o,[-.5,.5],["8%","92%"]),f=fv`radial-gradient(circle at ${u} ${c}, rgba(74,143,226,0.42) 0%, transparent 60%)`,d=Jr(s,[-.5,.5],["88%","12%"]),p=Jr(o,[-.5,.5],["88%","12%"]),_=fv`radial-gradient(circle at ${d} ${p}, rgba(255,255,255,0.08) 0%, transparent 44%)`,y=K.useCallback(g=>{if(Ao)return;const S=n.current.getBoundingClientRect();i.set((g.clientX-S.left)/S.width-.5),r.set((g.clientY-S.top)/S.height-.5)},[i,r]),m=K.useCallback(()=>{i.set(0),r.set(0)},[i,r]),h=Ao?{}:{rotateX:a,rotateY:l,transformPerspective:1100};return D.jsxs(it.article,{ref:n,className:"c-card",variants:{hidden:{opacity:0,y:50,scale:.88,filter:"blur(8px)"},visible:{opacity:1,y:0,scale:1,filter:"blur(0px)",transition:{duration:.7,ease:[.22,1,.36,1]}}},style:h,whileHover:Ao?{}:{scale:1.03,transition:{type:"spring",stiffness:360,damping:20}},onMouseMove:y,onMouseLeave:m,children:[!Ao&&D.jsxs(D.Fragment,{children:[D.jsx(it.div,{className:"c-glow",style:{background:f}}),D.jsx(it.div,{style:{position:"absolute",inset:0,zIndex:1,borderRadius:20,pointerEvents:"none",background:_}})]}),D.jsx("div",{className:"c-watermark",children:String(e+1).padStart(2,"0")}),D.jsxs("div",{className:"c-body",style:Ao?{}:{transform:"translateZ(22px)",transformStyle:"preserve-3d"},children:[D.jsx("div",{className:"c-abbr",children:t.abbr}),D.jsx("div",{className:"c-full",children:t.fullName}),D.jsx("div",{className:"c-divider"}),((v=t.chairs)==null?void 0:v.length)>0&&D.jsxs(D.Fragment,{children:[D.jsx("div",{className:"c-section-lbl",children:"Executive Board"}),D.jsx("div",{className:"c-chips",children:t.chairs.map(g=>D.jsx("span",{className:"c-chip",children:g},g))})]}),t.agenda&&D.jsxs(D.Fragment,{children:[D.jsx("div",{className:"c-section-lbl",style:{marginTop:12},children:"Agenda"}),D.jsx("p",{className:"c-agenda-txt",children:t.agenda})]})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lp="163",GR=0,_v=1,WR=2,VS=1,jR=2,gi=3,ur=0,Xt=1,yi=2,ir=0,Gs=1,yv=2,xv=3,Sv=4,XR=5,Lr=100,YR=101,$R=102,qR=103,KR=104,ZR=200,QR=201,JR=202,eP=203,Yd=204,$d=205,tP=206,nP=207,iP=208,rP=209,sP=210,oP=211,aP=212,lP=213,uP=214,cP=0,fP=1,dP=2,Du=3,hP=4,pP=5,mP=6,gP=7,zS=0,vP=1,_P=2,rr=0,yP=1,xP=2,SP=3,MP=4,EP=5,TP=6,wP=7,HS=300,io=301,ro=302,qd=303,Kd=304,fc=306,Zd=1e3,Or=1001,Qd=1002,Ln=1003,AP=1004,ul=1005,Wn=1006,sf=1007,kr=1008,sr=1009,CP=1010,RP=1011,GS=1012,WS=1013,so=1014,$i=1015,Nu=1016,jS=1017,XS=1018,Na=1020,PP=35902,bP=1021,LP=1022,ni=1023,DP=1024,NP=1025,Ws=1026,Sa=1027,IP=1028,YS=1029,UP=1030,$S=1031,qS=1033,of=33776,af=33777,lf=33778,uf=33779,Mv=35840,Ev=35841,Tv=35842,wv=35843,KS=36196,Av=37492,Cv=37496,Rv=37808,Pv=37809,bv=37810,Lv=37811,Dv=37812,Nv=37813,Iv=37814,Uv=37815,Fv=37816,Ov=37817,kv=37818,Bv=37819,Vv=37820,zv=37821,cf=36492,Hv=36494,Gv=36495,FP=36283,Wv=36284,jv=36285,Xv=36286,OP=3200,kP=3201,BP=0,VP=1,ji="",Qn="srgb",mr="srgb-linear",Dp="display-p3",dc="display-p3-linear",Iu="linear",nt="srgb",Uu="rec709",Fu="p3",es=7680,Yv=519,zP=512,HP=513,GP=514,ZS=515,WP=516,jP=517,XP=518,YP=519,$v=35044,qv="300 es",Mi=2e3,Ou=2001;class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ff=Math.PI/180,Jd=180/Math.PI;function Ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function $P(t,e){return(t%e+e)%e}function df(t,e,n){return(1-n)*t+n*e}function Co(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],y=r[0],m=r[3],h=r[6],v=r[1],g=r[4],S=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*y+a*v+l*C,s[3]=o*m+a*g+l*T,s[6]=o*h+a*S+l*A,s[1]=u*y+c*v+f*C,s[4]=u*m+c*g+f*T,s[7]=u*h+c*S+f*A,s[2]=d*y+p*v+_*C,s[5]=d*m+p*g+_*T,s[8]=d*h+p*S+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hf.makeScale(e,n)),this}rotate(e){return this.premultiply(hf.makeRotation(-e)),this}translate(e,n){return this.premultiply(hf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hf=new Fe;function QS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ku(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qP(){const t=ku("canvas");return t.style.display="block",t}const Kv={};function KP(t){t in Kv||(Kv[t]=!0,console.warn(t))}const Zv=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qv=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cl={[mr]:{transfer:Iu,primaries:Uu,toReference:t=>t,fromReference:t=>t},[Qn]:{transfer:nt,primaries:Uu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[dc]:{transfer:Iu,primaries:Fu,toReference:t=>t.applyMatrix3(Qv),fromReference:t=>t.applyMatrix3(Zv)},[Dp]:{transfer:nt,primaries:Fu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Qv),fromReference:t=>t.applyMatrix3(Zv).convertLinearToSRGB()}},ZP=new Set([mr,dc]),qe={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ZP.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=cl[e].toReference,r=cl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return cl[t].primaries},getTransfer:function(t){return t===ji?Iu:cl[t].transfer}};function js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ts;class QP{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=ku("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ku("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(js(n[i]/255)*255):n[i]=js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JP=0;class JS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JP++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mf(r[o].image)):s.push(mf(r[o]))}else s=mf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?QP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e2=0;class un extends ho{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Or,r=Or,s=Wn,o=kr,a=ni,l=sr,u=un.DEFAULT_ANISOTROPY,c=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=Ia(),this.name="",this.source=new JS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==HS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zd:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zd:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=HS;un.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(p+1)/2,C=(h+1)/2,T=(c+d)/4,A=(f+y)/4,P=(_+m)/4;return g>S&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=A/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-y)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t2 extends ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new JS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends t2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class eM extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class n2 extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==d||u!==p||c!==_){let m=1-a;const h=l*d+u*p+c*_+f*y,v=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const C=Math.sqrt(g),T=Math.atan2(C,h*v);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*v;if(l=l*m+d*S,u=u*m+p*S,c=c*m+_*S,f=f*m+y*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+c*f+l*p-u*d,e[n+1]=l*_+c*d+u*f-a*p,e[n+2]=u*_+c*p+a*d-l*f,e[n+3]=c*_-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gf.copy(this).projectOnVector(e),this.sub(gf)}reflect(e){return this.sub(gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gf=new F,Jv=new Ua;class Fa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),dl.subVectors(this.max,Ro),ns.subVectors(e.a,Ro),is.subVectors(e.b,Ro),rs.subVectors(e.c,Ro),Ii.subVectors(is,ns),Ui.subVectors(rs,is),yr.subVectors(ns,rs);let n=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-yr.z,yr.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,yr.z,0,-yr.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-yr.y,yr.x,0];return!vf(n,ns,is,rs,dl)||(n=[1,0,0,0,1,0,0,0,1],!vf(n,ns,is,rs,dl))?!1:(hl.crossVectors(Ii,Ui),n=[hl.x,hl.y,hl.z],vf(n,ns,is,rs,dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new F,new F,new F,new F,new F,new F,new F,new F],On=new F,fl=new Fa,ns=new F,is=new F,rs=new F,Ii=new F,Ui=new F,yr=new F,Ro=new F,dl=new F,hl=new F,xr=new F;function vf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){xr.fromArray(t,s);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),u=n.dot(xr),c=i.dot(xr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const i2=new Fa,Po=new F,_f=new F;class Oa{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):i2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(_f)),this.expandByPoint(Po.copy(e.center).sub(_f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new F,yf=new F,pl=new F,Fi=new F,xf=new F,ml=new F,Sf=new F;class Np{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yf.copy(e).add(n).multiplyScalar(.5),pl.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(yf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pl),a=Fi.dot(this.direction),l=-Fi.dot(pl),u=Fi.lengthSq(),c=Math.abs(1-o*o);let f,d,p,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const y=1/c;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yf).addScaledVector(pl,d),p}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){xf.subVectors(n,e),ml.subVectors(i,e),Sf.crossVectors(xf,ml);let o=this.direction.dot(Sf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(ml.crossVectors(Fi,ml));if(l<0)return null;const u=a*this.direction.dot(xf.cross(Fi));if(u<0||l+u>o)return null;const c=-a*Fi.dot(Sf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,o,a,l,u,c,f,d,p,_,y,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,p,_,y,m)}set(e,n,i,r,s,o,a,l,u,c,f,d,p,_,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,_=a*c,y=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+_*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,y=u*f;n[0]=d+y*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-_,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,y=u*f;n[0]=d-y*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*c,n[9]=y-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,_=a*c,y=a*f;n[0]=l*c,n[4]=_*u-p,n[8]=d*u+y,n[1]=l*f,n[5]=y*u+d,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=y-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+_,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+y,n[5]=o*c,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*c,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r2,e,s2)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Oi.crossVectors(i,fn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Oi.crossVectors(i,fn)),Oi.normalize(),gl.crossVectors(fn,Oi),r[0]=Oi.x,r[4]=gl.x,r[8]=fn.x,r[1]=Oi.y,r[5]=gl.y,r[9]=fn.y,r[2]=Oi.z,r[6]=gl.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],h=i[14],v=i[3],g=i[7],S=i[11],C=i[15],T=r[0],A=r[4],P=r[8],E=r[12],x=r[1],I=r[5],j=r[9],N=r[13],Y=r[2],$=r[6],te=r[10],X=r[14],L=r[3],H=r[7],G=r[11],ie=r[15];return s[0]=o*T+a*x+l*Y+u*L,s[4]=o*A+a*I+l*$+u*H,s[8]=o*P+a*j+l*te+u*G,s[12]=o*E+a*N+l*X+u*ie,s[1]=c*T+f*x+d*Y+p*L,s[5]=c*A+f*I+d*$+p*H,s[9]=c*P+f*j+d*te+p*G,s[13]=c*E+f*N+d*X+p*ie,s[2]=_*T+y*x+m*Y+h*L,s[6]=_*A+y*I+m*$+h*H,s[10]=_*P+y*j+m*te+h*G,s[14]=_*E+y*N+m*X+h*ie,s[3]=v*T+g*x+S*Y+C*L,s[7]=v*A+g*I+S*$+C*H,s[11]=v*P+g*j+S*te+C*G,s[15]=v*E+g*N+S*X+C*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+y*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],h=e[15],v=f*m*u-y*d*u+y*l*p-a*m*p-f*l*h+a*d*h,g=_*d*u-c*m*u-_*l*p+o*m*p+c*l*h-o*d*h,S=c*y*u-_*f*u+_*a*p-o*y*p-c*a*h+o*f*h,C=_*f*l-c*y*l-_*a*d+o*y*d+c*a*m-o*f*m,T=n*v+i*g+r*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*h-i*d*h)*A,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*h+i*l*h)*A,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(c*m*s-_*d*s+_*r*p-n*m*p-c*r*h+n*d*h)*A,e[6]=(_*l*s-o*m*s-_*r*u+n*m*u+o*r*h-n*l*h)*A,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(_*f*s-c*y*s-_*i*p+n*y*p+c*i*h-n*f*h)*A,e[10]=(o*y*s-_*a*s+_*i*u-n*y*u-o*i*h+n*a*h)*A,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(c*y*r-_*f*r+_*i*d-n*y*d-c*i*m+n*f*m)*A,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,_=s*f,y=o*c,m=o*f,h=a*f,v=l*u,g=l*c,S=l*f,C=i.x,T=i.y,A=i.z;return r[0]=(1-(y+h))*C,r[1]=(p+S)*C,r[2]=(_-g)*C,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+h))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(_+g)*A,r[9]=(m-v)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const u=1/s,c=1/o,f=1/a;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=c,kn.elements[5]*=c,kn.elements[6]*=c,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===Mi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ou)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,p=(i+r)*c;let _,y;if(a===Mi)_=(o+s)*f,y=-2*f;else if(a===Ou)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ss=new F,kn=new St,r2=new F(0,0,0),s2=new F(1,1,1),Oi=new F,gl=new F,fn=new F,e0=new St,t0=new Ua;class bi{constructor(e=0,n=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return e0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return t0.setFromEuler(this),this.setFromQuaternion(t0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class tM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o2=0;const n0=new F,os=new Ua,hi=new St,vl=new F,bo=new F,a2=new F,l2=new Ua,i0=new F(1,0,0),r0=new F(0,1,0),s0=new F(0,0,1),o0={type:"added"},u2={type:"removed"},as={type:"childadded",child:null},Mf={type:"childremoved",child:null};class Zt extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o2++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new F,n=new bi,i=new Ua,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Fe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(i0,e)}rotateY(e){return this.rotateOnAxis(r0,e)}rotateZ(e){return this.rotateOnAxis(s0,e)}translateOnAxis(e,n){return n0.copy(e).applyQuaternion(this.quaternion),this.position.add(n0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(i0,e)}translateY(e){return this.translateOnAxis(r0,e)}translateZ(e){return this.translateOnAxis(s0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vl.copy(e):vl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(bo,vl,this.up):hi.lookAt(vl,bo,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(hi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(o0),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(u2),Mf.child=e,this.dispatchEvent(Mf),Mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(o0),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,a2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,l2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new F(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new F,pi=new F,Ef=new F,mi=new F,ls=new F,us=new F,a0=new F,Tf=new F,wf=new F,Af=new F;class ti{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),pi.subVectors(i,n),Ef.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(pi),l=Bn.dot(Ef),u=pi.dot(pi),c=pi.dot(Ef),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),pi.subVectors(e,n),Bn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Bn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),us.subVectors(s,i),Tf.subVectors(e,i);const l=ls.dot(Tf),u=us.dot(Tf);if(l<=0&&u<=0)return n.copy(i);wf.subVectors(e,r);const c=ls.dot(wf),f=us.dot(wf);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ls,o);Af.subVectors(e,s);const p=ls.dot(Af),_=us.dot(Af);if(_>=0&&p<=_)return n.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(us,a);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return a0.subVectors(s,r),a=(f-c)/(f-c+(p-_)),n.copy(r).addScaledVector(a0,a);const h=1/(m+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(ls,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Cf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=$P(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cf(o,s,e+1/3),this.g=Cf(o,s,e),this.b=Cf(o,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const i=nM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=pf(e.r),this.g=pf(e.g),this.b=pf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return qe.fromWorkingColorSpace(Gt.copy(this),e),Math.round(nn(Gt.r*255,0,255))*65536+Math.round(nn(Gt.g*255,0,255))*256+Math.round(nn(Gt.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=qe.workingColorSpace){return qe.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Qn){qe.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(_l);const i=df(ki.h,_l.h,n),r=df(ki.s,_l.s,n),s=df(ki.l,_l.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Xe;Xe.NAMES=nM;let c2=0;class po extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c2++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=Gs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=$d,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Du,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yd&&(i.blendSrc=this.blendSrc),this.blendDst!==$d&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Du&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Is extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=zS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new F,yl=new We;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$v,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return KP("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Co(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Co(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Co(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Co(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$v&&(e.usage=this.usage),e}}class iM extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class rM extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nn extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let f2=0;const wn=new St,Rf=new Zt,cs=new F,dn=new Fa,Lo=new Fa,bt=new F;class _n extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f2++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QS(e)?rM:iM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return Rf.lookAt(e),Rf.updateMatrix(),this.applyMatrix4(Rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(dn.min,Lo.min),dn.expandByPoint(bt),bt.addVectors(dn.max,Lo.max),dn.expandByPoint(bt)):(dn.expandByPoint(Lo.min),dn.expandByPoint(Lo.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)bt.fromBufferAttribute(a,u),l&&(cs.fromBufferAttribute(e,u),bt.add(cs)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;const u=new F,c=new F,f=new F,d=new We,p=new We,_=new We,y=new F,m=new F;function h(P,E,x){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,x),c.sub(u),f.sub(u),p.sub(d),_.sub(d);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(y.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(I),a[P].add(y),a[E].add(y),a[x].add(y),l[P].add(m),l[E].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,E=v.length;P<E;++P){const x=v[P],I=x.start,j=x.count;for(let N=I,Y=I+j;N<Y;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const g=new F,S=new F,C=new F,T=new F;function A(P){C.fromBufferAttribute(r,P),T.copy(C);const E=a[P];g.copy(E),g.sub(C.multiplyScalar(C.dot(E))).normalize(),S.crossVectors(T,E);const I=S.dot(l[P])<0?-1:1;o.setXYZW(P,g.x,g.y,g.z,I)}for(let P=0,E=v.length;P<E;++P){const x=v[P],I=x.start,j=x.count;for(let N=I,Y=I+j;N<Y;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,f=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new ui(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const l0=new St,Sr=new Np,xl=new Oa,u0=new F,fs=new F,ds=new F,hs=new F,Pf=new F,Sl=new F,Ml=new We,El=new We,Tl=new We,c0=new F,f0=new F,d0=new F,wl=new F,Al=new F;class mn extends Zt{constructor(e=new _n,n=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Pf.fromBufferAttribute(f,e),o?Sl.addScaledVector(Pf,c):Sl.addScaledVector(Pf.sub(n),c))}n.add(Sl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(xl.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(xl,u0)===null||Sr.origin.distanceToSquared(u0)>(e.far-e.near)**2))&&(l0.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(l0),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=g;S<C;S+=3){const T=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);r=Cl(this,h,e,i,u,c,f,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=Cl(this,o,e,i,u,c,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=g;S<C;S+=3){const T=S,A=S+1,P=S+2;r=Cl(this,h,e,i,u,c,f,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=m,g=m+1,S=m+2;r=Cl(this,o,e,i,u,c,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function d2(t,e,n,i,r,s,o,a){let l;if(e.side===Xt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ur,a),l===null)return null;Al.copy(a),Al.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Al);return u<n.near||u>n.far?null:{distance:u,point:Al.clone(),object:t}}function Cl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,fs),t.getVertexPosition(l,ds),t.getVertexPosition(u,hs);const c=d2(t,e,n,i,fs,ds,hs,wl);if(c){r&&(Ml.fromBufferAttribute(r,a),El.fromBufferAttribute(r,l),Tl.fromBufferAttribute(r,u),c.uv=ti.getInterpolation(wl,fs,ds,hs,Ml,El,Tl,new We)),s&&(Ml.fromBufferAttribute(s,a),El.fromBufferAttribute(s,l),Tl.fromBufferAttribute(s,u),c.uv1=ti.getInterpolation(wl,fs,ds,hs,Ml,El,Tl,new We)),o&&(c0.fromBufferAttribute(o,a),f0.fromBufferAttribute(o,l),d0.fromBufferAttribute(o,u),c.normal=ti.getInterpolation(wl,fs,ds,hs,c0,f0,d0,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new F,materialIndex:0};ti.getNormal(fs,ds,hs,f.normal),c.face=f}return c}class ka extends _n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(u,3)),this.setAttribute("normal",new Nn(c,3)),this.setAttribute("uv",new Nn(f,2));function _(y,m,h,v,g,S,C,T,A,P,E){const x=S/A,I=C/P,j=S/2,N=C/2,Y=T/2,$=A+1,te=P+1;let X=0,L=0;const H=new F;for(let G=0;G<te;G++){const ie=G*I-N;for(let he=0;he<$;he++){const Be=he*x-j;H[y]=Be*v,H[m]=ie*g,H[h]=Y,u.push(H.x,H.y,H.z),H[y]=0,H[m]=0,H[h]=T>0?1:-1,c.push(H.x,H.y,H.z),f.push(he/A),f.push(1-G/P),X+=1}}for(let G=0;G<P;G++)for(let ie=0;ie<A;ie++){const he=d+ie+$*G,Be=d+ie+$*(G+1),W=d+(ie+1)+$*(G+1),ee=d+(ie+1)+$*G;l.push(he,Be,ee),l.push(Be,W,ee),L+=6}a.addGroup(p,L,E),p+=L,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function h2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function sM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const p2={clone:oo,merge:$t};var m2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m2,this.fragmentShader=g2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=h2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class oM extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new F,h0=new We,p0=new We;class Pn extends oM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,h0,p0),n.subVectors(p0,h0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ff*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ps=-90,ms=1;class v2 extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(ps,ms,e,n);r.layers=this.layers,this.add(r);const s=new Pn(ps,ms,e,n);s.layers=this.layers,this.add(s);const o=new Pn(ps,ms,e,n);o.layers=this.layers,this.add(o);const a=new Pn(ps,ms,e,n);a.layers=this.layers,this.add(a);const l=new Pn(ps,ms,e,n);l.layers=this.layers,this.add(l);const u=new Pn(ps,ms,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ou)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class aM extends un{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:io,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _2 extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new aM(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ka(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:ir});s.uniforms.tEquirect.value=n;const o=new mn(r,s),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=Wn),new v2(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const bf=new F,y2=new F,x2=new Fe;class Pr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bf.subVectors(i,n).cross(y2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(bf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||x2.getNormalMatrix(e),r=this.coplanarPoint(bf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Oa,Rl=new F;class lM{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,s=new Pr,o=new Pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],_=r[9],y=r[10],m=r[11],h=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-p,S-h).normalize(),i[1].setComponents(l+s,d+u,m+p,S+h).normalize(),i[2].setComponents(l+o,d+c,m+_,S+v).normalize(),i[3].setComponents(l-o,d-c,m-_,S-v).normalize(),i[4].setComponents(l-a,d-f,m-y,S-g).normalize(),n===Mi)i[5].setComponents(l+a,d+f,m+y,S+g).normalize();else if(n===Ou)i[5].setComponents(a,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Rl.x=r.normal.x>0?e.max.x:e.min.x,Rl.y=r.normal.y>0?e.max.y:e.min.y,Rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function S2(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),f.count===-1&&d.length===0&&t.bufferSubData(u,0,c),d.length!==0){for(let p=0,_=d.length;p<_;p++){const y=d[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class hc extends _n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,p=[],_=[],y=[],m=[];for(let h=0;h<c;h++){const v=h*d-o;for(let g=0;g<u;g++){const S=g*f-s;_.push(S,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const g=v+u*h,S=v+u*(h+1),C=v+1+u*(h+1),T=v+1+u*h;p.push(g,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(y,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var M2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,D2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,W2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,j2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q2="gl_FragColor = linearToOutputTexel( gl_FragColor );",J2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ub=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Db=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,sL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_L=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ML=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$L=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:M2,alphahash_pars_fragment:E2,alphamap_fragment:T2,alphamap_pars_fragment:w2,alphatest_fragment:A2,alphatest_pars_fragment:C2,aomap_fragment:R2,aomap_pars_fragment:P2,batching_pars_vertex:b2,batching_vertex:L2,begin_vertex:D2,beginnormal_vertex:N2,bsdfs:I2,iridescence_fragment:U2,bumpmap_pars_fragment:F2,clipping_planes_fragment:O2,clipping_planes_pars_fragment:k2,clipping_planes_pars_vertex:B2,clipping_planes_vertex:V2,color_fragment:z2,color_pars_fragment:H2,color_pars_vertex:G2,color_vertex:W2,common:j2,cube_uv_reflection_fragment:X2,defaultnormal_vertex:Y2,displacementmap_pars_vertex:$2,displacementmap_vertex:q2,emissivemap_fragment:K2,emissivemap_pars_fragment:Z2,colorspace_fragment:Q2,colorspace_pars_fragment:J2,envmap_fragment:eb,envmap_common_pars_fragment:tb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:mb,envmap_vertex:rb,fog_vertex:sb,fog_pars_vertex:ob,fog_fragment:ab,fog_pars_fragment:lb,gradientmap_pars_fragment:ub,lightmap_fragment:cb,lightmap_pars_fragment:fb,lights_lambert_fragment:db,lights_lambert_pars_fragment:hb,lights_pars_begin:pb,lights_toon_fragment:gb,lights_toon_pars_fragment:vb,lights_phong_fragment:_b,lights_phong_pars_fragment:yb,lights_physical_fragment:xb,lights_physical_pars_fragment:Sb,lights_fragment_begin:Mb,lights_fragment_maps:Eb,lights_fragment_end:Tb,logdepthbuf_fragment:wb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Cb,logdepthbuf_vertex:Rb,map_fragment:Pb,map_pars_fragment:bb,map_particle_fragment:Lb,map_particle_pars_fragment:Db,metalnessmap_fragment:Nb,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Ub,morphcolor_vertex:Fb,morphnormal_vertex:Ob,morphtarget_pars_vertex:kb,morphtarget_vertex:Bb,normal_fragment_begin:Vb,normal_fragment_maps:zb,normal_pars_fragment:Hb,normal_pars_vertex:Gb,normal_vertex:Wb,normalmap_pars_fragment:jb,clearcoat_normal_fragment_begin:Xb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:qb,opaque_fragment:Kb,packing:Zb,premultiplied_alpha_fragment:Qb,project_vertex:Jb,dithering_fragment:eL,dithering_pars_fragment:tL,roughnessmap_fragment:nL,roughnessmap_pars_fragment:iL,shadowmap_pars_fragment:rL,shadowmap_pars_vertex:sL,shadowmap_vertex:oL,shadowmask_pars_fragment:aL,skinbase_vertex:lL,skinning_pars_vertex:uL,skinning_vertex:cL,skinnormal_vertex:fL,specularmap_fragment:dL,specularmap_pars_fragment:hL,tonemapping_fragment:pL,tonemapping_pars_fragment:mL,transmission_fragment:gL,transmission_pars_fragment:vL,uv_pars_fragment:_L,uv_pars_vertex:yL,uv_vertex:xL,worldpos_vertex:SL,background_vert:ML,background_frag:EL,backgroundCube_vert:TL,backgroundCube_frag:wL,cube_vert:AL,cube_frag:CL,depth_vert:RL,depth_frag:PL,distanceRGBA_vert:bL,distanceRGBA_frag:LL,equirect_vert:DL,equirect_frag:NL,linedashed_vert:IL,linedashed_frag:UL,meshbasic_vert:FL,meshbasic_frag:OL,meshlambert_vert:kL,meshlambert_frag:BL,meshmatcap_vert:VL,meshmatcap_frag:zL,meshnormal_vert:HL,meshnormal_frag:GL,meshphong_vert:WL,meshphong_frag:jL,meshphysical_vert:XL,meshphysical_frag:YL,meshtoon_vert:$L,meshtoon_frag:qL,points_vert:KL,points_frag:ZL,shadow_vert:QL,shadow_frag:JL,sprite_vert:eD,sprite_frag:tD},le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Jn={basic:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:$t([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:$t([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:$t([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:$t([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:$t([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:$t([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:$t([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:$t([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:$t([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:$t([le.lights,le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Jn.physical={uniforms:$t([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Pl={r:0,b:0,g:0},Er=new bi,nD=new St;function iD(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function _(m,h){let v=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?n:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===fc)?(c===void 0&&(c=new mn(new ka(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:oo(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Er.copy(h.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nD.makeRotationFromEuler(Er)),c.material.toneMapped=qe.getTransfer(g.colorSpace)!==nt,(f!==g||d!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,d=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new mn(new hc(2,2),new cr({name:"BackgroundMaterial",uniforms:oo(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=qe.getTransfer(g.colorSpace)!==nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||d!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,d=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,h){m.getRGB(Pl,sM(t)),i.buffers.color.setClear(Pl.r,Pl.g,Pl.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:_}}function rD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,I,j,N,Y){let $=!1;const te=f(N,j,I);s!==te&&(s=te,u(s.object)),$=p(x,N,j,Y),$&&_(x,N,j,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(x,I,j,N),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function c(x){return t.deleteVertexArray(x)}function f(x,I,j){const N=j.wireframe===!0;let Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let $=Y[I.id];$===void 0&&($={},Y[I.id]=$);let te=$[N];return te===void 0&&(te=d(l()),$[N]=te),te}function d(x){const I=[],j=[],N=[];for(let Y=0;Y<n;Y++)I[Y]=0,j[Y]=0,N[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:j,attributeDivisors:N,object:x,attributes:{},index:null}}function p(x,I,j,N){const Y=s.attributes,$=I.attributes;let te=0;const X=j.getAttributes();for(const L in X)if(X[L].location>=0){const G=Y[L];let ie=$[L];if(ie===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor)),G===void 0||G.attribute!==ie||ie&&G.data!==ie.data)return!0;te++}return s.attributesNum!==te||s.index!==N}function _(x,I,j,N){const Y={},$=I.attributes;let te=0;const X=j.getAttributes();for(const L in X)if(X[L].location>=0){let G=$[L];G===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(G=x.instanceColor));const ie={};ie.attribute=G,G&&G.data&&(ie.data=G.data),Y[L]=ie,te++}s.attributes=Y,s.attributesNum=te,s.index=N}function y(){const x=s.newAttributes;for(let I=0,j=x.length;I<j;I++)x[I]=0}function m(x){h(x,0)}function h(x,I){const j=s.newAttributes,N=s.enabledAttributes,Y=s.attributeDivisors;j[x]=1,N[x]===0&&(t.enableVertexAttribArray(x),N[x]=1),Y[x]!==I&&(t.vertexAttribDivisor(x,I),Y[x]=I)}function v(){const x=s.newAttributes,I=s.enabledAttributes;for(let j=0,N=I.length;j<N;j++)I[j]!==x[j]&&(t.disableVertexAttribArray(j),I[j]=0)}function g(x,I,j,N,Y,$,te){te===!0?t.vertexAttribIPointer(x,I,j,Y,$):t.vertexAttribPointer(x,I,j,N,Y,$)}function S(x,I,j,N){y();const Y=N.attributes,$=j.getAttributes(),te=I.defaultAttributeValues;for(const X in $){const L=$[X];if(L.location>=0){let H=Y[X];if(H===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(H=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(H=x.instanceColor)),H!==void 0){const G=H.normalized,ie=H.itemSize,he=e.get(H);if(he===void 0)continue;const Be=he.buffer,W=he.type,ee=he.bytesPerElement,ue=W===t.INT||W===t.UNSIGNED_INT||H.gpuType===WS;if(H.isInterleavedBufferAttribute){const re=H.data,Te=re.stride,Re=H.offset;if(re.isInstancedInterleavedBuffer){for(let ze=0;ze<L.locationSize;ze++)h(L.location+ze,re.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ze=0;ze<L.locationSize;ze++)m(L.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ze=0;ze<L.locationSize;ze++)g(L.location+ze,ie/L.locationSize,W,G,Te*ee,(Re+ie/L.locationSize*ze)*ee,ue)}else{if(H.isInstancedBufferAttribute){for(let re=0;re<L.locationSize;re++)h(L.location+re,H.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let re=0;re<L.locationSize;re++)m(L.location+re);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let re=0;re<L.locationSize;re++)g(L.location+re,ie/L.locationSize,W,G,ie*ee,ie/L.locationSize*re*ee,ue)}}else if(te!==void 0){const G=te[X];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(L.location,G);break;case 3:t.vertexAttrib3fv(L.location,G);break;case 4:t.vertexAttrib4fv(L.location,G);break;default:t.vertexAttrib1fv(L.location,G)}}}}v()}function C(){P();for(const x in i){const I=i[x];for(const j in I){const N=I[j];for(const Y in N)c(N[Y].object),delete N[Y];delete I[j]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;const I=i[x.id];for(const j in I){const N=I[j];for(const Y in N)c(N[Y].object),delete N[Y];delete I[j]}delete i[x.id]}function A(x){for(const I in i){const j=i[I];if(j[x.id]===void 0)continue;const N=j[x.id];for(const Y in N)c(N[Y].object),delete N[Y];delete j[x.id]}}function P(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function sD(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,c){c!==0&&(t.drawArraysInstanced(i,l,u,c),n.update(u,i,c))}function a(l,u,c){if(c===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<c;d++)this.render(l[d],u[d]);else{f.multiDrawArraysWEBGL(i,l,0,u,0,c);let d=0;for(let p=0;p<c;p++)d+=u[p];n.update(d,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function oD(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=n.precision!==void 0?n.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),c=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_TEXTURE_SIZE),d=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),h=c>0,v=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:c,maxTextureSize:f,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:m,vertexTextures:h,maxSamples:v}}function aD(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Pr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,g=v*4;let S=h.clippingState||null;l.value=S,S=c(_,d,g,p);for(let C=0;C!==g;++C)S[C]=n[C];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const h=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,S=p;g!==y;++g,S+=4)o.copy(f[g]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function lD(t){let e=new WeakMap;function n(o,a){return a===qd?o.mapping=io:a===Kd&&(o.mapping=ro),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qd||a===Kd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new _2(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class uD extends oM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,m0=[.125,.215,.35,.446,.526,.582],Dr=20,Lf=new uD,g0=new Xe;let Df=null,Nf=0,If=0,Uf=!1;const br=(1+Math.sqrt(5))/2,gs=1/br,v0=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,br,gs),new F(0,br,-gs),new F(gs,0,br),new F(-gs,0,br),new F(br,gs,0),new F(-br,gs,0)];class _0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Df=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Df,Nf,If),this._renderer.xr.enabled=Uf,e.scissorTest=!1,bl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Df=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Nu,format:ni,colorSpace:mr,depthBuffer:!1},r=y0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cD(s)),this._blurMaterial=fD(s,e,n)}return r}_compileMaterial(e){const n=new mn(this._lodPlanes[0],e);this._renderer.compile(n,Lf)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(g0),c.toneMapping=rr,c.autoClear=!1;const p=new Is({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),_=new mn(new ka,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(g0),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const g=this._cubeSize;bl(r,v*g,h>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===io||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=S0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Lf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=v0[(r-1)%v0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new mn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),y=s/_,m=isFinite(s)?1+Math.floor(c*y):Dr;m>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dr}`);const h=[];let v=0;for(let A=0;A<Dr;++A){const P=A/y,E=Math.exp(-P*P/2);h.push(E),A===0?v+=E:A<m&&(v+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=_,d.mipInt.value=g-i;const S=this._sizeLods[r],C=3*S*(r>g-Us?r-g+Us:0),T=4*(this._cubeSize-S);bl(n,C,T,3*S,2*S),l.setRenderTarget(n),l.render(f,Lf)}}function cD(t){const e=[],n=[],i=[];let r=t;const s=t-Us+1+m0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Us?l=m0[o-t+Us-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,y=3,m=2,h=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(E,y*_*T),g.set(d,m*_*T);const x=[T,T,T,T,T,T];S.set(x,h*_*T)}const C=new _n;C.setAttribute("position",new ui(v,y)),C.setAttribute("uv",new ui(g,m)),C.setAttribute("faceIndex",new ui(S,h)),e.push(C),r>Us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function y0(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fD(t,e,n){const i=new Float32Array(Dr),r=new F(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function x0(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function S0(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Ip(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dD(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===qd||l===Kd,c=l===io||l===ro;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new _0(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new _0(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hD(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pD(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,S=v.length;g<S;g+=3){const C=v[g+0],T=v[g+1],A=v[g+2];d.push(C,T,T,A,A,C)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const C=g+0,T=g+1,A=g+2;d.push(C,T,T,A,A,C)}}else return;const m=new(QS(d)?rM:iM)(d,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function mD(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*o),n.update(d,i,1)}function u(f,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,f*o,p),n.update(d,i,p))}function c(f,d,p){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<p;y++)this.render(f[y]/o,d[y]);else{_.multiDrawElementsWEBGL(i,d,0,s,f,0,p);let y=0;for(let m=0;m<p;m++)y+=d[m];n.update(y,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function gD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vD(t,e,n){const i=new WeakMap,r=new Ut;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*f),P=new eM(A,C,T,f);P.type=$i,P.needsUpdate=!0;const E=S*4;for(let I=0;I<f;I++){const j=h[I],N=v[I],Y=g[I],$=C*T*4*I;for(let te=0;te<j.count;te++){const X=te*E;_===!0&&(r.fromBufferAttribute(j,te),A[$+X+0]=r.x,A[$+X+1]=r.y,A[$+X+2]=r.z,A[$+X+3]=0),y===!0&&(r.fromBufferAttribute(N,te),A[$+X+4]=r.x,A[$+X+5]=r.y,A[$+X+6]=r.z,A[$+X+7]=0),m===!0&&(r.fromBufferAttribute(Y,te),A[$+X+8]=r.x,A[$+X+9]=r.y,A[$+X+10]=r.z,A[$+X+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new We(C,T)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function _D(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class cM extends un{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Ws,c!==Ws&&c!==Sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ws&&(i=so),i===void 0&&c===Sa&&(i=Na),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const fM=new un,dM=new cM(1,1);dM.compareFunction=ZS;const hM=new eM,pM=new n2,mM=new aM,M0=[],E0=[],T0=new Float32Array(16),w0=new Float32Array(9),A0=new Float32Array(4);function mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=M0[r];if(s===void 0&&(s=new Float32Array(r),M0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pc(t,e){let n=E0[e];n===void 0&&(n=new Int32Array(e),E0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function SD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function MD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function ED(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;A0.set(i),t.uniformMatrix2fv(this.addr,!1,A0),Rt(n,i)}}function TD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;w0.set(i),t.uniformMatrix3fv(this.addr,!1,w0),Rt(n,i)}}function wD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;T0.set(i),t.uniformMatrix4fv(this.addr,!1,T0),Rt(n,i)}}function AD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function CD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function RD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function PD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function bD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function LD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function DD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function ND(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function ID(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?dM:fM;n.setTexture2D(e||s,r)}function UD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||pM,r)}function FD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||mM,r)}function OD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hM,r)}function kD(t){switch(t){case 5126:return yD;case 35664:return xD;case 35665:return SD;case 35666:return MD;case 35674:return ED;case 35675:return TD;case 35676:return wD;case 5124:case 35670:return AD;case 35667:case 35671:return CD;case 35668:case 35672:return RD;case 35669:case 35673:return PD;case 5125:return bD;case 36294:return LD;case 36295:return DD;case 36296:return ND;case 35678:case 36198:case 36298:case 36306:case 35682:return ID;case 35679:case 36299:case 36307:return UD;case 35680:case 36300:case 36308:case 36293:return FD;case 36289:case 36303:case 36311:case 36292:return OD}}function BD(t,e){t.uniform1fv(this.addr,e)}function VD(t,e){const n=mo(e,this.size,2);t.uniform2fv(this.addr,n)}function zD(t,e){const n=mo(e,this.size,3);t.uniform3fv(this.addr,n)}function HD(t,e){const n=mo(e,this.size,4);t.uniform4fv(this.addr,n)}function GD(t,e){const n=mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WD(t,e){const n=mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jD(t,e){const n=mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XD(t,e){t.uniform1iv(this.addr,e)}function YD(t,e){t.uniform2iv(this.addr,e)}function $D(t,e){t.uniform3iv(this.addr,e)}function qD(t,e){t.uniform4iv(this.addr,e)}function KD(t,e){t.uniform1uiv(this.addr,e)}function ZD(t,e){t.uniform2uiv(this.addr,e)}function QD(t,e){t.uniform3uiv(this.addr,e)}function JD(t,e){t.uniform4uiv(this.addr,e)}function e3(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||fM,s[o])}function t3(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||pM,s[o])}function n3(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||mM,s[o])}function i3(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||hM,s[o])}function r3(t){switch(t){case 5126:return BD;case 35664:return VD;case 35665:return zD;case 35666:return HD;case 35674:return GD;case 35675:return WD;case 35676:return jD;case 5124:case 35670:return XD;case 35667:case 35671:return YD;case 35668:case 35672:return $D;case 35669:case 35673:return qD;case 5125:return KD;case 36294:return ZD;case 36295:return QD;case 36296:return JD;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return t3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}class s3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kD(n.type)}}class o3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=r3(n.type)}}class a3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ff=/(\w+)(\])?(\[|\.)?/g;function C0(t,e){t.seq.push(e),t.map[e.id]=e}function l3(t,e,n){const i=t.name,r=i.length;for(Ff.lastIndex=0;;){const s=Ff.exec(i),o=Ff.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){C0(n,u===void 0?new s3(a,t,e):new o3(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new a3(a),C0(n,f)),n=f}}}class Zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);l3(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function R0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const u3=37297;let c3=0;function f3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function d3(t){const e=qe.getPrimaries(qe.workingColorSpace),n=qe.getPrimaries(t);let i;switch(e===n?i="":e===Fu&&n===Uu?i="LinearDisplayP3ToLinearSRGB":e===Uu&&n===Fu&&(i="LinearSRGBToLinearDisplayP3"),t){case mr:case dc:return[i,"LinearTransferOETF"];case Qn:case Dp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function P0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+f3(t.getShaderSource(e),o)}else return r}function h3(t,e){const n=d3(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function p3(t,e){let n;switch(e){case yP:n="Linear";break;case xP:n="Reinhard";break;case SP:n="OptimizedCineon";break;case MP:n="ACESFilmic";break;case TP:n="AgX";break;case wP:n="Neutral";break;case EP:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function m3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function g3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function v3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Bo(t){return t!==""}function b0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function L0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _3=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(t){return t.replace(_3,x3)}const y3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function x3(t,e){let n=Ue[e];if(n===void 0){const i=y3.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eh(n)}const S3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D0(t){return t.replace(S3,M3)}function M3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function N0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===VS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===jR?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function T3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function A3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zS:e="ENVMAP_BLENDING_MULTIPLY";break;case vP:e="ENVMAP_BLENDING_MIX";break;case _P:e="ENVMAP_BLENDING_ADD";break}return e}function C3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function R3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=E3(n),u=T3(n),c=w3(n),f=A3(n),d=C3(n),p=m3(n),_=g3(s),y=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Bo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Bo).join(`
`),h.length>0&&(h+=`
`)):(m=[N0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),h=[N0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?Ue.tonemapping_pars_fragment:"",n.toneMapping!==rr?p3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,h3("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bo).join(`
`)),o=eh(o),o=b0(o,n),o=L0(o,n),a=eh(a),a=b0(a,n),a=L0(a,n),o=D0(o),a=D0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===qv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=v+m+o,S=v+h+a,C=R0(r,r.VERTEX_SHADER,g),T=R0(r,r.FRAGMENT_SHADER,S);r.attachShader(y,C),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(I){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(y).trim(),N=r.getShaderInfoLog(C).trim(),Y=r.getShaderInfoLog(T).trim();let $=!0,te=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,T);else{const X=P0(r,C,"vertex"),L=P0(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+X+`
`+L)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(N===""||Y==="")&&(te=!1);te&&(I.diagnostics={runnable:$,programLog:j,vertexShader:{log:N,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(C),r.deleteShader(T),P=new Zl(r,y),E=v3(r,y)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,u3)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=c3++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}let P3=0;class b3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new L3(e),n.set(e,i)),i}}class L3{constructor(e){this.id=P3++,this.code=e,this.usedTimes=0}}function D3(t,e,n,i,r,s,o){const a=new tM,l=new b3,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,x,I,j,N){const Y=j.fog,$=N.geometry,te=E.isMeshStandardMaterial?j.environment:null,X=(E.isMeshStandardMaterial?n:e).get(E.envMap||te),L=X&&X.mapping===fc?X.image.height:null,H=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const G=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ie=G!==void 0?G.length:0;let he=0;$.morphAttributes.position!==void 0&&(he=1),$.morphAttributes.normal!==void 0&&(he=2),$.morphAttributes.color!==void 0&&(he=3);let Be,W,ee,ue;if(H){const kt=Jn[H];Be=kt.vertexShader,W=kt.fragmentShader}else Be=E.vertexShader,W=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),ue=l.getFragmentShaderID(E);const re=t.getRenderTarget(),Te=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,ze=!!E.map,O=!!E.matcap,ke=!!X,Ae=!!E.aoMap,Tt=!!E.lightMap,Pe=!!E.bumpMap,Ke=!!E.normalMap,R=!!E.displacementMap,M=!!E.emissiveMap,z=!!E.metalnessMap,q=!!E.roughnessMap,Z=E.anisotropy>0,Q=E.clearcoat>0,Ee=E.iridescence>0,ne=E.sheen>0,ye=E.transmission>0,we=Z&&!!E.anisotropyMap,ae=Q&&!!E.clearcoatMap,de=Q&&!!E.clearcoatNormalMap,be=Q&&!!E.clearcoatRoughnessMap,pe=Ee&&!!E.iridescenceMap,me=Ee&&!!E.iridescenceThicknessMap,Ve=ne&&!!E.sheenColorMap,He=ne&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,je=!!E.specularColorMap,st=!!E.specularIntensityMap,ve=ye&&!!E.transmissionMap,b=ye&&!!E.thicknessMap,oe=!!E.gradientMap,se=!!E.alphaMap,_e=E.alphaTest>0,xe=!!E.alphaHash,Qe=!!E.extensions;let ot=rr;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ot=t.toneMapping);const ct={shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:Be,fragmentShader:W,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Re,instancing:Te,instancingColor:Te&&N.instanceColor!==null,instancingMorph:Te&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:mr,alphaToCoverage:!!E.alphaToCoverage,map:ze,matcap:O,envMap:ke,envMapMode:ke&&X.mapping,envMapCubeUVHeight:L,aoMap:Ae,lightMap:Tt,bumpMap:Pe,normalMap:Ke,displacementMap:d&&R,emissiveMap:M,normalMapObjectSpace:Ke&&E.normalMapType===VP,normalMapTangentSpace:Ke&&E.normalMapType===BP,metalnessMap:z,roughnessMap:q,anisotropy:Z,anisotropyMap:we,clearcoat:Q,clearcoatMap:ae,clearcoatNormalMap:de,clearcoatRoughnessMap:be,iridescence:Ee,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:ne,sheenColorMap:Ve,sheenRoughnessMap:He,specularMap:Ye,specularColorMap:je,specularIntensityMap:st,transmission:ye,transmissionMap:ve,thicknessMap:b,gradientMap:oe,opaque:E.transparent===!1&&E.blending===Gs&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:_e,alphaHash:xe,combine:E.combine,mapUv:ze&&y(E.map.channel),aoMapUv:Ae&&y(E.aoMap.channel),lightMapUv:Tt&&y(E.lightMap.channel),bumpMapUv:Pe&&y(E.bumpMap.channel),normalMapUv:Ke&&y(E.normalMap.channel),displacementMapUv:R&&y(E.displacementMap.channel),emissiveMapUv:M&&y(E.emissiveMap.channel),metalnessMapUv:z&&y(E.metalnessMap.channel),roughnessMapUv:q&&y(E.roughnessMap.channel),anisotropyMapUv:we&&y(E.anisotropyMap.channel),clearcoatMapUv:ae&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:me&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:He&&y(E.sheenRoughnessMap.channel),specularMapUv:Ye&&y(E.specularMap.channel),specularColorMapUv:je&&y(E.specularColorMap.channel),specularIntensityMapUv:st&&y(E.specularIntensityMap.channel),transmissionMapUv:ve&&y(E.transmissionMap.channel),thicknessMapUv:b&&y(E.thicknessMap.channel),alphaMapUv:se&&y(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ke||Z),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!$.attributes.uv&&(ze||se),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:he,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&qe.getTransfer(E.map.colorSpace)===nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yi,flipSided:E.side===Xt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ct.vertexUv1s=u.has(1),ct.vertexUv2s=u.has(2),ct.vertexUv3s=u.has(3),u.clear(),ct}function h(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)x.push(I),x.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(x,E),g(x,E),x.push(t.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function v(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function g(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),E.push(a.mask)}function S(E){const x=_[E.type];let I;if(x){const j=Jn[x];I=p2.clone(j.uniforms)}else I=E.uniforms;return I}function C(E,x){let I;for(let j=0,N=c.length;j<N;j++){const Y=c[j];if(Y.cacheKey===x){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new R3(t,x,E,s),c.push(I)),I}function T(E){if(--E.usedTimes===0){const x=c.indexOf(E);c[x]=c[c.length-1],c.pop(),E.destroy()}}function A(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:P}}function N3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function I3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function I0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function U0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,y,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function a(f,d,p,_,y,m){const h=o(f,d,p,_,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,y,m){const h=o(f,d,p,_,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||I3),i.length>1&&i.sort(d||I0),r.length>1&&r.sort(d||I0)}function c(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function U3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new U0,t.set(i,[o])):r>=s.length?(o=new U0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function F3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Xe};break;case"SpotLight":n={position:new F,direction:new F,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function O3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let k3=0;function B3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function V3(t){const e=new F3,n=O3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new St,o=new St;function a(u,c){let f=0,d=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let _=0,y=0,m=0,h=0,v=0,g=0,S=0,C=0,T=0,A=0,P=0;u.sort(B3);const E=c===!0?Math.PI:1;for(let I=0,j=u.length;I<j;I++){const N=u[I],Y=N.color,$=N.intensity,te=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=Y.r*$*E,d+=Y.g*$*E,p+=Y.b*$*E;else if(N.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(N.sh.coefficients[L],$);P++}else if(N.isDirectionalLight){const L=e.get(N);if(L.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const H=N.shadow,G=n.get(N);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,i.directionalShadow[_]=G,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=N.shadow.matrix,g++}i.directional[_]=L,_++}else if(N.isSpotLight){const L=e.get(N);L.position.setFromMatrixPosition(N.matrixWorld),L.color.copy(Y).multiplyScalar($*E),L.distance=te,L.coneCos=Math.cos(N.angle),L.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),L.decay=N.decay,i.spot[m]=L;const H=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,H.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[m]=H.matrix,N.castShadow){const G=n.get(N);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,i.spotShadow[m]=G,i.spotShadowMap[m]=X,C++}m++}else if(N.isRectAreaLight){const L=e.get(N);L.color.copy(Y).multiplyScalar($),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),i.rectArea[h]=L,h++}else if(N.isPointLight){const L=e.get(N);if(L.color.copy(N.color).multiplyScalar(N.intensity*E),L.distance=N.distance,L.decay=N.decay,N.castShadow){const H=N.shadow,G=n.get(N);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,i.pointShadow[y]=G,i.pointShadowMap[y]=X,i.pointShadowMatrix[y]=N.shadow.matrix,S++}i.point[y]=L,y++}else if(N.isHemisphereLight){const L=e.get(N);L.skyColor.copy(N.color).multiplyScalar($*E),L.groundColor.copy(N.groundColor).multiplyScalar($*E),i.hemi[v]=L,v++}}h>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;const x=i.hash;(x.directionalLength!==_||x.pointLength!==y||x.spotLength!==m||x.rectAreaLength!==h||x.hemiLength!==v||x.numDirectionalShadows!==g||x.numPointShadows!==S||x.numSpotShadows!==C||x.numSpotMaps!==T||x.numLightProbes!==P)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=h,i.point.length=y,i.hemi.length=v,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,x.directionalLength=_,x.pointLength=y,x.spotLength=m,x.rectAreaLength=h,x.hemiLength=v,x.numDirectionalShadows=g,x.numPointShadows=S,x.numSpotShadows=C,x.numSpotMaps=T,x.numLightProbes=P,i.version=k3++)}function l(u,c){let f=0,d=0,p=0,_=0,y=0;const m=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const g=u[h];if(g.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(g.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function F0(t){const e=new V3(t),n=[],i=[];function r(){n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(c){e.setup(n,c)}function l(c){e.setupView(n,c)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function z3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new F0(t),e.set(r,[a])):s>=o.length?(a=new F0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class H3 extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G3 extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const W3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X3(t,e,n){let i=new lM;const r=new We,s=new We,o=new Ut,a=new H3({depthPacking:kP}),l=new G3,u={},c=n.maxTextureSize,f={[ur]:Xt,[Xt]:ur,[yi]:yi},d=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:W3,fragmentShader:j3}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new mn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=VS;let h=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),x=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),j=t.state;j.setBlending(ir),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const N=h!==gi&&this.type===gi,Y=h===gi&&this.type!==gi;for(let $=0,te=T.length;$<te;$++){const X=T[$],L=X.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const H=L.getFrameExtents();if(r.multiply(H),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/H.x),r.x=s.x*H.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/H.y),r.y=s.y*H.y,L.mapSize.y=s.y)),L.map===null||N===!0||Y===!0){const ie=this.type!==gi?{minFilter:Ln,magFilter:Ln}:{};L.map!==null&&L.map.dispose(),L.map=new $r(r.x,r.y,ie),L.map.texture.name=X.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const G=L.getViewportCount();for(let ie=0;ie<G;ie++){const he=L.getViewport(ie);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),j.viewport(o),L.updateMatrices(X,ie),i=L.getFrustum(),S(A,P,L.camera,X,this.type)}L.isPointLightShadow!==!0&&this.type===gi&&v(L,P),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(E,x,I)};function v(T,A){const P=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $r(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,P,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,P,p,y,null)}function g(T,A,P,E){let x=null;const I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)x=I;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const j=x.uuid,N=A.uuid;let Y=u[j];Y===void 0&&(Y={},u[j]=Y);let $=Y[N];$===void 0&&($=x.clone(),Y[N]=$,A.addEventListener("dispose",C)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,E===gi?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const j=t.properties.get(x);j.light=P}return x}function S(T,A,P,E,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===gi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const N=e.update(T),Y=T.material;if(Array.isArray(Y)){const $=N.groups;for(let te=0,X=$.length;te<X;te++){const L=$[te],H=Y[L.materialIndex];if(H&&H.visible){const G=g(T,H,E,x);T.onBeforeShadow(t,T,A,P,N,G,L),t.renderBufferDirect(P,null,N,G,T,L),T.onAfterShadow(t,T,A,P,N,G,L)}}}else if(Y.visible){const $=g(T,Y,E,x);T.onBeforeShadow(t,T,A,P,N,$,null),t.renderBufferDirect(P,null,N,$,T,null),T.onAfterShadow(t,T,A,P,N,$,null)}}const j=T.children;for(let N=0,Y=j.length;N<Y;N++)S(j[N],A,P,E,x)}function C(T){T.target.removeEventListener("dispose",C);for(const P in u){const E=u[P],x=T.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function Y3(t){function e(){let b=!1;const oe=new Ut;let se=null;const _e=new Ut(0,0,0,0);return{setMask:function(xe){se!==xe&&!b&&(t.colorMask(xe,xe,xe,xe),se=xe)},setLocked:function(xe){b=xe},setClear:function(xe,Qe,ot,ct,kt){kt===!0&&(xe*=ct,Qe*=ct,ot*=ct),oe.set(xe,Qe,ot,ct),_e.equals(oe)===!1&&(t.clearColor(xe,Qe,ot,ct),_e.copy(oe))},reset:function(){b=!1,se=null,_e.set(-1,0,0,0)}}}function n(){let b=!1,oe=null,se=null,_e=null;return{setTest:function(xe){xe?ue(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(xe){oe!==xe&&!b&&(t.depthMask(xe),oe=xe)},setFunc:function(xe){if(se!==xe){switch(xe){case cP:t.depthFunc(t.NEVER);break;case fP:t.depthFunc(t.ALWAYS);break;case dP:t.depthFunc(t.LESS);break;case Du:t.depthFunc(t.LEQUAL);break;case hP:t.depthFunc(t.EQUAL);break;case pP:t.depthFunc(t.GEQUAL);break;case mP:t.depthFunc(t.GREATER);break;case gP:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=xe}},setLocked:function(xe){b=xe},setClear:function(xe){_e!==xe&&(t.clearDepth(xe),_e=xe)},reset:function(){b=!1,oe=null,se=null,_e=null}}}function i(){let b=!1,oe=null,se=null,_e=null,xe=null,Qe=null,ot=null,ct=null,kt=null;return{setTest:function(et){b||(et?ue(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(et){oe!==et&&!b&&(t.stencilMask(et),oe=et)},setFunc:function(et,$n,qn){(se!==et||_e!==$n||xe!==qn)&&(t.stencilFunc(et,$n,qn),se=et,_e=$n,xe=qn)},setOp:function(et,$n,qn){(Qe!==et||ot!==$n||ct!==qn)&&(t.stencilOp(et,$n,qn),Qe=et,ot=$n,ct=qn)},setLocked:function(et){b=et},setClear:function(et){kt!==et&&(t.clearStencil(et),kt=et)},reset:function(){b=!1,oe=null,se=null,_e=null,xe=null,Qe=null,ot=null,ct=null,kt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],p=null,_=!1,y=null,m=null,h=null,v=null,g=null,S=null,C=null,T=new Xe(0,0,0),A=0,P=!1,E=null,x=null,I=null,j=null,N=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,te=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=te>=2);let L=null,H={};const G=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),he=new Ut().fromArray(G),Be=new Ut().fromArray(ie);function W(b,oe,se,_e){const xe=new Uint8Array(4),Qe=t.createTexture();t.bindTexture(b,Qe),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<se;ot++)b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(oe+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return Qe}const ee={};ee[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(Du),Pe(!1),Ke(_v),ue(t.CULL_FACE),Ae(ir);function ue(b){u[b]!==!0&&(t.enable(b),u[b]=!0)}function re(b){u[b]!==!1&&(t.disable(b),u[b]=!1)}function Te(b,oe){return c[b]!==oe?(t.bindFramebuffer(b,oe),c[b]=oe,b===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=oe),b===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Re(b,oe){let se=d,_e=!1;if(b){se=f.get(oe),se===void 0&&(se=[],f.set(oe,se));const xe=b.textures;if(se.length!==xe.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Qe=0,ot=xe.length;Qe<ot;Qe++)se[Qe]=t.COLOR_ATTACHMENT0+Qe;se.length=xe.length,_e=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,_e=!0);_e&&t.drawBuffers(se)}function ze(b){return p!==b?(t.useProgram(b),p=b,!0):!1}const O={[Lr]:t.FUNC_ADD,[YR]:t.FUNC_SUBTRACT,[$R]:t.FUNC_REVERSE_SUBTRACT};O[qR]=t.MIN,O[KR]=t.MAX;const ke={[ZR]:t.ZERO,[QR]:t.ONE,[JR]:t.SRC_COLOR,[Yd]:t.SRC_ALPHA,[sP]:t.SRC_ALPHA_SATURATE,[iP]:t.DST_COLOR,[tP]:t.DST_ALPHA,[eP]:t.ONE_MINUS_SRC_COLOR,[$d]:t.ONE_MINUS_SRC_ALPHA,[rP]:t.ONE_MINUS_DST_COLOR,[nP]:t.ONE_MINUS_DST_ALPHA,[oP]:t.CONSTANT_COLOR,[aP]:t.ONE_MINUS_CONSTANT_COLOR,[lP]:t.CONSTANT_ALPHA,[uP]:t.ONE_MINUS_CONSTANT_ALPHA};function Ae(b,oe,se,_e,xe,Qe,ot,ct,kt,et){if(b===ir){_===!0&&(re(t.BLEND),_=!1);return}if(_===!1&&(ue(t.BLEND),_=!0),b!==XR){if(b!==y||et!==P){if((m!==Lr||g!==Lr)&&(t.blendEquation(t.FUNC_ADD),m=Lr,g=Lr),et)switch(b){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yv:t.blendFunc(t.ONE,t.ONE);break;case xv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case xv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}h=null,v=null,S=null,C=null,T.set(0,0,0),A=0,y=b,P=et}return}xe=xe||oe,Qe=Qe||se,ot=ot||_e,(oe!==m||xe!==g)&&(t.blendEquationSeparate(O[oe],O[xe]),m=oe,g=xe),(se!==h||_e!==v||Qe!==S||ot!==C)&&(t.blendFuncSeparate(ke[se],ke[_e],ke[Qe],ke[ot]),h=se,v=_e,S=Qe,C=ot),(ct.equals(T)===!1||kt!==A)&&(t.blendColor(ct.r,ct.g,ct.b,kt),T.copy(ct),A=kt),y=b,P=!1}function Tt(b,oe){b.side===yi?re(t.CULL_FACE):ue(t.CULL_FACE);let se=b.side===Xt;oe&&(se=!se),Pe(se),b.blending===Gs&&b.transparent===!1?Ae(ir):Ae(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),s.setFunc(b.depthFunc),s.setTest(b.depthTest),s.setMask(b.depthWrite),r.setMask(b.colorWrite);const _e=b.stencilWrite;o.setTest(_e),_e&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),M(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(b){E!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),E=b)}function Ke(b){b!==GR?(ue(t.CULL_FACE),b!==x&&(b===_v?t.cullFace(t.BACK):b===WR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),x=b}function R(b){b!==I&&($&&t.lineWidth(b),I=b)}function M(b,oe,se){b?(ue(t.POLYGON_OFFSET_FILL),(j!==oe||N!==se)&&(t.polygonOffset(oe,se),j=oe,N=se)):re(t.POLYGON_OFFSET_FILL)}function z(b){b?ue(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function q(b){b===void 0&&(b=t.TEXTURE0+Y-1),L!==b&&(t.activeTexture(b),L=b)}function Z(b,oe,se){se===void 0&&(L===null?se=t.TEXTURE0+Y-1:se=L);let _e=H[se];_e===void 0&&(_e={type:void 0,texture:void 0},H[se]=_e),(_e.type!==b||_e.texture!==oe)&&(L!==se&&(t.activeTexture(se),L=se),t.bindTexture(b,oe||ee[b]),_e.type=b,_e.texture=oe)}function Q(){const b=H[L];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function Ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ye(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function be(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pe(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function He(b){he.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),he.copy(b))}function Ye(b){Be.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),Be.copy(b))}function je(b,oe){let se=l.get(oe);se===void 0&&(se=new WeakMap,l.set(oe,se));let _e=se.get(b);_e===void 0&&(_e=t.getUniformBlockIndex(oe,b.name),se.set(b,_e))}function st(b,oe){const _e=l.get(oe).get(b);a.get(oe)!==_e&&(t.uniformBlockBinding(oe,_e,b.__bindingPointIndex),a.set(oe,_e))}function ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,H={},c={},f=new WeakMap,d=[],p=null,_=!1,y=null,m=null,h=null,v=null,g=null,S=null,C=null,T=new Xe(0,0,0),A=0,P=!1,E=null,x=null,I=null,j=null,N=null,he.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:re,bindFramebuffer:Te,drawBuffers:Re,useProgram:ze,setBlending:Ae,setMaterial:Tt,setFlipSided:Pe,setCullFace:Ke,setLineWidth:R,setPolygonOffset:M,setScissorTest:z,activeTexture:q,bindTexture:Z,unbindTexture:Q,compressedTexImage2D:Ee,compressedTexImage3D:ne,texImage2D:me,texImage3D:Ve,updateUBOMapping:je,uniformBlockBinding:st,texStorage2D:be,texStorage3D:pe,texSubImage2D:ye,texSubImage3D:we,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:He,viewport:Ye,reset:ve}}function $3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new We,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):ku("canvas")}function y(R,M,z){let q=1;const Z=Ke(R);if((Z.width>z||Z.height>z)&&(q=z/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(q*Z.width),Ee=Math.floor(q*Z.height);f===void 0&&(f=_(Q,Ee));const ne=M?_(Q,Ee):f;return ne.width=Q,ne.height=Ee,ne.getContext("2d").drawImage(R,0,0,Q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Q+"x"+Ee+")."),ne}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Ln&&R.minFilter!==Wn}function h(R){t.generateMipmap(R)}function v(R,M,z,q,Z=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=M;if(M===t.RED&&(z===t.FLOAT&&(Q=t.R32F),z===t.HALF_FLOAT&&(Q=t.R16F),z===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.R8UI),z===t.UNSIGNED_SHORT&&(Q=t.R16UI),z===t.UNSIGNED_INT&&(Q=t.R32UI),z===t.BYTE&&(Q=t.R8I),z===t.SHORT&&(Q=t.R16I),z===t.INT&&(Q=t.R32I)),M===t.RG&&(z===t.FLOAT&&(Q=t.RG32F),z===t.HALF_FLOAT&&(Q=t.RG16F),z===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RG8UI),z===t.UNSIGNED_SHORT&&(Q=t.RG16UI),z===t.UNSIGNED_INT&&(Q=t.RG32UI),z===t.BYTE&&(Q=t.RG8I),z===t.SHORT&&(Q=t.RG16I),z===t.INT&&(Q=t.RG32I)),M===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),M===t.RGBA){const Ee=Z?Iu:qe.getTransfer(q);z===t.FLOAT&&(Q=t.RGBA32F),z===t.HALF_FLOAT&&(Q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Q=Ee===nt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ln&&R.minFilter!==Wn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function S(R){const M=R.target;M.removeEventListener("dispose",S),T(M),M.isVideoTexture&&c.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),P(M)}function T(R){const M=i.get(R);if(M.__webglInit===void 0)return;const z=R.source,q=d.get(z);if(q){const Z=q[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(R),Object.keys(q).length===0&&d.delete(z)}i.remove(R)}function A(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const z=R.source,q=d.get(z);delete q[M.__cacheKey],o.memory.textures--}function P(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Z=0;Z<M.__webglFramebuffer[q].length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[q][Z]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=R.textures;for(let q=0,Z=z.length;q<Z;q++){const Q=i.get(z[q]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(z[q])}i.remove(R)}let E=0;function x(){E=0}function I(){const R=E;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function j(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function N(R,M){const z=i.get(R);if(R.isVideoTexture&&Tt(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(z,R,M);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+M)}function Y(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){he(z,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+M)}function $(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){he(z,R,M);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+M)}function te(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Be(z,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+M)}const X={[Zd]:t.REPEAT,[Or]:t.CLAMP_TO_EDGE,[Qd]:t.MIRRORED_REPEAT},L={[Ln]:t.NEAREST,[AP]:t.NEAREST_MIPMAP_NEAREST,[ul]:t.NEAREST_MIPMAP_LINEAR,[Wn]:t.LINEAR,[sf]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},H={[zP]:t.NEVER,[YP]:t.ALWAYS,[HP]:t.LESS,[ZS]:t.LEQUAL,[GP]:t.EQUAL,[XP]:t.GEQUAL,[WP]:t.GREATER,[jP]:t.NOTEQUAL};function G(R,M){if(M.type===$i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Wn||M.magFilter===sf||M.magFilter===ul||M.magFilter===kr||M.minFilter===Wn||M.minFilter===sf||M.minFilter===ul||M.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,X[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,X[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,X[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,L[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,L[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,H[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ln||M.minFilter!==ul&&M.minFilter!==kr||M.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ie(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",S));const q=M.source;let Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));const Q=j(M);if(Q!==R.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[Q].usedTimes++;const Ee=Z[R.__cacheKey];Ee!==void 0&&(Z[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&A(M)),R.__cacheKey=Q,R.__webglTexture=Z[Q].texture}return z}function he(R,M,z){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const Z=ie(R,M),Q=M.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+z);const Ee=i.get(Q);if(Q.version!==Ee.__version||Z===!0){n.activeTexture(t.TEXTURE0+z);const ne=qe.getPrimaries(qe.workingColorSpace),ye=M.colorSpace===ji?null:qe.getPrimaries(M.colorSpace),we=M.colorSpace===ji||ne===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ae=y(M.image,!1,r.maxTextureSize);ae=Pe(M,ae);const de=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let pe=v(M.internalFormat,de,be,M.colorSpace,M.isVideoTexture);G(q,M);let me;const Ve=M.mipmaps,He=M.isVideoTexture!==!0&&pe!==KS,Ye=Ee.__version===void 0||Z===!0,je=Q.dataReady,st=g(M,ae);if(M.isDepthTexture)pe=t.DEPTH_COMPONENT16,M.type===$i?pe=t.DEPTH_COMPONENT32F:M.type===so?pe=t.DEPTH_COMPONENT24:M.type===Na&&(pe=t.DEPTH24_STENCIL8),Ye&&(He?n.texStorage2D(t.TEXTURE_2D,1,pe,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,pe,ae.width,ae.height,0,de,be,null));else if(M.isDataTexture)if(Ve.length>0){He&&Ye&&n.texStorage2D(t.TEXTURE_2D,st,pe,Ve[0].width,Ve[0].height);for(let ve=0,b=Ve.length;ve<b;ve++)me=Ve[ve],He?je&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,me.width,me.height,de,be,me.data):n.texImage2D(t.TEXTURE_2D,ve,pe,me.width,me.height,0,de,be,me.data);M.generateMipmaps=!1}else He?(Ye&&n.texStorage2D(t.TEXTURE_2D,st,pe,ae.width,ae.height),je&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,de,be,ae.data)):n.texImage2D(t.TEXTURE_2D,0,pe,ae.width,ae.height,0,de,be,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,st,pe,Ve[0].width,Ve[0].height,ae.depth);for(let ve=0,b=Ve.length;ve<b;ve++)me=Ve[ve],M.format!==ni?de!==null?He?je&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,me.width,me.height,ae.depth,de,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,pe,me.width,me.height,ae.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?je&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,me.width,me.height,ae.depth,de,be,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,pe,me.width,me.height,ae.depth,0,de,be,me.data)}else{He&&Ye&&n.texStorage2D(t.TEXTURE_2D,st,pe,Ve[0].width,Ve[0].height);for(let ve=0,b=Ve.length;ve<b;ve++)me=Ve[ve],M.format!==ni?de!==null?He?je&&n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,me.width,me.height,de,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?je&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,me.width,me.height,de,be,me.data):n.texImage2D(t.TEXTURE_2D,ve,pe,me.width,me.height,0,de,be,me.data)}else if(M.isDataArrayTexture)He?(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,st,pe,ae.width,ae.height,ae.depth),je&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,de,be,ae.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,ae.width,ae.height,ae.depth,0,de,be,ae.data);else if(M.isData3DTexture)He?(Ye&&n.texStorage3D(t.TEXTURE_3D,st,pe,ae.width,ae.height,ae.depth),je&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,de,be,ae.data)):n.texImage3D(t.TEXTURE_3D,0,pe,ae.width,ae.height,ae.depth,0,de,be,ae.data);else if(M.isFramebufferTexture){if(Ye)if(He)n.texStorage2D(t.TEXTURE_2D,st,pe,ae.width,ae.height);else{let ve=ae.width,b=ae.height;for(let oe=0;oe<st;oe++)n.texImage2D(t.TEXTURE_2D,oe,pe,ve,b,0,de,be,null),ve>>=1,b>>=1}}else if(Ve.length>0){if(He&&Ye){const ve=Ke(Ve[0]);n.texStorage2D(t.TEXTURE_2D,st,pe,ve.width,ve.height)}for(let ve=0,b=Ve.length;ve<b;ve++)me=Ve[ve],He?je&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,de,be,me):n.texImage2D(t.TEXTURE_2D,ve,pe,de,be,me);M.generateMipmaps=!1}else if(He){if(Ye){const ve=Ke(ae);n.texStorage2D(t.TEXTURE_2D,st,pe,ve.width,ve.height)}je&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,be,ae)}else n.texImage2D(t.TEXTURE_2D,0,pe,de,be,ae);m(M)&&h(q),Ee.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Be(R,M,z){if(M.image.length!==6)return;const q=ie(R,M),Z=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const Q=i.get(Z);if(Z.version!==Q.__version||q===!0){n.activeTexture(t.TEXTURE0+z);const Ee=qe.getPrimaries(qe.workingColorSpace),ne=M.colorSpace===ji?null:qe.getPrimaries(M.colorSpace),ye=M.colorSpace===ji||Ee===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,de=[];for(let b=0;b<6;b++)!we&&!ae?de[b]=y(M.image[b],!0,r.maxCubemapSize):de[b]=ae?M.image[b].image:M.image[b],de[b]=Pe(M,de[b]);const be=de[0],pe=s.convert(M.format,M.colorSpace),me=s.convert(M.type),Ve=v(M.internalFormat,pe,me,M.colorSpace),He=M.isVideoTexture!==!0,Ye=Q.__version===void 0||q===!0,je=Z.dataReady;let st=g(M,be);G(t.TEXTURE_CUBE_MAP,M);let ve;if(we){He&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,st,Ve,be.width,be.height);for(let b=0;b<6;b++){ve=de[b].mipmaps;for(let oe=0;oe<ve.length;oe++){const se=ve[oe];M.format!==ni?pe!==null?He?je&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,oe,0,0,se.width,se.height,pe,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,oe,Ve,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?je&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,oe,0,0,se.width,se.height,pe,me,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,oe,Ve,se.width,se.height,0,pe,me,se.data)}}}else{if(ve=M.mipmaps,He&&Ye){ve.length>0&&st++;const b=Ke(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,st,Ve,b.width,b.height)}for(let b=0;b<6;b++)if(ae){He?je&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,de[b].width,de[b].height,pe,me,de[b].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,Ve,de[b].width,de[b].height,0,pe,me,de[b].data);for(let oe=0;oe<ve.length;oe++){const _e=ve[oe].image[b].image;He?je&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,oe+1,0,0,_e.width,_e.height,pe,me,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,oe+1,Ve,_e.width,_e.height,0,pe,me,_e.data)}}else{He?je&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,pe,me,de[b]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,Ve,pe,me,de[b]);for(let oe=0;oe<ve.length;oe++){const se=ve[oe];He?je&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,oe+1,0,0,pe,me,se.image[b]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+b,oe+1,Ve,pe,me,se.image[b])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),Q.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function W(R,M,z,q,Z,Q){const Ee=s.convert(z.format,z.colorSpace),ne=s.convert(z.type),ye=v(z.internalFormat,Ee,ne,z.colorSpace);if(!i.get(M).__hasExternalTextures){const ae=Math.max(1,M.width>>Q),de=Math.max(1,M.height>>Q);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,Q,ye,ae,de,M.depth,0,Ee,ne,null):n.texImage2D(Z,Q,ye,ae,de,0,Ee,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ae(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Z,i.get(z).__webglTexture,0,ke(M)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Z,i.get(z).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ee(R,M,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let q=t.DEPTH_COMPONENT24;if(z||Ae(M)){const Z=M.depthTexture;Z&&Z.isDepthTexture&&(Z.type===$i?q=t.DEPTH_COMPONENT32F:Z.type===so&&(q=t.DEPTH_COMPONENT24));const Q=ke(M);Ae(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,q,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,q,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const q=ke(M);z&&Ae(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,M.width,M.height):Ae(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const q=M.textures;for(let Z=0;Z<q.length;Z++){const Q=q[Z],Ee=s.convert(Q.format,Q.colorSpace),ne=s.convert(Q.type),ye=v(Q.internalFormat,Ee,ne,Q.colorSpace),we=ke(M);z&&Ae(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,ye,M.width,M.height):Ae(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,ye,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ye,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);const q=i.get(M.depthTexture).__webglTexture,Z=ke(M);if(M.depthTexture.format===Ws)Ae(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(M.depthTexture.format===Sa)Ae(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function re(R){const M=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]=t.createRenderbuffer(),ee(M.__webglDepthbuffer[q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ee(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(R,M,z){const q=i.get(R);M!==void 0&&W(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&re(R)}function Re(R){const M=R.texture,z=i.get(R),q=i.get(M);R.addEventListener("dispose",C);const Z=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Ee=Z.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),Q){z.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ne]=[];for(let ye=0;ye<M.mipmaps.length;ye++)z.__webglFramebuffer[ne][ye]=t.createFramebuffer()}else z.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)z.__webglFramebuffer[ne]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ne=0,ye=Z.length;ne<ye;ne++){const we=i.get(Z[ne]);we.__webglTexture===void 0&&(we.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ae(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){const ye=Z[ne];z.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ne]);const we=s.convert(ye.format,ye.colorSpace),ae=s.convert(ye.type),de=v(ye.internalFormat,we,ae,ye.colorSpace,R.isXRRenderTarget===!0),be=ke(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,de,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,z.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),ee(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),G(t.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)W(z.__webglFramebuffer[ne][ye],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye);else W(z.__webglFramebuffer[ne],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ne=0,ye=Z.length;ne<ye;ne++){const we=Z[ne],ae=i.get(we);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),G(t.TEXTURE_2D,we),W(z.__webglFramebuffer,R,we,t.COLOR_ATTACHMENT0+ne,t.TEXTURE_2D,0),m(we)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,q.__webglTexture),G(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)W(z.__webglFramebuffer[ye],R,M,t.COLOR_ATTACHMENT0,ne,ye);else W(z.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ne,0);m(M)&&h(ne),n.unbindTexture()}R.depthBuffer&&re(R)}function ze(R){const M=R.textures;for(let z=0,q=M.length;z<q;z++){const Z=M[z];if(m(Z)){const Q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(Z).__webglTexture;n.bindTexture(Q,Ee),h(Q),n.unbindTexture()}}}function O(R){if(R.samples>0&&Ae(R)===!1){const M=R.textures,z=R.width,q=R.height;let Z=t.COLOR_BUFFER_BIT;const Q=[],Ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=i.get(R),ye=M.length>1;if(ye)for(let we=0;we<M.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let we=0;we<M.length;we++){Q.push(t.COLOR_ATTACHMENT0+we),R.depthBuffer&&Q.push(Ee);const ae=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(ae===!1&&(R.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&ne.__isTransmissionRenderTarget!==!0&&(Z|=t.STENCIL_BUFFER_BIT)),ye&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ne.__webglColorRenderbuffer[we]),ae===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ee]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ee])),ye){const de=i.get(M[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,z,q,0,0,z,q,Z,t.NEAREST),l&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Q)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let we=0;we<M.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ne.__webglColorRenderbuffer[we]);const ae=i.get(M[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function ke(R){return Math.min(r.maxSamples,R.samples)}function Ae(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function Pe(R,M){const z=R.colorSpace,q=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==mr&&z!==ji&&(qe.getTransfer(z)===nt?(q!==ni||Z!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=x,this.setTexture2D=N,this.setTexture2DArray=Y,this.setTexture3D=$,this.setTextureCube=te,this.rebindTextures=Te,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Ae}function q3(t,e){function n(i,r=ji){let s;const o=qe.getTransfer(r);if(i===sr)return t.UNSIGNED_BYTE;if(i===jS)return t.UNSIGNED_SHORT_4_4_4_4;if(i===XS)return t.UNSIGNED_SHORT_5_5_5_1;if(i===PP)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===CP)return t.BYTE;if(i===RP)return t.SHORT;if(i===GS)return t.UNSIGNED_SHORT;if(i===WS)return t.INT;if(i===so)return t.UNSIGNED_INT;if(i===$i)return t.FLOAT;if(i===Nu)return t.HALF_FLOAT;if(i===bP)return t.ALPHA;if(i===LP)return t.RGB;if(i===ni)return t.RGBA;if(i===DP)return t.LUMINANCE;if(i===NP)return t.LUMINANCE_ALPHA;if(i===Ws)return t.DEPTH_COMPONENT;if(i===Sa)return t.DEPTH_STENCIL;if(i===IP)return t.RED;if(i===YS)return t.RED_INTEGER;if(i===UP)return t.RG;if(i===$S)return t.RG_INTEGER;if(i===qS)return t.RGBA_INTEGER;if(i===of||i===af||i===lf||i===uf)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===of)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===af)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===of)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===af)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mv||i===Ev||i===Tv||i===wv)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mv)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ev)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tv)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wv)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===KS)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Av||i===Cv)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Av)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rv||i===Pv||i===bv||i===Lv||i===Dv||i===Nv||i===Iv||i===Uv||i===Fv||i===Ov||i===kv||i===Bv||i===Vv||i===zv)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Iv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ov)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zv)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cf||i===Hv||i===Gv)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cf)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hv)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gv)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===FP||i===Wv||i===jv||i===Xv)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wv)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jv)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xv)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class K3 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ll extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z3={type:"move"};class Of{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(u,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ll;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Q3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new cr({vertexShader:Q3,fragmentShader:J3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mn(new hc(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class tN extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const y=new eN,m=n.getContextAttributes();let h=null,v=null;const g=[],S=[],C=new We;let T=null;const A=new Pn;A.layers.enable(1),A.viewport=new Ut;const P=new Pn;P.layers.enable(2),P.viewport=new Ut;const E=[A,P],x=new K3;x.layers.enable(1),x.layers.enable(2);let I=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=g[W];return ee===void 0&&(ee=new Of,g[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=g[W];return ee===void 0&&(ee=new Of,g[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=g[W];return ee===void 0&&(ee=new Of,g[W]=ee),ee.getHandSpace()};function N(W){const ee=S.indexOf(W.inputSource);if(ee===-1)return;const ue=g[ee];ue!==void 0&&(ue.update(W.inputSource,W.frame,u||o),ue.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let W=0;W<g.length;W++){const ee=S[W];ee!==null&&(S[W]=null,g[W].disconnect(ee))}I=null,j=null,y.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,v=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new $r(p.framebufferWidth,p.framebufferHeight,{format:ni,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ue=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=m.stencil?Sa:Ws,ue=m.stencil?Na:so);const Te={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Te),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new $r(d.textureWidth,d.textureHeight,{format:ni,type:sr,depthTexture:new cM(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Re=e.properties.get(v);Re.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(W){for(let ee=0;ee<W.removed.length;ee++){const ue=W.removed[ee],re=S.indexOf(ue);re>=0&&(S[re]=null,g[re].disconnect(ue))}for(let ee=0;ee<W.added.length;ee++){const ue=W.added[ee];let re=S.indexOf(ue);if(re===-1){for(let Re=0;Re<g.length;Re++)if(Re>=S.length){S.push(ue),re=Re;break}else if(S[Re]===null){S[Re]=ue,re=Re;break}if(re===-1)break}const Te=g[re];Te&&Te.connect(ue)}}const te=new F,X=new F;function L(W,ee,ue){te.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(ue.matrixWorld);const re=te.distanceTo(X),Te=ee.projectionMatrix.elements,Re=ue.projectionMatrix.elements,ze=Te[14]/(Te[10]-1),O=Te[14]/(Te[10]+1),ke=(Te[9]+1)/Te[5],Ae=(Te[9]-1)/Te[5],Tt=(Te[8]-1)/Te[0],Pe=(Re[8]+1)/Re[0],Ke=ze*Tt,R=ze*Pe,M=re/(-Tt+Pe),z=M*-Tt;ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(z),W.translateZ(M),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const q=ze+M,Z=O+M,Q=Ke-z,Ee=R+(re-z),ne=ke*O/Z*q,ye=Ae*O/Z*q;W.projectionMatrix.makePerspective(Q,Ee,ne,ye,q,Z),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function H(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;y.texture!==null&&(W.near=y.depthNear,W.far=y.depthFar),x.near=P.near=A.near=W.near,x.far=P.far=A.far=W.far,(I!==x.near||j!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,j=x.far,A.near=I,A.far=j,P.near=I,P.far=j,A.updateProjectionMatrix(),P.updateProjectionMatrix(),W.updateProjectionMatrix());const ee=W.parent,ue=x.cameras;H(x,ee);for(let re=0;re<ue.length;re++)H(ue[re],ee);ue.length===2?L(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),G(W,x,ee)};function G(W,ee,ue){ue===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(ue.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Jd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null};let ie=null;function he(W,ee){if(c=ee.getViewerPose(u||o),_=ee,c!==null){const ue=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let re=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let Re=0;Re<ue.length;Re++){const ze=ue[Re];let O=null;if(p!==null)O=p.getViewport(ze);else{const Ae=f.getViewSubImage(d,ze);O=Ae.viewport,Re===0&&(e.setRenderTargetTextures(v,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(v))}let ke=E[Re];ke===void 0&&(ke=new Pn,ke.layers.enable(Re),ke.viewport=new Ut,E[Re]=ke),ke.matrix.fromArray(ze.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ze.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(O.x,O.y,O.width,O.height),Re===0&&(x.matrix.copy(ke.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),re===!0&&x.cameras.push(ke)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Re=f.getDepthInformation(ue[0]);Re&&Re.isValid&&Re.texture&&y.init(e,Re,r.renderState)}}for(let ue=0;ue<g.length;ue++){const re=S[ue],Te=g[ue];re!==null&&Te!==void 0&&Te.update(re,ee,u||o)}y.render(e,x),ie&&ie(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Be=new uM;Be.setAnimationLoop(he),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}}const Tr=new bi,nN=new St;function iN(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,sM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,g,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,g):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Xt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Xt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),g=v.envMap,S=v.envMapRotation;if(g&&(m.envMap.value=g,Tr.copy(S),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),m.envMapRotation.value.setFromMatrix4(nN.makeRotationFromEuler(Tr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*C,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function u(v,g){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(v,C);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function c(v){const g=f();v.__bindingPointIndex=g;const S=t.createBuffer(),C=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],S=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,A=S.length;T<A;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,x=P.length;E<x;E++){const I=P[E];if(p(I,T,E,C)===!0){const j=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let $=0;$<N.length;$++){const te=N[$],X=y(te);typeof te=="number"||typeof te=="boolean"?(I.__data[0]=te,t.bufferSubData(t.UNIFORM_BUFFER,j+Y,I.__data)):te.isMatrix3?(I.__data[0]=te.elements[0],I.__data[1]=te.elements[1],I.__data[2]=te.elements[2],I.__data[3]=0,I.__data[4]=te.elements[3],I.__data[5]=te.elements[4],I.__data[6]=te.elements[5],I.__data[7]=0,I.__data[8]=te.elements[6],I.__data[9]=te.elements[7],I.__data[10]=te.elements[8],I.__data[11]=0):(te.toArray(I.__data,Y),Y+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,S,C){const T=v.value,A=g+"_"+S;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(v){const g=v.uniforms;let S=0;const C=16;for(let A=0,P=g.length;A<P;A++){const E=Array.isArray(g[A])?g[A]:[g[A]];for(let x=0,I=E.length;x<I;x++){const j=E[x],N=Array.isArray(j.value)?j.value:[j.value];for(let Y=0,$=N.length;Y<$;Y++){const te=N[Y],X=y(te),L=S%C;L!==0&&C-L<X.boundary&&(S+=C-L),j.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=X.storage}}}const T=S%C;return T>0&&(S+=C-T),v.__size=S,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class sN{constructor(e={}){const{canvas:n=qP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this._useLegacyLights=!1,this.toneMapping=rr,this.toneMappingExposure=1;const g=this;let S=!1,C=0,T=0,A=null,P=-1,E=null;const x=new Ut,I=new Ut;let j=null;const N=new Xe(0);let Y=0,$=n.width,te=n.height,X=1,L=null,H=null;const G=new Ut(0,0,$,te),ie=new Ut(0,0,$,te);let he=!1;const Be=new lM;let W=!1,ee=!1;const ue=new St,re=new We,Te=new F,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return A===null?X:1}let O=i;function ke(w,U){const B=n.getContext(w,U);return B!==null?B:null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lp}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",_e,!1),O===null){const U="webgl2";if(O=ke(U,w),O===null)throw ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ae,Tt,Pe,Ke,R,M,z,q,Z,Q,Ee,ne,ye,we,ae,de,be,pe,me,Ve,He,Ye,je,st;function ve(){Ae=new hD(O),Ae.init(),Tt=new oD(O,Ae,e),Ye=new q3(O,Ae),Pe=new Y3(O),Ke=new gD(O),R=new N3,M=new $3(O,Ae,Pe,R,Tt,Ye,Ke),z=new lD(g),q=new dD(g),Z=new S2(O),je=new rD(O,Z),Q=new pD(O,Z,Ke,je),Ee=new _D(O,Q,Z,Ke),me=new vD(O,Tt,M),de=new aD(R),ne=new D3(g,z,q,Ae,Tt,je,de),ye=new iN(g,R),we=new U3,ae=new z3(Ae),pe=new iD(g,z,q,Pe,Ee,d,l),be=new X3(g,Ee,Tt),st=new rN(O,Ke,Tt,Pe),Ve=new sD(O,Ae,Ke),He=new mD(O,Ae,Ke),Ke.programs=ne.programs,g.capabilities=Tt,g.extensions=Ae,g.properties=R,g.renderLists=we,g.shadowMap=be,g.state=Pe,g.info=Ke}ve();const b=new tN(g,O);this.xr=b,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize($,te,!1))},this.getSize=function(w){return w.set($,te)},this.setSize=function(w,U,B=!0){if(b.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,te=U,n.width=Math.floor(w*X),n.height=Math.floor(U*X),B===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set($*X,te*X).floor()},this.setDrawingBufferSize=function(w,U,B){$=w,te=U,X=B,n.width=Math.floor(w*B),n.height=Math.floor(U*B),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(G)},this.setViewport=function(w,U,B,V){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,U,B,V),Pe.viewport(x.copy(G).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,U,B,V){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,U,B,V),Pe.scissor(I.copy(ie).multiplyScalar(X).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(w){Pe.setScissorTest(he=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){H=w},this.getClearColor=function(w){return w.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(w=!0,U=!0,B=!0){let V=0;if(w){let k=!1;if(A!==null){const ce=A.texture.format;k=ce===qS||ce===$S||ce===YS}if(k){const ce=A.texture.type,ge=ce===sr||ce===so||ce===GS||ce===Na||ce===jS||ce===XS,Me=pe.getClearColor(),Ce=pe.getClearAlpha(),De=Me.r,Le=Me.g,Ne=Me.b;ge?(p[0]=De,p[1]=Le,p[2]=Ne,p[3]=Ce,O.clearBufferuiv(O.COLOR,0,p)):(_[0]=De,_[1]=Le,_[2]=Ne,_[3]=Ce,O.clearBufferiv(O.COLOR,0,_))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT),B&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),we.dispose(),ae.dispose(),R.dispose(),z.dispose(),q.dispose(),Ee.dispose(),je.dispose(),st.dispose(),ne.dispose(),b.dispose(),b.removeEventListener("sessionstart",$n),b.removeEventListener("sessionend",qn),gr.stop()};function oe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Ke.autoReset,U=be.enabled,B=be.autoUpdate,V=be.needsUpdate,k=be.type;ve(),Ke.autoReset=w,be.enabled=U,be.autoUpdate=B,be.needsUpdate=V,be.type=k}function _e(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){const U=w.target;U.removeEventListener("dispose",xe),Qe(U)}function Qe(w){ot(w),R.remove(w)}function ot(w){const U=R.get(w).programs;U!==void 0&&(U.forEach(function(B){ne.releaseProgram(B)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,B,V,k,ce){U===null&&(U=Re);const ge=k.isMesh&&k.matrixWorld.determinant()<0,Me=_M(w,U,B,V,k);Pe.setMaterial(V,ge);let Ce=B.index,De=1;if(V.wireframe===!0){if(Ce=Q.getWireframeAttribute(B),Ce===void 0)return;De=2}const Le=B.drawRange,Ne=B.attributes.position;let yt=Le.start*De,cn=(Le.start+Le.count)*De;ce!==null&&(yt=Math.max(yt,ce.start*De),cn=Math.min(cn,(ce.start+ce.count)*De)),Ce!==null?(yt=Math.max(yt,0),cn=Math.min(cn,Ce.count)):Ne!=null&&(yt=Math.max(yt,0),cn=Math.min(cn,Ne.count));const Pt=cn-yt;if(Pt<0||Pt===1/0)return;je.setup(k,V,Me,B,Ce);let ci,ft=Ve;if(Ce!==null&&(ci=Z.get(Ce),ft=He,ft.setIndex(ci)),k.isMesh)V.wireframe===!0?(Pe.setLineWidth(V.wireframeLinewidth*ze()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(k.isLine){let Ie=V.linewidth;Ie===void 0&&(Ie=1),Pe.setLineWidth(Ie*ze()),k.isLineSegments?ft.setMode(O.LINES):k.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else k.isPoints?ft.setMode(O.POINTS):k.isSprite&&ft.setMode(O.TRIANGLES);if(k.isBatchedMesh)ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ft.renderInstances(yt,Pt,k.count);else if(B.isInstancedBufferGeometry){const Ie=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,mc=Math.min(B.instanceCount,Ie);ft.renderInstances(yt,Pt,mc)}else ft.render(yt,Pt)};function ct(w,U,B){w.transparent===!0&&w.side===yi&&w.forceSinglePass===!1?(w.side=Xt,w.needsUpdate=!0,za(w,U,B),w.side=ur,w.needsUpdate=!0,za(w,U,B),w.side=yi):za(w,U,B)}this.compile=function(w,U,B=null){B===null&&(B=w),m=ae.get(B),m.init(),v.push(m),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==B&&w.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(g._useLegacyLights);const V=new Set;return w.traverse(function(k){const ce=k.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const Me=ce[ge];ct(Me,B,k),V.add(Me)}else ct(ce,B,k),V.add(ce)}),v.pop(),m=null,V},this.compileAsync=function(w,U,B=null){const V=this.compile(w,U,B);return new Promise(k=>{function ce(){if(V.forEach(function(ge){R.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){k(w);return}setTimeout(ce,10)}Ae.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let kt=null;function et(w){kt&&kt(w)}function $n(){gr.stop()}function qn(){gr.start()}const gr=new uM;gr.setAnimationLoop(et),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(w){kt=w,b.setAnimationLoop(w),w===null?gr.stop():gr.start()},b.addEventListener("sessionstart",$n),b.addEventListener("sessionend",qn),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),b.enabled===!0&&b.isPresenting===!0&&(b.cameraAutoUpdate===!0&&b.updateCamera(U),U=b.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,U,A),m=ae.get(w,v.length),m.init(),v.push(m),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Be.setFromProjectionMatrix(ue),ee=this.localClippingEnabled,W=de.init(this.clippingPlanes,ee),y=we.get(w,h.length),y.init(),h.push(y),Up(w,U,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(L,H),this.info.render.frame++,W===!0&&de.beginShadows();const B=m.state.shadowsArray;if(be.render(B,w,U),W===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(b.enabled===!1||b.isPresenting===!1||b.hasDepthSensing()===!1)&&pe.render(y,w),m.setupLights(g._useLegacyLights),U.isArrayCamera){const V=U.cameras;for(let k=0,ce=V.length;k<ce;k++){const ge=V[k];Fp(y,w,ge,ge.viewport)}}else Fp(y,w,U);A!==null&&(M.updateMultisampleRenderTarget(A),M.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(g,w,U),je.resetDefaultState(),P=-1,E=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function Up(w,U,B,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Be.intersectsSprite(w)){V&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const ge=Ee.update(w),Me=w.material;Me.visible&&y.push(w,ge,Me,B,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Be.intersectsObject(w))){const ge=Ee.update(w),Me=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Te.copy(ge.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray(Me)){const Ce=ge.groups;for(let De=0,Le=Ce.length;De<Le;De++){const Ne=Ce[De],yt=Me[Ne.materialIndex];yt&&yt.visible&&y.push(w,ge,yt,B,Te.z,Ne)}}else Me.visible&&y.push(w,ge,Me,B,Te.z,null)}}const ce=w.children;for(let ge=0,Me=ce.length;ge<Me;ge++)Up(ce[ge],U,B,V)}function Fp(w,U,B,V){const k=w.opaque,ce=w.transmissive,ge=w.transparent;m.setupLightsView(B),W===!0&&de.setGlobalState(g.clippingPlanes,B),ce.length>0&&vM(k,ce,U,B),V&&Pe.viewport(x.copy(V)),k.length>0&&Va(k,U,B),ce.length>0&&Va(ce,U,B),ge.length>0&&Va(ge,U,B),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function vM(w,U,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new $r(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Nu:sr,minFilter:kr,samples:4,stencilBuffer:s});const De=R.get(m.state.transmissionRenderTarget);De.__isTransmissionRenderTarget=!0}const ce=m.state.transmissionRenderTarget;g.getDrawingBufferSize(re),ce.setSize(re.x,re.y);const ge=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor(N),Y=g.getClearAlpha(),Y<1&&g.setClearColor(16777215,.5),g.clear();const Me=g.toneMapping;g.toneMapping=rr,Va(w,B,V),M.updateMultisampleRenderTarget(ce),M.updateRenderTargetMipmap(ce);let Ce=!1;for(let De=0,Le=U.length;De<Le;De++){const Ne=U[De],yt=Ne.object,cn=Ne.geometry,Pt=Ne.material,ci=Ne.group;if(Pt.side===yi&&yt.layers.test(V.layers)){const ft=Pt.side;Pt.side=Xt,Pt.needsUpdate=!0,Op(yt,B,V,cn,Pt,ci),Pt.side=ft,Pt.needsUpdate=!0,Ce=!0}}Ce===!0&&(M.updateMultisampleRenderTarget(ce),M.updateRenderTargetMipmap(ce)),g.setRenderTarget(ge),g.setClearColor(N,Y),g.toneMapping=Me}function Va(w,U,B){const V=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ce=w.length;k<ce;k++){const ge=w[k],Me=ge.object,Ce=ge.geometry,De=V===null?ge.material:V,Le=ge.group;Me.layers.test(B.layers)&&Op(Me,U,B,Ce,De,Le)}}function Op(w,U,B,V,k,ce){w.onBeforeRender(g,U,B,V,k,ce),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(g,U,B,V,w,ce),k.transparent===!0&&k.side===yi&&k.forceSinglePass===!1?(k.side=Xt,k.needsUpdate=!0,g.renderBufferDirect(B,U,V,k,w,ce),k.side=ur,k.needsUpdate=!0,g.renderBufferDirect(B,U,V,k,w,ce),k.side=yi):g.renderBufferDirect(B,U,V,k,w,ce),w.onAfterRender(g,U,B,V,k,ce)}function za(w,U,B){U.isScene!==!0&&(U=Re);const V=R.get(w),k=m.state.lights,ce=m.state.shadowsArray,ge=k.state.version,Me=ne.getParameters(w,k.state,ce,U,B),Ce=ne.getProgramCacheKey(Me);let De=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?q:z).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",xe),De=new Map,V.programs=De);let Le=De.get(Ce);if(Le!==void 0){if(V.currentProgram===Le&&V.lightsStateVersion===ge)return Bp(w,Me),Le}else Me.uniforms=ne.getUniforms(w),w.onBuild(B,Me,g),w.onBeforeCompile(Me,g),Le=ne.acquireProgram(Me,Ce),De.set(Ce,Le),V.uniforms=Me.uniforms;const Ne=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ne.clippingPlanes=de.uniform),Bp(w,Me),V.needsLights=xM(w),V.lightsStateVersion=ge,V.needsLights&&(Ne.ambientLightColor.value=k.state.ambient,Ne.lightProbe.value=k.state.probe,Ne.directionalLights.value=k.state.directional,Ne.directionalLightShadows.value=k.state.directionalShadow,Ne.spotLights.value=k.state.spot,Ne.spotLightShadows.value=k.state.spotShadow,Ne.rectAreaLights.value=k.state.rectArea,Ne.ltc_1.value=k.state.rectAreaLTC1,Ne.ltc_2.value=k.state.rectAreaLTC2,Ne.pointLights.value=k.state.point,Ne.pointLightShadows.value=k.state.pointShadow,Ne.hemisphereLights.value=k.state.hemi,Ne.directionalShadowMap.value=k.state.directionalShadowMap,Ne.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ne.spotShadowMap.value=k.state.spotShadowMap,Ne.spotLightMatrix.value=k.state.spotLightMatrix,Ne.spotLightMap.value=k.state.spotLightMap,Ne.pointShadowMap.value=k.state.pointShadowMap,Ne.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Le,V.uniformsList=null,Le}function kp(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Zl.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Bp(w,U){const B=R.get(w);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function _M(w,U,B,V,k){U.isScene!==!0&&(U=Re),M.resetTextureUnits();const ce=U.fog,ge=V.isMeshStandardMaterial?U.environment:null,Me=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mr,Ce=(V.isMeshStandardMaterial?q:z).get(V.envMap||ge),De=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!B.morphAttributes.position,yt=!!B.morphAttributes.normal,cn=!!B.morphAttributes.color;let Pt=rr;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pt=g.toneMapping);const ci=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ft=ci!==void 0?ci.length:0,Ie=R.get(V),mc=m.state.lights;if(W===!0&&(ee===!0||w!==E)){const En=w===E&&V.id===P;de.setState(V,w,En)}let at=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==mc.state.version||Ie.outputColorSpace!==Me||k.isBatchedMesh&&Ie.batching===!1||!k.isBatchedMesh&&Ie.batching===!0||k.isInstancedMesh&&Ie.instancing===!1||!k.isInstancedMesh&&Ie.instancing===!0||k.isSkinnedMesh&&Ie.skinning===!1||!k.isSkinnedMesh&&Ie.skinning===!0||k.isInstancedMesh&&Ie.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ie.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ie.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ie.instancingMorph===!1&&k.morphTexture!==null||Ie.envMap!==Ce||V.fog===!0&&Ie.fog!==ce||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==de.numPlanes||Ie.numIntersection!==de.numIntersection)||Ie.vertexAlphas!==De||Ie.vertexTangents!==Le||Ie.morphTargets!==Ne||Ie.morphNormals!==yt||Ie.morphColors!==cn||Ie.toneMapping!==Pt||Ie.morphTargetsCount!==ft)&&(at=!0):(at=!0,Ie.__version=V.version);let vr=Ie.currentProgram;at===!0&&(vr=za(V,U,k));let Vp=!1,go=!1,gc=!1;const Bt=vr.getUniforms(),Di=Ie.uniforms;if(Pe.useProgram(vr.program)&&(Vp=!0,go=!0,gc=!0),V.id!==P&&(P=V.id,go=!0),Vp||E!==w){Bt.setValue(O,"projectionMatrix",w.projectionMatrix),Bt.setValue(O,"viewMatrix",w.matrixWorldInverse);const En=Bt.map.cameraPosition;En!==void 0&&En.setValue(O,Te.setFromMatrixPosition(w.matrixWorld)),Tt.logarithmicDepthBuffer&&Bt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Bt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,go=!0,gc=!0)}if(k.isSkinnedMesh){Bt.setOptional(O,k,"bindMatrix"),Bt.setOptional(O,k,"bindMatrixInverse");const En=k.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Bt.setValue(O,"boneTexture",En.boneTexture,M))}k.isBatchedMesh&&(Bt.setOptional(O,k,"batchingTexture"),Bt.setValue(O,"batchingTexture",k._matricesTexture,M));const vc=B.morphAttributes;if((vc.position!==void 0||vc.normal!==void 0||vc.color!==void 0)&&me.update(k,B,vr),(go||Ie.receiveShadow!==k.receiveShadow)&&(Ie.receiveShadow=k.receiveShadow,Bt.setValue(O,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Di.envMap.value=Ce,Di.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Di.envMapIntensity.value=U.environmentIntensity),go&&(Bt.setValue(O,"toneMappingExposure",g.toneMappingExposure),Ie.needsLights&&yM(Di,gc),ce&&V.fog===!0&&ye.refreshFogUniforms(Di,ce),ye.refreshMaterialUniforms(Di,V,X,te,m.state.transmissionRenderTarget),Zl.upload(O,kp(Ie),Di,M)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zl.upload(O,kp(Ie),Di,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Bt.setValue(O,"center",k.center),Bt.setValue(O,"modelViewMatrix",k.modelViewMatrix),Bt.setValue(O,"normalMatrix",k.normalMatrix),Bt.setValue(O,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const En=V.uniformsGroups;for(let _c=0,SM=En.length;_c<SM;_c++){const zp=En[_c];st.update(zp,vr),st.bind(zp,vr)}}return vr}function yM(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function xM(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,B){R.get(w.texture).__webglTexture=U,R.get(w.depthTexture).__webglTexture=B;const V=R.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const B=R.get(w);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,B=0){A=w,C=U,T=B;let V=!0,k=null,ce=!1,ge=!1;if(w){const Ce=R.get(w);Ce.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(O.FRAMEBUFFER,null),V=!1):Ce.__webglFramebuffer===void 0?M.setupRenderTarget(w):Ce.__hasExternalTextures&&M.rebindTextures(w,R.get(w.texture).__webglTexture,R.get(w.depthTexture).__webglTexture);const De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ge=!0);const Le=R.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?k=Le[U][B]:k=Le[U],ce=!0):w.samples>0&&M.useMultisampledRTT(w)===!1?k=R.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[B]:k=Le,x.copy(w.viewport),I.copy(w.scissor),j=w.scissorTest}else x.copy(G).multiplyScalar(X).floor(),I.copy(ie).multiplyScalar(X).floor(),j=he;if(Pe.bindFramebuffer(O.FRAMEBUFFER,k)&&V&&Pe.drawBuffers(w,k),Pe.viewport(x),Pe.scissor(I),Pe.setScissorTest(j),ce){const Ce=R.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,B)}else if(ge){const Ce=R.get(w.texture),De=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,B||0,De)}P=-1},this.readRenderTargetPixels=function(w,U,B,V,k,ce,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=R.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){Pe.bindFramebuffer(O.FRAMEBUFFER,Me);try{const Ce=w.texture,De=Ce.format,Le=Ce.type;if(De!==ni&&Ye.convert(De)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Le===Nu&&(Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float"));if(Le!==sr&&Ye.convert(Le)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&Le!==$i&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&B>=0&&B<=w.height-k&&O.readPixels(U,B,V,k,Ye.convert(De),Ye.convert(Le),ce)}finally{const Ce=A!==null?R.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(w,U,B=0){const V=Math.pow(2,-B),k=Math.floor(U.image.width*V),ce=Math.floor(U.image.height*V);M.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,B,0,0,w.x,w.y,k,ce),Pe.unbindTexture()},this.copyTextureToTexture=function(w,U,B,V=0){const k=U.image.width,ce=U.image.height,ge=Ye.convert(B.format),Me=Ye.convert(B.type);M.setTexture2D(B,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,w.x,w.y,k,ce,ge,Me,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,ge,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,V,w.x,w.y,ge,Me,U.image),V===0&&B.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,U,B,V,k=0){const ce=Math.round(w.max.x-w.min.x),ge=Math.round(w.max.y-w.min.y),Me=w.max.z-w.min.z+1,Ce=Ye.convert(V.format),De=Ye.convert(V.type);let Le;if(V.isData3DTexture)M.setTexture3D(V,0),Le=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)M.setTexture2DArray(V,0),Le=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Ne=O.getParameter(O.UNPACK_ROW_LENGTH),yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),cn=O.getParameter(O.UNPACK_SKIP_PIXELS),Pt=O.getParameter(O.UNPACK_SKIP_ROWS),ci=O.getParameter(O.UNPACK_SKIP_IMAGES),ft=B.isCompressedTexture?B.mipmaps[k]:B.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),B.isDataTexture||B.isData3DTexture?O.texSubImage3D(Le,k,U.x,U.y,U.z,ce,ge,Me,Ce,De,ft.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,k,U.x,U.y,U.z,ce,ge,Me,Ce,ft.data):O.texSubImage3D(Le,k,U.x,U.y,U.z,ce,ge,Me,Ce,De,ft),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ne),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,cn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ci),k===0&&V.generateMipmaps&&O.generateMipmap(Le),Pe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,Pe.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Dp?"display-p3":"srgb",n.unpackColorSpace=qe.workingColorSpace===dc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oN extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ql extends po{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const O0=new F,k0=new F,B0=new St,kf=new Np,Dl=new Oa;class V0 extends Zt{constructor(e=new _n,n=new Ql){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)O0.fromBufferAttribute(n,r-1),k0.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=O0.distanceTo(k0);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;B0.copy(r).invert(),kf.copy(e.ray).applyMatrix4(B0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new F,c=new F,f=new F,d=new F,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const h=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let g=h,S=v-1;g<S;g+=p){const C=_.getX(g),T=_.getX(g+1);if(u.fromBufferAttribute(m,C),c.fromBufferAttribute(m,T),kf.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||n.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=h,S=v-1;g<S;g+=p){if(u.fromBufferAttribute(m,g),c.fromBufferAttribute(m,g+1),kf.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||n.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class gM extends po{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const z0=new St,th=new Np,Nl=new Oa,Il=new F;class aN extends Zt{constructor(e=new _n,n=new gM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;z0.copy(r).invert(),th.copy(e.ray).applyMatrix4(z0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,y=p;_<y;_++){const m=u.getX(_);Il.fromBufferAttribute(f,m),H0(Il,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,y=p;_<y;_++)Il.fromBufferAttribute(f,_),H0(Il,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function H0(t,e,n,i,r,s,o){const a=th.distanceSqToPoint(t);if(a<n){const l=new F;th.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Fs extends _n{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new F,d=new F,p=[],_=[],y=[],m=[];for(let h=0;h<=i;h++){const v=[],g=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const T=C/n;f.x=-e*Math.cos(r+T*s)*Math.sin(o+g*a),f.y=e*Math.cos(o+g*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+g*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),m.push(T+S,1-g),v.push(u++)}c.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const g=c[h][v+1],S=c[h][v],C=c[h+1][v],T=c[h+1][v+1];(h!==0||o>0)&&p.push(g,S,T),(h!==i-1||l<Math.PI)&&p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(y,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);function lN({overlay:t=!1}){const e=K.useRef(null);return K.useEffect(()=>{const n=e.current,i=new oN,r=new Pn(52,1,.1,100);r.position.z=13;const s=new sN({canvas:n,alpha:!0,antialias:!0});s.setSize(600,600),s.setPixelRatio(Math.min(devicePixelRatio,2)),t||i.add(new mn(new Fs(4.82,64,64),new Is({color:396571,transparent:!0,opacity:.96})));const o=new mn(new Fs(5,40,40),new Is({color:4886498,wireframe:!0,transparent:!0,opacity:t?.18:.1}));i.add(o);const a=new Ql({color:4886498,transparent:!0,opacity:t?.6:.38}),l=new Ql({color:4886498,transparent:!0,opacity:t?.28:.16}),u=new Ql({color:16777215,transparent:!0,opacity:t?.14:.07});function c(g,S){const C=g*Math.PI/180,T=5*Math.cos(C),A=5*Math.sin(C),P=[];for(let E=0;E<=96;E++){const x=E/96*Math.PI*2;P.push(new F(T*Math.cos(x),A,T*Math.sin(x)))}return new V0(new _n().setFromPoints(P),S)}function f(g,S){const C=g*Math.PI/180,T=[];for(let A=0;A<=96;A++){const P=(A/96*180-90)*Math.PI/180;T.push(new F(5*Math.cos(P)*Math.cos(C),5*Math.sin(P),5*Math.cos(P)*Math.sin(C)))}return new V0(new _n().setFromPoints(T),S)}[-60,-30,30,60].forEach(g=>i.add(c(g,l))),i.add(c(0,a));for(let g=0;g<360;g+=30)i.add(f(g,g%90===0?a:g%45===0?l:u));const d=[];for(let g=0;g<500;g++){const S=Math.acos(2*Math.random()-1),C=2*Math.PI*Math.random();d.push(5.04*Math.sin(S)*Math.cos(C),5.04*Math.sin(S)*Math.sin(C),5.04*Math.cos(S))}const p=new _n;p.setAttribute("position",new Nn(d,3)),i.add(new aN(p,new gM({color:4886498,size:.065,transparent:!0,opacity:t?.8:.6}))),i.add(new mn(new Fs(5.35,32,32),new Is({color:4886498,transparent:!0,opacity:.042,side:Xt}))),i.add(new mn(new Fs(5.9,32,32),new Is({color:4886498,transparent:!0,opacity:.016,side:Xt})));let _=0,y=0;const m=g=>{_=(g.clientX/innerWidth-.5)*.8,y=(g.clientY/innerHeight-.5)*.5};window.addEventListener("mousemove",m);let h;const v=()=>{h=requestAnimationFrame(v),o.rotation.y+=.0018,o.rotation.x+=4e-4,i.rotation.y+=(_*.35-i.rotation.y)*.045,i.rotation.x+=(-y*.22-i.rotation.x)*.045,s.render(i,r)};return v(),()=>{cancelAnimationFrame(h),window.removeEventListener("mousemove",m),s.dispose()}},[t]),D.jsx("canvas",{ref:e,style:{width:"100%",height:"100%"}})}const uN="2026-06-26T09:00:00",cN=[{abbr:"UNSC",fullName:"United Nations Security Council",chairs:["Krishna Iyer","Devansh","Aarnav Tejaswi"],agenda:null},{abbr:"UNHRC",fullName:"United Nations Human Rights Council",chairs:["Sarah","Anish G","Kenrick"],agenda:null},{abbr:"AIPPM",fullName:"All India Political Parties Meet",chairs:["Aarav Motreja","Anirudh R","Shashank Srinath"],agenda:null},{abbr:"CCC",fullName:"Continuous Crisis Committee",chairs:["Kaustubh Krishna","Nathan Daniel"],agenda:null},{abbr:"DISEC",fullName:"Disarmament and Security Council",chairs:["Aabid Maldar","Dhruv Kulkarni","Puneet"],agenda:null},{abbr:"UNICEF",fullName:"United Nations Children's Fund",chairs:["Aara Shivani","Srishti Singh","Rohan"],agenda:null},{abbr:"UNEP",fullName:"UN Environment Programme",chairs:[],agenda:"To Be Announced"},{abbr:"WHO",fullName:"World Health Organization",chairs:[],agenda:"To Be Announced"},{abbr:"HCC",fullName:"Historical Crisis Committee",chairs:[],agenda:"To Be Announced"}],fN=[{target:4,suffix:"th",label:"Edition"},{target:9,suffix:"",label:"Committees"},{target:200,suffix:"+",label:"Expected Delegates"},{target:2,suffix:"",label:"Days of Debate"}],dN=[{num:"01",text:"Delegates must maintain professional decorum throughout all committee sessions and conference premises."},{num:"02",text:"Western business formals are mandatory for all committee sessions. Smart casuals are permitted during non-committee hours."},{num:"03",text:"All electronic devices must be kept on silent. Usage is permitted only for research purposes during committee."},{num:"04",text:"Plagiarism, pre-written speeches, or submission of work not one's own is strictly prohibited and may lead to disqualification."},{num:"05",text:"Delegates must be punctual. Repeated absences or late arrivals may result in loss of speaking rights."},{num:"06",text:"No delegate may address the committee without recognition from the Chair."},{num:"07",text:"Any form of harassment, bullying, or discrimination on any basis will result in immediate removal from the conference."},{num:"08",text:"Delegates must carry their delegate badges and position papers at all times on conference premises."}];function Ba({dim:t=!1,size:e="min(560px, 84vw)"}){return D.jsxs("div",{className:`logo-wm${t?" logo-wm-dim":""}`,style:{"--lw":e},children:[D.jsx("img",{src:"/logo.png",alt:"",className:"logo-wm-img"}),D.jsx("div",{className:"logo-wm-scanlines"}),D.jsx("div",{className:"logo-wm-glow"})]})}function rn({children:t,delay:e=0,className:n=""}){return D.jsx(it.div,{className:n,initial:{opacity:0,y:40,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-70px"},transition:{duration:.78,delay:e,ease:[.22,1,.36,1]},children:t})}function hN(){const t=K.useRef(null),e=K.useRef(null),n=K.useRef({x:0,y:0}),i=K.useRef({x:0,y:0});return K.useEffect(()=>{const r=l=>{n.current={x:l.clientX,y:l.clientY},t.current&&(t.current.style.left=l.clientX+"px",t.current.style.top=l.clientY+"px")};window.addEventListener("mousemove",r);let s;const o=()=>{i.current.x+=(n.current.x-i.current.x)*.14,i.current.y+=(n.current.y-i.current.y)*.14,e.current&&(e.current.style.left=i.current.x+"px",e.current.style.top=i.current.y+"px"),s=requestAnimationFrame(o)};o();const a=setTimeout(()=>{document.querySelectorAll("a, button, .c-card").forEach(l=>{l.addEventListener("mouseenter",()=>{var u,c;(u=t.current)==null||u.classList.add("hovered"),(c=e.current)==null||c.classList.add("hovered")}),l.addEventListener("mouseleave",()=>{var u,c;(u=t.current)==null||u.classList.remove("hovered"),(c=e.current)==null||c.classList.remove("hovered")})})},800);return()=>{cancelAnimationFrame(s),window.removeEventListener("mousemove",r),clearTimeout(a)}},[]),D.jsxs(D.Fragment,{children:[D.jsx("div",{className:"cursor-dot",ref:t}),D.jsx("div",{className:"cursor-ring",ref:e})]})}function pN(){const[t,e]=K.useState(0);return K.useEffect(()=>{const n=()=>{const i=document.body.scrollHeight-innerHeight;e(i>0?scrollY/i*100:0)};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),D.jsx("div",{className:"scroll-prog",children:D.jsx("div",{className:"scroll-prog-fill",style:{width:`${t}%`}})})}function mN({onDone:t}){return D.jsxs(it.div,{className:"loader",exit:{opacity:0,transition:{duration:.5}},children:[D.jsx(it.div,{className:"loader-title",initial:{opacity:0,y:22,filter:"blur(10px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{duration:.65,ease:[.22,1,.36,1]},children:"FISMUN'26"}),D.jsx("div",{className:"loader-bar",children:D.jsx(it.div,{className:"loader-bar-fill",initial:{scaleX:0},animate:{scaleX:1},transition:{duration:1.5,ease:[.22,1,.36,1],delay:.3},onAnimationComplete:t})}),D.jsx(it.p,{className:"loader-sub",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:"26 June 2026 · Bigger · Better · Bolder"})]})}function gN(){const t=K.useRef(null);return K.useEffect(()=>{const e=t.current,n=e.getContext("2d");let i,r,s=[],o;const a=()=>{i=e.width=innerWidth,r=e.height=innerHeight};a(),window.addEventListener("resize",a);for(let u=0;u<90;u++)s.push({x:Math.random()*i,y:Math.random()*r,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.2+.3,a:Math.random()*.25+.06});const l=()=>{n.clearRect(0,0,i,r),s.forEach(u=>{u.x+=u.vx,u.y+=u.vy,(u.x<0||u.x>i)&&(u.vx*=-1),(u.y<0||u.y>r)&&(u.vy*=-1),n.beginPath(),n.arc(u.x,u.y,u.r,0,Math.PI*2),n.fillStyle=`rgba(237,232,220,${u.a})`,n.fill()});for(let u=0;u<s.length;u++)for(let c=u+1;c<s.length;c++){const f=s[u].x-s[c].x,d=s[u].y-s[c].y,p=Math.sqrt(f*f+d*d);p<110&&(n.beginPath(),n.moveTo(s[u].x,s[u].y),n.lineTo(s[c].x,s[c].y),n.strokeStyle=`rgba(237,232,220,${(1-p/110)*.07})`,n.lineWidth=.5,n.stroke())}o=requestAnimationFrame(l)};return l(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",a)}},[]),D.jsx("canvas",{ref:t,className:"particle-canvas"})}const G0=[{id:"hero",label:"Home"},{id:"secretariat",label:"About"},{id:"committees",label:"Committees"},{id:"coc",label:"Conduct"},{id:"register",label:"Register"}];function vN(){const[t,e]=K.useState(!1),[n,i]=K.useState("hero");K.useEffect(()=>{const s=()=>{e(scrollY>60);const o=[...G0.map(a=>a.id)].reverse();for(const a of o){const l=document.getElementById(a);if(l&&scrollY>=l.offsetTop-140){i(a);break}}};return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]);const r=K.useCallback((s,o)=>{var a;s.preventDefault(),(a=document.getElementById(o))==null||a.scrollIntoView({behavior:"smooth"})},[]);return D.jsx(it.nav,{className:`nav${t?" stuck":""}`,initial:{opacity:0,y:-16},animate:{opacity:1,y:0},transition:{delay:2.2,duration:.6,ease:[.22,1,.36,1]},children:G0.map(({id:s,label:o})=>D.jsx("a",{href:`#${s}`,className:`nav-link${n===s?" active":""}`,onClick:a=>r(a,s),children:o},s))})}function _N(){const t="FISMUN'26".split("");return D.jsxs("section",{id:"hero",className:"hero section page-section",children:[D.jsxs("div",{className:"logo-holo-wrap",children:[D.jsx(Ba,{}),D.jsx("div",{className:"globe-overlay",children:D.jsx(lN,{overlay:!0})}),D.jsx("div",{className:"holo-rings",children:[0,1,2].map(e=>D.jsx("div",{className:"holo-ring"},e))}),D.jsx("div",{className:"hero-sweep"})]}),D.jsxs("div",{className:"hero-content",children:[D.jsx(it.h1,{className:"hero-title glitch",initial:"hidden",animate:"visible",variants:{visible:{transition:{staggerChildren:.055,delayChildren:1.8}}},children:t.map((e,n)=>D.jsx(it.span,{style:{display:"inline-block",transformOrigin:"bottom center"},variants:{hidden:{opacity:0,y:90,rotateX:-85,filter:"blur(6px)"},visible:{opacity:1,y:0,rotateX:0,filter:"blur(0px)",transition:{duration:.65,ease:[.22,1,.36,1]}}},children:e},n))}),D.jsx(it.p,{className:"hero-tagline",initial:{opacity:0,y:18,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{delay:2.8,duration:.8,ease:[.22,1,.36,1]},children:"BIGGER. BETTER. BOLDER."}),D.jsx(it.div,{className:"hero-date",initial:{opacity:0},animate:{opacity:1},transition:{delay:3.3,duration:.6},children:"26 June 2026"})]}),D.jsxs(it.div,{className:"scroll-hint",initial:{opacity:0},animate:{opacity:1},transition:{delay:3.6,duration:.8},children:[D.jsx("span",{children:"Scroll"}),D.jsx("div",{className:"scroll-hint-line"})]})]})}function yN(){return D.jsxs("section",{id:"secretariat",className:"section page-section secretariat-pg",children:[D.jsx(Ba,{dim:!0,size:"min(480px, 76vw)"}),D.jsxs("div",{className:"secretariat-inner",children:[D.jsx(rn,{children:D.jsx("h2",{className:"section-title",children:"LETTER FROM THE SECRETARIAT"})}),D.jsxs("div",{className:"sec-layout",children:[D.jsx(rn,{delay:.1,className:"sec-avatar-col",children:D.jsx("div",{className:"avatar-card",children:D.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"avatar-svg",children:[D.jsx("circle",{cx:"40",cy:"28",r:"18",fill:"#4A8FE2",opacity:"0.9"}),D.jsx("path",{d:"M10 78 C10 58 70 58 70 78",fill:"#4A8FE2",opacity:"0.9"})]})})}),D.jsxs(rn,{delay:.18,className:"letter-card",children:[D.jsx("div",{className:"letter-quote",children:'"'}),D.jsxs("p",{className:"letter-body",children:["Dear Delegates,",D.jsx("br",{}),"It is with immense pride and excitement that we welcome you to FISMUN 2026 — our fourth edition, and perhaps our most ambitious one yet. This conference represents not just a gathering of young minds, but a testament to what happens when students dare to dream bigger, debate better, and stand bolder.",D.jsx("br",{}),"At FISMUN, we believe that every voice matters — from the corridors of the Security Council to the chambers of our crisis committees. You are not just participants; you are the architects of tomorrow's world.",D.jsx("br",{}),"FISMUN'26 pushes boundaries. It is a conference of consequence — where diplomacy is not a performance, but a practice. We challenge every delegate to arrive not just with a position, but with purpose.",D.jsx("br",{}),"We look forward to witnessing the brilliance you bring to every committee session. Welcome to FISMUN'26."]}),D.jsx("p",{className:"letter-sig",children:"— The Secretariat, FISMUN'26"})]})]})]})]})}function xN(t){const[e,n]=K.useState({days:0,hours:0,minutes:0,seconds:0});return K.useEffect(()=>{const i=()=>{const s=new Date(t)-new Date;s<=0||n({days:Math.floor(s/864e5),hours:Math.floor(s%864e5/36e5),minutes:Math.floor(s%36e5/6e4),seconds:Math.floor(s%6e4/1e3)})};i();const r=setInterval(i,1e3);return()=>clearInterval(r)},[t]),e}function Ul({value:t,len:e=2}){const n=String(t).padStart(e,"0");return D.jsx("div",{className:"cd-digit",children:D.jsx(it.span,{initial:{y:-18,opacity:0},animate:{y:0,opacity:1},transition:{duration:.26,ease:[.22,1,.36,1]},style:{display:"inline-block"},children:n},n)})}function SN(){const{days:t,hours:e,minutes:n,seconds:i}=xN(uN);return D.jsxs("section",{id:"countdown",className:"countdown section page-section",children:[D.jsx(Ba,{dim:!0,size:"min(420px, 68vw)"}),D.jsxs("div",{className:"countdown-content",children:[D.jsx(rn,{children:D.jsx("h2",{className:"section-title",children:"LET THE COUNTDOWN BEGIN"})}),D.jsx(rn,{delay:.08,children:D.jsxs("div",{className:"cd-row",children:[D.jsxs("div",{className:"cd-unit",children:[D.jsx(Ul,{value:t,len:3}),D.jsx("div",{className:"cd-label",children:"Days"})]}),D.jsx("span",{className:"cd-sep",children:":"}),D.jsxs("div",{className:"cd-unit",children:[D.jsx(Ul,{value:e}),D.jsx("div",{className:"cd-label",children:"Hours"})]}),D.jsx("span",{className:"cd-sep",children:":"}),D.jsxs("div",{className:"cd-unit",children:[D.jsx(Ul,{value:n}),D.jsx("div",{className:"cd-label",children:"Minutes"})]}),D.jsx("span",{className:"cd-sep",children:":"}),D.jsxs("div",{className:"cd-unit",children:[D.jsx(Ul,{value:i}),D.jsx("div",{className:"cd-label",children:"Seconds"})]})]})}),D.jsx(rn,{delay:.16,children:D.jsxs("p",{className:"cd-desc",children:["FISMUN 2026, IN ITS FOURTH EDITION, CONTINUES ITS JOURNEY OF BRINGING STUDENTS TOGETHER TO LEARN, DEBATE, AND GROW. IT'S A SPACE WHERE IDEAS ARE SHARED, PERSPECTIVES ARE CHALLENGED, AND DELEGATES GET A CHANCE TO STEP INTO THE WORLD OF DIPLOMACY.",D.jsx("br",{}),D.jsx("br",{}),"MORE THAN JUST A CONFERENCE, FISMUN IS ABOUT BUILDING CONFIDENCE, MAKING CONNECTIONS, AND UNDERSTANDING GLOBAL ISSUES IN A MEANINGFUL WAY."]})})]})]})}function MN({target:t,suffix:e,label:n}){const i=K.useRef(null),r=zR(i,{once:!0,margin:"-100px"}),[s,o]=K.useState(0);return K.useEffect(()=>r?kR(0,t,{duration:1.55,ease:[.22,1,.36,1],onUpdate:l=>o(Math.floor(l))}).stop:void 0,[r,t]),D.jsxs(it.div,{ref:i,className:"stat-item",initial:{opacity:0,y:28},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:[.22,1,.36,1]},children:[D.jsxs("div",{className:"stat-num",children:[s,e]}),D.jsx("div",{className:"stat-lbl",children:n})]})}function EN(){return D.jsx("div",{className:"stats-bar section",children:fN.map(t=>D.jsx(MN,{...t},t.label))})}function TN(){return D.jsxs("section",{id:"committees",className:"committees section",children:[D.jsx(Ba,{dim:!0,size:"min(380px, 58vw)"}),D.jsxs("div",{className:"committee-orbs","aria-hidden":"true",children:[D.jsx("div",{className:"orb orb-1"}),D.jsx("div",{className:"orb orb-2"}),D.jsx("div",{className:"orb orb-3"}),D.jsx("div",{className:"orb orb-4"}),D.jsx("div",{className:"orb orb-5"}),D.jsx("div",{className:"orb orb-6"})]}),D.jsxs("div",{className:"committees-content",children:[D.jsx(rn,{children:D.jsx("h2",{className:"section-title",children:"INTRODUCING THE COMMITTEES"})}),D.jsx(it.div,{className:"committees-grid",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},variants:{visible:{transition:{staggerChildren:.07,delayChildren:.05}}},children:cN.map((t,e)=>D.jsx(HR,{committee:t,index:e},t.abbr))})]})]})}function wN(){return D.jsxs("section",{id:"coc",className:"coc section page-section",children:[D.jsx(Ba,{dim:!0,size:"min(460px, 72vw)"}),D.jsxs("div",{className:"coc-inner",children:[D.jsxs(rn,{children:[D.jsx("div",{className:"coc-badge",children:"Conference Protocol"}),D.jsx("h2",{className:"section-title",children:"CODE OF CONDUCT"})]}),D.jsx("div",{className:"coc-grid",children:dN.map((t,e)=>D.jsx(rn,{delay:e*.055,children:D.jsxs("div",{className:"coc-item",children:[D.jsx("div",{className:"coc-num",children:t.num}),D.jsx("p",{className:"coc-rule",children:t.text})]})},t.num))})]})]})}function AN(){const[t,e]=K.useState(!1),n=i=>{var a,l;const r=encodeURIComponent(window.location.href),s=encodeURIComponent("Join me at FISMUN'26 — Bigger. Better. Bolder. 26 June 2026."),o={whatsapp:`https://api.whatsapp.com/send?text=${s}%20${r}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${r}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${r}`,twitter:`https://twitter.com/intent/tweet?text=${s}&url=${r}`};if(i==="copy"){(a=navigator.clipboard)==null||a.writeText(window.location.href).then(()=>{e(!0),setTimeout(()=>e(!1),2200)});return}if(i==="instagram"){navigator.share?navigator.share({title:"FISMUN'26",text:decodeURIComponent(s),url:window.location.href}):(l=navigator.clipboard)==null||l.writeText(window.location.href).then(()=>{e(!0),setTimeout(()=>e(!1),2200)});return}window.open(o[i],"_blank","noopener,width=620,height=500")};return D.jsxs("div",{className:"share-row",children:[D.jsx("p",{className:"share-label",children:"Share FISMUN'26"}),D.jsxs("div",{className:"share-btns",children:[D.jsx(it.button,{className:"share-btn share-wa",onClick:()=>n("whatsapp"),title:"Share on WhatsApp",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:D.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[D.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"}),D.jsx("path",{d:"M11.999 2C6.477 2 2 6.477 2 12c0 1.885.52 3.648 1.428 5.158L2 22l4.946-1.403A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 11.999 2zm.001 18a7.97 7.97 0 01-4.074-1.118l-.292-.174-3.033.86.838-3.07-.19-.306A7.997 7.997 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"})]})}),D.jsx(it.button,{className:"share-btn share-fb",onClick:()=>n("facebook"),title:"Share on Facebook",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:D.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:D.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),D.jsx(it.button,{className:"share-btn share-ig",onClick:()=>n("instagram"),title:"Share on Instagram",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:D.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:D.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})})}),D.jsx(it.button,{className:"share-btn share-li",onClick:()=>n("linkedin"),title:"Share on LinkedIn",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:D.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:D.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),D.jsx(it.button,{className:"share-btn share-x",onClick:()=>n("twitter"),title:"Share on X (Twitter)",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:D.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:D.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),D.jsx(it.button,{className:`share-btn share-copy${t?" copied":""}`,onClick:()=>n("copy"),title:"Copy link",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:t?D.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:D.jsx("path",{d:"M20 6L9 17l-5-5"})}):D.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[D.jsx("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),D.jsx("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})})]})]})}function CN(){return D.jsx("section",{id:"register",className:"register section page-section",children:D.jsxs("div",{className:"register-inner",children:[D.jsx(rn,{children:D.jsx(it.div,{className:"register-badge",animate:{boxShadow:["0 0 0 0 rgba(74,143,226,0.5)","0 0 0 10px rgba(74,143,226,0)","0 0 0 0 rgba(74,143,226,0)"]},transition:{repeat:1/0,duration:2.6,ease:"easeOut"},children:"Open Registration · 26 June 2026"})}),D.jsx(rn,{delay:.08,children:D.jsxs("h2",{className:"register-title",children:["STEP INTO",D.jsx("br",{}),"DIPLOMACY"]})}),D.jsx(rn,{delay:.16,children:D.jsx("p",{className:"register-sub",children:"Join delegates from across the country for two days of world-class debate and diplomacy"})}),D.jsx(rn,{delay:.24,children:D.jsx(it.a,{href:"#",className:"btn-register",whileHover:{scale:1.04,y:-4},whileTap:{scale:.97},transition:{type:"spring",stiffness:400,damping:18},children:"Register Now"})}),D.jsx(rn,{delay:.34,children:D.jsx(AN,{})})]})})}function RN(){return D.jsxs("footer",{className:"footer",id:"footer-contact",children:[D.jsxs("div",{children:[D.jsx("div",{className:"footer-logo",children:"FISMUN'26"}),D.jsx("div",{className:"footer-tag",children:"26 June 2026 · Bigger · Better · Bolder"})]}),D.jsx("div",{className:"footer-links",children:[["Home","hero"],["About","secretariat"],["Committees","committees"],["Conduct","coc"],["Register","register"]].map(([t,e])=>D.jsx("a",{href:`#${e}`,className:"footer-link",children:t},t))}),D.jsx("div",{className:"footer-copy",children:"© 2026 FISMUN. All rights reserved."})]})}function PN(){const[t,e]=K.useState(!1);return D.jsxs(D.Fragment,{children:[D.jsx(e1,{children:!t&&D.jsx(mN,{onDone:()=>e(!0)})}),D.jsxs("div",{className:"bg-blobs","aria-hidden":"true",children:[D.jsx("div",{className:"blob blob-1"}),D.jsx("div",{className:"blob blob-2"}),D.jsx("div",{className:"blob blob-3"}),D.jsx("div",{className:"blob blob-4"}),D.jsx("div",{className:"blob blob-5"})]}),D.jsx(gN,{}),D.jsx(pN,{}),D.jsx(hN,{}),D.jsx(vN,{}),D.jsxs("main",{children:[D.jsx(_N,{}),"          ",D.jsx(yN,{}),"   ",D.jsx(SN,{}),"     ",D.jsx(EN,{}),D.jsx(TN,{}),"    ",D.jsx(wN,{}),D.jsx(CN,{})]}),D.jsx(RN,{})]})}Bf.createRoot(document.getElementById("root")).render(D.jsx(kM.StrictMode,{children:D.jsx(PN,{})}));
