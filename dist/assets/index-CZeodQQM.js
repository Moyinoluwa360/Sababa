(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function r4(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qf={exports:{}},xl={},Qf={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy;function i4(){if(Gy)return Ye;Gy=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),E=Symbol.iterator;function b(U){return U===null||typeof U!="object"?null:(U=E&&U[E]||U["@@iterator"],typeof U=="function"?U:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,z={};function M(U,te,me){this.props=U,this.context=te,this.refs=z,this.updater=me||R}M.prototype.isReactComponent={},M.prototype.setState=function(U,te){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,te,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function $(){}$.prototype=M.prototype;function Y(U,te,me){this.props=U,this.context=te,this.refs=z,this.updater=me||R}var ee=Y.prototype=new $;ee.constructor=Y,P(ee,M.prototype),ee.isPureReactComponent=!0;var X=Array.isArray,ne=Object.prototype.hasOwnProperty,D={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function T(U,te,me){var Pe,Ne={},De=null,Ke=null;if(te!=null)for(Pe in te.ref!==void 0&&(Ke=te.ref),te.key!==void 0&&(De=""+te.key),te)ne.call(te,Pe)&&!C.hasOwnProperty(Pe)&&(Ne[Pe]=te[Pe]);var He=arguments.length-2;if(He===1)Ne.children=me;else if(1<He){for(var Je=Array(He),Ge=0;Ge<He;Ge++)Je[Ge]=arguments[Ge+2];Ne.children=Je}if(U&&U.defaultProps)for(Pe in He=U.defaultProps,He)Ne[Pe]===void 0&&(Ne[Pe]=He[Pe]);return{$$typeof:t,type:U,key:De,ref:Ke,props:Ne,_owner:D.current}}function S(U,te){return{$$typeof:t,type:U.type,key:te,ref:U.ref,props:U.props,_owner:U._owner}}function O(U){return typeof U=="object"&&U!==null&&U.$$typeof===t}function V(U){var te={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(me){return te[me]})}var B=/\/+/g;function k(U,te){return typeof U=="object"&&U!==null&&U.key!=null?V(""+U.key):te.toString(36)}function Oe(U,te,me,Pe,Ne){var De=typeof U;(De==="undefined"||De==="boolean")&&(U=null);var Ke=!1;if(U===null)Ke=!0;else switch(De){case"string":case"number":Ke=!0;break;case"object":switch(U.$$typeof){case t:case e:Ke=!0}}if(Ke)return Ke=U,Ne=Ne(Ke),U=Pe===""?"."+k(Ke,0):Pe,X(Ne)?(me="",U!=null&&(me=U.replace(B,"$&/")+"/"),Oe(Ne,te,me,"",function(Ge){return Ge})):Ne!=null&&(O(Ne)&&(Ne=S(Ne,me+(!Ne.key||Ke&&Ke.key===Ne.key?"":(""+Ne.key).replace(B,"$&/")+"/")+U)),te.push(Ne)),1;if(Ke=0,Pe=Pe===""?".":Pe+":",X(U))for(var He=0;He<U.length;He++){De=U[He];var Je=Pe+k(De,He);Ke+=Oe(De,te,me,Je,Ne)}else if(Je=b(U),typeof Je=="function")for(U=Je.call(U),He=0;!(De=U.next()).done;)De=De.value,Je=Pe+k(De,He++),Ke+=Oe(De,te,me,Je,Ne);else if(De==="object")throw te=String(U),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return Ke}function rt(U,te,me){if(U==null)return U;var Pe=[],Ne=0;return Oe(U,Pe,"","",function(De){return te.call(me,De,Ne++)}),Pe}function Ae(U){if(U._status===-1){var te=U._result;te=te(),te.then(function(me){(U._status===0||U._status===-1)&&(U._status=1,U._result=me)},function(me){(U._status===0||U._status===-1)&&(U._status=2,U._result=me)}),U._status===-1&&(U._status=0,U._result=te)}if(U._status===1)return U._result.default;throw U._result}var Fe={current:null},le={transition:null},pe={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:le,ReactCurrentOwner:D};function ce(){throw Error("act(...) is not supported in production builds of React.")}return Ye.Children={map:rt,forEach:function(U,te,me){rt(U,function(){te.apply(this,arguments)},me)},count:function(U){var te=0;return rt(U,function(){te++}),te},toArray:function(U){return rt(U,function(te){return te})||[]},only:function(U){if(!O(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Ye.Component=M,Ye.Fragment=n,Ye.Profiler=o,Ye.PureComponent=Y,Ye.StrictMode=i,Ye.Suspense=f,Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ye.act=ce,Ye.cloneElement=function(U,te,me){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Pe=P({},U.props),Ne=U.key,De=U.ref,Ke=U._owner;if(te!=null){if(te.ref!==void 0&&(De=te.ref,Ke=D.current),te.key!==void 0&&(Ne=""+te.key),U.type&&U.type.defaultProps)var He=U.type.defaultProps;for(Je in te)ne.call(te,Je)&&!C.hasOwnProperty(Je)&&(Pe[Je]=te[Je]===void 0&&He!==void 0?He[Je]:te[Je])}var Je=arguments.length-2;if(Je===1)Pe.children=me;else if(1<Je){He=Array(Je);for(var Ge=0;Ge<Je;Ge++)He[Ge]=arguments[Ge+2];Pe.children=He}return{$$typeof:t,type:U.type,key:Ne,ref:De,props:Pe,_owner:Ke}},Ye.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Ye.createElement=T,Ye.createFactory=function(U){var te=T.bind(null,U);return te.type=U,te},Ye.createRef=function(){return{current:null}},Ye.forwardRef=function(U){return{$$typeof:h,render:U}},Ye.isValidElement=O,Ye.lazy=function(U){return{$$typeof:w,_payload:{_status:-1,_result:U},_init:Ae}},Ye.memo=function(U,te){return{$$typeof:v,type:U,compare:te===void 0?null:te}},Ye.startTransition=function(U){var te=le.transition;le.transition={};try{U()}finally{le.transition=te}},Ye.unstable_act=ce,Ye.useCallback=function(U,te){return Fe.current.useCallback(U,te)},Ye.useContext=function(U){return Fe.current.useContext(U)},Ye.useDebugValue=function(){},Ye.useDeferredValue=function(U){return Fe.current.useDeferredValue(U)},Ye.useEffect=function(U,te){return Fe.current.useEffect(U,te)},Ye.useId=function(){return Fe.current.useId()},Ye.useImperativeHandle=function(U,te,me){return Fe.current.useImperativeHandle(U,te,me)},Ye.useInsertionEffect=function(U,te){return Fe.current.useInsertionEffect(U,te)},Ye.useLayoutEffect=function(U,te){return Fe.current.useLayoutEffect(U,te)},Ye.useMemo=function(U,te){return Fe.current.useMemo(U,te)},Ye.useReducer=function(U,te,me){return Fe.current.useReducer(U,te,me)},Ye.useRef=function(U){return Fe.current.useRef(U)},Ye.useState=function(U){return Fe.current.useState(U)},Ye.useSyncExternalStore=function(U,te,me){return Fe.current.useSyncExternalStore(U,te,me)},Ye.useTransition=function(){return Fe.current.useTransition()},Ye.version="18.3.1",Ye}var qy;function Kd(){return qy||(qy=1,Qf.exports=i4()),Qf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy;function s4(){if(Qy)return xl;Qy=1;var t=Kd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,f,v){var w,E={},b=null,R=null;v!==void 0&&(b=""+v),f.key!==void 0&&(b=""+f.key),f.ref!==void 0&&(R=f.ref);for(w in f)i.call(f,w)&&!l.hasOwnProperty(w)&&(E[w]=f[w]);if(h&&h.defaultProps)for(w in f=h.defaultProps,f)E[w]===void 0&&(E[w]=f[w]);return{$$typeof:e,type:h,key:b,ref:R,props:E,_owner:o.current}}return xl.Fragment=n,xl.jsx=c,xl.jsxs=c,xl}var Yy;function o4(){return Yy||(Yy=1,qf.exports=s4()),qf.exports}var y=o4(),K=Kd();const fr=r4(K);var xc={},Yf={exports:{}},On={},Xf={exports:{}},Jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy;function a4(){return Xy||(Xy=1,function(t){function e(le,pe){var ce=le.length;le.push(pe);e:for(;0<ce;){var U=ce-1>>>1,te=le[U];if(0<o(te,pe))le[U]=pe,le[ce]=te,ce=U;else break e}}function n(le){return le.length===0?null:le[0]}function i(le){if(le.length===0)return null;var pe=le[0],ce=le.pop();if(ce!==pe){le[0]=ce;e:for(var U=0,te=le.length,me=te>>>1;U<me;){var Pe=2*(U+1)-1,Ne=le[Pe],De=Pe+1,Ke=le[De];if(0>o(Ne,ce))De<te&&0>o(Ke,Ne)?(le[U]=Ke,le[De]=ce,U=De):(le[U]=Ne,le[Pe]=ce,U=Pe);else if(De<te&&0>o(Ke,ce))le[U]=Ke,le[De]=ce,U=De;else break e}}return pe}function o(le,pe){var ce=le.sortIndex-pe.sortIndex;return ce!==0?ce:le.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();t.unstable_now=function(){return c.now()-h}}var f=[],v=[],w=1,E=null,b=3,R=!1,P=!1,z=!1,M=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(le){for(var pe=n(v);pe!==null;){if(pe.callback===null)i(v);else if(pe.startTime<=le)i(v),pe.sortIndex=pe.expirationTime,e(f,pe);else break;pe=n(v)}}function X(le){if(z=!1,ee(le),!P)if(n(f)!==null)P=!0,Ae(ne);else{var pe=n(v);pe!==null&&Fe(X,pe.startTime-le)}}function ne(le,pe){P=!1,z&&(z=!1,$(T),T=-1),R=!0;var ce=b;try{for(ee(pe),E=n(f);E!==null&&(!(E.expirationTime>pe)||le&&!V());){var U=E.callback;if(typeof U=="function"){E.callback=null,b=E.priorityLevel;var te=U(E.expirationTime<=pe);pe=t.unstable_now(),typeof te=="function"?E.callback=te:E===n(f)&&i(f),ee(pe)}else i(f);E=n(f)}if(E!==null)var me=!0;else{var Pe=n(v);Pe!==null&&Fe(X,Pe.startTime-pe),me=!1}return me}finally{E=null,b=ce,R=!1}}var D=!1,C=null,T=-1,S=5,O=-1;function V(){return!(t.unstable_now()-O<S)}function B(){if(C!==null){var le=t.unstable_now();O=le;var pe=!0;try{pe=C(!0,le)}finally{pe?k():(D=!1,C=null)}}else D=!1}var k;if(typeof Y=="function")k=function(){Y(B)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,rt=Oe.port2;Oe.port1.onmessage=B,k=function(){rt.postMessage(null)}}else k=function(){M(B,0)};function Ae(le){C=le,D||(D=!0,k())}function Fe(le,pe){T=M(function(){le(t.unstable_now())},pe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(le){le.callback=null},t.unstable_continueExecution=function(){P||R||(P=!0,Ae(ne))},t.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<le?Math.floor(1e3/le):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(le){switch(b){case 1:case 2:case 3:var pe=3;break;default:pe=b}var ce=b;b=pe;try{return le()}finally{b=ce}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(le,pe){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var ce=b;b=le;try{return pe()}finally{b=ce}},t.unstable_scheduleCallback=function(le,pe,ce){var U=t.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?U+ce:U):ce=U,le){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ce+te,le={id:w++,callback:pe,priorityLevel:le,startTime:ce,expirationTime:te,sortIndex:-1},ce>U?(le.sortIndex=ce,e(v,le),n(f)===null&&le===n(v)&&(z?($(T),T=-1):z=!0,Fe(X,ce-U))):(le.sortIndex=te,e(f,le),P||R||(P=!0,Ae(ne))),le},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(le){var pe=b;return function(){var ce=b;b=pe;try{return le.apply(this,arguments)}finally{b=ce}}}}(Jf)),Jf}var Jy;function l4(){return Jy||(Jy=1,Xf.exports=a4()),Xf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy;function u4(){if(Zy)return On;Zy=1;var t=Kd(),e=l4();function n(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},E={};function b(r){return f.call(E,r)?!0:f.call(w,r)?!1:v.test(r)?E[r]=!0:(w[r]=!0,!1)}function R(r,s,a,d){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function P(r,s,a,d){if(s===null||typeof s>"u"||R(r,s,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,a,d,p,g,_){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=_}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){M[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];M[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){M[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){M[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){M[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){M[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){M[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){M[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){M[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function Y(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace($,Y);M[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace($,Y);M[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace($,Y);M[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){M[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),M.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){M[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function ee(r,s,a,d){var p=M.hasOwnProperty(s)?M[s]:null;(p!==null?p.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(P(s,a,p,d)&&(a=null),d||p===null?b(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):p.mustUseProperty?r[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,d=p.attributeNamespace,a===null?r.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,d?r.setAttributeNS(d,s,a):r.setAttribute(s,a))))}var X=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),D=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),V=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Oe=Symbol.for("react.suspense_list"),rt=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),le=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=le&&r[le]||r["@@iterator"],typeof r=="function"?r:null)}var ce=Object.assign,U;function te(r){if(U===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+r}var me=!1;function Pe(r,s){if(!r||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(J){var d=J}Reflect.construct(r,[],s)}else{try{s.call()}catch(J){d=J}r.call(s.prototype)}else{try{throw Error()}catch(J){d=J}r()}}catch(J){if(J&&d&&typeof J.stack=="string"){for(var p=J.stack.split(`
`),g=d.stack.split(`
`),_=p.length-1,N=g.length-1;1<=_&&0<=N&&p[_]!==g[N];)N--;for(;1<=_&&0<=N;_--,N--)if(p[_]!==g[N]){if(_!==1||N!==1)do if(_--,N--,0>N||p[_]!==g[N]){var j=`
`+p[_].replace(" at new "," at ");return r.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",r.displayName)),j}while(1<=_&&0<=N);break}}}finally{me=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?te(r):""}function Ne(r){switch(r.tag){case 5:return te(r.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return r=Pe(r.type,!1),r;case 11:return r=Pe(r.type.render,!1),r;case 1:return r=Pe(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case C:return"Fragment";case D:return"Portal";case S:return"Profiler";case T:return"StrictMode";case k:return"Suspense";case Oe:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case V:return(r.displayName||"Context")+".Consumer";case O:return(r._context.displayName||"Context")+".Provider";case B:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case rt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Ae:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Ke(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function He(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Je(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ge(r){var s=Je(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return p.call(this)},set:function(_){d=""+_,g.call(this,_)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(_){d=""+_},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function kt(r){r._valueTracker||(r._valueTracker=Ge(r))}function Ut(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),d="";return r&&(d=Je(r)?r.checked?"true":"false":r.value),r=d,r!==a?(s.setValue(r),!0):!1}function Br(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function xn(r,s){var a=s.checked;return ce({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Wi(r,s){var a=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;a=He(s.value!=null?s.value:a),r._wrapperState={initialChecked:d,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Us(r,s){s=s.checked,s!=null&&ee(r,"checked",s,!1)}function Ki(r,s){Us(r,s);var a=He(s.value),d=s.type;if(a!=null)d==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Gi(r,s.type,a):s.hasOwnProperty("defaultValue")&&Gi(r,s.type,He(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Oo(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Gi(r,s,a){(s!=="number"||Br(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var vr=Array.isArray;function xr(r,s,a,d){if(r=r.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<r.length;a++)p=s.hasOwnProperty("$"+r[a].value),r[a].selected!==p&&(r[a].selected=p),p&&d&&(r[a].defaultSelected=!0)}else{for(a=""+He(a),s=null,p=0;p<r.length;p++){if(r[p].value===a){r[p].selected=!0,d&&(r[p].defaultSelected=!0);return}s!==null||r[p].disabled||(s=r[p])}s!==null&&(s.selected=!0)}}function Vn(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(n(91));return ce({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Jn(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(n(92));if(vr(a)){if(1<a.length)throw Error(n(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:He(a)}}function gi(r,s){var a=He(s.value),d=He(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),d!=null&&(r.defaultValue=""+d)}function yi(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function dt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?dt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Zn,vi=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,d,p){MSApp.execUnsafeLocalFunction(function(){return r(s,a,d,p)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Zn=Zn||document.createElement("div"),Zn.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Zn.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Hr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wr=["Webkit","ms","Moz","O"];Object.keys(cn).forEach(function(r){Wr.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),cn[s]=cn[r]})});function qi(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||cn.hasOwnProperty(r)&&cn[r]?(""+s).trim():s+"px"}function Qi(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var d=a.indexOf("--")===0,p=qi(a,s[a],d);a==="float"&&(a="cssFloat"),d?r.setProperty(a,p):r[a]=p}}var zs=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yi(r,s){if(s){if(zs[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(n(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(n(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(n(61))}if(s.style!=null&&typeof s.style!="object")throw Error(n(62))}}function Kr(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gr=null;function qr(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Xi=null,wn=null,er=null;function xi(r){if(r=il(r)){if(typeof Xi!="function")throw Error(n(280));var s=r.stateNode;s&&(s=Ou(s),Xi(r.stateNode,r.type,s))}}function _n(r){wn?er?er.push(r):er=[r]:wn=r}function Qr(){if(wn){var r=wn,s=er;if(er=wn=null,xi(r),s)for(r=0;r<s.length;r++)xi(s[r])}}function wi(r,s){return r(s)}function $s(){}var L=!1;function H(r,s,a){if(L)return r(s,a);L=!0;try{return wi(r,s,a)}finally{L=!1,(wn!==null||er!==null)&&($s(),Qr())}}function q(r,s){var a=r.stateNode;if(a===null)return null;var d=Ou(a);if(d===null)return null;a=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(n(231,s,typeof a));return a}var oe=!1;if(h)try{var he={};Object.defineProperty(he,"passive",{get:function(){oe=!0}}),window.addEventListener("test",he,he),window.removeEventListener("test",he,he)}catch{oe=!1}function _e(r,s,a,d,p,g,_,N,j){var J=Array.prototype.slice.call(arguments,3);try{s.apply(a,J)}catch(se){this.onError(se)}}var Ce=!1,ge=null,xe=!1,Se=null,Le={onError:function(r){Ce=!0,ge=r}};function Ie(r,s,a,d,p,g,_,N,j){Ce=!1,ge=null,_e.apply(Le,arguments)}function Ue(r,s,a,d,p,g,_,N,j){if(Ie.apply(this,arguments),Ce){if(Ce){var J=ge;Ce=!1,ge=null}else throw Error(n(198));xe||(xe=!0,Se=J)}}function qe(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function ft(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function ht(r){if(qe(r)!==r)throw Error(n(188))}function zt(r){var s=r.alternate;if(!s){if(s=qe(r),s===null)throw Error(n(188));return s!==r?null:r}for(var a=r,d=s;;){var p=a.return;if(p===null)break;var g=p.alternate;if(g===null){if(d=p.return,d!==null){a=d;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===a)return ht(p),r;if(g===d)return ht(p),s;g=g.sibling}throw Error(n(188))}if(a.return!==d.return)a=p,d=g;else{for(var _=!1,N=p.child;N;){if(N===a){_=!0,a=p,d=g;break}if(N===d){_=!0,d=p,a=g;break}N=N.sibling}if(!_){for(N=g.child;N;){if(N===a){_=!0,a=g,d=p;break}if(N===d){_=!0,d=g,a=p;break}N=N.sibling}if(!_)throw Error(n(189))}}if(a.alternate!==d)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?r:s}function Qe(r){return r=zt(r),r!==null?tr(r):null}function tr(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=tr(r);if(s!==null)return s;r=r.sibling}return null}var Sn=e.unstable_scheduleCallback,wr=e.unstable_cancelCallback,Jt=e.unstable_shouldYield,_i=e.unstable_requestPaint,ot=e.unstable_now,Ji=e.unstable_getCurrentPriorityLevel,En=e.unstable_ImmediatePriority,Fn=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,$t=e.unstable_LowPriority,Un=e.unstable_IdlePriority,nr=null,Zt=null;function yt(r){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(nr,r,void 0,(r.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:hu,Zi=Math.log,Lo=Math.LN2;function hu(r){return r>>>=0,r===0?32:31-(Zi(r)/Lo|0)|0}var jo=64,Mo=4194304;function es(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Bs(r,s){var a=r.pendingLanes;if(a===0)return 0;var d=0,p=r.suspendedLanes,g=r.pingedLanes,_=a&268435455;if(_!==0){var N=_&~p;N!==0?d=es(N):(g&=_,g!==0&&(d=es(g)))}else _=a&~p,_!==0?d=es(_):g!==0&&(d=es(g));if(d===0)return 0;if(s!==0&&s!==d&&(s&p)===0&&(p=d&-d,g=s&-s,p>=g||p===16&&(g&4194240)!==0))return s;if((d&4)!==0&&(d|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)a=31-St(s),p=1<<a,d|=r[a],s&=~p;return d}function bh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ei(r,s){for(var a=r.suspendedLanes,d=r.pingedLanes,p=r.expirationTimes,g=r.pendingLanes;0<g;){var _=31-St(g),N=1<<_,j=p[_];j===-1?((N&a)===0||(N&d)!==0)&&(p[_]=bh(N,s)):j<=s&&(r.expiredLanes|=N),g&=~N}}function zn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Hs(){var r=jo;return jo<<=1,(jo&4194240)===0&&(jo=64),r}function ts(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ns(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-St(s),r[s]=a}function pt(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<a;){var p=31-St(a),g=1<<p;s[p]=0,d[p]=-1,r[p]=-1,a&=~g}}function rs(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var d=31-St(a),p=1<<d;p&s|r[d]&s&&(r[d]|=s),a&=~p}}var et=0;function is(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var fu,Vo,pu,mu,gu,Ba=!1,Yr=[],en=null,_r=null,Er=null,ss=new Map,rr=new Map,Xr=[],Ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(r,s){switch(r){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ss.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(s.pointerId)}}function Cn(r,s,a,d,p,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:d,nativeEvent:g,targetContainers:[p]},s!==null&&(s=il(s),s!==null&&Vo(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),r)}function Th(r,s,a,d,p){switch(s){case"focusin":return en=Cn(en,r,s,a,d,p),!0;case"dragenter":return _r=Cn(_r,r,s,a,d,p),!0;case"mouseover":return Er=Cn(Er,r,s,a,d,p),!0;case"pointerover":var g=p.pointerId;return ss.set(g,Cn(ss.get(g)||null,r,s,a,d,p)),!0;case"gotpointercapture":return g=p.pointerId,rr.set(g,Cn(rr.get(g)||null,r,s,a,d,p)),!0}return!1}function vu(r){var s=Qs(r.target);if(s!==null){var a=qe(s);if(a!==null){if(s=a.tag,s===13){if(s=ft(a),s!==null){r.blockedOn=s,gu(r.priority,function(){pu(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function bi(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Fo(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var d=new a.constructor(a.type,a);Gr=d,a.target.dispatchEvent(d),Gr=null}else return s=il(a),s!==null&&Vo(s),r.blockedOn=a,!1;s.shift()}return!0}function Ws(r,s,a){bi(r)&&a.delete(s)}function xu(){Ba=!1,en!==null&&bi(en)&&(en=null),_r!==null&&bi(_r)&&(_r=null),Er!==null&&bi(Er)&&(Er=null),ss.forEach(Ws),rr.forEach(Ws)}function br(r,s){r.blockedOn===s&&(r.blockedOn=null,Ba||(Ba=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,xu)))}function Ir(r){function s(p){return br(p,r)}if(0<Yr.length){br(Yr[0],r);for(var a=1;a<Yr.length;a++){var d=Yr[a];d.blockedOn===r&&(d.blockedOn=null)}}for(en!==null&&br(en,r),_r!==null&&br(_r,r),Er!==null&&br(Er,r),ss.forEach(s),rr.forEach(s),a=0;a<Xr.length;a++)d=Xr[a],d.blockedOn===r&&(d.blockedOn=null);for(;0<Xr.length&&(a=Xr[0],a.blockedOn===null);)vu(a),a.blockedOn===null&&Xr.shift()}var Ii=X.ReactCurrentBatchConfig,os=!0;function _t(r,s,a,d){var p=et,g=Ii.transition;Ii.transition=null;try{et=1,Ha(r,s,a,d)}finally{et=p,Ii.transition=g}}function Sh(r,s,a,d){var p=et,g=Ii.transition;Ii.transition=null;try{et=4,Ha(r,s,a,d)}finally{et=p,Ii.transition=g}}function Ha(r,s,a,d){if(os){var p=Fo(r,s,a,d);if(p===null)Mh(r,s,d,Ks,a),yu(r,d);else if(Th(p,r,s,a,d))d.stopPropagation();else if(yu(r,d),s&4&&-1<Ih.indexOf(r)){for(;p!==null;){var g=il(p);if(g!==null&&fu(g),g=Fo(r,s,a,d),g===null&&Mh(r,s,d,Ks,a),g===p)break;p=g}p!==null&&d.stopPropagation()}else Mh(r,s,d,null,a)}}var Ks=null;function Fo(r,s,a,d){if(Ks=null,r=qr(d),r=Qs(r),r!==null)if(s=qe(r),s===null)r=null;else if(a=s.tag,a===13){if(r=ft(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Ks=r,null}function Wa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ji()){case En:return 1;case Fn:return 4;case ze:case $t:return 16;case Un:return 536870912;default:return 16}default:return 16}}var $n=null,Uo=null,Rn=null;function Ka(){if(Rn)return Rn;var r,s=Uo,a=s.length,d,p="value"in $n?$n.value:$n.textContent,g=p.length;for(r=0;r<a&&s[r]===p[r];r++);var _=a-r;for(d=1;d<=_&&s[a-d]===p[g-d];d++);return Rn=p.slice(r,1<d?1-d:void 0)}function zo(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Jr(){return!0}function Ga(){return!1}function tn(r){function s(a,d,p,g,_){this._reactName=a,this._targetInst=p,this.type=d,this.nativeEvent=g,this.target=_,this.currentTarget=null;for(var N in r)r.hasOwnProperty(N)&&(a=r[N],this[N]=a?a(g):g[N]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Jr:Ga,this.isPropagationStopped=Ga,this}return ce(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),s}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=tn(Tr),Zr=ce({},Tr,{view:0,detail:0}),Ch=tn(Zr),Bo,Ti,as,Gs=ce({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ei,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==as&&(as&&r.type==="mousemove"?(Bo=r.screenX-as.screenX,Ti=r.screenY-as.screenY):Ti=Bo=0,as=r),Bo)},movementY:function(r){return"movementY"in r?r.movementY:Ti}}),Ho=tn(Gs),qa=ce({},Gs,{dataTransfer:0}),wu=tn(qa),Wo=ce({},Zr,{relatedTarget:0}),Ko=tn(Wo),_u=ce({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Si=tn(_u),Eu=ce({},Tr,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),bu=tn(Eu),Iu=ce({},Tr,{data:0}),Qa=tn(Iu),Go={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Su(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Tu[r])?!!s[r]:!1}function ei(){return Su}var u=ce({},Zr,{key:function(r){if(r.key){var s=Go[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=zo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?bn[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ei,charCode:function(r){return r.type==="keypress"?zo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?zo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=tn(u),x=ce({},Gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=tn(x),W=ce({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ei}),Z=tn(W),fe=ce({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ct=tn(fe),Mt=ce({},Gs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),tt=tn(Mt),Bt=[9,13,27,32],Nt=h&&"CompositionEvent"in window,ir=null;h&&"documentMode"in document&&(ir=document.documentMode);var Bn=h&&"TextEvent"in window&&!ir,qs=h&&(!Nt||ir&&8<ir&&11>=ir),qo=" ",zg=!1;function $g(r,s){switch(r){case"keyup":return Bt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bg(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Qo=!1;function eE(r,s){switch(r){case"compositionend":return Bg(s);case"keypress":return s.which!==32?null:(zg=!0,qo);case"textInput":return r=s.data,r===qo&&zg?null:r;default:return null}}function tE(r,s){if(Qo)return r==="compositionend"||!Nt&&$g(r,s)?(r=Ka(),Rn=Uo=$n=null,Qo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return qs&&s.locale!=="ko"?null:s.data;default:return null}}var nE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hg(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!nE[r.type]:s==="textarea"}function Wg(r,s,a,d){_n(d),s=Au(s,"onChange"),0<s.length&&(a=new $o("onChange","change",null,a,d),r.push({event:a,listeners:s}))}var Ya=null,Xa=null;function rE(r){u0(r,0)}function Cu(r){var s=ea(r);if(Ut(s))return r}function iE(r,s){if(r==="change")return s}var Kg=!1;if(h){var Rh;if(h){var kh="oninput"in document;if(!kh){var Gg=document.createElement("div");Gg.setAttribute("oninput","return;"),kh=typeof Gg.oninput=="function"}Rh=kh}else Rh=!1;Kg=Rh&&(!document.documentMode||9<document.documentMode)}function qg(){Ya&&(Ya.detachEvent("onpropertychange",Qg),Xa=Ya=null)}function Qg(r){if(r.propertyName==="value"&&Cu(Xa)){var s=[];Wg(s,Xa,r,qr(r)),H(rE,s)}}function sE(r,s,a){r==="focusin"?(qg(),Ya=s,Xa=a,Ya.attachEvent("onpropertychange",Qg)):r==="focusout"&&qg()}function oE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Cu(Xa)}function aE(r,s){if(r==="click")return Cu(s)}function lE(r,s){if(r==="input"||r==="change")return Cu(s)}function uE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Sr=typeof Object.is=="function"?Object.is:uE;function Ja(r,s){if(Sr(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),d=Object.keys(s);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var p=a[d];if(!f.call(s,p)||!Sr(r[p],s[p]))return!1}return!0}function Yg(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Xg(r,s){var a=Yg(r);r=0;for(var d;a;){if(a.nodeType===3){if(d=r+a.textContent.length,r<=s&&d>=s)return{node:a,offset:s-r};r=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yg(a)}}function Jg(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Jg(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Zg(){for(var r=window,s=Br();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Br(r.document)}return s}function Ph(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function cE(r){var s=Zg(),a=r.focusedElem,d=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Jg(a.ownerDocument.documentElement,a)){if(d!==null&&Ph(a)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var p=a.textContent.length,g=Math.min(d.start,p);d=d.end===void 0?g:Math.min(d.end,p),!r.extend&&g>d&&(p=d,d=g,g=p),p=Xg(a,g);var _=Xg(a,d);p&&_&&(r.rangeCount!==1||r.anchorNode!==p.node||r.anchorOffset!==p.offset||r.focusNode!==_.node||r.focusOffset!==_.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),r.removeAllRanges(),g>d?(r.addRange(s),r.extend(_.node,_.offset)):(s.setEnd(_.node,_.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var dE=h&&"documentMode"in document&&11>=document.documentMode,Yo=null,Ah=null,Za=null,Nh=!1;function e0(r,s,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nh||Yo==null||Yo!==Br(d)||(d=Yo,"selectionStart"in d&&Ph(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Za&&Ja(Za,d)||(Za=d,d=Au(Ah,"onSelect"),0<d.length&&(s=new $o("onSelect","select",null,s,a),r.push({event:s,listeners:d}),s.target=Yo)))}function Ru(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Xo={animationend:Ru("Animation","AnimationEnd"),animationiteration:Ru("Animation","AnimationIteration"),animationstart:Ru("Animation","AnimationStart"),transitionend:Ru("Transition","TransitionEnd")},Dh={},t0={};h&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function ku(r){if(Dh[r])return Dh[r];if(!Xo[r])return r;var s=Xo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in t0)return Dh[r]=s[a];return r}var n0=ku("animationend"),r0=ku("animationiteration"),i0=ku("animationstart"),s0=ku("transitionend"),o0=new Map,a0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ls(r,s){o0.set(r,s),l(s,[r])}for(var Oh=0;Oh<a0.length;Oh++){var Lh=a0[Oh],hE=Lh.toLowerCase(),fE=Lh[0].toUpperCase()+Lh.slice(1);ls(hE,"on"+fE)}ls(n0,"onAnimationEnd"),ls(r0,"onAnimationIteration"),ls(i0,"onAnimationStart"),ls("dblclick","onDoubleClick"),ls("focusin","onFocus"),ls("focusout","onBlur"),ls(s0,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pE=new Set("cancel close invalid load scroll toggle".split(" ").concat(el));function l0(r,s,a){var d=r.type||"unknown-event";r.currentTarget=a,Ue(d,s,void 0,r),r.currentTarget=null}function u0(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var d=r[a],p=d.event;d=d.listeners;e:{var g=void 0;if(s)for(var _=d.length-1;0<=_;_--){var N=d[_],j=N.instance,J=N.currentTarget;if(N=N.listener,j!==g&&p.isPropagationStopped())break e;l0(p,N,J),g=j}else for(_=0;_<d.length;_++){if(N=d[_],j=N.instance,J=N.currentTarget,N=N.listener,j!==g&&p.isPropagationStopped())break e;l0(p,N,J),g=j}}}if(xe)throw r=Se,xe=!1,Se=null,r}function vt(r,s){var a=s[Bh];a===void 0&&(a=s[Bh]=new Set);var d=r+"__bubble";a.has(d)||(c0(s,r,2,!1),a.add(d))}function jh(r,s,a){var d=0;s&&(d|=4),c0(a,r,d,s)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function tl(r){if(!r[Pu]){r[Pu]=!0,i.forEach(function(a){a!=="selectionchange"&&(pE.has(a)||jh(a,!1,r),jh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Pu]||(s[Pu]=!0,jh("selectionchange",!1,s))}}function c0(r,s,a,d){switch(Wa(s)){case 1:var p=_t;break;case 4:p=Sh;break;default:p=Ha}a=p.bind(null,s,a,r),p=void 0,!oe||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),d?p!==void 0?r.addEventListener(s,a,{capture:!0,passive:p}):r.addEventListener(s,a,!0):p!==void 0?r.addEventListener(s,a,{passive:p}):r.addEventListener(s,a,!1)}function Mh(r,s,a,d,p){var g=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var _=d.tag;if(_===3||_===4){var N=d.stateNode.containerInfo;if(N===p||N.nodeType===8&&N.parentNode===p)break;if(_===4)for(_=d.return;_!==null;){var j=_.tag;if((j===3||j===4)&&(j=_.stateNode.containerInfo,j===p||j.nodeType===8&&j.parentNode===p))return;_=_.return}for(;N!==null;){if(_=Qs(N),_===null)return;if(j=_.tag,j===5||j===6){d=g=_;continue e}N=N.parentNode}}d=d.return}H(function(){var J=g,se=qr(a),ae=[];e:{var ie=o0.get(r);if(ie!==void 0){var ye=$o,we=r;switch(r){case"keypress":if(zo(a)===0)break e;case"keydown":case"keyup":ye=m;break;case"focusin":we="focus",ye=Ko;break;case"focusout":we="blur",ye=Ko;break;case"beforeblur":case"afterblur":ye=Ko;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=Ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=wu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=Z;break;case n0:case r0:case i0:ye=Si;break;case s0:ye=ct;break;case"scroll":ye=Ch;break;case"wheel":ye=tt;break;case"copy":case"cut":case"paste":ye=bu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=I}var Ee=(s&4)!==0,Pt=!Ee&&r==="scroll",G=Ee?ie!==null?ie+"Capture":null:ie;Ee=[];for(var F=J,Q;F!==null;){Q=F;var de=Q.stateNode;if(Q.tag===5&&de!==null&&(Q=de,G!==null&&(de=q(F,G),de!=null&&Ee.push(nl(F,de,Q)))),Pt)break;F=F.return}0<Ee.length&&(ie=new ye(ie,we,null,a,se),ae.push({event:ie,listeners:Ee}))}}if((s&7)===0){e:{if(ie=r==="mouseover"||r==="pointerover",ye=r==="mouseout"||r==="pointerout",ie&&a!==Gr&&(we=a.relatedTarget||a.fromElement)&&(Qs(we)||we[Ci]))break e;if((ye||ie)&&(ie=se.window===se?se:(ie=se.ownerDocument)?ie.defaultView||ie.parentWindow:window,ye?(we=a.relatedTarget||a.toElement,ye=J,we=we?Qs(we):null,we!==null&&(Pt=qe(we),we!==Pt||we.tag!==5&&we.tag!==6)&&(we=null)):(ye=null,we=J),ye!==we)){if(Ee=Ho,de="onMouseLeave",G="onMouseEnter",F="mouse",(r==="pointerout"||r==="pointerover")&&(Ee=I,de="onPointerLeave",G="onPointerEnter",F="pointer"),Pt=ye==null?ie:ea(ye),Q=we==null?ie:ea(we),ie=new Ee(de,F+"leave",ye,a,se),ie.target=Pt,ie.relatedTarget=Q,de=null,Qs(se)===J&&(Ee=new Ee(G,F+"enter",we,a,se),Ee.target=Q,Ee.relatedTarget=Pt,de=Ee),Pt=de,ye&&we)t:{for(Ee=ye,G=we,F=0,Q=Ee;Q;Q=Jo(Q))F++;for(Q=0,de=G;de;de=Jo(de))Q++;for(;0<F-Q;)Ee=Jo(Ee),F--;for(;0<Q-F;)G=Jo(G),Q--;for(;F--;){if(Ee===G||G!==null&&Ee===G.alternate)break t;Ee=Jo(Ee),G=Jo(G)}Ee=null}else Ee=null;ye!==null&&d0(ae,ie,ye,Ee,!1),we!==null&&Pt!==null&&d0(ae,Pt,we,Ee,!0)}}e:{if(ie=J?ea(J):window,ye=ie.nodeName&&ie.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ie.type==="file")var Te=iE;else if(Hg(ie))if(Kg)Te=lE;else{Te=oE;var Re=sE}else(ye=ie.nodeName)&&ye.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(Te=aE);if(Te&&(Te=Te(r,J))){Wg(ae,Te,a,se);break e}Re&&Re(r,ie,J),r==="focusout"&&(Re=ie._wrapperState)&&Re.controlled&&ie.type==="number"&&Gi(ie,"number",ie.value)}switch(Re=J?ea(J):window,r){case"focusin":(Hg(Re)||Re.contentEditable==="true")&&(Yo=Re,Ah=J,Za=null);break;case"focusout":Za=Ah=Yo=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,e0(ae,a,se);break;case"selectionchange":if(dE)break;case"keydown":case"keyup":e0(ae,a,se)}var ke;if(Nt)e:{switch(r){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Qo?$g(r,a)&&(je="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(je="onCompositionStart");je&&(qs&&a.locale!=="ko"&&(Qo||je!=="onCompositionStart"?je==="onCompositionEnd"&&Qo&&(ke=Ka()):($n=se,Uo="value"in $n?$n.value:$n.textContent,Qo=!0)),Re=Au(J,je),0<Re.length&&(je=new Qa(je,r,null,a,se),ae.push({event:je,listeners:Re}),ke?je.data=ke:(ke=Bg(a),ke!==null&&(je.data=ke)))),(ke=Bn?eE(r,a):tE(r,a))&&(J=Au(J,"onBeforeInput"),0<J.length&&(se=new Qa("onBeforeInput","beforeinput",null,a,se),ae.push({event:se,listeners:J}),se.data=ke))}u0(ae,s)})}function nl(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Au(r,s){for(var a=s+"Capture",d=[];r!==null;){var p=r,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=q(r,a),g!=null&&d.unshift(nl(r,g,p)),g=q(r,s),g!=null&&d.push(nl(r,g,p))),r=r.return}return d}function Jo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function d0(r,s,a,d,p){for(var g=s._reactName,_=[];a!==null&&a!==d;){var N=a,j=N.alternate,J=N.stateNode;if(j!==null&&j===d)break;N.tag===5&&J!==null&&(N=J,p?(j=q(a,g),j!=null&&_.unshift(nl(a,j,N))):p||(j=q(a,g),j!=null&&_.push(nl(a,j,N)))),a=a.return}_.length!==0&&r.push({event:s,listeners:_})}var mE=/\r\n?/g,gE=/\u0000|\uFFFD/g;function h0(r){return(typeof r=="string"?r:""+r).replace(mE,`
`).replace(gE,"")}function Nu(r,s,a){if(s=h0(s),h0(r)!==s&&a)throw Error(n(425))}function Du(){}var Vh=null,Fh=null;function Uh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var zh=typeof setTimeout=="function"?setTimeout:void 0,yE=typeof clearTimeout=="function"?clearTimeout:void 0,f0=typeof Promise=="function"?Promise:void 0,vE=typeof queueMicrotask=="function"?queueMicrotask:typeof f0<"u"?function(r){return f0.resolve(null).then(r).catch(xE)}:zh;function xE(r){setTimeout(function(){throw r})}function $h(r,s){var a=s,d=0;do{var p=a.nextSibling;if(r.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(d===0){r.removeChild(p),Ir(s);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=p}while(a);Ir(s)}function us(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function p0(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),ti="__reactFiber$"+Zo,rl="__reactProps$"+Zo,Ci="__reactContainer$"+Zo,Bh="__reactEvents$"+Zo,wE="__reactListeners$"+Zo,_E="__reactHandles$"+Zo;function Qs(r){var s=r[ti];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ci]||a[ti]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=p0(r);r!==null;){if(a=r[ti])return a;r=p0(r)}return s}r=a,a=r.parentNode}return null}function il(r){return r=r[ti]||r[Ci],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ea(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(n(33))}function Ou(r){return r[rl]||null}var Hh=[],ta=-1;function cs(r){return{current:r}}function xt(r){0>ta||(r.current=Hh[ta],Hh[ta]=null,ta--)}function mt(r,s){ta++,Hh[ta]=r.current,r.current=s}var ds={},dn=cs(ds),kn=cs(!1),Ys=ds;function na(r,s){var a=r.type.contextTypes;if(!a)return ds;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in a)p[g]=s[g];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=p),p}function Pn(r){return r=r.childContextTypes,r!=null}function Lu(){xt(kn),xt(dn)}function m0(r,s,a){if(dn.current!==ds)throw Error(n(168));mt(dn,s),mt(kn,a)}function g0(r,s,a){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var p in d)if(!(p in s))throw Error(n(108,Ke(r)||"Unknown",p));return ce({},a,d)}function ju(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ds,Ys=dn.current,mt(dn,r),mt(kn,kn.current),!0}function y0(r,s,a){var d=r.stateNode;if(!d)throw Error(n(169));a?(r=g0(r,s,Ys),d.__reactInternalMemoizedMergedChildContext=r,xt(kn),xt(dn),mt(dn,r)):xt(kn),mt(kn,a)}var Ri=null,Mu=!1,Wh=!1;function v0(r){Ri===null?Ri=[r]:Ri.push(r)}function EE(r){Mu=!0,v0(r)}function hs(){if(!Wh&&Ri!==null){Wh=!0;var r=0,s=et;try{var a=Ri;for(et=1;r<a.length;r++){var d=a[r];do d=d(!0);while(d!==null)}Ri=null,Mu=!1}catch(p){throw Ri!==null&&(Ri=Ri.slice(r+1)),Sn(En,hs),p}finally{et=s,Wh=!1}}return null}var ra=[],ia=0,Vu=null,Fu=0,sr=[],or=0,Xs=null,ki=1,Pi="";function Js(r,s){ra[ia++]=Fu,ra[ia++]=Vu,Vu=r,Fu=s}function x0(r,s,a){sr[or++]=ki,sr[or++]=Pi,sr[or++]=Xs,Xs=r;var d=ki;r=Pi;var p=32-St(d)-1;d&=~(1<<p),a+=1;var g=32-St(s)+p;if(30<g){var _=p-p%5;g=(d&(1<<_)-1).toString(32),d>>=_,p-=_,ki=1<<32-St(s)+p|a<<p|d,Pi=g+r}else ki=1<<g|a<<p|d,Pi=r}function Kh(r){r.return!==null&&(Js(r,1),x0(r,1,0))}function Gh(r){for(;r===Vu;)Vu=ra[--ia],ra[ia]=null,Fu=ra[--ia],ra[ia]=null;for(;r===Xs;)Xs=sr[--or],sr[or]=null,Pi=sr[--or],sr[or]=null,ki=sr[--or],sr[or]=null}var Hn=null,Wn=null,Et=!1,Cr=null;function w0(r,s){var a=cr(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function _0(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,Hn=r,Wn=us(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,Hn=r,Wn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Xs!==null?{id:ki,overflow:Pi}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=cr(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,Hn=r,Wn=null,!0):!1;default:return!1}}function qh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Qh(r){if(Et){var s=Wn;if(s){var a=s;if(!_0(r,s)){if(qh(r))throw Error(n(418));s=us(a.nextSibling);var d=Hn;s&&_0(r,s)?w0(d,a):(r.flags=r.flags&-4097|2,Et=!1,Hn=r)}}else{if(qh(r))throw Error(n(418));r.flags=r.flags&-4097|2,Et=!1,Hn=r}}}function E0(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Hn=r}function Uu(r){if(r!==Hn)return!1;if(!Et)return E0(r),Et=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Uh(r.type,r.memoizedProps)),s&&(s=Wn)){if(qh(r))throw b0(),Error(n(418));for(;s;)w0(r,s),s=us(s.nextSibling)}if(E0(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){Wn=us(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}Wn=null}}else Wn=Hn?us(r.stateNode.nextSibling):null;return!0}function b0(){for(var r=Wn;r;)r=us(r.nextSibling)}function sa(){Wn=Hn=null,Et=!1}function Yh(r){Cr===null?Cr=[r]:Cr.push(r)}var bE=X.ReactCurrentBatchConfig;function sl(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var d=a.stateNode}if(!d)throw Error(n(147,r));var p=d,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(_){var N=p.refs;_===null?delete N[g]:N[g]=_},s._stringRef=g,s)}if(typeof r!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,r))}return r}function zu(r,s){throw r=Object.prototype.toString.call(s),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function I0(r){var s=r._init;return s(r._payload)}function T0(r){function s(G,F){if(r){var Q=G.deletions;Q===null?(G.deletions=[F],G.flags|=16):Q.push(F)}}function a(G,F){if(!r)return null;for(;F!==null;)s(G,F),F=F.sibling;return null}function d(G,F){for(G=new Map;F!==null;)F.key!==null?G.set(F.key,F):G.set(F.index,F),F=F.sibling;return G}function p(G,F){return G=ws(G,F),G.index=0,G.sibling=null,G}function g(G,F,Q){return G.index=Q,r?(Q=G.alternate,Q!==null?(Q=Q.index,Q<F?(G.flags|=2,F):Q):(G.flags|=2,F)):(G.flags|=1048576,F)}function _(G){return r&&G.alternate===null&&(G.flags|=2),G}function N(G,F,Q,de){return F===null||F.tag!==6?(F=$f(Q,G.mode,de),F.return=G,F):(F=p(F,Q),F.return=G,F)}function j(G,F,Q,de){var Te=Q.type;return Te===C?se(G,F,Q.props.children,de,Q.key):F!==null&&(F.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===Ae&&I0(Te)===F.type)?(de=p(F,Q.props),de.ref=sl(G,F,Q),de.return=G,de):(de=dc(Q.type,Q.key,Q.props,null,G.mode,de),de.ref=sl(G,F,Q),de.return=G,de)}function J(G,F,Q,de){return F===null||F.tag!==4||F.stateNode.containerInfo!==Q.containerInfo||F.stateNode.implementation!==Q.implementation?(F=Bf(Q,G.mode,de),F.return=G,F):(F=p(F,Q.children||[]),F.return=G,F)}function se(G,F,Q,de,Te){return F===null||F.tag!==7?(F=oo(Q,G.mode,de,Te),F.return=G,F):(F=p(F,Q),F.return=G,F)}function ae(G,F,Q){if(typeof F=="string"&&F!==""||typeof F=="number")return F=$f(""+F,G.mode,Q),F.return=G,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ne:return Q=dc(F.type,F.key,F.props,null,G.mode,Q),Q.ref=sl(G,null,F),Q.return=G,Q;case D:return F=Bf(F,G.mode,Q),F.return=G,F;case Ae:var de=F._init;return ae(G,de(F._payload),Q)}if(vr(F)||pe(F))return F=oo(F,G.mode,Q,null),F.return=G,F;zu(G,F)}return null}function ie(G,F,Q,de){var Te=F!==null?F.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Te!==null?null:N(G,F,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case ne:return Q.key===Te?j(G,F,Q,de):null;case D:return Q.key===Te?J(G,F,Q,de):null;case Ae:return Te=Q._init,ie(G,F,Te(Q._payload),de)}if(vr(Q)||pe(Q))return Te!==null?null:se(G,F,Q,de,null);zu(G,Q)}return null}function ye(G,F,Q,de,Te){if(typeof de=="string"&&de!==""||typeof de=="number")return G=G.get(Q)||null,N(F,G,""+de,Te);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case ne:return G=G.get(de.key===null?Q:de.key)||null,j(F,G,de,Te);case D:return G=G.get(de.key===null?Q:de.key)||null,J(F,G,de,Te);case Ae:var Re=de._init;return ye(G,F,Q,Re(de._payload),Te)}if(vr(de)||pe(de))return G=G.get(Q)||null,se(F,G,de,Te,null);zu(F,de)}return null}function we(G,F,Q,de){for(var Te=null,Re=null,ke=F,je=F=0,Kt=null;ke!==null&&je<Q.length;je++){ke.index>je?(Kt=ke,ke=null):Kt=ke.sibling;var at=ie(G,ke,Q[je],de);if(at===null){ke===null&&(ke=Kt);break}r&&ke&&at.alternate===null&&s(G,ke),F=g(at,F,je),Re===null?Te=at:Re.sibling=at,Re=at,ke=Kt}if(je===Q.length)return a(G,ke),Et&&Js(G,je),Te;if(ke===null){for(;je<Q.length;je++)ke=ae(G,Q[je],de),ke!==null&&(F=g(ke,F,je),Re===null?Te=ke:Re.sibling=ke,Re=ke);return Et&&Js(G,je),Te}for(ke=d(G,ke);je<Q.length;je++)Kt=ye(ke,G,je,Q[je],de),Kt!==null&&(r&&Kt.alternate!==null&&ke.delete(Kt.key===null?je:Kt.key),F=g(Kt,F,je),Re===null?Te=Kt:Re.sibling=Kt,Re=Kt);return r&&ke.forEach(function(_s){return s(G,_s)}),Et&&Js(G,je),Te}function Ee(G,F,Q,de){var Te=pe(Q);if(typeof Te!="function")throw Error(n(150));if(Q=Te.call(Q),Q==null)throw Error(n(151));for(var Re=Te=null,ke=F,je=F=0,Kt=null,at=Q.next();ke!==null&&!at.done;je++,at=Q.next()){ke.index>je?(Kt=ke,ke=null):Kt=ke.sibling;var _s=ie(G,ke,at.value,de);if(_s===null){ke===null&&(ke=Kt);break}r&&ke&&_s.alternate===null&&s(G,ke),F=g(_s,F,je),Re===null?Te=_s:Re.sibling=_s,Re=_s,ke=Kt}if(at.done)return a(G,ke),Et&&Js(G,je),Te;if(ke===null){for(;!at.done;je++,at=Q.next())at=ae(G,at.value,de),at!==null&&(F=g(at,F,je),Re===null?Te=at:Re.sibling=at,Re=at);return Et&&Js(G,je),Te}for(ke=d(G,ke);!at.done;je++,at=Q.next())at=ye(ke,G,je,at.value,de),at!==null&&(r&&at.alternate!==null&&ke.delete(at.key===null?je:at.key),F=g(at,F,je),Re===null?Te=at:Re.sibling=at,Re=at);return r&&ke.forEach(function(n4){return s(G,n4)}),Et&&Js(G,je),Te}function Pt(G,F,Q,de){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case ne:e:{for(var Te=Q.key,Re=F;Re!==null;){if(Re.key===Te){if(Te=Q.type,Te===C){if(Re.tag===7){a(G,Re.sibling),F=p(Re,Q.props.children),F.return=G,G=F;break e}}else if(Re.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===Ae&&I0(Te)===Re.type){a(G,Re.sibling),F=p(Re,Q.props),F.ref=sl(G,Re,Q),F.return=G,G=F;break e}a(G,Re);break}else s(G,Re);Re=Re.sibling}Q.type===C?(F=oo(Q.props.children,G.mode,de,Q.key),F.return=G,G=F):(de=dc(Q.type,Q.key,Q.props,null,G.mode,de),de.ref=sl(G,F,Q),de.return=G,G=de)}return _(G);case D:e:{for(Re=Q.key;F!==null;){if(F.key===Re)if(F.tag===4&&F.stateNode.containerInfo===Q.containerInfo&&F.stateNode.implementation===Q.implementation){a(G,F.sibling),F=p(F,Q.children||[]),F.return=G,G=F;break e}else{a(G,F);break}else s(G,F);F=F.sibling}F=Bf(Q,G.mode,de),F.return=G,G=F}return _(G);case Ae:return Re=Q._init,Pt(G,F,Re(Q._payload),de)}if(vr(Q))return we(G,F,Q,de);if(pe(Q))return Ee(G,F,Q,de);zu(G,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,F!==null&&F.tag===6?(a(G,F.sibling),F=p(F,Q),F.return=G,G=F):(a(G,F),F=$f(Q,G.mode,de),F.return=G,G=F),_(G)):a(G,F)}return Pt}var oa=T0(!0),S0=T0(!1),$u=cs(null),Bu=null,aa=null,Xh=null;function Jh(){Xh=aa=Bu=null}function Zh(r){var s=$u.current;xt($u),r._currentValue=s}function ef(r,s,a){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===a)break;r=r.return}}function la(r,s){Bu=r,Xh=aa=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(An=!0),r.firstContext=null)}function ar(r){var s=r._currentValue;if(Xh!==r)if(r={context:r,memoizedValue:s,next:null},aa===null){if(Bu===null)throw Error(n(308));aa=r,Bu.dependencies={lanes:0,firstContext:r}}else aa=aa.next=r;return s}var Zs=null;function tf(r){Zs===null?Zs=[r]:Zs.push(r)}function C0(r,s,a,d){var p=s.interleaved;return p===null?(a.next=a,tf(s)):(a.next=p.next,p.next=a),s.interleaved=a,Ai(r,d)}function Ai(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var fs=!1;function nf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R0(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ni(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ps(r,s,a){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(it&2)!==0){var p=d.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),d.pending=s,Ai(r,a)}return p=d.interleaved,p===null?(s.next=s,tf(d)):(s.next=p.next,p.next=s),d.interleaved=s,Ai(r,a)}function Hu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,rs(r,a)}}function k0(r,s){var a=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var p=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?p=g=_:g=g.next=_,a=a.next}while(a!==null);g===null?p=g=s:g=g.next=s}else p=g=s;a={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:d.shared,effects:d.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Wu(r,s,a,d){var p=r.updateQueue;fs=!1;var g=p.firstBaseUpdate,_=p.lastBaseUpdate,N=p.shared.pending;if(N!==null){p.shared.pending=null;var j=N,J=j.next;j.next=null,_===null?g=J:_.next=J,_=j;var se=r.alternate;se!==null&&(se=se.updateQueue,N=se.lastBaseUpdate,N!==_&&(N===null?se.firstBaseUpdate=J:N.next=J,se.lastBaseUpdate=j))}if(g!==null){var ae=p.baseState;_=0,se=J=j=null,N=g;do{var ie=N.lane,ye=N.eventTime;if((d&ie)===ie){se!==null&&(se=se.next={eventTime:ye,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var we=r,Ee=N;switch(ie=s,ye=a,Ee.tag){case 1:if(we=Ee.payload,typeof we=="function"){ae=we.call(ye,ae,ie);break e}ae=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=Ee.payload,ie=typeof we=="function"?we.call(ye,ae,ie):we,ie==null)break e;ae=ce({},ae,ie);break e;case 2:fs=!0}}N.callback!==null&&N.lane!==0&&(r.flags|=64,ie=p.effects,ie===null?p.effects=[N]:ie.push(N))}else ye={eventTime:ye,lane:ie,tag:N.tag,payload:N.payload,callback:N.callback,next:null},se===null?(J=se=ye,j=ae):se=se.next=ye,_|=ie;if(N=N.next,N===null){if(N=p.shared.pending,N===null)break;ie=N,N=ie.next,ie.next=null,p.lastBaseUpdate=ie,p.shared.pending=null}}while(!0);if(se===null&&(j=ae),p.baseState=j,p.firstBaseUpdate=J,p.lastBaseUpdate=se,s=p.shared.interleaved,s!==null){p=s;do _|=p.lane,p=p.next;while(p!==s)}else g===null&&(p.shared.lanes=0);no|=_,r.lanes=_,r.memoizedState=ae}}function P0(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],p=d.callback;if(p!==null){if(d.callback=null,d=a,typeof p!="function")throw Error(n(191,p));p.call(d)}}}var ol={},ni=cs(ol),al=cs(ol),ll=cs(ol);function eo(r){if(r===ol)throw Error(n(174));return r}function rf(r,s){switch(mt(ll,s),mt(al,r),mt(ni,ol),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ut(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ut(s,r)}xt(ni),mt(ni,s)}function ua(){xt(ni),xt(al),xt(ll)}function A0(r){eo(ll.current);var s=eo(ni.current),a=ut(s,r.type);s!==a&&(mt(al,r),mt(ni,a))}function sf(r){al.current===r&&(xt(ni),xt(al))}var It=cs(0);function Ku(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var of=[];function af(){for(var r=0;r<of.length;r++)of[r]._workInProgressVersionPrimary=null;of.length=0}var Gu=X.ReactCurrentDispatcher,lf=X.ReactCurrentBatchConfig,to=0,Tt=null,Vt=null,Ht=null,qu=!1,ul=!1,cl=0,IE=0;function hn(){throw Error(n(321))}function uf(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Sr(r[a],s[a]))return!1;return!0}function cf(r,s,a,d,p,g){if(to=g,Tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Gu.current=r===null||r.memoizedState===null?RE:kE,r=a(d,p),ul){g=0;do{if(ul=!1,cl=0,25<=g)throw Error(n(301));g+=1,Ht=Vt=null,s.updateQueue=null,Gu.current=PE,r=a(d,p)}while(ul)}if(Gu.current=Xu,s=Vt!==null&&Vt.next!==null,to=0,Ht=Vt=Tt=null,qu=!1,s)throw Error(n(300));return r}function df(){var r=cl!==0;return cl=0,r}function ri(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Tt.memoizedState=Ht=r:Ht=Ht.next=r,Ht}function lr(){if(Vt===null){var r=Tt.alternate;r=r!==null?r.memoizedState:null}else r=Vt.next;var s=Ht===null?Tt.memoizedState:Ht.next;if(s!==null)Ht=s,Vt=r;else{if(r===null)throw Error(n(310));Vt=r,r={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Ht===null?Tt.memoizedState=Ht=r:Ht=Ht.next=r}return Ht}function dl(r,s){return typeof s=="function"?s(r):s}function hf(r){var s=lr(),a=s.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var d=Vt,p=d.baseQueue,g=a.pending;if(g!==null){if(p!==null){var _=p.next;p.next=g.next,g.next=_}d.baseQueue=p=g,a.pending=null}if(p!==null){g=p.next,d=d.baseState;var N=_=null,j=null,J=g;do{var se=J.lane;if((to&se)===se)j!==null&&(j=j.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),d=J.hasEagerState?J.eagerState:r(d,J.action);else{var ae={lane:se,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};j===null?(N=j=ae,_=d):j=j.next=ae,Tt.lanes|=se,no|=se}J=J.next}while(J!==null&&J!==g);j===null?_=d:j.next=N,Sr(d,s.memoizedState)||(An=!0),s.memoizedState=d,s.baseState=_,s.baseQueue=j,a.lastRenderedState=d}if(r=a.interleaved,r!==null){p=r;do g=p.lane,Tt.lanes|=g,no|=g,p=p.next;while(p!==r)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function ff(r){var s=lr(),a=s.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var d=a.dispatch,p=a.pending,g=s.memoizedState;if(p!==null){a.pending=null;var _=p=p.next;do g=r(g,_.action),_=_.next;while(_!==p);Sr(g,s.memoizedState)||(An=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,d]}function N0(){}function D0(r,s){var a=Tt,d=lr(),p=s(),g=!Sr(d.memoizedState,p);if(g&&(d.memoizedState=p,An=!0),d=d.queue,pf(j0.bind(null,a,d,r),[r]),d.getSnapshot!==s||g||Ht!==null&&Ht.memoizedState.tag&1){if(a.flags|=2048,hl(9,L0.bind(null,a,d,p,s),void 0,null),Wt===null)throw Error(n(349));(to&30)!==0||O0(a,s,p)}return p}function O0(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Tt.updateQueue,s===null?(s={lastEffect:null,stores:null},Tt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function L0(r,s,a,d){s.value=a,s.getSnapshot=d,M0(s)&&V0(r)}function j0(r,s,a){return a(function(){M0(s)&&V0(r)})}function M0(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Sr(r,a)}catch{return!0}}function V0(r){var s=Ai(r,1);s!==null&&Ar(s,r,1,-1)}function F0(r){var s=ri();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:r},s.queue=r,r=r.dispatch=CE.bind(null,Tt,r),[s.memoizedState,r]}function hl(r,s,a,d){return r={tag:r,create:s,destroy:a,deps:d,next:null},s=Tt.updateQueue,s===null?(s={lastEffect:null,stores:null},Tt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(d=a.next,a.next=r,r.next=d,s.lastEffect=r)),r}function U0(){return lr().memoizedState}function Qu(r,s,a,d){var p=ri();Tt.flags|=r,p.memoizedState=hl(1|s,a,void 0,d===void 0?null:d)}function Yu(r,s,a,d){var p=lr();d=d===void 0?null:d;var g=void 0;if(Vt!==null){var _=Vt.memoizedState;if(g=_.destroy,d!==null&&uf(d,_.deps)){p.memoizedState=hl(s,a,g,d);return}}Tt.flags|=r,p.memoizedState=hl(1|s,a,g,d)}function z0(r,s){return Qu(8390656,8,r,s)}function pf(r,s){return Yu(2048,8,r,s)}function $0(r,s){return Yu(4,2,r,s)}function B0(r,s){return Yu(4,4,r,s)}function H0(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function W0(r,s,a){return a=a!=null?a.concat([r]):null,Yu(4,4,H0.bind(null,s,r),a)}function mf(){}function K0(r,s){var a=lr();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&uf(s,d[1])?d[0]:(a.memoizedState=[r,s],r)}function G0(r,s){var a=lr();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&uf(s,d[1])?d[0]:(r=r(),a.memoizedState=[r,s],r)}function q0(r,s,a){return(to&21)===0?(r.baseState&&(r.baseState=!1,An=!0),r.memoizedState=a):(Sr(a,s)||(a=Hs(),Tt.lanes|=a,no|=a,r.baseState=!0),s)}function TE(r,s){var a=et;et=a!==0&&4>a?a:4,r(!0);var d=lf.transition;lf.transition={};try{r(!1),s()}finally{et=a,lf.transition=d}}function Q0(){return lr().memoizedState}function SE(r,s,a){var d=vs(r);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},Y0(r))X0(s,a);else if(a=C0(r,s,a,d),a!==null){var p=Tn();Ar(a,r,d,p),J0(a,s,d)}}function CE(r,s,a){var d=vs(r),p={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(Y0(r))X0(s,p);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var _=s.lastRenderedState,N=g(_,a);if(p.hasEagerState=!0,p.eagerState=N,Sr(N,_)){var j=s.interleaved;j===null?(p.next=p,tf(s)):(p.next=j.next,j.next=p),s.interleaved=p;return}}catch{}finally{}a=C0(r,s,p,d),a!==null&&(p=Tn(),Ar(a,r,d,p),J0(a,s,d))}}function Y0(r){var s=r.alternate;return r===Tt||s!==null&&s===Tt}function X0(r,s){ul=qu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function J0(r,s,a){if((a&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,rs(r,a)}}var Xu={readContext:ar,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},RE={readContext:ar,useCallback:function(r,s){return ri().memoizedState=[r,s===void 0?null:s],r},useContext:ar,useEffect:z0,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Qu(4194308,4,H0.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Qu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Qu(4,2,r,s)},useMemo:function(r,s){var a=ri();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var d=ri();return s=a!==void 0?a(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=SE.bind(null,Tt,r),[d.memoizedState,r]},useRef:function(r){var s=ri();return r={current:r},s.memoizedState=r},useState:F0,useDebugValue:mf,useDeferredValue:function(r){return ri().memoizedState=r},useTransition:function(){var r=F0(!1),s=r[0];return r=TE.bind(null,r[1]),ri().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var d=Tt,p=ri();if(Et){if(a===void 0)throw Error(n(407));a=a()}else{if(a=s(),Wt===null)throw Error(n(349));(to&30)!==0||O0(d,s,a)}p.memoizedState=a;var g={value:a,getSnapshot:s};return p.queue=g,z0(j0.bind(null,d,g,r),[r]),d.flags|=2048,hl(9,L0.bind(null,d,g,a,s),void 0,null),a},useId:function(){var r=ri(),s=Wt.identifierPrefix;if(Et){var a=Pi,d=ki;a=(d&~(1<<32-St(d)-1)).toString(32)+a,s=":"+s+"R"+a,a=cl++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=IE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},kE={readContext:ar,useCallback:K0,useContext:ar,useEffect:pf,useImperativeHandle:W0,useInsertionEffect:$0,useLayoutEffect:B0,useMemo:G0,useReducer:hf,useRef:U0,useState:function(){return hf(dl)},useDebugValue:mf,useDeferredValue:function(r){var s=lr();return q0(s,Vt.memoizedState,r)},useTransition:function(){var r=hf(dl)[0],s=lr().memoizedState;return[r,s]},useMutableSource:N0,useSyncExternalStore:D0,useId:Q0,unstable_isNewReconciler:!1},PE={readContext:ar,useCallback:K0,useContext:ar,useEffect:pf,useImperativeHandle:W0,useInsertionEffect:$0,useLayoutEffect:B0,useMemo:G0,useReducer:ff,useRef:U0,useState:function(){return ff(dl)},useDebugValue:mf,useDeferredValue:function(r){var s=lr();return Vt===null?s.memoizedState=r:q0(s,Vt.memoizedState,r)},useTransition:function(){var r=ff(dl)[0],s=lr().memoizedState;return[r,s]},useMutableSource:N0,useSyncExternalStore:D0,useId:Q0,unstable_isNewReconciler:!1};function Rr(r,s){if(r&&r.defaultProps){s=ce({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function gf(r,s,a,d){s=r.memoizedState,a=a(d,s),a=a==null?s:ce({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Ju={isMounted:function(r){return(r=r._reactInternals)?qe(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var d=Tn(),p=vs(r),g=Ni(d,p);g.payload=s,a!=null&&(g.callback=a),s=ps(r,g,p),s!==null&&(Ar(s,r,p,d),Hu(s,r,p))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var d=Tn(),p=vs(r),g=Ni(d,p);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ps(r,g,p),s!==null&&(Ar(s,r,p,d),Hu(s,r,p))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Tn(),d=vs(r),p=Ni(a,d);p.tag=2,s!=null&&(p.callback=s),s=ps(r,p,d),s!==null&&(Ar(s,r,d,a),Hu(s,r,d))}};function Z0(r,s,a,d,p,g,_){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,g,_):s.prototype&&s.prototype.isPureReactComponent?!Ja(a,d)||!Ja(p,g):!0}function ey(r,s,a){var d=!1,p=ds,g=s.contextType;return typeof g=="object"&&g!==null?g=ar(g):(p=Pn(s)?Ys:dn.current,d=s.contextTypes,g=(d=d!=null)?na(r,p):ds),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ju,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=p,r.__reactInternalMemoizedMaskedChildContext=g),s}function ty(r,s,a,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,d),s.state!==r&&Ju.enqueueReplaceState(s,s.state,null)}function yf(r,s,a,d){var p=r.stateNode;p.props=a,p.state=r.memoizedState,p.refs={},nf(r);var g=s.contextType;typeof g=="object"&&g!==null?p.context=ar(g):(g=Pn(s)?Ys:dn.current,p.context=na(r,g)),p.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(gf(r,s,g,a),p.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Ju.enqueueReplaceState(p,p.state,null),Wu(r,a,p,d),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308)}function ca(r,s){try{var a="",d=s;do a+=Ne(d),d=d.return;while(d);var p=a}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:p,digest:null}}function vf(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function xf(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var AE=typeof WeakMap=="function"?WeakMap:Map;function ny(r,s,a){a=Ni(-1,a),a.tag=3,a.payload={element:null};var d=s.value;return a.callback=function(){sc||(sc=!0,Of=d),xf(r,s)},a}function ry(r,s,a){a=Ni(-1,a),a.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;a.payload=function(){return d(p)},a.callback=function(){xf(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){xf(r,s),typeof d!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var _=s.stack;this.componentDidCatch(s.value,{componentStack:_!==null?_:""})}),a}function iy(r,s,a){var d=r.pingCache;if(d===null){d=r.pingCache=new AE;var p=new Set;d.set(s,p)}else p=d.get(s),p===void 0&&(p=new Set,d.set(s,p));p.has(a)||(p.add(a),r=WE.bind(null,r,s,a),s.then(r,r))}function sy(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function oy(r,s,a,d,p){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Ni(-1,1),s.tag=2,ps(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=p,r)}var NE=X.ReactCurrentOwner,An=!1;function In(r,s,a,d){s.child=r===null?S0(s,null,a,d):oa(s,r.child,a,d)}function ay(r,s,a,d,p){a=a.render;var g=s.ref;return la(s,p),d=cf(r,s,a,d,g,p),a=df(),r!==null&&!An?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,Di(r,s,p)):(Et&&a&&Kh(s),s.flags|=1,In(r,s,d,p),s.child)}function ly(r,s,a,d,p){if(r===null){var g=a.type;return typeof g=="function"&&!zf(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,uy(r,s,g,d,p)):(r=dc(a.type,null,d,s,s.mode,p),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&p)===0){var _=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ja,a(_,d)&&r.ref===s.ref)return Di(r,s,p)}return s.flags|=1,r=ws(g,d),r.ref=s.ref,r.return=s,s.child=r}function uy(r,s,a,d,p){if(r!==null){var g=r.memoizedProps;if(Ja(g,d)&&r.ref===s.ref)if(An=!1,s.pendingProps=d=g,(r.lanes&p)!==0)(r.flags&131072)!==0&&(An=!0);else return s.lanes=r.lanes,Di(r,s,p)}return wf(r,s,a,d,p)}function cy(r,s,a){var d=s.pendingProps,p=d.children,g=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(ha,Kn),Kn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,mt(ha,Kn),Kn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=g!==null?g.baseLanes:a,mt(ha,Kn),Kn|=d}else g!==null?(d=g.baseLanes|a,s.memoizedState=null):d=a,mt(ha,Kn),Kn|=d;return In(r,s,p,a),s.child}function dy(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function wf(r,s,a,d,p){var g=Pn(a)?Ys:dn.current;return g=na(s,g),la(s,p),a=cf(r,s,a,d,g,p),d=df(),r!==null&&!An?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,Di(r,s,p)):(Et&&d&&Kh(s),s.flags|=1,In(r,s,a,p),s.child)}function hy(r,s,a,d,p){if(Pn(a)){var g=!0;ju(s)}else g=!1;if(la(s,p),s.stateNode===null)ec(r,s),ey(s,a,d),yf(s,a,d,p),d=!0;else if(r===null){var _=s.stateNode,N=s.memoizedProps;_.props=N;var j=_.context,J=a.contextType;typeof J=="object"&&J!==null?J=ar(J):(J=Pn(a)?Ys:dn.current,J=na(s,J));var se=a.getDerivedStateFromProps,ae=typeof se=="function"||typeof _.getSnapshotBeforeUpdate=="function";ae||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(N!==d||j!==J)&&ty(s,_,d,J),fs=!1;var ie=s.memoizedState;_.state=ie,Wu(s,d,_,p),j=s.memoizedState,N!==d||ie!==j||kn.current||fs?(typeof se=="function"&&(gf(s,a,se,d),j=s.memoizedState),(N=fs||Z0(s,a,N,d,ie,j,J))?(ae||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(s.flags|=4194308)):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=j),_.props=d,_.state=j,_.context=J,d=N):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{_=s.stateNode,R0(r,s),N=s.memoizedProps,J=s.type===s.elementType?N:Rr(s.type,N),_.props=J,ae=s.pendingProps,ie=_.context,j=a.contextType,typeof j=="object"&&j!==null?j=ar(j):(j=Pn(a)?Ys:dn.current,j=na(s,j));var ye=a.getDerivedStateFromProps;(se=typeof ye=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(N!==ae||ie!==j)&&ty(s,_,d,j),fs=!1,ie=s.memoizedState,_.state=ie,Wu(s,d,_,p);var we=s.memoizedState;N!==ae||ie!==we||kn.current||fs?(typeof ye=="function"&&(gf(s,a,ye,d),we=s.memoizedState),(J=fs||Z0(s,a,J,d,ie,we,j)||!1)?(se||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(d,we,j),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(d,we,j)),typeof _.componentDidUpdate=="function"&&(s.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof _.componentDidUpdate!="function"||N===r.memoizedProps&&ie===r.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||N===r.memoizedProps&&ie===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=we),_.props=d,_.state=we,_.context=j,d=J):(typeof _.componentDidUpdate!="function"||N===r.memoizedProps&&ie===r.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||N===r.memoizedProps&&ie===r.memoizedState||(s.flags|=1024),d=!1)}return _f(r,s,a,d,g,p)}function _f(r,s,a,d,p,g){dy(r,s);var _=(s.flags&128)!==0;if(!d&&!_)return p&&y0(s,a,!1),Di(r,s,g);d=s.stateNode,NE.current=s;var N=_&&typeof a.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&_?(s.child=oa(s,r.child,null,g),s.child=oa(s,null,N,g)):In(r,s,N,g),s.memoizedState=d.state,p&&y0(s,a,!0),s.child}function fy(r){var s=r.stateNode;s.pendingContext?m0(r,s.pendingContext,s.pendingContext!==s.context):s.context&&m0(r,s.context,!1),rf(r,s.containerInfo)}function py(r,s,a,d,p){return sa(),Yh(p),s.flags|=256,In(r,s,a,d),s.child}var Ef={dehydrated:null,treeContext:null,retryLane:0};function bf(r){return{baseLanes:r,cachePool:null,transitions:null}}function my(r,s,a){var d=s.pendingProps,p=It.current,g=!1,_=(s.flags&128)!==0,N;if((N=_)||(N=r!==null&&r.memoizedState===null?!1:(p&2)!==0),N?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(p|=1),mt(It,p&1),r===null)return Qh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(_=d.children,r=d.fallback,g?(d=s.mode,g=s.child,_={mode:"hidden",children:_},(d&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=_):g=hc(_,d,0,null),r=oo(r,d,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=bf(a),s.memoizedState=Ef,r):If(s,_));if(p=r.memoizedState,p!==null&&(N=p.dehydrated,N!==null))return DE(r,s,_,d,N,p,a);if(g){g=d.fallback,_=s.mode,p=r.child,N=p.sibling;var j={mode:"hidden",children:d.children};return(_&1)===0&&s.child!==p?(d=s.child,d.childLanes=0,d.pendingProps=j,s.deletions=null):(d=ws(p,j),d.subtreeFlags=p.subtreeFlags&14680064),N!==null?g=ws(N,g):(g=oo(g,_,a,null),g.flags|=2),g.return=s,d.return=s,d.sibling=g,s.child=d,d=g,g=s.child,_=r.child.memoizedState,_=_===null?bf(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},g.memoizedState=_,g.childLanes=r.childLanes&~a,s.memoizedState=Ef,d}return g=r.child,r=g.sibling,d=ws(g,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=a),d.return=s,d.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=d,s.memoizedState=null,d}function If(r,s){return s=hc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Zu(r,s,a,d){return d!==null&&Yh(d),oa(s,r.child,null,a),r=If(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function DE(r,s,a,d,p,g,_){if(a)return s.flags&256?(s.flags&=-257,d=vf(Error(n(422))),Zu(r,s,_,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=d.fallback,p=s.mode,d=hc({mode:"visible",children:d.children},p,0,null),g=oo(g,p,_,null),g.flags|=2,d.return=s,g.return=s,d.sibling=g,s.child=d,(s.mode&1)!==0&&oa(s,r.child,null,_),s.child.memoizedState=bf(_),s.memoizedState=Ef,g);if((s.mode&1)===0)return Zu(r,s,_,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var N=d.dgst;return d=N,g=Error(n(419)),d=vf(g,d,void 0),Zu(r,s,_,d)}if(N=(_&r.childLanes)!==0,An||N){if(d=Wt,d!==null){switch(_&-_){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|_))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,Ai(r,p),Ar(d,r,p,-1))}return Uf(),d=vf(Error(n(421))),Zu(r,s,_,d)}return p.data==="$?"?(s.flags|=128,s.child=r.child,s=KE.bind(null,r),p._reactRetry=s,null):(r=g.treeContext,Wn=us(p.nextSibling),Hn=s,Et=!0,Cr=null,r!==null&&(sr[or++]=ki,sr[or++]=Pi,sr[or++]=Xs,ki=r.id,Pi=r.overflow,Xs=s),s=If(s,d.children),s.flags|=4096,s)}function gy(r,s,a){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),ef(r.return,s,a)}function Tf(r,s,a,d,p){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:p}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=a,g.tailMode=p)}function yy(r,s,a){var d=s.pendingProps,p=d.revealOrder,g=d.tail;if(In(r,s,d.children,a),d=It.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&gy(r,a,s);else if(r.tag===19)gy(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(mt(It,d),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)r=a.alternate,r!==null&&Ku(r)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),Tf(s,!1,p,a,g);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(r=p.alternate,r!==null&&Ku(r)===null){s.child=p;break}r=p.sibling,p.sibling=a,a=p,p=r}Tf(s,!0,a,null,g);break;case"together":Tf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ec(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Di(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),no|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(n(153));if(s.child!==null){for(r=s.child,a=ws(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=ws(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function OE(r,s,a){switch(s.tag){case 3:fy(s),sa();break;case 5:A0(s);break;case 1:Pn(s.type)&&ju(s);break;case 4:rf(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,p=s.memoizedProps.value;mt($u,d._currentValue),d._currentValue=p;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(mt(It,It.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?my(r,s,a):(mt(It,It.current&1),r=Di(r,s,a),r!==null?r.sibling:null);mt(It,It.current&1);break;case 19:if(d=(a&s.childLanes)!==0,(r.flags&128)!==0){if(d)return yy(r,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),mt(It,It.current),d)break;return null;case 22:case 23:return s.lanes=0,cy(r,s,a)}return Di(r,s,a)}var vy,Sf,xy,wy;vy=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Sf=function(){},xy=function(r,s,a,d){var p=r.memoizedProps;if(p!==d){r=s.stateNode,eo(ni.current);var g=null;switch(a){case"input":p=xn(r,p),d=xn(r,d),g=[];break;case"select":p=ce({},p,{value:void 0}),d=ce({},d,{value:void 0}),g=[];break;case"textarea":p=Vn(r,p),d=Vn(r,d),g=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=Du)}Yi(a,d);var _;a=null;for(J in p)if(!d.hasOwnProperty(J)&&p.hasOwnProperty(J)&&p[J]!=null)if(J==="style"){var N=p[J];for(_ in N)N.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(o.hasOwnProperty(J)?g||(g=[]):(g=g||[]).push(J,null));for(J in d){var j=d[J];if(N=p!=null?p[J]:void 0,d.hasOwnProperty(J)&&j!==N&&(j!=null||N!=null))if(J==="style")if(N){for(_ in N)!N.hasOwnProperty(_)||j&&j.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in j)j.hasOwnProperty(_)&&N[_]!==j[_]&&(a||(a={}),a[_]=j[_])}else a||(g||(g=[]),g.push(J,a)),a=j;else J==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,N=N?N.__html:void 0,j!=null&&N!==j&&(g=g||[]).push(J,j)):J==="children"?typeof j!="string"&&typeof j!="number"||(g=g||[]).push(J,""+j):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(o.hasOwnProperty(J)?(j!=null&&J==="onScroll"&&vt("scroll",r),g||N===j||(g=[])):(g=g||[]).push(J,j))}a&&(g=g||[]).push("style",a);var J=g;(s.updateQueue=J)&&(s.flags|=4)}},wy=function(r,s,a,d){a!==d&&(s.flags|=4)};function fl(r,s){if(!Et)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function fn(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,d=0;if(s)for(var p=r.child;p!==null;)a|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=r,p=p.sibling;else for(p=r.child;p!==null;)a|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=r,p=p.sibling;return r.subtreeFlags|=d,r.childLanes=a,s}function LE(r,s,a){var d=s.pendingProps;switch(Gh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(s),null;case 1:return Pn(s.type)&&Lu(),fn(s),null;case 3:return d=s.stateNode,ua(),xt(kn),xt(dn),af(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(Uu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Cr!==null&&(Mf(Cr),Cr=null))),Sf(r,s),fn(s),null;case 5:sf(s);var p=eo(ll.current);if(a=s.type,r!==null&&s.stateNode!=null)xy(r,s,a,d,p),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(n(166));return fn(s),null}if(r=eo(ni.current),Uu(s)){d=s.stateNode,a=s.type;var g=s.memoizedProps;switch(d[ti]=s,d[rl]=g,r=(s.mode&1)!==0,a){case"dialog":vt("cancel",d),vt("close",d);break;case"iframe":case"object":case"embed":vt("load",d);break;case"video":case"audio":for(p=0;p<el.length;p++)vt(el[p],d);break;case"source":vt("error",d);break;case"img":case"image":case"link":vt("error",d),vt("load",d);break;case"details":vt("toggle",d);break;case"input":Wi(d,g),vt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!g.multiple},vt("invalid",d);break;case"textarea":Jn(d,g),vt("invalid",d)}Yi(a,g),p=null;for(var _ in g)if(g.hasOwnProperty(_)){var N=g[_];_==="children"?typeof N=="string"?d.textContent!==N&&(g.suppressHydrationWarning!==!0&&Nu(d.textContent,N,r),p=["children",N]):typeof N=="number"&&d.textContent!==""+N&&(g.suppressHydrationWarning!==!0&&Nu(d.textContent,N,r),p=["children",""+N]):o.hasOwnProperty(_)&&N!=null&&_==="onScroll"&&vt("scroll",d)}switch(a){case"input":kt(d),Oo(d,g,!0);break;case"textarea":kt(d),yi(d);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(d.onclick=Du)}d=p,s.updateQueue=d,d!==null&&(s.flags|=4)}else{_=p.nodeType===9?p:p.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=_.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=_.createElement(a,{is:d.is}):(r=_.createElement(a),a==="select"&&(_=r,d.multiple?_.multiple=!0:d.size&&(_.size=d.size))):r=_.createElementNS(r,a),r[ti]=s,r[rl]=d,vy(r,s,!1,!1),s.stateNode=r;e:{switch(_=Kr(a,d),a){case"dialog":vt("cancel",r),vt("close",r),p=d;break;case"iframe":case"object":case"embed":vt("load",r),p=d;break;case"video":case"audio":for(p=0;p<el.length;p++)vt(el[p],r);p=d;break;case"source":vt("error",r),p=d;break;case"img":case"image":case"link":vt("error",r),vt("load",r),p=d;break;case"details":vt("toggle",r),p=d;break;case"input":Wi(r,d),p=xn(r,d),vt("invalid",r);break;case"option":p=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},p=ce({},d,{value:void 0}),vt("invalid",r);break;case"textarea":Jn(r,d),p=Vn(r,d),vt("invalid",r);break;default:p=d}Yi(a,p),N=p;for(g in N)if(N.hasOwnProperty(g)){var j=N[g];g==="style"?Qi(r,j):g==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&vi(r,j)):g==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&Hr(r,j):typeof j=="number"&&Hr(r,""+j):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?j!=null&&g==="onScroll"&&vt("scroll",r):j!=null&&ee(r,g,j,_))}switch(a){case"input":kt(r),Oo(r,d,!1);break;case"textarea":kt(r),yi(r);break;case"option":d.value!=null&&r.setAttribute("value",""+He(d.value));break;case"select":r.multiple=!!d.multiple,g=d.value,g!=null?xr(r,!!d.multiple,g,!1):d.defaultValue!=null&&xr(r,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(r.onclick=Du)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return fn(s),null;case 6:if(r&&s.stateNode!=null)wy(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(n(166));if(a=eo(ll.current),eo(ni.current),Uu(s)){if(d=s.stateNode,a=s.memoizedProps,d[ti]=s,(g=d.nodeValue!==a)&&(r=Hn,r!==null))switch(r.tag){case 3:Nu(d.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Nu(d.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[ti]=s,s.stateNode=d}return fn(s),null;case 13:if(xt(It),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Et&&Wn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)b0(),sa(),s.flags|=98560,g=!1;else if(g=Uu(s),d!==null&&d.dehydrated!==null){if(r===null){if(!g)throw Error(n(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[ti]=s}else sa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;fn(s),g=!1}else Cr!==null&&(Mf(Cr),Cr=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(It.current&1)!==0?Ft===0&&(Ft=3):Uf())),s.updateQueue!==null&&(s.flags|=4),fn(s),null);case 4:return ua(),Sf(r,s),r===null&&tl(s.stateNode.containerInfo),fn(s),null;case 10:return Zh(s.type._context),fn(s),null;case 17:return Pn(s.type)&&Lu(),fn(s),null;case 19:if(xt(It),g=s.memoizedState,g===null)return fn(s),null;if(d=(s.flags&128)!==0,_=g.rendering,_===null)if(d)fl(g,!1);else{if(Ft!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(_=Ku(r),_!==null){for(s.flags|=128,fl(g,!1),d=_.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=a,a=s.child;a!==null;)g=a,r=d,g.flags&=14680066,_=g.alternate,_===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=_.childLanes,g.lanes=_.lanes,g.child=_.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=_.memoizedProps,g.memoizedState=_.memoizedState,g.updateQueue=_.updateQueue,g.type=_.type,r=_.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return mt(It,It.current&1|2),s.child}r=r.sibling}g.tail!==null&&ot()>fa&&(s.flags|=128,d=!0,fl(g,!1),s.lanes=4194304)}else{if(!d)if(r=Ku(_),r!==null){if(s.flags|=128,d=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),fl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!_.alternate&&!Et)return fn(s),null}else 2*ot()-g.renderingStartTime>fa&&a!==1073741824&&(s.flags|=128,d=!0,fl(g,!1),s.lanes=4194304);g.isBackwards?(_.sibling=s.child,s.child=_):(a=g.last,a!==null?a.sibling=_:s.child=_,g.last=_)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=ot(),s.sibling=null,a=It.current,mt(It,d?a&1|2:a&1),s):(fn(s),null);case 22:case 23:return Ff(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(Kn&1073741824)!==0&&(fn(s),s.subtreeFlags&6&&(s.flags|=8192)):fn(s),null;case 24:return null;case 25:return null}throw Error(n(156,s.tag))}function jE(r,s){switch(Gh(s),s.tag){case 1:return Pn(s.type)&&Lu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return ua(),xt(kn),xt(dn),af(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return sf(s),null;case 13:if(xt(It),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(n(340));sa()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return xt(It),null;case 4:return ua(),null;case 10:return Zh(s.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var tc=!1,pn=!1,ME=typeof WeakSet=="function"?WeakSet:Set,ve=null;function da(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){Ct(r,s,d)}else a.current=null}function Cf(r,s,a){try{a()}catch(d){Ct(r,s,d)}}var _y=!1;function VE(r,s){if(Vh=os,r=Zg(),Ph(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var p=d.anchorOffset,g=d.focusNode;d=d.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var _=0,N=-1,j=-1,J=0,se=0,ae=r,ie=null;t:for(;;){for(var ye;ae!==a||p!==0&&ae.nodeType!==3||(N=_+p),ae!==g||d!==0&&ae.nodeType!==3||(j=_+d),ae.nodeType===3&&(_+=ae.nodeValue.length),(ye=ae.firstChild)!==null;)ie=ae,ae=ye;for(;;){if(ae===r)break t;if(ie===a&&++J===p&&(N=_),ie===g&&++se===d&&(j=_),(ye=ae.nextSibling)!==null)break;ae=ie,ie=ae.parentNode}ae=ye}a=N===-1||j===-1?null:{start:N,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fh={focusedElem:r,selectionRange:a},os=!1,ve=s;ve!==null;)if(s=ve,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ve=r;else for(;ve!==null;){s=ve;try{var we=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(we!==null){var Ee=we.memoizedProps,Pt=we.memoizedState,G=s.stateNode,F=G.getSnapshotBeforeUpdate(s.elementType===s.type?Ee:Rr(s.type,Ee),Pt);G.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var Q=s.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(de){Ct(s,s.return,de)}if(r=s.sibling,r!==null){r.return=s.return,ve=r;break}ve=s.return}return we=_y,_y=!1,we}function pl(r,s,a){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&r)===r){var g=p.destroy;p.destroy=void 0,g!==void 0&&Cf(s,a,g)}p=p.next}while(p!==d)}}function nc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var d=a.create;a.destroy=d()}a=a.next}while(a!==s)}}function Rf(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Ey(r){var s=r.alternate;s!==null&&(r.alternate=null,Ey(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[ti],delete s[rl],delete s[Bh],delete s[wE],delete s[_E])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function by(r){return r.tag===5||r.tag===3||r.tag===4}function Iy(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||by(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function kf(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Du));else if(d!==4&&(r=r.child,r!==null))for(kf(r,s,a),r=r.sibling;r!==null;)kf(r,s,a),r=r.sibling}function Pf(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(Pf(r,s,a),r=r.sibling;r!==null;)Pf(r,s,a),r=r.sibling}var nn=null,kr=!1;function ms(r,s,a){for(a=a.child;a!==null;)Ty(r,s,a),a=a.sibling}function Ty(r,s,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(nr,a)}catch{}switch(a.tag){case 5:pn||da(a,s);case 6:var d=nn,p=kr;nn=null,ms(r,s,a),nn=d,kr=p,nn!==null&&(kr?(r=nn,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):nn.removeChild(a.stateNode));break;case 18:nn!==null&&(kr?(r=nn,a=a.stateNode,r.nodeType===8?$h(r.parentNode,a):r.nodeType===1&&$h(r,a),Ir(r)):$h(nn,a.stateNode));break;case 4:d=nn,p=kr,nn=a.stateNode.containerInfo,kr=!0,ms(r,s,a),nn=d,kr=p;break;case 0:case 11:case 14:case 15:if(!pn&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var g=p,_=g.destroy;g=g.tag,_!==void 0&&((g&2)!==0||(g&4)!==0)&&Cf(a,s,_),p=p.next}while(p!==d)}ms(r,s,a);break;case 1:if(!pn&&(da(a,s),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(N){Ct(a,s,N)}ms(r,s,a);break;case 21:ms(r,s,a);break;case 22:a.mode&1?(pn=(d=pn)||a.memoizedState!==null,ms(r,s,a),pn=d):ms(r,s,a);break;default:ms(r,s,a)}}function Sy(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new ME),s.forEach(function(d){var p=GE.bind(null,r,d);a.has(d)||(a.add(d),d.then(p,p))})}}function Pr(r,s){var a=s.deletions;if(a!==null)for(var d=0;d<a.length;d++){var p=a[d];try{var g=r,_=s,N=_;e:for(;N!==null;){switch(N.tag){case 5:nn=N.stateNode,kr=!1;break e;case 3:nn=N.stateNode.containerInfo,kr=!0;break e;case 4:nn=N.stateNode.containerInfo,kr=!0;break e}N=N.return}if(nn===null)throw Error(n(160));Ty(g,_,p),nn=null,kr=!1;var j=p.alternate;j!==null&&(j.return=null),p.return=null}catch(J){Ct(p,s,J)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Cy(s,r),s=s.sibling}function Cy(r,s){var a=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Pr(s,r),ii(r),d&4){try{pl(3,r,r.return),nc(3,r)}catch(Ee){Ct(r,r.return,Ee)}try{pl(5,r,r.return)}catch(Ee){Ct(r,r.return,Ee)}}break;case 1:Pr(s,r),ii(r),d&512&&a!==null&&da(a,a.return);break;case 5:if(Pr(s,r),ii(r),d&512&&a!==null&&da(a,a.return),r.flags&32){var p=r.stateNode;try{Hr(p,"")}catch(Ee){Ct(r,r.return,Ee)}}if(d&4&&(p=r.stateNode,p!=null)){var g=r.memoizedProps,_=a!==null?a.memoizedProps:g,N=r.type,j=r.updateQueue;if(r.updateQueue=null,j!==null)try{N==="input"&&g.type==="radio"&&g.name!=null&&Us(p,g),Kr(N,_);var J=Kr(N,g);for(_=0;_<j.length;_+=2){var se=j[_],ae=j[_+1];se==="style"?Qi(p,ae):se==="dangerouslySetInnerHTML"?vi(p,ae):se==="children"?Hr(p,ae):ee(p,se,ae,J)}switch(N){case"input":Ki(p,g);break;case"textarea":gi(p,g);break;case"select":var ie=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var ye=g.value;ye!=null?xr(p,!!g.multiple,ye,!1):ie!==!!g.multiple&&(g.defaultValue!=null?xr(p,!!g.multiple,g.defaultValue,!0):xr(p,!!g.multiple,g.multiple?[]:"",!1))}p[rl]=g}catch(Ee){Ct(r,r.return,Ee)}}break;case 6:if(Pr(s,r),ii(r),d&4){if(r.stateNode===null)throw Error(n(162));p=r.stateNode,g=r.memoizedProps;try{p.nodeValue=g}catch(Ee){Ct(r,r.return,Ee)}}break;case 3:if(Pr(s,r),ii(r),d&4&&a!==null&&a.memoizedState.isDehydrated)try{Ir(s.containerInfo)}catch(Ee){Ct(r,r.return,Ee)}break;case 4:Pr(s,r),ii(r);break;case 13:Pr(s,r),ii(r),p=r.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(Df=ot())),d&4&&Sy(r);break;case 22:if(se=a!==null&&a.memoizedState!==null,r.mode&1?(pn=(J=pn)||se,Pr(s,r),pn=J):Pr(s,r),ii(r),d&8192){if(J=r.memoizedState!==null,(r.stateNode.isHidden=J)&&!se&&(r.mode&1)!==0)for(ve=r,se=r.child;se!==null;){for(ae=ve=se;ve!==null;){switch(ie=ve,ye=ie.child,ie.tag){case 0:case 11:case 14:case 15:pl(4,ie,ie.return);break;case 1:da(ie,ie.return);var we=ie.stateNode;if(typeof we.componentWillUnmount=="function"){d=ie,a=ie.return;try{s=d,we.props=s.memoizedProps,we.state=s.memoizedState,we.componentWillUnmount()}catch(Ee){Ct(d,a,Ee)}}break;case 5:da(ie,ie.return);break;case 22:if(ie.memoizedState!==null){Py(ae);continue}}ye!==null?(ye.return=ie,ve=ye):Py(ae)}se=se.sibling}e:for(se=null,ae=r;;){if(ae.tag===5){if(se===null){se=ae;try{p=ae.stateNode,J?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(N=ae.stateNode,j=ae.memoizedProps.style,_=j!=null&&j.hasOwnProperty("display")?j.display:null,N.style.display=qi("display",_))}catch(Ee){Ct(r,r.return,Ee)}}}else if(ae.tag===6){if(se===null)try{ae.stateNode.nodeValue=J?"":ae.memoizedProps}catch(Ee){Ct(r,r.return,Ee)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===r)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===r)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===r)break e;se===ae&&(se=null),ae=ae.return}se===ae&&(se=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:Pr(s,r),ii(r),d&4&&Sy(r);break;case 21:break;default:Pr(s,r),ii(r)}}function ii(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(by(a)){var d=a;break e}a=a.return}throw Error(n(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(Hr(p,""),d.flags&=-33);var g=Iy(r);Pf(r,g,p);break;case 3:case 4:var _=d.stateNode.containerInfo,N=Iy(r);kf(r,N,_);break;default:throw Error(n(161))}}catch(j){Ct(r,r.return,j)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function FE(r,s,a){ve=r,Ry(r)}function Ry(r,s,a){for(var d=(r.mode&1)!==0;ve!==null;){var p=ve,g=p.child;if(p.tag===22&&d){var _=p.memoizedState!==null||tc;if(!_){var N=p.alternate,j=N!==null&&N.memoizedState!==null||pn;N=tc;var J=pn;if(tc=_,(pn=j)&&!J)for(ve=p;ve!==null;)_=ve,j=_.child,_.tag===22&&_.memoizedState!==null?Ay(p):j!==null?(j.return=_,ve=j):Ay(p);for(;g!==null;)ve=g,Ry(g),g=g.sibling;ve=p,tc=N,pn=J}ky(r)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,ve=g):ky(r)}}function ky(r){for(;ve!==null;){var s=ve;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:pn||nc(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!pn)if(a===null)d.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:Rr(s.type,a.memoizedProps);d.componentDidUpdate(p,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&P0(s,g,d);break;case 3:var _=s.updateQueue;if(_!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}P0(s,_,a)}break;case 5:var N=s.stateNode;if(a===null&&s.flags&4){a=N;var j=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var J=s.alternate;if(J!==null){var se=J.memoizedState;if(se!==null){var ae=se.dehydrated;ae!==null&&Ir(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||s.flags&512&&Rf(s)}catch(ie){Ct(s,s.return,ie)}}if(s===r){ve=null;break}if(a=s.sibling,a!==null){a.return=s.return,ve=a;break}ve=s.return}}function Py(r){for(;ve!==null;){var s=ve;if(s===r){ve=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ve=a;break}ve=s.return}}function Ay(r){for(;ve!==null;){var s=ve;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{nc(4,s)}catch(j){Ct(s,a,j)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var p=s.return;try{d.componentDidMount()}catch(j){Ct(s,p,j)}}var g=s.return;try{Rf(s)}catch(j){Ct(s,g,j)}break;case 5:var _=s.return;try{Rf(s)}catch(j){Ct(s,_,j)}}}catch(j){Ct(s,s.return,j)}if(s===r){ve=null;break}var N=s.sibling;if(N!==null){N.return=s.return,ve=N;break}ve=s.return}}var UE=Math.ceil,rc=X.ReactCurrentDispatcher,Af=X.ReactCurrentOwner,ur=X.ReactCurrentBatchConfig,it=0,Wt=null,Dt=null,rn=0,Kn=0,ha=cs(0),Ft=0,ml=null,no=0,ic=0,Nf=0,gl=null,Nn=null,Df=0,fa=1/0,Oi=null,sc=!1,Of=null,gs=null,oc=!1,ys=null,ac=0,yl=0,Lf=null,lc=-1,uc=0;function Tn(){return(it&6)!==0?ot():lc!==-1?lc:lc=ot()}function vs(r){return(r.mode&1)===0?1:(it&2)!==0&&rn!==0?rn&-rn:bE.transition!==null?(uc===0&&(uc=Hs()),uc):(r=et,r!==0||(r=window.event,r=r===void 0?16:Wa(r.type)),r)}function Ar(r,s,a,d){if(50<yl)throw yl=0,Lf=null,Error(n(185));ns(r,a,d),((it&2)===0||r!==Wt)&&(r===Wt&&((it&2)===0&&(ic|=a),Ft===4&&xs(r,rn)),Dn(r,d),a===1&&it===0&&(s.mode&1)===0&&(fa=ot()+500,Mu&&hs()))}function Dn(r,s){var a=r.callbackNode;Ei(r,s);var d=Bs(r,r===Wt?rn:0);if(d===0)a!==null&&wr(a),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(a!=null&&wr(a),s===1)r.tag===0?EE(Dy.bind(null,r)):v0(Dy.bind(null,r)),vE(function(){(it&6)===0&&hs()}),a=null;else{switch(is(d)){case 1:a=En;break;case 4:a=Fn;break;case 16:a=ze;break;case 536870912:a=Un;break;default:a=ze}a=zy(a,Ny.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Ny(r,s){if(lc=-1,uc=0,(it&6)!==0)throw Error(n(327));var a=r.callbackNode;if(pa()&&r.callbackNode!==a)return null;var d=Bs(r,r===Wt?rn:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=cc(r,d);else{s=d;var p=it;it|=2;var g=Ly();(Wt!==r||rn!==s)&&(Oi=null,fa=ot()+500,io(r,s));do try{BE();break}catch(N){Oy(r,N)}while(!0);Jh(),rc.current=g,it=p,Dt!==null?s=0:(Wt=null,rn=0,s=Ft)}if(s!==0){if(s===2&&(p=zn(r),p!==0&&(d=p,s=jf(r,p))),s===1)throw a=ml,io(r,0),xs(r,d),Dn(r,ot()),a;if(s===6)xs(r,d);else{if(p=r.current.alternate,(d&30)===0&&!zE(p)&&(s=cc(r,d),s===2&&(g=zn(r),g!==0&&(d=g,s=jf(r,g))),s===1))throw a=ml,io(r,0),xs(r,d),Dn(r,ot()),a;switch(r.finishedWork=p,r.finishedLanes=d,s){case 0:case 1:throw Error(n(345));case 2:so(r,Nn,Oi);break;case 3:if(xs(r,d),(d&130023424)===d&&(s=Df+500-ot(),10<s)){if(Bs(r,0)!==0)break;if(p=r.suspendedLanes,(p&d)!==d){Tn(),r.pingedLanes|=r.suspendedLanes&p;break}r.timeoutHandle=zh(so.bind(null,r,Nn,Oi),s);break}so(r,Nn,Oi);break;case 4:if(xs(r,d),(d&4194240)===d)break;for(s=r.eventTimes,p=-1;0<d;){var _=31-St(d);g=1<<_,_=s[_],_>p&&(p=_),d&=~g}if(d=p,d=ot()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*UE(d/1960))-d,10<d){r.timeoutHandle=zh(so.bind(null,r,Nn,Oi),d);break}so(r,Nn,Oi);break;case 5:so(r,Nn,Oi);break;default:throw Error(n(329))}}}return Dn(r,ot()),r.callbackNode===a?Ny.bind(null,r):null}function jf(r,s){var a=gl;return r.current.memoizedState.isDehydrated&&(io(r,s).flags|=256),r=cc(r,s),r!==2&&(s=Nn,Nn=a,s!==null&&Mf(s)),r}function Mf(r){Nn===null?Nn=r:Nn.push.apply(Nn,r)}function zE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var p=a[d],g=p.getSnapshot;p=p.value;try{if(!Sr(g(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function xs(r,s){for(s&=~Nf,s&=~ic,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-St(s),d=1<<a;r[a]=-1,s&=~d}}function Dy(r){if((it&6)!==0)throw Error(n(327));pa();var s=Bs(r,0);if((s&1)===0)return Dn(r,ot()),null;var a=cc(r,s);if(r.tag!==0&&a===2){var d=zn(r);d!==0&&(s=d,a=jf(r,d))}if(a===1)throw a=ml,io(r,0),xs(r,s),Dn(r,ot()),a;if(a===6)throw Error(n(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,so(r,Nn,Oi),Dn(r,ot()),null}function Vf(r,s){var a=it;it|=1;try{return r(s)}finally{it=a,it===0&&(fa=ot()+500,Mu&&hs())}}function ro(r){ys!==null&&ys.tag===0&&(it&6)===0&&pa();var s=it;it|=1;var a=ur.transition,d=et;try{if(ur.transition=null,et=1,r)return r()}finally{et=d,ur.transition=a,it=s,(it&6)===0&&hs()}}function Ff(){Kn=ha.current,xt(ha)}function io(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,yE(a)),Dt!==null)for(a=Dt.return;a!==null;){var d=a;switch(Gh(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Lu();break;case 3:ua(),xt(kn),xt(dn),af();break;case 5:sf(d);break;case 4:ua();break;case 13:xt(It);break;case 19:xt(It);break;case 10:Zh(d.type._context);break;case 22:case 23:Ff()}a=a.return}if(Wt=r,Dt=r=ws(r.current,null),rn=Kn=s,Ft=0,ml=null,Nf=ic=no=0,Nn=gl=null,Zs!==null){for(s=0;s<Zs.length;s++)if(a=Zs[s],d=a.interleaved,d!==null){a.interleaved=null;var p=d.next,g=a.pending;if(g!==null){var _=g.next;g.next=p,d.next=_}a.pending=d}Zs=null}return r}function Oy(r,s){do{var a=Dt;try{if(Jh(),Gu.current=Xu,qu){for(var d=Tt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}qu=!1}if(to=0,Ht=Vt=Tt=null,ul=!1,cl=0,Af.current=null,a===null||a.return===null){Ft=1,ml=s,Dt=null;break}e:{var g=r,_=a.return,N=a,j=s;if(s=rn,N.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var J=j,se=N,ae=se.tag;if((se.mode&1)===0&&(ae===0||ae===11||ae===15)){var ie=se.alternate;ie?(se.updateQueue=ie.updateQueue,se.memoizedState=ie.memoizedState,se.lanes=ie.lanes):(se.updateQueue=null,se.memoizedState=null)}var ye=sy(_);if(ye!==null){ye.flags&=-257,oy(ye,_,N,g,s),ye.mode&1&&iy(g,J,s),s=ye,j=J;var we=s.updateQueue;if(we===null){var Ee=new Set;Ee.add(j),s.updateQueue=Ee}else we.add(j);break e}else{if((s&1)===0){iy(g,J,s),Uf();break e}j=Error(n(426))}}else if(Et&&N.mode&1){var Pt=sy(_);if(Pt!==null){(Pt.flags&65536)===0&&(Pt.flags|=256),oy(Pt,_,N,g,s),Yh(ca(j,N));break e}}g=j=ca(j,N),Ft!==4&&(Ft=2),gl===null?gl=[g]:gl.push(g),g=_;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var G=ny(g,j,s);k0(g,G);break e;case 1:N=j;var F=g.type,Q=g.stateNode;if((g.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(gs===null||!gs.has(Q)))){g.flags|=65536,s&=-s,g.lanes|=s;var de=ry(g,N,s);k0(g,de);break e}}g=g.return}while(g!==null)}My(a)}catch(Te){s=Te,Dt===a&&a!==null&&(Dt=a=a.return);continue}break}while(!0)}function Ly(){var r=rc.current;return rc.current=Xu,r===null?Xu:r}function Uf(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Wt===null||(no&268435455)===0&&(ic&268435455)===0||xs(Wt,rn)}function cc(r,s){var a=it;it|=2;var d=Ly();(Wt!==r||rn!==s)&&(Oi=null,io(r,s));do try{$E();break}catch(p){Oy(r,p)}while(!0);if(Jh(),it=a,rc.current=d,Dt!==null)throw Error(n(261));return Wt=null,rn=0,Ft}function $E(){for(;Dt!==null;)jy(Dt)}function BE(){for(;Dt!==null&&!Jt();)jy(Dt)}function jy(r){var s=Uy(r.alternate,r,Kn);r.memoizedProps=r.pendingProps,s===null?My(r):Dt=s,Af.current=null}function My(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=LE(a,s,Kn),a!==null){Dt=a;return}}else{if(a=jE(a,s),a!==null){a.flags&=32767,Dt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Ft=6,Dt=null;return}}if(s=s.sibling,s!==null){Dt=s;return}Dt=s=r}while(s!==null);Ft===0&&(Ft=5)}function so(r,s,a){var d=et,p=ur.transition;try{ur.transition=null,et=1,HE(r,s,a,d)}finally{ur.transition=p,et=d}return null}function HE(r,s,a,d){do pa();while(ys!==null);if((it&6)!==0)throw Error(n(327));a=r.finishedWork;var p=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(n(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(pt(r,g),r===Wt&&(Dt=Wt=null,rn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||oc||(oc=!0,zy(ze,function(){return pa(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ur.transition,ur.transition=null;var _=et;et=1;var N=it;it|=4,Af.current=null,VE(r,a),Cy(a,r),cE(Fh),os=!!Vh,Fh=Vh=null,r.current=a,FE(a),_i(),it=N,et=_,ur.transition=g}else r.current=a;if(oc&&(oc=!1,ys=r,ac=p),g=r.pendingLanes,g===0&&(gs=null),yt(a.stateNode),Dn(r,ot()),s!==null)for(d=r.onRecoverableError,a=0;a<s.length;a++)p=s[a],d(p.value,{componentStack:p.stack,digest:p.digest});if(sc)throw sc=!1,r=Of,Of=null,r;return(ac&1)!==0&&r.tag!==0&&pa(),g=r.pendingLanes,(g&1)!==0?r===Lf?yl++:(yl=0,Lf=r):yl=0,hs(),null}function pa(){if(ys!==null){var r=is(ac),s=ur.transition,a=et;try{if(ur.transition=null,et=16>r?16:r,ys===null)var d=!1;else{if(r=ys,ys=null,ac=0,(it&6)!==0)throw Error(n(331));var p=it;for(it|=4,ve=r.current;ve!==null;){var g=ve,_=g.child;if((ve.flags&16)!==0){var N=g.deletions;if(N!==null){for(var j=0;j<N.length;j++){var J=N[j];for(ve=J;ve!==null;){var se=ve;switch(se.tag){case 0:case 11:case 15:pl(8,se,g)}var ae=se.child;if(ae!==null)ae.return=se,ve=ae;else for(;ve!==null;){se=ve;var ie=se.sibling,ye=se.return;if(Ey(se),se===J){ve=null;break}if(ie!==null){ie.return=ye,ve=ie;break}ve=ye}}}var we=g.alternate;if(we!==null){var Ee=we.child;if(Ee!==null){we.child=null;do{var Pt=Ee.sibling;Ee.sibling=null,Ee=Pt}while(Ee!==null)}}ve=g}}if((g.subtreeFlags&2064)!==0&&_!==null)_.return=g,ve=_;else e:for(;ve!==null;){if(g=ve,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:pl(9,g,g.return)}var G=g.sibling;if(G!==null){G.return=g.return,ve=G;break e}ve=g.return}}var F=r.current;for(ve=F;ve!==null;){_=ve;var Q=_.child;if((_.subtreeFlags&2064)!==0&&Q!==null)Q.return=_,ve=Q;else e:for(_=F;ve!==null;){if(N=ve,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:nc(9,N)}}catch(Te){Ct(N,N.return,Te)}if(N===_){ve=null;break e}var de=N.sibling;if(de!==null){de.return=N.return,ve=de;break e}ve=N.return}}if(it=p,hs(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(nr,r)}catch{}d=!0}return d}finally{et=a,ur.transition=s}}return!1}function Vy(r,s,a){s=ca(a,s),s=ny(r,s,1),r=ps(r,s,1),s=Tn(),r!==null&&(ns(r,1,s),Dn(r,s))}function Ct(r,s,a){if(r.tag===3)Vy(r,r,a);else for(;s!==null;){if(s.tag===3){Vy(s,r,a);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(gs===null||!gs.has(d))){r=ca(a,r),r=ry(s,r,1),s=ps(s,r,1),r=Tn(),s!==null&&(ns(s,1,r),Dn(s,r));break}}s=s.return}}function WE(r,s,a){var d=r.pingCache;d!==null&&d.delete(s),s=Tn(),r.pingedLanes|=r.suspendedLanes&a,Wt===r&&(rn&a)===a&&(Ft===4||Ft===3&&(rn&130023424)===rn&&500>ot()-Df?io(r,0):Nf|=a),Dn(r,s)}function Fy(r,s){s===0&&((r.mode&1)===0?s=1:(s=Mo,Mo<<=1,(Mo&130023424)===0&&(Mo=4194304)));var a=Tn();r=Ai(r,s),r!==null&&(ns(r,s,a),Dn(r,a))}function KE(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Fy(r,a)}function GE(r,s){var a=0;switch(r.tag){case 13:var d=r.stateNode,p=r.memoizedState;p!==null&&(a=p.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(n(314))}d!==null&&d.delete(s),Fy(r,a)}var Uy;Uy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||kn.current)An=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return An=!1,OE(r,s,a);An=(r.flags&131072)!==0}else An=!1,Et&&(s.flags&1048576)!==0&&x0(s,Fu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;ec(r,s),r=s.pendingProps;var p=na(s,dn.current);la(s,a),p=cf(null,s,d,r,p,a);var g=df();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Pn(d)?(g=!0,ju(s)):g=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,nf(s),p.updater=Ju,s.stateNode=p,p._reactInternals=s,yf(s,d,r,a),s=_f(null,s,d,!0,g,a)):(s.tag=0,Et&&g&&Kh(s),In(null,s,p,a),s=s.child),s;case 16:d=s.elementType;e:{switch(ec(r,s),r=s.pendingProps,p=d._init,d=p(d._payload),s.type=d,p=s.tag=QE(d),r=Rr(d,r),p){case 0:s=wf(null,s,d,r,a);break e;case 1:s=hy(null,s,d,r,a);break e;case 11:s=ay(null,s,d,r,a);break e;case 14:s=ly(null,s,d,Rr(d.type,r),a);break e}throw Error(n(306,d,""))}return s;case 0:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Rr(d,p),wf(r,s,d,p,a);case 1:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Rr(d,p),hy(r,s,d,p,a);case 3:e:{if(fy(s),r===null)throw Error(n(387));d=s.pendingProps,g=s.memoizedState,p=g.element,R0(r,s),Wu(s,d,null,a);var _=s.memoizedState;if(d=_.element,g.isDehydrated)if(g={element:d,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){p=ca(Error(n(423)),s),s=py(r,s,d,a,p);break e}else if(d!==p){p=ca(Error(n(424)),s),s=py(r,s,d,a,p);break e}else for(Wn=us(s.stateNode.containerInfo.firstChild),Hn=s,Et=!0,Cr=null,a=S0(s,null,d,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(sa(),d===p){s=Di(r,s,a);break e}In(r,s,d,a)}s=s.child}return s;case 5:return A0(s),r===null&&Qh(s),d=s.type,p=s.pendingProps,g=r!==null?r.memoizedProps:null,_=p.children,Uh(d,p)?_=null:g!==null&&Uh(d,g)&&(s.flags|=32),dy(r,s),In(r,s,_,a),s.child;case 6:return r===null&&Qh(s),null;case 13:return my(r,s,a);case 4:return rf(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=oa(s,null,d,a):In(r,s,d,a),s.child;case 11:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Rr(d,p),ay(r,s,d,p,a);case 7:return In(r,s,s.pendingProps,a),s.child;case 8:return In(r,s,s.pendingProps.children,a),s.child;case 12:return In(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(d=s.type._context,p=s.pendingProps,g=s.memoizedProps,_=p.value,mt($u,d._currentValue),d._currentValue=_,g!==null)if(Sr(g.value,_)){if(g.children===p.children&&!kn.current){s=Di(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var N=g.dependencies;if(N!==null){_=g.child;for(var j=N.firstContext;j!==null;){if(j.context===d){if(g.tag===1){j=Ni(-1,a&-a),j.tag=2;var J=g.updateQueue;if(J!==null){J=J.shared;var se=J.pending;se===null?j.next=j:(j.next=se.next,se.next=j),J.pending=j}}g.lanes|=a,j=g.alternate,j!==null&&(j.lanes|=a),ef(g.return,a,s),N.lanes|=a;break}j=j.next}}else if(g.tag===10)_=g.type===s.type?null:g.child;else if(g.tag===18){if(_=g.return,_===null)throw Error(n(341));_.lanes|=a,N=_.alternate,N!==null&&(N.lanes|=a),ef(_,a,s),_=g.sibling}else _=g.child;if(_!==null)_.return=g;else for(_=g;_!==null;){if(_===s){_=null;break}if(g=_.sibling,g!==null){g.return=_.return,_=g;break}_=_.return}g=_}In(r,s,p.children,a),s=s.child}return s;case 9:return p=s.type,d=s.pendingProps.children,la(s,a),p=ar(p),d=d(p),s.flags|=1,In(r,s,d,a),s.child;case 14:return d=s.type,p=Rr(d,s.pendingProps),p=Rr(d.type,p),ly(r,s,d,p,a);case 15:return uy(r,s,s.type,s.pendingProps,a);case 17:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:Rr(d,p),ec(r,s),s.tag=1,Pn(d)?(r=!0,ju(s)):r=!1,la(s,a),ey(s,d,p),yf(s,d,p,a),_f(null,s,d,!0,r,a);case 19:return yy(r,s,a);case 22:return cy(r,s,a)}throw Error(n(156,s.tag))};function zy(r,s){return Sn(r,s)}function qE(r,s,a,d){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cr(r,s,a,d){return new qE(r,s,a,d)}function zf(r){return r=r.prototype,!(!r||!r.isReactComponent)}function QE(r){if(typeof r=="function")return zf(r)?1:0;if(r!=null){if(r=r.$$typeof,r===B)return 11;if(r===rt)return 14}return 2}function ws(r,s){var a=r.alternate;return a===null?(a=cr(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function dc(r,s,a,d,p,g){var _=2;if(d=r,typeof r=="function")zf(r)&&(_=1);else if(typeof r=="string")_=5;else e:switch(r){case C:return oo(a.children,p,g,s);case T:_=8,p|=8;break;case S:return r=cr(12,a,s,p|2),r.elementType=S,r.lanes=g,r;case k:return r=cr(13,a,s,p),r.elementType=k,r.lanes=g,r;case Oe:return r=cr(19,a,s,p),r.elementType=Oe,r.lanes=g,r;case Fe:return hc(a,p,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case O:_=10;break e;case V:_=9;break e;case B:_=11;break e;case rt:_=14;break e;case Ae:_=16,d=null;break e}throw Error(n(130,r==null?r:typeof r,""))}return s=cr(_,a,s,p),s.elementType=r,s.type=d,s.lanes=g,s}function oo(r,s,a,d){return r=cr(7,r,d,s),r.lanes=a,r}function hc(r,s,a,d){return r=cr(22,r,d,s),r.elementType=Fe,r.lanes=a,r.stateNode={isHidden:!1},r}function $f(r,s,a){return r=cr(6,r,null,s),r.lanes=a,r}function Bf(r,s,a){return s=cr(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function YE(r,s,a,d,p){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ts(0),this.expirationTimes=ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Hf(r,s,a,d,p,g,_,N,j){return r=new YE(r,s,a,N,j),s===1?(s=1,g===!0&&(s|=8)):s=0,g=cr(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(g),r}function XE(r,s,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:d==null?null:""+d,children:r,containerInfo:s,implementation:a}}function $y(r){if(!r)return ds;r=r._reactInternals;e:{if(qe(r)!==r||r.tag!==1)throw Error(n(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Pn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(n(171))}if(r.tag===1){var a=r.type;if(Pn(a))return g0(r,a,s)}return s}function By(r,s,a,d,p,g,_,N,j){return r=Hf(a,d,!0,r,p,g,_,N,j),r.context=$y(null),a=r.current,d=Tn(),p=vs(a),g=Ni(d,p),g.callback=s??null,ps(a,g,p),r.current.lanes=p,ns(r,p,d),Dn(r,d),r}function fc(r,s,a,d){var p=s.current,g=Tn(),_=vs(p);return a=$y(a),s.context===null?s.context=a:s.pendingContext=a,s=Ni(g,_),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=ps(p,s,_),r!==null&&(Ar(r,p,_,g),Hu(r,p,_)),_}function pc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Hy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Wf(r,s){Hy(r,s),(r=r.alternate)&&Hy(r,s)}function JE(){return null}var Wy=typeof reportError=="function"?reportError:function(r){console.error(r)};function Kf(r){this._internalRoot=r}mc.prototype.render=Kf.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(n(409));fc(r,s,null,null)},mc.prototype.unmount=Kf.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ro(function(){fc(null,r,null,null)}),s[Ci]=null}};function mc(r){this._internalRoot=r}mc.prototype.unstable_scheduleHydration=function(r){if(r){var s=mu();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Xr.length&&s!==0&&s<Xr[a].priority;a++);Xr.splice(a,0,r),a===0&&vu(r)}};function Gf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function gc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Ky(){}function ZE(r,s,a,d,p){if(p){if(typeof d=="function"){var g=d;d=function(){var J=pc(_);g.call(J)}}var _=By(s,d,r,0,null,!1,!1,"",Ky);return r._reactRootContainer=_,r[Ci]=_.current,tl(r.nodeType===8?r.parentNode:r),ro(),_}for(;p=r.lastChild;)r.removeChild(p);if(typeof d=="function"){var N=d;d=function(){var J=pc(j);N.call(J)}}var j=Hf(r,0,!1,null,null,!1,!1,"",Ky);return r._reactRootContainer=j,r[Ci]=j.current,tl(r.nodeType===8?r.parentNode:r),ro(function(){fc(s,j,a,d)}),j}function yc(r,s,a,d,p){var g=a._reactRootContainer;if(g){var _=g;if(typeof p=="function"){var N=p;p=function(){var j=pc(_);N.call(j)}}fc(s,_,r,p)}else _=ZE(a,s,r,p,d);return pc(_)}fu=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=es(s.pendingLanes);a!==0&&(rs(s,a|1),Dn(s,ot()),(it&6)===0&&(fa=ot()+500,hs()))}break;case 13:ro(function(){var d=Ai(r,1);if(d!==null){var p=Tn();Ar(d,r,1,p)}}),Wf(r,1)}},Vo=function(r){if(r.tag===13){var s=Ai(r,134217728);if(s!==null){var a=Tn();Ar(s,r,134217728,a)}Wf(r,134217728)}},pu=function(r){if(r.tag===13){var s=vs(r),a=Ai(r,s);if(a!==null){var d=Tn();Ar(a,r,s,d)}Wf(r,s)}},mu=function(){return et},gu=function(r,s){var a=et;try{return et=r,s()}finally{et=a}},Xi=function(r,s,a){switch(s){case"input":if(Ki(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var d=a[s];if(d!==r&&d.form===r.form){var p=Ou(d);if(!p)throw Error(n(90));Ut(d),Ki(d,p)}}}break;case"textarea":gi(r,a);break;case"select":s=a.value,s!=null&&xr(r,!!a.multiple,s,!1)}},wi=Vf,$s=ro;var e4={usingClientEntryPoint:!1,Events:[il,ea,Ou,_n,Qr,Vf]},vl={findFiberByHostInstance:Qs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t4={bundleType:vl.bundleType,version:vl.version,rendererPackageName:vl.rendererPackageName,rendererConfig:vl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Qe(r),r===null?null:r.stateNode},findFiberByHostInstance:vl.findFiberByHostInstance||JE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{nr=vc.inject(t4),Zt=vc}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e4,On.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(s))throw Error(n(200));return XE(r,s,null,a)},On.createRoot=function(r,s){if(!Gf(r))throw Error(n(299));var a=!1,d="",p=Wy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Hf(r,1,!1,null,null,a,!1,d,p),r[Ci]=s.current,tl(r.nodeType===8?r.parentNode:r),new Kf(s)},On.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=Qe(s),r=r===null?null:r.stateNode,r},On.flushSync=function(r){return ro(r)},On.hydrate=function(r,s,a){if(!gc(s))throw Error(n(200));return yc(null,r,s,!0,a)},On.hydrateRoot=function(r,s,a){if(!Gf(r))throw Error(n(405));var d=a!=null&&a.hydratedSources||null,p=!1,g="",_=Wy;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),s=By(s,null,r,1,a??null,p,!1,g,_),r[Ci]=s.current,tl(r),d)for(r=0;r<d.length;r++)a=d[r],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new mc(s)},On.render=function(r,s,a){if(!gc(s))throw Error(n(200));return yc(null,r,s,!1,a)},On.unmountComponentAtNode=function(r){if(!gc(r))throw Error(n(40));return r._reactRootContainer?(ro(function(){yc(null,null,r,!1,function(){r._reactRootContainer=null,r[Ci]=null})}),!0):!1},On.unstable_batchedUpdates=Vf,On.unstable_renderSubtreeIntoContainer=function(r,s,a,d){if(!gc(a))throw Error(n(200));if(r==null||r._reactInternals===void 0)throw Error(n(38));return yc(r,s,a,!1,d)},On.version="18.3.1-next-f1338f8080-20240426",On}var e1;function Ax(){if(e1)return Yf.exports;e1=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Yf.exports=u4(),Yf.exports}var t1;function c4(){if(t1)return xc;t1=1;var t=Ax();return xc.createRoot=t.createRoot,xc.hydrateRoot=t.hydrateRoot,xc}var d4=c4(),wl={},n1;function h4(){if(n1)return wl;n1=1,Object.defineProperty(wl,"__esModule",{value:!0}),wl.parse=c,wl.serialize=v;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function c(b,R){const P=new l,z=b.length;if(z<2)return P;const M=(R==null?void 0:R.decode)||w;let $=0;do{const Y=b.indexOf("=",$);if(Y===-1)break;const ee=b.indexOf(";",$),X=ee===-1?z:ee;if(Y>X){$=b.lastIndexOf(";",Y-1)+1;continue}const ne=h(b,$,Y),D=f(b,Y,ne),C=b.slice(ne,D);if(P[C]===void 0){let T=h(b,Y+1,X),S=f(b,X,T);const O=M(b.slice(T,S));P[C]=O}$=X+1}while($<z);return P}function h(b,R,P){do{const z=b.charCodeAt(R);if(z!==32&&z!==9)return R}while(++R<P);return P}function f(b,R,P){for(;R>P;){const z=b.charCodeAt(--R);if(z!==32&&z!==9)return R+1}return P}function v(b,R,P){const z=(P==null?void 0:P.encode)||encodeURIComponent;if(!t.test(b))throw new TypeError(`argument name is invalid: ${b}`);const M=z(R);if(!e.test(M))throw new TypeError(`argument val is invalid: ${R}`);let $=b+"="+M;if(!P)return $;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);$+="; Max-Age="+P.maxAge}if(P.domain){if(!n.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);$+="; Domain="+P.domain}if(P.path){if(!i.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);$+="; Path="+P.path}if(P.expires){if(!E(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);$+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&($+="; HttpOnly"),P.secure&&($+="; Secure"),P.partitioned&&($+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return $}function w(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function E(b){return o.call(b)==="[object Date]"}return wl}h4();/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Nx=t=>{throw TypeError(t)},f4=(t,e,n)=>e.has(t)||Nx("Cannot "+n),Zf=(t,e,n)=>(f4(t,e,"read from private field"),n?n.call(t):e.get(t)),p4=(t,e,n)=>e.has(t)?Nx("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),r1="popstate";function m4(t={}){function e(i,o){let{pathname:l,search:c,hash:h}=i.location;return Fl("",{pathname:l,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:Ns(o)}return y4(e,n,null,t)}function $e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function At(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function g4(){return Math.random().toString(36).substring(2,10)}function i1(t,e){return{usr:t.state,key:t.key,idx:e}}function Fl(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Vs(e):e,state:n,key:e&&e.key||i||g4()}}function Ns({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Vs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function y4(t,e,n,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,h="POP",f=null,v=w();v==null&&(v=0,c.replaceState({...c.state,idx:v},""));function w(){return(c.state||{idx:null}).idx}function E(){h="POP";let M=w(),$=M==null?null:M-v;v=M,f&&f({action:h,location:z.location,delta:$})}function b(M,$){h="PUSH";let Y=Fl(z.location,M,$);v=w()+1;let ee=i1(Y,v),X=z.createHref(Y);try{c.pushState(ee,"",X)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;o.location.assign(X)}l&&f&&f({action:h,location:z.location,delta:1})}function R(M,$){h="REPLACE";let Y=Fl(z.location,M,$);v=w();let ee=i1(Y,v),X=z.createHref(Y);c.replaceState(ee,"",X),l&&f&&f({action:h,location:z.location,delta:0})}function P(M){return Dx(M)}let z={get action(){return h},get location(){return t(o,c)},listen(M){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(r1,E),f=M,()=>{o.removeEventListener(r1,E),f=null}},createHref(M){return e(o,M)},createURL:P,encodeLocation(M){let $=P(M);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:b,replace:R,go(M){return c.go(M)}};return z}function Dx(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),$e(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Ns(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var Cl,s1=class{constructor(t){if(p4(this,Cl,new Map),t)for(let[e,n]of t)this.set(e,n)}get(t){if(Zf(this,Cl).has(t))return Zf(this,Cl).get(t);if(t.defaultValue!==void 0)return t.defaultValue;throw new Error("No value found for context")}set(t,e){Zf(this,Cl).set(t,e)}};Cl=new WeakMap;var v4=new Set(["lazy","caseSensitive","path","id","index","children"]);function x4(t){return v4.has(t)}var w4=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function _4(t){return w4.has(t)}function E4(t){return t.index===!0}function ad(t,e,n=[],i={}){return t.map((o,l)=>{let c=[...n,String(l)],h=typeof o.id=="string"?o.id:c.join("-");if($e(o.index!==!0||!o.children,"Cannot specify children on an index route"),$e(!i[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),E4(o)){let f={...o,...e(o),id:h};return i[h]=f,f}else{let f={...o,...e(o),id:h,children:void 0};return i[h]=f,o.children&&(f.children=ad(o.children,e,c,i)),f}})}function Ts(t,e,n="/"){return Wc(t,e,n,!1)}function Wc(t,e,n,i){let o=typeof e=="string"?Vs(e):e,l=mr(o.pathname||"/",n);if(l==null)return null;let c=Ox(t);I4(c);let h=null;for(let f=0;h==null&&f<c.length;++f){let v=L4(l);h=D4(c[f],v,i)}return h}function b4(t,e){let{route:n,pathname:i,params:o}=t;return{id:n.id,pathname:i,params:o,data:e[n.id],handle:n.handle}}function Ox(t,e=[],n=[],i=""){let o=(l,c,h)=>{let f={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};f.relativePath.startsWith("/")&&($e(f.relativePath.startsWith(i),`Absolute route path "${f.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(i.length));let v=ai([i,f.relativePath]),w=n.concat(f);l.children&&l.children.length>0&&($e(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Ox(l.children,e,w,v)),!(l.path==null&&!l.index)&&e.push({path:v,score:A4(v,l.index),routesMeta:w})};return t.forEach((l,c)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,c);else for(let f of Lx(l.path))o(l,c,f)}),e}function Lx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=Lx(i.join("/")),h=[];return h.push(...c.map(f=>f===""?l:[l,f].join("/"))),o&&h.push(...c),h.map(f=>t.startsWith("/")&&f===""?"/":f)}function I4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:N4(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var T4=/^:[\w-]+$/,S4=3,C4=2,R4=1,k4=10,P4=-2,o1=t=>t==="*";function A4(t,e){let n=t.split("/"),i=n.length;return n.some(o1)&&(i+=P4),e&&(i+=C4),n.filter(o=>!o1(o)).reduce((o,l)=>o+(T4.test(l)?S4:l===""?R4:k4),i)}function N4(t,e){return t.length===e.length&&t.slice(0,-1).every((i,o)=>i===e[o])?t[t.length-1]-e[e.length-1]:0}function D4(t,e,n=!1){let{routesMeta:i}=t,o={},l="/",c=[];for(let h=0;h<i.length;++h){let f=i[h],v=h===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",E=ld({path:f.relativePath,caseSensitive:f.caseSensitive,end:v},w),b=f.route;if(!E&&v&&n&&!i[i.length-1].route.index&&(E=ld({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},w)),!E)return null;Object.assign(o,E.params),c.push({params:o,pathname:ai([l,E.pathname]),pathnameBase:V4(ai([l,E.pathnameBase])),route:b}),E.pathnameBase!=="/"&&(l=ai([l,E.pathnameBase]))}return c}function ld(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=O4(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((v,{paramName:w,isOptional:E},b)=>{if(w==="*"){let P=h[b]||"";c=l.slice(0,l.length-P.length).replace(/(.)\/+$/,"$1")}const R=h[b];return E&&!R?v[w]=void 0:v[w]=(R||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:c,pattern:t}}function O4(t,e=!1,n=!0){At(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,f)=>(i.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function L4(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return At(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function mr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function j4(t,e="/"){let{pathname:n,search:i="",hash:o=""}=typeof t=="string"?Vs(t):t;return{pathname:n?n.startsWith("/")?n:M4(n,e):e,search:F4(i),hash:U4(o)}}function M4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ep(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gd(t){let e=jx(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function qd(t,e,n,i=!1){let o;typeof t=="string"?o=Vs(t):(o={...t},$e(!o.pathname||!o.pathname.includes("?"),ep("?","pathname","search",o)),$e(!o.pathname||!o.pathname.includes("#"),ep("#","pathname","hash",o)),$e(!o.search||!o.search.includes("#"),ep("#","search","hash",o)));let l=t===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=n;else{let E=e.length-1;if(!i&&c.startsWith("..")){let b=c.split("/");for(;b[0]==="..";)b.shift(),E-=1;o.pathname=b.join("/")}h=E>=0?e[E]:"/"}let f=j4(o,h),v=c&&c!=="/"&&c.endsWith("/"),w=(l||c===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(v||w)&&(f.pathname+="/"),f}var ai=t=>t.join("/").replace(/\/\/+/g,"/"),V4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),F4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,U4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,ud=class{constructor(t,e,n,i=!1){this.status=t,this.statusText=e||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ul(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Mx=["POST","PUT","PATCH","DELETE"],z4=new Set(Mx),$4=["GET",...Mx],B4=new Set($4),H4=new Set([301,302,303,307,308]),W4=new Set([307,308]),tp={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},K4={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_l={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G4=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),Vx="remix-router-transitions",Fx=Symbol("ResetLoaderData");function q4(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u";$e(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=t.hydrationRouteProperties||[],o=t.mapRouteProperties||G4,l={},c=ad(t.routes,o,void 0,l),h,f=t.basename||"/",v=t.dataStrategy||Z4,w={unstable_middleware:!1,...t.future},E=null,b=new Set,R=null,P=null,z=null,M=t.hydrationData!=null,$=Ts(c,t.history.location,f),Y=!1,ee=null,X;if($==null&&!t.patchRoutesOnNavigation){let L=dr(404,{pathname:t.history.location.pathname}),{matches:H,route:q}=v1(c);X=!0,$=H,ee={[q.id]:L}}else if($&&!t.hydrationData&&_n($,c,t.history.location.pathname).active&&($=null),$)if($.some(L=>L.route.lazy))X=!1;else if(!$.some(L=>L.route.loader))X=!0;else{let L=t.hydrationData?t.hydrationData.loaderData:null,H=t.hydrationData?t.hydrationData.errors:null;if(H){let q=$.findIndex(oe=>H[oe.route.id]!==void 0);X=$.slice(0,q+1).every(oe=>!Zp(oe.route,L,H))}else X=$.every(q=>!Zp(q.route,L,H))}else{X=!1,$=[];let L=_n(null,c,t.history.location.pathname);L.active&&L.matches&&(Y=!0,$=L.matches)}let ne,D={historyAction:t.history.action,location:t.history.location,matches:$,initialized:X,navigation:tp,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||ee,fetchers:new Map,blockers:new Map},C="POP",T=!1,S,O=!1,V=new Map,B=null,k=!1,Oe=!1,rt=new Set,Ae=new Map,Fe=0,le=-1,pe=new Map,ce=new Set,U=new Map,te=new Map,me=new Set,Pe=new Map,Ne,De=null;function Ke(){if(E=t.history.listen(({action:L,location:H,delta:q})=>{if(Ne){Ne(),Ne=void 0;return}At(Pe.size===0||q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let oe=Gr({currentLocation:D.location,nextLocation:H,historyAction:L});if(oe&&q!=null){let he=new Promise(_e=>{Ne=_e});t.history.go(q*-1),Kr(oe,{state:"blocked",location:H,proceed(){Kr(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),he.then(()=>t.history.go(q))},reset(){let _e=new Map(D.blockers);_e.set(oe,_l),Ge({blockers:_e})}});return}return xn(L,H)}),n){cb(e,V);let L=()=>db(e,V);e.addEventListener("pagehide",L),B=()=>e.removeEventListener("pagehide",L)}return D.initialized||xn("POP",D.location,{initialHydration:!0}),ne}function He(){E&&E(),B&&B(),b.clear(),S&&S.abort(),D.fetchers.forEach((L,H)=>vi(H)),D.blockers.forEach((L,H)=>Yi(H))}function Je(L){return b.add(L),()=>b.delete(L)}function Ge(L,H={}){D={...D,...L};let q=[],oe=[];D.fetchers.forEach((he,_e)=>{he.state==="idle"&&(me.has(_e)?q.push(_e):oe.push(_e))}),me.forEach(he=>{!D.fetchers.has(he)&&!Ae.has(he)&&q.push(he)}),[...b].forEach(he=>he(D,{deletedFetchers:q,viewTransitionOpts:H.viewTransitionOpts,flushSync:H.flushSync===!0})),q.forEach(he=>vi(he)),oe.forEach(he=>D.fetchers.delete(he))}function kt(L,H,{flushSync:q}={}){var Se,Le;let oe=D.actionData!=null&&D.navigation.formMethod!=null&&Qn(D.navigation.formMethod)&&D.navigation.state==="loading"&&((Se=L.state)==null?void 0:Se._isRedirect)!==!0,he;H.actionData?Object.keys(H.actionData).length>0?he=H.actionData:he=null:oe?he=D.actionData:he=null;let _e=H.loaderData?g1(D.loaderData,H.loaderData,H.matches||[],H.errors):D.loaderData,Ce=D.blockers;Ce.size>0&&(Ce=new Map(Ce),Ce.forEach((Ie,Ue)=>Ce.set(Ue,_l)));let ge=T===!0||D.navigation.formMethod!=null&&Qn(D.navigation.formMethod)&&((Le=L.state)==null?void 0:Le._isRedirect)!==!0;h&&(c=h,h=void 0),k||C==="POP"||(C==="PUSH"?t.history.push(L,L.state):C==="REPLACE"&&t.history.replace(L,L.state));let xe;if(C==="POP"){let Ie=V.get(D.location.pathname);Ie&&Ie.has(L.pathname)?xe={currentLocation:D.location,nextLocation:L}:V.has(L.pathname)&&(xe={currentLocation:L,nextLocation:D.location})}else if(O){let Ie=V.get(D.location.pathname);Ie?Ie.add(L.pathname):(Ie=new Set([L.pathname]),V.set(D.location.pathname,Ie)),xe={currentLocation:D.location,nextLocation:L}}Ge({...H,actionData:he,loaderData:_e,historyAction:C,location:L,initialized:!0,navigation:tp,revalidation:"idle",restoreScrollPosition:xi(L,H.matches||D.matches),preventScrollReset:ge,blockers:Ce},{viewTransitionOpts:xe,flushSync:q===!0}),C="POP",T=!1,O=!1,k=!1,Oe=!1,De==null||De.resolve(),De=null}async function Ut(L,H){if(typeof L=="number"){t.history.go(L);return}let q=Jp(D.location,D.matches,f,L,H==null?void 0:H.fromRouteId,H==null?void 0:H.relative),{path:oe,submission:he,error:_e}=a1(!1,q,H),Ce=D.location,ge=Fl(D.location,oe,H&&H.state);ge={...ge,...t.history.encodeLocation(ge)};let xe=H&&H.replace!=null?H.replace:void 0,Se="PUSH";xe===!0?Se="REPLACE":xe===!1||he!=null&&Qn(he.formMethod)&&he.formAction===D.location.pathname+D.location.search&&(Se="REPLACE");let Le=H&&"preventScrollReset"in H?H.preventScrollReset===!0:void 0,Ie=(H&&H.flushSync)===!0,Ue=Gr({currentLocation:Ce,nextLocation:ge,historyAction:Se});if(Ue){Kr(Ue,{state:"blocked",location:ge,proceed(){Kr(Ue,{state:"proceeding",proceed:void 0,reset:void 0,location:ge}),Ut(L,H)},reset(){let qe=new Map(D.blockers);qe.set(Ue,_l),Ge({blockers:qe})}});return}await xn(Se,ge,{submission:he,pendingError:_e,preventScrollReset:Le,replace:H&&H.replace,enableViewTransition:H&&H.viewTransition,flushSync:Ie})}function Br(){De||(De=hb()),yi(),Ge({revalidation:"loading"});let L=De.promise;return D.navigation.state==="submitting"?L:D.navigation.state==="idle"?(xn(D.historyAction,D.location,{startUninterruptedRevalidation:!0}),L):(xn(C||D.historyAction,D.navigation.location,{overrideNavigation:D.navigation,enableViewTransition:O===!0}),L)}async function xn(L,H,q){S&&S.abort(),S=null,C=L,k=(q&&q.startUninterruptedRevalidation)===!0,er(D.location,D.matches),T=(q&&q.preventScrollReset)===!0,O=(q&&q.enableViewTransition)===!0;let oe=h||c,he=q&&q.overrideNavigation,_e=q!=null&&q.initialHydration&&D.matches&&D.matches.length>0&&!Y?D.matches:Ts(oe,H,f),Ce=(q&&q.flushSync)===!0;if(_e&&D.initialized&&!Oe&&sb(D.location,H)&&!(q&&q.submission&&Qn(q.submission.formMethod))){kt(H,{matches:_e},{flushSync:Ce});return}let ge=_n(_e,oe,H.pathname);if(ge.active&&ge.matches&&(_e=ge.matches),!_e){let{error:ht,notFoundMatches:zt,route:Qe}=qr(H.pathname);kt(H,{matches:zt,loaderData:{},errors:{[Qe.id]:ht}},{flushSync:Ce});return}S=new AbortController;let xe=ga(t.history,H,S.signal,q&&q.submission),Se=new s1(t.unstable_getContext?await t.unstable_getContext():void 0),Le;if(q&&q.pendingError)Le=[co(_e).route.id,{type:"error",error:q.pendingError}];else if(q&&q.submission&&Qn(q.submission.formMethod)){let ht=await Wi(xe,H,q.submission,_e,Se,ge.active,q&&q.initialHydration===!0,{replace:q.replace,flushSync:Ce});if(ht.shortCircuited)return;if(ht.pendingActionResult){let[zt,Qe]=ht.pendingActionResult;if(qn(Qe)&&Ul(Qe.error)&&Qe.error.status===404){S=null,kt(H,{matches:ht.matches,loaderData:{},errors:{[zt]:Qe.error}});return}}_e=ht.matches||_e,Le=ht.pendingActionResult,he=np(H,q.submission),Ce=!1,ge.active=!1,xe=ga(t.history,xe.url,xe.signal)}let{shortCircuited:Ie,matches:Ue,loaderData:qe,errors:ft}=await Us(xe,H,_e,Se,ge.active,he,q&&q.submission,q&&q.fetcherSubmission,q&&q.replace,q&&q.initialHydration===!0,Ce,Le);Ie||(S=null,kt(H,{matches:Ue||_e,...y1(Le),loaderData:qe,errors:ft}))}async function Wi(L,H,q,oe,he,_e,Ce,ge={}){yi();let xe=lb(H,q);if(Ge({navigation:xe},{flushSync:ge.flushSync===!0}),_e){let Ie=await Qr(oe,H.pathname,L.signal);if(Ie.type==="aborted")return{shortCircuited:!0};if(Ie.type==="error"){let Ue=co(Ie.partialMatches).route.id;return{matches:Ie.partialMatches,pendingActionResult:[Ue,{type:"error",error:Ie.error}]}}else if(Ie.matches)oe=Ie.matches;else{let{notFoundMatches:Ue,error:qe,route:ft}=qr(H.pathname);return{matches:Ue,pendingActionResult:[ft.id,{type:"error",error:qe}]}}}let Se,Le=Rl(oe,H);if(!Le.route.action&&!Le.route.lazy)Se={type:"error",error:dr(405,{method:L.method,pathname:H.pathname,routeId:Le.route.id})};else{let Ie=wa(o,l,L,oe,Le,Ce?[]:i,he),Ue=await Jn(L,Ie,he,null);if(Se=Ue[Le.route.id],!Se){for(let qe of oe)if(Ue[qe.route.id]){Se=Ue[qe.route.id];break}}if(L.signal.aborted)return{shortCircuited:!0}}if(ho(Se)){let Ie;return ge&&ge.replace!=null?Ie=ge.replace:Ie=f1(Se.response.headers.get("Location"),new URL(L.url),f)===D.location.pathname+D.location.search,await Vn(L,Se,!0,{submission:q,replace:Ie}),{shortCircuited:!0}}if(qn(Se)){let Ie=co(oe,Le.route.id);return(ge&&ge.replace)!==!0&&(C="PUSH"),{matches:oe,pendingActionResult:[Ie.route.id,Se,Le.route.id]}}return{matches:oe,pendingActionResult:[Le.route.id,Se]}}async function Us(L,H,q,oe,he,_e,Ce,ge,xe,Se,Le,Ie){let Ue=_e||np(H,Ce),qe=Ce||ge||w1(Ue),ft=!k&&!Se;if(he){if(ft){let $t=Ki(Ie);Ge({navigation:Ue,...$t!==void 0?{actionData:$t}:{}},{flushSync:Le})}let ze=await Qr(q,H.pathname,L.signal);if(ze.type==="aborted")return{shortCircuited:!0};if(ze.type==="error"){let $t=co(ze.partialMatches).route.id;return{matches:ze.partialMatches,loaderData:{},errors:{[$t]:ze.error}}}else if(ze.matches)q=ze.matches;else{let{error:$t,notFoundMatches:Un,route:nr}=qr(H.pathname);return{matches:Un,loaderData:{},errors:{[nr.id]:$t}}}}let ht=h||c,{dsMatches:zt,revalidatingFetchers:Qe}=l1(L,oe,o,l,t.history,D,q,qe,H,Se?[]:i,Se===!0,Oe,rt,me,U,ce,ht,f,Ie);if(le=++Fe,!t.dataStrategy&&!zt.some(ze=>ze.shouldLoad)&&Qe.length===0){let ze=qi();return kt(H,{matches:q,loaderData:{},errors:Ie&&qn(Ie[1])?{[Ie[0]]:Ie[1].error}:null,...y1(Ie),...ze?{fetchers:new Map(D.fetchers)}:{}},{flushSync:Le}),{shortCircuited:!0}}if(ft){let ze={};if(!he){ze.navigation=Ue;let $t=Ki(Ie);$t!==void 0&&(ze.actionData=$t)}Qe.length>0&&(ze.fetchers=Oo(Qe)),Ge(ze,{flushSync:Le})}Qe.forEach(ze=>{cn(ze.key),ze.controller&&Ae.set(ze.key,ze.controller)});let tr=()=>Qe.forEach(ze=>cn(ze.key));S&&S.signal.addEventListener("abort",tr);let{loaderResults:Sn,fetcherResults:wr}=await gi(zt,Qe,L,oe);if(L.signal.aborted)return{shortCircuited:!0};S&&S.signal.removeEventListener("abort",tr),Qe.forEach(ze=>Ae.delete(ze.key));let Jt=wc(Sn);if(Jt)return await Vn(L,Jt.result,!0,{replace:xe}),{shortCircuited:!0};if(Jt=wc(wr),Jt)return ce.add(Jt.key),await Vn(L,Jt.result,!0,{replace:xe}),{shortCircuited:!0};let{loaderData:_i,errors:ot}=m1(D,q,Sn,Ie,Qe,wr);Se&&D.errors&&(ot={...D.errors,...ot});let Ji=qi(),En=Qi(le),Fn=Ji||En||Qe.length>0;return{matches:q,loaderData:_i,errors:ot,...Fn?{fetchers:new Map(D.fetchers)}:{}}}function Ki(L){if(L&&!qn(L[1]))return{[L[0]]:L[1].data};if(D.actionData)return Object.keys(D.actionData).length===0?null:D.actionData}function Oo(L){return L.forEach(H=>{let q=D.fetchers.get(H.key),oe=El(void 0,q?q.data:void 0);D.fetchers.set(H.key,oe)}),new Map(D.fetchers)}async function Gi(L,H,q,oe){cn(L);let he=(oe&&oe.flushSync)===!0,_e=h||c,Ce=Jp(D.location,D.matches,f,q,H,oe==null?void 0:oe.relative),ge=Ts(_e,Ce,f),xe=_n(ge,_e,Ce);if(xe.active&&xe.matches&&(ge=xe.matches),!ge){ut(L,H,dr(404,{pathname:Ce}),{flushSync:he});return}let{path:Se,submission:Le,error:Ie}=a1(!0,Ce,oe);if(Ie){ut(L,H,Ie,{flushSync:he});return}let Ue=Rl(ge,Se),qe=new s1(t.unstable_getContext?await t.unstable_getContext():void 0),ft=(oe&&oe.preventScrollReset)===!0;if(Le&&Qn(Le.formMethod)){await vr(L,H,Se,Ue,ge,qe,xe.active,he,ft,Le);return}U.set(L,{routeId:H,path:Se}),await xr(L,H,Se,Ue,ge,qe,xe.active,he,ft,Le)}async function vr(L,H,q,oe,he,_e,Ce,ge,xe,Se){yi(),U.delete(L);function Le(yt){if(!yt.route.action&&!yt.route.lazy){let St=dr(405,{method:Se.formMethod,pathname:q,routeId:H});return ut(L,H,St,{flushSync:ge}),!0}return!1}if(!Ce&&Le(oe))return;let Ie=D.fetchers.get(L);dt(L,ub(Se,Ie),{flushSync:ge});let Ue=new AbortController,qe=ga(t.history,q,Ue.signal,Se);if(Ce){let yt=await Qr(he,q,qe.signal,L);if(yt.type==="aborted")return;if(yt.type==="error"){ut(L,H,yt.error,{flushSync:ge});return}else if(yt.matches){if(he=yt.matches,oe=Rl(he,q),Le(oe))return}else{ut(L,H,dr(404,{pathname:q}),{flushSync:ge});return}}Ae.set(L,Ue);let ft=Fe,ht=wa(o,l,qe,he,oe,i,_e),Qe=(await Jn(qe,ht,_e,L))[oe.route.id];if(qe.signal.aborted){Ae.get(L)===Ue&&Ae.delete(L);return}if(me.has(L)){if(ho(Qe)||qn(Qe)){dt(L,bs(void 0));return}}else{if(ho(Qe))if(Ae.delete(L),le>ft){dt(L,bs(void 0));return}else return ce.add(L),dt(L,El(Se)),Vn(qe,Qe,!1,{fetcherSubmission:Se,preventScrollReset:xe});if(qn(Qe)){ut(L,H,Qe.error);return}}let tr=D.navigation.location||D.location,Sn=ga(t.history,tr,Ue.signal),wr=h||c,Jt=D.navigation.state!=="idle"?Ts(wr,D.navigation.location,f):D.matches;$e(Jt,"Didn't find any matches after fetcher action");let _i=++Fe;pe.set(L,_i);let ot=El(Se,Qe.data);D.fetchers.set(L,ot);let{dsMatches:Ji,revalidatingFetchers:En}=l1(Sn,_e,o,l,t.history,D,Jt,Se,tr,i,!1,Oe,rt,me,U,ce,wr,f,[oe.route.id,Qe]);En.filter(yt=>yt.key!==L).forEach(yt=>{let St=yt.key,Zi=D.fetchers.get(St),Lo=El(void 0,Zi?Zi.data:void 0);D.fetchers.set(St,Lo),cn(St),yt.controller&&Ae.set(St,yt.controller)}),Ge({fetchers:new Map(D.fetchers)});let Fn=()=>En.forEach(yt=>cn(yt.key));Ue.signal.addEventListener("abort",Fn);let{loaderResults:ze,fetcherResults:$t}=await gi(Ji,En,Sn,_e);if(Ue.signal.aborted)return;if(Ue.signal.removeEventListener("abort",Fn),pe.delete(L),Ae.delete(L),En.forEach(yt=>Ae.delete(yt.key)),D.fetchers.has(L)){let yt=bs(Qe.data);D.fetchers.set(L,yt)}let Un=wc(ze);if(Un)return Vn(Sn,Un.result,!1,{preventScrollReset:xe});if(Un=wc($t),Un)return ce.add(Un.key),Vn(Sn,Un.result,!1,{preventScrollReset:xe});let{loaderData:nr,errors:Zt}=m1(D,Jt,ze,void 0,En,$t);Qi(_i),D.navigation.state==="loading"&&_i>le?($e(C,"Expected pending action"),S&&S.abort(),kt(D.navigation.location,{matches:Jt,loaderData:nr,errors:Zt,fetchers:new Map(D.fetchers)})):(Ge({errors:Zt,loaderData:g1(D.loaderData,nr,Jt,Zt),fetchers:new Map(D.fetchers)}),Oe=!1)}async function xr(L,H,q,oe,he,_e,Ce,ge,xe,Se){let Le=D.fetchers.get(L);dt(L,El(Se,Le?Le.data:void 0),{flushSync:ge});let Ie=new AbortController,Ue=ga(t.history,q,Ie.signal);if(Ce){let Qe=await Qr(he,q,Ue.signal,L);if(Qe.type==="aborted")return;if(Qe.type==="error"){ut(L,H,Qe.error,{flushSync:ge});return}else if(Qe.matches)he=Qe.matches,oe=Rl(he,q);else{ut(L,H,dr(404,{pathname:q}),{flushSync:ge});return}}Ae.set(L,Ie);let qe=Fe,ft=wa(o,l,Ue,he,oe,i,_e),zt=(await Jn(Ue,ft,_e,L))[oe.route.id];if(Ae.get(L)===Ie&&Ae.delete(L),!Ue.signal.aborted){if(me.has(L)){dt(L,bs(void 0));return}if(ho(zt))if(le>qe){dt(L,bs(void 0));return}else{ce.add(L),await Vn(Ue,zt,!1,{preventScrollReset:xe});return}if(qn(zt)){ut(L,H,zt.error);return}dt(L,bs(zt.data))}}async function Vn(L,H,q,{submission:oe,fetcherSubmission:he,preventScrollReset:_e,replace:Ce}={}){H.response.headers.has("X-Remix-Revalidate")&&(Oe=!0);let ge=H.response.headers.get("Location");$e(ge,"Expected a Location header on the redirect Response"),ge=f1(ge,new URL(L.url),f);let xe=Fl(D.location,ge,{_isRedirect:!0});if(n){let ft=!1;if(H.response.headers.has("X-Remix-Reload-Document"))ft=!0;else if(Vm.test(ge)){const ht=Dx(ge,!0);ft=ht.origin!==e.location.origin||mr(ht.pathname,f)==null}if(ft){Ce?e.location.replace(ge):e.location.assign(ge);return}}S=null;let Se=Ce===!0||H.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Le,formAction:Ie,formEncType:Ue}=D.navigation;!oe&&!he&&Le&&Ie&&Ue&&(oe=w1(D.navigation));let qe=oe||he;if(W4.has(H.response.status)&&qe&&Qn(qe.formMethod))await xn(Se,xe,{submission:{...qe,formAction:ge},preventScrollReset:_e||T,enableViewTransition:q?O:void 0});else{let ft=np(xe,oe);await xn(Se,xe,{overrideNavigation:ft,fetcherSubmission:he,preventScrollReset:_e||T,enableViewTransition:q?O:void 0})}}async function Jn(L,H,q,oe){let he,_e={};try{he=await eb(v,L,H,oe,q,!1)}catch(Ce){return H.filter(ge=>ge.shouldLoad).forEach(ge=>{_e[ge.route.id]={type:"error",error:Ce}}),_e}if(L.signal.aborted)return _e;for(let[Ce,ge]of Object.entries(he))if(ob(ge)){let xe=ge.result;_e[Ce]={type:"redirect",response:rb(xe,L,Ce,H,f)}}else _e[Ce]=await nb(ge);return _e}async function gi(L,H,q,oe){let he=Jn(q,L,oe,null),_e=Promise.all(H.map(async xe=>{if(xe.matches&&xe.match&&xe.request&&xe.controller){let Le=(await Jn(xe.request,xe.matches,oe,xe.key))[xe.match.route.id];return{[xe.key]:Le}}else return Promise.resolve({[xe.key]:{type:"error",error:dr(404,{pathname:xe.path})}})})),Ce=await he,ge=(await _e).reduce((xe,Se)=>Object.assign(xe,Se),{});return{loaderResults:Ce,fetcherResults:ge}}function yi(){Oe=!0,U.forEach((L,H)=>{Ae.has(H)&&rt.add(H),cn(H)})}function dt(L,H,q={}){D.fetchers.set(L,H),Ge({fetchers:new Map(D.fetchers)},{flushSync:(q&&q.flushSync)===!0})}function ut(L,H,q,oe={}){let he=co(D.matches,H);vi(L),Ge({errors:{[he.route.id]:q},fetchers:new Map(D.fetchers)},{flushSync:(oe&&oe.flushSync)===!0})}function Zn(L){return te.set(L,(te.get(L)||0)+1),me.has(L)&&me.delete(L),D.fetchers.get(L)||K4}function vi(L){let H=D.fetchers.get(L);Ae.has(L)&&!(H&&H.state==="loading"&&pe.has(L))&&cn(L),U.delete(L),pe.delete(L),ce.delete(L),me.delete(L),rt.delete(L),D.fetchers.delete(L)}function Hr(L){let H=(te.get(L)||0)-1;H<=0?(te.delete(L),me.add(L)):te.set(L,H),Ge({fetchers:new Map(D.fetchers)})}function cn(L){let H=Ae.get(L);H&&(H.abort(),Ae.delete(L))}function Wr(L){for(let H of L){let q=Zn(H),oe=bs(q.data);D.fetchers.set(H,oe)}}function qi(){let L=[],H=!1;for(let q of ce){let oe=D.fetchers.get(q);$e(oe,`Expected fetcher: ${q}`),oe.state==="loading"&&(ce.delete(q),L.push(q),H=!0)}return Wr(L),H}function Qi(L){let H=[];for(let[q,oe]of pe)if(oe<L){let he=D.fetchers.get(q);$e(he,`Expected fetcher: ${q}`),he.state==="loading"&&(cn(q),pe.delete(q),H.push(q))}return Wr(H),H.length>0}function zs(L,H){let q=D.blockers.get(L)||_l;return Pe.get(L)!==H&&Pe.set(L,H),q}function Yi(L){D.blockers.delete(L),Pe.delete(L)}function Kr(L,H){let q=D.blockers.get(L)||_l;$e(q.state==="unblocked"&&H.state==="blocked"||q.state==="blocked"&&H.state==="blocked"||q.state==="blocked"&&H.state==="proceeding"||q.state==="blocked"&&H.state==="unblocked"||q.state==="proceeding"&&H.state==="unblocked",`Invalid blocker state transition: ${q.state} -> ${H.state}`);let oe=new Map(D.blockers);oe.set(L,H),Ge({blockers:oe})}function Gr({currentLocation:L,nextLocation:H,historyAction:q}){if(Pe.size===0)return;Pe.size>1&&At(!1,"A router only supports one blocker at a time");let oe=Array.from(Pe.entries()),[he,_e]=oe[oe.length-1],Ce=D.blockers.get(he);if(!(Ce&&Ce.state==="proceeding")&&_e({currentLocation:L,nextLocation:H,historyAction:q}))return he}function qr(L){let H=dr(404,{pathname:L}),q=h||c,{matches:oe,route:he}=v1(q);return{notFoundMatches:oe,route:he,error:H}}function Xi(L,H,q){if(R=L,z=H,P=q||null,!M&&D.navigation===tp){M=!0;let oe=xi(D.location,D.matches);oe!=null&&Ge({restoreScrollPosition:oe})}return()=>{R=null,z=null,P=null}}function wn(L,H){return P&&P(L,H.map(oe=>b4(oe,D.loaderData)))||L.key}function er(L,H){if(R&&z){let q=wn(L,H);R[q]=z()}}function xi(L,H){if(R){let q=wn(L,H),oe=R[q];if(typeof oe=="number")return oe}return null}function _n(L,H,q){if(t.patchRoutesOnNavigation)if(L){if(Object.keys(L[0].params).length>0)return{active:!0,matches:Wc(H,q,f,!0)}}else return{active:!0,matches:Wc(H,q,f,!0)||[]};return{active:!1,matches:null}}async function Qr(L,H,q,oe){if(!t.patchRoutesOnNavigation)return{type:"success",matches:L};let he=L;for(;;){let _e=h==null,Ce=h||c,ge=l;try{await t.patchRoutesOnNavigation({signal:q,path:H,matches:he,fetcherKey:oe,patch:(Le,Ie)=>{q.aborted||u1(Le,Ie,Ce,ge,o)}})}catch(Le){return{type:"error",error:Le,partialMatches:he}}finally{_e&&!q.aborted&&(c=[...c])}if(q.aborted)return{type:"aborted"};let xe=Ts(Ce,H,f);if(xe)return{type:"success",matches:xe};let Se=Wc(Ce,H,f,!0);if(!Se||he.length===Se.length&&he.every((Le,Ie)=>Le.route.id===Se[Ie].route.id))return{type:"success",matches:null};he=Se}}function wi(L){l={},h=ad(L,o,void 0,l)}function $s(L,H){let q=h==null;u1(L,H,h||c,l,o),q&&(c=[...c],Ge({}))}return ne={get basename(){return f},get future(){return w},get state(){return D},get routes(){return c},get window(){return e},initialize:Ke,subscribe:Je,enableScrollRestoration:Xi,navigate:Ut,fetch:Gi,revalidate:Br,createHref:L=>t.history.createHref(L),encodeLocation:L=>t.history.encodeLocation(L),getFetcher:Zn,deleteFetcher:Hr,dispose:He,getBlocker:zs,deleteBlocker:Yi,patchRoutes:$s,_internalFetchControllers:Ae,_internalSetRoutes:wi},ne}function Q4(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Jp(t,e,n,i,o,l){let c,h;if(o){c=[];for(let v of e)if(c.push(v),v.route.id===o){h=v;break}}else c=e,h=e[e.length-1];let f=qd(i||".",Gd(c),mr(t.pathname,n)||t.pathname,l==="path");if(i==null&&(f.search=t.search,f.hash=t.hash),(i==null||i===""||i===".")&&h){let v=Fm(f.search);if(h.route.index&&!v)f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index";else if(!h.route.index&&v){let w=new URLSearchParams(f.search),E=w.getAll("index");w.delete("index"),E.filter(R=>R).forEach(R=>w.append("index",R));let b=w.toString();f.search=b?`?${b}`:""}}return n!=="/"&&(f.pathname=f.pathname==="/"?n:ai([n,f.pathname])),Ns(f)}function a1(t,e,n){if(!n||!Q4(n))return{path:e};if(n.formMethod&&!ab(n.formMethod))return{path:e,error:dr(405,{method:n.formMethod})};let i=()=>({path:e,error:dr(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),c=Wx(e);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Qn(l))return i();let E=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((b,[R,P])=>`${b}${R}=${P}
`,""):String(n.body);return{path:e,submission:{formMethod:l,formAction:c,formEncType:n.formEncType,formData:void 0,json:void 0,text:E}}}else if(n.formEncType==="application/json"){if(!Qn(l))return i();try{let E=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:e,submission:{formMethod:l,formAction:c,formEncType:n.formEncType,formData:void 0,json:E,text:void 0}}}catch{return i()}}}$e(typeof FormData=="function","FormData is not available in this environment");let h,f;if(n.formData)h=tm(n.formData),f=n.formData;else if(n.body instanceof FormData)h=tm(n.body),f=n.body;else if(n.body instanceof URLSearchParams)h=n.body,f=p1(h);else if(n.body==null)h=new URLSearchParams,f=new FormData;else try{h=new URLSearchParams(n.body),f=p1(h)}catch{return i()}let v={formMethod:l,formAction:c,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:f,json:void 0,text:void 0};if(Qn(v.formMethod))return{path:e,submission:v};let w=Vs(e);return t&&w.search&&Fm(w.search)&&h.append("index",""),w.search=`?${h}`,{path:Ns(w),submission:v}}function l1(t,e,n,i,o,l,c,h,f,v,w,E,b,R,P,z,M,$,Y){var B;let ee=Y?qn(Y[1])?Y[1].error:Y[1].data:void 0,X=o.createURL(l.location),ne=o.createURL(f),D;if(w&&l.errors){let k=Object.keys(l.errors)[0];D=c.findIndex(Oe=>Oe.route.id===k)}else if(Y&&qn(Y[1])){let k=Y[0];D=c.findIndex(Oe=>Oe.route.id===k)-1}let C=Y?Y[1].statusCode:void 0,T=C&&C>=400,S={currentUrl:X,currentParams:((B=l.matches[0])==null?void 0:B.params)||{},nextUrl:ne,nextParams:c[0].params,...h,actionResult:ee,actionStatus:C},O=c.map((k,Oe)=>{let{route:rt}=k,Ae=null;if(D!=null&&Oe>D?Ae=!1:rt.lazy?Ae=!0:rt.loader==null?Ae=!1:w?Ae=Zp(rt,l.loaderData,l.errors):Y4(l.loaderData,l.matches[Oe],k)&&(Ae=!0),Ae!==null)return em(n,i,t,k,v,e,Ae);let Fe=T?!1:E||X.pathname+X.search===ne.pathname+ne.search||X.search!==ne.search||X4(l.matches[Oe],k),le={...S,defaultShouldRevalidate:Fe},pe=cd(k,le);return em(n,i,t,k,v,e,pe,le)}),V=[];return P.forEach((k,Oe)=>{if(w||!c.some(U=>U.route.id===k.routeId)||R.has(Oe))return;let rt=Ts(M,k.path,$);if(!rt){V.push({key:Oe,routeId:k.routeId,path:k.path,matches:null,match:null,request:null,controller:null});return}if(z.has(Oe))return;let Ae=l.fetchers.get(Oe),Fe=Rl(rt,k.path),le=new AbortController,pe=ga(o,k.path,le.signal),ce=null;if(b.has(Oe))b.delete(Oe),ce=wa(n,i,pe,rt,Fe,v,e);else if(Ae&&Ae.state!=="idle"&&Ae.data===void 0)E&&(ce=wa(n,i,pe,rt,Fe,v,e));else{let U={...S,defaultShouldRevalidate:T?!1:E};cd(Fe,U)&&(ce=wa(n,i,pe,rt,Fe,v,e,U))}ce&&V.push({key:Oe,routeId:k.routeId,path:k.path,matches:ce,match:Fe,request:pe,controller:le})}),{dsMatches:O,revalidatingFetchers:V}}function Zp(t,e,n){if(t.lazy)return!0;if(!t.loader)return!1;let i=e!=null&&t.id in e,o=n!=null&&n[t.id]!==void 0;return!i&&o?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!i&&!o}function Y4(t,e,n){let i=!e||n.route.id!==e.route.id,o=!t.hasOwnProperty(n.route.id);return i||o}function X4(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function cd(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}function u1(t,e,n,i,o){let l;if(t){let f=i[t];$e(f,`No route found to patch children into: routeId = ${t}`),f.children||(f.children=[]),l=f.children}else l=n;let c=e.filter(f=>!l.some(v=>Ux(f,v))),h=ad(c,o,[t||"_","patch",String((l==null?void 0:l.length)||"0")],i);l.push(...h)}function Ux(t,e){return"id"in t&&"id"in e&&t.id===e.id?!0:t.index===e.index&&t.path===e.path&&t.caseSensitive===e.caseSensitive?(!t.children||t.children.length===0)&&(!e.children||e.children.length===0)?!0:t.children.every((n,i)=>{var o;return(o=e.children)==null?void 0:o.some(l=>Ux(n,l))}):!1}var c1=new WeakMap,zx=({key:t,route:e,manifest:n,mapRouteProperties:i})=>{let o=n[e.id];if($e(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let l=o.lazy[t];if(!l)return;let c=c1.get(o);c||(c={},c1.set(o,c));let h=c[t];if(h)return h;let f=(async()=>{let v=x4(t),E=o[t]!==void 0&&t!=="hasErrorBoundary";if(v)At(!v,"Route property "+t+" is not a supported lazy route property. This property will be ignored."),c[t]=Promise.resolve();else if(E)At(!1,`Route "${o.id}" has a static property "${t}" defined. The lazy property will be ignored.`);else{let b=await l();b!=null&&(Object.assign(o,{[t]:b}),Object.assign(o,i(o)))}typeof o.lazy=="object"&&(o.lazy[t]=void 0,Object.values(o.lazy).every(b=>b===void 0)&&(o.lazy=void 0))})();return c[t]=f,f},d1=new WeakMap;function J4(t,e,n,i,o){let l=n[t.id];if($e(l,"No route found in manifest"),!t.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof t.lazy=="function"){let w=d1.get(l);if(w)return{lazyRoutePromise:w,lazyHandlerPromise:w};let E=(async()=>{$e(typeof t.lazy=="function","No lazy route function found");let b=await t.lazy(),R={};for(let P in b){let z=b[P];if(z===void 0)continue;let M=_4(P),Y=l[P]!==void 0&&P!=="hasErrorBoundary";M?At(!M,"Route property "+P+" is not a supported property to be returned from a lazy route function. This property will be ignored."):Y?At(!Y,`Route "${l.id}" has a static property "${P}" defined but its lazy function is also returning a value for this property. The lazy route property "${P}" will be ignored.`):R[P]=z}Object.assign(l,R),Object.assign(l,{...i(l),lazy:void 0})})();return d1.set(l,E),E.catch(()=>{}),{lazyRoutePromise:E,lazyHandlerPromise:E}}let c=Object.keys(t.lazy),h=[],f;for(let w of c){if(o&&o.includes(w))continue;let E=zx({key:w,route:t,manifest:n,mapRouteProperties:i});E&&(h.push(E),w===e&&(f=E))}let v=h.length>0?Promise.all(h).then(()=>{}):void 0;return v==null||v.catch(()=>{}),f==null||f.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:f}}async function h1(t){let e=t.matches.filter(o=>o.shouldLoad),n={};return(await Promise.all(e.map(o=>o.resolve()))).forEach((o,l)=>{n[e[l].route.id]=o}),n}async function Z4(t){return t.matches.some(e=>e.route.unstable_middleware)?$x(t,!1,()=>h1(t),(e,n)=>({[n]:{type:"error",result:e}})):h1(t)}async function $x(t,e,n,i){let{matches:o,request:l,params:c,context:h}=t,f={handlerResult:void 0};try{let v=o.flatMap(E=>E.route.unstable_middleware?E.route.unstable_middleware.map(b=>[E.route.id,b]):[]),w=await Bx({request:l,params:c,context:h},v,e,f,n);return e?w:f.handlerResult}catch(v){if(!f.middlewareError)throw v;let w=await i(f.middlewareError.error,f.middlewareError.routeId);return f.handlerResult?Object.assign(f.handlerResult,w):w}}async function Bx(t,e,n,i,o,l=0){let{request:c}=t;if(c.signal.aborted)throw c.signal.reason?c.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${c.method} ${c.url}`);let h=e[l];if(!h)return i.handlerResult=await o(),i.handlerResult;let[f,v]=h,w=!1,E,b=async()=>{if(w)throw new Error("You may only call `next()` once per middleware");w=!0,await Bx(t,e,n,i,o,l+1)};try{let R=await v({request:t.request,params:t.params,context:t.context},b);return w?R===void 0?E:R:b()}catch(R){throw i.middlewareError?i.middlewareError.error!==R&&(i.middlewareError={routeId:f,error:R}):i.middlewareError={routeId:f,error:R},R}}function Hx(t,e,n,i,o){let l=zx({key:"unstable_middleware",route:i.route,manifest:e,mapRouteProperties:t}),c=J4(i.route,Qn(n.method)?"action":"loader",e,t,o);return{middleware:l,route:c.lazyRoutePromise,handler:c.lazyHandlerPromise}}function em(t,e,n,i,o,l,c,h=null){let f=!1,v=Hx(t,e,n,i,o);return{...i,_lazyPromises:v,shouldLoad:c,unstable_shouldRevalidateArgs:h,unstable_shouldCallHandler(w){return f=!0,h?typeof w=="boolean"?cd(i,{...h,defaultShouldRevalidate:w}):cd(i,h):c},resolve(w){return f||c||w&&n.method==="GET"&&(i.route.lazy||i.route.loader)?tb({request:n,match:i,lazyHandlerPromise:v==null?void 0:v.handler,lazyRoutePromise:v==null?void 0:v.route,handlerOverride:w,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function wa(t,e,n,i,o,l,c,h=null){return i.map(f=>f.route.id!==o.route.id?{...f,shouldLoad:!1,unstable_shouldRevalidateArgs:h,unstable_shouldCallHandler:()=>!1,_lazyPromises:Hx(t,e,n,f,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:em(t,e,n,f,l,c,!0,h))}async function eb(t,e,n,i,o,l){n.some(v=>{var w;return(w=v._lazyPromises)==null?void 0:w.middleware})&&await Promise.all(n.map(v=>{var w;return(w=v._lazyPromises)==null?void 0:w.middleware}));let c={request:e,params:n[0].params,context:o,matches:n},f=await t({...c,fetcherKey:i,unstable_runClientMiddleware:v=>{let w=c;return $x(w,!1,()=>v({...w,fetcherKey:i,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}}),(E,b)=>({[b]:{type:"error",result:E}}))}});try{await Promise.all(n.flatMap(v=>{var w,E;return[(w=v._lazyPromises)==null?void 0:w.handler,(E=v._lazyPromises)==null?void 0:E.route]}))}catch{}return f}async function tb({request:t,match:e,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:o,scopedContext:l}){let c,h,f=Qn(t.method),v=f?"action":"loader",w=E=>{let b,R=new Promise((M,$)=>b=$);h=()=>b(),t.signal.addEventListener("abort",h);let P=M=>typeof E!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${v}" [routeId: ${e.route.id}]`)):E({request:t,params:e.params,context:l},...M!==void 0?[M]:[]),z=(async()=>{try{return{type:"data",result:await(o?o($=>P($)):P())}}catch(M){return{type:"error",result:M}}})();return Promise.race([z,R])};try{let E=f?e.route.action:e.route.loader;if(n||i)if(E){let b,[R]=await Promise.all([w(E).catch(P=>{b=P}),n,i]);if(b!==void 0)throw b;c=R}else{await n;let b=f?e.route.action:e.route.loader;if(b)[c]=await Promise.all([w(b),i]);else if(v==="action"){let R=new URL(t.url),P=R.pathname+R.search;throw dr(405,{method:t.method,pathname:P,routeId:e.route.id})}else return{type:"data",result:void 0}}else if(E)c=await w(E);else{let b=new URL(t.url),R=b.pathname+b.search;throw dr(404,{pathname:R})}}catch(E){return{type:"error",result:E}}finally{h&&t.signal.removeEventListener("abort",h)}return c}async function nb(t){var i,o,l,c,h,f;let{result:e,type:n}=t;if(Kx(e)){let v;try{let w=e.headers.get("Content-Type");w&&/\bapplication\/json\b/.test(w)?e.body==null?v=null:v=await e.json():v=await e.text()}catch(w){return{type:"error",error:w}}return n==="error"?{type:"error",error:new ud(e.status,e.statusText,v),statusCode:e.status,headers:e.headers}:{type:"data",data:v,statusCode:e.status,headers:e.headers}}return n==="error"?x1(e)?e.data instanceof Error?{type:"error",error:e.data,statusCode:(i=e.init)==null?void 0:i.status,headers:(o=e.init)!=null&&o.headers?new Headers(e.init.headers):void 0}:{type:"error",error:new ud(((l=e.init)==null?void 0:l.status)||500,void 0,e.data),statusCode:Ul(e)?e.status:void 0,headers:(c=e.init)!=null&&c.headers?new Headers(e.init.headers):void 0}:{type:"error",error:e,statusCode:Ul(e)?e.status:void 0}:x1(e)?{type:"data",data:e.data,statusCode:(h=e.init)==null?void 0:h.status,headers:(f=e.init)!=null&&f.headers?new Headers(e.init.headers):void 0}:{type:"data",data:e}}function rb(t,e,n,i,o){let l=t.headers.get("Location");if($e(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!Vm.test(l)){let c=i.slice(0,i.findIndex(h=>h.route.id===n)+1);l=Jp(new URL(e.url),c,o,l),t.headers.set("Location",l)}return t}function f1(t,e,n){if(Vm.test(t)){let i=t,o=i.startsWith("//")?new URL(e.protocol+i):new URL(i),l=mr(o.pathname,n)!=null;if(o.origin===e.origin&&l)return o.pathname+o.search+o.hash}return t}function ga(t,e,n,i){let o=t.createURL(Wx(e)).toString(),l={signal:n};if(i&&Qn(i.formMethod)){let{formMethod:c,formEncType:h}=i;l.method=c.toUpperCase(),h==="application/json"?(l.headers=new Headers({"Content-Type":h}),l.body=JSON.stringify(i.json)):h==="text/plain"?l.body=i.text:h==="application/x-www-form-urlencoded"&&i.formData?l.body=tm(i.formData):l.body=i.formData}return new Request(o,l)}function tm(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,typeof i=="string"?i:i.name);return e}function p1(t){let e=new FormData;for(let[n,i]of t.entries())e.append(n,i);return e}function ib(t,e,n,i=!1,o=!1){let l={},c=null,h,f=!1,v={},w=n&&qn(n[1])?n[1].error:void 0;return t.forEach(E=>{if(!(E.route.id in e))return;let b=E.route.id,R=e[b];if($e(!ho(R),"Cannot handle redirect results in processLoaderData"),qn(R)){let P=R.error;if(w!==void 0&&(P=w,w=void 0),c=c||{},o)c[b]=P;else{let z=co(t,b);c[z.route.id]==null&&(c[z.route.id]=P)}i||(l[b]=Fx),f||(f=!0,h=Ul(R.error)?R.error.status:500),R.headers&&(v[b]=R.headers)}else l[b]=R.data,R.statusCode&&R.statusCode!==200&&!f&&(h=R.statusCode),R.headers&&(v[b]=R.headers)}),w!==void 0&&n&&(c={[n[0]]:w},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:c,statusCode:h||200,loaderHeaders:v}}function m1(t,e,n,i,o,l){let{loaderData:c,errors:h}=ib(e,n,i);return o.filter(f=>!f.matches||f.matches.some(v=>v.shouldLoad)).forEach(f=>{let{key:v,match:w,controller:E}=f,b=l[v];if($e(b,"Did not find corresponding fetcher result"),!(E&&E.signal.aborted))if(qn(b)){let R=co(t.matches,w==null?void 0:w.route.id);h&&h[R.route.id]||(h={...h,[R.route.id]:b.error}),t.fetchers.delete(v)}else if(ho(b))$e(!1,"Unhandled fetcher revalidation redirect");else{let R=bs(b.data);t.fetchers.set(v,R)}}),{loaderData:c,errors:h}}function g1(t,e,n,i){let o=Object.entries(e).filter(([,l])=>l!==Fx).reduce((l,[c,h])=>(l[c]=h,l),{});for(let l of n){let c=l.route.id;if(!e.hasOwnProperty(c)&&t.hasOwnProperty(c)&&l.route.loader&&(o[c]=t[c]),i&&i.hasOwnProperty(c))break}return o}function y1(t){return t?qn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function co(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function v1(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function dr(t,{pathname:e,routeId:n,method:i,type:o,message:l}={}){let c="Unknown Server Error",h="Unknown @remix-run/router error";return t===400?(c="Bad Request",i&&e&&n?h=`You made a ${i} request to "${e}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:o==="invalid-body"&&(h="Unable to encode submission body")):t===403?(c="Forbidden",h=`Route "${n}" does not match URL "${e}"`):t===404?(c="Not Found",h=`No route matches URL "${e}"`):t===405&&(c="Method Not Allowed",i&&e&&n?h=`You made a ${i.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(h=`Invalid request method "${i.toUpperCase()}"`)),new ud(t||500,c,new Error(h),!0)}function wc(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[i,o]=e[n];if(ho(o))return{key:i,result:o}}}function Wx(t){let e=typeof t=="string"?Vs(t):t;return Ns({...e,hash:""})}function sb(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function ob(t){return Kx(t.result)&&H4.has(t.result.status)}function qn(t){return t.type==="error"}function ho(t){return(t&&t.type)==="redirect"}function x1(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function Kx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function ab(t){return B4.has(t.toUpperCase())}function Qn(t){return z4.has(t.toUpperCase())}function Fm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Rl(t,e){let n=typeof e=="string"?Vs(e).search:e.search;if(t[t.length-1].route.index&&Fm(n||""))return t[t.length-1];let i=jx(t);return i[i.length-1]}function w1(t){let{formMethod:e,formAction:n,formEncType:i,text:o,formData:l,json:c}=t;if(!(!e||!n||!i)){if(o!=null)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:void 0,text:o};if(l!=null)return{formMethod:e,formAction:n,formEncType:i,formData:l,json:void 0,text:void 0};if(c!==void 0)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:c,text:void 0}}}function np(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function lb(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function El(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ub(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function bs(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function cb(t,e){try{let n=t.sessionStorage.getItem(Vx);if(n){let i=JSON.parse(n);for(let[o,l]of Object.entries(i||{}))l&&Array.isArray(l)&&e.set(o,new Set(l||[]))}}catch{}}function db(t,e){if(e.size>0){let n={};for(let[i,o]of e)n[i]=[...o];try{t.sessionStorage.setItem(Vx,JSON.stringify(n))}catch(i){At(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function hb(){let t,e,n=new Promise((i,o)=>{t=async l=>{i(l);try{await n}catch{}},e=async l=>{o(l);try{await n}catch{}}});return{promise:n,resolve:t,reject:e}}var Po=K.createContext(null);Po.displayName="DataRouter";var Jl=K.createContext(null);Jl.displayName="DataRouterState";var Um=K.createContext({isTransitioning:!1});Um.displayName="ViewTransition";var Gx=K.createContext(new Map);Gx.displayName="Fetchers";var fb=K.createContext(null);fb.displayName="Await";var $r=K.createContext(null);$r.displayName="Navigation";var Qd=K.createContext(null);Qd.displayName="Location";var yr=K.createContext({outlet:null,matches:[],isDataRoute:!1});yr.displayName="Route";var zm=K.createContext(null);zm.displayName="RouteError";function pb(t,{relative:e}={}){$e(Ma(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=K.useContext($r),{hash:o,pathname:l,search:c}=Zl(t,{relative:e}),h=l;return n!=="/"&&(h=l==="/"?n:ai([n,l])),i.createHref({pathname:h,search:c,hash:o})}function Ma(){return K.useContext(Qd)!=null}function Fs(){return $e(Ma(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(Qd).location}var qx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qx(t){K.useContext($r).static||K.useLayoutEffect(t)}function $m(){let{isDataRoute:t}=K.useContext(yr);return t?Pb():mb()}function mb(){$e(Ma(),"useNavigate() may be used only in the context of a <Router> component.");let t=K.useContext(Po),{basename:e,navigator:n}=K.useContext($r),{matches:i}=K.useContext(yr),{pathname:o}=Fs(),l=JSON.stringify(Gd(i)),c=K.useRef(!1);return Qx(()=>{c.current=!0}),K.useCallback((f,v={})=>{if(At(c.current,qx),!c.current)return;if(typeof f=="number"){n.go(f);return}let w=qd(f,JSON.parse(l),o,v.relative==="path");t==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:ai([e,w.pathname])),(v.replace?n.replace:n.push)(w,v.state,v)},[e,n,l,o,t])}var gb=K.createContext(null);function yb(t){let e=K.useContext(yr).outlet;return e&&K.createElement(gb.Provider,{value:t},e)}function vb(){let{matches:t}=K.useContext(yr),e=t[t.length-1];return e?e.params:{}}function Zl(t,{relative:e}={}){let{matches:n}=K.useContext(yr),{pathname:i}=Fs(),o=JSON.stringify(Gd(n));return K.useMemo(()=>qd(t,JSON.parse(o),i,e==="path"),[t,o,i,e])}function xb(t,e,n,i){$e(Ma(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=K.useContext($r),{matches:c}=K.useContext(yr),h=c[c.length-1],f=h?h.params:{},v=h?h.pathname:"/",w=h?h.pathnameBase:"/",E=h&&h.route;{let Y=E&&E.path||"";Yx(v,!E||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let b=Fs(),R;R=b;let P=R.pathname||"/",z=P;if(w!=="/"){let Y=w.replace(/^\//,"").split("/");z="/"+P.replace(/^\//,"").split("/").slice(Y.length).join("/")}let M=!l&&n&&n.matches&&n.matches.length>0?n.matches:Ts(t,{pathname:z});return At(E||M!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),At(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Ib(M&&M.map(Y=>Object.assign({},Y,{params:Object.assign({},f,Y.params),pathname:ai([w,o.encodeLocation?o.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?w:ai([w,o.encodeLocation?o.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),c,n,i)}function wb(){let t=kb(),e=Ul(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:l},"ErrorBoundary")," or"," ",K.createElement("code",{style:l},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),n?K.createElement("pre",{style:o},n):null,c)}var _b=K.createElement(wb,null),Eb=class extends K.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?K.createElement(yr.Provider,{value:this.props.routeContext},K.createElement(zm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bb({routeContext:t,match:e,children:n}){let i=K.useContext(Po);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),K.createElement(yr.Provider,{value:t},n)}function Ib(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=n==null?void 0:n.errors;if(l!=null){let f=o.findIndex(v=>v.route.id&&(l==null?void 0:l[v.route.id])!==void 0);$e(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,h=-1;if(n)for(let f=0;f<o.length;f++){let v=o[f];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=f),v.route.id){let{loaderData:w,errors:E}=n,b=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!E||E[v.route.id]===void 0);if(v.route.lazy||b){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,v,w)=>{let E,b=!1,R=null,P=null;n&&(E=l&&v.route.id?l[v.route.id]:void 0,R=v.route.errorElement||_b,c&&(h<0&&w===0?(Yx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,P=null):h===w&&(b=!0,P=v.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,w+1)),M=()=>{let $;return E?$=R:b?$=P:v.route.Component?$=K.createElement(v.route.Component,null):v.route.element?$=v.route.element:$=f,K.createElement(bb,{match:v,routeContext:{outlet:f,matches:z,isDataRoute:n!=null},children:$})};return n&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?K.createElement(Eb,{location:n.location,revalidation:n.revalidation,component:R,error:E,children:M(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):M()},null)}function Bm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tb(t){let e=K.useContext(Po);return $e(e,Bm(t)),e}function Sb(t){let e=K.useContext(Jl);return $e(e,Bm(t)),e}function Cb(t){let e=K.useContext(yr);return $e(e,Bm(t)),e}function Hm(t){let e=Cb(t),n=e.matches[e.matches.length-1];return $e(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function Rb(){return Hm("useRouteId")}function kb(){var i;let t=K.useContext(zm),e=Sb("useRouteError"),n=Hm("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function Pb(){let{router:t}=Tb("useNavigate"),e=Hm("useNavigate"),n=K.useRef(!1);return Qx(()=>{n.current=!0}),K.useCallback(async(o,l={})=>{At(n.current,qx),n.current&&(typeof o=="number"?t.navigate(o):await t.navigate(o,{fromRouteId:e,...l}))},[t,e])}var _1={};function Yx(t,e,n){!e&&!_1[t]&&(_1[t]=!0,At(!1,n))}var E1={};function b1(t,e){!t&&!E1[e]&&(E1[e]=!0,console.warn(e))}function Ab(t){let e={hasErrorBoundary:t.hasErrorBoundary||t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&(t.element&&At(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(e,{element:K.createElement(t.Component),Component:void 0})),t.HydrateFallback&&(t.hydrateFallbackElement&&At(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(e,{hydrateFallbackElement:K.createElement(t.HydrateFallback),HydrateFallback:void 0})),t.ErrorBoundary&&(t.errorElement&&At(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(e,{errorElement:K.createElement(t.ErrorBoundary),ErrorBoundary:void 0})),e}var Nb=["HydrateFallback","hydrateFallbackElement"],Db=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",e(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function Ob({router:t,flushSync:e}){let[n,i]=K.useState(t.state),[o,l]=K.useState(),[c,h]=K.useState({isTransitioning:!1}),[f,v]=K.useState(),[w,E]=K.useState(),[b,R]=K.useState(),P=K.useRef(new Map),z=K.useCallback((ee,{deletedFetchers:X,flushSync:ne,viewTransitionOpts:D})=>{ee.fetchers.forEach((T,S)=>{T.data!==void 0&&P.current.set(S,T.data)}),X.forEach(T=>P.current.delete(T)),b1(ne===!1||e!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let C=t.window!=null&&t.window.document!=null&&typeof t.window.document.startViewTransition=="function";if(b1(D==null||C,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!D||!C){e&&ne?e(()=>i(ee)):K.startTransition(()=>i(ee));return}if(e&&ne){e(()=>{w&&(f&&f.resolve(),w.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:D.currentLocation,nextLocation:D.nextLocation})});let T=t.window.document.startViewTransition(()=>{e(()=>i(ee))});T.finished.finally(()=>{e(()=>{v(void 0),E(void 0),l(void 0),h({isTransitioning:!1})})}),e(()=>E(T));return}w?(f&&f.resolve(),w.skipTransition(),R({state:ee,currentLocation:D.currentLocation,nextLocation:D.nextLocation})):(l(ee),h({isTransitioning:!0,flushSync:!1,currentLocation:D.currentLocation,nextLocation:D.nextLocation}))},[t.window,e,w,f]);K.useLayoutEffect(()=>t.subscribe(z),[t,z]),K.useEffect(()=>{c.isTransitioning&&!c.flushSync&&v(new Db)},[c]),K.useEffect(()=>{if(f&&o&&t.window){let ee=o,X=f.promise,ne=t.window.document.startViewTransition(async()=>{K.startTransition(()=>i(ee)),await X});ne.finished.finally(()=>{v(void 0),E(void 0),l(void 0),h({isTransitioning:!1})}),E(ne)}},[o,f,t.window]),K.useEffect(()=>{f&&o&&n.location.key===o.location.key&&f.resolve()},[f,w,n.location,o]),K.useEffect(()=>{!c.isTransitioning&&b&&(l(b.state),h({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),R(void 0))},[c.isTransitioning,b]);let M=K.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:ee=>t.navigate(ee),push:(ee,X,ne)=>t.navigate(ee,{state:X,preventScrollReset:ne==null?void 0:ne.preventScrollReset}),replace:(ee,X,ne)=>t.navigate(ee,{replace:!0,state:X,preventScrollReset:ne==null?void 0:ne.preventScrollReset})}),[t]),$=t.basename||"/",Y=K.useMemo(()=>({router:t,navigator:M,static:!1,basename:$}),[t,M,$]);return K.createElement(K.Fragment,null,K.createElement(Po.Provider,{value:Y},K.createElement(Jl.Provider,{value:n},K.createElement(Gx.Provider,{value:P.current},K.createElement(Um.Provider,{value:c},K.createElement(Mb,{basename:$,location:n.location,navigationType:n.historyAction,navigator:M},K.createElement(Lb,{routes:t.routes,future:t.future,state:n})))))),null)}var Lb=K.memo(jb);function jb({routes:t,future:e,state:n}){return xb(t,void 0,n,e)}function nm({to:t,replace:e,state:n,relative:i}){$e(Ma(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=K.useContext($r);At(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=K.useContext(yr),{pathname:c}=Fs(),h=$m(),f=qd(t,Gd(l),c,i==="path"),v=JSON.stringify(f);return K.useEffect(()=>{h(JSON.parse(v),{replace:e,state:n,relative:i})},[h,v,i,e,n]),null}function Xx(t){return yb(t.context)}function Gt(t){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Mb({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:o,static:l=!1}){$e(!Ma(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),h=K.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof n=="string"&&(n=Vs(n));let{pathname:f="/",search:v="",hash:w="",state:E=null,key:b="default"}=n,R=K.useMemo(()=>{let P=mr(f,c);return P==null?null:{location:{pathname:P,search:v,hash:w,state:E,key:b},navigationType:i}},[c,f,v,w,E,b,i]);return At(R!=null,`<Router basename="${c}"> is not able to match the URL "${f}${v}${w}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:K.createElement($r.Provider,{value:h},K.createElement(Qd.Provider,{children:e,value:R}))}function rm(t,e=[]){let n=[];return K.Children.forEach(t,(i,o)=>{if(!K.isValidElement(i))return;let l=[...e,o];if(i.type===K.Fragment){n.push.apply(n,rm(i.props.children,l));return}$e(i.type===Gt,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=rm(i.props.children,l)),n.push(c)}),n}var Vb=rm,Kc="get",Gc="application/x-www-form-urlencoded";function Yd(t){return t!=null&&typeof t.tagName=="string"}function Fb(t){return Yd(t)&&t.tagName.toLowerCase()==="button"}function Ub(t){return Yd(t)&&t.tagName.toLowerCase()==="form"}function zb(t){return Yd(t)&&t.tagName.toLowerCase()==="input"}function $b(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Bb(t,e){return t.button===0&&(!e||e==="_self")&&!$b(t)}var _c=null;function Hb(){if(_c===null)try{new FormData(document.createElement("form"),0),_c=!1}catch{_c=!0}return _c}var Wb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rp(t){return t!=null&&!Wb.has(t)?(At(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gc}"`),null):t}function Kb(t,e){let n,i,o,l,c;if(Ub(t)){let h=t.getAttribute("action");i=h?mr(h,e):null,n=t.getAttribute("method")||Kc,o=rp(t.getAttribute("enctype"))||Gc,l=new FormData(t)}else if(Fb(t)||zb(t)&&(t.type==="submit"||t.type==="image")){let h=t.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=t.getAttribute("formaction")||h.getAttribute("action");if(i=f?mr(f,e):null,n=t.getAttribute("formmethod")||h.getAttribute("method")||Kc,o=rp(t.getAttribute("formenctype"))||rp(h.getAttribute("enctype"))||Gc,l=new FormData(h,t),!Hb()){let{name:v,type:w,value:E}=t;if(w==="image"){let b=v?`${v}.`:"";l.append(`${b}x`,"0"),l.append(`${b}y`,"0")}else v&&l.append(v,E)}}else{if(Yd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Kc,i=null,o=Gc,c=t}return l&&o==="text/plain"&&(c=l,l=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:l,body:c}}function Wm(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function Gb(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qb(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Qb(t,e,n){let i=await Promise.all(t.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await Gb(l,n);return c.links?c.links():[]}return[]}));return Zb(i.flat(1).filter(qb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function I1(t,e,n,i,o,l){let c=(f,v)=>n[v]?f.route.id!==n[v].route.id:!0,h=(f,v)=>{var w;return n[v].pathname!==f.pathname||((w=n[v].route.path)==null?void 0:w.endsWith("*"))&&n[v].params["*"]!==f.params["*"]};return l==="assets"?e.filter((f,v)=>c(f,v)||h(f,v)):l==="data"?e.filter((f,v)=>{var E;let w=i.routes[f.route.id];if(!w||!w.hasLoader)return!1;if(c(f,v)||h(f,v))return!0;if(f.route.shouldRevalidate){let b=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((E=n[0])==null?void 0:E.params)||{},nextUrl:new URL(t,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function Yb(t,e,{includeHydrateFallback:n}={}){return Xb(t.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Xb(t){return[...new Set(t)]}function Jb(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function Zb(t,e){let n=new Set;return new Set(e),t.reduce((i,o)=>{let l=JSON.stringify(Jb(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var eI=new Set([100,101,204,205]);function tI(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&mr(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Jx(){let t=K.useContext(Po);return Wm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function nI(){let t=K.useContext(Jl);return Wm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Km=K.createContext(void 0);Km.displayName="FrameworkContext";function Zx(){let t=K.useContext(Km);return Wm(t,"You must render this element inside a <HydratedRouter> element"),t}function rI(t,e){let n=K.useContext(Km),[i,o]=K.useState(!1),[l,c]=K.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:v,onMouseLeave:w,onTouchStart:E}=e,b=K.useRef(null);K.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let z=$=>{$.forEach(Y=>{c(Y.isIntersecting)})},M=new IntersectionObserver(z,{threshold:.5});return b.current&&M.observe(b.current),()=>{M.disconnect()}}},[t]),K.useEffect(()=>{if(i){let z=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(z)}}},[i]);let R=()=>{o(!0)},P=()=>{o(!1),c(!1)};return n?t!=="intent"?[l,b,{}]:[l,b,{onFocus:bl(h,R),onBlur:bl(f,P),onMouseEnter:bl(v,R),onMouseLeave:bl(w,P),onTouchStart:bl(E,R)}]:[!1,b,{}]}function bl(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function iI({page:t,...e}){let{router:n}=Jx(),i=K.useMemo(()=>Ts(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?K.createElement(oI,{page:t,matches:i,...e}):null}function sI(t){let{manifest:e,routeModules:n}=Zx(),[i,o]=K.useState([]);return K.useEffect(()=>{let l=!1;return Qb(t,e,n).then(c=>{l||o(c)}),()=>{l=!0}},[t,e,n]),i}function oI({page:t,matches:e,...n}){let i=Fs(),{manifest:o,routeModules:l}=Zx(),{basename:c}=Jx(),{loaderData:h,matches:f}=nI(),v=K.useMemo(()=>I1(t,e,f,o,i,"data"),[t,e,f,o,i]),w=K.useMemo(()=>I1(t,e,f,o,i,"assets"),[t,e,f,o,i]),E=K.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let P=new Set,z=!1;if(e.forEach($=>{var ee;let Y=o.routes[$.route.id];!Y||!Y.hasLoader||(!v.some(X=>X.route.id===$.route.id)&&$.route.id in h&&((ee=l[$.route.id])!=null&&ee.shouldRevalidate)||Y.hasClientLoader?z=!0:P.add($.route.id))}),P.size===0)return[];let M=tI(t,c);return z&&P.size>0&&M.searchParams.set("_routes",e.filter($=>P.has($.route.id)).map($=>$.route.id).join(",")),[M.pathname+M.search]},[c,h,i,o,v,e,t,l]),b=K.useMemo(()=>Yb(w,o),[w,o]),R=sI(w);return K.createElement(K.Fragment,null,E.map(P=>K.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),b.map(P=>K.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),R.map(({key:P,link:z})=>K.createElement("link",{key:P,...z})))}function aI(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var ew=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ew&&(window.__reactRouterVersion="7.6.0")}catch{}function lI(t,e){return q4({basename:e==null?void 0:e.basename,unstable_getContext:e==null?void 0:e.unstable_getContext,future:e==null?void 0:e.future,history:m4({window:e==null?void 0:e.window}),hydrationData:uI(),routes:t,mapRouteProperties:Ab,hydrationRouteProperties:Nb,dataStrategy:e==null?void 0:e.dataStrategy,patchRoutesOnNavigation:e==null?void 0:e.patchRoutesOnNavigation,window:e==null?void 0:e.window}).initialize()}function uI(){let t=window==null?void 0:window.__staticRouterHydrationData;return t&&t.errors&&(t={...t,errors:cI(t.errors)}),t}function cI(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,o]of e)if(o&&o.__type==="RouteErrorResponse")n[i]=new ud(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let l=window[o.__subType];if(typeof l=="function")try{let c=new l(o.message);c.stack="",n[i]=c}catch{}}if(n[i]==null){let l=new Error(o.message);l.stack="",n[i]=l}}else n[i]=o;return n}var tw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pr=K.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:o,reloadDocument:l,replace:c,state:h,target:f,to:v,preventScrollReset:w,viewTransition:E,...b},R){let{basename:P}=K.useContext($r),z=typeof v=="string"&&tw.test(v),M,$=!1;if(typeof v=="string"&&z&&(M=v,ew))try{let S=new URL(window.location.href),O=v.startsWith("//")?new URL(S.protocol+v):new URL(v),V=mr(O.pathname,P);O.origin===S.origin&&V!=null?v=V+O.search+O.hash:$=!0}catch{At(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=pb(v,{relative:o}),[ee,X,ne]=rI(i,b),D=hI(v,{replace:c,state:h,target:f,preventScrollReset:w,relative:o,viewTransition:E});function C(S){e&&e(S),S.defaultPrevented||D(S)}let T=K.createElement("a",{...b,...ne,href:M||Y,onClick:$||l?e:C,ref:aI(R,X),target:f,"data-discover":!z&&n==="render"?"true":void 0});return ee&&!z?K.createElement(K.Fragment,null,T,K.createElement(iI,{page:Y})):T});pr.displayName="Link";var dd=K.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:o=!1,style:l,to:c,viewTransition:h,children:f,...v},w){let E=Zl(c,{relative:v.relative}),b=Fs(),R=K.useContext(Jl),{navigator:P,basename:z}=K.useContext($r),M=R!=null&&yI(E)&&h===!0,$=P.encodeLocation?P.encodeLocation(E).pathname:E.pathname,Y=b.pathname,ee=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;n||(Y=Y.toLowerCase(),ee=ee?ee.toLowerCase():null,$=$.toLowerCase()),ee&&z&&(ee=mr(ee,z)||ee);const X=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let ne=Y===$||!o&&Y.startsWith($)&&Y.charAt(X)==="/",D=ee!=null&&(ee===$||!o&&ee.startsWith($)&&ee.charAt($.length)==="/"),C={isActive:ne,isPending:D,isTransitioning:M},T=ne?e:void 0,S;typeof i=="function"?S=i(C):S=[i,ne?"active":null,D?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let O=typeof l=="function"?l(C):l;return K.createElement(pr,{...v,"aria-current":T,className:S,ref:w,style:O,to:c,viewTransition:h},typeof f=="function"?f(C):f)});dd.displayName="NavLink";var nw=K.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:o,state:l,method:c=Kc,action:h,onSubmit:f,relative:v,preventScrollReset:w,viewTransition:E,...b},R)=>{let P=mI(),z=gI(h,{relative:v}),M=c.toLowerCase()==="get"?"get":"post",$=typeof h=="string"&&tw.test(h),Y=ee=>{if(f&&f(ee),ee.defaultPrevented)return;ee.preventDefault();let X=ee.nativeEvent.submitter,ne=(X==null?void 0:X.getAttribute("formmethod"))||c;P(X||ee.currentTarget,{fetcherKey:e,method:ne,navigate:n,replace:o,state:l,relative:v,preventScrollReset:w,viewTransition:E})};return K.createElement("form",{ref:R,method:M,action:z,onSubmit:i?f:Y,...b,"data-discover":!$&&t==="render"?"true":void 0})});nw.displayName="Form";function dI(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rw(t){let e=K.useContext(Po);return $e(e,dI(t)),e}function hI(t,{target:e,replace:n,state:i,preventScrollReset:o,relative:l,viewTransition:c}={}){let h=$m(),f=Fs(),v=Zl(t,{relative:l});return K.useCallback(w=>{if(Bb(w,e)){w.preventDefault();let E=n!==void 0?n:Ns(f)===Ns(v);h(t,{replace:E,state:i,preventScrollReset:o,relative:l,viewTransition:c})}},[f,h,v,n,i,e,t,o,l,c])}var fI=0,pI=()=>`__${String(++fI)}__`;function mI(){let{router:t}=rw("useSubmit"),{basename:e}=K.useContext($r),n=Rb();return K.useCallback(async(i,o={})=>{let{action:l,method:c,encType:h,formData:f,body:v}=Kb(i,e);if(o.navigate===!1){let w=o.fetcherKey||pI();await t.fetch(w,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:v,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await t.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:v,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[t,e,n])}function gI(t,{relative:e}={}){let{basename:n}=K.useContext($r),i=K.useContext(yr);$e(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...Zl(t||".",{relative:e})},c=Fs();if(t==null){l.search=c.search;let h=new URLSearchParams(l.search),f=h.getAll("index");if(f.some(w=>w==="")){h.delete("index"),f.filter(E=>E).forEach(E=>h.append("index",E));let w=h.toString();l.search=w?`?${w}`:""}}return(!t||t===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:ai([n,l.pathname])),Ns(l)}function yI(t,e={}){let n=K.useContext(Um);$e(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=rw("useViewTransitionState"),o=Zl(t,{relative:e.relative});if(!n.isTransitioning)return!1;let l=mr(n.currentLocation.pathname,i)||n.currentLocation.pathname,c=mr(n.nextLocation.pathname,i)||n.nextLocation.pathname;return ld(o.pathname,c)!=null||ld(o.pathname,l)!=null}[...eI];var vI=Ax();/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xI(t){return K.createElement(Ob,{flushSync:vI.flushSync,...t})}var jn=function(){return jn=Object.assign||function(e){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},jn.apply(this,arguments)};function Gm(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]]);return n}function hd(t,e,n){if(n||arguments.length===2)for(var i=0,o=e.length,l;i<o;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return t.concat(l||Array.prototype.slice.call(e))}var wt="-ms-",Nl="-moz-",lt="-webkit-",iw="comm",Xd="rule",qm="decl",wI="@import",sw="@keyframes",_I="@layer",ow=Math.abs,Qm=String.fromCharCode,im=Object.assign;function EI(t,e){return Qt(t,0)^45?(((e<<2^Qt(t,0))<<2^Qt(t,1))<<2^Qt(t,2))<<2^Qt(t,3):0}function aw(t){return t.trim()}function Li(t,e){return(t=e.exec(t))?t[0]:t}function Be(t,e,n){return t.replace(e,n)}function qc(t,e,n){return t.indexOf(e,n)}function Qt(t,e){return t.charCodeAt(e)|0}function Ta(t,e,n){return t.slice(e,n)}function oi(t){return t.length}function lw(t){return t.length}function kl(t,e){return e.push(t),t}function bI(t,e){return t.map(e).join("")}function T1(t,e){return t.filter(function(n){return!Li(n,e)})}var Jd=1,Sa=1,uw=0,gr=0,Lt=0,Va="";function Zd(t,e,n,i,o,l,c,h){return{value:t,root:e,parent:n,type:i,props:o,children:l,line:Jd,column:Sa,length:c,return:"",siblings:h}}function Is(t,e){return im(Zd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ma(t){for(;t.root;)t=Is(t.root,{children:[t]});kl(t,t.siblings)}function II(){return Lt}function TI(){return Lt=gr>0?Qt(Va,--gr):0,Sa--,Lt===10&&(Sa=1,Jd--),Lt}function Fr(){return Lt=gr<uw?Qt(Va,gr++):0,Sa++,Lt===10&&(Sa=1,Jd++),Lt}function go(){return Qt(Va,gr)}function Qc(){return gr}function eh(t,e){return Ta(Va,t,e)}function sm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function SI(t){return Jd=Sa=1,uw=oi(Va=t),gr=0,[]}function CI(t){return Va="",t}function ip(t){return aw(eh(gr-1,om(t===91?t+2:t===40?t+1:t)))}function RI(t){for(;(Lt=go())&&Lt<33;)Fr();return sm(t)>2||sm(Lt)>3?"":" "}function kI(t,e){for(;--e&&Fr()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return eh(t,Qc()+(e<6&&go()==32&&Fr()==32))}function om(t){for(;Fr();)switch(Lt){case t:return gr;case 34:case 39:t!==34&&t!==39&&om(Lt);break;case 40:t===41&&om(t);break;case 92:Fr();break}return gr}function PI(t,e){for(;Fr()&&t+Lt!==57;)if(t+Lt===84&&go()===47)break;return"/*"+eh(e,gr-1)+"*"+Qm(t===47?t:Fr())}function AI(t){for(;!sm(go());)Fr();return eh(t,gr)}function NI(t){return CI(Yc("",null,null,null,[""],t=SI(t),0,[0],t))}function Yc(t,e,n,i,o,l,c,h,f){for(var v=0,w=0,E=c,b=0,R=0,P=0,z=1,M=1,$=1,Y=0,ee="",X=o,ne=l,D=i,C=ee;M;)switch(P=Y,Y=Fr()){case 40:if(P!=108&&Qt(C,E-1)==58){qc(C+=Be(ip(Y),"&","&\f"),"&\f",ow(v?h[v-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:C+=ip(Y);break;case 9:case 10:case 13:case 32:C+=RI(P);break;case 92:C+=kI(Qc()-1,7);continue;case 47:switch(go()){case 42:case 47:kl(DI(PI(Fr(),Qc()),e,n,f),f);break;default:C+="/"}break;case 123*z:h[v++]=oi(C)*$;case 125*z:case 59:case 0:switch(Y){case 0:case 125:M=0;case 59+w:$==-1&&(C=Be(C,/\f/g,"")),R>0&&oi(C)-E&&kl(R>32?C1(C+";",i,n,E-1,f):C1(Be(C," ","")+";",i,n,E-2,f),f);break;case 59:C+=";";default:if(kl(D=S1(C,e,n,v,w,o,h,ee,X=[],ne=[],E,l),l),Y===123)if(w===0)Yc(C,e,D,D,X,l,E,h,ne);else switch(b===99&&Qt(C,3)===110?100:b){case 100:case 108:case 109:case 115:Yc(t,D,D,i&&kl(S1(t,D,D,0,0,o,h,ee,o,X=[],E,ne),ne),o,ne,E,h,i?X:ne);break;default:Yc(C,D,D,D,[""],ne,0,h,ne)}}v=w=R=0,z=$=1,ee=C="",E=c;break;case 58:E=1+oi(C),R=P;default:if(z<1){if(Y==123)--z;else if(Y==125&&z++==0&&TI()==125)continue}switch(C+=Qm(Y),Y*z){case 38:$=w>0?1:(C+="\f",-1);break;case 44:h[v++]=(oi(C)-1)*$,$=1;break;case 64:go()===45&&(C+=ip(Fr())),b=go(),w=E=oi(ee=C+=AI(Qc())),Y++;break;case 45:P===45&&oi(C)==2&&(z=0)}}return l}function S1(t,e,n,i,o,l,c,h,f,v,w,E){for(var b=o-1,R=o===0?l:[""],P=lw(R),z=0,M=0,$=0;z<i;++z)for(var Y=0,ee=Ta(t,b+1,b=ow(M=c[z])),X=t;Y<P;++Y)(X=aw(M>0?R[Y]+" "+ee:Be(ee,/&\f/g,R[Y])))&&(f[$++]=X);return Zd(t,e,n,o===0?Xd:h,f,v,w,E)}function DI(t,e,n,i){return Zd(t,e,n,iw,Qm(II()),Ta(t,2,-2),0,i)}function C1(t,e,n,i,o){return Zd(t,e,n,qm,Ta(t,0,i),Ta(t,i+1,-1),i,o)}function cw(t,e,n){switch(EI(t,e)){case 5103:return lt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return lt+t+t;case 4789:return Nl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return lt+t+Nl+t+wt+t+t;case 5936:switch(Qt(t,e+11)){case 114:return lt+t+wt+Be(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return lt+t+wt+Be(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return lt+t+wt+Be(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return lt+t+wt+t+t;case 6165:return lt+t+wt+"flex-"+t+t;case 5187:return lt+t+Be(t,/(\w+).+(:[^]+)/,lt+"box-$1$2"+wt+"flex-$1$2")+t;case 5443:return lt+t+wt+"flex-item-"+Be(t,/flex-|-self/g,"")+(Li(t,/flex-|baseline/)?"":wt+"grid-row-"+Be(t,/flex-|-self/g,""))+t;case 4675:return lt+t+wt+"flex-line-pack"+Be(t,/align-content|flex-|-self/g,"")+t;case 5548:return lt+t+wt+Be(t,"shrink","negative")+t;case 5292:return lt+t+wt+Be(t,"basis","preferred-size")+t;case 6060:return lt+"box-"+Be(t,"-grow","")+lt+t+wt+Be(t,"grow","positive")+t;case 4554:return lt+Be(t,/([^-])(transform)/g,"$1"+lt+"$2")+t;case 6187:return Be(Be(Be(t,/(zoom-|grab)/,lt+"$1"),/(image-set)/,lt+"$1"),t,"")+t;case 5495:case 3959:return Be(t,/(image-set\([^]*)/,lt+"$1$`$1");case 4968:return Be(Be(t,/(.+:)(flex-)?(.*)/,lt+"box-pack:$3"+wt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+lt+t+t;case 4200:if(!Li(t,/flex-|baseline/))return wt+"grid-column-align"+Ta(t,e)+t;break;case 2592:case 3360:return wt+Be(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,o){return e=o,Li(i.props,/grid-\w+-end/)})?~qc(t+(n=n[e].value),"span",0)?t:wt+Be(t,"-start","")+t+wt+"grid-row-span:"+(~qc(n,"span",0)?Li(n,/\d+/):+Li(n,/\d+/)-+Li(t,/\d+/))+";":wt+Be(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Li(i.props,/grid-\w+-start/)})?t:wt+Be(Be(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Be(t,/(.+)-inline(.+)/,lt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(oi(t)-1-e>6)switch(Qt(t,e+1)){case 109:if(Qt(t,e+4)!==45)break;case 102:return Be(t,/(.+:)(.+)-([^]+)/,"$1"+lt+"$2-$3$1"+Nl+(Qt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~qc(t,"stretch",0)?cw(Be(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Be(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,c,h,f,v){return wt+o+":"+l+v+(c?wt+o+"-span:"+(h?f:+f-+l)+v:"")+t});case 4949:if(Qt(t,e+6)===121)return Be(t,":",":"+lt)+t;break;case 6444:switch(Qt(t,Qt(t,14)===45?18:11)){case 120:return Be(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+lt+(Qt(t,14)===45?"inline-":"")+"box$3$1"+lt+"$2$3$1"+wt+"$2box$3")+t;case 100:return Be(t,":",":"+wt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(t,"scroll-","scroll-snap-")+t}return t}function fd(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function OI(t,e,n,i){switch(t.type){case _I:if(t.children.length)break;case wI:case qm:return t.return=t.return||t.value;case iw:return"";case sw:return t.return=t.value+"{"+fd(t.children,i)+"}";case Xd:if(!oi(t.value=t.props.join(",")))return""}return oi(n=fd(t.children,i))?t.return=t.value+"{"+n+"}":""}function LI(t){var e=lw(t);return function(n,i,o,l){for(var c="",h=0;h<e;h++)c+=t[h](n,i,o,l)||"";return c}}function jI(t){return function(e){e.root||(e=e.return)&&t(e)}}function MI(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case qm:t.return=cw(t.value,t.length,n);return;case sw:return fd([Is(t,{value:Be(t.value,"@","@"+lt)})],i);case Xd:if(t.length)return bI(n=t.props,function(o){switch(Li(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ma(Is(t,{props:[Be(o,/:(read-\w+)/,":"+Nl+"$1")]})),ma(Is(t,{props:[o]})),im(t,{props:T1(n,i)});break;case"::placeholder":ma(Is(t,{props:[Be(o,/:(plac\w+)/,":"+lt+"input-$1")]})),ma(Is(t,{props:[Be(o,/:(plac\w+)/,":"+Nl+"$1")]})),ma(Is(t,{props:[Be(o,/:(plac\w+)/,wt+"input-$1")]})),ma(Is(t,{props:[o]})),im(t,{props:T1(n,i)});break}return""})}}var VI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gn={},Ca=typeof process<"u"&&Gn!==void 0&&(Gn.REACT_APP_SC_ATTR||Gn.SC_ATTR)||"data-styled",dw="active",hw="data-styled-version",th="6.1.13",Ym=`/*!sc*/
`,pd=typeof window<"u"&&"HTMLElement"in window,FI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gn!==void 0&&Gn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gn.REACT_APP_SC_DISABLE_SPEEDY!==""?Gn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gn!==void 0&&Gn.SC_DISABLE_SPEEDY!==void 0&&Gn.SC_DISABLE_SPEEDY!==""&&Gn.SC_DISABLE_SPEEDY!=="false"&&Gn.SC_DISABLE_SPEEDY),nh=Object.freeze([]),Ra=Object.freeze({});function UI(t,e,n){return n===void 0&&(n=Ra),t.theme!==n.theme&&t.theme||e||n.theme}var fw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$I=/(^-|-$)/g;function R1(t){return t.replace(zI,"-").replace($I,"")}var BI=/(a)(d)/gi,Ec=52,k1=function(t){return String.fromCharCode(t+(t>25?39:97))};function am(t){var e,n="";for(e=Math.abs(t);e>Ec;e=e/Ec|0)n=k1(e%Ec)+n;return(k1(e%Ec)+n).replace(BI,"$1-$2")}var sp,pw=5381,xa=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},mw=function(t){return xa(pw,t)};function HI(t){return am(mw(t)>>>0)}function WI(t){return t.displayName||t.name||"Component"}function op(t){return typeof t=="string"&&!0}var gw=typeof Symbol=="function"&&Symbol.for,yw=gw?Symbol.for("react.memo"):60115,KI=gw?Symbol.for("react.forward_ref"):60112,GI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},QI=((sp={})[KI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sp[yw]=vw,sp);function P1(t){return("type"in(e=t)&&e.type.$$typeof)===yw?vw:"$$typeof"in t?QI[t.$$typeof]:GI;var e}var YI=Object.defineProperty,XI=Object.getOwnPropertyNames,A1=Object.getOwnPropertySymbols,JI=Object.getOwnPropertyDescriptor,ZI=Object.getPrototypeOf,N1=Object.prototype;function xw(t,e,n){if(typeof e!="string"){if(N1){var i=ZI(e);i&&i!==N1&&xw(t,i,n)}var o=XI(e);A1&&(o=o.concat(A1(e)));for(var l=P1(t),c=P1(e),h=0;h<o.length;++h){var f=o[h];if(!(f in qI||n&&n[f]||c&&f in c||l&&f in l)){var v=JI(e,f);try{YI(t,f,v)}catch{}}}}return t}function ka(t){return typeof t=="function"}function Xm(t){return typeof t=="object"&&"styledComponentId"in t}function fo(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function D1(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function zl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function lm(t,e,n){if(n===void 0&&(n=!1),!n&&!zl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=lm(t[i],e[i]);else if(zl(e))for(var i in e)t[i]=lm(t[i],e[i]);return t}function Jm(t,e){Object.defineProperty(t,"toString",{value:e})}function eu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var eT=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;e>=l;)if((l<<=1)<0)throw eu(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=o;c<l;c++)this.groupSizes[c]=0}for(var h=this.indexOfGroup(e+1),f=(c=0,n.length);c<f;c++)this.tag.insertRule(h,n[c])&&(this.groupSizes[e]++,h++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),o=i+n;this.groupSizes[e]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],o=this.indexOfGroup(e),l=o+i,c=o;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(Ym);return n},t}(),Xc=new Map,md=new Map,Jc=1,bc=function(t){if(Xc.has(t))return Xc.get(t);for(;md.has(Jc);)Jc++;var e=Jc++;return Xc.set(t,e),md.set(e,t),e},tT=function(t,e){Jc=e+1,Xc.set(t,e),md.set(e,t)},nT="style[".concat(Ca,"][").concat(hw,'="').concat(th,'"]'),rT=new RegExp("^".concat(Ca,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),iT=function(t,e,n){for(var i,o=n.split(","),l=0,c=o.length;l<c;l++)(i=o[l])&&t.registerName(e,i)},sT=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(Ym),o=[],l=0,c=i.length;l<c;l++){var h=i[l].trim();if(h){var f=h.match(rT);if(f){var v=0|parseInt(f[1],10),w=f[2];v!==0&&(tT(w,v),iT(t,w,f[3]),t.getTag().insertRules(v,o)),o.length=0}else o.push(h)}}},O1=function(t){for(var e=document.querySelectorAll(nT),n=0,i=e.length;n<i;n++){var o=e[n];o&&o.getAttribute(Ca)!==dw&&(sT(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function oT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ww=function(t){var e=document.head,n=t||e,i=document.createElement("style"),o=function(h){var f=Array.from(h.querySelectorAll("style[".concat(Ca,"]")));return f[f.length-1]}(n),l=o!==void 0?o.nextSibling:null;i.setAttribute(Ca,dw),i.setAttribute(hw,th);var c=oT();return c&&i.setAttribute("nonce",c),n.insertBefore(i,l),i},aT=function(){function t(e){this.element=ww(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var c=i[o];if(c.ownerNode===n)return c}throw eu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),lT=function(){function t(e){this.element=ww(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),uT=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),L1=pd,cT={isServer:!pd,useCSSOMInjection:!FI},_w=function(){function t(e,n,i){e===void 0&&(e=Ra),n===void 0&&(n={});var o=this;this.options=jn(jn({},cT),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&pd&&L1&&(L1=!1,O1(this)),Jm(this,function(){return function(l){for(var c=l.getTag(),h=c.length,f="",v=function(E){var b=function($){return md.get($)}(E);if(b===void 0)return"continue";var R=l.names.get(b),P=c.getGroup(E);if(R===void 0||!R.size||P.length===0)return"continue";var z="".concat(Ca,".g").concat(E,'[id="').concat(b,'"]'),M="";R!==void 0&&R.forEach(function($){$.length>0&&(M+="".concat($,","))}),f+="".concat(P).concat(z,'{content:"').concat(M,'"}').concat(Ym)},w=0;w<h;w++)v(w);return f}(o)})}return t.registerId=function(e){return bc(e)},t.prototype.rehydrate=function(){!this.server&&pd&&O1(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(jn(jn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,o=n.target;return n.isServer?new uT(o):i?new aT(o):new lT(o)}(this.options),new eT(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(bc(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(bc(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(bc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),dT=/&/g,hT=/^\s*\/\/.*$/gm;function Ew(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ew(n.children,e)),n})}function fT(t){var e,n,i,o=Ra,l=o.options,c=l===void 0?Ra:l,h=o.plugins,f=h===void 0?nh:h,v=function(b,R,P){return P.startsWith(n)&&P.endsWith(n)&&P.replaceAll(n,"").length>0?".".concat(e):b},w=f.slice();w.push(function(b){b.type===Xd&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(dT,n).replace(i,v))}),c.prefix&&w.push(MI),w.push(OI);var E=function(b,R,P,z){R===void 0&&(R=""),P===void 0&&(P=""),z===void 0&&(z="&"),e=z,n=R,i=new RegExp("\\".concat(n,"\\b"),"g");var M=b.replace(hT,""),$=NI(P||R?"".concat(P," ").concat(R," { ").concat(M," }"):M);c.namespace&&($=Ew($,c.namespace));var Y=[];return fd($,LI(w.concat(jI(function(ee){return Y.push(ee)})))),Y};return E.hash=f.length?f.reduce(function(b,R){return R.name||eu(15),xa(b,R.name)},pw).toString():"",E}var pT=new _w,um=fT(),bw=fr.createContext({shouldForwardProp:void 0,styleSheet:pT,stylis:um});bw.Consumer;fr.createContext(void 0);function j1(){return K.useContext(bw)}var mT=function(){function t(e,n){var i=this;this.inject=function(o,l){l===void 0&&(l=um);var c=i.name+l.hash;o.hasNameForId(i.id,c)||o.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Jm(this,function(){throw eu(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=um),this.name+e.hash},t}(),gT=function(t){return t>="A"&&t<="Z"};function M1(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;gT(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var Iw=function(t){return t==null||t===!1||t===""},Tw=function(t){var e,n,i=[];for(var o in t){var l=t[o];t.hasOwnProperty(o)&&!Iw(l)&&(Array.isArray(l)&&l.isCss||ka(l)?i.push("".concat(M1(o),":"),l,";"):zl(l)?i.push.apply(i,hd(hd(["".concat(o," {")],Tw(l),!1),["}"],!1)):i.push("".concat(M1(o),": ").concat((e=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in VI||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function yo(t,e,n,i){if(Iw(t))return[];if(Xm(t))return[".".concat(t.styledComponentId)];if(ka(t)){if(!ka(l=t)||l.prototype&&l.prototype.isReactComponent||!e)return[t];var o=t(e);return yo(o,e,n,i)}var l;return t instanceof mT?n?(t.inject(n,i),[t.getName(i)]):[t]:zl(t)?Tw(t):Array.isArray(t)?Array.prototype.concat.apply(nh,t.map(function(c){return yo(c,e,n,i)})):[t.toString()]}function yT(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ka(n)&&!Xm(n))return!1}return!0}var vT=mw(th),xT=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&yT(e),this.componentId=n,this.baseHash=xa(vT,n),this.baseStyle=i,_w.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=fo(o,this.staticRulesId);else{var l=D1(yo(this.rules,e,n,i)),c=am(xa(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var h=i(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,h)}o=fo(o,c),this.staticRulesId=c}else{for(var f=xa(this.baseHash,i.hash),v="",w=0;w<this.rules.length;w++){var E=this.rules[w];if(typeof E=="string")v+=E;else if(E){var b=D1(yo(E,e,n,i));f=xa(f,b+w),v+=b}}if(v){var R=am(f>>>0);n.hasNameForId(this.componentId,R)||n.insertRules(this.componentId,R,i(v,".".concat(R),void 0,this.componentId)),o=fo(o,R)}}return o},t}(),Sw=fr.createContext(void 0);Sw.Consumer;var ap={};function wT(t,e,n){var i=Xm(t),o=t,l=!op(t),c=e.attrs,h=c===void 0?nh:c,f=e.componentId,v=f===void 0?function(X,ne){var D=typeof X!="string"?"sc":R1(X);ap[D]=(ap[D]||0)+1;var C="".concat(D,"-").concat(HI(th+D+ap[D]));return ne?"".concat(ne,"-").concat(C):C}(e.displayName,e.parentComponentId):f,w=e.displayName,E=w===void 0?function(X){return op(X)?"styled.".concat(X):"Styled(".concat(WI(X),")")}(t):w,b=e.displayName&&e.componentId?"".concat(R1(e.displayName),"-").concat(e.componentId):e.componentId||v,R=i&&o.attrs?o.attrs.concat(h).filter(Boolean):h,P=e.shouldForwardProp;if(i&&o.shouldForwardProp){var z=o.shouldForwardProp;if(e.shouldForwardProp){var M=e.shouldForwardProp;P=function(X,ne){return z(X,ne)&&M(X,ne)}}else P=z}var $=new xT(n,b,i?o.componentStyle:void 0);function Y(X,ne){return function(D,C,T){var S=D.attrs,O=D.componentStyle,V=D.defaultProps,B=D.foldedComponentIds,k=D.styledComponentId,Oe=D.target,rt=fr.useContext(Sw),Ae=j1(),Fe=D.shouldForwardProp||Ae.shouldForwardProp,le=UI(C,rt,V)||Ra,pe=function(Ne,De,Ke){for(var He,Je=jn(jn({},De),{className:void 0,theme:Ke}),Ge=0;Ge<Ne.length;Ge+=1){var kt=ka(He=Ne[Ge])?He(Je):He;for(var Ut in kt)Je[Ut]=Ut==="className"?fo(Je[Ut],kt[Ut]):Ut==="style"?jn(jn({},Je[Ut]),kt[Ut]):kt[Ut]}return De.className&&(Je.className=fo(Je.className,De.className)),Je}(S,C,le),ce=pe.as||Oe,U={};for(var te in pe)pe[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&pe.theme===le||(te==="forwardedAs"?U.as=pe.forwardedAs:Fe&&!Fe(te,ce)||(U[te]=pe[te]));var me=function(Ne,De){var Ke=j1(),He=Ne.generateAndInjectStyles(De,Ke.styleSheet,Ke.stylis);return He}(O,pe),Pe=fo(B,k);return me&&(Pe+=" "+me),pe.className&&(Pe+=" "+pe.className),U[op(ce)&&!fw.has(ce)?"class":"className"]=Pe,U.ref=T,K.createElement(ce,U)}(ee,X,ne)}Y.displayName=E;var ee=fr.forwardRef(Y);return ee.attrs=R,ee.componentStyle=$,ee.displayName=E,ee.shouldForwardProp=P,ee.foldedComponentIds=i?fo(o.foldedComponentIds,o.styledComponentId):"",ee.styledComponentId=b,ee.target=i?o.target:t,Object.defineProperty(ee,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=i?function(ne){for(var D=[],C=1;C<arguments.length;C++)D[C-1]=arguments[C];for(var T=0,S=D;T<S.length;T++)lm(ne,S[T],!0);return ne}({},o.defaultProps,X):X}}),Jm(ee,function(){return".".concat(ee.styledComponentId)}),l&&xw(ee,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ee}function V1(t,e){for(var n=[t[0]],i=0,o=e.length;i<o;i+=1)n.push(e[i],t[i+1]);return n}var F1=function(t){return Object.assign(t,{isCss:!0})};function _T(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ka(t)||zl(t))return F1(yo(V1(nh,hd([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?yo(i):F1(yo(V1(i,e)))}function cm(t,e,n){if(n===void 0&&(n=Ra),!e)throw eu(1,e);var i=function(o){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return t(e,n,_T.apply(void 0,hd([o],l,!1)))};return i.attrs=function(o){return cm(t,e,jn(jn({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return cm(t,e,jn(jn({},n),o))},i}var Cw=function(t){return cm(wT,t)},A=Cw;fw.forEach(function(t){A[t]=Cw(t)});const ET=[{title:"Casual Outfits",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/11ea9902a59c14bbd209d2fd1e7de2b4f3ba540c528b15f976fff536194d4db9?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&"},{title:"Work Outfits",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/64b0c6f8a828a94d44d7aa8bf49a82cce79361958ce10b284f531936016b7997?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&"},{title:"Street Outfits",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/6803874f07c5e049eb2ab6ac0ccb087541d67fdfd39b063ce4c58b8856874975?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&"},{title:"Occasion Outfits",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/125d763ed143c6672b350dfdd2ff6f09afbaaaa292e50f1389fd92ed454189f8?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&"},{title:"Corporate Outfits",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/a099221fa5f10e72897c3656448acee17f6eb32cfc192059f4eaec86671e20c9?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&"}];function bT(){return y.jsxs(IT,{children:[y.jsx(TT,{children:"Outfits by style"}),y.jsx(ST,{children:ET.map(t=>y.jsxs(CT,{children:[y.jsx(RT,{src:t.image,alt:t.title}),y.jsx(kT,{children:t.title})]},t.title))})]})}const IT=A.section`
  width: 100%;
  max-width: 95%;
  margin-top: 39px;
`,TT=A.h2`
  color: rgba(0, 0, 0, 1);
  font: 600 20px Inter, sans-serif;
  margin-bottom: 16px;
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 17px;
  }
`,ST=A.div`
  display: flex;
  gap: 4px;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media (max-width: 991px) {
    max-width: 100%;
  }
`,CT=A.div`
  position: relative;
  border-radius: 4px;
  min-height: 340px;
  min-width: 268px;
  overflow: hidden;
  cursor: pointer;
  height: 450px;
  flex: 1;
  flex-shrink: 0;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 480px) {
    max-height: 196px;
    max-width: 119px;
    flex: 0;
  }
`,RT=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,kT=A.span`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font: 600 20px Inter, sans-serif;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
`,Rw=({imageUrl:t,outfitNumber:e})=>y.jsxs(PT,{children:[y.jsxs(AT,{children:[y.jsx(NT,{loading:"lazy",src:t,alt:`OOTD ${e}`}),y.jsx(DT,{children:y.jsx(OT,{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/c44b90513fc161d45e980628189af31a658fae5fc05b1e5e4b6050dd361f8626?placeholderIfAbsent=true",alt:"Like"})})]}),y.jsxs(LT,{children:["OOTD ",e]})]}),PT=A.article`
  display: flex;
  flex-direction: column;
  width: 218px; /* Will fill grid cell */ /* Keeps card from getting too big */
  height: 327px;
  @media (max-width: 480px){
    height: 251px;
    width: 168px;
  }
  @media (max-width: 370px){
    height: 230px;
    width: 150px;
  }
  @media (max-width: 340px){
    height: 210px;
    width: 135px;
  }
  @media (max-width: 305px){
    height: 190px;
    width: 120px;
  }
  @media (max-width: 280px){
    height: 165px;
    width: 95px;
  }
`,AT=A.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  position: relative;
  width: inherit;
  height: 95%;
  padding: 260px 44px 12px;
  align-items: flex-end;
  
  @media (max-width: 991px){
    padding: 100px 20px 12px;
  }
`,NT=A.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
`,DT=A.div`
  position: absolute; /* Absolute positioning inside CardImageContainer */
  bottom: 10px; /* Adjust this value as needed */
  right: 10px; /* Adjust this value as needed */
  border-radius: 22px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 32px;
  width: 32px;
  padding: 0 7px 0 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 340px){
    height: 27px;
    width: 27px;
  }
`,OT=A.img`
  object-fit: contain;
  object-position: center;
  width: 100%;
  @media (max-width: 340px){
    width: 120%;
  }
`,LT=A.h3`
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  align-self: center;
  margin-top: 4px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`,jT=[{id:100,image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",likes:245},{id:99,image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",likes:189},{id:98,image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",likes:167},{id:97,image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",likes:203},{id:96,image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",likes:178},{id:95,image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",likes:156},{id:1,image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0ad9921a249113d36e4ed0c2e167f5741aac6a62e0e36c79996f99a1ccbd8153?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",likes:245},{id:9,image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",likes:189},{id:8,image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",likes:167},{id:7,image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",likes:203},{id:6,image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",likes:178}];function MT({title:t}){return y.jsxs(VT,{children:[y.jsx(FT,{children:y.jsx(UT,{children:t})}),y.jsx(zT,{children:jT.map(e=>y.jsx(Rw,{imageUrl:e.image,outfitNumber:e.id},e.id))})]})}const VT=A.section`
  width: 100%;
  max-width: 95%;
  margin-top: 40px;
`,FT=A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px; 
`,UT=A.h2`
  color: rgba(0, 0, 0, 1);
  font: 600 25px Inter, sans-serif;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`,zT=A.div`
    display: flex;
    gap: 12px;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 10px;

    & > * {
      flex: 0 0 auto;
    }

    &::-webkit-scrollbar {
    display: none;
    }
    
  /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
`;function $T({product:t}){const{name:e,image:n,price:i,storeCount:o}=t;return y.jsxs(BT,{children:[y.jsxs(HT,{children:[y.jsx(WT,{src:n,alt:e,loading:"lazy"}),y.jsx(KT,{"aria-label":`Like ${e}`,children:y.jsx(GT,{src:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c44b90513fc161d45e980628189af31a658fae5fc05b1e5e4b6050dd361f8626?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",alt:""})})]}),y.jsxs(qT,{children:[y.jsx(QT,{children:e}),y.jsxs(YT,{children:[y.jsx(XT,{children:"Price from:"}),y.jsxs(JT,{children:[y.jsxs(ZT,{children:["$",i.toFixed(2)]}),y.jsxs(eS,{children:["- Available at ",o," stores"]})]})]})]})]})}const BT=A.article`
  display: flex;
  flex-direction: column;
  width: 218px;
  @media (max-width: 480px) {
    width: 119px;
    height: 260px;
  }
`,HT=A.div`
  position: relative;
  border-radius: 4px;
  height: 304px;
  overflow: hidden;
  @media (max-width: 480px) {
    height: 196px;
  }
`,WT=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`,KT=A.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
  @media (max-width:480px){
    width: 24px;
    height: 24px;
  }
`,GT=A.img`
  width: 25px;
  height: 25px;
  margin-top: 2.5px;
  @media (max-width:480px){
    width: 15px;
    height: 15px;
  }
`,qT=A.div`
  margin-top: 4px;
  font-family: Inter;
`,QT=A.h3`
  color: rgba(0, 0, 0, 1);
  font: 500 16px Inter, sans-serif;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,YT=A.div`
  margin-top: 1px;
`,XT=A.span`
  color: rgba(84, 84, 84, 1);
  font-size: 12px;
  @media (max-width: 480px) {
    font-size: 10px;
  }
`,JT=A.div`
  gap: 4px;
  font-size: 16px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,ZT=A.span`
  font-weight: 600;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  @media (max-width: 480px) {
    font-size: 10px;
  }
`,eS=A.span`
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;A.div`
  display: flex;
  gap: 4px;
`;A.button`
  border-radius: 26px;
  background-color: #eeeeee;
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;A.img`
  width: 14px;
  height: 20px;
`;const tS=[{id:1,name:"Yankess Snapback",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/679cb80d99e284d5cc3f00b3189b9e87ecf9818de82ed010d1a33ed73bb009ff?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",price:40.5,storeCount:3},{id:2,name:"Tech-fleece Jacket",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c1b7cbff8c061a7035c242bd568f1513f235d363680c53da2c1e44b203301789?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",price:24,storeCount:2},{id:3,name:"Cowskin Female Shoe",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/9ec3e4d9f576e9fc8a6bc11bc08414b74add243a110fbc271a902e470985d681?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",price:72.9,storeCount:3},{id:4,name:"Cowskin Travel Bag",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/51e46928e4b4b67d9980e416c65f68bebe2d63b6de0a993ba2b74f9964049020?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",price:99.99,storeCount:2},{id:5,name:"Dr Martens Green Leather",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/735e5f859edf59ec9bc9eff797994a973b629baf84c9d5fb20e92126b14d9735?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",price:140.5,storeCount:3},{id:6,name:"Cartiers Tank Watch",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/2f1cb25f6da2d03de25dd1b3783b9a13c481fc43187bd6e0299a7ad21b702b74?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",price:400,storeCount:2},{id:7,name:"Yankess Snapback",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/679cb80d99e284d5cc3f00b3189b9e87ecf9818de82ed010d1a33ed73bb009ff?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",price:40.5,storeCount:3},{id:8,name:"Tech-fleece Jacket",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/c1b7cbff8c061a7035c242bd568f1513f235d363680c53da2c1e44b203301789?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",price:24,storeCount:2},{id:9,name:"Cowskin Female Shoe",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/9ec3e4d9f576e9fc8a6bc11bc08414b74add243a110fbc271a902e470985d681?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",price:72.9,storeCount:3},{id:10,name:"Cowskin Travel Bag",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/51e46928e4b4b67d9980e416c65f68bebe2d63b6de0a993ba2b74f9964049020?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",price:99.99,storeCount:2},{id:11,name:"Dr Martens Green Leather",image:"https://cdn.builder.io/api/v1/image/assets/d1df3775ad2c4bfbbcb6cc50e4ccaf24/735e5f859edf59ec9bc9eff797994a973b629baf84c9d5fb20e92126b14d9735?apiKey=d1df3775ad2c4bfbbcb6cc50e4ccaf24&",price:140.5,storeCount:3}];function nS({title:t}){return y.jsxs(rS,{children:[y.jsx(iS,{children:y.jsx(sS,{children:t})}),y.jsx(oS,{children:tS.map(e=>y.jsx($T,{product:e},e.id))})]})}const rS=A.section`
  width: 100%;
  max-width: 95%;
  margin: 40px auto;
`,iS=A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,sS=A.h2`
  color: rgba(0, 0, 0, 1);
  font: 600 25px Inter, sans-serif;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`,oS=A.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;

  & > * {
    flex: 0 0 auto;
  }

  /* Hide scrollbar for WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;function aS(){return y.jsxs(lS,{children:[y.jsxs(uS,{children:[y.jsxs("div",{className:"segregatedImages",children:[y.jsxs("div",{className:"sec a",children:[y.jsx("img",{src:"hmp1.svg",alt:"segregated image 1"}),y.jsx("img",{src:"hmp2.svg",alt:"segregated image 2"})]}),y.jsxs("div",{className:"sec b",children:[y.jsx("img",{src:"hmp3.svg",alt:"segregated image 3",className:"hmp3"}),y.jsx("img",{src:"hmp4.svg",alt:"segregated image 4"})]})]}),y.jsx("div",{className:"heroBannerTitle",children:"Shop Outfit Easily Accross Different Stores"})]}),y.jsx(bT,{}),y.jsx(MT,{title:"Outfits you may like"}),y.jsx(nS,{title:"Products you may like"})]})}const lS=A.div`
  background-color: rgba(252, 252, 252, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`,uS=A.div`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  margin-top: 7px;
  width: 95%;
  max-width: 100%;
  height: 450px;
  border: 4px solid rgba(0, 0, 0, 1);
  flex-direction: column;
  .segregatedImages{
    display: flex;
    width: 100%;
    height: 90%;
    flex: 1;
    .sec{
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .a{
      padding: 0 0 0 15px;
    }
    .b{
      padding: 0 15px 0 0;
    }
    img{
      height: 85%;
      flex: 1;
      width: 50%;
    }
    .hmp3{
      height: 100%;
    }
  }
  .heroBannerTitle{
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    height: 10%;
    font-family: inter;
    align-items: center;
    margin-bottom: 15px;
  }
  @media (max-width: 768px) {
   .segregatedImages{
    flex-direction: column;
    .sec{
      width: 100%;
      height: 50%;
      padding-left: 0%;
      margin: 0%;
      img{
        height: 95%;
      }
      .hmp3{
        height: 100%;
      }
    }
   }
   .heroBannerTitle{
    font-size: 17px;
    text-align: center;
    margin-bottom: 0%;
   }
  }
  @media (max-width: 500px) {
    height: 371px;
    font-size: 14px;
   .segregatedImages{
    .sec{
      img{
        width: 138px;
      }
      .hmp3{
        height: 100%;
      }
    }
   }
   .heroBannerTitle{
    font-size: 12px;
    text-align: center;
   }
  }
  @media (max-width: 310px) {
      img{
        min-width: 100px;
      }
  }
`,rh=()=>y.jsx(cS,{children:y.jsx(dS,{children:"Nothing here for now"})}),cS=A.section`
  display: flex;
  margin-top: 24px;
  margin-left: 40px;
  width: 824px;
  max-width: 100%;
  flex-direction: column;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
`,dS=A.nav`
  align-self: start;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: rgba(84, 84, 84, 1);
  font-weight: 500;
  justify-content: start;
  flex-wrap: wrap;
`,hS=()=>{const t=["https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/748e2942dbf4ccb799ea21987b2b1c6523a1bb43d2bfb26c0433a6aaaf33397a?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/0c0a883a3aee0c98bd11a11bb7f0379df77ed6ab8e1a8b3870c45c7c6657bcf0?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/0466c359a9969012d8f6311c355f2272855b69fbfdb18243927c71aefb3f2a76?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/dbf348af0ff29496d9cf53011de25c26ee65a3d594829958e740e53c1b76dc82?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/3863e1258a97cea31670fd0723cb2b845890d0194bd93e5f266ebdf86a191887?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/c2f6cfd9fe8d35879670f6056411db9e3f9fc33ef72ccede1a0fb4b0596b3c64?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/42ad899e6680dc04792dd4dc222044eb813a92a02b2292d711ea165e66f63881?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/0725e9b2edefcd0bc177f9a4a6ac6caf39c560495026ea11eb62ed0ba3762ec5?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/66df12fd8142f0440c3e0065e0f454ad55e371a92a38710b93540d575c826803?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/cf68c2cd54ec9adf9757137fc4b1dc9894757abeadfcda382a40e99d2e469d70?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/8b85f12972713e7b6b7408e8deb64cac24e38389dfa3a07409de24aec5acb1ab?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/3c9d7d8301a5c3e9c178bb044ddd44ee5f839880d868a27d3e580d055686fb12?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/4d996bce72b6749820a2b0787403ad51869af4d6d7e0d1b360f420861877f331?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/d28049f68635cabdf124d1cc616e39403926efb6aa5ca09a9cd5d762151ae7e8?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/2063174ccb05bf547c478a3ca5f2b952f999a35a449fc951955472f493dccfd8?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/81087352b2cbf12468d3081191090363661fc5e3b2816ef31914da6a366ad6b4?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/3c80866c6c058d74e6f1debd49d6fb817ef421fbeecc605ff1abf3c043f2cb37?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/1be25115947b48572506ef88da4fbfd2d9e0e5f3de1c0ce5925ec4eaf1a21289?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/1bc8616eb685ec377dde61bc51a9adb8f9b3124dcd5e53acdd1f257af6d6556a?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/817370132fab95a30440cf6c0ca40a60bb822a0c8f168d53565e59f3856abf02?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/fcb4cadca04eba91f1024518db1793a8c659b6251314b582b553b2b92ae6063d?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/c4725841c437f71683319c2c94972429e0af3888694179a8da75a4c6f2a904a6?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/da9b7c979f9a0f2c0c1efa983cd23f80e163d8250087af474dc6173b766e2910?placeholderIfAbsent=true","https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/12b9a14ba69cfbf64078f3d32f5b027856df372edca4b04f074d6fc910047985?placeholderIfAbsent=true"];return y.jsxs(fS,{children:[y.jsx(rh,{}),y.jsx(pS,{children:"All Outfits"}),y.jsx(mS,{children:t.map(e=>y.jsx(Rw,{imageUrl:e,outfitNumber:100}))}),y.jsx(gS,{children:[...Array(10)].map((e,n)=>y.jsx(yS,{active:n===0,children:n+1},n))})]})},fS=A.main`
  background-color: rgba(252, 252, 252, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`,pS=A.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 32px;
  font-weight: 600;
  margin-top: 21px;
  display: flex;
  justify-content: center;
  @media (max-width: 480px){
    font-size: 20px;
  }
`,mS=A.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 24px;
  justify-content: center;
  gap: 12px;
  padding-left: 5px;
  padding-right: 5px;

  @media (max-width: 480px){
    gap: 12px;
  }
`,gS=A.nav`
  display: flex;
  margin-top: 40px;
  align-items: center;
  gap: 20px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  color: rgba(84, 84, 84, 1);
  font-weight: 500;
`,yS=A.button`
  color: ${t=>t.active?"rgba(0, 0, 0, 1)":"inherit"};
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
  padding: 0;
`;function vS({title:t,setIsHovered:e}){return y.jsxs(xS,{children:[y.jsx(wS,{}),t==="All Outfits"?y.jsx(pr,{to:"alloutfits",style:{textDecoration:"none",color:"#545454"},children:y.jsx(U1,{onClick:()=>{e(!1)},children:t})}):y.jsx(U1,{children:t})]})}const xS=A.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #545454;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    text-decoration: underline;
  }
`,wS=A.div`
  border-radius: 8px;
  background-color: #545454;
  align-self: stretch;
  display: flex;
  width: 8px;
  height: 8px;
  margin: auto 0;
`,U1=A.span`
  align-self: stretch;
  margin: auto 0;
  white-space: nowrap;
  font-size: 20px;
  
  @media (max-width: 991px) {
    white-space: initial;
  }
`;function Ic({title:t,items:e,setIsHovered:n}){return y.jsxs(_S,{children:[y.jsxs(ES,{children:[y.jsx(bS,{}),y.jsx(IS,{children:t})]}),y.jsx(TS,{children:e.map((i,o)=>y.jsx(vS,{title:i.title,setIsHovered:n},o))})]})}const _S=A.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`,ES=A.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  font-size: 22px;
  color: #000;
  justify-content: start;
`,bS=A.div`
  border-radius: 1px;
  background-color: #000;
  align-self: stretch;
  display: flex;
  width: 18px;
  height: 4px;
  margin: auto 0;
`,IS=A.h2`
  align-self: stretch;
  margin: auto 0;
  font-size: 22px;
  font-weight: 500;
`,TS=A.div`
  display: flex;
  margin-top: 42px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 18px;
  
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`,SS=[{title:"All Outfits"}],CS=[{title:"Casual Outfits"},{title:"Work Outfits"},{title:"Street Outfits"},{title:"Occasion Outfits"},{title:"Corporate Outfits"}],RS=[{title:"Hats"},{title:"Jewellries"},{title:"Bags"},{title:"Belts"},{title:"Pants & Coat"},{title:"Shirts"},{title:"Hoodies"},{title:"Shoes"}],kS=[{title:"Amazon"},{title:"Uniqlo"},{title:"Shein"},{title:"Etsy"},{title:"About us"},{title:"more..."}];function PS({setIsHovered:t}){return y.jsx(AS,{children:y.jsx(NS,{children:y.jsxs(DS,{children:[y.jsx(Ic,{title:"Outfits",items:SS,setIsHovered:t}),y.jsx(Ic,{title:"Outfits by Style",items:CS}),y.jsx(Ic,{title:"Products by Categories",items:RS}),y.jsx(Ic,{title:"Products by Stores",items:kS})]})})})}const AS=A.nav`
  display: flex;
  flex-direction: row;
  width: 100vw;
  font-family: Inter, sans-serif;
  font-weight: 500;
  position: absolute;
  top: 100%;
  left: -400px;
  right: 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`,NS=A.div`
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 20px 70px 76px;
  
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`,DS=A.div`
  display: flex;
  align-items: start;
  gap: 100px 120px;
  justify-content: start;
  flex-wrap: wrap;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`,OS=()=>{const[t,e]=K.useState(!1);return y.jsxs(LS,{children:[y.jsxs(lp,{tabIndex:"0",children:[" ",y.jsx(dd,{to:"alloutfits",children:"Shop"})," "]}),y.jsxs(jS,{onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:[y.jsxs(lp,{tabIndex:"0",children:["All Features ",y.jsx("img",{src:"dropdown.svg",alt:"all feature drop down"})," "]}),t&&y.jsx(PS,{setIsHovered:e})]}),y.jsxs(lp,{tabIndex:"0",children:[" ",y.jsx(dd,{to:"contact",children:" Contact Us"})," "]})]})},LS=A.nav`
  display: flex;
  min-width: 240px;
  align-items: center;
  gap: 16px;
  color: #000;
  margin-left: 64px;
  font: 500 16px Inter, sans-serif;

  @media (max-width: 640px) {
    display: none;
  }
`,lp=A.div`
  padding: 10px;
  font-size: 17.5px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
  a{
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: #545454;
  }
  img{
    height: 15px;
    width: 15px;
  }
`,jS=A.div`
  position: relative;
  display: inline-block;
`,ks=()=>{const[t,e]=K.useState(window.innerWidth);return K.useEffect(()=>{const n=()=>e(window.innerWidth);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t},tu={mobile:"480px"};var up={exports:{}},cp={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1;function MS(){if(z1)return cp;z1=1;var t=Kd();function e(f,v){return f===v&&(f!==0||1/f===1/v)||f!==f&&v!==v}var n=typeof Object.is=="function"?Object.is:e,i=t.useSyncExternalStore,o=t.useRef,l=t.useEffect,c=t.useMemo,h=t.useDebugValue;return cp.useSyncExternalStoreWithSelector=function(f,v,w,E,b){var R=o(null);if(R.current===null){var P={hasValue:!1,value:null};R.current=P}else P=R.current;R=c(function(){function M(ne){if(!$){if($=!0,Y=ne,ne=E(ne),b!==void 0&&P.hasValue){var D=P.value;if(b(D,ne))return ee=D}return ee=ne}if(D=ee,n(Y,ne))return D;var C=E(ne);return b!==void 0&&b(D,C)?(Y=ne,D):(Y=ne,ee=C)}var $=!1,Y,ee,X=w===void 0?null:w;return[function(){return M(v())},X===null?void 0:function(){return M(X())}]},[v,w,E,b]);var z=i(f,R[0],R[1]);return l(function(){P.hasValue=!0,P.value=z},[z]),h(z),z},cp}var $1;function VS(){return $1||($1=1,up.exports=MS()),up.exports}var FS=VS();function US(t){t()}function zS(){let t=null,e=null;return{clear(){t=null,e=null},notify(){US(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=t;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const o=e={callback:n,next:null,prev:e};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:e=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var B1={notify(){},get:()=>[]};function $S(t,e){let n,i=B1,o=0,l=!1;function c(z){w();const M=i.subscribe(z);let $=!1;return()=>{$||($=!0,M(),E())}}function h(){i.notify()}function f(){P.onStateChange&&P.onStateChange()}function v(){return l}function w(){o++,n||(n=t.subscribe(f),i=zS())}function E(){o--,n&&o===0&&(n(),n=void 0,i.clear(),i=B1)}function b(){l||(l=!0,w())}function R(){l&&(l=!1,E())}const P={addNestedSub:c,notifyNestedSubs:h,handleChangeWrapper:f,isSubscribed:v,trySubscribe:b,tryUnsubscribe:R,getListeners:()=>i};return P}var BS=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HS=BS(),WS=()=>typeof navigator<"u"&&navigator.product==="ReactNative",KS=WS(),GS=()=>HS||KS?K.useLayoutEffect:K.useEffect,qS=GS(),dp=Symbol.for("react-redux-context"),hp=typeof globalThis<"u"?globalThis:{};function QS(){if(!K.createContext)return{};const t=hp[dp]??(hp[dp]=new Map);let e=t.get(K.createContext);return e||(e=K.createContext(null),t.set(K.createContext,e)),e}var gd=QS();function YS(t){const{children:e,context:n,serverState:i,store:o}=t,l=K.useMemo(()=>{const f=$S(o);return{store:o,subscription:f,getServerState:i?()=>i:void 0}},[o,i]),c=K.useMemo(()=>o.getState(),[o]);qS(()=>{const{subscription:f}=l;return f.onStateChange=f.notifyNestedSubs,f.trySubscribe(),c!==o.getState()&&f.notifyNestedSubs(),()=>{f.tryUnsubscribe(),f.onStateChange=void 0}},[l,c]);const h=n||gd;return K.createElement(h.Provider,{value:l},e)}var XS=YS;function kw(t=gd){return function(){return K.useContext(t)}}var JS=kw(),ZS=(t,e)=>t===e;function eC(t=gd){const e=t===gd?JS:kw(t),n=(i,o={})=>{const{equalityFn:l=ZS}=typeof o=="function"?{equalityFn:o}:o,c=e(),{store:h,subscription:f,getServerState:v}=c;K.useRef(!0);const w=K.useCallback({[i.name](b){return i(b)}}[i.name],[i]),E=FS.useSyncExternalStoreWithSelector(f.addNestedSub,h.getState,v||h.getState,w,l);return K.useDebugValue(E),E};return Object.assign(n,{withTypes:()=>n}),n}var ih=eC();function tC(){var e;const t=ih(n=>n.auth.user);return y.jsxs(nC,{children:[y.jsx(pr,{to:"/account",children:y.jsxs(fp,{tabIndex:"0",children:[y.jsx("img",{src:"/account.svg",alt:"account icon"}),ks()>600?y.jsxs("div",{className:"iconLabel",children:["Hello, ",((e=t.displayName)==null?void 0:e.split(" ")[0])||"User"]}):null]})}),y.jsx(pr,{to:"saveditems",children:y.jsxs(fp,{tabIndex:"0",children:[y.jsx("img",{src:"/liked-heart.svg",alt:"liked icon"}),ks()>600?y.jsx("div",{className:"iconLabel",children:"Saved Items"}):null]})}),y.jsx(pr,{to:"bag",children:y.jsxs(fp,{tabIndex:"0",children:[y.jsx("img",{src:"/shopping-cart.svg",alt:"cart icon"}),ks()>600?y.jsx("div",{className:"iconLabel",children:"Bag(0)"}):null]})})]})}const nC=A.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;
  @media (max-width: ${tu.mobile}) {
      height: 20px;
      width: 91px;
      gap: 16px;
    }
  a{
    text-decoration: none;
  }
`,fp=A.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 25px;
    height: 25px;
  }
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
  .iconLabel{
    font-size:17.5px;
    margin-left: 3px;
    font-weight: 600;
  }
  @media (max-width: ${tu.mobile}) {
    img{
      width: 20px;
      height: 20px;
    }
  }
`;var Pw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},H1=fr.createContext&&fr.createContext(Pw),rC=["attr","size","title"];function iC(t,e){if(t==null)return{};var n=sC(t,e),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)i=l[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function sC(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function yd(){return yd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},yd.apply(this,arguments)}function W1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,i)}return n}function vd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?W1(Object(n),!0).forEach(function(i){oC(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W1(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function oC(t,e,n){return e=aC(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function aC(t){var e=lC(t,"string");return typeof e=="symbol"?e:e+""}function lC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Aw(t){return t&&t.map((e,n)=>fr.createElement(e.tag,vd({key:n},e.attr),Aw(e.child)))}function Zm(t){return e=>fr.createElement(uC,yd({attr:vd({},t.attr)},e),Aw(t.child))}function uC(t){var e=n=>{var{attr:i,size:o,title:l}=t,c=iC(t,rC),h=o||n.size||"1em",f;return n.className&&(f=n.className),t.className&&(f=(f?f+" ":"")+t.className),fr.createElement("svg",yd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,c,{className:f,style:vd(vd({color:t.color||n.color},n.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&fr.createElement("title",null,l),t.children)};return H1!==void 0?fr.createElement(H1.Consumer,null,n=>e(n)):e(Pw)}function pp(t){return Zm({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(t)}function mp(t){return Zm({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(t)}function cC(t){return Zm({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(t)}const dC=A.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  transform: ${({open:t})=>t?"translateX(0)":"translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 80px;
  @media (max-width: 480px) {
    padding-top: 60px;
  }
  a{
    text-decoration: none;
  }
`,hC=A(cC)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 21px;
  }
`,ao=A.div`
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
  font-family: Inter;
  color: #1C1C1C;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 14px;
    padding-left: 0%;
    padding-right: 0%;
  }
  @media (max-width: 300px) {
    font-size: 12px;
  }
`,gp=A.div`
  display: ${({open:t})=>t?"block":"none"};
  padding-left: 20px;
`,yp=A.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 16px;
  font-family: Inter;
  @media (max-width: 480px) {
    font-size: 13px;
    padding-left: 0%;
    padding-right: 0%;
  }
  @media (max-width: 300px) {
    font-size: 11px;
  }
`,vp=A.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`,fC=({open:t,onClose:e})=>{const[n,i]=K.useState(null),o=c=>{i(n===c?null:c)},l={outfits:[{type:"Casual Outfits",img:"/hamburger imgs/styles/casual.svg"},{type:"Work Outfits",img:"/hamburger imgs/styles/work.svg"},{type:"Street Outfits",img:"/hamburger imgs/styles/street.svg"},{type:"Occasion Outfits",img:"/hamburger imgs/styles/occasion.svg"},{type:"Corporate Outfit",img:"/hamburger imgs/styles/corporate.svg"}],categories:[{type:"Hats",img:"/hamburger imgs/products/hats.svg"},{type:"Jewelries",img:"/hamburger imgs/products/jewellries.svg"},{type:"Bags",img:"/hamburger imgs/products/bags.svg"},{type:"Belts",img:"/hamburger imgs/products/belts.svg"},{type:"Pants & Shorts",img:"/hamburger imgs/products/pants.svg"},{type:"Shirts",img:"/hamburger imgs/products/shirts.svg"},{type:"Hoodies",img:"/hamburger imgs/products/hoodies.svg"},{type:"Shoes",img:"/hamburger imgs/products/shoes.svg"}],stores:[{type:"Amazon",img:"/hamburger imgs/stores/amazon.svg"},{type:"Etsy",img:"/hamburger imgs/stores/etsy.svg"},{type:"Shein",img:"/hamburger imgs/stores/shein.svg"},{type:"Uniqlo",img:"/hamburger imgs/stores/uniqlo.svg"}]};return y.jsxs(dC,{open:t,children:[y.jsx(hC,{onClick:e}),y.jsx(pr,{to:"/",onClick:e,children:y.jsx(ao,{children:"Home"})}),y.jsx(pr,{to:"alloutfits",onClick:e,children:y.jsx(ao,{children:"All Outfits"})}),y.jsxs(ao,{onClick:()=>o("outfits"),children:["Outfits by Style ",n==="outfits"?y.jsx(mp,{}):y.jsx(pp,{})]}),y.jsx(gp,{open:n==="outfits",children:l.outfits.map(c=>y.jsxs(yp,{children:[y.jsx(vp,{src:c.img}),c.type]},c.type))}),y.jsxs(ao,{onClick:()=>o("categories"),children:["Products by Categories ",n==="categories"?y.jsx(mp,{}):y.jsx(pp,{})]}),y.jsx(gp,{open:n==="categories",children:l.categories.map(c=>y.jsxs(yp,{children:[y.jsx(vp,{src:c.img}),c.type]},c.type))}),y.jsxs(ao,{onClick:()=>o("stores"),children:["Products by Stores ",n==="stores"?y.jsx(mp,{}):y.jsx(pp,{})]}),y.jsx(gp,{open:n==="stores",children:l.stores.map(c=>y.jsxs(yp,{children:[y.jsx(vp,{src:c.img}),c.type]},c.type))}),y.jsx(ao,{children:"FAQs"}),y.jsx(pr,{to:"contact",onClick:e,children:y.jsx(ao,{children:"Contact us"})})]})},Nw=()=>{const[t,e]=K.useState(!1),n=()=>{e(i=>!i)};return y.jsxs(pC,{children:[t&&y.jsx(fC,{open:t,onClose:n}),y.jsx(mC,{children:y.jsxs(gC,{children:[ks()<1090?y.jsx("div",{className:"hamburgerMenu",onClick:n,children:y.jsx("img",{src:"/hamburgerMenu.svg",alt:"menu bar"})}):null,y.jsx("div",{className:"logo",children:y.jsx(pr,{to:"/",children:y.jsx("img",{src:"fullSababaLogo.svg",alt:"sababa"})})}),ks()>1090?y.jsx(OS,{}):null,y.jsx(tC,{})]})})]})},pC=A.header`
  border-color: rgba(244, 244, 244, 1);
  border-top-width: 2px;
  border-bottom-width: 2px;
  width: 100%;
  padding: 0 32px 0 32px;
  margin-bottom: 40px;
  margin-top: 29px;
  @media (max-width: ${tu.mobile}) {
    height: 26px;
    padding: 0 16px 0 16px;
  }
`,mC=A.div`
  display: flex;
  width: 100%;
  align-items: center;
  .logo{
    width: 131px;
    height: 40px;
    margin-left: 0;
    img{
      width: 131px;
      height: 40px;
    }
  }
  @media (max-width: ${tu.mobile}) {
    height: 26px;
    .logo{
    width: 90px;
    height: 26px;
    img{
      width: 90px;
      height: 26px;
    }
  }
  }
`,gC=A.div`
  display: flex;
  width: 100%;
  align-items: center;
  .hamburgerMenu{
    margin: 0%;
    margin-right: 12px;
    height: 35px;
    display: flex;
    align-items: center;
    img{
      height: 25px;
    }
    @media (max-width: ${tu.mobile}) {
      height: inherit;
      img{
        height: 15px;
        width: 22px;
      }
    }
  }
`;function Dw(){return y.jsxs(yC,{children:[y.jsxs("div",{className:"leftSideDiv div",children:[y.jsx("div",{className:"quickLink",children:"QUICK LINK"}),y.jsxs("div",{className:"ourSocialPages",children:[y.jsx("img",{src:"instagramLogo.svg",alt:"instagram logo"}),y.jsx("img",{src:"pinterestLogo.svg",alt:"pinterest logo"}),y.jsx("img",{src:"tiktokLogo.svg",alt:"tiktok logo"})]}),y.jsx("div",{className:"outfitCache",children:"Outfit Cache"}),y.jsx("div",{className:"productByCategories",children:"Product by Categories"}),y.jsx("div",{className:"productByBrands",children:"Product by brands"}),y.jsx("div",{className:"styleGuide",children:"Style guide"}),y.jsx("div",{className:"copyright",children:"Copyright @ 2024 Sababa"})]}),y.jsxs("div",{className:"rightSideDiv div",children:[y.jsxs("div",{className:"contactDiv",children:[y.jsx("div",{className:"contact",children:"CONTACT"}),y.jsx("div",{className:"email",children:"thesababacommunity@gmail.com"}),y.jsxs("div",{className:"whatsappNo",children:[y.jsx("img",{src:"whatsappLogo.svg",alt:"whatsapp Logo"}),"+2347042265102"]})]}),y.jsx("span",{children:"Powered by sababa"})]})]})}const yC=A.div`
    background-color: #000000;
    width: 100%;
    height: 473px;
    padding: 87px 53px 21px 53px;
    color: white;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-top: 40px;
    .div{
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 0;
      gap: 24px;
      img{
        height: 24px;
        width: 24px;
      }
      :first-child{
        font-weight: bold;
      }
    }
    .leftSideDiv{
      width: 205px;
      .ourSocialPages{
        display: flex;
        flex-direction: row;
        gap: 48px;
        width: 100%;
        height: auto;
        @media (max-width: 480px) {
          gap: 10px;
          width: 50%;
        }
      }
      .copyright{
        font-size: 14px;
        justify-content: flex-end;
      }
    }
    .rightSideDiv{
      width: 260px;
      display: flex;
      height: auto;
      .contactDiv{
        display: flex;
        flex-direction: column;
        gap: 24px;
        div{
          height: auto;
        }
        .whatsappNo{
          display: flex;
          flex-direction: row;
          gap: 8px;
        }
      }
      span{
        font-size: 14px;
        margin-top: auto;
        align-self: flex-end;
      }
      @media (max-width: 720px) {
        align-items: flex-end;
      }
    }
    @media (max-width: 600px) {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 5px;
    }
    @media (max-width: 480px) {
      height: 321px;
      padding-top: 16px;
      font-size: 11px;
      .leftSideDiv{
        width: 150px;
        font-size: 10px;
        .ourSocialPages{
          img{
            height: 15px;
            width: 15px;
          }
        }
        .copyright{
          font-size: 11px;
        }
      }
      .div{
        gap: 24px;
      }
      .rightSideDiv{
        .contactDiv{
          gap: 12px;
          font-size: 10px;
          .whatsappNo{
            font-size: 10px;
            img{
              height: 15px;
              width: 15px;
            }
          }
        }
        span{
          font-size: 10px;
        }
      }
      
    }
    @media (max-width:320px){
      padding-left: 5px;
      padding-right: 5px;
      .leftSideDiv{
        font-size: 9px;
        .copyright{
          font-size: 9px;
        }
      }
      .ourSocialPages{
        img{
          height: 13px;
          width: 13px;
        }
      }
      .contactDiv{
        gap: 12px;
        font-size: 9px;
        .whatsappNo{
          font-size: 9px;
          img{
            height: 13px;
            width: 13px;
          }
        }
      }
    }
    @media (max-width:300px){
      .rightSideDiv{
        width: 150px;
        word-break: break-all;
      }
    }
`;function vC(){return y.jsxs(xC,{children:[y.jsxs(Tc,{children:[y.jsx(Sc,{src:"/dummyImg/shirtDummy.svg",alt:"dummy for the real"}),y.jsx(Cc,{children:y.jsx(Rc,{src:"/heart.svg",alt:""})})]}),y.jsxs(Tc,{children:[y.jsx(Sc,{src:"/dummyImg/pantsDummy.svg",alt:"dummy for the real"}),y.jsx(Cc,{children:y.jsx(Rc,{src:"/heart.svg",alt:""})})]}),y.jsxs(Tc,{children:[y.jsx(Sc,{src:"/dummyImg/shoeDummy.svg",alt:"dummy for the real"}),y.jsx(Cc,{children:y.jsx(Rc,{src:"/heart.svg",alt:""})})]}),y.jsxs(Tc,{children:[y.jsx(Sc,{src:"/dummyImg/shoeDummy.svg",alt:"dummy for the real"}),y.jsx(Cc,{children:y.jsx(Rc,{src:"/heart.svg",alt:""})})]})]})}const xC=A.div`
  display: none;  
  @media (max-width: 520px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    padding-left: 40px;
    padding-right: 40px;
    @media (max-width: 472px) {
        padding-left: 15px;
        padding-right: 15px;
     }
     @media (max-width: 472px) {
        padding:0px;
        gap: 0px;
     }
  }
`,Tc=A.div`
  position: relative;
  border-radius: 4px;
  min-width: 30%;
  height: 402px;
  overflow: hidden;
  @media (max-width: 1000px) {
    min-width: 25%;
    height: 300px;
  }
  @media (max-width: 750px) {
    height: 200px;
    min-width: 30%;
  }
  @media (max-width: 520px) {
    height: 143px;
    width: 168px;
  }
  @media (max-width: 400px) {
    height: 120px;
    width: 140px;
  }
  @media (max-width: 340px) {
    height: 100px;
    width: 120px;
  }
  @media (max-width: 300px) {
    height: 80px;
    width: 100px;
  }
  @media (max-width: 262px) {
    height: 90px;
    width: 80px;
  }
`,Sc=A.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
`,Cc=A.button`
  position: absolute;
  bottom: 10px;
  right: 12px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: none;
  background: none;
  @media (max-width: 340px){
    width: 20px;
    height: 20px;
    bottom: 10px;
  }
  @media (max-width: 300px) {
    right: 6px;
  }
`,Rc=A.img`
  width: 100%;
  height: 100%;
  margin-top: 2.5px;
`;function wC(){return y.jsxs(_C,{children:[y.jsx(EC,{children:y.jsxs(bC,{children:[y.jsx(IC,{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/4eadd821fbca46f1ee8093782c91ab061b8046c73bb458dea6ff63910dbdc06a",alt:"Main outfit"}),y.jsx(kc,{className:"mainLikeButton",children:y.jsx(Pc,{src:"/heart.svg",alt:""})})]})}),y.jsx(vC,{}),y.jsxs(TC,{children:[y.jsxs("div",{id:"div",children:[y.jsx(K1,{id:"toTheLeft",children:y.jsx("img",{src:"/lessThan.svg",alt:"to the left arrow"})}),y.jsxs(SC,{children:[y.jsxs(xp,{children:[y.jsx(wp,{src:"/dummyImg/shirtDummy.svg",alt:"dummy for the real"}),y.jsx(kc,{children:y.jsx(Pc,{src:"/heart.svg",alt:""})})]}),y.jsxs(xp,{children:[y.jsx(wp,{src:"/dummyImg/pantsDummy.svg",alt:"dummy for the real"}),y.jsx(kc,{children:y.jsx(Pc,{src:"/heart.svg",alt:""})})]}),y.jsxs(xp,{children:[y.jsx(wp,{src:"/dummyImg/shoeDummy.svg",alt:"dummy for the real"}),y.jsx(kc,{children:y.jsx(Pc,{src:"/heart.svg",alt:""})})]})]}),y.jsx(K1,{id:"toTheRight",children:y.jsx("img",{src:"/greaterThan.svg",alt:"to the right arrow"})})]}),y.jsxs(CC,{children:[y.jsx(G1,{active:!0}),y.jsx(G1,{})]})]})]})}const _C=A.section`
  width: 100%;
  height: 402px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1270px) {
    flex-direction: column;
    height: fit-content;
    gap: 10px;
    align-items: center;
  }
  #div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,EC=A.div`
  height: 402px;
  width: 288px;
  @media (max-width: 750px) {
    height: 300px;
    width: 220px;
  }
  @media (max-width: 300px) {
    height: 250px;
    width: 170px;
  }
`,bC=A.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  position: relative;
  align-items: end;
  height: 100%;
  width: 100%;
  .mainLikeButton{
    @media (max-width: 300px) {
      height: 27px;
      width: 27px;
    }
  }
`,IC=A.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`,TC=A.section`
  display: flex;
  flex-direction: column; 
  width: 75%;
  @media (max-width: 1270px) {
    width: 100%;
  }
  @media (max-width: 1000px) {
    height: 300px;
  }
  @media (max-width: 750px) {
    height: 200px;
  }
  @media (max-width: 520px) {
    display: none;
  }
`,K1=A.div`
  display: flex;
  align-items: center;
`,SC=A.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 0 5px 0 5px;
  `,xp=A.div`
  position: relative;
  border-radius: 4px;
  min-width: 30%;
  height: 402px;
  overflow: hidden;
  @media (max-width: 1000px) {
    min-width: 25%;
    height: 300px;
  }
  @media (max-width: 750px) {
    height: 200px;
    min-width: 30%;
  }
  @media (max-width: 520px) {
    display: block;
  }
`,wp=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  @media (max-width: 480px) {
    height: 196px;
  }
`,kc=A.button`
  position: absolute;
  bottom: 10px;
  right: 12px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border: none;
  background: none;
`,Pc=A.img`
  width: 100%;
  height: 100%;
  margin-top: 2.5px;
`,CC=A.div`
  display: flex;
  margin-top: 7px;
  justify-content: center;
  gap: 8px;
`,G1=A.div`
  background-color: ${t=>t.active?"rgba(0, 0, 0, 1)":"rgba(217, 217, 217, 1)"};
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;function RC(){return y.jsx(kC,{children:y.jsx(PC,{children:y.jsxs(AC,{children:[y.jsxs(Ac,{children:[y.jsx(Il,{children:"Style"}),y.jsx(Nc,{children:"Casual Wears"})]}),y.jsxs(Ac,{children:[y.jsx(Il,{children:"Fit"}),y.jsx(Nc,{children:"White top, white denim pant"})]}),y.jsxs(Ac,{children:[y.jsx(Il,{children:"Accessories"}),y.jsx(Nc,{children:"Diesel belt, 2 silver rings, sunglasses, keyholder"})]}),y.jsxs(Ac,{children:[y.jsx(Il,{children:"Footwear"}),y.jsx(Nc,{children:"Brown Penny Loafers"})]}),y.jsxs(NC,{children:[y.jsx(Il,{children:"Creator's Socials"}),y.jsxs(DC,{children:[y.jsx(_p,{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/a31ecaed872c51106ad9eae599833f539704c35aa84a408ec2387b997ab87f53",alt:"Social media"}),y.jsx(_p,{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/778d2835d205d5650af8581e4c4b094cf03708f0de47fced94b94899c20c0270",alt:"Social media"}),y.jsx(_p,{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/698326fe512eb8a34bbdafbe845ed18424249f56dba5eefd7d05a9b5359ac892",alt:"Social media"})]}),y.jsx(OC,{children:"(please contact @sababacommunity for removal or other social media links)"})]})]})})})}const kC=A.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,PC=A.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`,AC=A.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  color: #000000;
  font-weight: 500;
`,Ac=A.div`
  max-width: 100%;
`,Il=A.div`
  font-size: 14px;
  margin-bottom: 4px;
  color: #545454;
  font-family: Inter;
  @media (max-width: 480px) {
    font-size: 10px;
  }
`,Nc=A.p`
  font-size: 16px;
  color: #1C1C1C;
  font-family: Inter;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,NC=A.div`
  align-self: stretch;
  width: 100%;
`,DC=A.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  gap: 20px;
`,_p=A.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 24px;
`,OC=A.p`
  font-size: 12px;
  margin-top: 8px;
  white-space: nowrap; /* Prevents text from wrapping */
  overflow: visible;  
  color: #545454;
  @media (max-width: 480px) {
    display: none;
  }
`;function LC(){return y.jsxs("main",{className:"ootd-container",children:[y.jsx(Nw,{}),y.jsx(rh,{}),y.jsxs(jC,{children:[y.jsx("div",{className:"pTitle",children:ks()>481?"Outfit Of The Day 100":"OOTD 100"}),y.jsx("div",{className:"buyall",children:y.jsx("u",{children:"Buy all"})})]}),y.jsxs(MC,{children:[y.jsx(wC,{}),y.jsx(RC,{}),y.jsx(VC,{children:"Buy All"})]}),y.jsx(Dw,{})]})}A.main`
  background-color: rgba(252, 252, 252, 1);
  overflow: hidden;
`;const jC=A.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
  margin: 21px 0 40px 0;
  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
  .pTitle{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 32px;
    font-weight: 600;
    @media (max-width: 700px) {
      font-size: 25px;
    }
    @media (max-width: 550px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
  .buyall{
    margin-left: auto;
    font-size: 16px;
    margin-right: 40px;
    @media (max-width: 480px) {
      display: none;
    }
  }
`,MC=A.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 0 40px 0 40px;
  margin-bottom: 40px;
  @media (max-width: 680px) {
    padding: 0 16px 0 16px;
  }
  @media (max-width: 360px) {
    padding: 0 8px 0 8px;
  }
`,VC=A.button`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    width: 100%;
    height: 40px;
    border: none;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background-color: black;
    color: white;
    font-family: Inter;
    border-radius: 5px;
  }
`,Ep=({image:t,title:e,currentPrice:n,originalPrice:i,color:o,size:l,quantity:c})=>y.jsxs(FC,{children:[y.jsx(UC,{src:t,alt:"Product"}),y.jsxs(zC,{children:[y.jsxs($C,{children:[y.jsx(BC,{children:n}),y.jsx(HC,{children:i})]}),y.jsx(WC,{children:e}),y.jsxs(KC,{children:[y.jsx("span",{children:o}),y.jsx(q1,{}),y.jsx("span",{children:l}),y.jsx(q1,{}),y.jsxs("span",{children:["QTY: ",c]})]}),y.jsxs(GC,{children:[y.jsx(qC,{children:y.jsx("div",{children:y.jsx("img",{src:"/heart.svg",alt:"heart icon"})})}),y.jsx("span",{children:"Save for later"})]})]}),y.jsx(QC,{children:y.jsx("img",{src:"/x.svg",alt:"cancel button"})})]}),FC=A.article`
  display: flex;
  padding: 16px;
  align-self: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 8px;
  width: 681px;
  height: 221px;
  @media (max-width: 710px){
    width: 600px;
    height: 200px;
  }
  @media (max-width: 620px){
    width: 343px;
    height: 195px;
  }
  @media (max-width: 370px){
    width: 260px;
    height: 160px;
  }
  @media (max-width: 280px){
    width: 220px;
    height: 145px;
    padding-left: 5px;
  }
`,UC=A.img`
  width: 209px;
  height: 189px;
  border-radius: 4px;
  object-fit: cover;
  @media (max-width: 620px){
    width: 129px;
    height: 160px;
  }
  @media (max-width: 370px){
    width: 100px;
    height: 130px;
  }
  @media (max-width: 280px){
    width: 70px;
    height: 90px;
  }
`,zC=A.div`
  margin-left: 16px;
  flex: 1;
  @media (max-width: 370px){
    max-width: 105px;
  }
`,$C=A.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`,BC=A.span`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 620px){
    font-size: 16px;
  }
  @media (max-width: 370px){
    font-size: 14px;
  }
`,HC=A.span`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: line-through;
  @media (max-width: 620px){
    font-size: 12px;
  }
  @media (max-width: 370px){
    font-size: 10px;
  }
`,WC=A.h3`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
  @media (max-width: 620px){
    font-size: 12px;
  }
  @media (max-width: 370px){
    font-size: 10px;
  }
`,KC=A.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  @media (max-width: 620px){
    font-size: 11px;
    gap: 2px;
  }
  @media (max-width: 370px){
    overflow: auto;
    font-size: 9px;
    width: 120px;
  }
`,q1=A.span`
  width: 1px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.1);
`,GC=A.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: Inter, sans-serif;
  font-size: 16px;
  color: #000;
  @media (max-width: 620px){
    font-size: 12px;
    margin-top: 12px;
  }
  @media (max-width: 370px){
    font-size: 10px;
    margin-top: 6px;
  }
`,qC=A.div`
  img{
    height: 40px;
    width: 40px;
    @media (max-width: 710px){
      width: 27px;
      height: 27px;
    }
    @media (max-width: 370px){
      width: 20px;
      height: 20px;
    }
  }
`,QC=A.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: flex-start;
  height: fit-content;
  @media (max-width: 620px){
    img{
      width: 15px;
      height: 15px;
    }
  }
  @media (max-width: 370px){
    margin: 3px;
    img{
      width: 12px;
      height: 12px;
    }
  }
`,YC=()=>y.jsxs(XC,{children:[y.jsxs(Q1,{children:[y.jsx("span",{children:"Sub Total:"}),y.jsx(JC,{children:"$104.99"})]}),y.jsxs(Q1,{children:[y.jsx("span",{children:"Delivery:"}),y.jsx("div",{children:"null"})]}),y.jsx("hr",{}),y.jsx(ZC,{children:"Proceed to checkout (3 items)"}),y.jsxs(e5,{children:[y.jsx(t5,{children:"We Accept:"}),y.jsxs(n5,{children:[y.jsx("div",{className:"paymentMethod",children:y.jsx("img",{src:"/paymentsIcons/applepayIcon.svg",alt:"apple pay",className:"applePay"})}),y.jsx("div",{className:"paymentMethod",children:y.jsx("img",{src:"/paymentsIcons/mastercardIcon.svg",alt:"master card",className:"masterCard"})}),y.jsx("div",{className:"paymentMethod",children:y.jsx("img",{src:"/paymentsIcons/visaIcon.svg",alt:"Visa card",className:"visaCard"})}),y.jsx("div",{className:"paymentMethod",children:y.jsx("img",{src:"/paymentsIcons/paypalIcon.svg",alt:"pay pal",className:"paypal"})})]}),y.jsx(r5,{children:"Got a discount code? Add it in the next step"})]})]}),XC=A.aside`
  width: 415px;
  height: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  font-family: Inter, sans-serif;
  @media (max-width: 620px){
    width: 343px;
  }
  @media (max-width: 370px){
    width: 260px;
  }
  @media (max-width: 280px){
    width: 220px;
  }
`,Q1=A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
  span{
    font-weight:600;
  }
  @media (max-width: 620px){
    font-size: 12px;
  }
`,JC=A.span`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 620px){
    font-size: 12px;
  }
`,ZC=A.button`
  width: 100%;
  padding: 12px;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 24px 0;
  background-color: #4caf50;
  @media (max-width: 620px){
    font-size: 12px;
  }
`,e5=A.div`
  margin-top: 0px;
`,t5=A.div`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  @media (max-width: 620px){
    font-size: 12px;
  }
`,n5=A.div`
  display: flex;
  align-items: center;
  gap: 12px;
  div{
    .applePay{
      width: 35px;
      height: 16px;
    }
    .masterCard{
      width: 20px;
      height: 16px;
    }
    .visaCard{
      width: 32px;
      height: 16px;
    }
    .paypal{
      width: 14px;
      height: 16px;
    }
  }
`,r5=A.p`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  @media (max-width: 620px){
    font-size: 12px;
  }
`,i5=()=>y.jsxs(y.Fragment,{children:[y.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Figma+Hand:wght@700&display=swap",rel:"stylesheet"}),y.jsx(rh,{}),y.jsxs(s5,{children:[y.jsx(o5,{children:"Your Bag"}),y.jsx(a5,{children:"Items will last for 1 hour"}),y.jsxs(l5,{children:[y.jsxs(u5,{children:[y.jsx(Ep,{image:"https://cdn.builder.io/api/v1/image/assets/TEMP/27e65db605ff76e462c7a9896b47224904265bc9",title:"Mens pleated shirt Chunky knit light gray alpaca wool...",currentPrice:"$52.99",originalPrice:"$57.99",color:"Neon Green",size:"UK 10",quantity:1}),y.jsx(Ep,{image:"https://cdn.builder.io/api/v1/image/assets/TEMP/27e65db605ff76e462c7a9896b47224904265bc9",title:"Mens pleated shirt Chunky knit light gray alpaca wool...",currentPrice:"$52.99",originalPrice:"$57.99",color:"Neon Green",size:"UK 10",quantity:1}),y.jsx(Ep,{image:"https://cdn.builder.io/api/v1/image/assets/TEMP/27e65db605ff76e462c7a9896b47224904265bc9",title:"Mens pleated shirt Chunky knit light gray alpaca wool...",currentPrice:"$52.99",originalPrice:"$57.99",color:"Neon Green",size:"UK 10",quantity:1}),y.jsxs(c5,{children:[y.jsx("span",{children:"Total price:"}),y.jsx(d5,{children:"$104.99"})]})]}),y.jsx(YC,{})]})]})]}),s5=A.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  background-color: white;
`,o5=A.h1`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: 620px){
    font-size: 16px;
  }
`,a5=A.p`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 620px){
    font-size: 14px;
  }
`,l5=A.div`
  display: flex;
  width: 1110px;
  justify-content: center;
  align-self: center;
  @media (max-width: 1135px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

`,u5=A.section`
  flex: 1;
`,c5=A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 8px 8px;
  margin-top: 8px;
  font-family: Inter, sans-serif;
  width: 681px;
  height: 52px;
  @media (max-width: 710px){
    width: 600px;
  }
  @media (max-width: 620px){
    width: 343px;
  }
  @media (max-width: 370px){
    width: 260px;
  }
  @media (max-width: 280px){
    width: 220px;
  }
`,d5=A.span`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 620px){
    font-size: 14px;
  }
  @media (max-width: 370px){
      font-size: 12px;
  }
`;function h5(){const[t,e]=K.useState({name:"",email:"",subject:"",message:"",privacyAccepted:!1}),n=i=>{i.preventDefault(),console.log("Form submitted:",t)};return y.jsxs(f5,{children:[y.jsxs(p5,{children:[y.jsx(m5,{children:y.jsx(g5,{src:"https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/0fb1b1f8b7371575b45f05343bd0c186985651ba456699a5681943959560e3ad?placeholderIfAbsent=true",alt:"Email icon"})}),y.jsxs(y5,{children:[y.jsx("span",{children:"Email us on "}),y.jsx("br",{}),y.jsx(v5,{children:"thesababacommunity@gmail.com"})]})]}),y.jsx(nw,{method:"post",action:"/contact",children:y.jsxs(x5,{onSubmit:n,children:[y.jsxs(w5,{children:[y.jsxs(Dc,{children:[y.jsx(Oc,{htmlFor:"name",children:"Name"}),y.jsx(bp,{type:"text",id:"name",name:"name",required:!0})]}),y.jsxs(Dc,{children:[y.jsx(Oc,{htmlFor:"email",children:"Email"}),y.jsx(bp,{type:"email",id:"email",name:"email",required:!0})]}),y.jsxs(Dc,{children:[y.jsx(Oc,{htmlFor:"subject",children:"Subject"}),y.jsx(bp,{type:"text",id:"subject",name:"subject",required:!0})]}),y.jsxs(Dc,{children:[y.jsx(Oc,{htmlFor:"message",children:"Message"}),y.jsx(_5,{id:"message",name:"message",required:!0})]})]}),y.jsxs(E5,{children:[y.jsxs(b5,{children:[y.jsxs(I5,{children:[y.jsx(T5,{type:"checkbox",id:"privacy",name:"privacyAccepted",required:!0}),y.jsx(S5,{src:"https://cdn.builder.io/api/v1/image/assets/08bf16d58b0d4aa28fefd3a671be5059/0e18d44f55ed96ae37f0649893cd9c49f49dc1295f315ad53ec4c871825c9986?placeholderIfAbsent=true",alt:"Checkbox"})]}),y.jsxs(C5,{children:[y.jsx("span",{children:"To submit this form you have to accept our "}),y.jsx(R5,{href:"/privacy",children:"Privacy Statement"})]})]}),y.jsx(k5,{type:"submit",children:"Send"})]})]})})]})}const f5=A.div`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  margin-top: 16px;
  width: 580px;
  padding: 24px 40px 40px;
  flex-direction: column;
  @media (max-width: 650px){
    width: 100%;
  }
  @media (max-width: 480px){
    padding: 16px;
    box-shadow: none;
  }
  @media (max-width: 280px){
    padding: 8px;
  }
`,p5=A.div`
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-self: center;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 4px;
  justify-content: start;
  @media (max-width: 300px){
    width: 100%;
  }
  @media (max-width: 26px){
    justify-content: center;
    gap: 1px;
  }
`,m5=A.div`
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-self: stretch;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  min-height: 32px;
  padding: 10px 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`,g5=A.img`
  aspect-ratio: 1.33;
  object-fit: contain;
  object-position: center;
  width: 16px;
  @media (max-width: 480px){
    width: 14px;
  }
`,y5=A.p`
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  line-height: 18px;
  align-self: stretch;
  margin: 0;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 300px){
    font-size: 10px;
  }
  @media (max-width: 262px){
    word-break: break-all;
    font-size: 8px;
    line-height: 14px;
  }
`,v5=A.span`
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
`,x5=A.div`
  margin-top: 24px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`,w5=A.div`
  width: 100%;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: rgba(84, 84, 84, 1);
  font-weight: 500;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 480px){
    font-size: 12px;
  }
`,Dc=A.div`
  width: 100%;
  margin-top: 24px;
  &:first-child{
    margin-top: 12px;
  }
  @media (max-width: 480px){
    margin-top: 8px;
    &:first-child{
    margin-top: 0px;
  }
  }
`,Oc=A.label`
  display: block;
  margin-bottom: 8px;
  @media (max-width: 480px){
    margin-bottom: 4px;
  }
`,bp=A.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: block;
  min-height: 48px;
  width: 100%;
  padding: 0 12px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  @media (max-width: 480px){
    font-size: 12px;
    min-height: 44px;
  }
`,_5=A.textarea`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: block;
  min-height: 159px;
  width: 100%;
  padding: 12px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  resize: vertical;
  @media (max-width: 480px){
    font-size: 12px;
  }
`,E5=A.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
`,b5=A.div`
  align-self: start;
  display: flex;
  align-items: end;
  gap: 4px;
  justify-content: start;
`,I5=A.div`
  border-radius: 4px;
  background-color: rgba(20, 110, 180, 0.05);
  border: 1px solid rgba(20, 110, 180, 0.1);
  display: flex;
  min-height: 16px;
  padding: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  position: relative;
`,T5=A.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
  z-index: 1;
`,S5=A.img`
  aspect-ratio: 1.33;
  object-fit: contain;
  object-position: center;
  width: 8px;
`,C5=A.p`
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  margin: 0;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 300px){
    font-size: 10px;
  }
`,R5=A.a`
  color: rgba(0, 0, 0, 1);
  text-decoration: underline;
  cursor: pointer;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 300px){
    font-size: 10px;
  }
`,k5=A.button`
  align-self: stretch;
  border-radius: 4px;
  background-color: #000000;
  margin-top: 12px;
  min-height: 48px;
  width: 100%;
  padding: 15px;
  border: none;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #2c2c2c;
  }

  @media (max-width: 991px) {
    padding: 15px 20px;
  }
  @media (max-width: 480px){
    font-size: 12px;
  }
`;function P5(){return y.jsx(A5,{children:y.jsxs(N5,{children:[y.jsx(rh,{}),y.jsxs(D5,{children:[y.jsx(O5,{children:"Contact us"}),y.jsx(L5,{children:"If you've got any issues or outfits, products, styles, website suggestions, or anything else to share? Fill out the form!"}),y.jsx(h5,{})]})]})})}const A5=A.main`
  background-color: rgba(252, 252, 252, 1);
`,N5=A.section`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-self: center;
  @media (max-width: 650px){
    width: 100%;
  }
`,D5=A.section`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 650px){
    width: 100%;
  }
`,O5=A.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 32px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 600;
  align-self: center;
  width: 100%;
  text-align: center;
  justify-self: center;
  @media (max-width: 480px){
    font-size: 16px;
  }
`,L5=A.p`
  color: rgba(84, 84, 84, 1);
  font-size: 16px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  text-align: center;
  margin-top: 24px;
  width: 580px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 480px){
    font-size: 12px;
    margin-top: 6px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (max-width: 280px){
    padding-left: 8px;
    padding-right: 8px;
  }
`;function Ow({currentNav:t}){return y.jsxs(j5,{children:[y.jsx(pr,{to:"/",children:y.jsx(M5,{children:y.jsx("img",{src:"/fullSababaLogo.svg",alt:"Logo"})})}),y.jsx(V5,{children:t})]})}const j5=A.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  @media (max-width: 991px) {
    padding: 20px;
  }

  @media (max-width: 640px) {
    padding: 16px;
  }
`,M5=A.div`
  display: flex;
  align-items: center;
  img{
    @media (max-width: 480px) {
      height: 30px;
      width: 100px;
    }
    @media (max-width: 480px) {
      height: 25px;
      width: 80px;
    }
  }
`,V5=A.h2`
  color: #1c1c1c;
  font-weight: 600;
  font-size: 20px;
  @media (max-width: 480px) {
      font-size: 14px;
    }
  @media (max-width: 240px) {
    font-size: 12px;
  }
`,F5=()=>{};var Y1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},U5=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const o=t[n++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[n++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[n++],c=t[n++],h=t[n++],f=((o&7)<<18|(l&63)<<12|(c&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(f>>10)),e[i++]=String.fromCharCode(56320+(f&1023))}else{const l=t[n++],c=t[n++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},jw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<t.length;o+=3){const l=t[o],c=o+1<t.length,h=c?t[o+1]:0,f=o+2<t.length,v=f?t[o+2]:0,w=l>>2,E=(l&3)<<4|h>>4;let b=(h&15)<<2|v>>6,R=v&63;f||(R=64,c||(b=64)),i.push(n[w],n[E],n[b],n[R])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):U5(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<t.length;){const l=n[t.charAt(o++)],h=o<t.length?n[t.charAt(o)]:0;++o;const v=o<t.length?n[t.charAt(o)]:64;++o;const E=o<t.length?n[t.charAt(o)]:64;if(++o,l==null||h==null||v==null||E==null)throw new z5;const b=l<<2|h>>4;if(i.push(b),v!==64){const R=h<<4&240|v>>2;if(i.push(R),E!==64){const P=v<<6&192|E;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class z5 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $5=function(t){const e=Lw(t);return jw.encodeByteArray(e,!0)},xd=function(t){return $5(t).replace(/\./g,"")},Mw=function(t){try{return jw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B5(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H5=()=>B5().__FIREBASE_DEFAULTS__,W5=()=>{if(typeof process>"u"||typeof Y1>"u")return;const t=Y1.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},K5=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mw(t[1]);return e&&JSON.parse(e)},sh=()=>{try{return F5()||H5()||W5()||K5()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vw=t=>{var e,n;return(n=(e=sh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fw=t=>{const e=Vw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Uw=()=>{var t;return(t=sh())===null||t===void 0?void 0:t.config},zw=t=>{var e;return(e=sh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G5{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t){return t.endsWith(".cloudworkstations.dev")}async function eg(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",o=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xd(JSON.stringify(n)),xd(JSON.stringify(c)),""].join(".")}const Dl={};function q5(){const t={prod:[],emulator:[]};for(const e of Object.keys(Dl))Dl[e]?t.emulator.push(e):t.prod.push(e);return t}function Q5(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let X1=!1;function tg(t,e){if(typeof window>"u"||typeof document>"u"||!Fa(window.location.host)||Dl[t]===e||Dl[t]||X1)return;Dl[t]=e;function n(b){return`__firebase__banner__${b}`}const i="__firebase__banner",l=q5().prod.length>0;function c(){const b=document.getElementById(i);b&&b.remove()}function h(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function f(b,R){b.setAttribute("width","24"),b.setAttribute("id",R),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function v(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{X1=!0,c()},b}function w(b,R){b.setAttribute("id",R),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function E(){const b=Q5(i),R=n("text"),P=document.getElementById(R)||document.createElement("span"),z=n("learnmore"),M=document.getElementById(z)||document.createElement("a"),$=n("preprendIcon"),Y=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const ee=b.element;h(ee),w(M,z);const X=v();f(Y,$),ee.append(Y,P,M,X),document.body.appendChild(ee)}l?(P.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y5(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vn())}function X5(){var t;const e=(t=sh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function J5(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Z5(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tR(){const t=vn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nR(){return!X5()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rR(){try{return typeof indexedDB=="object"}catch{return!1}}function iR(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="FirebaseError";class pi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=sR,Object.setPrototypeOf(this,pi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nu.prototype.create)}}class nu{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?oR(l,i):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new pi(o,h,i)}}function oR(t,e){return t.replace(aR,(n,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const aR=/\{\$([^}]+)}/g;function lR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _o(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const o of n){if(!i.includes(o))return!1;const l=t[o],c=e[o];if(J1(l)&&J1(c)){if(!_o(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function J1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function uR(t,e){const n=new cR(t,e);return n.subscribe.bind(n)}class cR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let o;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");dR(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:i},o.next===void 0&&(o.next=Ip),o.error===void 0&&(o.error=Ip),o.complete===void 0&&(o.complete=Ip);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ip(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){return t&&t._delegate?t._delegate:t}class Ds{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new G5;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pR(e))try{this.getOrInitializeService({instanceIdentifier:lo})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=lo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lo){return this.instances.has(e)}getOptions(e=lo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);i===h&&c.resolve(o)}return o}onInit(e,n){var i;const o=this.normalizeInstanceIdentifier(n),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:fR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=lo){return this.component?this.component.multipleInstances?e:lo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fR(t){return t===lo?void 0:t}function pR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ze||(Ze={}));const gR={debug:Ze.DEBUG,verbose:Ze.VERBOSE,info:Ze.INFO,warn:Ze.WARN,error:Ze.ERROR,silent:Ze.SILENT},yR=Ze.INFO,vR={[Ze.DEBUG]:"log",[Ze.VERBOSE]:"log",[Ze.INFO]:"info",[Ze.WARN]:"warn",[Ze.ERROR]:"error"},xR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),o=vR[e];if(o)console[o](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ng{constructor(e){this.name=e,this._logLevel=yR,this._logHandler=xR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ze.DEBUG,...e),this._logHandler(this,Ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ze.VERBOSE,...e),this._logHandler(this,Ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ze.INFO,...e),this._logHandler(this,Ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ze.WARN,...e),this._logHandler(this,Ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ze.ERROR,...e),this._logHandler(this,Ze.ERROR,...e)}}const wR=(t,e)=>e.some(n=>t instanceof n);let Z1,ev;function _R(){return Z1||(Z1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ER(){return ev||(ev=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bw=new WeakMap,dm=new WeakMap,Hw=new WeakMap,Tp=new WeakMap,rg=new WeakMap;function bR(t){const e=new Promise((n,i)=>{const o=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(Ps(t.result)),o()},c=()=>{i(t.error),o()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&Bw.set(n,t)}).catch(()=>{}),rg.set(e,t),e}function IR(t){if(dm.has(t))return;const e=new Promise((n,i)=>{const o=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),o()},c=()=>{i(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});dm.set(t,e)}let hm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ps(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TR(t){hm=t(hm)}function SR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Sp(this),e,...n);return Hw.set(i,e.sort?e.sort():[e]),Ps(i)}:ER().includes(t)?function(...e){return t.apply(Sp(this),e),Ps(Bw.get(this))}:function(...e){return Ps(t.apply(Sp(this),e))}}function CR(t){return typeof t=="function"?SR(t):(t instanceof IDBTransaction&&IR(t),wR(t,_R())?new Proxy(t,hm):t)}function Ps(t){if(t instanceof IDBRequest)return bR(t);if(Tp.has(t))return Tp.get(t);const e=CR(t);return e!==t&&(Tp.set(t,e),rg.set(e,t)),e}const Sp=t=>rg.get(t);function RR(t,e,{blocked:n,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(t,e),h=Ps(c);return i&&c.addEventListener("upgradeneeded",f=>{i(Ps(c.result),f.oldVersion,f.newVersion,Ps(c.transaction),f)}),n&&c.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),h.then(f=>{l&&f.addEventListener("close",()=>l()),o&&f.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),h}const kR=["get","getKey","getAll","getAllKeys","count"],PR=["put","add","delete","clear"],Cp=new Map;function tv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cp.get(e))return Cp.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,o=PR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||kR.includes(n)))return;const l=async function(c,...h){const f=this.transaction(c,o?"readwrite":"readonly");let v=f.store;return i&&(v=v.index(h.shift())),(await Promise.all([v[n](...h),o&&f.done]))[0]};return Cp.set(e,l),l}TR(t=>({...t,get:(e,n,i)=>tv(e,n)||t.get(e,n,i),has:(e,n)=>!!tv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function NR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fm="@firebase/app",nv="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new ng("@firebase/app"),DR="@firebase/app-compat",OR="@firebase/analytics-compat",LR="@firebase/analytics",jR="@firebase/app-check-compat",MR="@firebase/app-check",VR="@firebase/auth",FR="@firebase/auth-compat",UR="@firebase/database",zR="@firebase/data-connect",$R="@firebase/database-compat",BR="@firebase/functions",HR="@firebase/functions-compat",WR="@firebase/installations",KR="@firebase/installations-compat",GR="@firebase/messaging",qR="@firebase/messaging-compat",QR="@firebase/performance",YR="@firebase/performance-compat",XR="@firebase/remote-config",JR="@firebase/remote-config-compat",ZR="@firebase/storage",e6="@firebase/storage-compat",t6="@firebase/firestore",n6="@firebase/ai",r6="@firebase/firestore-compat",i6="firebase",s6="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="[DEFAULT]",o6={[fm]:"fire-core",[DR]:"fire-core-compat",[LR]:"fire-analytics",[OR]:"fire-analytics-compat",[MR]:"fire-app-check",[jR]:"fire-app-check-compat",[VR]:"fire-auth",[FR]:"fire-auth-compat",[UR]:"fire-rtdb",[zR]:"fire-data-connect",[$R]:"fire-rtdb-compat",[BR]:"fire-fn",[HR]:"fire-fn-compat",[WR]:"fire-iid",[KR]:"fire-iid-compat",[GR]:"fire-fcm",[qR]:"fire-fcm-compat",[QR]:"fire-perf",[YR]:"fire-perf-compat",[XR]:"fire-rc",[JR]:"fire-rc-compat",[ZR]:"fire-gcs",[e6]:"fire-gcs-compat",[t6]:"fire-fst",[r6]:"fire-fst-compat",[n6]:"fire-vertex","fire-js":"fire-js",[i6]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=new Map,a6=new Map,mm=new Map;function rv(t,e){try{t.container.addComponent(e)}catch(n){$i.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Eo(t){const e=t.name;if(mm.has(e))return $i.debug(`There were multiple attempts to register component ${e}.`),!1;mm.set(e,t);for(const n of wd.values())rv(n,t);for(const n of a6.values())rv(n,t);return!0}function oh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hr(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},As=new nu("app","Firebase",l6);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=s6;function Ww(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:pm,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw As.create("bad-app-name",{appName:String(o)});if(n||(n=Uw()),!n)throw As.create("no-options");const l=wd.get(o);if(l){if(_o(n,l.options)&&_o(i,l.config))return l;throw As.create("duplicate-app",{appName:o})}const c=new mR(o);for(const f of mm.values())c.addComponent(f);const h=new u6(n,i,c);return wd.set(o,h),h}function ig(t=pm){const e=wd.get(t);if(!e&&t===pm&&Uw())return Ww();if(!e)throw As.create("no-app",{appName:t});return e}function li(t,e,n){var i;let o=(i=o6[t])!==null&&i!==void 0?i:t;n&&(o+=`-${n}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$i.warn(h.join(" "));return}Eo(new Ds(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c6="firebase-heartbeat-database",d6=1,$l="firebase-heartbeat-store";let Rp=null;function Kw(){return Rp||(Rp=RR(c6,d6,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($l)}catch(n){console.warn(n)}}}}).catch(t=>{throw As.create("idb-open",{originalErrorMessage:t.message})})),Rp}async function h6(t){try{const n=(await Kw()).transaction($l),i=await n.objectStore($l).get(Gw(t));return await n.done,i}catch(e){if(e instanceof pi)$i.warn(e.message);else{const n=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$i.warn(n.message)}}}async function iv(t,e){try{const i=(await Kw()).transaction($l,"readwrite");await i.objectStore($l).put(e,Gw(t)),await i.done}catch(n){if(n instanceof pi)$i.warn(n.message);else{const i=As.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$i.warn(i.message)}}}function Gw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f6=1024,p6=30;class m6{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y6(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=sv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>p6){const c=v6(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){$i.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sv(),{heartbeatsToSend:i,unsentEntries:o}=g6(this._heartbeatsCache.heartbeats),l=xd(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return $i.warn(n),""}}}function sv(){return new Date().toISOString().substring(0,10)}function g6(t,e=f6){const n=[];let i=t.slice();for(const o of t){const l=n.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),ov(n)>e){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ov(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class y6{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rR()?iR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await h6(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ov(t){return xd(JSON.stringify({version:2,heartbeats:t})).length}function v6(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x6(t){Eo(new Ds("platform-logger",e=>new AR(e),"PRIVATE")),Eo(new Ds("heartbeat",e=>new m6(e),"PRIVATE")),li(fm,nv,t),li(fm,nv,"esm2017"),li("fire-js","")}x6("");var w6="firebase",_6="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */li(w6,_6,"app");function qw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E6=qw,Qw=new nu("auth","Firebase",qw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=new ng("@firebase/auth");function b6(t,...e){_d.logLevel<=Ze.WARN&&_d.warn(`Auth (${Ao}): ${t}`,...e)}function Zc(t,...e){_d.logLevel<=Ze.ERROR&&_d.error(`Auth (${Ao}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t,...e){throw og(t,...e)}function Ur(t,...e){return og(t,...e)}function sg(t,e,n){const i=Object.assign(Object.assign({},E6()),{[e]:n});return new nu("auth","Firebase",i).create(e,{appName:t.name})}function vo(t){return sg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function I6(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ci(t,"argument-error"),sg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function og(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Qw.create(t,...e)}function Me(t,e,...n){if(!t)throw og(e,...n)}function Mi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zc(e),new Error(e)}function Bi(t,e){t||Mi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function T6(){return av()==="http:"||av()==="https:"}function av(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(T6()||Z5()||"connection"in navigator)?navigator.onLine:!0}function C6(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bi(n>e,"Short delay should be less than long delay!"),this.isMobile=Y5()||eR()}get(){return S6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t,e){Bi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k6=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],P6=new iu(3e4,6e4);function lg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ua(t,e,n,i,o={}){return Xw(t,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const h=ru(Object.assign({key:t.config.apiKey},c)).slice(1),f=await t._getAdditionalHeaders();f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode);const v=Object.assign({method:e,headers:f},l);return J5()||(v.referrerPolicy="no-referrer"),t.emulatorConfig&&Fa(t.emulatorConfig.host)&&(v.credentials="include"),Yw.fetch()(await Jw(t,t.config.apiHost,n,h),v)})}async function Xw(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},R6),e);try{const o=new N6(t),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Lc(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const h=l.ok?c.errorMessage:c.error.message,[f,v]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lc(t,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw Lc(t,"email-already-in-use",c);if(f==="USER_DISABLED")throw Lc(t,"user-disabled",c);const w=i[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw sg(t,w,v);ci(t,w)}}catch(o){if(o instanceof pi)throw o;ci(t,"network-request-failed",{message:String(o)})}}async function A6(t,e,n,i,o={}){const l=await Ua(t,e,n,i,o);return"mfaPendingCredential"in l&&ci(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function Jw(t,e,n,i){const o=`${e}${n}?${i}`,l=t,c=l.config.emulator?ag(t.config,o):`${t.config.apiScheme}://${o}`;return k6.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class N6{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ur(this.auth,"network-request-failed")),P6.get())})}}function Lc(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=Ur(t,e,i);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D6(t,e){return Ua(t,"POST","/v1/accounts:delete",e)}async function Ed(t,e){return Ua(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O6(t,e=!1){const n=zr(t),i=await n.getIdToken(e),o=ug(i);Me(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ol(kp(o.auth_time)),issuedAtTime:Ol(kp(o.iat)),expirationTime:Ol(kp(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function kp(t){return Number(t)*1e3}function ug(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Zc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Mw(n);return o?JSON.parse(o):(Zc("Failed to decode base64 JWT payload"),null)}catch(o){return Zc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function lv(t){const e=ug(t);return Me(e,"internal-error"),Me(typeof e.exp<"u","internal-error"),Me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof pi&&L6(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function L6({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ol(this.lastLoginAt),this.creationTime=Ol(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bd(t){var e;const n=t.auth,i=await t.getIdToken(),o=await Bl(t,Ed(n,{idToken:i}));Me(o==null?void 0:o.users.length,n,"internal-error");const l=o.users[0];t._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Zw(l.providerUserInfo):[],h=V6(t.providerData,c),f=t.isAnonymous,v=!(t.email&&l.passwordHash)&&!(h!=null&&h.length),w=f?v:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new ym(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(t,E)}async function M6(t){const e=zr(t);await bd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V6(t,e){return[...t.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Zw(t){return t.map(e=>{var{providerId:n}=e,i=Gm(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F6(t,e){const n=await Xw(t,{},async()=>{const i=ru({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=t.config,c=await Jw(t,o,"/v1/token",`key=${l}`),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",Yw.fetch()(c,{method:"POST",headers:h,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function U6(t,e){return Ua(t,"POST","/v2/accounts:revokeToken",lg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Me(e.idToken,"internal-error"),Me(typeof e.idToken<"u","internal-error"),Me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Me(e.length!==0,"internal-error");const n=lv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:o,expiresIn:l}=await F6(e,n);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:o,expirationTime:l}=n,c=new _a;return i&&(Me(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(Me(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(Me(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _a,this.toJSON())}_performRefresh(){return Mi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t,e){Me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jr{constructor(e){var{uid:n,auth:i,stsTokenManager:o}=e,l=Gm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new ym(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Bl(this,this.stsTokenManager.getToken(this.auth,e));return Me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return O6(this,e)}reload(){return M6(this)}_assign(e){this!==e&&(Me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await bd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hr(this.auth.app))return Promise.reject(vo(this.auth));const e=await this.getIdToken();return await Bl(this,D6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,o,l,c,h,f,v,w;const E=(i=n.displayName)!==null&&i!==void 0?i:void 0,b=(o=n.email)!==null&&o!==void 0?o:void 0,R=(l=n.phoneNumber)!==null&&l!==void 0?l:void 0,P=(c=n.photoURL)!==null&&c!==void 0?c:void 0,z=(h=n.tenantId)!==null&&h!==void 0?h:void 0,M=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,$=(v=n.createdAt)!==null&&v!==void 0?v:void 0,Y=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ee,emailVerified:X,isAnonymous:ne,providerData:D,stsTokenManager:C}=n;Me(ee&&C,e,"internal-error");const T=_a.fromJSON(this.name,C);Me(typeof ee=="string",e,"internal-error"),Es(E,e.name),Es(b,e.name),Me(typeof X=="boolean",e,"internal-error"),Me(typeof ne=="boolean",e,"internal-error"),Es(R,e.name),Es(P,e.name),Es(z,e.name),Es(M,e.name),Es($,e.name),Es(Y,e.name);const S=new jr({uid:ee,auth:e,email:b,emailVerified:X,displayName:E,isAnonymous:ne,photoURL:P,phoneNumber:R,tenantId:z,stsTokenManager:T,createdAt:$,lastLoginAt:Y});return D&&Array.isArray(D)&&(S.providerData=D.map(O=>Object.assign({},O))),M&&(S._redirectEventId=M),S}static async _fromIdTokenResponse(e,n,i=!1){const o=new _a;o.updateFromServerResponse(n);const l=new jr({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await bd(l),l}static async _fromGetAccountInfoResponse(e,n,i){const o=n.users[0];Me(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Zw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new _a;h.updateFromIdToken(i);const f=new jr({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new ym(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(f,v),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new Map;function Vi(t){Bi(t instanceof Function,"Expected a class definition");let e=uv.get(t);return e?(Bi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}e_.type="NONE";const cv=e_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t,e,n){return`firebase:${t}:${e}:${n}`}class Ea{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=ed(this.userKey,o.apiKey,l),this.fullPersistenceKey=ed("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ed(this.auth,{idToken:e}).catch(()=>{});return n?jr._fromGetAccountInfoResponse(this.auth,n,e):null}return jr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ea(Vi(cv),e,i);const o=(await Promise.all(n.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Vi(cv);const c=ed(i,e.config.apiKey,e.name);let h=null;for(const v of n)try{const w=await v._get(c);if(w){let E;if(typeof w=="string"){const b=await Ed(e,{idToken:w}).catch(()=>{});if(!b)break;E=await jr._fromGetAccountInfoResponse(e,b,w)}else E=jr._fromJSON(e,w);v!==l&&(h=E),l=v;break}}catch{}const f=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!f.length?new Ea(l,e,i):(l=f[0],h&&await l._set(c,h.toJSON()),await Promise.all(n.map(async v=>{if(v!==l)try{await v._remove(c)}catch{}})),new Ea(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(i_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(t_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(o_(e))return"Blackberry";if(a_(e))return"Webos";if(n_(e))return"Safari";if((e.includes("chrome/")||r_(e))&&!e.includes("edge/"))return"Chrome";if(s_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function t_(t=vn()){return/firefox\//i.test(t)}function n_(t=vn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function r_(t=vn()){return/crios\//i.test(t)}function i_(t=vn()){return/iemobile/i.test(t)}function s_(t=vn()){return/android/i.test(t)}function o_(t=vn()){return/blackberry/i.test(t)}function a_(t=vn()){return/webos/i.test(t)}function cg(t=vn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function z6(t=vn()){var e;return cg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $6(){return tR()&&document.documentMode===10}function l_(t=vn()){return cg(t)||s_(t)||a_(t)||o_(t)||/windows phone/i.test(t)||i_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t,e=[]){let n;switch(t){case"Browser":n=dv(vn());break;case"Worker":n=`${dv(vn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ao}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=l=>new Promise((c,h)=>{try{const f=e(l);c(f)}catch(f){h(f)}});i.onAbort=n,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H6(t,e={}){return Ua(t,"GET","/v2/passwordPolicy",lg(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W6=6;class K6{constructor(e){var n,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:W6,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,o,l,c,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(n=f.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),f.isValid&&(f.isValid=(i=f.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(l=f.containsUppercaseLetter)!==null&&l!==void 0?l:!0),f.isValid&&(f.isValid=(c=f.containsNumericCharacter)!==null&&c!==void 0?c:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6{constructor(e,n,i,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hv(this),this.idTokenSubscription=new hv(this),this.beforeStateQueue=new B6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vi(n)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Ea.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ed(this,{idToken:e}),i=await jr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,h=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===h)&&(f!=null&&f.user)&&(o=f.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C6()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hr(this.app))return Promise.reject(vo(this));const n=e?zr(e):null;return n&&Me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hr(this.app)?Promise.reject(vo(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hr(this.app)?Promise.reject(vo(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await H6(this),n=new K6(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nu("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await U6(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vi(e)||this._popupRedirectResolver;Me(n,this,"argument-error"),this.redirectPersistenceManager=await Ea.create(this,[Vi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Me(h,this,"internal-error"),h.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const f=e.addObserver(n,i,o);return()=>{c=!0,f()}}else{const f=e.addObserver(n);return()=>{c=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=u_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(hr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&b6(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ah(t){return zr(t)}class hv{constructor(e){this.auth=e,this.observer=null,this.addObserver=uR(n=>this.observer=n)}get next(){return Me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function q6(t){dg=t}function Q6(t){return dg.loadJS(t)}function Y6(){return dg.gapiScript}function X6(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J6(t,e){const n=oh(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(_o(l,e??{}))return o;ci(o,"already-initialized")}return n.initialize({options:e})}function Z6(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Vi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function ek(t,e,n){const i=ah(t);Me(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=c_(e),{host:c,port:h}=tk(e),f=h===null?"":`:${h}`,v={url:`${l}//${c}${f}/`},w=Object.freeze({host:c,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Me(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Me(_o(v,i.config.emulator)&&_o(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=v,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,Fa(c)?(eg(`${l}//${c}${f}`),tg("Auth",!0)):nk()}function c_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tk(t){const e=c_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:fv(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:fv(c)}}}function fv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mi("not implemented")}_getIdTokenResponse(e){return Mi("not implemented")}_linkToIdToken(e,n){return Mi("not implemented")}_getReauthenticationResolver(e){return Mi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(t,e){return A6(t,"POST","/v1/accounts:signInWithIdp",lg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk="http://localhost";class bo extends d_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ci("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=n,l=Gm(n,["providerId","signInMethod"]);if(!i||!o)return null;const c=new bo(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return ba(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ba(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ba(e,n)}buildRequest(){const e={requestUri:rk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ru(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends hg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends su{constructor(){super("facebook.com")}static credential(e){return bo._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ss.credential(e.oauthAccessToken)}catch{return null}}}Ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ss.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bo._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ji.credential(n,i)}catch{return null}}}ji.GOOGLE_SIGN_IN_METHOD="google.com";ji.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends su{constructor(){super("github.com")}static credential(e){return bo._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cs.credential(e.oauthAccessToken)}catch{return null}}}Cs.GITHUB_SIGN_IN_METHOD="github.com";Cs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends su{constructor(){super("twitter.com")}static credential(e,n){return bo._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Rs.credential(n,i)}catch{return null}}}Rs.TWITTER_SIGN_IN_METHOD="twitter.com";Rs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,o=!1){const l=await jr._fromIdTokenResponse(e,i,o),c=pv(i);return new Pa({user:l,providerId:c,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const o=pv(i);return new Pa({user:e,providerId:o,_tokenResponse:i,operationType:n})}}function pv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends pi{constructor(e,n,i,o){var l;super(n.code,n.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Id.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,o){return new Id(e,n,i,o)}}function h_(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Id._fromErrorAndOperation(t,l,e,i):l})}async function ik(t,e,n=!1){const i=await Bl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pa._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(t,e,n=!1){const{auth:i}=t;if(hr(i.app))return Promise.reject(vo(i));const o="reauthenticate";try{const l=await Bl(t,h_(i,o,e,t),n);Me(l.idToken,i,"internal-error");const c=ug(l.idToken);Me(c,i,"internal-error");const{sub:h}=c;return Me(t.uid===h,i,"user-mismatch"),Pa._forOperation(t,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&ci(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(t,e,n=!1){if(hr(t.app))return Promise.reject(vo(t));const i="signIn",o=await h_(t,i,e),l=await Pa._fromIdTokenResponse(t,i,o);return n||await t._updateCurrentUser(l.user),l}function ak(t,e,n,i){return zr(t).onIdTokenChanged(e,n,i)}function lk(t,e,n){return zr(t).beforeAuthStateChanged(e,n)}const Td="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Td,"1"),this.storage.removeItem(Td),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=1e3,ck=10;class p_ extends f_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=l_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),o=this.localCache[n];i!==o&&e(n,o,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,h,f)=>{this.notifyListeners(c,f)});return}const i=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!n&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);$6()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ck):o()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p_.type="LOCAL";const dk=p_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_ extends f_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}m_.type="SESSION";const g_=m_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const i=new lh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:o,data:l}=n.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(c).map(async v=>v(n.origin,l)),f=await hk(h);n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((h,f)=>{const v=fg("",20);o.port1.start();const w=setTimeout(()=>{f(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const b=E;if(b.data.eventId===v)switch(b.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(b.data.response);break;default:clearTimeout(w),clearTimeout(l),f(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:v,data:n},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){return window}function pk(t){ui().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){return typeof ui().WorkerGlobalScope<"u"&&typeof ui().importScripts=="function"}async function mk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yk(){return y_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="firebaseLocalStorageDb",vk=1,Sd="firebaseLocalStorage",x_="fbase_key";class ou{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uh(t,e){return t.transaction([Sd],e?"readwrite":"readonly").objectStore(Sd)}function xk(){const t=indexedDB.deleteDatabase(v_);return new ou(t).toPromise()}function vm(){const t=indexedDB.open(v_,vk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Sd,{keyPath:x_})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Sd)?e(i):(i.close(),await xk(),e(await vm()))})})}async function mv(t,e,n){const i=uh(t,!0).put({[x_]:e,value:n});return new ou(i).toPromise()}async function wk(t,e){const n=uh(t,!1).get(e),i=await new ou(n).toPromise();return i===void 0?null:i.value}function gv(t,e){const n=uh(t,!0).delete(e);return new ou(n).toPromise()}const _k=800,Ek=3;class w_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Ek)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(yk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mk(),!this.activeServiceWorker)return;this.sender=new fk(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vm();return await mv(e,Td,"1"),await gv(e,Td),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>mv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>wk(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=uh(o,!1).getAll();return new ou(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}w_.type="LOCAL";const bk=w_;new iu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t,e){return e?Vi(e):(Me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends d_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ba(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ba(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ba(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ik(t){return ok(t.auth,new pg(t),t.bypassAuthState)}function Tk(t){const{auth:e,user:n}=t;return Me(n,e,"internal-error"),sk(n,new pg(t),t.bypassAuthState)}async function Sk(t){const{auth:e,user:n}=t;return Me(n,e,"internal-error"),ik(n,new pg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:o,tenantId:l,error:c,type:h}=e;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ik;case"linkViaPopup":case"linkViaRedirect":return Sk;case"reauthViaPopup":case"reauthViaRedirect":return Tk;default:ci(this.auth,"internal-error")}}resolve(e){Bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=new iu(2e3,1e4);async function Rk(t,e,n){if(hr(t.app))return Promise.reject(Ur(t,"operation-not-supported-in-this-environment"));const i=ah(t);I6(t,e,hg);const o=__(i,n);return new po(i,"signInViaPopup",e,o).executeNotNull()}class po extends E_{constructor(e,n,i,o,l){super(e,n,o,l),this.provider=i,this.authWindow=null,this.pollId=null,po.currentPopupAction&&po.currentPopupAction.cancel(),po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Me(e,this.auth,"internal-error"),e}async onExecution(){Bi(this.filter.length===1,"Popup operations only handle one event");const e=fg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,po.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ck.get())};e()}}po.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="pendingRedirect",td=new Map;class Pk extends E_{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=td.get(this.auth._key());if(!e){try{const i=await Ak(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}td.set(this.auth._key(),e)}return this.bypassAuthState||td.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ak(t,e){const n=Ok(e),i=Dk(t);if(!await i._isAvailable())return!1;const o=await i._get(n)==="true";return await i._remove(n),o}function Nk(t,e){td.set(t._key(),e)}function Dk(t){return Vi(t._redirectPersistence)}function Ok(t){return ed(kk,t.config.apiKey,t.name)}async function Lk(t,e,n=!1){if(hr(t.app))return Promise.reject(vo(t));const i=ah(t),o=__(i,e),c=await new Pk(i,o,n).execute();return c&&!n&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=10*60*1e3;class Mk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!b_(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Ur(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jk&&this.cachedEventUids.clear(),this.cachedEventUids.has(yv(e))}saveEventToCache(e){this.cachedEventUids.add(yv(e)),this.lastProcessedEventTime=Date.now()}}function yv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function b_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t,e={}){return Ua(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zk=/^https?/;async function $k(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fk(t);for(const n of e)try{if(Bk(n))return}catch{}ci(t,"unauthorized-domain")}function Bk(t){const e=gm(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===i}if(!zk.test(n))return!1;if(Uk.test(t))return i===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=new iu(3e4,6e4);function vv(){const t=ui().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wk(t){return new Promise((e,n)=>{var i,o,l;function c(){vv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vv(),n(Ur(t,"network-request-failed"))},timeout:Hk.get()})}if(!((o=(i=ui().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ui().gapi)===null||l===void 0)&&l.load)c();else{const h=X6("iframefcb");return ui()[h]=()=>{gapi.load?c():n(Ur(t,"network-request-failed"))},Q6(`${Y6()}?onload=${h}`).catch(f=>n(f))}}).catch(e=>{throw nd=null,e})}let nd=null;function Kk(t){return nd=nd||Wk(t),nd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=new iu(5e3,15e3),qk="__/auth/iframe",Qk="emulator/auth/iframe",Yk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jk(t){const e=t.config;Me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ag(e,Qk):`https://${t.config.authDomain}/${qk}`,i={apiKey:e.apiKey,appName:t.name,v:Ao},o=Xk.get(t.config.apiHost);o&&(i.eid=o);const l=t._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${ru(i).slice(1)}`}async function Zk(t){const e=await Kk(t),n=ui().gapi;return Me(n,t,"internal-error"),e.open({where:document.body,url:Jk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yk,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=Ur(t,"network-request-failed"),h=ui().setTimeout(()=>{l(c)},Gk.get());function f(){ui().clearTimeout(h),o(i)}i.ping(f).then(f,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tP=500,nP=600,rP="_blank",iP="http://localhost";class xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sP(t,e,n,i=tP,o=nP){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const f=Object.assign(Object.assign({},eP),{width:i.toString(),height:o.toString(),top:l,left:c}),v=vn().toLowerCase();n&&(h=r_(v)?rP:n),t_(v)&&(e=e||iP,f.scrollbars="yes");const w=Object.entries(f).reduce((b,[R,P])=>`${b}${R}=${P},`,"");if(z6(v)&&h!=="_self")return oP(e||"",h),new xv(null);const E=window.open(e||"",h,w);Me(E,t,"popup-blocked");try{E.focus()}catch{}return new xv(E)}function oP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="__/auth/handler",lP="emulator/auth/handler",uP=encodeURIComponent("fac");async function wv(t,e,n,i,o,l){Me(t.config.authDomain,t,"auth-domain-config-required"),Me(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ao,eventId:o};if(e instanceof hg){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",lR(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,E]of Object.entries({}))c[w]=E}if(e instanceof su){const w=e.getScopes().filter(E=>E!=="");w.length>0&&(c.scopes=w.join(","))}t.tenantId&&(c.tid=t.tenantId);const h=c;for(const w of Object.keys(h))h[w]===void 0&&delete h[w];const f=await t._getAppCheckToken(),v=f?`#${uP}=${encodeURIComponent(f)}`:"";return`${cP(t)}?${ru(h).slice(1)}${v}`}function cP({config:t}){return t.emulator?ag(t,lP):`https://${t.authDomain}/${aP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="webStorageSupport";class dP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g_,this._completeRedirectFn=Lk,this._overrideRedirectResult=Nk}async _openPopup(e,n,i,o){var l;Bi((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await wv(e,n,i,gm(),o);return sP(e,c,fg())}async _openRedirect(e,n,i,o){await this._originValidation(e);const l=await wv(e,n,i,gm(),o);return pk(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(Bi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Zk(e),i=new Mk(e);return n.register("authEvent",o=>(Me(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pp,{type:Pp},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Pp];c!==void 0&&n(!!c),ci(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$k(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return l_()||n_()||cg()}}const hP=dP;var _v="@firebase/auth",Ev="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mP(t){Eo(new Ds("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=i.options;Me(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const f={apiKey:c,authDomain:h,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:u_(t)},v=new G6(i,o,l,f);return Z6(v,n),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Eo(new Ds("auth-internal",e=>{const n=ah(e.getProvider("auth").getImmediate());return(i=>new fP(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),li(_v,Ev,pP(t)),li(_v,Ev,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=5*60,yP=zw("authIdTokenMaxAge")||gP;let bv=null;const vP=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>yP)return;const o=n==null?void 0:n.token;bv!==o&&(bv=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function xP(t=ig()){const e=oh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=J6(t,{popupRedirectResolver:hP,persistence:[bk,dk,g_]}),i=zw("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=vP(l.toString());lk(n,c,()=>c(n.currentUser)),ak(n,h=>c(h))}}const o=Vw("auth");return o&&ek(n,`http://${o}`),n}function wP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}q6({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=o=>{const l=Ur("internal-error");l.customData=o,n(l)},i.type="text/javascript",i.charset="UTF-8",wP().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mP("Browser");var Iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,T){function S(){}S.prototype=T.prototype,C.D=T.prototype,C.prototype=new S,C.prototype.constructor=C,C.C=function(O,V,B){for(var k=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)k[Oe-2]=arguments[Oe];return T.prototype[V].apply(O,k)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,T,S){S||(S=0);var O=Array(16);if(typeof T=="string")for(var V=0;16>V;++V)O[V]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(V=0;16>V;++V)O[V]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=C.g[0],S=C.g[1],V=C.g[2];var B=C.g[3],k=T+(B^S&(V^B))+O[0]+3614090360&4294967295;T=S+(k<<7&4294967295|k>>>25),k=B+(V^T&(S^V))+O[1]+3905402710&4294967295,B=T+(k<<12&4294967295|k>>>20),k=V+(S^B&(T^S))+O[2]+606105819&4294967295,V=B+(k<<17&4294967295|k>>>15),k=S+(T^V&(B^T))+O[3]+3250441966&4294967295,S=V+(k<<22&4294967295|k>>>10),k=T+(B^S&(V^B))+O[4]+4118548399&4294967295,T=S+(k<<7&4294967295|k>>>25),k=B+(V^T&(S^V))+O[5]+1200080426&4294967295,B=T+(k<<12&4294967295|k>>>20),k=V+(S^B&(T^S))+O[6]+2821735955&4294967295,V=B+(k<<17&4294967295|k>>>15),k=S+(T^V&(B^T))+O[7]+4249261313&4294967295,S=V+(k<<22&4294967295|k>>>10),k=T+(B^S&(V^B))+O[8]+1770035416&4294967295,T=S+(k<<7&4294967295|k>>>25),k=B+(V^T&(S^V))+O[9]+2336552879&4294967295,B=T+(k<<12&4294967295|k>>>20),k=V+(S^B&(T^S))+O[10]+4294925233&4294967295,V=B+(k<<17&4294967295|k>>>15),k=S+(T^V&(B^T))+O[11]+2304563134&4294967295,S=V+(k<<22&4294967295|k>>>10),k=T+(B^S&(V^B))+O[12]+1804603682&4294967295,T=S+(k<<7&4294967295|k>>>25),k=B+(V^T&(S^V))+O[13]+4254626195&4294967295,B=T+(k<<12&4294967295|k>>>20),k=V+(S^B&(T^S))+O[14]+2792965006&4294967295,V=B+(k<<17&4294967295|k>>>15),k=S+(T^V&(B^T))+O[15]+1236535329&4294967295,S=V+(k<<22&4294967295|k>>>10),k=T+(V^B&(S^V))+O[1]+4129170786&4294967295,T=S+(k<<5&4294967295|k>>>27),k=B+(S^V&(T^S))+O[6]+3225465664&4294967295,B=T+(k<<9&4294967295|k>>>23),k=V+(T^S&(B^T))+O[11]+643717713&4294967295,V=B+(k<<14&4294967295|k>>>18),k=S+(B^T&(V^B))+O[0]+3921069994&4294967295,S=V+(k<<20&4294967295|k>>>12),k=T+(V^B&(S^V))+O[5]+3593408605&4294967295,T=S+(k<<5&4294967295|k>>>27),k=B+(S^V&(T^S))+O[10]+38016083&4294967295,B=T+(k<<9&4294967295|k>>>23),k=V+(T^S&(B^T))+O[15]+3634488961&4294967295,V=B+(k<<14&4294967295|k>>>18),k=S+(B^T&(V^B))+O[4]+3889429448&4294967295,S=V+(k<<20&4294967295|k>>>12),k=T+(V^B&(S^V))+O[9]+568446438&4294967295,T=S+(k<<5&4294967295|k>>>27),k=B+(S^V&(T^S))+O[14]+3275163606&4294967295,B=T+(k<<9&4294967295|k>>>23),k=V+(T^S&(B^T))+O[3]+4107603335&4294967295,V=B+(k<<14&4294967295|k>>>18),k=S+(B^T&(V^B))+O[8]+1163531501&4294967295,S=V+(k<<20&4294967295|k>>>12),k=T+(V^B&(S^V))+O[13]+2850285829&4294967295,T=S+(k<<5&4294967295|k>>>27),k=B+(S^V&(T^S))+O[2]+4243563512&4294967295,B=T+(k<<9&4294967295|k>>>23),k=V+(T^S&(B^T))+O[7]+1735328473&4294967295,V=B+(k<<14&4294967295|k>>>18),k=S+(B^T&(V^B))+O[12]+2368359562&4294967295,S=V+(k<<20&4294967295|k>>>12),k=T+(S^V^B)+O[5]+4294588738&4294967295,T=S+(k<<4&4294967295|k>>>28),k=B+(T^S^V)+O[8]+2272392833&4294967295,B=T+(k<<11&4294967295|k>>>21),k=V+(B^T^S)+O[11]+1839030562&4294967295,V=B+(k<<16&4294967295|k>>>16),k=S+(V^B^T)+O[14]+4259657740&4294967295,S=V+(k<<23&4294967295|k>>>9),k=T+(S^V^B)+O[1]+2763975236&4294967295,T=S+(k<<4&4294967295|k>>>28),k=B+(T^S^V)+O[4]+1272893353&4294967295,B=T+(k<<11&4294967295|k>>>21),k=V+(B^T^S)+O[7]+4139469664&4294967295,V=B+(k<<16&4294967295|k>>>16),k=S+(V^B^T)+O[10]+3200236656&4294967295,S=V+(k<<23&4294967295|k>>>9),k=T+(S^V^B)+O[13]+681279174&4294967295,T=S+(k<<4&4294967295|k>>>28),k=B+(T^S^V)+O[0]+3936430074&4294967295,B=T+(k<<11&4294967295|k>>>21),k=V+(B^T^S)+O[3]+3572445317&4294967295,V=B+(k<<16&4294967295|k>>>16),k=S+(V^B^T)+O[6]+76029189&4294967295,S=V+(k<<23&4294967295|k>>>9),k=T+(S^V^B)+O[9]+3654602809&4294967295,T=S+(k<<4&4294967295|k>>>28),k=B+(T^S^V)+O[12]+3873151461&4294967295,B=T+(k<<11&4294967295|k>>>21),k=V+(B^T^S)+O[15]+530742520&4294967295,V=B+(k<<16&4294967295|k>>>16),k=S+(V^B^T)+O[2]+3299628645&4294967295,S=V+(k<<23&4294967295|k>>>9),k=T+(V^(S|~B))+O[0]+4096336452&4294967295,T=S+(k<<6&4294967295|k>>>26),k=B+(S^(T|~V))+O[7]+1126891415&4294967295,B=T+(k<<10&4294967295|k>>>22),k=V+(T^(B|~S))+O[14]+2878612391&4294967295,V=B+(k<<15&4294967295|k>>>17),k=S+(B^(V|~T))+O[5]+4237533241&4294967295,S=V+(k<<21&4294967295|k>>>11),k=T+(V^(S|~B))+O[12]+1700485571&4294967295,T=S+(k<<6&4294967295|k>>>26),k=B+(S^(T|~V))+O[3]+2399980690&4294967295,B=T+(k<<10&4294967295|k>>>22),k=V+(T^(B|~S))+O[10]+4293915773&4294967295,V=B+(k<<15&4294967295|k>>>17),k=S+(B^(V|~T))+O[1]+2240044497&4294967295,S=V+(k<<21&4294967295|k>>>11),k=T+(V^(S|~B))+O[8]+1873313359&4294967295,T=S+(k<<6&4294967295|k>>>26),k=B+(S^(T|~V))+O[15]+4264355552&4294967295,B=T+(k<<10&4294967295|k>>>22),k=V+(T^(B|~S))+O[6]+2734768916&4294967295,V=B+(k<<15&4294967295|k>>>17),k=S+(B^(V|~T))+O[13]+1309151649&4294967295,S=V+(k<<21&4294967295|k>>>11),k=T+(V^(S|~B))+O[4]+4149444226&4294967295,T=S+(k<<6&4294967295|k>>>26),k=B+(S^(T|~V))+O[11]+3174756917&4294967295,B=T+(k<<10&4294967295|k>>>22),k=V+(T^(B|~S))+O[2]+718787259&4294967295,V=B+(k<<15&4294967295|k>>>17),k=S+(B^(V|~T))+O[9]+3951481745&4294967295,C.g[0]=C.g[0]+T&4294967295,C.g[1]=C.g[1]+(V+(k<<21&4294967295|k>>>11))&4294967295,C.g[2]=C.g[2]+V&4294967295,C.g[3]=C.g[3]+B&4294967295}i.prototype.u=function(C,T){T===void 0&&(T=C.length);for(var S=T-this.blockSize,O=this.B,V=this.h,B=0;B<T;){if(V==0)for(;B<=S;)o(this,C,B),B+=this.blockSize;if(typeof C=="string"){for(;B<T;)if(O[V++]=C.charCodeAt(B++),V==this.blockSize){o(this,O),V=0;break}}else for(;B<T;)if(O[V++]=C[B++],V==this.blockSize){o(this,O),V=0;break}}this.h=V,this.o+=T},i.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var T=1;T<C.length-8;++T)C[T]=0;var S=8*this.o;for(T=C.length-8;T<C.length;++T)C[T]=S&255,S/=256;for(this.u(C),C=Array(16),T=S=0;4>T;++T)for(var O=0;32>O;O+=8)C[S++]=this.g[T]>>>O&255;return C};function l(C,T){var S=h;return Object.prototype.hasOwnProperty.call(S,C)?S[C]:S[C]=T(C)}function c(C,T){this.h=T;for(var S=[],O=!0,V=C.length-1;0<=V;V--){var B=C[V]|0;O&&B==T||(S[V]=B,O=!1)}this.g=S}var h={};function f(C){return-128<=C&&128>C?l(C,function(T){return new c([T|0],0>T?-1:0)}):new c([C|0],0>C?-1:0)}function v(C){if(isNaN(C)||!isFinite(C))return E;if(0>C)return M(v(-C));for(var T=[],S=1,O=0;C>=S;O++)T[O]=C/S|0,S*=4294967296;return new c(T,0)}function w(C,T){if(C.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C.charAt(0)=="-")return M(w(C.substring(1),T));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=v(Math.pow(T,8)),O=E,V=0;V<C.length;V+=8){var B=Math.min(8,C.length-V),k=parseInt(C.substring(V,V+B),T);8>B?(B=v(Math.pow(T,B)),O=O.j(B).add(v(k))):(O=O.j(S),O=O.add(v(k)))}return O}var E=f(0),b=f(1),R=f(16777216);t=c.prototype,t.m=function(){if(z(this))return-M(this).m();for(var C=0,T=1,S=0;S<this.g.length;S++){var O=this.i(S);C+=(0<=O?O:4294967296+O)*T,T*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(P(this))return"0";if(z(this))return"-"+M(this).toString(C);for(var T=v(Math.pow(C,6)),S=this,O="";;){var V=X(S,T).g;S=$(S,V.j(T));var B=((0<S.g.length?S.g[0]:S.h)>>>0).toString(C);if(S=V,P(S))return B+O;for(;6>B.length;)B="0"+B;O=B+O}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function P(C){if(C.h!=0)return!1;for(var T=0;T<C.g.length;T++)if(C.g[T]!=0)return!1;return!0}function z(C){return C.h==-1}t.l=function(C){return C=$(this,C),z(C)?-1:P(C)?0:1};function M(C){for(var T=C.g.length,S=[],O=0;O<T;O++)S[O]=~C.g[O];return new c(S,~C.h).add(b)}t.abs=function(){return z(this)?M(this):this},t.add=function(C){for(var T=Math.max(this.g.length,C.g.length),S=[],O=0,V=0;V<=T;V++){var B=O+(this.i(V)&65535)+(C.i(V)&65535),k=(B>>>16)+(this.i(V)>>>16)+(C.i(V)>>>16);O=k>>>16,B&=65535,k&=65535,S[V]=k<<16|B}return new c(S,S[S.length-1]&-2147483648?-1:0)};function $(C,T){return C.add(M(T))}t.j=function(C){if(P(this)||P(C))return E;if(z(this))return z(C)?M(this).j(M(C)):M(M(this).j(C));if(z(C))return M(this.j(M(C)));if(0>this.l(R)&&0>C.l(R))return v(this.m()*C.m());for(var T=this.g.length+C.g.length,S=[],O=0;O<2*T;O++)S[O]=0;for(O=0;O<this.g.length;O++)for(var V=0;V<C.g.length;V++){var B=this.i(O)>>>16,k=this.i(O)&65535,Oe=C.i(V)>>>16,rt=C.i(V)&65535;S[2*O+2*V]+=k*rt,Y(S,2*O+2*V),S[2*O+2*V+1]+=B*rt,Y(S,2*O+2*V+1),S[2*O+2*V+1]+=k*Oe,Y(S,2*O+2*V+1),S[2*O+2*V+2]+=B*Oe,Y(S,2*O+2*V+2)}for(O=0;O<T;O++)S[O]=S[2*O+1]<<16|S[2*O];for(O=T;O<2*T;O++)S[O]=0;return new c(S,0)};function Y(C,T){for(;(C[T]&65535)!=C[T];)C[T+1]+=C[T]>>>16,C[T]&=65535,T++}function ee(C,T){this.g=C,this.h=T}function X(C,T){if(P(T))throw Error("division by zero");if(P(C))return new ee(E,E);if(z(C))return T=X(M(C),T),new ee(M(T.g),M(T.h));if(z(T))return T=X(C,M(T)),new ee(M(T.g),T.h);if(30<C.g.length){if(z(C)||z(T))throw Error("slowDivide_ only works with positive integers.");for(var S=b,O=T;0>=O.l(C);)S=ne(S),O=ne(O);var V=D(S,1),B=D(O,1);for(O=D(O,2),S=D(S,2);!P(O);){var k=B.add(O);0>=k.l(C)&&(V=V.add(S),B=k),O=D(O,1),S=D(S,1)}return T=$(C,V.j(T)),new ee(V,T)}for(V=E;0<=C.l(T);){for(S=Math.max(1,Math.floor(C.m()/T.m())),O=Math.ceil(Math.log(S)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),B=v(S),k=B.j(T);z(k)||0<k.l(C);)S-=O,B=v(S),k=B.j(T);P(B)&&(B=b),V=V.add(B),C=$(C,k)}return new ee(V,C)}t.A=function(C){return X(this,C).h},t.and=function(C){for(var T=Math.max(this.g.length,C.g.length),S=[],O=0;O<T;O++)S[O]=this.i(O)&C.i(O);return new c(S,this.h&C.h)},t.or=function(C){for(var T=Math.max(this.g.length,C.g.length),S=[],O=0;O<T;O++)S[O]=this.i(O)|C.i(O);return new c(S,this.h|C.h)},t.xor=function(C){for(var T=Math.max(this.g.length,C.g.length),S=[],O=0;O<T;O++)S[O]=this.i(O)^C.i(O);return new c(S,this.h^C.h)};function ne(C){for(var T=C.g.length+1,S=[],O=0;O<T;O++)S[O]=C.i(O)<<1|C.i(O-1)>>>31;return new c(S,C.h)}function D(C,T){var S=T>>5;T%=32;for(var O=C.g.length-S,V=[],B=0;B<O;B++)V[B]=0<T?C.i(B+S)>>>T|C.i(B+S+1)<<32-T:C.i(B+S);return new c(V,C.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=v,c.fromString=w,mg=c}).apply(typeof Iv<"u"?Iv:typeof self<"u"?self:typeof window<"u"?window:{});var jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var I_,Pl,T_,rd,xm,S_,C_,R_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,x){return u==Array.prototype||u==Object.prototype||(u[m]=x.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof jc=="object"&&jc];for(var m=0;m<u.length;++m){var x=u[m];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}var i=n(this);function o(u,m){if(m)e:{var x=i;u=u.split(".");for(var I=0;I<u.length-1;I++){var W=u[I];if(!(W in x))break e;x=x[W]}u=u[u.length-1],I=x[u],m=m(I),m!=I&&m!=null&&e(x,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var x=0,I=!1,W={next:function(){if(!I&&x<u.length){var Z=x++;return{value:m(Z,u[Z]),done:!1}}return I=!0,{done:!0,value:void 0}}};return W[Symbol.iterator]=function(){return W},W}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,x){return x})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function f(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function v(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,x){return u.call.apply(u.bind,arguments)}function E(u,m,x){if(!u)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var W=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(W,I),u.apply(m,W)}}return function(){return u.apply(m,arguments)}}function b(u,m,x){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:E,b.apply(null,arguments)}function R(u,m){var x=Array.prototype.slice.call(arguments,1);return function(){var I=x.slice();return I.push.apply(I,arguments),u.apply(this,I)}}function P(u,m){function x(){}x.prototype=m.prototype,u.aa=m.prototype,u.prototype=new x,u.prototype.constructor=u,u.Qb=function(I,W,Z){for(var fe=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)fe[ct-2]=arguments[ct];return m.prototype[W].apply(I,fe)}}function z(u){const m=u.length;if(0<m){const x=Array(m);for(let I=0;I<m;I++)x[I]=u[I];return x}return[]}function M(u,m){for(let x=1;x<arguments.length;x++){const I=arguments[x];if(f(I)){const W=u.length||0,Z=I.length||0;u.length=W+Z;for(let fe=0;fe<Z;fe++)u[W+fe]=I[fe]}else u.push(I)}}class ${constructor(m,x){this.i=m,this.j=x,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Y(u){return/^[\s\xa0]*$/.test(u)}function ee(){var u=h.navigator;return u&&(u=u.userAgent)?u:""}function X(u){return X[" "](u),u}X[" "]=function(){};var ne=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function D(u,m,x){for(const I in u)m.call(x,u[I],I,u)}function C(u,m){for(const x in u)m.call(void 0,u[x],x,u)}function T(u){const m={};for(const x in u)m[x]=u[x];return m}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(u,m){let x,I;for(let W=1;W<arguments.length;W++){I=arguments[W];for(x in I)u[x]=I[x];for(let Z=0;Z<S.length;Z++)x=S[Z],Object.prototype.hasOwnProperty.call(I,x)&&(u[x]=I[x])}}function V(u){var m=1;u=u.split(":");const x=[];for(;0<m&&u.length;)x.push(u.shift()),m--;return u.length&&x.push(u.join(":")),x}function B(u){h.setTimeout(()=>{throw u},0)}function k(){var u=pe;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Oe{constructor(){this.h=this.g=null}add(m,x){const I=rt.get();I.set(m,x),this.h?this.h.next=I:this.g=I,this.h=I}}var rt=new $(()=>new Ae,u=>u.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(m,x){this.h=m,this.g=x,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,le=!1,pe=new Oe,ce=()=>{const u=h.Promise.resolve(void 0);Fe=()=>{u.then(U)}};var U=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(x){B(x)}var m=rt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}le=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Pe=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const x=()=>{};h.addEventListener("test",x,m),h.removeEventListener("test",x,m)}catch{}return u}();function Ne(u,m){if(me.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var x=this.type=u.type,I=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(ne){e:{try{X(m.nodeName);var W=!0;break e}catch{}W=!1}W||(m=null)}}else x=="mouseover"?m=u.fromElement:x=="mouseout"&&(m=u.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ne.aa.h.call(this)}}P(Ne,me);var De={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ke="closure_listenable_"+(1e6*Math.random()|0),He=0;function Je(u,m,x,I,W){this.listener=u,this.proxy=null,this.src=m,this.type=x,this.capture=!!I,this.ha=W,this.key=++He,this.da=this.fa=!1}function Ge(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function kt(u){this.src=u,this.g={},this.h=0}kt.prototype.add=function(u,m,x,I,W){var Z=u.toString();u=this.g[Z],u||(u=this.g[Z]=[],this.h++);var fe=Br(u,m,I,W);return-1<fe?(m=u[fe],x||(m.fa=!1)):(m=new Je(m,this.src,Z,!!I,W),m.fa=x,u.push(m)),m};function Ut(u,m){var x=m.type;if(x in u.g){var I=u.g[x],W=Array.prototype.indexOf.call(I,m,void 0),Z;(Z=0<=W)&&Array.prototype.splice.call(I,W,1),Z&&(Ge(m),u.g[x].length==0&&(delete u.g[x],u.h--))}}function Br(u,m,x,I){for(var W=0;W<u.length;++W){var Z=u[W];if(!Z.da&&Z.listener==m&&Z.capture==!!x&&Z.ha==I)return W}return-1}var xn="closure_lm_"+(1e6*Math.random()|0),Wi={};function Us(u,m,x,I,W){if(Array.isArray(m)){for(var Z=0;Z<m.length;Z++)Us(u,m[Z],x,I,W);return null}return x=yi(x),u&&u[Ke]?u.K(m,x,v(I)?!!I.capture:!1,W):Ki(u,m,x,!1,I,W)}function Ki(u,m,x,I,W,Z){if(!m)throw Error("Invalid event type");var fe=v(W)?!!W.capture:!!W,ct=Jn(u);if(ct||(u[xn]=ct=new kt(u)),x=ct.add(m,x,I,fe,Z),x.proxy)return x;if(I=Oo(),x.proxy=I,I.src=u,I.listener=x,u.addEventListener)Pe||(W=fe),W===void 0&&(W=!1),u.addEventListener(m.toString(),I,W);else if(u.attachEvent)u.attachEvent(xr(m.toString()),I);else if(u.addListener&&u.removeListener)u.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return x}function Oo(){function u(x){return m.call(u.src,u.listener,x)}const m=Vn;return u}function Gi(u,m,x,I,W){if(Array.isArray(m))for(var Z=0;Z<m.length;Z++)Gi(u,m[Z],x,I,W);else I=v(I)?!!I.capture:!!I,x=yi(x),u&&u[Ke]?(u=u.i,m=String(m).toString(),m in u.g&&(Z=u.g[m],x=Br(Z,x,I,W),-1<x&&(Ge(Z[x]),Array.prototype.splice.call(Z,x,1),Z.length==0&&(delete u.g[m],u.h--)))):u&&(u=Jn(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Br(m,x,I,W)),(x=-1<u?m[u]:null)&&vr(x))}function vr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ke])Ut(m.i,u);else{var x=u.type,I=u.proxy;m.removeEventListener?m.removeEventListener(x,I,u.capture):m.detachEvent?m.detachEvent(xr(x),I):m.addListener&&m.removeListener&&m.removeListener(I),(x=Jn(m))?(Ut(x,u),x.h==0&&(x.src=null,m[xn]=null)):Ge(u)}}}function xr(u){return u in Wi?Wi[u]:Wi[u]="on"+u}function Vn(u,m){if(u.da)u=!0;else{m=new Ne(m,this);var x=u.listener,I=u.ha||u.src;u.fa&&vr(u),u=x.call(I,m)}return u}function Jn(u){return u=u[xn],u instanceof kt?u:null}var gi="__closure_events_fn_"+(1e9*Math.random()>>>0);function yi(u){return typeof u=="function"?u:(u[gi]||(u[gi]=function(m){return u.handleEvent(m)}),u[gi])}function dt(){te.call(this),this.i=new kt(this),this.M=this,this.F=null}P(dt,te),dt.prototype[Ke]=!0,dt.prototype.removeEventListener=function(u,m,x,I){Gi(this,u,m,x,I)};function ut(u,m){var x,I=u.F;if(I)for(x=[];I;I=I.F)x.push(I);if(u=u.M,I=m.type||m,typeof m=="string")m=new me(m,u);else if(m instanceof me)m.target=m.target||u;else{var W=m;m=new me(I,u),O(m,W)}if(W=!0,x)for(var Z=x.length-1;0<=Z;Z--){var fe=m.g=x[Z];W=Zn(fe,I,!0,m)&&W}if(fe=m.g=u,W=Zn(fe,I,!0,m)&&W,W=Zn(fe,I,!1,m)&&W,x)for(Z=0;Z<x.length;Z++)fe=m.g=x[Z],W=Zn(fe,I,!1,m)&&W}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var x=u.g[m],I=0;I<x.length;I++)Ge(x[I]);delete u.g[m],u.h--}}this.F=null},dt.prototype.K=function(u,m,x,I){return this.i.add(String(u),m,!1,x,I)},dt.prototype.L=function(u,m,x,I){return this.i.add(String(u),m,!0,x,I)};function Zn(u,m,x,I){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var W=!0,Z=0;Z<m.length;++Z){var fe=m[Z];if(fe&&!fe.da&&fe.capture==x){var ct=fe.listener,Mt=fe.ha||fe.src;fe.fa&&Ut(u.i,fe),W=ct.call(Mt,I)!==!1&&W}}return W&&!I.defaultPrevented}function vi(u,m,x){if(typeof u=="function")x&&(u=b(u,x));else if(u&&typeof u.handleEvent=="function")u=b(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:h.setTimeout(u,m||0)}function Hr(u){u.g=vi(()=>{u.g=null,u.i&&(u.i=!1,Hr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class cn extends te{constructor(m,x){super(),this.m=m,this.l=x,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(u){te.call(this),this.h=u,this.g={}}P(Wr,te);var qi=[];function Qi(u){D(u.g,function(m,x){this.g.hasOwnProperty(x)&&vr(m)},u),u.g={}}Wr.prototype.N=function(){Wr.aa.N.call(this),Qi(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zs=h.JSON.stringify,Yi=h.JSON.parse,Kr=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Gr(){}Gr.prototype.h=null;function qr(u){return u.h||(u.h=u.i())}function Xi(){}var wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function er(){me.call(this,"d")}P(er,me);function xi(){me.call(this,"c")}P(xi,me);var _n={},Qr=null;function wi(){return Qr=Qr||new dt}_n.La="serverreachability";function $s(u){me.call(this,_n.La,u)}P($s,me);function L(u){const m=wi();ut(m,new $s(m))}_n.STAT_EVENT="statevent";function H(u,m){me.call(this,_n.STAT_EVENT,u),this.stat=m}P(H,me);function q(u){const m=wi();ut(m,new H(m,u))}_n.Ma="timingevent";function oe(u,m){me.call(this,_n.Ma,u),this.size=m}P(oe,me);function he(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function _e(){this.g=!0}_e.prototype.xa=function(){this.g=!1};function Ce(u,m,x,I,W,Z){u.info(function(){if(u.g)if(Z)for(var fe="",ct=Z.split("&"),Mt=0;Mt<ct.length;Mt++){var tt=ct[Mt].split("=");if(1<tt.length){var Bt=tt[0];tt=tt[1];var Nt=Bt.split("_");fe=2<=Nt.length&&Nt[1]=="type"?fe+(Bt+"="+tt+"&"):fe+(Bt+"=redacted&")}}else fe=null;else fe=Z;return"XMLHTTP REQ ("+I+") [attempt "+W+"]: "+m+`
`+x+`
`+fe})}function ge(u,m,x,I,W,Z,fe){u.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+W+"]: "+m+`
`+x+`
`+Z+" "+fe})}function xe(u,m,x,I){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Le(u,x)+(I?" "+I:"")})}function Se(u,m){u.info(function(){return"TIMEOUT: "+m})}_e.prototype.info=function(){};function Le(u,m){if(!u.g)return m;if(!m)return null;try{var x=JSON.parse(m);if(x){for(u=0;u<x.length;u++)if(Array.isArray(x[u])){var I=x[u];if(!(2>I.length)){var W=I[1];if(Array.isArray(W)&&!(1>W.length)){var Z=W[0];if(Z!="noop"&&Z!="stop"&&Z!="close")for(var fe=1;fe<W.length;fe++)W[fe]=""}}}}return zs(x)}catch{return m}}var Ie={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ue={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qe;function ft(){}P(ft,Gr),ft.prototype.g=function(){return new XMLHttpRequest},ft.prototype.i=function(){return{}},qe=new ft;function ht(u,m,x,I){this.j=u,this.i=m,this.l=x,this.R=I||1,this.U=new Wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zt}function zt(){this.i=null,this.g="",this.h=!1}var Qe={},tr={};function Sn(u,m,x){u.L=1,u.v=rs(zn(m)),u.m=x,u.P=!0,wr(u,null)}function wr(u,m){u.F=Date.now(),ot(u),u.A=zn(u.v);var x=u.A,I=u.R;Array.isArray(I)||(I=[String(I)]),ss(x.i,"t",I),u.C=0,x=u.j.J,u.h=new zt,u.g=Iu(u.j,x?m:null,!u.m),0<u.O&&(u.M=new cn(b(u.Y,u,u.g),u.O)),m=u.U,x=u.g,I=u.ca;var W="readystatechange";Array.isArray(W)||(W&&(qi[0]=W.toString()),W=qi);for(var Z=0;Z<W.length;Z++){var fe=Us(x,W[Z],I||m.handleEvent,!1,m.h||m);if(!fe)break;m.g[fe.key]=fe}m=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),L(),Ce(u.i,u.u,u.A,u.l,u.R,u.m)}ht.prototype.ca=function(u){u=u.target;const m=this.M;m&&Rn(u)==3?m.j():this.Y(u)},ht.prototype.Y=function(u){try{if(u==this.g)e:{const Nt=Rn(this.g);var m=this.g.Ba();const ir=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||Ka(this.g)))){this.J||Nt!=4||m==7||(m==8||0>=ir?L(3):L(2)),En(this);var x=this.g.Z();this.X=x;t:if(Jt(this)){var I=Ka(this.g);u="";var W=I.length,Z=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ze(this),Fn(this);var fe="";break t}this.h.i=new h.TextDecoder}for(m=0;m<W;m++)this.h.h=!0,u+=this.h.i.decode(I[m],{stream:!(Z&&m==W-1)});I.length=0,this.h.g+=u,this.C=0,fe=this.h.g}else fe=this.g.oa();if(this.o=x==200,ge(this.i,this.u,this.A,this.l,this.R,Nt,x),this.o){if(this.T&&!this.K){t:{if(this.g){var ct,Mt=this.g;if((ct=Mt.g?Mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(ct)){var tt=ct;break t}}tt=null}if(x=tt)xe(this.i,this.l,x,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$t(this,x);else{this.o=!1,this.s=3,q(12),ze(this),Fn(this);break e}}if(this.P){x=!0;let Bn;for(;!this.J&&this.C<fe.length;)if(Bn=_i(this,fe),Bn==tr){Nt==4&&(this.s=4,q(14),x=!1),xe(this.i,this.l,null,"[Incomplete Response]");break}else if(Bn==Qe){this.s=4,q(15),xe(this.i,this.l,fe,"[Invalid Chunk]"),x=!1;break}else xe(this.i,this.l,Bn,null),$t(this,Bn);if(Jt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||fe.length!=0||this.h.h||(this.s=1,q(16),x=!1),this.o=this.o&&x,!x)xe(this.i,this.l,fe,"[Invalid Chunked Response]"),ze(this),Fn(this);else if(0<fe.length&&!this.W){this.W=!0;var Bt=this.j;Bt.g==this&&Bt.ba&&!Bt.M&&(Bt.j.info("Great, no buffering proxy detected. Bytes received: "+fe.length),qa(Bt),Bt.M=!0,q(11))}}else xe(this.i,this.l,fe,null),$t(this,fe);Nt==4&&ze(this),this.o&&!this.J&&(Nt==4?Ko(this.j,this):(this.o=!1,ot(this)))}else zo(this.g),x==400&&0<fe.indexOf("Unknown SID")?(this.s=3,q(12)):(this.s=0,q(13)),ze(this),Fn(this)}}}catch{}finally{}};function Jt(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function _i(u,m){var x=u.C,I=m.indexOf(`
`,x);return I==-1?tr:(x=Number(m.substring(x,I)),isNaN(x)?Qe:(I+=1,I+x>m.length?tr:(m=m.slice(I,I+x),u.C=I+x,m)))}ht.prototype.cancel=function(){this.J=!0,ze(this)};function ot(u){u.S=Date.now()+u.I,Ji(u,u.I)}function Ji(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=he(b(u.ba,u),m)}function En(u){u.B&&(h.clearTimeout(u.B),u.B=null)}ht.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Se(this.i,this.A),this.L!=2&&(L(),q(17)),ze(this),this.s=2,Fn(this)):Ji(this,this.S-u)};function Fn(u){u.j.G==0||u.J||Ko(u.j,u)}function ze(u){En(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Qi(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function $t(u,m){try{var x=u.j;if(x.G!=0&&(x.g==u||St(x.h,u))){if(!u.K&&St(x.h,u)&&x.G==3){try{var I=x.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var W=I;if(W[0]==0){e:if(!x.u){if(x.g)if(x.g.F+3e3<u.F)Wo(x),Tr(x);else break e;Ho(x),q(18)}}else x.za=W[1],0<x.za-x.T&&37500>W[2]&&x.F&&x.v==0&&!x.C&&(x.C=he(b(x.Za,x),6e3));if(1>=yt(x.h)&&x.ca){try{x.ca()}catch{}x.ca=void 0}}else Si(x,11)}else if((u.K||x.g==u)&&Wo(x),!Y(m))for(W=x.Da.g.parse(m),m=0;m<W.length;m++){let tt=W[m];if(x.T=tt[0],tt=tt[1],x.G==2)if(tt[0]=="c"){x.K=tt[1],x.ia=tt[2];const Bt=tt[3];Bt!=null&&(x.la=Bt,x.j.info("VER="+x.la));const Nt=tt[4];Nt!=null&&(x.Aa=Nt,x.j.info("SVER="+x.Aa));const ir=tt[5];ir!=null&&typeof ir=="number"&&0<ir&&(I=1.5*ir,x.L=I,x.j.info("backChannelRequestTimeoutMs_="+I)),I=x;const Bn=u.g;if(Bn){const qs=Bn.g?Bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qs){var Z=I.h;Z.g||qs.indexOf("spdy")==-1&&qs.indexOf("quic")==-1&&qs.indexOf("h2")==-1||(Z.j=Z.l,Z.g=new Set,Z.h&&(Zi(Z,Z.h),Z.h=null))}if(I.D){const qo=Bn.g?Bn.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(I.ya=qo,pt(I.I,I.D,qo))}}x.G=3,x.l&&x.l.ua(),x.ba&&(x.R=Date.now()-u.F,x.j.info("Handshake RTT: "+x.R+"ms")),I=x;var fe=u;if(I.qa=bu(I,I.J?I.ia:null,I.W),fe.K){Lo(I.h,fe);var ct=fe,Mt=I.L;Mt&&(ct.I=Mt),ct.B&&(En(ct),ot(ct)),I.g=fe}else Gs(I);0<x.i.length&&Zr(x)}else tt[0]!="stop"&&tt[0]!="close"||Si(x,7);else x.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?Si(x,7):tn(x):tt[0]!="noop"&&x.l&&x.l.ta(tt),x.v=0)}}L(4)}catch{}}var Un=class{constructor(u,m){this.g=u,this.map=m}};function nr(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function yt(u){return u.h?1:u.g?u.g.size:0}function St(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Zi(u,m){u.g?u.g.add(m):u.h=m}function Lo(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}nr.prototype.cancel=function(){if(this.i=hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function hu(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const x of u.g.values())m=m.concat(x.D);return m}return z(u.i)}function jo(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(f(u)){for(var m=[],x=u.length,I=0;I<x;I++)m.push(u[I]);return m}m=[],x=0;for(I in u)m[x++]=u[I];return m}function Mo(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(f(u)||typeof u=="string"){var m=[];u=u.length;for(var x=0;x<u;x++)m.push(x);return m}m=[],x=0;for(const I in u)m[x++]=I;return m}}}function es(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(f(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var x=Mo(u),I=jo(u),W=I.length,Z=0;Z<W;Z++)m.call(void 0,I[Z],x&&x[Z],u)}var Bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bh(u,m){if(u){u=u.split("&");for(var x=0;x<u.length;x++){var I=u[x].indexOf("="),W=null;if(0<=I){var Z=u[x].substring(0,I);W=u[x].substring(I+1)}else Z=u[x];m(Z,W?decodeURIComponent(W.replace(/\+/g," ")):"")}}}function Ei(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ei){this.h=u.h,Hs(this,u.j),this.o=u.o,this.g=u.g,ts(this,u.s),this.l=u.l;var m=u.i,x=new Yr;x.i=m.i,m.g&&(x.g=new Map(m.g),x.h=m.h),ns(this,x),this.m=u.m}else u&&(m=String(u).match(Bs))?(this.h=!1,Hs(this,m[1]||"",!0),this.o=et(m[2]||""),this.g=et(m[3]||"",!0),ts(this,m[4]),this.l=et(m[5]||"",!0),ns(this,m[6]||"",!0),this.m=et(m[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}Ei.prototype.toString=function(){var u=[],m=this.j;m&&u.push(is(m,Vo,!0),":");var x=this.g;return(x||m=="file")&&(u.push("//"),(m=this.o)&&u.push(is(m,Vo,!0),"@"),u.push(encodeURIComponent(String(x)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),x=this.s,x!=null&&u.push(":",String(x))),(x=this.l)&&(this.g&&x.charAt(0)!="/"&&u.push("/"),u.push(is(x,x.charAt(0)=="/"?mu:pu,!0))),(x=this.i.toString())&&u.push("?",x),(x=this.m)&&u.push("#",is(x,Ba)),u.join("")};function zn(u){return new Ei(u)}function Hs(u,m,x){u.j=x?et(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ts(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ns(u,m,x){m instanceof Yr?(u.i=m,Xr(u.i,u.h)):(x||(m=is(m,gu)),u.i=new Yr(m,u.h))}function pt(u,m,x){u.i.set(m,x)}function rs(u){return pt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function et(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function is(u,m,x){return typeof u=="string"?(u=encodeURI(u).replace(m,fu),x&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function fu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Vo=/[#\/\?@]/g,pu=/[#\?:]/g,mu=/[#\?]/g,gu=/[#\?@]/g,Ba=/#/g;function Yr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function en(u){u.g||(u.g=new Map,u.h=0,u.i&&bh(u.i,function(m,x){u.add(decodeURIComponent(m.replace(/\+/g," ")),x)}))}t=Yr.prototype,t.add=function(u,m){en(this),this.i=null,u=rr(this,u);var x=this.g.get(u);return x||this.g.set(u,x=[]),x.push(m),this.h+=1,this};function _r(u,m){en(u),m=rr(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Er(u,m){return en(u),m=rr(u,m),u.g.has(m)}t.forEach=function(u,m){en(this),this.g.forEach(function(x,I){x.forEach(function(W){u.call(m,W,I,this)},this)},this)},t.na=function(){en(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),x=[];for(let I=0;I<m.length;I++){const W=u[I];for(let Z=0;Z<W.length;Z++)x.push(m[I])}return x},t.V=function(u){en(this);let m=[];if(typeof u=="string")Er(this,u)&&(m=m.concat(this.g.get(rr(this,u))));else{u=Array.from(this.g.values());for(let x=0;x<u.length;x++)m=m.concat(u[x])}return m},t.set=function(u,m){return en(this),this.i=null,u=rr(this,u),Er(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},t.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ss(u,m,x){_r(u,m),0<x.length&&(u.i=null,u.g.set(rr(u,m),z(x)),u.h+=x.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var x=0;x<m.length;x++){var I=m[x];const Z=encodeURIComponent(String(I)),fe=this.V(I);for(I=0;I<fe.length;I++){var W=Z;fe[I]!==""&&(W+="="+encodeURIComponent(String(fe[I]))),u.push(W)}}return this.i=u.join("&")};function rr(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Xr(u,m){m&&!u.j&&(en(u),u.i=null,u.g.forEach(function(x,I){var W=I.toLowerCase();I!=W&&(_r(this,I),ss(this,W,x))},u)),u.j=m}function Ih(u,m){const x=new _e;if(h.Image){const I=new Image;I.onload=R(Cn,x,"TestLoadImage: loaded",!0,m,I),I.onerror=R(Cn,x,"TestLoadImage: error",!1,m,I),I.onabort=R(Cn,x,"TestLoadImage: abort",!1,m,I),I.ontimeout=R(Cn,x,"TestLoadImage: timeout",!1,m,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=u}else m(!1)}function yu(u,m){const x=new _e,I=new AbortController,W=setTimeout(()=>{I.abort(),Cn(x,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:I.signal}).then(Z=>{clearTimeout(W),Z.ok?Cn(x,"TestPingServer: ok",!0,m):Cn(x,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(W),Cn(x,"TestPingServer: error",!1,m)})}function Cn(u,m,x,I,W){try{W&&(W.onload=null,W.onerror=null,W.onabort=null,W.ontimeout=null),I(x)}catch{}}function Th(){this.g=new Kr}function vu(u,m,x){const I=x||"";try{es(u,function(W,Z){let fe=W;v(W)&&(fe=zs(W)),m.push(I+Z+"="+encodeURIComponent(fe))})}catch(W){throw m.push(I+"type="+encodeURIComponent("_badmap")),W}}function bi(u){this.l=u.Ub||null,this.j=u.eb||!1}P(bi,Gr),bi.prototype.g=function(){return new Ws(this.l,this.j)},bi.prototype.i=function(u){return function(){return u}}({});function Ws(u,m){dt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ws,dt),t=Ws.prototype,t.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Ir(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||h).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,br(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ir(this)),this.g&&(this.readyState=3,Ir(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function xu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?br(this):Ir(this),this.readyState==3&&xu(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,br(this))},t.Qa=function(u){this.g&&(this.response=u,br(this))},t.ga=function(){this.g&&br(this)};function br(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ir(u)}t.setRequestHeader=function(u,m){this.u.append(u,m)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var x=m.next();!x.done;)x=x.value,u.push(x[0]+": "+x[1]),x=m.next();return u.join(`\r
`)};function Ir(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ii(u){let m="";return D(u,function(x,I){m+=I,m+=":",m+=x,m+=`\r
`}),m}function os(u,m,x){e:{for(I in x){var I=!1;break e}I=!0}I||(x=Ii(x),typeof u=="string"?x!=null&&encodeURIComponent(String(x)):pt(u,m,x))}function _t(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(_t,dt);var Sh=/^https?$/i,Ha=["POST","PUT"];t=_t.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,m,x,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qe.g(),this.v=this.o?qr(this.o):qr(qe),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(Z){Ks(this,Z);return}if(u=x||"",x=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var W in I)x.set(W,I[W]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const Z of I.keys())x.set(Z,I.get(Z));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(x.keys()).find(Z=>Z.toLowerCase()=="content-type"),W=h.FormData&&u instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Ha,m,void 0))||I||W||x.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Z,fe]of x)this.g.setRequestHeader(Z,fe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uo(this),this.u=!0,this.g.send(u),this.u=!1}catch(Z){Ks(this,Z)}};function Ks(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Fo(u),$n(u)}function Fo(u){u.A||(u.A=!0,ut(u,"complete"),ut(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ut(this,"complete"),ut(this,"abort"),$n(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$n(this,!0)),_t.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wa(this):this.bb())},t.bb=function(){Wa(this)};function Wa(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Rn(u)!=4||u.Z()!=2)){if(u.u&&Rn(u)==4)vi(u.Ea,0,u);else if(ut(u,"readystatechange"),Rn(u)==4){u.h=!1;try{const fe=u.Z();e:switch(fe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var x;if(!(x=m)){var I;if(I=fe===0){var W=String(u.D).match(Bs)[1]||null;!W&&h.self&&h.self.location&&(W=h.self.location.protocol.slice(0,-1)),I=!Sh.test(W?W.toLowerCase():"")}x=I}if(x)ut(u,"complete"),ut(u,"success");else{u.m=6;try{var Z=2<Rn(u)?u.g.statusText:""}catch{Z=""}u.l=Z+" ["+u.Z()+"]",Fo(u)}}finally{$n(u)}}}}function $n(u,m){if(u.g){Uo(u);const x=u.g,I=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ut(u,"ready");try{x.onreadystatechange=I}catch{}}}function Uo(u){u.I&&(h.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Rn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Yi(m)}};function Ka(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function zo(u){const m={};u=(u.g&&2<=Rn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<u.length;I++){if(Y(u[I]))continue;var x=V(u[I]);const W=x[0];if(x=x[1],typeof x!="string")continue;x=x.trim();const Z=m[W]||[];m[W]=Z,Z.push(x)}C(m,function(I){return I.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(u,m,x){return x&&x.internalChannelParams&&x.internalChannelParams[u]||m}function Ga(u){this.Aa=0,this.i=[],this.j=new _e,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,u),this.cb=Jr("retryDelaySeedMs",1e4,u),this.Wa=Jr("forwardChannelMaxRetries",2,u),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new nr(u&&u.concurrentRequestLimit),this.Da=new Th,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ga.prototype,t.la=8,t.G=1,t.connect=function(u,m,x,I){q(0),this.W=u,this.H=m||{},x&&I!==void 0&&(this.H.OSID=x,this.H.OAID=I),this.F=this.X,this.I=bu(this,null,this.W),Zr(this)};function tn(u){if($o(u),u.G==3){var m=u.U++,x=zn(u.I);if(pt(x,"SID",u.K),pt(x,"RID",m),pt(x,"TYPE","terminate"),Ti(u,x),m=new ht(u,u.j,m),m.L=2,m.v=rs(zn(x)),x=!1,h.navigator&&h.navigator.sendBeacon)try{x=h.navigator.sendBeacon(m.v.toString(),"")}catch{}!x&&h.Image&&(new Image().src=m.v,x=!0),x||(m.g=Iu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),ot(m)}Eu(u)}function Tr(u){u.g&&(qa(u),u.g.cancel(),u.g=null)}function $o(u){Tr(u),u.u&&(h.clearTimeout(u.u),u.u=null),Wo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&h.clearTimeout(u.s),u.s=null)}function Zr(u){if(!Zt(u.h)&&!u.s){u.s=!0;var m=u.Ga;Fe||ce(),le||(Fe(),le=!0),pe.add(m,u),u.B=0}}function Ch(u,m){return yt(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=he(b(u.Ga,u,m),_u(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const W=new ht(this,this.j,u);let Z=this.o;if(this.S&&(Z?(Z=T(Z),O(Z,this.S)):Z=this.S),this.m!==null||this.O||(W.H=Z,Z=null),this.P)e:{for(var m=0,x=0;x<this.i.length;x++){t:{var I=this.i[x];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=x;break e}if(m===4096||x===this.i.length-1){m=x+1;break e}}m=1e3}else m=1e3;m=as(this,W,m),x=zn(this.I),pt(x,"RID",u),pt(x,"CVER",22),this.D&&pt(x,"X-HTTP-Session-Id",this.D),Ti(this,x),Z&&(this.O?m="headers="+encodeURIComponent(String(Ii(Z)))+"&"+m:this.m&&os(x,this.m,Z)),Zi(this.h,W),this.Ua&&pt(x,"TYPE","init"),this.P?(pt(x,"$req",m),pt(x,"SID","null"),W.T=!0,Sn(W,x,null)):Sn(W,x,m),this.G=2}}else this.G==3&&(u?Bo(this,u):this.i.length==0||Zt(this.h)||Bo(this))};function Bo(u,m){var x;m?x=m.l:x=u.U++;const I=zn(u.I);pt(I,"SID",u.K),pt(I,"RID",x),pt(I,"AID",u.T),Ti(u,I),u.m&&u.o&&os(I,u.m,u.o),x=new ht(u,u.j,x,u.B+1),u.m===null&&(x.H=u.o),m&&(u.i=m.D.concat(u.i)),m=as(u,x,1e3),x.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Zi(u.h,x),Sn(x,I,m)}function Ti(u,m){u.H&&D(u.H,function(x,I){pt(m,I,x)}),u.l&&es({},function(x,I){pt(m,I,x)})}function as(u,m,x){x=Math.min(u.i.length,x);var I=u.l?b(u.l.Na,u.l,u):null;e:{var W=u.i;let Z=-1;for(;;){const fe=["count="+x];Z==-1?0<x?(Z=W[0].g,fe.push("ofs="+Z)):Z=0:fe.push("ofs="+Z);let ct=!0;for(let Mt=0;Mt<x;Mt++){let tt=W[Mt].g;const Bt=W[Mt].map;if(tt-=Z,0>tt)Z=Math.max(0,W[Mt].g-100),ct=!1;else try{vu(Bt,fe,"req"+tt+"_")}catch{I&&I(Bt)}}if(ct){I=fe.join("&");break e}}}return u=u.i.splice(0,x),m.D=u,I}function Gs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Fe||ce(),le||(Fe(),le=!0),pe.add(m,u),u.v=0}}function Ho(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=he(b(u.Fa,u),_u(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,wu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=he(b(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,q(10),Tr(this),wu(this))};function qa(u){u.A!=null&&(h.clearTimeout(u.A),u.A=null)}function wu(u){u.g=new ht(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=zn(u.qa);pt(m,"RID","rpc"),pt(m,"SID",u.K),pt(m,"AID",u.T),pt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&pt(m,"TO",u.ja),pt(m,"TYPE","xmlhttp"),Ti(u,m),u.m&&u.o&&os(m,u.m,u.o),u.L&&(u.g.I=u.L);var x=u.g;u=u.ia,x.L=1,x.v=rs(zn(m)),x.m=null,x.P=!0,wr(x,u)}t.Za=function(){this.C!=null&&(this.C=null,Tr(this),Ho(this),q(19))};function Wo(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Ko(u,m){var x=null;if(u.g==m){Wo(u),qa(u),u.g=null;var I=2}else if(St(u.h,m))x=m.D,Lo(u.h,m),I=1;else return;if(u.G!=0){if(m.o)if(I==1){x=m.m?m.m.length:0,m=Date.now()-m.F;var W=u.B;I=wi(),ut(I,new oe(I,x)),Zr(u)}else Gs(u);else if(W=m.s,W==3||W==0&&0<m.X||!(I==1&&Ch(u,m)||I==2&&Ho(u)))switch(x&&0<x.length&&(m=u.h,m.i=m.i.concat(x)),W){case 1:Si(u,5);break;case 4:Si(u,10);break;case 3:Si(u,6);break;default:Si(u,2)}}}function _u(u,m){let x=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(x*=2),x*m}function Si(u,m){if(u.j.info("Error code "+m),m==2){var x=b(u.fb,u),I=u.Xa;const W=!I;I=new Ei(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Hs(I,"https"),rs(I),W?Ih(I.toString(),x):yu(I.toString(),x)}else q(2);u.G=0,u.l&&u.l.sa(m),Eu(u),$o(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),q(2)):(this.j.info("Failed to ping google.com"),q(1))};function Eu(u){if(u.G=0,u.ka=[],u.l){const m=hu(u.h);(m.length!=0||u.i.length!=0)&&(M(u.ka,m),M(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function bu(u,m,x){var I=x instanceof Ei?zn(x):new Ei(x);if(I.g!="")m&&(I.g=m+"."+I.g),ts(I,I.s);else{var W=h.location;I=W.protocol,m=m?m+"."+W.hostname:W.hostname,W=+W.port;var Z=new Ei(null);I&&Hs(Z,I),m&&(Z.g=m),W&&ts(Z,W),x&&(Z.l=x),I=Z}return x=u.D,m=u.ya,x&&m&&pt(I,x,m),pt(I,"VER",u.la),Ti(u,I),I}function Iu(u,m,x){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new _t(new bi({eb:x})):new _t(u.pa),m.Ha(u.J),m}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qa(){}t=Qa.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Go(){}Go.prototype.g=function(u,m){return new bn(u,m)};function bn(u,m){dt.call(this),this.g=new Ga(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Y(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Y(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ei(this)}P(bn,dt),bn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bn.prototype.close=function(){tn(this.g)},bn.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var x={};x.__data__=u,u=x}else this.u&&(x={},x.__data__=zs(u),u=x);m.i.push(new Un(m.Ya++,u)),m.G==3&&Zr(m)},bn.prototype.N=function(){this.g.l=null,delete this.j,tn(this.g),delete this.g,bn.aa.N.call(this)};function Tu(u){er.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const x in m){u=x;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}P(Tu,er);function Su(){xi.call(this),this.status=1}P(Su,xi);function ei(u){this.g=u}P(ei,Qa),ei.prototype.ua=function(){ut(this.g,"a")},ei.prototype.ta=function(u){ut(this.g,new Tu(u))},ei.prototype.sa=function(u){ut(this.g,new Su)},ei.prototype.ra=function(){ut(this.g,"b")},Go.prototype.createWebChannel=Go.prototype.g,bn.prototype.send=bn.prototype.o,bn.prototype.open=bn.prototype.m,bn.prototype.close=bn.prototype.close,R_=function(){return new Go},C_=function(){return wi()},S_=_n,xm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ie.NO_ERROR=0,Ie.TIMEOUT=8,Ie.HTTP_ERROR=6,rd=Ie,Ue.COMPLETE="complete",T_=Ue,Xi.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Pl=Xi,_t.prototype.listenOnce=_t.prototype.L,_t.prototype.getLastError=_t.prototype.Ka,_t.prototype.getLastErrorCode=_t.prototype.Ba,_t.prototype.getStatus=_t.prototype.Z,_t.prototype.getResponseJson=_t.prototype.Oa,_t.prototype.getResponseText=_t.prototype.oa,_t.prototype.send=_t.prototype.ea,_t.prototype.setWithCredentials=_t.prototype.Ha,I_=_t}).apply(typeof jc<"u"?jc:typeof self<"u"?self:typeof window<"u"?window:{});const Tv="@firebase/firestore",Sv="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gn.UNAUTHENTICATED=new gn(null),gn.GOOGLE_CREDENTIALS=new gn("google-credentials-uid"),gn.FIRST_PARTY=new gn("first-party-uid"),gn.MOCK_USER=new gn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new ng("@firebase/firestore");function ya(){return Io.logLevel}function be(t,...e){if(Io.logLevel<=Ze.DEBUG){const n=e.map(gg);Io.debug(`Firestore (${za}): ${t}`,...n)}}function To(t,...e){if(Io.logLevel<=Ze.ERROR){const n=e.map(gg);Io.error(`Firestore (${za}): ${t}`,...n)}}function ch(t,...e){if(Io.logLevel<=Ze.WARN){const n=e.map(gg);Io.warn(`Firestore (${za}): ${t}`,...n)}}function gg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,k_(t,i,n)}function k_(t,e,n){let i=`FIRESTORE (${za}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw To(i),new Error(i)}function Rt(t,e,n,i){let o="Unexpected state";typeof n=="string"?o=n:i=n,t||k_(e,o,i)}function gt(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ve extends pi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _P{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gn.UNAUTHENTICATED))}shutdown(){}}class EP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bP{constructor(e){this.t=e,this.currentUser=gn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Rt(this.o===void 0,42304);let i=this.i;const o=f=>this.i!==i?(i=this.i,n(f)):Promise.resolve();let l=new xo;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new xo,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const f=l;e.enqueueRetryable(async()=>{await f.promise,await o(this.currentUser)})},h=f=>{be("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(be("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new xo)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(be("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Rt(typeof i.accessToken=="string",31837,{l:i}),new P_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Rt(e===null||typeof e=="string",2055,{h:e}),new gn(e)}}class IP{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=gn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class TP{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new IP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(gn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,hr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Rt(this.o===void 0,3512);const i=l=>{l.error!=null&&be("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,be("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{be("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):be("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Rt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Cv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=CP(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<n&&(i+=e.charAt(o[l]%62))}return i}}function st(t,e){return t<e?-1:t>e?1:0}function wm(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=t.codePointAt(n),o=e.codePointAt(n);if(i!==o){if(i<128&&o<128)return st(i,o);{const l=RP(),c=kP(l.encode(Rv(t,n)),l.encode(Rv(e,n)));return c!==0?c:st(i,o)}}n+=i>65535?2:1}return st(t.length,e.length)}function Rv(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function kP(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return st(t[n],e[n]);return st(t.length,e.length)}function Aa(t,e,n){return t.length===e.length&&t.every((i,o)=>n(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=-62135596800,Pv=1e6;class Xt{static now(){return Xt.fromMillis(Date.now())}static fromDate(e){return Xt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Pv);return new Xt(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Ve(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ve(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<kv)throw new Ve(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ve(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pv}_compareTo(e){return this.seconds===e.seconds?st(this.nanoseconds,e.nanoseconds):st(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-kv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{static fromTimestamp(e){return new bt(e)}static min(){return new bt(new Xt(0,0))}static max(){return new bt(new Xt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="__name__";class si{constructor(e,n,i){n===void 0?n=0:n>e.length&&Xe(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Xe(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof si?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let o=0;o<i;o++){const l=si.compareSegments(e.get(o),n.get(o));if(l!==0)return l}return st(e.length,n.length)}static compareSegments(e,n){const i=si.isNumericId(e),o=si.isNumericId(n);return i&&!o?-1:!i&&o?1:i&&o?si.extractNumericId(e).compare(si.extractNumericId(n)):wm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mg.fromString(e.substring(4,e.length-2))}}class jt extends si{construct(e,n,i){return new jt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new Ve(ue.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(o=>o.length>0))}return new jt(n)}static emptyPath(){return new jt([])}}const PP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ln extends si{construct(e,n,i){return new ln(e,n,i)}static isValidIdentifier(e){return PP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ln.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Av}static keyField(){return new ln([Av])}static fromServerFormat(e){const n=[];let i="",o=0;const l=()=>{if(i.length===0)throw new Ve(ue.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let c=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new Ve(ue.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new Ve(ue.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=f,o+=2}else h==="`"?(c=!c,o++):h!=="."||c?(i+=h,o++):(l(),o++)}if(l(),c)throw new Ve(ue.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ln(n)}static emptyPath(){return new ln([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.path=e}static fromPath(e){return new We(jt.fromString(e))}static fromName(e){return new We(jt.fromString(e).popFirst(5))}static empty(){return new We(jt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&jt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return jt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new We(new jt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=-1;function AP(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,o=bt.fromTimestamp(i===1e9?new Xt(n+1,0):new Xt(n,i));return new Os(o,We.empty(),e)}function NP(t){return new Os(t.readTime,t.key,Hl)}class Os{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Os(bt.min(),We.empty(),Hl)}static max(){return new Os(bt.max(),We.empty(),Hl)}}function DP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=We.comparator(t.documentKey,e.documentKey),n!==0?n:st(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(t){if(t.code!==ue.FAILED_PRECONDITION||t.message!==OP)throw t;be("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Xe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new re((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(n,l).next(i,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof re?n:re.resolve(n)}catch(n){return re.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):re.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):re.reject(n)}static resolve(e){return new re((n,i)=>{n(e)})}static reject(e){return new re((n,i)=>{i(e)})}static waitFor(e){return new re((n,i)=>{let o=0,l=0,c=!1;e.forEach(h=>{++o,h.next(()=>{++l,c&&l===o&&n()},f=>i(f))}),c=!0,l===o&&n()})}static or(e){let n=re.resolve(!1);for(const i of e)n=n.next(o=>o?re.resolve(o):i());return n}static forEach(e,n){const i=[];return e.forEach((o,l)=>{i.push(n.call(this,o,l))}),this.waitFor(i)}static mapArray(e,n){return new re((i,o)=>{const l=e.length,c=new Array(l);let h=0;for(let f=0;f<l;f++){const v=f;n(e[v]).next(w=>{c[v]=w,++h,h===l&&i(c)},w=>o(w))}})}static doWhile(e,n){return new re((i,o)=>{const l=()=>{e()===!0?n().next(()=>{l()},o):i()};l()})}}function jP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function au(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>n.writeSequenceNumber(i))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}vg.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=-1;function wg(t){return t==null}function Cd(t){return t===0&&1/t==-1/0}function MP(t){return typeof t=="number"&&Number.isInteger(t)&&!Cd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="";function VP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Nv(e)),e=FP(t.get(n),e);return Nv(e)}function FP(t,e){let n=e;const i=t.length;for(let o=0;o<i;o++){const l=t.charAt(o);switch(l){case"\0":n+="";break;case N_:n+="";break;default:n+=l}}return n}function Nv(t){return t+N_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $a(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function D_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){this.comparator=e,this.root=n||on.EMPTY}insert(e,n){return new Mn(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,on.BLACK,null,null))}remove(e){return new Mn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,on.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return n+i.left.size;o<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mc(this.root,e,this.comparator,!0)}}class Mc{constructor(e,n,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=n?i(e.key,n):1,n&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class on{constructor(e,n,i,o,l){this.key=e,this.value=n,this.color=i??on.RED,this.left=o??on.EMPTY,this.right=l??on.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,o,l){return new on(e??this.key,n??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,n,i),null):l===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return on.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return on.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,on.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,on.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Xe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Xe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Xe(27949);return e+(this.isRed()?0:1)}}on.EMPTY=null,on.RED=!0,on.BLACK=!1;on.EMPTY=new class{constructor(){this.size=0}get key(){throw Xe(57766)}get value(){throw Xe(16141)}get color(){throw Xe(16727)}get left(){throw Xe(29726)}get right(){throw Xe(36894)}copy(e,n,i,o,l){return this}insert(e,n,i){return new on(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.comparator=e,this.data=new Mn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ov(this.data.getIterator())}getIteratorFrom(e){return new Ov(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof un)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new un(this.comparator);return n.data=e,n}}class Ov{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.fields=e,e.sort(ln.comparator)}static empty(){return new Mr([])}unionWith(e){let n=new un(ln.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Mr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Aa(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new UP("Invalid base64 string: "+l):l}}(e);return new di(n)}static fromUint8Array(e){const n=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new di(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let o=0;o<n.length;o++)i[o]=n.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return st(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}di.EMPTY_BYTE_STRING=new di("");const zP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function So(t){if(Rt(!!t,39018),typeof t=="string"){let e=0;const n=zP.exec(t);if(Rt(!!n,46558,{timestamp:t}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:an(t.seconds),nanos:an(t.nanos)}}function an(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Na(t){return typeof t=="string"?di.fromBase64String(t):di.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="server_timestamp",L_="__type__",j_="__previous_value__",M_="__local_write_time__";function _g(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[L_])===null||n===void 0?void 0:n.stringValue)===O_}function Eg(t){const e=t.mapValue.fields[j_];return _g(e)?Eg(e):e}function Rd(t){const e=So(t.mapValue.fields[M_].timestampValue);return new Xt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n,i,o,l,c,h,f,v,w){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=v,this.isUsingEmulator=w}}const kd="(default)";class Pd{constructor(e,n){this.projectId=e,this.database=n||kd}static empty(){return new Pd("","")}get isDefaultDatabase(){return this.database===kd}isEqual(e){return e instanceof Pd&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="__type__",BP="__max__",Vc={mapValue:{}},F_="__vector__",_m="value";function Co(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_g(t)?4:WP(t)?9007199254740991:HP(t)?10:11:Xe(28295,{value:t})}function hi(t,e){if(t===e)return!0;const n=Co(t);if(n!==Co(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rd(t).isEqual(Rd(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=So(o.timestampValue),h=So(l.timestampValue);return c.seconds===h.seconds&&c.nanos===h.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(o,l){return Na(o.bytesValue).isEqual(Na(l.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(o,l){return an(o.geoPointValue.latitude)===an(l.geoPointValue.latitude)&&an(o.geoPointValue.longitude)===an(l.geoPointValue.longitude)}(t,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return an(o.integerValue)===an(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=an(o.doubleValue),h=an(l.doubleValue);return c===h?Cd(c)===Cd(h):isNaN(c)&&isNaN(h)}return!1}(t,e);case 9:return Aa(t.arrayValue.values||[],e.arrayValue.values||[],hi);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},h=l.mapValue.fields||{};if(Dv(c)!==Dv(h))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(h[f]===void 0||!hi(c[f],h[f])))return!1;return!0}(t,e);default:return Xe(52216,{left:t})}}function Wl(t,e){return(t.values||[]).find(n=>hi(n,e))!==void 0}function Da(t,e){if(t===e)return 0;const n=Co(t),i=Co(e);if(n!==i)return st(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return st(t.booleanValue,e.booleanValue);case 2:return function(l,c){const h=an(l.integerValue||l.doubleValue),f=an(c.integerValue||c.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(t,e);case 3:return Lv(t.timestampValue,e.timestampValue);case 4:return Lv(Rd(t),Rd(e));case 5:return wm(t.stringValue,e.stringValue);case 6:return function(l,c){const h=Na(l),f=Na(c);return h.compareTo(f)}(t.bytesValue,e.bytesValue);case 7:return function(l,c){const h=l.split("/"),f=c.split("/");for(let v=0;v<h.length&&v<f.length;v++){const w=st(h[v],f[v]);if(w!==0)return w}return st(h.length,f.length)}(t.referenceValue,e.referenceValue);case 8:return function(l,c){const h=st(an(l.latitude),an(c.latitude));return h!==0?h:st(an(l.longitude),an(c.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return jv(t.arrayValue,e.arrayValue);case 10:return function(l,c){var h,f,v,w;const E=l.fields||{},b=c.fields||{},R=(h=E[_m])===null||h===void 0?void 0:h.arrayValue,P=(f=b[_m])===null||f===void 0?void 0:f.arrayValue,z=st(((v=R==null?void 0:R.values)===null||v===void 0?void 0:v.length)||0,((w=P==null?void 0:P.values)===null||w===void 0?void 0:w.length)||0);return z!==0?z:jv(R,P)}(t.mapValue,e.mapValue);case 11:return function(l,c){if(l===Vc.mapValue&&c===Vc.mapValue)return 0;if(l===Vc.mapValue)return 1;if(c===Vc.mapValue)return-1;const h=l.fields||{},f=Object.keys(h),v=c.fields||{},w=Object.keys(v);f.sort(),w.sort();for(let E=0;E<f.length&&E<w.length;++E){const b=wm(f[E],w[E]);if(b!==0)return b;const R=Da(h[f[E]],v[w[E]]);if(R!==0)return R}return st(f.length,w.length)}(t.mapValue,e.mapValue);default:throw Xe(23264,{Pe:n})}}function Lv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return st(t,e);const n=So(t),i=So(e),o=st(n.seconds,i.seconds);return o!==0?o:st(n.nanos,i.nanos)}function jv(t,e){const n=t.values||[],i=e.values||[];for(let o=0;o<n.length&&o<i.length;++o){const l=Da(n[o],i[o]);if(l)return l}return st(n.length,i.length)}function Oa(t){return Em(t)}function Em(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=So(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Na(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return We.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",o=!0;for(const l of n.values||[])o?o=!1:i+=",",i+=Em(l);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${Em(n.fields[c])}`;return o+"}"}(t.mapValue):Xe(61005,{value:t})}function id(t){switch(Co(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Eg(t);return e?16+id(e):16;case 5:return 2*t.stringValue.length;case 6:return Na(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+id(l),0)}(t.arrayValue);case 10:case 11:return function(i){let o=0;return $a(i.fields,(l,c)=>{o+=l.length+id(c)}),o}(t.mapValue);default:throw Xe(13486,{value:t})}}function bm(t){return!!t&&"integerValue"in t}function bg(t){return!!t&&"arrayValue"in t}function sd(t){return!!t&&"mapValue"in t}function HP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[V_])===null||n===void 0?void 0:n.stringValue)===F_}function Ll(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $a(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ll(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ll(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===BP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.value=e}static empty(){return new Dr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!sd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ll(n)}setAll(e){let n=ln.emptyPath(),i={},o=[];e.forEach((c,h)=>{if(!n.isImmediateParentOf(h)){const f=this.getFieldsMap(n);this.applyChanges(f,i,o),i={},o=[],n=h.popLast()}c?i[h.lastSegment()]=Ll(c):o.push(h.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,i,o)}delete(e){const n=this.field(e.popLast());sd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=n.mapValue.fields[e.get(i)];sd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,i){$a(n,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new Dr(Ll(this.value))}}function U_(t){const e=[];return $a(t.fields,(n,i)=>{const o=new ln([n]);if(sd(i)){const l=U_(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)}),new Mr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,i,o,l,c,h){this.key=e,this.documentType=n,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=h}static newInvalidDocument(e){return new Nr(e,0,bt.min(),bt.min(),bt.min(),Dr.empty(),0)}static newFoundDocument(e,n,i,o){return new Nr(e,1,n,bt.min(),i,o,0)}static newNoDocument(e,n){return new Nr(e,2,n,bt.min(),bt.min(),Dr.empty(),0)}static newUnknownDocument(e,n){return new Nr(e,3,n,bt.min(),bt.min(),Dr.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(bt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.position=e,this.inclusive=n}}function Mv(t,e,n){let i=0;for(let o=0;o<t.position.length;o++){const l=e[o],c=t.position[o];if(l.field.isKeyField()?i=We.comparator(We.fromName(c.referenceValue),n.key):i=Da(c,n.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Vv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hi(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n="asc"){this.field=e,this.dir=n}}function KP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{}class Yt extends z_{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new qP(e,n,i):n==="array-contains"?new XP(e,i):n==="in"?new JP(e,i):n==="not-in"?new ZP(e,i):n==="array-contains-any"?new eA(e,i):new Yt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new QP(e,i):new YP(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Da(n,this.value)):n!==null&&Co(this.value)===Co(n)&&this.matchesComparison(Da(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Xe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ls extends z_{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Ls(e,n)}matches(e){return $_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function $_(t){return t.op==="and"}function B_(t){return GP(t)&&$_(t)}function GP(t){for(const e of t.filters)if(e instanceof Ls)return!1;return!0}function Im(t){if(t instanceof Yt)return t.field.canonicalString()+t.op.toString()+Oa(t.value);if(B_(t))return t.filters.map(e=>Im(e)).join(",");{const e=t.filters.map(n=>Im(n)).join(",");return`${t.op}(${e})`}}function H_(t,e){return t instanceof Yt?function(i,o){return o instanceof Yt&&i.op===o.op&&i.field.isEqual(o.field)&&hi(i.value,o.value)}(t,e):t instanceof Ls?function(i,o){return o instanceof Ls&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,h)=>l&&H_(c,o.filters[h]),!0):!1}(t,e):void Xe(19439)}function W_(t){return t instanceof Yt?function(n){return`${n.field.canonicalString()} ${n.op} ${Oa(n.value)}`}(t):t instanceof Ls?function(n){return n.op.toString()+" {"+n.getFilters().map(W_).join(" ,")+"}"}(t):"Filter"}class qP extends Yt{constructor(e,n,i){super(e,n,i),this.key=We.fromName(i.referenceValue)}matches(e){const n=We.comparator(e.key,this.key);return this.matchesComparison(n)}}class QP extends Yt{constructor(e,n){super(e,"in",n),this.keys=K_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YP extends Yt{constructor(e,n){super(e,"not-in",n),this.keys=K_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function K_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>We.fromName(i.referenceValue))}class XP extends Yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bg(n)&&Wl(n.arrayValue,this.value)}}class JP extends Yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wl(this.value.arrayValue,n)}}class ZP extends Yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Wl(this.value.arrayValue,n)}}class eA extends Yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Wl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n=null,i=[],o=[],l=null,c=null,h=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=h,this.Ie=null}}function Fv(t,e=null,n=[],i=[],o=null,l=null,c=null){return new tA(t,e,n,i,o,l,c)}function Ig(t){const e=gt(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Im(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),wg(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Oa(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Oa(i)).join(",")),e.Ie=n}return e.Ie}function Tg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!H_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vv(t.startAt,e.startAt)&&Vv(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n=null,i=[],o=[],l=null,c="F",h=null,f=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=h,this.endAt=f,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function nA(t,e,n,i,o,l,c,h){return new dh(t,e,n,i,o,l,c,h)}function rA(t){return new dh(t)}function Uv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iA(t){return t.collectionGroup!==null}function jl(t){const e=gt(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),n.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let h=new un(ln.comparator);return c.filters.forEach(f=>{f.getFlattenedFilters().forEach(v=>{v.isInequality()&&(h=h.add(v.field))})}),h})(e).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new Nd(l,i))}),n.has(ln.keyField().canonicalString())||e.Ee.push(new Nd(ln.keyField(),i))}return e.Ee}function wo(t){const e=gt(t);return e.de||(e.de=sA(e,jl(t))),e.de}function sA(t,e){if(t.limitType==="F")return Fv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Nd(o.field,l)});const n=t.endAt?new Ad(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Ad(t.startAt.position,t.startAt.inclusive):null;return Fv(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Tm(t,e,n){return new dh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function G_(t,e){return Tg(wo(t),wo(e))&&t.limitType===e.limitType}function q_(t){return`${Ig(wo(t))}|lt:${t.limitType}`}function Tl(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(o=>W_(o)).join(", ")}]`),wg(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(o=>Oa(o)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(o=>Oa(o)).join(",")),`Target(${i})`}(wo(t))}; limitType=${t.limitType})`}function Sg(t,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):We.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(t,e)&&function(i,o){for(const l of jl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(t,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(t,e)&&function(i,o){return!(i.startAt&&!function(c,h,f){const v=Mv(c,h,f);return c.inclusive?v<=0:v<0}(i.startAt,jl(i),o)||i.endAt&&!function(c,h,f){const v=Mv(c,h,f);return c.inclusive?v>=0:v>0}(i.endAt,jl(i),o))}(t,e)}function oA(t){return(e,n)=>{let i=!1;for(const o of jl(t)){const l=aA(o,e,n);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function aA(t,e,n){const i=t.field.isKeyField()?We.comparator(e.key,n.key):function(l,c,h){const f=c.data.field(l),v=h.data.field(l);return f!==null&&v!==null?Da(f,v):Xe(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Xe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[n]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){$a(this.inner,(n,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return D_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=new Mn(We.comparator);function Dd(){return lA}const Q_=new Mn(We.comparator);function Fc(...t){let e=Q_;for(const n of t)e=e.insert(n.key,n);return e}function Y_(t){let e=Q_;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function mo(){return Ml()}function X_(){return Ml()}function Ml(){return new No(t=>t.toString(),(t,e)=>t.isEqual(e))}const uA=new Mn(We.comparator),cA=new un(We.comparator);function yn(...t){let e=cA;for(const n of t)e=e.add(n);return e}const dA=new un(st);function hA(){return dA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cd(e)?"-0":e}}function J_(t){return{integerValue:""+t}}function fA(t,e){return MP(e)?J_(e):Cg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this._=void 0}}function pA(t,e,n){return t instanceof Od?function(o,l){const c={fields:{[L_]:{stringValue:O_},[M_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&_g(l)&&(l=Eg(l)),l&&(c.fields[j_]=l),{mapValue:c}}(n,e):t instanceof Kl?e2(t,e):t instanceof Gl?t2(t,e):function(o,l){const c=Z_(o,l),h=zv(c)+zv(o.Re);return bm(c)&&bm(o.Re)?J_(h):Cg(o.serializer,h)}(t,e)}function mA(t,e,n){return t instanceof Kl?e2(t,e):t instanceof Gl?t2(t,e):n}function Z_(t,e){return t instanceof Ld?function(i){return bm(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Od extends hh{}class Kl extends hh{constructor(e){super(),this.elements=e}}function e2(t,e){const n=n2(e);for(const i of t.elements)n.some(o=>hi(o,i))||n.push(i);return{arrayValue:{values:n}}}class Gl extends hh{constructor(e){super(),this.elements=e}}function t2(t,e){let n=n2(e);for(const i of t.elements)n=n.filter(o=>!hi(o,i));return{arrayValue:{values:n}}}class Ld extends hh{constructor(e,n){super(),this.serializer=e,this.Re=n}}function zv(t){return an(t.integerValue||t.doubleValue)}function n2(t){return bg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gA(t,e){return t.field.isEqual(e.field)&&function(i,o){return i instanceof Kl&&o instanceof Kl||i instanceof Gl&&o instanceof Gl?Aa(i.elements,o.elements,hi):i instanceof Ld&&o instanceof Ld?hi(i.Re,o.Re):i instanceof Od&&o instanceof Od}(t.transform,e.transform)}class yA{constructor(e,n){this.version=e,this.transformResults=n}}class Fi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fi}static exists(e){return new Fi(void 0,e)}static updateTime(e){return new Fi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function od(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fh{}function r2(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new s2(t.key,Fi.none()):new lu(t.key,t.data,Fi.none());{const n=t.data,i=Dr.empty();let o=new un(ln.comparator);for(let l of e.fields)if(!o.has(l)){let c=n.field(l);c===null&&l.length>1&&(l=l.popLast(),c=n.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Do(t.key,i,new Mr(o.toArray()),Fi.none())}}function vA(t,e,n){t instanceof lu?function(o,l,c){const h=o.value.clone(),f=Bv(o.fieldTransforms,l,c.transformResults);h.setAll(f),l.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(t,e,n):t instanceof Do?function(o,l,c){if(!od(o.precondition,l))return void l.convertToUnknownDocument(c.version);const h=Bv(o.fieldTransforms,l,c.transformResults),f=l.data;f.setAll(i2(o)),f.setAll(h),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()}(t,e,n):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,n)}function Vl(t,e,n,i){return t instanceof lu?function(l,c,h,f){if(!od(l.precondition,c))return h;const v=l.value.clone(),w=Hv(l.fieldTransforms,f,c);return v.setAll(w),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),null}(t,e,n,i):t instanceof Do?function(l,c,h,f){if(!od(l.precondition,c))return h;const v=Hv(l.fieldTransforms,f,c),w=c.data;return w.setAll(i2(l)),w.setAll(v),c.convertToFoundDocument(c.version,w).setHasLocalMutations(),h===null?null:h.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(E=>E.field))}(t,e,n,i):function(l,c,h){return od(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):h}(t,e,n)}function xA(t,e){let n=null;for(const i of t.fieldTransforms){const o=e.data.field(i.field),l=Z_(i.transform,o||null);l!=null&&(n===null&&(n=Dr.empty()),n.set(i.field,l))}return n||null}function $v(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Aa(i,o,(l,c)=>gA(l,c))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lu extends fh{constructor(e,n,i,o=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Do extends fh{constructor(e,n,i,o,l=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function i2(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Bv(t,e,n){const i=new Map;Rt(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let o=0;o<n.length;o++){const l=t[o],c=l.transform,h=e.data.field(l.field);i.set(l.field,mA(c,h,n[o]))}return i}function Hv(t,e,n){const i=new Map;for(const o of t){const l=o.transform,c=n.data.field(o.field);i.set(o.field,pA(l,c,e))}return i}class s2 extends fh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wA extends fh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,n,i,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&vA(l,e,i[o])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Vl(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Vl(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=X_();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let h=this.applyToLocalView(c,l.mutatedFields);h=n.has(o.key)?null:h;const f=r2(c,h);f!==null&&i.set(o.key,f),c.isValidDocument()||c.convertToNoDocument(bt.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),yn())}isEqual(e){return this.batchId===e.batchId&&Aa(this.mutations,e.mutations,(n,i)=>$v(n,i))&&Aa(this.baseMutations,e.baseMutations,(n,i)=>$v(n,i))}}class Rg{constructor(e,n,i,o){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=o}static from(e,n,i){Rt(e.mutations.length===i.length,58842,{fe:e.mutations.length,ge:i.length});let o=function(){return uA}();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new Rg(e,n,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot,nt;function bA(t){switch(t){case ue.OK:return Xe(64938);case ue.CANCELLED:case ue.UNKNOWN:case ue.DEADLINE_EXCEEDED:case ue.RESOURCE_EXHAUSTED:case ue.INTERNAL:case ue.UNAVAILABLE:case ue.UNAUTHENTICATED:return!1;case ue.INVALID_ARGUMENT:case ue.NOT_FOUND:case ue.ALREADY_EXISTS:case ue.PERMISSION_DENIED:case ue.FAILED_PRECONDITION:case ue.ABORTED:case ue.OUT_OF_RANGE:case ue.UNIMPLEMENTED:case ue.DATA_LOSS:return!0;default:return Xe(15467,{code:t})}}function IA(t){if(t===void 0)return To("GRPC error has no .code"),ue.UNKNOWN;switch(t){case Ot.OK:return ue.OK;case Ot.CANCELLED:return ue.CANCELLED;case Ot.UNKNOWN:return ue.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return ue.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return ue.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return ue.INTERNAL;case Ot.UNAVAILABLE:return ue.UNAVAILABLE;case Ot.UNAUTHENTICATED:return ue.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return ue.INVALID_ARGUMENT;case Ot.NOT_FOUND:return ue.NOT_FOUND;case Ot.ALREADY_EXISTS:return ue.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return ue.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return ue.FAILED_PRECONDITION;case Ot.ABORTED:return ue.ABORTED;case Ot.OUT_OF_RANGE:return ue.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return ue.UNIMPLEMENTED;case Ot.DATA_LOSS:return ue.DATA_LOSS;default:return Xe(39323,{code:t})}}(nt=Ot||(Ot={}))[nt.OK=0]="OK",nt[nt.CANCELLED=1]="CANCELLED",nt[nt.UNKNOWN=2]="UNKNOWN",nt[nt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nt[nt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nt[nt.NOT_FOUND=5]="NOT_FOUND",nt[nt.ALREADY_EXISTS=6]="ALREADY_EXISTS",nt[nt.PERMISSION_DENIED=7]="PERMISSION_DENIED",nt[nt.UNAUTHENTICATED=16]="UNAUTHENTICATED",nt[nt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nt[nt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nt[nt.ABORTED=10]="ABORTED",nt[nt.OUT_OF_RANGE=11]="OUT_OF_RANGE",nt[nt.UNIMPLEMENTED=12]="UNIMPLEMENTED",nt[nt.INTERNAL=13]="INTERNAL",nt[nt.UNAVAILABLE=14]="UNAVAILABLE",nt[nt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new mg([4294967295,4294967295],0);class TA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sm(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CA(t,e){return Sm(t,e.toTimestamp())}function Ia(t){return Rt(!!t,49232),bt.fromTimestamp(function(n){const i=So(n);return new Xt(i.seconds,i.nanos)}(t))}function o2(t,e){return Cm(t,e).canonicalString()}function Cm(t,e){const n=function(o){return new jt(["projects",o.projectId,"databases",o.database])}(t).child("documents");return e===void 0?n:n.child(e)}function RA(t){const e=jt.fromString(t);return Rt(jA(e),10190,{key:e.toString()}),e}function Rm(t,e){return o2(t.databaseId,e.path)}function kA(t){const e=RA(t);return e.length===4?jt.emptyPath():AA(e)}function PA(t){return new jt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function AA(t){return Rt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Wv(t,e,n){return{name:Rm(t,e),fields:n.value.mapValue.fields}}function NA(t,e){let n;if(e instanceof lu)n={update:Wv(t,e.key,e.value)};else if(e instanceof s2)n={delete:Rm(t,e.key)};else if(e instanceof Do)n={update:Wv(t,e.key,e.data),updateMask:LA(e.fieldMask)};else{if(!(e instanceof wA))return Xe(16599,{ft:e.type});n={verify:Rm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const h=c.transform;if(h instanceof Od)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Kl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Gl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Ld)return{fieldPath:c.field.canonicalString(),increment:h.Re};throw Xe(20930,{transform:c.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:CA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Xe(27497)}(t,e.precondition)),n}function DA(t,e){return t&&t.length>0?(Rt(e!==void 0,14353),t.map(n=>function(o,l){let c=o.updateTime?Ia(o.updateTime):Ia(l);return c.isEqual(bt.min())&&(c=Ia(l)),new yA(c,o.transformResults||[])}(n,e))):[]}function OA(t){let e=kA(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let o=null;if(i>0){Rt(i===1,65062);const w=n.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];n.where&&(l=function(E){const b=a2(E);return b instanceof Ls&&B_(b)?b.getFilters():[b]}(n.where));let c=[];n.orderBy&&(c=function(E){return E.map(b=>function(P){return new Nd(va(P.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(b))}(n.orderBy));let h=null;n.limit&&(h=function(E){let b;return b=typeof E=="object"?E.value:E,wg(b)?null:b}(n.limit));let f=null;n.startAt&&(f=function(E){const b=!!E.before,R=E.values||[];return new Ad(R,b)}(n.startAt));let v=null;return n.endAt&&(v=function(E){const b=!E.before,R=E.values||[];return new Ad(R,b)}(n.endAt)),nA(e,o,c,l,h,"F",f,v)}function a2(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=va(n.unaryFilter.field);return Yt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=va(n.unaryFilter.field);return Yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=va(n.unaryFilter.field);return Yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=va(n.unaryFilter.field);return Yt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Xe(61313);default:return Xe(60726)}}(t):t.fieldFilter!==void 0?function(n){return Yt.create(va(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Xe(58110);default:return Xe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ls.create(n.compositeFilter.filters.map(i=>a2(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Xe(1026)}}(n.compositeFilter.op))}(t):Xe(30097,{filter:t})}function va(t){return ln.fromServerFormat(t.fieldPath)}function LA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.wt=e}}function VA(t){const e=OA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.Cn=new UA}addToCollectionParentIndex(e,n){return this.Cn.add(n),re.resolve()}getCollectionParents(e,n){return re.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return re.resolve()}deleteFieldIndex(e,n){return re.resolve()}deleteAllFieldIndexes(e){return re.resolve()}createTargetIndexes(e,n){return re.resolve()}getDocumentsMatchingTarget(e,n){return re.resolve(null)}getIndexType(e,n){return re.resolve(0)}getFieldIndexes(e,n){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,n){return re.resolve(Os.min())}getMinOffsetFromCollectionGroup(e,n){return re.resolve(Os.min())}updateCollectionGroup(e,n,i){return re.resolve()}updateIndexEntries(e,n){return re.resolve()}}class UA{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),o=this.index[n]||new un(jt.comparator),l=!o.has(i);return this.index[n]=o.add(i),l}has(e){const n=e.lastSegment(),i=e.popLast(),o=this.index[n];return o&&o.has(i)}getEntries(e){return(this.index[e]||new un(jt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},l2=41943040;class Ln{static withCacheSize(e){return new Ln(e,Ln.DEFAULT_COLLECTION_PERCENTILE,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln.DEFAULT_COLLECTION_PERCENTILE=10,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ln.DEFAULT=new Ln(l2,Ln.DEFAULT_COLLECTION_PERCENTILE,Ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ln.DISABLED=new Ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new La(0)}static lr(){return new La(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="LruGarbageCollector",zA=1048576;function qv([t,e],[n,i]){const o=st(t,n);return o===0?st(e,i):o}class $A{constructor(e){this.Er=e,this.buffer=new un(qv),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();qv(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class BA{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){be(Gv,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){au(n)?be(Gv,"Ignoring IndexedDB error during garbage collection: ",n):await yg(n)}await this.mr(3e5)})}}class HA{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return re.resolve(vg.le);const i=new $A(n);return this.gr.forEachTarget(e,o=>i.Rr(o.sequenceNumber)).next(()=>this.gr.yr(e,o=>i.Rr(o))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.gr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(be("LruGarbageCollector","Garbage collection skipped; disabled"),re.resolve(Kv)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(be("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kv):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let i,o,l,c,h,f,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(be("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,c=Date.now(),this.nthSequenceNumber(e,o))).next(E=>(i=E,h=Date.now(),this.removeTargets(e,i,n))).next(E=>(l=E,f=Date.now(),this.removeOrphanedDocuments(e,i))).next(E=>(v=Date.now(),ya()<=Ze.DEBUG&&be("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-w}ms
	Determined least recently used ${o} in `+(h-c)+`ms
	Removed ${l} targets in `+(f-h)+`ms
	Removed ${E} documents in `+(v-f)+`ms
Total Duration: ${v-w}ms`),re.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:E})))}}function WA(t,e){return new HA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.changes=new No(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nr.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?re.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,i,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(i!==null&&Vl(i.mutation,o,Mr.empty(),Xt.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,yn()).next(()=>i))}getLocalViewOfDocuments(e,n,i=yn()){const o=mo();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,i).next(l=>{let c=Fc();return l.forEach((h,f)=>{c=c.insert(h,f.overlayedDocument)}),c}))}getOverlayedDocuments(e,n){const i=mo();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,yn()))}populateOverlays(e,n,i){const o=[];return i.forEach(l=>{n.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,h)=>{n.set(c,h)})})}computeViews(e,n,i,o){let l=Dd();const c=Ml(),h=function(){return Ml()}();return n.forEach((f,v)=>{const w=i.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Do)?l=l.insert(v.key,v):w!==void 0?(c.set(v.key,w.mutation.getFieldMask()),Vl(w.mutation,v,w.mutation.getFieldMask(),Xt.now())):c.set(v.key,Mr.empty())}),this.recalculateAndSaveOverlays(e,l).next(f=>(f.forEach((v,w)=>c.set(v,w)),n.forEach((v,w)=>{var E;return h.set(v,new GA(w,(E=c.get(v))!==null&&E!==void 0?E:null))}),h))}recalculateAndSaveOverlays(e,n){const i=Ml();let o=new Mn((c,h)=>c-h),l=yn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(c=>{for(const h of c)h.keys().forEach(f=>{const v=n.get(f);if(v===null)return;let w=i.get(f)||Mr.empty();w=h.applyToLocalView(v,w),i.set(f,w);const E=(o.get(h.batchId)||yn()).add(f);o=o.insert(h.batchId,E)})}).next(()=>{const c=[],h=o.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),v=f.key,w=f.value,E=X_();w.forEach(b=>{if(!l.has(b)){const R=r2(n.get(b),i.get(b));R!==null&&E.set(b,R),l=l.add(b)}}),c.push(this.documentOverlayCache.saveOverlays(e,v,E))}return re.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,o){return function(c){return We.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,o):this.getDocumentsMatchingCollectionQuery(e,n,i,o)}getNextDocuments(e,n,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,o-l.size):re.resolve(mo());let h=Hl,f=l;return c.next(v=>re.forEach(v,(w,E)=>(h<E.largestBatchId&&(h=E.largestBatchId),l.get(w)?re.resolve():this.remoteDocumentCache.getEntry(e,w).next(b=>{f=f.insert(w,b)}))).next(()=>this.populateOverlays(e,v,l)).next(()=>this.computeViews(e,f,v,yn())).next(w=>({batchId:h,changes:Y_(w)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new We(n)).next(i=>{let o=Fc();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,i,o){const l=n.collectionGroup;let c=Fc();return this.indexManager.getCollectionParents(e,l).next(h=>re.forEach(h,f=>{const v=function(E,b){return new dh(b,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(n,f.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,i,o).next(w=>{w.forEach((E,b)=>{c=c.insert(E,b)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,n,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,l,o))).next(c=>{l.forEach((f,v)=>{const w=v.getKey();c.get(w)===null&&(c=c.insert(w,Nr.newInvalidDocument(w)))});let h=Fc();return c.forEach((f,v)=>{const w=l.get(f);w!==void 0&&Vl(w.mutation,v,Mr.empty(),Xt.now()),Sg(n,v)&&(h=h.insert(f,v))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return re.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:Ia(o.createTime)}}(n)),re.resolve()}getNamedQuery(e,n){return re.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(o){return{name:o.name,query:VA(o.bundledQuery),readTime:Ia(o.readTime)}}(n)),re.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(){this.overlays=new Mn(We.comparator),this.Qr=new Map}getOverlay(e,n){return re.resolve(this.overlays.get(n))}getOverlays(e,n){const i=mo();return re.forEach(n,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((o,l)=>{this.bt(e,n,l)}),re.resolve()}removeOverlaysForBatchId(e,n,i){const o=this.Qr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(i)),re.resolve()}getOverlaysForCollection(e,n,i){const o=mo(),l=n.length+1,c=new We(n.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){const f=h.getNext().value,v=f.getKey();if(!n.isPrefixOf(v.path))break;v.path.length===l&&f.largestBatchId>i&&o.set(f.getKey(),f)}return re.resolve(o)}getOverlaysForCollectionGroup(e,n,i,o){let l=new Mn((v,w)=>v-w);const c=this.overlays.getIterator();for(;c.hasNext();){const v=c.getNext().value;if(v.getKey().getCollectionGroup()===n&&v.largestBatchId>i){let w=l.get(v.largestBatchId);w===null&&(w=mo(),l=l.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const h=mo(),f=l.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((v,w)=>h.set(v,w)),!(h.size()>=o)););return re.resolve(h)}bt(e,n,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Qr.get(o.largestBatchId).delete(i.key);this.Qr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new EA(n,i));let l=this.Qr.get(n);l===void 0&&(l=yn(),this.Qr.set(n,l)),this.Qr.set(n,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.sessionToken=di.EMPTY_BYTE_STRING}getSessionToken(e){return re.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,re.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.$r=new un(qt.Ur),this.Kr=new un(qt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const i=new qt(e,n);this.$r=this.$r.add(i),this.Kr=this.Kr.add(i)}Gr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.zr(new qt(e,n))}jr(e,n){e.forEach(i=>this.removeReference(i,n))}Hr(e){const n=new We(new jt([])),i=new qt(n,e),o=new qt(n,e+1),l=[];return this.Kr.forEachInRange([i,o],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new We(new jt([])),i=new qt(n,e),o=new qt(n,e+1);let l=yn();return this.Kr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const n=new qt(e,0),i=this.$r.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class qt{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return We.comparator(e.key,n.key)||st(e.Zr,n.Zr)}static Wr(e,n){return st(e.Zr,n.Zr)||We.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new un(qt.Ur)}checkEmpty(e){return re.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,o){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new _A(l,n,i,o);this.mutationQueue.push(c);for(const h of o)this.Xr=this.Xr.add(new qt(h.key,l)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return re.resolve(c)}lookupMutationBatch(e,n){return re.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,o=this.ti(i),l=o<0?0:o;return re.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(this.mutationQueue.length===0?xg:this.nr-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new qt(n,0),o=new qt(n,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([i,o],c=>{const h=this.ei(c.Zr);l.push(h)}),re.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new un(st);return n.forEach(o=>{const l=new qt(o,0),c=new qt(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],h=>{i=i.add(h.Zr)})}),re.resolve(this.ni(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,o=i.length+1;let l=i;We.isDocumentKey(l)||(l=l.child(""));const c=new qt(new We(l),0);let h=new un(st);return this.Xr.forEachWhile(f=>{const v=f.key.path;return!!i.isPrefixOf(v)&&(v.length===o&&(h=h.add(f.Zr)),!0)},c),re.resolve(this.ni(h))}ni(e){const n=[];return e.forEach(i=>{const o=this.ei(i);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Rt(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Xr;return re.forEach(n.mutations,o=>{const l=new qt(o.key,n.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Xr=i})}sr(e){}containsKey(e,n){const i=new qt(n,0),o=this.Xr.firstAfterOrEqual(i);return re.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.ii=e,this.docs=function(){return new Mn(We.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,o=this.docs.get(i),l=o?o.size:0,c=this.ii(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return re.resolve(i?i.document.mutableCopy():Nr.newInvalidDocument(n))}getEntries(e,n){let i=Dd();return n.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Nr.newInvalidDocument(o))}),re.resolve(i)}getDocumentsMatchingQuery(e,n,i,o){let l=Dd();const c=n.path,h=new We(c.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:v,value:{document:w}}=f.getNext();if(!c.isPrefixOf(v.path))break;v.path.length>c.length+1||DP(NP(w),i)<=0||(o.has(w.key)||Sg(n,w))&&(l=l.insert(w.key,w.mutableCopy()))}return re.resolve(l)}getAllFromCollectionGroup(e,n,i,o){Xe(9500)}si(e,n){return re.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new e3(this)}getSize(e){return re.resolve(this.size)}}class e3 extends KA{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?n.push(this.Br.addEntry(e,o)):this.Br.removeEntry(i)}),re.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e){this.persistence=e,this.oi=new No(n=>Ig(n),Tg),this.lastRemoteSnapshotVersion=bt.min(),this.highestTargetId=0,this._i=0,this.ai=new kg,this.targetCount=0,this.ui=La.cr()}forEachTarget(e,n){return this.oi.forEach((i,o)=>n(o)),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this._i&&(this._i=n),re.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new La(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,re.resolve()}updateTargetData(e,n){return this.Tr(n),re.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,n,i){let o=0;const l=[];return this.oi.forEach((c,h)=>{h.sequenceNumber<=n&&i.get(h.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)}),re.waitFor(l).next(()=>o)}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,n){const i=this.oi.get(n)||null;return re.resolve(i)}addMatchingKeys(e,n,i){return this.ai.Gr(n,i),re.resolve()}removeMatchingKeys(e,n,i){this.ai.jr(n,i);const o=this.persistence.referenceDelegate,l=[];return o&&n.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),re.waitFor(l)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),re.resolve()}getMatchingKeysForTargetId(e,n){const i=this.ai.Yr(n);return re.resolve(i)}containsKey(e,n){return re.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,n){this.ci={},this.overlays={},this.li=new vg(0),this.hi=!1,this.hi=!0,this.Pi=new XA,this.referenceDelegate=e(this),this.Ti=new t3(this),this.indexManager=new FA,this.remoteDocumentCache=function(o){return new ZA(o)}(i=>this.referenceDelegate.Ii(i)),this.serializer=new MA(n),this.Ei=new QA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.ci[e.toKey()];return i||(i=new JA(n,this.referenceDelegate),this.ci[e.toKey()]=i),i}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,i){be("MemoryPersistence","Starting transaction:",e);const o=new n3(this.li.next());return this.referenceDelegate.di(),i(o).next(l=>this.referenceDelegate.Ai(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Ri(e,n){return re.or(Object.values(this.ci).map(i=>()=>i.containsKey(e,n)))}}class n3 extends LP{constructor(e){super(),this.currentSequenceNumber=e}}class Pg{constructor(e){this.persistence=e,this.Vi=new kg,this.mi=null}static fi(e){return new Pg(e)}get gi(){if(this.mi)return this.mi;throw Xe(60996)}addReference(e,n,i){return this.Vi.addReference(i,n),this.gi.delete(i.toString()),re.resolve()}removeReference(e,n,i){return this.Vi.removeReference(i,n),this.gi.add(i.toString()),re.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),re.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(o=>this.gi.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(l=>this.gi.add(l.toString()))}).next(()=>i.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.gi,i=>{const o=We.fromPath(i);return this.pi(e,o).next(l=>{l||n.removeEntry(o,bt.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(i=>{i?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return re.or([()=>re.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class jd{constructor(e,n){this.persistence=e,this.yi=new No(i=>VP(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=WA(this,n)}static fi(e,n){return new jd(e,n)}di(){}Ai(e){return re.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(o=>i+o))}Sr(e){let n=0;return this.yr(e,i=>{n++}).next(()=>n)}yr(e,n){return re.forEach(this.yi,(i,o)=>this.Dr(e,i,o).next(l=>l?re.resolve():n(o)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.si(e,c=>this.Dr(e,c,n).next(h=>{h||(i++,l.removeEntry(c,bt.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),re.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.yi.set(i,e.currentSequenceNumber),re.resolve()}removeReference(e,n,i){return this.yi.set(i,e.currentSequenceNumber),re.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),re.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=id(e.data.value)),n}Dr(e,n,i){return re.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.yi.get(n);return re.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,i,o){this.targetId=e,this.fromCache=n,this.ds=i,this.As=o}static Rs(e,n){let i=yn(),o=yn();for(const l of n.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Ag(e,n.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return nR()?8:jP(vn())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,i,o){const l={result:null};return this.ws(e,n).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Ss(e,n,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new r3;return this.bs(e,n,c).next(h=>{if(l.result=h,this.fs)return this.Ds(e,n,c,h.size)})}).next(()=>l.result)}Ds(e,n,i,o){return i.documentReadCount<this.gs?(ya()<=Ze.DEBUG&&be("QueryEngine","SDK will not create cache indexes for query:",Tl(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),re.resolve()):(ya()<=Ze.DEBUG&&be("QueryEngine","Query:",Tl(n),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ps*o?(ya()<=Ze.DEBUG&&be("QueryEngine","The SDK decides to create cache indexes for query:",Tl(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wo(n))):re.resolve())}ws(e,n){if(Uv(n))return re.resolve(null);let i=wo(n);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Tm(n,null,"F"),i=wo(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=yn(...l);return this.ys.getDocuments(e,c).next(h=>this.indexManager.getMinOffset(e,i).next(f=>{const v=this.vs(n,h);return this.Cs(n,v,c,f.readTime)?this.ws(e,Tm(n,null,"F")):this.Fs(e,v,n,f)}))})))}Ss(e,n,i,o){return Uv(n)||o.isEqual(bt.min())?re.resolve(null):this.ys.getDocuments(e,i).next(l=>{const c=this.vs(n,l);return this.Cs(n,c,i,o)?re.resolve(null):(ya()<=Ze.DEBUG&&be("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Tl(n)),this.Fs(e,c,n,AP(o,Hl)).next(h=>h))})}vs(e,n){let i=new un(oA(e));return n.forEach((o,l)=>{Sg(e,l)&&(i=i.add(l))}),i}Cs(e,n,i,o){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const l=e.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}bs(e,n,i){return ya()<=Ze.DEBUG&&be("QueryEngine","Using full collection scan to execute query:",Tl(n)),this.ys.getDocumentsMatchingQuery(e,n,Os.min(),i)}Fs(e,n,i,o){return this.ys.getDocumentsMatchingQuery(e,i,o).next(l=>(n.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s3="LocalStore";class o3{constructor(e,n,i,o){this.persistence=e,this.Ms=n,this.serializer=o,this.xs=new Mn(st),this.Os=new No(l=>Ig(l),Tg),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(i)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qA(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function a3(t,e,n,i){return new o3(t,e,n,i)}async function c2(t,e){const n=gt(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let o;return n.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,n.Ls(e),n.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],h=[];let f=yn();for(const v of o){c.push(v.batchId);for(const w of v.mutations)f=f.add(w.key)}for(const v of l){h.push(v.batchId);for(const w of v.mutations)f=f.add(w.key)}return n.localDocuments.getDocuments(i,f).next(v=>({ks:v,removedBatchIds:c,addedBatchIds:h}))})})}function l3(t,e){const n=gt(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=n.Bs.newChangeBuffer({trackRemovals:!0});return function(h,f,v,w){const E=v.batch,b=E.keys();let R=re.resolve();return b.forEach(P=>{R=R.next(()=>w.getEntry(f,P)).next(z=>{const M=v.docVersions.get(P);Rt(M!==null,48541),z.version.compareTo(M)<0&&(E.applyToRemoteDocument(z,v),z.isValidDocument()&&(z.setReadTime(v.commitVersion),w.addEntry(z)))})}),R.next(()=>h.mutationQueue.removeMutationBatch(f,E))}(n,i,e,l).next(()=>l.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let f=yn();for(let v=0;v<h.mutationResults.length;++v)h.mutationResults[v].transformResults.length>0&&(f=f.add(h.batch.mutations[v].key));return f}(e))).next(()=>n.localDocuments.getDocuments(i,o))})}function u3(t){const e=gt(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function c3(t,e){const n=gt(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=xg),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}class Qv{constructor(){this.activeTargetIds=hA()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class d3{constructor(){this.xo=new Qv,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,i){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Qv,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h3{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="ConnectivityMonitor";class Xv{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){be(Yv,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){be(Yv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc=null;function km(){return Uc===null?Uc=function(){return 268435456+Math.round(2147483648*Math.random())}():Uc++,"0x"+Uc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="RestConnection",f3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class p3{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${i}/databases/${o}`,this.Go=this.databaseId.database===kd?`project_id=${i}`:`project_id=${i}&database_id=${o}`}zo(e,n,i,o,l){const c=km(),h=this.jo(e,n.toUriEncodedString());be(Ap,`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(f,o,l);const{host:v}=new URL(h),w=Fa(v);return this.Jo(e,h,f,i,w).then(E=>(be(Ap,`Received RPC '${e}' ${c}: `,E),E),E=>{throw ch(Ap,`RPC '${e}' ${c} failed with error: `,E,"url: ",h,"request:",i),E})}Yo(e,n,i,o,l,c){return this.zo(e,n,i,o,l)}Ho(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+za}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,l)=>e[l]=o),i&&i.headers.forEach((o,l)=>e[l]=o)}jo(e,n){const i=f3[e];return`${this.Ko}/v1/${n}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="WebChannelConnection";class g3 extends p3{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,i,o,l){const c=km();return new Promise((h,f)=>{const v=new I_;v.setWithCredentials(!0),v.listenOnce(T_.COMPLETE,()=>{try{switch(v.getLastErrorCode()){case rd.NO_ERROR:const E=v.getResponseJson();be(mn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),h(E);break;case rd.TIMEOUT:be(mn,`RPC '${e}' ${c} timed out`),f(new Ve(ue.DEADLINE_EXCEEDED,"Request time out"));break;case rd.HTTP_ERROR:const b=v.getStatus();if(be(mn,`RPC '${e}' ${c} failed with status:`,b,"response text:",v.getResponseText()),b>0){let R=v.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const z=function($){const Y=$.toLowerCase().replace(/_/g,"-");return Object.values(ue).indexOf(Y)>=0?Y:ue.UNKNOWN}(P.status);f(new Ve(z,P.message))}else f(new Ve(ue.UNKNOWN,"Server responded with status "+v.getStatus()))}else f(new Ve(ue.UNAVAILABLE,"Connection failed."));break;default:Xe(9055,{l_:e,streamId:c,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{be(mn,`RPC '${e}' ${c} completed.`)}});const w=JSON.stringify(o);be(mn,`RPC '${e}' ${c} sending request:`,o),v.send(n,"POST",w,i,15)})}T_(e,n,i){const o=km(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=R_(),h=C_(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(f.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Ho(f.initMessageHeaders,n,i),f.encodeInitMessageHeaders=!0;const w=l.join("");be(mn,`Creating RPC '${e}' stream ${o}: ${w}`,f);const E=c.createWebChannel(w,f);let b=!1,R=!1;const P=new m3({Zo:M=>{R?be(mn,`Not sending because RPC '${e}' stream ${o} is closed:`,M):(b||(be(mn,`Opening RPC '${e}' stream ${o} transport.`),E.open(),b=!0),be(mn,`RPC '${e}' stream ${o} sending:`,M),E.send(M))},Xo:()=>E.close()}),z=(M,$,Y)=>{M.listen($,ee=>{try{Y(ee)}catch(X){setTimeout(()=>{throw X},0)}})};return z(E,Pl.EventType.OPEN,()=>{R||(be(mn,`RPC '${e}' stream ${o} transport opened.`),P.__())}),z(E,Pl.EventType.CLOSE,()=>{R||(R=!0,be(mn,`RPC '${e}' stream ${o} transport closed`),P.u_())}),z(E,Pl.EventType.ERROR,M=>{R||(R=!0,ch(mn,`RPC '${e}' stream ${o} transport errored. Name:`,M.name,"Message:",M.message),P.u_(new Ve(ue.UNAVAILABLE,"The operation could not be completed")))}),z(E,Pl.EventType.MESSAGE,M=>{var $;if(!R){const Y=M.data[0];Rt(!!Y,16349);const ee=Y,X=(ee==null?void 0:ee.error)||(($=ee[0])===null||$===void 0?void 0:$.error);if(X){be(mn,`RPC '${e}' stream ${o} received error:`,X);const ne=X.status;let D=function(S){const O=Ot[S];if(O!==void 0)return IA(O)}(ne),C=X.message;D===void 0&&(D=ue.INTERNAL,C="Unknown error status: "+ne+" with message "+X.message),R=!0,P.u_(new Ve(D,C)),E.close()}else be(mn,`RPC '${e}' stream ${o} received:`,Y),P.c_(Y)}}),z(h,S_.STAT_EVENT,M=>{M.stat===xm.PROXY?be(mn,`RPC '${e}' stream ${o} detected buffering proxy`):M.stat===xm.NOPROXY&&be(mn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}}function Np(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t){return new TA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,i=1e3,o=1.5,l=6e4){this.xi=e,this.timerId=n,this.I_=i,this.E_=o,this.d_=l,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),i=Math.max(0,Date.now()-this.V_),o=Math.max(0,n-i);o>0&&be("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="PersistentStream";class y3{constructor(e,n,i,o,l,c,h,f){this.xi=e,this.y_=i,this.w_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new d2(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===ue.RESOURCE_EXHAUSTED?(To(n.toString()),To("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===ue.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.S_===n&&this.K_(i,o)},i=>{e(()=>{const o=new Ve(ue.UNKNOWN,"Fetching auth token failed: "+i.message);return this.W_(o)})})}K_(e,n){const i=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{i(()=>this.listener.e_())}),this.stream.n_(()=>{i(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{i(()=>this.W_(o))}),this.stream.onMessage(o=>{i(()=>++this.v_==1?this.z_(o):this.onNext(o))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return be(Jv,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(be(Jv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class v3 extends y3{constructor(e,n,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,o,c),this.serializer=l}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return Rt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Rt(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Rt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=DA(e.writeResults,e.commitTime),i=Ia(e.commitTime);return this.listener.ea(i,n)}ta(){const e={};e.database=PA(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>NA(this.serializer,i))};this.L_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x3{}class w3 extends x3{constructor(e,n,i,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=o,this.na=!1}ra(){if(this.na)throw new Ve(ue.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,i,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,Cm(n,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Ve(ue.UNKNOWN,l.toString())})}Yo(e,n,i,o,l){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,h])=>this.connection.Yo(e,Cm(n,i),o,c,h,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Ve(ue.UNKNOWN,c.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class _3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(To(n),this.oa=!1):be("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="RemoteStore";class E3{constructor(e,n,i,o,l){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=l,this.Ea.No(c=>{i.enqueueAndForget(async()=>{du(this)&&(be(uu,"Restarting streams for network reachability change."),await async function(f){const v=gt(f);v.Ta.add(4),await cu(v),v.da.set("Unknown"),v.Ta.delete(4),await mh(v)}(this))})}),this.da=new _3(i,o)}}async function mh(t){if(du(t))for(const e of t.Ia)await e(!0)}async function cu(t){for(const e of t.Ia)await e(!1)}function du(t){return gt(t).Ta.size===0}async function h2(t,e,n){if(!au(e))throw e;t.Ta.add(1),await cu(t),t.da.set("Offline"),n||(n=()=>u3(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{be(uu,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await mh(t)})}function f2(t,e){return e().catch(n=>h2(t,n,e))}async function gh(t){const e=gt(t),n=js(e);let i=e.ha.length>0?e.ha[e.ha.length-1].batchId:xg;for(;b3(e);)try{const o=await c3(e.localStore,i);if(o===null){e.ha.length===0&&n.N_();break}i=o.batchId,I3(e,o)}catch(o){await h2(e,o)}p2(e)&&m2(e)}function b3(t){return du(t)&&t.ha.length<10}function I3(t,e){t.ha.push(e);const n=js(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function p2(t){return du(t)&&!js(t).F_()&&t.ha.length>0}function m2(t){js(t).start()}async function T3(t){js(t).ta()}async function S3(t){const e=js(t);for(const n of t.ha)e.Z_(n.mutations)}async function C3(t,e,n){const i=t.ha.shift(),o=Rg.from(i,e,n);await f2(t,()=>t.remoteSyncer.applySuccessfulWrite(o)),await gh(t)}async function R3(t,e){e&&js(t).Y_&&await async function(i,o){if(function(c){return bA(c)&&c!==ue.ABORTED}(o.code)){const l=i.ha.shift();js(i).O_(),await f2(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await gh(i)}}(t,e),p2(t)&&m2(t)}async function Zv(t,e){const n=gt(t);n.asyncQueue.verifyOperationInProgress(),be(uu,"RemoteStore received new credentials");const i=du(n);n.Ta.add(3),await cu(n),i&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await mh(n)}async function k3(t,e){const n=gt(t);e?(n.Ta.delete(2),await mh(n)):e||(n.Ta.add(2),await cu(n),n.da.set("Unknown"))}function js(t){return t.Va||(t.Va=function(n,i,o){const l=gt(n);return l.ra(),new v3(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:T3.bind(null,t),i_:R3.bind(null,t),X_:S3.bind(null,t),ea:C3.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await gh(t)):(await t.Va.stop(),t.ha.length>0&&(be(uu,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n,i,o,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new xo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,o,l){const c=Date.now()+i,h=new Ng(e,n,c,o,l);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ve(ue.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function g2(t,e){if(To("AsyncQueue",`${e}: ${t}`),au(t))return new Ve(ue.UNAVAILABLE,`${e}: ${t}`);throw t}class P3{constructor(){this.queries=ex(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,i){const o=gt(n),l=o.queries;o.queries=ex(),l.forEach((c,h)=>{for(const f of h.ya)f.onError(i)})})(this,new Ve(ue.ABORTED,"Firestore shutting down"))}}function ex(){return new No(t=>q_(t),G_)}function A3(t){t.ba.forEach(e=>{e.next()})}var tx,nx;(nx=tx||(tx={})).Ca="default",nx.Cache="cache";const N3="SyncEngine";class D3{constructor(e,n,i,o,l,c){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.au={},this.uu=new No(h=>q_(h),G_),this.cu=new Map,this.lu=new Set,this.hu=new Mn(We.comparator),this.Pu=new Map,this.Tu=new kg,this.Iu={},this.Eu=new Map,this.du=La.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function O3(t,e,n){const i=V3(t);try{const o=await function(c,h){const f=gt(c),v=Xt.now(),w=h.reduce((R,P)=>R.add(P.key),yn());let E,b;return f.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=Dd(),z=yn();return f.Bs.getEntries(R,w).next(M=>{P=M,P.forEach(($,Y)=>{Y.isValidDocument()||(z=z.add($))})}).next(()=>f.localDocuments.getOverlayedDocuments(R,P)).next(M=>{E=M;const $=[];for(const Y of h){const ee=xA(Y,E.get(Y.key).overlayedDocument);ee!=null&&$.push(new Do(Y.key,ee,U_(ee.value.mapValue),Fi.exists(!0)))}return f.mutationQueue.addMutationBatch(R,v,$,h)}).next(M=>{b=M;const $=M.applyToLocalDocumentSet(E,z);return f.documentOverlayCache.saveOverlays(R,M.batchId,$)})}).then(()=>({batchId:b.batchId,changes:Y_(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,h,f){let v=c.Iu[c.currentUser.toKey()];v||(v=new Mn(st)),v=v.insert(h,f),c.Iu[c.currentUser.toKey()]=v}(i,o.batchId,n),await yh(i,o.changes),await gh(i.remoteStore)}catch(o){const l=g2(o,"Failed to persist write");n.reject(l)}}function rx(t,e,n){const i=gt(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const o=[];i.uu.forEach((l,c)=>{const h=c.view.Da(e);h.snapshot&&o.push(h.snapshot)}),function(c,h){const f=gt(c);f.onlineState=h;let v=!1;f.queries.forEach((w,E)=>{for(const b of E.ya)b.Da(h)&&(v=!0)}),v&&A3(f)}(i.eventManager,e),o.length&&i.au.j_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function L3(t,e){const n=gt(t),i=e.batch.batchId;try{const o=await l3(n.localStore,e);v2(n,i,null),y2(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await yh(n,o)}catch(o){await yg(o)}}async function j3(t,e,n){const i=gt(t);try{const o=await function(c,h){const f=gt(c);return f.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return f.mutationQueue.lookupMutationBatch(v,h).next(E=>(Rt(E!==null,37113),w=E.keys(),f.mutationQueue.removeMutationBatch(v,E))).next(()=>f.mutationQueue.performConsistencyCheck(v)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(v,w,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>f.localDocuments.getDocuments(v,w))})}(i.localStore,e);v2(i,e,n),y2(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await yh(i,o)}catch(o){await yg(o)}}function y2(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function v2(t,e,n){const i=gt(t);let o=i.Iu[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(n?l.reject(n):l.resolve(),o=o.remove(e)),i.Iu[i.currentUser.toKey()]=o}}async function yh(t,e,n){const i=gt(t),o=[],l=[],c=[];i.uu.isEmpty()||(i.uu.forEach((h,f)=>{c.push(i.Ru(f,e,n).then(v=>{var w;if((v||n)&&i.isPrimaryClient){const E=v?!v.fromCache:(w=void 0)===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(v){o.push(v);const E=Ag.Rs(f.targetId,v);l.push(E)}}))}),await Promise.all(c),i.au.j_(o),await async function(f,v){const w=gt(f);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>re.forEach(v,b=>re.forEach(b.ds,R=>w.persistence.referenceDelegate.addReference(E,b.targetId,R)).next(()=>re.forEach(b.As,R=>w.persistence.referenceDelegate.removeReference(E,b.targetId,R)))))}catch(E){if(!au(E))throw E;be(s3,"Failed to update sequence numbers: "+E)}for(const E of v){const b=E.targetId;if(!E.fromCache){const R=w.xs.get(b),P=R.snapshotVersion,z=R.withLastLimboFreeSnapshotVersion(P);w.xs=w.xs.insert(b,z)}}}(i.localStore,l))}async function M3(t,e){const n=gt(t);if(!n.currentUser.isEqual(e)){be(N3,"User change. New user:",e.toKey());const i=await c2(n.localStore,e);n.currentUser=e,function(l,c){l.Eu.forEach(h=>{h.forEach(f=>{f.reject(new Ve(ue.CANCELLED,c))})}),l.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await yh(n,i.ks)}}function V3(t){const e=gt(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=L3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=j3.bind(null,e),e}class Md{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ph(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return a3(this.persistence,new i3,e.initialUser,this.serializer)}yu(e){return new u2(Pg.fi,this.serializer)}pu(e){return new d3}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Md.provider={build:()=>new Md};class F3 extends Md{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){Rt(this.persistence.referenceDelegate instanceof jd,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new BA(i,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?Ln.withCacheSize(this.cacheSizeBytes):Ln.DEFAULT;return new u2(i=>jd.fi(i,n),this.serializer)}}class Pm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>rx(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=M3.bind(null,this.syncEngine),await k3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new P3}()}createDatastore(e){const n=ph(e.databaseInfo.databaseId),i=function(l){return new g3(l)}(e.databaseInfo);return function(l,c,h,f){return new w3(l,c,h,f)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,o,l,c,h){return new E3(i,o,l,c,h)}(this.localStore,this.datastore,e.asyncQueue,n=>rx(this.syncEngine,n,0),function(){return Xv.C()?new Xv:new h3}())}createSyncEngine(e,n){return function(o,l,c,h,f,v,w){const E=new D3(o,l,c,h,f,v);return w&&(E.Au=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const l=gt(o);be(uu,"RemoteStore shutting down."),l.Ta.add(5),await cu(l),l.Ea.shutdown(),l.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Pm.provider={build:()=>new Pm};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="FirestoreClient";class U3{constructor(e,n,i,o,l){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=o,this.user=gn.UNAUTHENTICATED,this.clientId=A_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{be(Ms,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(be(Ms,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=g2(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Dp(t,e){t.asyncQueue.verifyOperationInProgress(),be(Ms,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async o=>{i.isEqual(o)||(await c2(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ix(t,e){t.asyncQueue.verifyOperationInProgress();const n=await z3(t);be(Ms,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>Zv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,o)=>Zv(e.remoteStore,o)),t._onlineComponents=e}async function z3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){be(Ms,"Using user provided OfflineComponentProvider");try{await Dp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===ue.FAILED_PRECONDITION||o.code===ue.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;ch("Error using user provided cache. Falling back to memory cache: "+n),await Dp(t,new Md)}}else be(Ms,"Using default OfflineComponentProvider"),await Dp(t,new F3(void 0));return t._offlineComponents}async function $3(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(be(Ms,"Using user provided OnlineComponentProvider"),await ix(t,t._uninitializedComponentsProvider._online)):(be(Ms,"Using default OnlineComponentProvider"),await ix(t,new Pm))),t._onlineComponents}function B3(t){return $3(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H3(t,e,n){if(!n)throw new Ve(ue.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function W3(t,e,n,i){if(e===!0&&i===!0)throw new Ve(ue.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ox(t){if(!We.isDocumentKey(t))throw new Ve(ue.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Xe(12329,{type:typeof t})}function Am(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ve(ue.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dg(t);throw new Ve(ue.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2="firestore.googleapis.com",ax=!0;class lx{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Ve(ue.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=w2,this.ssl=ax}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ax;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=l2;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zA)throw new Ve(ue.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}W3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x2((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Ve(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Ve(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Ve(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Og{constructor(e,n,i,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lx({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ve(ue.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ve(ue.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lx(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new _P;switch(i.type){case"firstParty":return new TP(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ve(ue.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=sx.get(n);i&&(be("ComponentProvider","Removing Datastore"),sx.delete(n),i.terminate())}(this),Promise.resolve()}}function K3(t,e,n,i={}){var o;t=Am(t,Og);const l=Fa(e),c=t._getSettings(),h=Object.assign(Object.assign({},c),{emulatorOptions:t._getEmulatorOptions()}),f=`${e}:${n}`;l&&(eg(`https://${f}`),tg("Firestore",!0)),c.host!==w2&&c.host!==f&&ch("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},c),{host:f,ssl:l,emulatorOptions:i});if(!_o(v,h)&&(t._setSettings(v),i.mockUserToken)){let w,E;if(typeof i.mockUserToken=="string")w=i.mockUserToken,E=gn.MOCK_USER;else{w=$w(i.mockUserToken,(o=t._app)===null||o===void 0?void 0:o.options.projectId);const b=i.mockUserToken.sub||i.mockUserToken.user_id;if(!b)throw new Ve(ue.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new gn(b)}t._authCredentials=new EP(new P_(w,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Lg(this.firestore,e,this._query)}}class Ui{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ql(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ui(this.firestore,e,this._key)}}class ql extends Lg{constructor(e,n,i){super(e,n,rA(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ui(this.firestore,null,new We(e))}withConverter(e){return new ql(this.firestore,e,this._path)}}function G3(t,e,...n){if(t=zr(t),arguments.length===1&&(e=A_.newId()),H3("doc","path",e),t instanceof Og){const i=jt.fromString(e,...n);return ox(i),new Ui(t,null,new We(i))}{if(!(t instanceof Ui||t instanceof ql))throw new Ve(ue.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(jt.fromString(e,...n));return ox(i),new Ui(t.firestore,t instanceof ql?t.converter:null,new We(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux="AsyncQueue";class cx{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new d2(this,"async_queue_retry"),this.ec=()=>{const i=Np();i&&be(ux,"Visibility state changed to "+i.visibilityState),this.C_.p_()},this.tc=e;const n=Np();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=Np();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new xo;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!au(e))throw e;be(ux,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(i=>{throw this.Ju=i,this.Yu=!1,To("INTERNAL UNHANDLED ERROR: ",dx(i)),i}).then(i=>(this.Yu=!1,i))));return this.tc=n,n}enqueueAfterDelay(e,n,i){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const o=Ng.createAndSchedule(this,e,n,i,l=>this.oc(l));return this.Hu.push(o),o}nc(){this.Ju&&Xe(47125,{_c:dx(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function dx(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class _2 extends Og{constructor(e,n,i,o){super(e,n,i,o),this.type="firestore",this._queue=new cx,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cx(e),this._firestoreClient=void 0,await e}}}function q3(t,e){const n=typeof t=="object"?t:ig(),i=typeof t=="string"?t:kd,o=oh(n,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Fw("firestore");l&&K3(o,...l)}return o}function Q3(t){if(t._terminated)throw new Ve(ue.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Y3(t),t._firestoreClient}function Y3(t){var e,n,i;const o=t._freezeSettings(),l=function(h,f,v,w){return new $P(h,f,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,x2(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,o);t._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),t._firestoreClient=new U3(t._authCredentials,t._appCheckCredentials,t._queue,l,t._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ql(di.fromBase64String(e))}catch(n){throw new Ve(ue.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ql(di.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Ve(ue.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ln(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Ve(ue.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Ve(ue.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return st(this._lat,e._lat)||st(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3=/^__.*__$/;class J3{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Do(e,this.data,this.fieldMask,n,this.fieldTransforms):new lu(e,this.data,n,this.fieldTransforms)}}function S2(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Xe(40011,{hc:t})}}class jg{constructor(e,n,i,o,l,c){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Pc(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new jg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Tc({path:i,Ec:!1});return o.dc(e),o}Ac(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Tc({path:i,Ec:!1});return o.Pc(),o}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Vd(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(S2(this.hc)&&X3.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class Z3{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||ph(e)}gc(e,n,i,o=!1){return new jg({hc:e,methodName:n,fc:i,path:ln.emptyPath(),Ec:!1,mc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function e9(t){const e=t._freezeSettings(),n=ph(t._databaseId);return new Z3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function t9(t,e,n,i,o,l={}){const c=t.gc(l.merge||l.mergeFields?2:0,e,n,o);P2("Data must be an object, but it was:",c,i);const h=R2(i,c);let f,v;if(l.merge)f=new Mr(c.fieldMask),v=c.fieldTransforms;else if(l.mergeFields){const w=[];for(const E of l.mergeFields){const b=n9(e,E,n);if(!c.contains(b))throw new Ve(ue.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);s9(w,b)||w.push(b)}f=new Mr(w),v=c.fieldTransforms.filter(E=>f.covers(E.field))}else f=null,v=c.fieldTransforms;return new J3(new Dr(h),f,v)}function C2(t,e){if(k2(t=zr(t)))return P2("Unsupported field value:",e,t),R2(t,e);if(t instanceof b2)return function(i,o){if(!S2(o.hc))throw o.Vc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Vc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(i,o){const l=[];let c=0;for(const h of i){let f=C2(h,o.Rc(c));f==null&&(f={nullValue:"NULL_VALUE"}),l.push(f),c++}return{arrayValue:{values:l}}}(t,e)}return function(i,o){if((i=zr(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return fA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Xt.fromDate(i);return{timestampValue:Sm(o.serializer,l)}}if(i instanceof Xt){const l=new Xt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Sm(o.serializer,l)}}if(i instanceof I2)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ql)return{bytesValue:SA(o.serializer,i._byteString)};if(i instanceof Ui){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.Vc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:o2(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof T2)return function(c,h){return{mapValue:{fields:{[V_]:{stringValue:F_},[_m]:{arrayValue:{values:c.toArray().map(v=>{if(typeof v!="number")throw h.Vc("VectorValues must only contain numeric values.");return Cg(h.serializer,v)})}}}}}}(i,o);throw o.Vc(`Unsupported field value: ${Dg(i)}`)}(t,e)}function R2(t,e){const n={};return D_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$a(t,(i,o)=>{const l=C2(o,e.Ic(i));l!=null&&(n[i]=l)}),{mapValue:{fields:n}}}function k2(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xt||t instanceof I2||t instanceof Ql||t instanceof Ui||t instanceof b2||t instanceof T2)}function P2(t,e,n){if(!k2(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const i=Dg(n);throw i==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+i)}}function n9(t,e,n){if((e=zr(e))instanceof E2)return e._internalPath;if(typeof e=="string")return i9(t,e);throw Vd("Field path arguments must be of type string or ",t,!1,void 0,n)}const r9=new RegExp("[~\\*/\\[\\]]");function i9(t,e,n){if(e.search(r9)>=0)throw Vd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new E2(...e.split("."))._internalPath}catch{throw Vd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vd(t,e,n,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let h=`Function ${e}() called with invalid data`;n&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(l||c)&&(f+=" (found",l&&(f+=` in field ${i}`),c&&(f+=` in document ${o}`),f+=")"),new Ve(ue.INVALID_ARGUMENT,h+t+f)}function s9(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o9(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function a9(t,e,n){t=Am(t,Ui);const i=Am(t.firestore,_2),o=o9(t.converter,e,n);return l9(i,[t9(e9(i),"setDoc",t._key,o,t.converter!==null,n).toMutation(t._key,Fi.none())])}function l9(t,e){return function(i,o){const l=new xo;return i.asyncQueue.enqueueAndForget(async()=>O3(await B3(i),o,l)),l.promise}(Q3(t),e)}(function(e,n=!0){(function(o){za=o})(Ao),Eo(new Ds("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),h=new _2(new bP(i.getProvider("auth-internal")),new SP(c,i.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new Ve(ue.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pd(v.options.projectId,w)}(c,o),c);return l=Object.assign({useFetchStreams:n},l),h._setSettings(l),h},"PUBLIC").setMultipleInstances(!0)),li(Tv,Sv,e),li(Tv,Sv,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2="firebasestorage.googleapis.com",u9="storageBucket",c9=2*60*1e3,d9=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends pi{constructor(e,n,i=0){super(Op(e),`Firebase Storage: ${n} (${Op(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Op(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fi;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fi||(fi={}));function Op(t){return"storage/"+t}function h9(){const t="An unknown error occurred, please check the error payload for server response.";return new mi(fi.UNKNOWN,t)}function f9(){return new mi(fi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function p9(){return new mi(fi.CANCELED,"User canceled the upload/download.")}function m9(t){return new mi(fi.INVALID_URL,"Invalid URL '"+t+"'.")}function g9(t){return new mi(fi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function hx(t){return new mi(fi.INVALID_ARGUMENT,t)}function N2(){return new mi(fi.APP_DELETED,"The Firebase app was deleted.")}function y9(t){return new mi(fi.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Vr.makeFromUrl(e,n)}catch{return new Vr(e,"")}if(i.path==="")return i;throw g9(e)}static makeFromUrl(e,n){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(X){X.path.charAt(X.path.length-1)==="/"&&(X.path_=X.path_.slice(0,-1))}const c="(/(.*))?$",h=new RegExp("^gs://"+o+c,"i"),f={bucket:1,path:3};function v(X){X.path_=decodeURIComponent(X.path)}const w="v[A-Za-z0-9_]+",E=n.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",R=new RegExp(`^https?://${E}/${w}/b/${o}/o${b}`,"i"),P={bucket:1,path:3},z=n===A2?"(?:storage.googleapis.com|storage.cloud.google.com)":n,M="([^?#]*)",$=new RegExp(`^https?://${z}/${o}/${M}`,"i"),ee=[{regex:h,indices:f,postModify:l},{regex:R,indices:P,postModify:v},{regex:$,indices:{bucket:1,path:2},postModify:v}];for(let X=0;X<ee.length;X++){const ne=ee[X],D=ne.regex.exec(e);if(D){const C=D[ne.indices.bucket];let T=D[ne.indices.path];T||(T=""),i=new Vr(C,T),ne.postModify(i);break}}if(i==null)throw m9(e);return i}}class v9{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x9(t,e,n){let i=1,o=null,l=null,c=!1,h=0;function f(){return h===2}let v=!1;function w(...M){v||(v=!0,e.apply(null,M))}function E(M){o=setTimeout(()=>{o=null,t(R,f())},M)}function b(){l&&clearTimeout(l)}function R(M,...$){if(v){b();return}if(M){b(),w.call(null,M,...$);return}if(f()||c){b(),w.call(null,M,...$);return}i<64&&(i*=2);let ee;h===1?(h=2,ee=0):ee=(i+Math.random())*1e3,E(ee)}let P=!1;function z(M){P||(P=!0,b(),!v&&(o!==null?(M||(h=2),clearTimeout(o),E(0)):M||(h=1)))}return E(0),l=setTimeout(()=>{c=!0,z(!0)},n),z}function w9(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _9(t){return t!==void 0}function fx(t,e,n,i){if(i<e)throw hx(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw hx(`Invalid value for '${t}'. Expected ${n} or less.`)}function E9(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const o=e(i)+"="+e(t[i]);n=n+o+"&"}return n=n.slice(0,-1),n}var Fd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Fd||(Fd={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b9(t,e){const n=t>=500&&t<600,o=[408,429].indexOf(t)!==-1,l=e.indexOf(t)!==-1;return n||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I9{constructor(e,n,i,o,l,c,h,f,v,w,E,b=!0,R=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=h,this.errorCallback_=f,this.timeout_=v,this.progressCallback_=w,this.connectionFactory_=E,this.retry=b,this.isUsingEmulator=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,z)=>{this.resolve_=P,this.reject_=z,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new zc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=h=>{const f=h.loaded,v=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,v)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const h=l.getErrorCode()===Fd.NO_ERROR,f=l.getStatus();if(!h||b9(f,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===Fd.ABORT;i(!1,new zc(!1,null,w));return}const v=this.successCodes_.indexOf(f)!==-1;i(!0,new zc(v,l))})},n=(i,o)=>{const l=this.resolve_,c=this.reject_,h=o.connection;if(o.wasSuccessCode)try{const f=this.callback_(h,h.getResponse());_9(f)?l(f):l()}catch(f){c(f)}else if(h!==null){const f=h9();f.serverResponse=h.getErrorText(),this.errorCallback_?c(this.errorCallback_(h,f)):c(f)}else if(o.canceled){const f=this.appDelete_?N2():p9();c(f)}else{const f=f9();c(f)}};this.canceled_?n(!1,new zc(!1,null,!0)):this.backoffId_=x9(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&w9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zc{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function T9(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function S9(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function C9(t,e){e&&(t["X-Firebase-GMPID"]=e)}function R9(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function k9(t,e,n,i,o,l,c=!0,h=!1){const f=E9(t.urlParams),v=t.url+f,w=Object.assign({},t.headers);return C9(w,e),T9(w,n),S9(w,l),R9(w,i),new I9(v,t.method,w,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,c,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P9(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function A9(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this._service=e,n instanceof Vr?this._location=n:this._location=Vr.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ud(e,n)}get root(){const e=new Vr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return A9(this._location.path)}get storage(){return this._service}get parent(){const e=P9(this._location.path);if(e===null)return null;const n=new Vr(this._location.bucket,e);return new Ud(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw y9(e)}}function px(t,e){const n=e==null?void 0:e[u9];return n==null?null:Vr.makeFromBucketSpec(n,t)}function N9(t,e,n,i={}){t.host=`${e}:${n}`;const o=Fa(e);o&&(eg(`https://${t.host}`),tg("Storage",!0)),t._isUsingEmulator=!0,t._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(t._overrideAuthToken=typeof l=="string"?l:$w(l,t.app.options.projectId))}class D9{constructor(e,n,i,o,l,c=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=A2,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c9,this._maxUploadRetryTime=d9,this._requests=new Set,o!=null?this._bucket=Vr.makeFromBucketSpec(o,this._host):this._bucket=px(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vr.makeFromBucketSpec(this._url,e):this._bucket=px(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fx("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fx("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(hr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ud(this,e)}_makeRequest(e,n,i,o,l=!0){if(this._deleted)return new v9(N2());{const c=k9(e,this._appId,i,o,n,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,n){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,o).getPromise()}}const mx="@firebase/storage",gx="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2="storage";function O9(t=ig(),e){t=zr(t);const i=oh(t,D2).getImmediate({identifier:e}),o=Fw("storage");return o&&L9(i,...o),i}function L9(t,e,n,i={}){N9(t,e,n,i)}function j9(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new D9(n,i,o,e,Ao)}function M9(){Eo(new Ds(D2,j9,"PUBLIC").setMultipleInstances(!0)),li(mx,gx,""),li(mx,gx,"esm2017")}M9();const V9={apiKey:"AIzaSyCEup0v4_GeiuirQL0-4fOciaWl_iHhChU",authDomain:"sababa-40c06.firebaseapp.com",projectId:"sababa-40c06",storageBucket:"sababa-40c06.appspot.com",messagingSenderId:"390293857279",appId:"1:390293857279:web:d39aebaeffe0f4a814fdca",measurementId:"G-R1XT9ZXNE9"},Mg=Ww(V9),vh=xP(Mg),F9=q3(Mg);O9(Mg);const U9=new ji;function sn(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var z9=typeof Symbol=="function"&&Symbol.observable||"@@observable",yx=z9,Lp=()=>Math.random().toString(36).substring(7).split("").join("."),$9={INIT:`@@redux/INIT${Lp()}`,REPLACE:`@@redux/REPLACE${Lp()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Lp()}`},zd=$9;function Vg(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function O2(t,e,n){if(typeof t!="function")throw new Error(sn(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(sn(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(sn(1));return n(O2)(t,e)}let i=t,o=e,l=new Map,c=l,h=0,f=!1;function v(){c===l&&(c=new Map,l.forEach((M,$)=>{c.set($,M)}))}function w(){if(f)throw new Error(sn(3));return o}function E(M){if(typeof M!="function")throw new Error(sn(4));if(f)throw new Error(sn(5));let $=!0;v();const Y=h++;return c.set(Y,M),function(){if($){if(f)throw new Error(sn(6));$=!1,v(),c.delete(Y),l=null}}}function b(M){if(!Vg(M))throw new Error(sn(7));if(typeof M.type>"u")throw new Error(sn(8));if(typeof M.type!="string")throw new Error(sn(17));if(f)throw new Error(sn(9));try{f=!0,o=i(o,M)}finally{f=!1}return(l=c).forEach(Y=>{Y()}),M}function R(M){if(typeof M!="function")throw new Error(sn(10));i=M,b({type:zd.REPLACE})}function P(){const M=E;return{subscribe($){if(typeof $!="object"||$===null)throw new Error(sn(11));function Y(){const X=$;X.next&&X.next(w())}return Y(),{unsubscribe:M(Y)}},[yx](){return this}}}return b({type:zd.INIT}),{dispatch:b,subscribe:E,getState:w,replaceReducer:R,[yx]:P}}function B9(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:zd.INIT})>"u")throw new Error(sn(12));if(typeof n(void 0,{type:zd.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(sn(13))})}function H9(t){const e=Object.keys(t),n={};for(let l=0;l<e.length;l++){const c=e[l];typeof t[c]=="function"&&(n[c]=t[c])}const i=Object.keys(n);let o;try{B9(n)}catch(l){o=l}return function(c={},h){if(o)throw o;let f=!1;const v={};for(let w=0;w<i.length;w++){const E=i[w],b=n[E],R=c[E],P=b(R,h);if(typeof P>"u")throw h&&h.type,new Error(sn(14));v[E]=P,f=f||P!==R}return f=f||i.length!==Object.keys(c).length,f?v:c}}function $d(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...i)=>e(n(...i)))}function W9(...t){return e=>(n,i)=>{const o=e(n,i);let l=()=>{throw new Error(sn(15))};const c={getState:o.getState,dispatch:(f,...v)=>l(f,...v)},h=t.map(f=>f(c));return l=$d(...h)(o.dispatch),{...o,dispatch:l}}}function K9(t){return Vg(t)&&"type"in t&&typeof t.type=="string"}var L2=Symbol.for("immer-nothing"),vx=Symbol.for("immer-draftable"),Yn=Symbol.for("immer-state");function Or(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var ja=Object.getPrototypeOf;function Ro(t){return!!t&&!!t[Yn]}function Hi(t){var e;return t?j2(t)||Array.isArray(t)||!!t[vx]||!!((e=t.constructor)!=null&&e[vx])||wh(t)||_h(t):!1}var G9=Object.prototype.constructor.toString();function j2(t){if(!t||typeof t!="object")return!1;const e=ja(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===G9}function Bd(t,e){xh(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,i)=>e(i,n,t))}function xh(t){const e=t[Yn];return e?e.type_:Array.isArray(t)?1:wh(t)?2:_h(t)?3:0}function Nm(t,e){return xh(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function M2(t,e,n){const i=xh(t);i===2?t.set(e,n):i===3?t.add(n):t[e]=n}function q9(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function wh(t){return t instanceof Map}function _h(t){return t instanceof Set}function uo(t){return t.copy_||t.base_}function Dm(t,e){if(wh(t))return new Map(t);if(_h(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=j2(t);if(e===!0||e==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(t);delete i[Yn];let o=Reflect.ownKeys(i);for(let l=0;l<o.length;l++){const c=o[l],h=i[c];h.writable===!1&&(h.writable=!0,h.configurable=!0),(h.get||h.set)&&(i[c]={configurable:!0,writable:!0,enumerable:h.enumerable,value:t[c]})}return Object.create(ja(t),i)}else{const i=ja(t);if(i!==null&&n)return{...t};const o=Object.create(i);return Object.assign(o,t)}}function Fg(t,e=!1){return Eh(t)||Ro(t)||!Hi(t)||(xh(t)>1&&(t.set=t.add=t.clear=t.delete=Q9),Object.freeze(t),e&&Object.entries(t).forEach(([n,i])=>Fg(i,!0))),t}function Q9(){Or(2)}function Eh(t){return Object.isFrozen(t)}var Y9={};function ko(t){const e=Y9[t];return e||Or(0,t),e}var Yl;function V2(){return Yl}function X9(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function xx(t,e){e&&(ko("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Om(t){Lm(t),t.drafts_.forEach(J9),t.drafts_=null}function Lm(t){t===Yl&&(Yl=t.parent_)}function wx(t){return Yl=X9(Yl,t)}function J9(t){const e=t[Yn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function _x(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Yn].modified_&&(Om(e),Or(4)),Hi(t)&&(t=Hd(e,t),e.parent_||Wd(e,t)),e.patches_&&ko("Patches").generateReplacementPatches_(n[Yn].base_,t,e.patches_,e.inversePatches_)):t=Hd(e,n,[]),Om(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==L2?t:void 0}function Hd(t,e,n){if(Eh(e))return e;const i=e[Yn];if(!i)return Bd(e,(o,l)=>Ex(t,i,e,o,l,n)),e;if(i.scope_!==t)return e;if(!i.modified_)return Wd(t,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const o=i.copy_;let l=o,c=!1;i.type_===3&&(l=new Set(o),o.clear(),c=!0),Bd(l,(h,f)=>Ex(t,i,o,h,f,n,c)),Wd(t,o,!1),n&&t.patches_&&ko("Patches").generatePatches_(i,n,t.patches_,t.inversePatches_)}return i.copy_}function Ex(t,e,n,i,o,l,c){if(Ro(o)){const h=l&&e&&e.type_!==3&&!Nm(e.assigned_,i)?l.concat(i):void 0,f=Hd(t,o,h);if(M2(n,i,f),Ro(f))t.canAutoFreeze_=!1;else return}else c&&n.add(o);if(Hi(o)&&!Eh(o)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Hd(t,o),(!e||!e.scope_.parent_)&&typeof i!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,i)&&Wd(t,o)}}function Wd(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Fg(e,n)}function Z9(t,e){const n=Array.isArray(t),i={type_:n?1:0,scope_:e?e.scope_:V2(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,l=Ug;n&&(o=[i],l=Xl);const{revoke:c,proxy:h}=Proxy.revocable(o,l);return i.draft_=h,i.revoke_=c,h}var Ug={get(t,e){if(e===Yn)return t;const n=uo(t);if(!Nm(n,e))return e8(t,n,e);const i=n[e];return t.finalized_||!Hi(i)?i:i===jp(t.base_,e)?(Mp(t),t.copy_[e]=Mm(i,t)):i},has(t,e){return e in uo(t)},ownKeys(t){return Reflect.ownKeys(uo(t))},set(t,e,n){const i=F2(uo(t),e);if(i!=null&&i.set)return i.set.call(t.draft_,n),!0;if(!t.modified_){const o=jp(uo(t),e),l=o==null?void 0:o[Yn];if(l&&l.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(q9(n,o)&&(n!==void 0||Nm(t.base_,e)))return!0;Mp(t),jm(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return jp(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Mp(t),jm(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=uo(t),i=Reflect.getOwnPropertyDescriptor(n,e);return i&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:i.enumerable,value:n[e]}},defineProperty(){Or(11)},getPrototypeOf(t){return ja(t.base_)},setPrototypeOf(){Or(12)}},Xl={};Bd(Ug,(t,e)=>{Xl[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Xl.deleteProperty=function(t,e){return Xl.set.call(this,t,e,void 0)};Xl.set=function(t,e,n){return Ug.set.call(this,t[0],e,n,t[0])};function jp(t,e){const n=t[Yn];return(n?uo(n):t)[e]}function e8(t,e,n){var o;const i=F2(e,n);return i?"value"in i?i.value:(o=i.get)==null?void 0:o.call(t.draft_):void 0}function F2(t,e){if(!(e in t))return;let n=ja(t);for(;n;){const i=Object.getOwnPropertyDescriptor(n,e);if(i)return i;n=ja(n)}}function jm(t){t.modified_||(t.modified_=!0,t.parent_&&jm(t.parent_))}function Mp(t){t.copy_||(t.copy_=Dm(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var t8=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,i)=>{if(typeof e=="function"&&typeof n!="function"){const l=n;n=e;const c=this;return function(f=l,...v){return c.produce(f,w=>n.call(this,w,...v))}}typeof n!="function"&&Or(6),i!==void 0&&typeof i!="function"&&Or(7);let o;if(Hi(e)){const l=wx(this),c=Mm(e,void 0);let h=!0;try{o=n(c),h=!1}finally{h?Om(l):Lm(l)}return xx(l,i),_x(o,l)}else if(!e||typeof e!="object"){if(o=n(e),o===void 0&&(o=e),o===L2&&(o=void 0),this.autoFreeze_&&Fg(o,!0),i){const l=[],c=[];ko("Patches").generateReplacementPatches_(e,o,l,c),i(l,c)}return o}else Or(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(c,...h)=>this.produceWithPatches(c,f=>e(f,...h));let i,o;return[this.produce(e,n,(c,h)=>{i=c,o=h}),i,o]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Hi(t)||Or(8),Ro(t)&&(t=n8(t));const e=wx(this),n=Mm(t,void 0);return n[Yn].isManual_=!0,Lm(e),n}finishDraft(t,e){const n=t&&t[Yn];(!n||!n.isManual_)&&Or(9);const{scope_:i}=n;return xx(i,e),_x(void 0,i)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const o=e[n];if(o.path.length===0&&o.op==="replace"){t=o.value;break}}n>-1&&(e=e.slice(n+1));const i=ko("Patches").applyPatches_;return Ro(t)?i(t,e):this.produce(t,o=>i(o,e))}};function Mm(t,e){const n=wh(t)?ko("MapSet").proxyMap_(t,e):_h(t)?ko("MapSet").proxySet_(t,e):Z9(t,e);return(e?e.scope_:V2()).drafts_.push(n),n}function n8(t){return Ro(t)||Or(10,t),U2(t)}function U2(t){if(!Hi(t)||Eh(t))return t;const e=t[Yn];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Dm(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Dm(t,!0);return Bd(n,(i,o)=>{M2(n,i,U2(o))}),e&&(e.finalized_=!1),n}var Xn=new t8,z2=Xn.produce;Xn.produceWithPatches.bind(Xn);Xn.setAutoFreeze.bind(Xn);Xn.setUseStrictShallowCopy.bind(Xn);Xn.applyPatches.bind(Xn);Xn.createDraft.bind(Xn);Xn.finishDraft.bind(Xn);function $2(t){return({dispatch:n,getState:i})=>o=>l=>typeof l=="function"?l(n,i,t):o(l)}var r8=$2(),i8=$2,s8=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?$d:$d.apply(null,arguments)};function bx(t,e){function n(...i){if(e){let o=e(...i);if(!o)throw new Error(zi(0));return{type:t,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:t,payload:i[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=i=>K9(i)&&i.type===t,n}var B2=class Al extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Al.prototype)}static get[Symbol.species](){return Al}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Al(...e[0].concat(this)):new Al(...e.concat(this))}};function Ix(t){return Hi(t)?z2(t,()=>{}):t}function $c(t,e,n){return t.has(e)?t.get(e):t.set(e,n(e)).get(e)}function o8(t){return typeof t=="boolean"}var a8=()=>function(e){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:o=!0,actionCreatorCheck:l=!0}=e??{};let c=new B2;return n&&(o8(n)?c.push(r8):c.push(i8(n.extraArgument))),c},l8="RTK_autoBatch",Tx=t=>e=>{setTimeout(e,t)},u8=(t={type:"raf"})=>e=>(...n)=>{const i=e(...n);let o=!0,l=!1,c=!1;const h=new Set,f=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Tx(10):t.type==="callback"?t.queueNotification:Tx(t.timeout),v=()=>{c=!1,l&&(l=!1,h.forEach(w=>w()))};return Object.assign({},i,{subscribe(w){const E=()=>o&&w(),b=i.subscribe(E);return h.add(w),()=>{b(),h.delete(w)}},dispatch(w){var E;try{return o=!((E=w==null?void 0:w.meta)!=null&&E[l8]),l=!o,l&&(c||(c=!0,f(v))),i.dispatch(w)}finally{o=!0}}})},c8=t=>function(n){const{autoBatch:i=!0}=n??{};let o=new B2(t);return i&&o.push(u8(typeof i=="object"?i:void 0)),o};function d8(t){const e=a8(),{reducer:n=void 0,middleware:i,devTools:o=!0,preloadedState:l=void 0,enhancers:c=void 0}=t||{};let h;if(typeof n=="function")h=n;else if(Vg(n))h=H9(n);else throw new Error(zi(1));let f;typeof i=="function"?f=i(e):f=e();let v=$d;o&&(v=s8({trace:!1,...typeof o=="object"&&o}));const w=W9(...f),E=c8(w);let b=typeof c=="function"?c(E):E();const R=v(...b);return O2(h,l,R)}function H2(t){const e={},n=[];let i;const o={addCase(l,c){const h=typeof l=="string"?l:l.type;if(!h)throw new Error(zi(28));if(h in e)throw new Error(zi(29));return e[h]=c,o},addMatcher(l,c){return n.push({matcher:l,reducer:c}),o},addDefaultCase(l){return i=l,o}};return t(o),[e,n,i]}function h8(t){return typeof t=="function"}function f8(t,e){let[n,i,o]=H2(e),l;if(h8(t))l=()=>Ix(t());else{const h=Ix(t);l=()=>h}function c(h=l(),f){let v=[n[f.type],...i.filter(({matcher:w})=>w(f)).map(({reducer:w})=>w)];return v.filter(w=>!!w).length===0&&(v=[o]),v.reduce((w,E)=>{if(E)if(Ro(w)){const R=E(w,f);return R===void 0?w:R}else{if(Hi(w))return z2(w,b=>E(b,f));{const b=E(w,f);if(b===void 0){if(w===null)return w;throw Error("A case reducer on a non-draftable value must not return undefined")}return b}}return w},h)}return c.getInitialState=l,c}var p8=Symbol.for("rtk-slice-createasyncthunk");function m8(t,e){return`${t}/${e}`}function g8({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[p8];return function(o){const{name:l,reducerPath:c=l}=o;if(!l)throw new Error(zi(11));const h=(typeof o.reducers=="function"?o.reducers(x8()):o.reducers)||{},f=Object.keys(h),v={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},w={addCase(X,ne){const D=typeof X=="string"?X:X.type;if(!D)throw new Error(zi(12));if(D in v.sliceCaseReducersByType)throw new Error(zi(13));return v.sliceCaseReducersByType[D]=ne,w},addMatcher(X,ne){return v.sliceMatchers.push({matcher:X,reducer:ne}),w},exposeAction(X,ne){return v.actionCreators[X]=ne,w},exposeCaseReducer(X,ne){return v.sliceCaseReducersByName[X]=ne,w}};f.forEach(X=>{const ne=h[X],D={reducerName:X,type:m8(l,X),createNotation:typeof o.reducers=="function"};_8(ne)?b8(D,ne,w,e):w8(D,ne,w)});function E(){const[X={},ne=[],D=void 0]=typeof o.extraReducers=="function"?H2(o.extraReducers):[o.extraReducers],C={...X,...v.sliceCaseReducersByType};return f8(o.initialState,T=>{for(let S in C)T.addCase(S,C[S]);for(let S of v.sliceMatchers)T.addMatcher(S.matcher,S.reducer);for(let S of ne)T.addMatcher(S.matcher,S.reducer);D&&T.addDefaultCase(D)})}const b=X=>X,R=new Map,P=new WeakMap;let z;function M(X,ne){return z||(z=E()),z(X,ne)}function $(){return z||(z=E()),z.getInitialState()}function Y(X,ne=!1){function D(T){let S=T[X];return typeof S>"u"&&ne&&(S=$c(P,D,$)),S}function C(T=b){const S=$c(R,ne,()=>new WeakMap);return $c(S,T,()=>{const O={};for(const[V,B]of Object.entries(o.selectors??{}))O[V]=y8(B,T,()=>$c(P,T,$),ne);return O})}return{reducerPath:X,getSelectors:C,get selectors(){return C(D)},selectSlice:D}}const ee={name:l,reducer:M,actions:v.actionCreators,caseReducers:v.sliceCaseReducersByName,getInitialState:$,...Y(c),injectInto(X,{reducerPath:ne,...D}={}){const C=ne??c;return X.inject({reducerPath:C,reducer:M},D),{...ee,...Y(C,!0)}}};return ee}}function y8(t,e,n,i){function o(l,...c){let h=e(l);return typeof h>"u"&&i&&(h=n()),t(h,...c)}return o.unwrapped=t,o}var v8=g8();function x8(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function w8({type:t,reducerName:e,createNotation:n},i,o){let l,c;if("reducer"in i){if(n&&!E8(i))throw new Error(zi(17));l=i.reducer,c=i.prepare}else l=i;o.addCase(t,l).exposeCaseReducer(e,l).exposeAction(e,c?bx(t,c):bx(t))}function _8(t){return t._reducerDefinitionType==="asyncThunk"}function E8(t){return t._reducerDefinitionType==="reducerWithPrepare"}function b8({type:t,reducerName:e},n,i,o){if(!o)throw new Error(zi(18));const{payloadCreator:l,fulfilled:c,pending:h,rejected:f,settled:v,options:w}=n,E=o(t,l,w);i.exposeAction(e,E),c&&i.addCase(E.fulfilled,c),h&&i.addCase(E.pending,h),f&&i.addCase(E.rejected,f),v&&i.addMatcher(E.settled,v),i.exposeCaseReducer(e,{fulfilled:c||Bc,pending:h||Bc,rejected:f||Bc,settled:v||Bc})}function Bc(){}function zi(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const I8={user:null,isLoading:!1,error:null},W2=v8({name:"auth",initialState:I8,reducers:{setUser:(t,e)=>{const{uid:n,email:i,displayName:o,photoURL:l}=e.payload;t.user={uid:n,email:i,displayName:o,photoURL:l},t.isLoading=!1,t.error=null},setLoading:(t,e)=>{t.isLoading=e.payload},setError:(t,e)=>{t.error=e.payload},clearUser:t=>{t.user=null}}}),{setUser:K2,setLoading:Vp,setError:G2,clearUser:T8}=W2.actions,S8=W2.reducer,Lr=d8({reducer:{auth:S8}}),C8=()=>vh.onAuthStateChanged(t=>{if(t){const e={uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL};Lr.dispatch(K2(e))}else console.log("User is signed out",Lr.getState().auth.user),Lr.dispatch(T8()),console.log("User cleared from store",Lr.getState().auth.user)}),R8=async()=>{try{Lr.dispatch(Vp(!0));const e=(await Rk(vh,U9)).user;await a9(G3(F9,"users",e.uid),{uid:e.uid,email:e.email||"",displayName:e.displayName||"Anonymous",createdAt:new Date},{merge:!0});const n={uid:e.uid,email:e.email,displayName:e.displayName,photoURL:e.photoURL};Lr.dispatch(K2(n)),Lr.dispatch(Vp(!1))}catch(t){Lr.dispatch(G2(t.message||"Google sign-in failed")),Lr.dispatch(Vp(!1))}},k8=async()=>{try{return await vh.signOut(),!0}catch{return Lr.dispatch(G2("Sign-out failed")),!1}};function Sx({icon:t,label:e,setCurrentNav:n,currentNav:i,onClick:o}){return y.jsxs(O8,{onClick:()=>{o?o():n(e)},className:i===e?"active":"",children:[y.jsx(L8,{children:y.jsx("div",{dangerouslySetInnerHTML:{__html:t}})}),y.jsx(j8,{children:e})]})}function P8(t){const e=ks(),n=$m(),o=[{icon:'<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M22.907 17.8183C22.907 18.5898 22.6006 19.3297 22.055 19.8753C21.5094 20.4209 20.7695 20.7274 19.998 20.7274C19.2264 20.7274 18.4865 20.4209 17.9409 19.8753C17.3954 19.3297 17.0889 18.5898 17.0889 17.8183C17.0889 17.0467 17.3954 16.3068 17.9409 15.7612C18.4865 15.2157 19.2264 14.9092 19.998 14.9092C20.7695 14.9092 21.5094 15.2157 22.055 15.7612C22.6006 16.3068 22.907 17.0467 22.907 17.8183ZM21.4525 17.8183C21.4525 18.204 21.2993 18.574 21.0265 18.8468C20.7537 19.1196 20.3837 19.2728 19.998 19.2728C19.6122 19.2728 19.2422 19.1196 18.9694 18.8468C18.6967 18.574 18.5434 18.204 18.5434 17.8183C18.5434 17.4325 18.6967 17.0625 18.9694 16.7898C19.2422 16.517 19.6122 16.3637 19.998 16.3637C20.3837 16.3637 20.7537 16.517 21.0265 16.7898C21.2993 17.0625 21.4525 17.4325 21.4525 17.8183Z" fill="#1C1C1C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C15.5818 12 12 15.5818 12 20C12 24.4182 15.5818 28 20 28C24.4182 28 28 24.4182 28 20C28 15.5818 24.4182 12 20 12ZM13.4545 20C13.4545 21.52 13.9731 22.9193 14.8422 24.0305C15.4527 23.2292 16.2401 22.5797 17.143 22.1329C18.0459 21.686 19.0399 21.4539 20.0473 21.4545C21.0417 21.4534 22.0233 21.6793 22.9172 22.1152C23.811 22.551 24.5936 23.1852 25.2051 23.9695C25.8352 23.143 26.2595 22.1783 26.4428 21.1553C26.6261 20.1323 26.5632 19.0804 26.2593 18.0865C25.9553 17.0927 25.4191 16.1855 24.6949 15.44C23.9707 14.6946 23.0795 14.1323 22.0948 13.7996C21.1102 13.467 20.0605 13.3737 19.0326 13.5273C18.0047 13.6809 17.0282 14.077 16.1838 14.6829C15.3395 15.2889 14.6515 16.0872 14.1769 17.0118C13.7023 17.9364 13.4547 18.9607 13.4545 20ZM20 26.5455C18.4974 26.5479 17.0401 26.031 15.8749 25.0822C16.3439 24.4106 16.9681 23.8623 17.6946 23.484C18.4211 23.1056 19.2282 22.9084 20.0473 22.9091C20.8561 22.9084 21.6535 23.1007 22.3731 23.47C23.0927 23.8394 23.7138 24.3751 24.1847 25.0327C23.0105 26.0124 21.5292 26.5478 20 26.5455Z" fill="#1C1C1C"></path></svg>',label:"Profile",path:"profile"},{icon:'<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path d="M13.5678 26V15.9667L12 12.6611L13.4472 12L15.3367 15.9278H24.6633L26.5528 12L28 12.6611L26.4322 15.9667V26H13.5678ZM18.392 20.5556H21.608C21.8358 20.5556 22.0269 20.4809 22.1813 20.3316C22.3357 20.1822 22.4126 19.9976 22.4121 19.7778C22.4115 19.5579 22.3343 19.3733 22.1805 19.224C22.0267 19.0747 21.8358 19 21.608 19H18.392C18.1642 19 17.9733 19.0747 17.8195 19.224C17.6657 19.3733 17.5885 19.5579 17.5879 19.7778C17.5874 19.9976 17.6646 20.1825 17.8195 20.3323C17.9744 20.4822 18.1652 20.5566 18.392 20.5556ZM15.1759 24.4444H24.8241V17.4833H15.1759V24.4444Z" fill="#1C1C1C"></path></svg>',label:"Your orders",path:"your-order"},{icon:'<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path d="M25.8462 13.5H14.1538C12.9643 13.5 12 14.5186 12 15.775V24.225C12 25.4814 12.9643 26.5 14.1538 26.5H25.8462C27.0357 26.5 28 25.4814 28 24.225V15.775C28 14.5186 27.0357 13.5 25.8462 13.5Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17.3999H28M15.0769 21.7874H16.9231V22.5999H15.0769V21.7874Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linejoin="round"></path></svg>',label:"Payment method",path:"payment-method"},{icon:'<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path d="M23.5543 11V12.8M25.2565 29C25.2565 27.5678 24.6946 26.1943 23.6944 25.1816C22.6942 24.1689 21.3377 23.6 19.9232 23.6C18.5087 23.6 17.1521 24.1689 16.1519 25.1816C15.1517 26.1943 14.5898 27.5678 14.5898 29M16.4432 11V12.8" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0009 23.5999C21.9645 23.5999 23.5564 21.9881 23.5564 19.9999C23.5564 18.0117 21.9645 16.3999 20.0009 16.3999C18.0372 16.3999 16.4453 18.0117 16.4453 19.9999C16.4453 21.9881 18.0372 23.5999 20.0009 23.5999Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.2222 12.7998H13.7778C12.7959 12.7998 12 13.6057 12 14.5998V27.1998C12 28.1939 12.7959 28.9998 13.7778 28.9998H26.2222C27.2041 28.9998 28 28.1939 28 27.1998V14.5998C28 13.6057 27.2041 12.7998 26.2222 12.7998Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',label:"Contact",path:"contact"},{icon:'<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M26.6823 17.552L26.3894 17.3897L26.299 17.3388C26.0808 17.2087 25.897 17.0287 25.7628 16.8138C25.7484 16.7923 25.7356 16.7692 25.71 16.7247C25.5374 16.4493 25.4537 16.1282 25.4699 15.8042L25.4747 15.4661C25.4843 14.9251 25.4891 14.653 25.4123 14.4096C25.3443 14.193 25.2305 13.9933 25.0786 13.824C24.9073 13.6331 24.6696 13.4963 24.1934 13.2242L23.7981 12.9975C23.3243 12.7262 23.0866 12.5901 22.8345 12.5384C22.6118 12.4926 22.3818 12.4945 22.1599 12.544C21.9094 12.5997 21.6749 12.7397 21.2067 13.0181L21.2043 13.0197L20.921 13.1876C20.8762 13.2146 20.853 13.2274 20.8306 13.2401C20.6081 13.3634 20.36 13.431 20.1047 13.439C20.0791 13.4406 20.0527 13.4406 20.0007 13.4406L19.8966 13.4398C19.6413 13.4317 19.3916 13.363 19.1684 13.2393C19.146 13.2274 19.1244 13.2139 19.0795 13.1868L18.7938 13.0166C18.3225 12.7349 18.0864 12.5949 17.8343 12.5384C17.6115 12.4889 17.3807 12.4872 17.1572 12.5336C16.9043 12.5862 16.6675 12.723 16.1929 12.9967L16.1905 12.9975L15.7999 13.2226L15.7959 13.2258C15.3254 13.4963 15.0893 13.6331 14.9196 13.8233C14.7684 13.9922 14.6552 14.1913 14.5875 14.4072C14.5115 14.6514 14.5155 14.9235 14.5251 15.4677L14.5307 15.805C14.5307 15.8567 14.5331 15.8822 14.5323 15.9068C14.5281 16.1959 14.4448 16.4783 14.2914 16.7239C14.265 16.7684 14.253 16.7907 14.2394 16.8114C14.1044 17.0279 13.9192 17.2091 13.6992 17.3396L13.6095 17.3897L13.3206 17.5489C12.8388 17.8138 12.598 17.9466 12.4235 18.136C12.2684 18.3029 12.151 18.5009 12.0794 18.7167C11.9993 18.961 11.9993 19.2339 12.0001 19.7812L12.0017 20.2291C12.0025 20.7725 12.0041 21.0438 12.085 21.2864C12.1563 21.5009 12.2728 21.6978 12.4267 21.864C12.6012 22.0517 12.8396 22.1838 13.3174 22.4479L13.6039 22.6062C13.6527 22.6333 13.6776 22.646 13.7008 22.6603C13.9516 22.8098 14.1564 23.0247 14.293 23.2817L14.3466 23.3771C14.4818 23.6309 14.5454 23.9162 14.5307 24.2029L14.5251 24.5267C14.5155 25.0725 14.5115 25.3462 14.5883 25.5904C14.6563 25.8068 14.77 26.0065 14.922 26.1759C15.0933 26.3669 15.3318 26.5029 15.8071 26.7758L16.2025 27.0025C16.6771 27.2738 16.9139 27.4098 17.166 27.4615C17.3888 27.5074 17.6188 27.5055 17.8407 27.456C18.092 27.4003 18.3265 27.2603 18.7962 26.9802L19.0795 26.8116L19.17 26.7591C19.3925 26.6365 19.6406 26.5681 19.8958 26.5602L19.9999 26.5594H20.1039C20.3584 26.5673 20.6081 26.6365 20.8322 26.7599L20.9058 26.8036L21.2067 26.9834C21.6789 27.265 21.9142 27.4051 22.1663 27.4608C22.3889 27.5108 22.6198 27.513 22.8433 27.4671C23.0954 27.4146 23.3339 27.277 23.8085 27.0033L24.2046 26.775C24.6752 26.5029 24.9113 26.3669 25.081 26.1767C25.233 26.0073 25.3451 25.8084 25.4131 25.5928C25.4891 25.3501 25.4851 25.0804 25.4755 24.5442L25.4691 24.1942V24.0931C25.4729 23.8039 25.5559 23.5212 25.7092 23.2753L25.7612 23.1878C25.8961 22.9713 26.0814 22.7901 26.3014 22.6595L26.3894 22.611L26.391 22.6102L26.6799 22.4511C27.1617 22.1854 27.4026 22.0533 27.5779 21.864C27.7331 21.6969 27.85 21.498 27.9212 21.2832C28.0012 21.0406 28.0012 20.7685 27.9996 20.2275L27.998 19.7709C27.9972 19.2275 27.9964 18.9554 27.9156 18.7128C27.8439 18.4985 27.7271 18.3019 27.5731 18.136C27.3994 17.9482 27.1609 17.8162 26.6839 17.5528L26.6823 17.552Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.7988 19.9996C16.7988 20.8436 17.1361 21.653 17.7364 22.2498C18.3368 22.8466 19.151 23.1819 20 23.1819C20.849 23.1819 21.6632 22.8466 22.2636 22.2498C22.8639 21.653 23.2012 20.8436 23.2012 19.9996C23.2012 19.1556 22.8639 18.3462 22.2636 17.7494C21.6632 17.1527 20.849 16.8174 20 16.8174C19.151 16.8174 18.3368 17.1527 17.7364 17.7494C17.1361 18.3462 16.7988 19.1556 16.7988 19.9996Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',label:"Account settings",path:"settings"},{icon:'<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F4F4F4" fill-opacity="0.5"></rect><path d="M18.0952 16.1111V14.5556C18.0952 14.143 18.2558 13.7473 18.5416 13.4556C18.8273 13.1639 19.2149 13 19.619 13L26.4762 13C26.8803 13 27.2679 13.1639 27.5537 13.4556C27.8395 13.7473 28 14.143 28 14.5556L28 25.4444C28 25.857 27.8395 26.2527 27.5537 26.5444C27.2679 26.8361 26.8803 27 26.4762 27L19.619 27C19.2149 27 18.8273 26.8361 18.5416 26.5444C18.2558 26.2527 18.0952 25.857 18.0952 25.4444V23.8889H19.619V25.4444L26.4762 25.4444L26.4762 14.5556L19.619 14.5556V16.1111L18.0952 16.1111ZM16.1905 24.2778L17.2678 23.178L14.9166 20.7778L22.6667 20.7778L22.6667 19.2222L14.9166 19.2222L17.2678 16.822L16.1905 15.7222L12 20L16.1905 24.2778Z" fill="#1C1C1C"></path></svg>',label:"Sign out",path:null,onClick:async()=>{try{await k8(),n("/",{replace:!0}),console.log("User signed out successfully")}catch(l){console.error("Error signing out:",l)}}}];return y.jsxs(A8,{children:[y.jsx(N8,{children:"Hello, Eminokanju"}),y.jsx(D8,{children:o.map((l,c)=>l.label==="Sign out"?y.jsx(Sx,{icon:l.icon,label:l.label,setCurrentNav:t.setCurrentNav,currentNav:t.currentNav,onClick:()=>{l.onClick()}},c):y.jsx(dd,{to:e>720?`/account/${l.path}`:`/accounts/${l.path}`,style:{textDecoration:"none"},children:y.jsx(Sx,{icon:l.icon,label:l.label,setCurrentNav:t.setCurrentNav,currentNav:t.currentNav},c)},c))})]})}const A8=A.aside`
  width: 375px;
  height: 543px;
  border-radius: 8px;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  @media (max-width: 730px) {
    width: 100%;
    height: auto;
    box-shadow: none;
  }
`,N8=A.div`
  width: 100%;
  height: 95px;
  border-radius: 8px 8px 0 0;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding: 55px 16px 16px;
  background-color: #727272;
  @media (max-width: 730px) {
    border-radius: 0;
    height: 60px;
    padding: 16px;
  }
  @media (max-width: 480px) {
    height: 50px;
    padding: 16px;
    font-size: 16px;
  }
`,D8=A.nav`
  padding: 12px 0;
  @media (max-width: 730px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`,O8=A.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  cursor: pointer;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 480px) {
    padding: 6px 4px;
  }
  &.active{
    border-left: 5px solid black;
  }
`,L8=A.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: rgba(244, 244, 244, 0.5);
`,j8=A.span`
  color: #1c1c1c;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 240px) {
    font-size: 12px;
  }
`;function q2(){return y.jsx(M8,{children:y.jsxs(V8,{children:[y.jsxs(F8,{children:[y.jsx(Fp,{children:"Sababa Homepage"}),y.jsx(Fp,{children:"Terms & Conditions"}),y.jsx(Fp,{children:"Privacy Policy"})]}),y.jsx(U8,{children:"@Sababa 2024"})]})})}const M8=A.footer`
  margin-top: auto;
  background-color: #fcfcfc;
  box-shadow: 1px 0px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 30px 0;
`,V8=A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1104px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }

  @media (max-width: 600px) {
    padding: 0 16px;
    flex-direction: column;
    gap: 16px;
  }
`,F8=A.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`,Fp=A.a`
  color: #545454;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,U8=A.p`
  color: #545454;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;function z8(){const[t,e]=K.useState("Profile");return y.jsxs($8,{children:[y.jsx(Ow,{currentNav:t}),y.jsxs(B8,{children:[y.jsx(P8,{currentNav:t,setCurrentNav:e}),ks()>720?y.jsx(Xx,{}):null]}),y.jsx(q2,{})]})}const $8=A.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
`,B8=A.main`
  display: flex;
  gap: 16px;
  padding-left: 40px;
  padding-right: 40px;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 0%;
  }
`;function H8(){return y.jsxs(y.Fragment,{children:[y.jsxs(W8,{children:[y.jsx(Cx,{children:"Email"}),y.jsxs(G8,{children:[y.jsx(Sl,{children:"Current email"}),y.jsx(Rx,{children:"vwegbaeminokanju@gmail.com"})]}),y.jsxs(q8,{children:[y.jsx(Sl,{children:"Status"}),y.jsx(Rx,{children:"Unconfirmed"})]}),y.jsx(J8,{children:"Resend confirmation email"})]}),y.jsxs(K8,{children:[y.jsx(Cx,{children:"Change email"}),y.jsxs(Q8,{children:[y.jsxs(Up,{children:[y.jsx(Sl,{children:"New email"}),y.jsx(zp,{type:"email"})]}),y.jsxs(Up,{children:[y.jsx(Sl,{children:"Confirm new email"}),y.jsx(zp,{type:"email"})]}),y.jsxs(Up,{children:[y.jsx(Sl,{children:"Your Sababa password"}),y.jsxs(Y8,{children:[y.jsx(zp,{type:"password"}),y.jsx(X8,{children:"Show"})]})]}),y.jsx(Z8,{children:"Change email"}),y.jsx(e7,{children:"Your email address will not change until you confirm it via email."})]})]})]})}const W8=A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
`,K8=A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`,Cx=A.h3`
  color: #545454;
  font-size: 16px;
  @media (max-width: 480px){
    font-size: 14px;
  }
`,G8=A.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,q8=A.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Sl=A.label`
  color: #545454;
  font-size: 14px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`,Rx=A.p`
  color: #1c1c1c;
  font-size: 16px;
  margin: 0;
  @media (max-width: 480px){
    font-size: 12px;
  }
`,Q8=A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Up=A.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,zp=A.input`
  width: 370px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 12px;

  @media (max-width: 780px) {
    width: 100%;
  }
`,Y8=A.div`
  position: relative;
  width: 370px;

  @media (max-width: 780px) {
    width: 100%;
  }
`,X8=A.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #545454;
  font-size: 12px;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
`,J8=A.button`
  width: 370px;
  height: 40px;
  border: 1px solid #1c1c1c;
  border-radius: 8px;
  color: #1c1c1c;
  font-size: 16px;
  background: none;
  cursor: pointer;

  @media (max-width: 780px) {
    width: 100%;
  }
  @media (max-width: 480px){
    font-size: 12px;
  }
`,Z8=A.button`
  width: 370px;
  height: 44px;
  background-color: #1c1c1c;
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  cursor: pointer;

  @media (max-width: 780px) {
    width: 100%;
  }
  @media (max-width: 480px){
    font-size: 14px;
  }
`,e7=A.p`
  color: #545454;
  font-size: 12px;
  margin: 0;
  @media (max-width: 480px){
    font-size: 10px;
  }
`;function t7(){return y.jsxs(n7,{children:[y.jsx(r7,{children:"Password"}),y.jsxs(i7,{children:[y.jsxs($p,{children:[y.jsx(Bp,{children:"Current password"}),y.jsx(Hp,{type:"password"})]}),y.jsxs($p,{children:[y.jsx(Bp,{children:"New password"}),y.jsxs(kx,{children:[y.jsx(Hp,{type:"password"}),y.jsx(Px,{children:"Show"})]})]}),y.jsxs($p,{children:[y.jsx(Bp,{children:"Confirm new password"}),y.jsxs(kx,{children:[y.jsx(Hp,{type:"password"}),y.jsx(Px,{children:"Show"})]})]}),y.jsx(s7,{children:"Change password"})]})]})}const n7=A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`,r7=A.h3`
  color: #545454;
  font-size: 16px;
`,i7=A.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,$p=A.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Bp=A.label`
  color: #545454;
  font-size: 14px;
`,Hp=A.input`
  width: 370px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 12px;

  @media (max-width: 780px) {
    width: 100%;
  }
`,kx=A.div`
  position: relative;
  width: 370px;

  @media (max-width: 780px) {
    width: 100%;
  }
`,Px=A.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #545454;
  font-size: 12px;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
`,s7=A.button`
  width: 370px;
  height: 44px;
  background-color: #1c1c1c;
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  @media (max-width: 780px) {
    width: 100%;
  }
  @media (max-width: 480px){
    font-size: 14px;
  }
`;function Q2(){return y.jsx(o7,{children:y.jsxs(a7,{children:[y.jsx(H8,{}),y.jsx(t7,{})]})})}const o7=A.section`
  background-color: #fff;
  width: 713px;
  border: 0cqh;
  border-radius: 8px;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 32px;
  @media (max-width: 730px){
    width: 100%;
  }
  @media (max-width: 480px){
    padding: 16px;
  }
  @media (max-width: 300px){
    font-size: 6px;
  }
`,a7=A.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,Y2=()=>y.jsx(l7,{children:y.jsxs(u7,{children:[y.jsx(c7,{children:"If you've got any issues or outfits, products, styles, website suggestions, or anything else to share? Fill out the form!"}),y.jsxs(d7,{children:[y.jsx(h7,{children:y.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets/001f261659df40119f6cb1a32a4e0f9f/1b71351479d2343787cd47eb980b6b200c180bd5?placeholderIfAbsent=true",alt:""})}),y.jsxs(f7,{children:["Email us on ",y.jsx("br",{}),"thesababacommunity@gmail.com"]})]}),y.jsxs(p7,{children:[y.jsxs(Hc,{mt:"0",children:[y.jsx("label",{children:"Name"}),y.jsx(Wp,{type:"text",name:"name"})]}),y.jsxs(Hc,{children:[y.jsx("label",{children:"Email"}),y.jsx(Wp,{type:"email",name:"email"})]}),y.jsxs(Hc,{children:[y.jsx("label",{children:"Subject"}),y.jsx(Wp,{type:"text",name:"subject"})]}),y.jsxs(Hc,{children:[y.jsx("label",{children:"Message"}),y.jsx(m7,{})]})]}),y.jsxs(g7,{children:[y.jsx(y7,{children:y.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets/001f261659df40119f6cb1a32a4e0f9f/22849277e92bac1a68db3292e35f38ea1d072ea1?placeholderIfAbsent=true",alt:""})}),y.jsxs(v7,{children:["To submit this form you have to accept our"," ",y.jsx("span",{style:{textDecoration:"underline"},children:"Privacy Statement"})]})]}),y.jsx(x7,{type:"submit",children:"Send"})]})}),l7=A.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 713px;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0%;
  }
`,u7=A.form`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 49px 80px 49px 40px;
  flex-direction: column;
  align-items: start;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 17px;
    padding: 20px;
  }
  @media (max-width: 480px){
    padding: 8px;
  }
`,c7=A.p`
  color: rgba(84, 84, 84, 1);
  font-size: 16px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  align-self: stretch;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  @media (max-width: 480px){
    font-size: 10px;
  }
`,d7=A.div`
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  margin-top: 20px;
  padding: 8px;
  align-items: center;
  gap: 4px;
  width: 280px;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 330px){
    width: 100%;
  }
`,h7=A.div`
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  @media (max-width: 400px){
    width: 25px;
    height: 25px;
  }
`,f7=A.p`
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  line-height: 18px;
  margin: 0;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 310px){
    font-size: 10px;
  }
  @media (max-width: 240px){
    font-size: 8px;
  }
`,p7=A.div`
  margin-top: 20px;
  width: 370px;
  max-width: 100%;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(84, 84, 84, 1);
  font-weight: 500;
  @media (max-width: 480px){
    font-size: 12px;
  }
`,Hc=A.div`
  margin-top: ${t=>t.mt||"20px"};
  width: 100%;
`,Wp=A.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 48px;
  margin-top: 8px;
  width: 100%;
  padding: 8px;
`,m7=A.textarea`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 159px;
  margin-top: 8px;
  width: 100%;
  padding: 8px;
`,g7=A.div`
  display: flex;
  margin-top: 28px;
  align-items: end;
  gap: 4px;
  @media (max-width: 480px){
    width: 100%;
  }
`,y7=A.div`
  border-radius: 4px;
  background-color: rgba(20, 110, 180, 0.05);
  border: 1px solid rgba(20, 110, 180, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`,v7=A.p`
  color: rgba(28, 28, 28, 1);
  font-size: 12px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  width: 361px;
  @media (max-width: 280px){
    font-size: 10px;
  }
`,x7=A.button`
  align-self: stretch;
  border-radius: 4px;
  width: 370px;
  background-color: rgba(28, 28, 28, 1);
  margin-top: 12px;
  min-height: 48px;
  padding: 15px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  border: none;
  cursor: pointer;
  text-align: center;

  @media (max-width: 991px) {
    padding: 15px 20px;
  }
  @media (max-width: 480px){
    font-size: 12px;
    width: 100%;
  }
`,X2=()=>y.jsx(w7,{children:y.jsxs(_7,{children:[y.jsxs(Kp,{children:[y.jsx(Gp,{children:"Region"}),y.jsx(qp,{children:y.jsx(Qp,{defaultValue:"Nigeria",children:y.jsx("option",{value:"Nigeria",children:"Nigeria"})})})]}),y.jsxs(Kp,{children:[y.jsx(Gp,{children:"Language"}),y.jsx(qp,{children:y.jsx(Qp,{defaultValue:"English (UK)",children:y.jsx("option",{value:"English (UK)",children:"English (UK)"})})})]}),y.jsxs(Kp,{children:[y.jsx(Gp,{children:"Currency"}),y.jsx(qp,{children:y.jsx(Qp,{defaultValue:"USD",children:y.jsx("option",{value:"USD",children:"$ US Dollar (USD)"})})})]}),y.jsx(E7,{children:"Save settings"})]})}),w7=A.section`
  width: 713px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 40px;

  @media (max-width: 991px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    padding: 20px;
  }
  @media (max-width: 730px){
    width: 100%;
  }
  @media (max-width: 480px){
    padding:16px;
  }
`,_7=A.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 370px;
  @media (max-width: 430px){
    width: 100%;
  }
`,Kp=A.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Gp=A.label`
  color: #545454;
  font-size: 14px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`,qp=A.div`
  position: relative;
`,Qp=A.select`
  width: 100%;
  height: 44px;
  padding-left: 12px;
  padding-right: 12px;
  color: #1c1c1c;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  background-color: transparent;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #1c1c1c;
  }
  @media (max-width: 480px){
    font-size: 14px;
  }
`,E7=A.button`
  width: 100%;
  height: 44px;
  background-color: #1c1c1c;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 480px){
    font-size: 14px;
  }
`;function J2(){return y.jsxs(b7,{children:[y.jsxs(I7,{children:[y.jsx("img",{src:"/cardIcon.svg",alt:""}),"Add new payment method"]}),y.jsx(T7,{}),y.jsxs(S7,{children:[y.jsxs(C7,{children:[y.jsx(Yp,{children:"Debit Mastercard (5628)"}),y.jsx(Yp,{children:"Exp: 10/27"}),y.jsx(Yp,{children:"Eminokanju Vwegba"}),y.jsx(R7,{children:"This is your default payment method"})]}),y.jsxs(k7,{children:[y.jsx("div",{className:"deleteText",children:"Delete"}),y.jsx("img",{src:"/trash.svg",alt:""})]})]})]})}const b7=A.section`
  width: 713px;
  height: 317px;
  border-radius: 8px;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 40px;
  background-color: #fff;

  @media (max-width: 991px) {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    margin-bottom: 40px;
  }
  @media (max-width: 730px){
    width: 100%;
  }
  @media (max-width: 640px) {
    padding: 20px;
  }
`,I7=A.button`
  width: 370px;
  height: 44px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  background-color: #1c1c1c;
  border: none;
  cursor: pointer;
  color: white;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  img {
    filter: brightness(0) invert(1);
  }
  @media (max-width: 480px){
    width: 100%;
    font-size: 12px;
  }
`,T7=A.hr`
  width: 100%;
  height: 8px;
  margin: 40px 0;
  background-color: #f4f4f4;
  border: none;
`,S7=A.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,C7=A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Yp=A.p`
  color: #1c1c1c;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 480px){
    font-size: 12px;
  }
`,R7=A.p`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  @media (max-width: 480px){
    font-size: 12px;
  }
`,k7=A.button`
  color: #545454;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  .deleteText{
    @media (max-width: 480px){
    display: none;
  }
  }
  @media (max-width: 480px){
    font-size: 12px;
  }
`,P7=()=>y.jsxs(A7,{children:[y.jsx(N7,{src:"https://cdn.builder.io/api/v1/image/assets/001f261659df40119f6cb1a32a4e0f9f/a249ae872b9c54a7b83df0f289b216f13a5ea7c5?placeholderIfAbsent=true",alt:"Empty order state illustration"}),y.jsxs(D7,{children:[y.jsx(O7,{children:"You currently have no order"}),y.jsx(L7,{children:"Start shopping at Sababa now.."})]})]}),A7=A.div`
  align-self: center;
  display: flex;
  width: 277px;
  max-width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
`,N7=A.img`
  aspect-ratio: 1.38;
  object-fit: contain;
  object-position: center;
  width: 80px;
  align-self: center;
`,D7=A.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,O7=A.h2`
  color: rgba(28, 28, 28, 1);
  font-size: 20px;
  margin: 0;
  @media (max-width: 480px){
    font-size: 14px;
  }
  @media (max-width: 230px){
    font-size: 12px;
  }
`,L7=A.p`
  color: rgba(84, 84, 84, 1);
  font-size: 16px;
  text-align: center;
  margin: 8px 0 0 0;
  @media (max-width: 480px){
    font-size: 12px;
  }
  @media (max-width: 230px){
    font-size: 10px;
  }
`,Z2=()=>y.jsx(j7,{children:y.jsxs(M7,{children:[y.jsx(P7,{}),y.jsx(V7,{children:"Start shopping"})]})}),j7=A.div`
  width: 713px;
  height: 361px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.15);
  @media (max-width: 730px){
    width: 100%;
  }
`,M7=A.div`
  display: flex;
  max-width: 370px;
  flex-direction: column;
  align-items: stretch;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  justify-content: start;
  @media (max-width: 480px){
    width: 100%;
    padding: 16px;
  }
`,V7=A.button`
  border-radius: 8px;
  background-color: rgba(28, 28, 28, 1);
  margin-top: 24px;
  min-height: 44px;
  width: 100%;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: 2px solid rgba(28, 28, 28, 0.5);
    outline-offset: 2px;
  }
  @media (max-width: 480px){
    font-size: 14px;
  }
`;function F7(t){switch(t){case"profile":return y.jsx(Q2,{});case"contact":return y.jsx(Y2,{});case"settings":return y.jsx(X2,{});case"payment method":return y.jsx(J2,{});case"your order":return y.jsx(Z2,{});default:return null}}function U7(){const{menuLabel:t}=vb();return y.jsxs(y.Fragment,{children:[y.jsx(Ow,{}),y.jsxs(z7,{children:[y.jsx(pr,{to:"/account",style:{textDecoration:"none"},children:y.jsxs("div",{className:"backMenu",children:[" ",y.jsx("img",{src:"/lessThan.svg",alt:"back icon"})," Back "]})}),"Hello, Eminokanju"]}),F7(t),y.jsx(q2,{})]})}const z7=A.div`
  width: 100%;
  height: 95px;
  border-radius: 8px 8px 0 0;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding: 55px 16px 16px;
  background-color: #727272;
  display: flex;
  gap: 14px;
  div{
    display: none;
  }
  @media (max-width: 730px) {
    border-radius: 0;
    height: 60px;
    padding: 16px;
    div{
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 14px;
      color: #fff;
      font-weight: normal;
      img{
        height: 10px;
        width: 6px;
        filter: brightness(0) invert(1);
      }
    }
  }
  @media (max-width: 480px) {
    height: 50px;
    padding: 16px;
    font-size: 16px;
  }
`;function $7(t){var e,n,i,o,l,c;return y.jsxs(B7,{children:[y.jsxs(H7,{children:[y.jsx(W7,{loading:"lazy",src:((n=(e=t.product)==null?void 0:e.product_photos)==null?void 0:n[0])||"https://via.placeholder.com/300",alt:t.product.product_title}),y.jsx(K7,{children:y.jsx(G7,{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/4d257a64c4fd431196f0bd5355e29fdb/c44b90513fc161d45e980628189af31a658fae5fc05b1e5e4b6050dd361f8626?placeholderIfAbsent=true",alt:"Like"})})]}),y.jsxs(q7,{children:[y.jsx(Q7,{children:t.product.product_title}),y.jsxs(Y7,{children:[y.jsx(X7,{children:"Price from:"}),y.jsx(J7,{children:((o=(i=t.product)==null?void 0:i.typical_price_range)==null?void 0:o[0])-((c=(l=t.product)==null?void 0:l.typical_price_range)==null?void 0:c[1])})]})]})]})}const B7=A.div`
  display: flex;
  flex-direction: column;
  width: 218px; 
  height: 327px;
  @media (max-width: 480px){
    height: 251px;
    width: 168px;
  }
  @media (max-width: 370px){
    height: 230px;
    width: 150px;
  }
  @media (max-width: 340px){
    height: 210px;
    width: 135px;
  }
  @media (max-width: 305px){
    height: 190px;
    width: 120px;
  }
  @media (max-width: 280px){
    height: 165px;
    width: 95px;
  }
`,H7=A.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  position: relative;
  width: inherit;
  height: 95%;
  padding: 260px 44px 12px;
  align-items: flex-end;
  
  @media (max-width: 991px){
    padding: 100px 20px 12px;
  }
`,W7=A.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
`,K7=A.div`
  position: absolute; /* Absolute positioning inside CardImageContainer */
  bottom: 10px; /* Adjust this value as needed */
  right: 10px; /* Adjust this value as needed */
  border-radius: 22px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 32px;
  width: 32px;
  padding: 0 7px 0 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 340px){
    height: 27px;
    width: 27px;
  }
  @media (max-width: 340px){
    height: 20px;
    width: 20px;
    bottom: 5px;
    right: 5px;
  }
`,G7=A.img`
  object-fit: contain;
  object-position: center;
  width: 100%;
  @media (max-width: 340px){
    width: 225%;
  }
`,q7=A.div`
  display: flex;
  flex-direction: column;
`,Q7=A.div`
  color: rgba(0, 0, 0, 1);
  font: 600 16px Inter;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 480px){
    font-size: 12px;
  }
`,Y7=A.div`
  font-family: Inter;
`,X7=A.span`
  font-size: 12px;
  color: rgba(114, 114, 114, 1);
`,J7=A.div`
  font-weight: 600;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  @media (max-width: 480px){
    font-size: 12px;
  }
`;function Z7(t){return y.jsx(eN,{children:t.productsDatas.map((e,n)=>y.jsx($7,{product:e}))})}const eN=A.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 12px;
  padding-left: 5px;
  padding-right: 5px;  
  @media (max-width: 480px){
    gap: 12px;
  }
`;function tN(){const[t,e]=K.useState("shoe"),[n,i]=K.useState([]);return K.useEffect(()=>{async function o(){const l=`https://real-time-product-search.p.rapidapi.com/search-v2?q=${t}&limit=18`,c={method:"GET",headers:{"x-rapidapi-key":"fc9b8e12camshdd051ab15996633p143913jsne1cb645c820d","x-rapidapi-host":"real-time-product-search.p.rapidapi.com"}};try{const f=await(await fetch(l,c)).json();i(f.data.products)}catch(h){console.error(h)}}o()},[t]),y.jsxs(y.Fragment,{children:[y.jsx(nN,{children:"Saved items"}),y.jsx(Z7,{productsDatas:n})]})}const nN=A.div`
    font-size: 20px;
    width:100%;
    text-align: center;
    margin-bottom: 20px;
    font-family: Inter;
    font-weight: 600;
`;function rN(){return y.jsxs(y.Fragment,{children:[y.jsx(Nw,{}),y.jsx(Xx,{}),y.jsx(Dw,{})]})}function iN(){const{isLoading:t,error:e}=ih(n=>n.auth);return y.jsx(sN,{children:y.jsxs(oN,{children:[y.jsx("div",{className:"logo",children:y.jsx("img",{src:"/fullSababaLogo.svg",alt:"sababa logo"})}),y.jsx("div",{className:"welcome",children:"Welcome, continue to Google sign in"}),y.jsxs("button",{onClick:()=>{R8()},children:[y.jsx("img",{src:"/google.svg",alt:"google logo"}),y.jsx("div",{children:"Sign in with Google"}),t&&y.jsx("div",{className:"loading",children:"Loading..."}),e&&console.error("Error signing in:",e)]})]})})}const sN=A.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,oN=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  
  .logo {
    margin-bottom: 20px;
  }
  
  .welcome {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: #333;
  }
  
  button {
    display: flex;
    align-items: center;
    background-color: #D9D9D9;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    height: 60px;
    width: 250px;

    img {
      margin-right: 10px;
      height: 24px;
      width: 24px;
    }
    
    div {
      font-size: 16px;
      font-weight: 500;
      font-family: 'Inter', sans-serif;
      color: #333;
    }

    &:hover {
      background-color: #bbbbbb;
    }
  }
`,aN=async({request:t})=>{console.log(t);const e=await t.formData(),n={name:e.get("name"),email:e.get("email"),subject:e.get("subject"),messsage:e.get("message"),privacyCheck:e.get("privacyAccepted")};console.log(n)};function Xp({children:t}){const{user:e}=ih(n=>n.auth);return e?t:y.jsx(nm,{to:"/",replace:!0})}function lN(){const[t,e]=K.useState(!1),{user:n,isLoading:i}=ih(l=>l.auth);K.useEffect(()=>{C8();const l=vh.onAuthStateChanged(()=>{e(!0)});return()=>l()},[]);const o=K.useMemo(()=>lI(Vb(y.jsxs(y.Fragment,{children:[y.jsx(Gt,{path:"/",element:n?y.jsx(nm,{to:"/home",replace:!0}):y.jsx(iN,{})}),y.jsxs(Gt,{path:"/home",element:y.jsx(Xp,{children:y.jsx(rN,{})}),children:[y.jsx(Gt,{index:!0,element:y.jsx(aS,{})}),y.jsx(Gt,{path:"contact",element:y.jsx(P5,{}),action:aN}),y.jsx(Gt,{path:"alloutfits",element:y.jsx(hS,{})}),y.jsx(Gt,{path:"saveditems",element:y.jsx(tN,{})}),y.jsx(Gt,{path:"bag",element:y.jsx(i5,{})}),y.jsx(Gt,{path:"outfit-of-the-day",element:y.jsx(LC,{})})]}),y.jsxs(Gt,{path:"/account",element:y.jsx(Xp,{children:y.jsx(z8,{})}),children:[y.jsx(Gt,{index:!0,element:y.jsx(nm,{to:"profile",replace:!0})}),y.jsx(Gt,{path:"profile",element:y.jsx(Q2,{})}),y.jsx(Gt,{path:"contact",element:y.jsx(Y2,{})}),y.jsx(Gt,{path:"settings",element:y.jsx(X2,{})}),y.jsx(Gt,{path:"payment-method",element:y.jsx(J2,{})}),y.jsx(Gt,{path:"your-order",element:y.jsx(Z2,{})})]}),y.jsx(Gt,{path:"accounts/:menuLabel",element:y.jsx(Xp,{children:y.jsx(U7,{})})}),y.jsx(Gt,{path:"*",element:y.jsx("div",{children:"404 - Page Not Found"})})]}))),[n]);return!t||i?y.jsx("div",{className:"App",children:y.jsx("div",{className:"loading-spinner",children:"Loading..."})}):y.jsx("div",{className:"App",children:y.jsx(xI,{router:o})})}d4.createRoot(document.getElementById("root")).render(y.jsx(K.StrictMode,{children:y.jsx(XS,{store:Lr,children:y.jsx(lN,{})})}));
