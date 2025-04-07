(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function A0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ef={exports:{}},sa={},tf={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function b0(){if($p)return vt;$p=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=m&&I[m]||I["@@iterator"],typeof I=="function"?I:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(I,W,Y){this.props=I,this.context=W,this.refs=E,this.updater=Y||x}S.prototype.isReactComponent={},S.prototype.setState=function(I,W){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,W,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=S.prototype;function b(I,W,Y){this.props=I,this.context=W,this.refs=E,this.updater=Y||x}var w=b.prototype=new v;w.constructor=b,M(w,S.prototype),w.isPureReactComponent=!0;var C=Array.isArray,k=Object.prototype.hasOwnProperty,D={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function ce(I,W,Y){var J,fe={},de=null,ye=null;if(W!=null)for(J in W.ref!==void 0&&(ye=W.ref),W.key!==void 0&&(de=""+W.key),W)k.call(W,J)&&!U.hasOwnProperty(J)&&(fe[J]=W[J]);var Ae=arguments.length-2;if(Ae===1)fe.children=Y;else if(1<Ae){for(var Le=Array(Ae),Oe=0;Oe<Ae;Oe++)Le[Oe]=arguments[Oe+2];fe.children=Le}if(I&&I.defaultProps)for(J in Ae=I.defaultProps,Ae)fe[J]===void 0&&(fe[J]=Ae[J]);return{$$typeof:o,type:I,key:de,ref:ye,props:fe,_owner:D.current}}function R(I,W){return{$$typeof:o,type:I.type,key:W,ref:I.ref,props:I.props,_owner:I._owner}}function N(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ae(I){var W={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Y){return W[Y]})}var le=/\/+/g;function he(I,W){return typeof I=="object"&&I!==null&&I.key!=null?ae(""+I.key):W.toString(36)}function V(I,W,Y,J,fe){var de=typeof I;(de==="undefined"||de==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(de){case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case o:case e:ye=!0}}if(ye)return ye=I,fe=fe(ye),I=J===""?"."+he(ye,0):J,C(fe)?(Y="",I!=null&&(Y=I.replace(le,"$&/")+"/"),V(fe,W,Y,"",function(Oe){return Oe})):fe!=null&&(N(fe)&&(fe=R(fe,Y+(!fe.key||ye&&ye.key===fe.key?"":(""+fe.key).replace(le,"$&/")+"/")+I)),W.push(fe)),1;if(ye=0,J=J===""?".":J+":",C(I))for(var Ae=0;Ae<I.length;Ae++){de=I[Ae];var Le=J+he(de,Ae);ye+=V(de,W,Y,Le,fe)}else if(Le=_(I),typeof Le=="function")for(I=Le.call(I),Ae=0;!(de=I.next()).done;)de=de.value,Le=J+he(de,Ae++),ye+=V(de,W,Y,Le,fe);else if(de==="object")throw W=String(I),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return ye}function Z(I,W,Y){if(I==null)return I;var J=[],fe=0;return V(I,J,"","",function(de){return W.call(Y,de,fe++)}),J}function ie(I){if(I._status===-1){var W=I._result;W=W(),W.then(function(Y){(I._status===0||I._status===-1)&&(I._status=1,I._result=Y)},function(Y){(I._status===0||I._status===-1)&&(I._status=2,I._result=Y)}),I._status===-1&&(I._status=0,I._result=W)}if(I._status===1)return I._result.default;throw I._result}var ee={current:null},j={transition:null},$={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:j,ReactCurrentOwner:D};function X(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:Z,forEach:function(I,W,Y){Z(I,function(){W.apply(this,arguments)},Y)},count:function(I){var W=0;return Z(I,function(){W++}),W},toArray:function(I){return Z(I,function(W){return W})||[]},only:function(I){if(!N(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},vt.Component=S,vt.Fragment=t,vt.Profiler=s,vt.PureComponent=b,vt.StrictMode=i,vt.Suspense=d,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,vt.act=X,vt.cloneElement=function(I,W,Y){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var J=M({},I.props),fe=I.key,de=I.ref,ye=I._owner;if(W!=null){if(W.ref!==void 0&&(de=W.ref,ye=D.current),W.key!==void 0&&(fe=""+W.key),I.type&&I.type.defaultProps)var Ae=I.type.defaultProps;for(Le in W)k.call(W,Le)&&!U.hasOwnProperty(Le)&&(J[Le]=W[Le]===void 0&&Ae!==void 0?Ae[Le]:W[Le])}var Le=arguments.length-2;if(Le===1)J.children=Y;else if(1<Le){Ae=Array(Le);for(var Oe=0;Oe<Le;Oe++)Ae[Oe]=arguments[Oe+2];J.children=Ae}return{$$typeof:o,type:I.type,key:fe,ref:de,props:J,_owner:ye}},vt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:a,_context:I},I.Consumer=I},vt.createElement=ce,vt.createFactory=function(I){var W=ce.bind(null,I);return W.type=I,W},vt.createRef=function(){return{current:null}},vt.forwardRef=function(I){return{$$typeof:u,render:I}},vt.isValidElement=N,vt.lazy=function(I){return{$$typeof:p,_payload:{_status:-1,_result:I},_init:ie}},vt.memo=function(I,W){return{$$typeof:h,type:I,compare:W===void 0?null:W}},vt.startTransition=function(I){var W=j.transition;j.transition={};try{I()}finally{j.transition=W}},vt.unstable_act=X,vt.useCallback=function(I,W){return ee.current.useCallback(I,W)},vt.useContext=function(I){return ee.current.useContext(I)},vt.useDebugValue=function(){},vt.useDeferredValue=function(I){return ee.current.useDeferredValue(I)},vt.useEffect=function(I,W){return ee.current.useEffect(I,W)},vt.useId=function(){return ee.current.useId()},vt.useImperativeHandle=function(I,W,Y){return ee.current.useImperativeHandle(I,W,Y)},vt.useInsertionEffect=function(I,W){return ee.current.useInsertionEffect(I,W)},vt.useLayoutEffect=function(I,W){return ee.current.useLayoutEffect(I,W)},vt.useMemo=function(I,W){return ee.current.useMemo(I,W)},vt.useReducer=function(I,W,Y){return ee.current.useReducer(I,W,Y)},vt.useRef=function(I){return ee.current.useRef(I)},vt.useState=function(I){return ee.current.useState(I)},vt.useSyncExternalStore=function(I,W,Y){return ee.current.useSyncExternalStore(I,W,Y)},vt.useTransition=function(){return ee.current.useTransition()},vt.version="18.3.1",vt}var Zp;function od(){return Zp||(Zp=1,tf.exports=b0()),tf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function R0(){if(Jp)return sa;Jp=1;var o=od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,m={},_=null,x=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(x=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(m[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:u,key:_,ref:x,props:m,_owner:s.current}}return sa.Fragment=t,sa.jsx=c,sa.jsxs=c,sa}var Qp;function C0(){return Qp||(Qp=1,ef.exports=R0()),ef.exports}var Be=C0(),Et=od();const L0=A0(Et);var Cl={},nf={exports:{}},zn={},rf={exports:{}},sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function P0(){return em||(em=1,function(o){function e(j,$){var X=j.length;j.push($);e:for(;0<X;){var I=X-1>>>1,W=j[I];if(0<s(W,$))j[I]=$,j[X]=W,X=I;else break e}}function t(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var $=j[0],X=j.pop();if(X!==$){j[0]=X;e:for(var I=0,W=j.length,Y=W>>>1;I<Y;){var J=2*(I+1)-1,fe=j[J],de=J+1,ye=j[de];if(0>s(fe,X))de<W&&0>s(ye,fe)?(j[I]=ye,j[de]=X,I=de):(j[I]=fe,j[J]=X,I=J);else if(de<W&&0>s(ye,X))j[I]=ye,j[de]=X,I=de;else break e}}return $}function s(j,$){var X=j.sortIndex-$.sortIndex;return X!==0?X:j.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,m=null,_=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(j){for(var $=t(h);$!==null;){if($.callback===null)i(h);else if($.startTime<=j)i(h),$.sortIndex=$.expirationTime,e(d,$);else break;$=t(h)}}function C(j){if(E=!1,w(j),!M)if(t(d)!==null)M=!0,ie(k);else{var $=t(h);$!==null&&ee(C,$.startTime-j)}}function k(j,$){M=!1,E&&(E=!1,v(ce),ce=-1),x=!0;var X=_;try{for(w($),m=t(d);m!==null&&(!(m.expirationTime>$)||j&&!ae());){var I=m.callback;if(typeof I=="function"){m.callback=null,_=m.priorityLevel;var W=I(m.expirationTime<=$);$=o.unstable_now(),typeof W=="function"?m.callback=W:m===t(d)&&i(d),w($)}else i(d);m=t(d)}if(m!==null)var Y=!0;else{var J=t(h);J!==null&&ee(C,J.startTime-$),Y=!1}return Y}finally{m=null,_=X,x=!1}}var D=!1,U=null,ce=-1,R=5,N=-1;function ae(){return!(o.unstable_now()-N<R)}function le(){if(U!==null){var j=o.unstable_now();N=j;var $=!0;try{$=U(!0,j)}finally{$?he():(D=!1,U=null)}}else D=!1}var he;if(typeof b=="function")he=function(){b(le)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Z=V.port2;V.port1.onmessage=le,he=function(){Z.postMessage(null)}}else he=function(){S(le,0)};function ie(j){U=j,D||(D=!0,he())}function ee(j,$){ce=S(function(){j(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_continueExecution=function(){M||x||(M=!0,ie(k))},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(j){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var X=_;_=$;try{return j()}finally{_=X}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(j,$){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var X=_;_=j;try{return $()}finally{_=X}},o.unstable_scheduleCallback=function(j,$,X){var I=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?I+X:I):X=I,j){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=X+W,j={id:p++,callback:$,priorityLevel:j,startTime:X,expirationTime:W,sortIndex:-1},X>I?(j.sortIndex=X,e(h,j),t(d)===null&&j===t(h)&&(E?(v(ce),ce=-1):E=!0,ee(C,X-I))):(j.sortIndex=W,e(d,j),M||x||(M=!0,ie(k))),j},o.unstable_shouldYield=ae,o.unstable_wrapCallback=function(j){var $=_;return function(){var X=_;_=$;try{return j.apply(this,arguments)}finally{_=X}}}}(sf)),sf}var tm;function N0(){return tm||(tm=1,rf.exports=P0()),rf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function I0(){if(nm)return zn;nm=1;var o=od(),e=N0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function _(n){return d.call(m,n)?!0:d.call(p,n)?!1:h.test(n)?m[n]=!0:(p[n]=!0,!1)}function x(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,f){if(r===null||typeof r>"u"||x(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,f,g,y,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=y,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(v,b);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(v,b);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(v,b);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function w(n,r,l,f){var g=S.hasOwnProperty(r)?S[r]:null;(g!==null?g.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,g,f)&&(l=null),f||g===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):g.mustUseProperty?n[g.propertyName]=l===null?g.type===3?!1:"":l:(r=g.attributeName,f=g.attributeNamespace,l===null?n.removeAttribute(r):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),D=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),ae=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),j=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,I;function W(n){if(I===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+n}var Y=!1;function J(n,r){if(!n||Y)return"";Y=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var f=re}Reflect.construct(n,[],r)}else{try{r.call()}catch(re){f=re}n.call(r.prototype)}else{try{throw Error()}catch(re){f=re}n()}}catch(re){if(re&&f&&typeof re.stack=="string"){for(var g=re.stack.split(`
`),y=f.stack.split(`
`),T=g.length-1,O=y.length-1;1<=T&&0<=O&&g[T]!==y[O];)O--;for(;1<=T&&0<=O;T--,O--)if(g[T]!==y[O]){if(T!==1||O!==1)do if(T--,O--,0>O||g[T]!==y[O]){var z=`
`+g[T].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=T&&0<=O);break}}}finally{Y=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?W(n):""}function fe(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function de(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case D:return"Portal";case R:return"Profiler";case ce:return"StrictMode";case he:return"Suspense";case V:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ae:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case le:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return r=n.displayName||null,r!==null?r:de(n.type)||"Memo";case ie:r=n._payload,n=n._init;try{return de(n(r))}catch{}}return null}function ye(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(r);case 8:return r===ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Oe(n){var r=Le(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,y=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return g.call(this)},set:function(T){f=""+T,y.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function at(n){n._valueTracker||(n._valueTracker=Oe(n))}function ne(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Le(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function qt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function qe(n,r){var l=r.checked;return X({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function it(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Ae(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function He(n,r){r=r.checked,r!=null&&w(n,"checked",r,!1)}function Rt(n,r){He(n,r);var l=Ae(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?P(n,r.type,l):r.hasOwnProperty("defaultValue")&&P(n,r.type,Ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function lt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function P(n,r,l){(r!=="number"||qt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var A=Array.isArray;function te(n,r,l,f){if(n=n.options,r){r={};for(var g=0;g<l.length;g++)r["$"+l[g]]=!0;for(l=0;l<n.length;l++)g=r.hasOwnProperty("$"+n[l].value),n[l].selected!==g&&(n[l].selected=g),g&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Ae(l),r=null,g=0;g<n.length;g++){if(n[g].value===l){n[g].selected=!0,f&&(n[g].defaultSelected=!0);return}r!==null||n[g].disabled||(r=n[g])}r!==null&&(r.selected=!0)}}function xe(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ve(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(A(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Ae(l)}}function Me(n,r){var l=Ae(r.value),f=Ae(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function Ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ue(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Ce(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ke,ct=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,g){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,g)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ke=Ke||document.createElement("div"),Ke.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ke.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function me(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var St={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ft=["Webkit","ms","Moz","O"];Object.keys(St).forEach(function(n){ft.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),St[r]=St[n]})});function rt(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||St.hasOwnProperty(n)&&St[n]?(""+r).trim():r+"px"}function Xe(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,g=rt(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,g):n[l]=g}}var Pe=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function F(n,r){if(r){if(Pe[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Te(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var We=null;function De(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _e=null,B=null,Ee=null;function Re(n){if(n=Wo(n)){if(typeof _e!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Wa(r),_e(n.stateNode,n.type,r))}}function Qe(n){B?Ee?Ee.push(n):Ee=[n]:B=n}function $e(){if(B){var n=B,r=Ee;if(Ee=B=null,Re(n),r)for(n=0;n<r.length;n++)Re(r[n])}}function mt(n,r){return n(r)}function gt(){}var Dt=!1;function zt(n,r,l){if(Dt)return n(r,l);Dt=!0;try{return mt(n,r,l)}finally{Dt=!1,(B!==null||Ee!==null)&&(gt(),$e())}}function _t(n,r){var l=n.stateNode;if(l===null)return null;var f=Wa(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ht=!1;if(u)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){Ht=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{Ht=!1}function Ea(n,r,l,f,g,y,T,O,z){var re=Array.prototype.slice.call(arguments,3);try{r.apply(l,re)}catch(ge){this.onError(ge)}}var Fr=!1,Di=null,kr=!1,nr=null,Ta={onError:function(n){Fr=!0,Di=n}};function wa(n,r,l,f,g,y,T,O,z){Fr=!1,Di=null,Ea.apply(Ta,arguments)}function Mc(n,r,l,f,g,y,T,O,z){if(wa.apply(this,arguments),Fr){if(Fr){var re=Di;Fr=!1,Di=null}else throw Error(t(198));kr||(kr=!0,nr=re)}}function Ui(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Aa(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function L(n){if(Ui(n)!==n)throw Error(t(188))}function K(n){var r=n.alternate;if(!r){if(r=Ui(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var g=l.return;if(g===null)break;var y=g.alternate;if(y===null){if(f=g.return,f!==null){l=f;continue}break}if(g.child===y.child){for(y=g.child;y;){if(y===l)return L(g),n;if(y===f)return L(g),r;y=y.sibling}throw Error(t(188))}if(l.return!==f.return)l=g,f=y;else{for(var T=!1,O=g.child;O;){if(O===l){T=!0,l=g,f=y;break}if(O===f){T=!0,f=g,l=y;break}O=O.sibling}if(!T){for(O=y.child;O;){if(O===l){T=!0,l=y,f=g;break}if(O===f){T=!0,f=y,l=g;break}O=O.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function oe(n){return n=K(n),n!==null?ue(n):null}function ue(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ue(n);if(r!==null)return r;n=n.sibling}return null}var se=e.unstable_scheduleCallback,Ne=e.unstable_cancelCallback,Ye=e.unstable_shouldYield,tt=e.unstable_requestPaint,Fe=e.unstable_now,dt=e.unstable_getCurrentPriorityLevel,ot=e.unstable_ImmediatePriority,ut=e.unstable_UserBlockingPriority,Ut=e.unstable_NormalPriority,An=e.unstable_LowPriority,Jt=e.unstable_IdlePriority,In=null,Tt=null;function ht(n){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(In,n,void 0,(n.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:ba,Vt=Math.log,Oi=Math.LN2;function ba(n){return n>>>=0,n===0?32:31-(Vt(n)/Oi|0)|0}var Mi=64,ir=4194304;function Kt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Zn(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,g=n.suspendedLanes,y=n.pingedLanes,T=l&268435455;if(T!==0){var O=T&~g;O!==0?f=Kt(O):(y&=T,y!==0&&(f=Kt(y)))}else T=l&~g,T!==0?f=Kt(T):y!==0&&(f=Kt(y));if(f===0)return 0;if(r!==0&&r!==f&&(r&g)===0&&(g=f&-f,y=r&-r,g>=y||g===16&&(y&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-bn(r),g=1<<l,f|=n[l],r&=~g;return f}function Ao(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dn(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,g=n.expirationTimes,y=n.pendingLanes;0<y;){var T=31-bn(y),O=1<<T,z=g[T];z===-1?((O&l)===0||(O&f)!==0)&&(g[T]=Ao(O,r)):z<=r&&(n.expiredLanes|=O),y&=~O}}function Br(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ra(){var n=Mi;return Mi<<=1,(Mi&4194240)===0&&(Mi=64),n}function ms(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function bo(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-bn(r),n[r]=l}function Y_(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var g=31-bn(l),y=1<<g;r[g]=0,f[g]=-1,n[g]=-1,l&=~y}}function Ec(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-bn(l),g=1<<f;g&r|n[f]&r&&(n[f]|=r),l&=~g}}var Ct=0;function Rd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Cd,Tc,Ld,Pd,Nd,wc=!1,Ca=[],rr=null,sr=null,or=null,Ro=new Map,Co=new Map,ar=[],q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Id(n,r){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Ro.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(r.pointerId)}}function Lo(n,r,l,f,g,y){return n===null||n.nativeEvent!==y?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:y,targetContainers:[g]},r!==null&&(r=Wo(r),r!==null&&Tc(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,g!==null&&r.indexOf(g)===-1&&r.push(g),n)}function K_(n,r,l,f,g){switch(r){case"focusin":return rr=Lo(rr,n,r,l,f,g),!0;case"dragenter":return sr=Lo(sr,n,r,l,f,g),!0;case"mouseover":return or=Lo(or,n,r,l,f,g),!0;case"pointerover":var y=g.pointerId;return Ro.set(y,Lo(Ro.get(y)||null,n,r,l,f,g)),!0;case"gotpointercapture":return y=g.pointerId,Co.set(y,Lo(Co.get(y)||null,n,r,l,f,g)),!0}return!1}function Dd(n){var r=zr(n.target);if(r!==null){var l=Ui(r);if(l!==null){if(r=l.tag,r===13){if(r=Aa(l),r!==null){n.blockedOn=r,Nd(n.priority,function(){Ld(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function La(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=bc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);We=f,l.target.dispatchEvent(f),We=null}else return r=Wo(l),r!==null&&Tc(r),n.blockedOn=l,!1;r.shift()}return!0}function Ud(n,r,l){La(n)&&l.delete(r)}function $_(){wc=!1,rr!==null&&La(rr)&&(rr=null),sr!==null&&La(sr)&&(sr=null),or!==null&&La(or)&&(or=null),Ro.forEach(Ud),Co.forEach(Ud)}function Po(n,r){n.blockedOn===r&&(n.blockedOn=null,wc||(wc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$_)))}function No(n){function r(g){return Po(g,n)}if(0<Ca.length){Po(Ca[0],n);for(var l=1;l<Ca.length;l++){var f=Ca[l];f.blockedOn===n&&(f.blockedOn=null)}}for(rr!==null&&Po(rr,n),sr!==null&&Po(sr,n),or!==null&&Po(or,n),Ro.forEach(r),Co.forEach(r),l=0;l<ar.length;l++)f=ar[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<ar.length&&(l=ar[0],l.blockedOn===null);)Dd(l),l.blockedOn===null&&ar.shift()}var gs=C.ReactCurrentBatchConfig,Pa=!0;function Z_(n,r,l,f){var g=Ct,y=gs.transition;gs.transition=null;try{Ct=1,Ac(n,r,l,f)}finally{Ct=g,gs.transition=y}}function J_(n,r,l,f){var g=Ct,y=gs.transition;gs.transition=null;try{Ct=4,Ac(n,r,l,f)}finally{Ct=g,gs.transition=y}}function Ac(n,r,l,f){if(Pa){var g=bc(n,r,l,f);if(g===null)Wc(n,r,f,Na,l),Id(n,f);else if(K_(g,n,r,l,f))f.stopPropagation();else if(Id(n,f),r&4&&-1<q_.indexOf(n)){for(;g!==null;){var y=Wo(g);if(y!==null&&Cd(y),y=bc(n,r,l,f),y===null&&Wc(n,r,f,Na,l),y===g)break;g=y}g!==null&&f.stopPropagation()}else Wc(n,r,f,null,l)}}var Na=null;function bc(n,r,l,f){if(Na=null,n=De(f),n=zr(n),n!==null)if(r=Ui(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Aa(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Na=n,null}function Od(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dt()){case ot:return 1;case ut:return 4;case Ut:case An:return 16;case Jt:return 536870912;default:return 16}default:return 16}}var lr=null,Rc=null,Ia=null;function Fd(){if(Ia)return Ia;var n,r=Rc,l=r.length,f,g="value"in lr?lr.value:lr.textContent,y=g.length;for(n=0;n<l&&r[n]===g[n];n++);var T=l-n;for(f=1;f<=T&&r[l-f]===g[y-f];f++);return Ia=g.slice(n,1<f?1-f:void 0)}function Da(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ua(){return!0}function kd(){return!1}function Gn(n){function r(l,f,g,y,T){this._reactName=l,this._targetInst=g,this.type=f,this.nativeEvent=y,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(l=n[O],this[O]=l?l(y):y[O]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Ua:kd,this.isPropagationStopped=kd,this}return X(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),r}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=Gn(_s),Io=X({},_s,{view:0,detail:0}),Q_=Gn(Io),Lc,Pc,Do,Oa=X({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Do&&(Do&&n.type==="mousemove"?(Lc=n.screenX-Do.screenX,Pc=n.screenY-Do.screenY):Pc=Lc=0,Do=n),Lc)},movementY:function(n){return"movementY"in n?n.movementY:Pc}}),Bd=Gn(Oa),ev=X({},Oa,{dataTransfer:0}),tv=Gn(ev),nv=X({},Io,{relatedTarget:0}),Nc=Gn(nv),iv=X({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),rv=Gn(iv),sv=X({},_s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ov=Gn(sv),av=X({},_s,{data:0}),zd=Gn(av),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=uv[n])?!!r[n]:!1}function Ic(){return fv}var dv=X({},Io,{key:function(n){if(n.key){var r=lv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Da(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(n){return n.type==="keypress"?Da(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Da(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hv=Gn(dv),pv=X({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=Gn(pv),mv=X({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),gv=Gn(mv),_v=X({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=Gn(_v),yv=X({},Oa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=Gn(yv),Sv=[9,13,27,32],Dc=u&&"CompositionEvent"in window,Uo=null;u&&"documentMode"in document&&(Uo=document.documentMode);var Mv=u&&"TextEvent"in window&&!Uo,Vd=u&&(!Dc||Uo&&8<Uo&&11>=Uo),Gd=" ",Wd=!1;function jd(n,r){switch(n){case"keyup":return Sv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var vs=!1;function Ev(n,r){switch(n){case"compositionend":return Xd(r);case"keypress":return r.which!==32?null:(Wd=!0,Gd);case"textInput":return n=r.data,n===Gd&&Wd?null:n;default:return null}}function Tv(n,r){if(vs)return n==="compositionend"||!Dc&&jd(n,r)?(n=Fd(),Ia=Rc=lr=null,vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Vd&&r.locale!=="ko"?null:r.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!wv[n.type]:r==="textarea"}function qd(n,r,l,f){Qe(f),r=Ha(r,"onChange"),0<r.length&&(l=new Cc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var Oo=null,Fo=null;function Av(n){dh(n,0)}function Fa(n){var r=Es(n);if(ne(r))return n}function bv(n,r){if(n==="change")return r}var Kd=!1;if(u){var Uc;if(u){var Oc="oninput"in document;if(!Oc){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),Oc=typeof $d.oninput=="function"}Uc=Oc}else Uc=!1;Kd=Uc&&(!document.documentMode||9<document.documentMode)}function Zd(){Oo&&(Oo.detachEvent("onpropertychange",Jd),Fo=Oo=null)}function Jd(n){if(n.propertyName==="value"&&Fa(Fo)){var r=[];qd(r,Fo,n,De(n)),zt(Av,r)}}function Rv(n,r,l){n==="focusin"?(Zd(),Oo=r,Fo=l,Oo.attachEvent("onpropertychange",Jd)):n==="focusout"&&Zd()}function Cv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fa(Fo)}function Lv(n,r){if(n==="click")return Fa(r)}function Pv(n,r){if(n==="input"||n==="change")return Fa(r)}function Nv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ui=typeof Object.is=="function"?Object.is:Nv;function ko(n,r){if(ui(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var g=l[f];if(!d.call(r,g)||!ui(n[g],r[g]))return!1}return!0}function Qd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function eh(n,r){var l=Qd(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Qd(l)}}function th(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?th(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function nh(){for(var n=window,r=qt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=qt(n.document)}return r}function Fc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Iv(n){var r=nh(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&th(l.ownerDocument.documentElement,l)){if(f!==null&&Fc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var g=l.textContent.length,y=Math.min(f.start,g);f=f.end===void 0?y:Math.min(f.end,g),!n.extend&&y>f&&(g=f,f=y,y=g),g=eh(l,y);var T=eh(l,f);g&&T&&(n.rangeCount!==1||n.anchorNode!==g.node||n.anchorOffset!==g.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(g.node,g.offset),n.removeAllRanges(),y>f?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Dv=u&&"documentMode"in document&&11>=document.documentMode,ys=null,kc=null,Bo=null,Bc=!1;function ih(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Bc||ys==null||ys!==qt(f)||(f=ys,"selectionStart"in f&&Fc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Bo&&ko(Bo,f)||(Bo=f,f=Ha(kc,"onSelect"),0<f.length&&(r=new Cc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=ys)))}function ka(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var xs={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},zc={},rh={};u&&(rh=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Ba(n){if(zc[n])return zc[n];if(!xs[n])return n;var r=xs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in rh)return zc[n]=r[l];return n}var sh=Ba("animationend"),oh=Ba("animationiteration"),ah=Ba("animationstart"),lh=Ba("transitionend"),ch=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(n,r){ch.set(n,r),a(r,[n])}for(var Hc=0;Hc<uh.length;Hc++){var Vc=uh[Hc],Uv=Vc.toLowerCase(),Ov=Vc[0].toUpperCase()+Vc.slice(1);cr(Uv,"on"+Ov)}cr(sh,"onAnimationEnd"),cr(oh,"onAnimationIteration"),cr(ah,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(lh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function fh(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,Mc(f,r,void 0,n),n.currentTarget=null}function dh(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],g=f.event;f=f.listeners;e:{var y=void 0;if(r)for(var T=f.length-1;0<=T;T--){var O=f[T],z=O.instance,re=O.currentTarget;if(O=O.listener,z!==y&&g.isPropagationStopped())break e;fh(g,O,re),y=z}else for(T=0;T<f.length;T++){if(O=f[T],z=O.instance,re=O.currentTarget,O=O.listener,z!==y&&g.isPropagationStopped())break e;fh(g,O,re),y=z}}}if(kr)throw n=nr,kr=!1,nr=null,n}function Ft(n,r){var l=r[$c];l===void 0&&(l=r[$c]=new Set);var f=n+"__bubble";l.has(f)||(hh(r,n,2,!1),l.add(f))}function Gc(n,r,l){var f=0;r&&(f|=4),hh(l,n,f,r)}var za="_reactListening"+Math.random().toString(36).slice(2);function Ho(n){if(!n[za]){n[za]=!0,i.forEach(function(l){l!=="selectionchange"&&(Fv.has(l)||Gc(l,!1,n),Gc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[za]||(r[za]=!0,Gc("selectionchange",!1,r))}}function hh(n,r,l,f){switch(Od(r)){case 1:var g=Z_;break;case 4:g=J_;break;default:g=Ac}l=g.bind(null,r,l,n),g=void 0,!Ht||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(g=!0),f?g!==void 0?n.addEventListener(r,l,{capture:!0,passive:g}):n.addEventListener(r,l,!0):g!==void 0?n.addEventListener(r,l,{passive:g}):n.addEventListener(r,l,!1)}function Wc(n,r,l,f,g){var y=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var O=f.stateNode.containerInfo;if(O===g||O.nodeType===8&&O.parentNode===g)break;if(T===4)for(T=f.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===g||z.nodeType===8&&z.parentNode===g))return;T=T.return}for(;O!==null;){if(T=zr(O),T===null)return;if(z=T.tag,z===5||z===6){f=y=T;continue e}O=O.parentNode}}f=f.return}zt(function(){var re=y,ge=De(l),Se=[];e:{var pe=ch.get(n);if(pe!==void 0){var Ie=Cc,ze=n;switch(n){case"keypress":if(Da(l)===0)break e;case"keydown":case"keyup":Ie=hv;break;case"focusin":ze="focus",Ie=Nc;break;case"focusout":ze="blur",Ie=Nc;break;case"beforeblur":case"afterblur":Ie=Nc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=gv;break;case sh:case oh:case ah:Ie=rv;break;case lh:Ie=vv;break;case"scroll":Ie=Q_;break;case"wheel":Ie=xv;break;case"copy":case"cut":case"paste":Ie=ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Hd}var Ve=(r&4)!==0,Qt=!Ve&&n==="scroll",q=Ve?pe!==null?pe+"Capture":null:pe;Ve=[];for(var G=re,Q;G!==null;){Q=G;var we=Q.stateNode;if(Q.tag===5&&we!==null&&(Q=we,q!==null&&(we=_t(G,q),we!=null&&Ve.push(Vo(G,we,Q)))),Qt)break;G=G.return}0<Ve.length&&(pe=new Ie(pe,ze,null,l,ge),Se.push({event:pe,listeners:Ve}))}}if((r&7)===0){e:{if(pe=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",pe&&l!==We&&(ze=l.relatedTarget||l.fromElement)&&(zr(ze)||ze[Fi]))break e;if((Ie||pe)&&(pe=ge.window===ge?ge:(pe=ge.ownerDocument)?pe.defaultView||pe.parentWindow:window,Ie?(ze=l.relatedTarget||l.toElement,Ie=re,ze=ze?zr(ze):null,ze!==null&&(Qt=Ui(ze),ze!==Qt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=re),Ie!==ze)){if(Ve=Bd,we="onMouseLeave",q="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=Hd,we="onPointerLeave",q="onPointerEnter",G="pointer"),Qt=Ie==null?pe:Es(Ie),Q=ze==null?pe:Es(ze),pe=new Ve(we,G+"leave",Ie,l,ge),pe.target=Qt,pe.relatedTarget=Q,we=null,zr(ge)===re&&(Ve=new Ve(q,G+"enter",ze,l,ge),Ve.target=Q,Ve.relatedTarget=Qt,we=Ve),Qt=we,Ie&&ze)t:{for(Ve=Ie,q=ze,G=0,Q=Ve;Q;Q=Ss(Q))G++;for(Q=0,we=q;we;we=Ss(we))Q++;for(;0<G-Q;)Ve=Ss(Ve),G--;for(;0<Q-G;)q=Ss(q),Q--;for(;G--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=Ss(Ve),q=Ss(q)}Ve=null}else Ve=null;Ie!==null&&ph(Se,pe,Ie,Ve,!1),ze!==null&&Qt!==null&&ph(Se,Qt,ze,Ve,!0)}}e:{if(pe=re?Es(re):window,Ie=pe.nodeName&&pe.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&pe.type==="file")var je=bv;else if(Yd(pe))if(Kd)je=Pv;else{je=Cv;var Ze=Rv}else(Ie=pe.nodeName)&&Ie.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(je=Lv);if(je&&(je=je(n,re))){qd(Se,je,l,ge);break e}Ze&&Ze(n,pe,re),n==="focusout"&&(Ze=pe._wrapperState)&&Ze.controlled&&pe.type==="number"&&P(pe,"number",pe.value)}switch(Ze=re?Es(re):window,n){case"focusin":(Yd(Ze)||Ze.contentEditable==="true")&&(ys=Ze,kc=re,Bo=null);break;case"focusout":Bo=kc=ys=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,ih(Se,l,ge);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":ih(Se,l,ge)}var Je;if(Dc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else vs?jd(n,l)&&(st="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(st="onCompositionStart");st&&(Vd&&l.locale!=="ko"&&(vs||st!=="onCompositionStart"?st==="onCompositionEnd"&&vs&&(Je=Fd()):(lr=ge,Rc="value"in lr?lr.value:lr.textContent,vs=!0)),Ze=Ha(re,st),0<Ze.length&&(st=new zd(st,n,null,l,ge),Se.push({event:st,listeners:Ze}),Je?st.data=Je:(Je=Xd(l),Je!==null&&(st.data=Je)))),(Je=Mv?Ev(n,l):Tv(n,l))&&(re=Ha(re,"onBeforeInput"),0<re.length&&(ge=new zd("onBeforeInput","beforeinput",null,l,ge),Se.push({event:ge,listeners:re}),ge.data=Je))}dh(Se,r)})}function Vo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Ha(n,r){for(var l=r+"Capture",f=[];n!==null;){var g=n,y=g.stateNode;g.tag===5&&y!==null&&(g=y,y=_t(n,l),y!=null&&f.unshift(Vo(n,y,g)),y=_t(n,r),y!=null&&f.push(Vo(n,y,g))),n=n.return}return f}function Ss(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ph(n,r,l,f,g){for(var y=r._reactName,T=[];l!==null&&l!==f;){var O=l,z=O.alternate,re=O.stateNode;if(z!==null&&z===f)break;O.tag===5&&re!==null&&(O=re,g?(z=_t(l,y),z!=null&&T.unshift(Vo(l,z,O))):g||(z=_t(l,y),z!=null&&T.push(Vo(l,z,O)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var kv=/\r\n?/g,Bv=/\u0000|\uFFFD/g;function mh(n){return(typeof n=="string"?n:""+n).replace(kv,`
`).replace(Bv,"")}function Va(n,r,l){if(r=mh(r),mh(n)!==r&&l)throw Error(t(425))}function Ga(){}var jc=null,Xc=null;function Yc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,zv=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(n){return gh.resolve(null).then(n).catch(Vv)}:qc;function Vv(n){setTimeout(function(){throw n})}function Kc(n,r){var l=r,f=0;do{var g=l.nextSibling;if(n.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(f===0){n.removeChild(g),No(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=g}while(l);No(r)}function ur(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function _h(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Ms,Go="__reactProps$"+Ms,Fi="__reactContainer$"+Ms,$c="__reactEvents$"+Ms,Gv="__reactListeners$"+Ms,Wv="__reactHandles$"+Ms;function zr(n){var r=n[Ei];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Fi]||l[Ei]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=_h(n);n!==null;){if(l=n[Ei])return l;n=_h(n)}return r}n=l,l=n.parentNode}return null}function Wo(n){return n=n[Ei]||n[Fi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Es(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wa(n){return n[Go]||null}var Zc=[],Ts=-1;function fr(n){return{current:n}}function kt(n){0>Ts||(n.current=Zc[Ts],Zc[Ts]=null,Ts--)}function Ot(n,r){Ts++,Zc[Ts]=n.current,n.current=r}var dr={},xn=fr(dr),Un=fr(!1),Hr=dr;function ws(n,r){var l=n.type.contextTypes;if(!l)return dr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var g={},y;for(y in l)g[y]=r[y];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=g),g}function On(n){return n=n.childContextTypes,n!=null}function ja(){kt(Un),kt(xn)}function vh(n,r,l){if(xn.current!==dr)throw Error(t(168));Ot(xn,r),Ot(Un,l)}function yh(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var g in f)if(!(g in r))throw Error(t(108,ye(n)||"Unknown",g));return X({},l,f)}function Xa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,Hr=xn.current,Ot(xn,n),Ot(Un,Un.current),!0}function xh(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=yh(n,r,Hr),f.__reactInternalMemoizedMergedChildContext=n,kt(Un),kt(xn),Ot(xn,n)):kt(Un),Ot(Un,l)}var ki=null,Ya=!1,Jc=!1;function Sh(n){ki===null?ki=[n]:ki.push(n)}function jv(n){Ya=!0,Sh(n)}function hr(){if(!Jc&&ki!==null){Jc=!0;var n=0,r=Ct;try{var l=ki;for(Ct=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}ki=null,Ya=!1}catch(g){throw ki!==null&&(ki=ki.slice(n+1)),se(ot,hr),g}finally{Ct=r,Jc=!1}}return null}var As=[],bs=0,qa=null,Ka=0,Jn=[],Qn=0,Vr=null,Bi=1,zi="";function Gr(n,r){As[bs++]=Ka,As[bs++]=qa,qa=n,Ka=r}function Mh(n,r,l){Jn[Qn++]=Bi,Jn[Qn++]=zi,Jn[Qn++]=Vr,Vr=n;var f=Bi;n=zi;var g=32-bn(f)-1;f&=~(1<<g),l+=1;var y=32-bn(r)+g;if(30<y){var T=g-g%5;y=(f&(1<<T)-1).toString(32),f>>=T,g-=T,Bi=1<<32-bn(r)+g|l<<g|f,zi=y+n}else Bi=1<<y|l<<g|f,zi=n}function Qc(n){n.return!==null&&(Gr(n,1),Mh(n,1,0))}function eu(n){for(;n===qa;)qa=As[--bs],As[bs]=null,Ka=As[--bs],As[bs]=null;for(;n===Vr;)Vr=Jn[--Qn],Jn[Qn]=null,zi=Jn[--Qn],Jn[Qn]=null,Bi=Jn[--Qn],Jn[Qn]=null}var Wn=null,jn=null,Gt=!1,fi=null;function Eh(n,r){var l=ii(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Th(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Wn=n,jn=ur(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Wn=n,jn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Vr!==null?{id:Bi,overflow:zi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ii(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Wn=n,jn=null,!0):!1;default:return!1}}function tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nu(n){if(Gt){var r=jn;if(r){var l=r;if(!Th(n,r)){if(tu(n))throw Error(t(418));r=ur(l.nextSibling);var f=Wn;r&&Th(n,r)?Eh(f,l):(n.flags=n.flags&-4097|2,Gt=!1,Wn=n)}}else{if(tu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,Wn=n}}}function wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Wn=n}function $a(n){if(n!==Wn)return!1;if(!Gt)return wh(n),Gt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Yc(n.type,n.memoizedProps)),r&&(r=jn)){if(tu(n))throw Ah(),Error(t(418));for(;r;)Eh(n,r),r=ur(r.nextSibling)}if(wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){jn=ur(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}jn=null}}else jn=Wn?ur(n.stateNode.nextSibling):null;return!0}function Ah(){for(var n=jn;n;)n=ur(n.nextSibling)}function Rs(){jn=Wn=null,Gt=!1}function iu(n){fi===null?fi=[n]:fi.push(n)}var Xv=C.ReactCurrentBatchConfig;function jo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var g=f,y=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===y?r.ref:(r=function(T){var O=g.refs;T===null?delete O[y]:O[y]=T},r._stringRef=y,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Za(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function bh(n){var r=n._init;return r(n._payload)}function Rh(n){function r(q,G){if(n){var Q=q.deletions;Q===null?(q.deletions=[G],q.flags|=16):Q.push(G)}}function l(q,G){if(!n)return null;for(;G!==null;)r(q,G),G=G.sibling;return null}function f(q,G){for(q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function g(q,G){return q=Sr(q,G),q.index=0,q.sibling=null,q}function y(q,G,Q){return q.index=Q,n?(Q=q.alternate,Q!==null?(Q=Q.index,Q<G?(q.flags|=2,G):Q):(q.flags|=2,G)):(q.flags|=1048576,G)}function T(q){return n&&q.alternate===null&&(q.flags|=2),q}function O(q,G,Q,we){return G===null||G.tag!==6?(G=qu(Q,q.mode,we),G.return=q,G):(G=g(G,Q),G.return=q,G)}function z(q,G,Q,we){var je=Q.type;return je===U?ge(q,G,Q.props.children,we,Q.key):G!==null&&(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ie&&bh(je)===G.type)?(we=g(G,Q.props),we.ref=jo(q,G,Q),we.return=q,we):(we=Sl(Q.type,Q.key,Q.props,null,q.mode,we),we.ref=jo(q,G,Q),we.return=q,we)}function re(q,G,Q,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=Ku(Q,q.mode,we),G.return=q,G):(G=g(G,Q.children||[]),G.return=q,G)}function ge(q,G,Q,we,je){return G===null||G.tag!==7?(G=Zr(Q,q.mode,we,je),G.return=q,G):(G=g(G,Q),G.return=q,G)}function Se(q,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number")return G=qu(""+G,q.mode,Q),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case k:return Q=Sl(G.type,G.key,G.props,null,q.mode,Q),Q.ref=jo(q,null,G),Q.return=q,Q;case D:return G=Ku(G,q.mode,Q),G.return=q,G;case ie:var we=G._init;return Se(q,we(G._payload),Q)}if(A(G)||$(G))return G=Zr(G,q.mode,Q,null),G.return=q,G;Za(q,G)}return null}function pe(q,G,Q,we){var je=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return je!==null?null:O(q,G,""+Q,we);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case k:return Q.key===je?z(q,G,Q,we):null;case D:return Q.key===je?re(q,G,Q,we):null;case ie:return je=Q._init,pe(q,G,je(Q._payload),we)}if(A(Q)||$(Q))return je!==null?null:ge(q,G,Q,we,null);Za(q,Q)}return null}function Ie(q,G,Q,we,je){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(Q)||null,O(G,q,""+we,je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case k:return q=q.get(we.key===null?Q:we.key)||null,z(G,q,we,je);case D:return q=q.get(we.key===null?Q:we.key)||null,re(G,q,we,je);case ie:var Ze=we._init;return Ie(q,G,Q,Ze(we._payload),je)}if(A(we)||$(we))return q=q.get(Q)||null,ge(G,q,we,je,null);Za(G,we)}return null}function ze(q,G,Q,we){for(var je=null,Ze=null,Je=G,st=G=0,cn=null;Je!==null&&st<Q.length;st++){Je.index>st?(cn=Je,Je=null):cn=Je.sibling;var At=pe(q,Je,Q[st],we);if(At===null){Je===null&&(Je=cn);break}n&&Je&&At.alternate===null&&r(q,Je),G=y(At,G,st),Ze===null?je=At:Ze.sibling=At,Ze=At,Je=cn}if(st===Q.length)return l(q,Je),Gt&&Gr(q,st),je;if(Je===null){for(;st<Q.length;st++)Je=Se(q,Q[st],we),Je!==null&&(G=y(Je,G,st),Ze===null?je=Je:Ze.sibling=Je,Ze=Je);return Gt&&Gr(q,st),je}for(Je=f(q,Je);st<Q.length;st++)cn=Ie(Je,q,st,Q[st],we),cn!==null&&(n&&cn.alternate!==null&&Je.delete(cn.key===null?st:cn.key),G=y(cn,G,st),Ze===null?je=cn:Ze.sibling=cn,Ze=cn);return n&&Je.forEach(function(Mr){return r(q,Mr)}),Gt&&Gr(q,st),je}function Ve(q,G,Q,we){var je=$(Q);if(typeof je!="function")throw Error(t(150));if(Q=je.call(Q),Q==null)throw Error(t(151));for(var Ze=je=null,Je=G,st=G=0,cn=null,At=Q.next();Je!==null&&!At.done;st++,At=Q.next()){Je.index>st?(cn=Je,Je=null):cn=Je.sibling;var Mr=pe(q,Je,At.value,we);if(Mr===null){Je===null&&(Je=cn);break}n&&Je&&Mr.alternate===null&&r(q,Je),G=y(Mr,G,st),Ze===null?je=Mr:Ze.sibling=Mr,Ze=Mr,Je=cn}if(At.done)return l(q,Je),Gt&&Gr(q,st),je;if(Je===null){for(;!At.done;st++,At=Q.next())At=Se(q,At.value,we),At!==null&&(G=y(At,G,st),Ze===null?je=At:Ze.sibling=At,Ze=At);return Gt&&Gr(q,st),je}for(Je=f(q,Je);!At.done;st++,At=Q.next())At=Ie(Je,q,st,At.value,we),At!==null&&(n&&At.alternate!==null&&Je.delete(At.key===null?st:At.key),G=y(At,G,st),Ze===null?je=At:Ze.sibling=At,Ze=At);return n&&Je.forEach(function(w0){return r(q,w0)}),Gt&&Gr(q,st),je}function Qt(q,G,Q,we){if(typeof Q=="object"&&Q!==null&&Q.type===U&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case k:e:{for(var je=Q.key,Ze=G;Ze!==null;){if(Ze.key===je){if(je=Q.type,je===U){if(Ze.tag===7){l(q,Ze.sibling),G=g(Ze,Q.props.children),G.return=q,q=G;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ie&&bh(je)===Ze.type){l(q,Ze.sibling),G=g(Ze,Q.props),G.ref=jo(q,Ze,Q),G.return=q,q=G;break e}l(q,Ze);break}else r(q,Ze);Ze=Ze.sibling}Q.type===U?(G=Zr(Q.props.children,q.mode,we,Q.key),G.return=q,q=G):(we=Sl(Q.type,Q.key,Q.props,null,q.mode,we),we.ref=jo(q,G,Q),we.return=q,q=we)}return T(q);case D:e:{for(Ze=Q.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){l(q,G.sibling),G=g(G,Q.children||[]),G.return=q,q=G;break e}else{l(q,G);break}else r(q,G);G=G.sibling}G=Ku(Q,q.mode,we),G.return=q,q=G}return T(q);case ie:return Ze=Q._init,Qt(q,G,Ze(Q._payload),we)}if(A(Q))return ze(q,G,Q,we);if($(Q))return Ve(q,G,Q,we);Za(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,G!==null&&G.tag===6?(l(q,G.sibling),G=g(G,Q),G.return=q,q=G):(l(q,G),G=qu(Q,q.mode,we),G.return=q,q=G),T(q)):l(q,G)}return Qt}var Cs=Rh(!0),Ch=Rh(!1),Ja=fr(null),Qa=null,Ls=null,ru=null;function su(){ru=Ls=Qa=null}function ou(n){var r=Ja.current;kt(Ja),n._currentValue=r}function au(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function Ps(n,r){Qa=n,ru=Ls=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Fn=!0),n.firstContext=null)}function ei(n){var r=n._currentValue;if(ru!==n)if(n={context:n,memoizedValue:r,next:null},Ls===null){if(Qa===null)throw Error(t(308));Ls=n,Qa.dependencies={lanes:0,firstContext:n}}else Ls=Ls.next=n;return r}var Wr=null;function lu(n){Wr===null?Wr=[n]:Wr.push(n)}function Lh(n,r,l,f){var g=r.interleaved;return g===null?(l.next=l,lu(r)):(l.next=g.next,g.next=l),r.interleaved=l,Hi(n,f)}function Hi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var pr=!1;function cu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function mr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(wt&2)!==0){var g=f.pending;return g===null?r.next=r:(r.next=g.next,g.next=r),f.pending=r,Hi(n,l)}return g=f.interleaved,g===null?(r.next=r,lu(f)):(r.next=g.next,g.next=r),f.interleaved=r,Hi(n,l)}function el(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Ec(n,l)}}function Nh(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var g=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?g=y=T:y=y.next=T,l=l.next}while(l!==null);y===null?g=y=r:y=y.next=r}else g=y=r;l={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:y,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function tl(n,r,l,f){var g=n.updateQueue;pr=!1;var y=g.firstBaseUpdate,T=g.lastBaseUpdate,O=g.shared.pending;if(O!==null){g.shared.pending=null;var z=O,re=z.next;z.next=null,T===null?y=re:T.next=re,T=z;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,O=ge.lastBaseUpdate,O!==T&&(O===null?ge.firstBaseUpdate=re:O.next=re,ge.lastBaseUpdate=z))}if(y!==null){var Se=g.baseState;T=0,ge=re=z=null,O=y;do{var pe=O.lane,Ie=O.eventTime;if((f&pe)===pe){ge!==null&&(ge=ge.next={eventTime:Ie,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var ze=n,Ve=O;switch(pe=r,Ie=l,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){Se=ze.call(Ie,Se,pe);break e}Se=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,pe=typeof ze=="function"?ze.call(Ie,Se,pe):ze,pe==null)break e;Se=X({},Se,pe);break e;case 2:pr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,pe=g.effects,pe===null?g.effects=[O]:pe.push(O))}else Ie={eventTime:Ie,lane:pe,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ge===null?(re=ge=Ie,z=Se):ge=ge.next=Ie,T|=pe;if(O=O.next,O===null){if(O=g.shared.pending,O===null)break;pe=O,O=pe.next,pe.next=null,g.lastBaseUpdate=pe,g.shared.pending=null}}while(!0);if(ge===null&&(z=Se),g.baseState=z,g.firstBaseUpdate=re,g.lastBaseUpdate=ge,r=g.shared.interleaved,r!==null){g=r;do T|=g.lane,g=g.next;while(g!==r)}else y===null&&(g.shared.lanes=0);Yr|=T,n.lanes=T,n.memoizedState=Se}}function Ih(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],g=f.callback;if(g!==null){if(f.callback=null,f=l,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var Xo={},Ti=fr(Xo),Yo=fr(Xo),qo=fr(Xo);function jr(n){if(n===Xo)throw Error(t(174));return n}function uu(n,r){switch(Ot(qo,r),Ot(Yo,n),Ot(Ti,Xo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ue(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ue(r,n)}kt(Ti),Ot(Ti,r)}function Ns(){kt(Ti),kt(Yo),kt(qo)}function Dh(n){jr(qo.current);var r=jr(Ti.current),l=Ue(r,n.type);r!==l&&(Ot(Yo,n),Ot(Ti,l))}function fu(n){Yo.current===n&&(kt(Ti),kt(Yo))}var Wt=fr(0);function nl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var du=[];function hu(){for(var n=0;n<du.length;n++)du[n]._workInProgressVersionPrimary=null;du.length=0}var il=C.ReactCurrentDispatcher,pu=C.ReactCurrentBatchConfig,Xr=0,jt=null,nn=null,an=null,rl=!1,Ko=!1,$o=0,Yv=0;function Sn(){throw Error(t(321))}function mu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!ui(n[l],r[l]))return!1;return!0}function gu(n,r,l,f,g,y){if(Xr=y,jt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,il.current=n===null||n.memoizedState===null?Zv:Jv,n=l(f,g),Ko){y=0;do{if(Ko=!1,$o=0,25<=y)throw Error(t(301));y+=1,an=nn=null,r.updateQueue=null,il.current=Qv,n=l(f,g)}while(Ko)}if(il.current=al,r=nn!==null&&nn.next!==null,Xr=0,an=nn=jt=null,rl=!1,r)throw Error(t(300));return n}function _u(){var n=$o!==0;return $o=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?jt.memoizedState=an=n:an=an.next=n,an}function ti(){if(nn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var r=an===null?jt.memoizedState:an.next;if(r!==null)an=r,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},an===null?jt.memoizedState=an=n:an=an.next=n}return an}function Zo(n,r){return typeof r=="function"?r(n):r}function vu(n){var r=ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=nn,g=f.baseQueue,y=l.pending;if(y!==null){if(g!==null){var T=g.next;g.next=y.next,y.next=T}f.baseQueue=g=y,l.pending=null}if(g!==null){y=g.next,f=f.baseState;var O=T=null,z=null,re=y;do{var ge=re.lane;if((Xr&ge)===ge)z!==null&&(z=z.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),f=re.hasEagerState?re.eagerState:n(f,re.action);else{var Se={lane:ge,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};z===null?(O=z=Se,T=f):z=z.next=Se,jt.lanes|=ge,Yr|=ge}re=re.next}while(re!==null&&re!==y);z===null?T=f:z.next=O,ui(f,r.memoizedState)||(Fn=!0),r.memoizedState=f,r.baseState=T,r.baseQueue=z,l.lastRenderedState=f}if(n=l.interleaved,n!==null){g=n;do y=g.lane,jt.lanes|=y,Yr|=y,g=g.next;while(g!==n)}else g===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function yu(n){var r=ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,g=l.pending,y=r.memoizedState;if(g!==null){l.pending=null;var T=g=g.next;do y=n(y,T.action),T=T.next;while(T!==g);ui(y,r.memoizedState)||(Fn=!0),r.memoizedState=y,r.baseQueue===null&&(r.baseState=y),l.lastRenderedState=y}return[y,f]}function Uh(){}function Oh(n,r){var l=jt,f=ti(),g=r(),y=!ui(f.memoizedState,g);if(y&&(f.memoizedState=g,Fn=!0),f=f.queue,xu(Bh.bind(null,l,f,n),[n]),f.getSnapshot!==r||y||an!==null&&an.memoizedState.tag&1){if(l.flags|=2048,Jo(9,kh.bind(null,l,f,g,r),void 0,null),ln===null)throw Error(t(349));(Xr&30)!==0||Fh(l,r,g)}return g}function Fh(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function kh(n,r,l,f){r.value=l,r.getSnapshot=f,zh(r)&&Hh(n)}function Bh(n,r,l){return l(function(){zh(r)&&Hh(n)})}function zh(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!ui(n,l)}catch{return!0}}function Hh(n){var r=Hi(n,1);r!==null&&mi(r,n,1,-1)}function Vh(n){var r=wi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:n},r.queue=n,n=n.dispatch=$v.bind(null,jt,n),[r.memoizedState,n]}function Jo(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function Gh(){return ti().memoizedState}function sl(n,r,l,f){var g=wi();jt.flags|=n,g.memoizedState=Jo(1|r,l,void 0,f===void 0?null:f)}function ol(n,r,l,f){var g=ti();f=f===void 0?null:f;var y=void 0;if(nn!==null){var T=nn.memoizedState;if(y=T.destroy,f!==null&&mu(f,T.deps)){g.memoizedState=Jo(r,l,y,f);return}}jt.flags|=n,g.memoizedState=Jo(1|r,l,y,f)}function Wh(n,r){return sl(8390656,8,n,r)}function xu(n,r){return ol(2048,8,n,r)}function jh(n,r){return ol(4,2,n,r)}function Xh(n,r){return ol(4,4,n,r)}function Yh(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function qh(n,r,l){return l=l!=null?l.concat([n]):null,ol(4,4,Yh.bind(null,r,n),l)}function Su(){}function Kh(n,r){var l=ti();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&mu(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function $h(n,r){var l=ti();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&mu(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function Zh(n,r,l){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Fn=!0),n.memoizedState=l):(ui(l,r)||(l=Ra(),jt.lanes|=l,Yr|=l,n.baseState=!0),r)}function qv(n,r){var l=Ct;Ct=l!==0&&4>l?l:4,n(!0);var f=pu.transition;pu.transition={};try{n(!1),r()}finally{Ct=l,pu.transition=f}}function Jh(){return ti().memoizedState}function Kv(n,r,l){var f=yr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Qh(n))ep(r,l);else if(l=Lh(n,r,l,f),l!==null){var g=Cn();mi(l,n,f,g),tp(l,r,f)}}function $v(n,r,l){var f=yr(n),g={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Qh(n))ep(r,g);else{var y=n.alternate;if(n.lanes===0&&(y===null||y.lanes===0)&&(y=r.lastRenderedReducer,y!==null))try{var T=r.lastRenderedState,O=y(T,l);if(g.hasEagerState=!0,g.eagerState=O,ui(O,T)){var z=r.interleaved;z===null?(g.next=g,lu(r)):(g.next=z.next,z.next=g),r.interleaved=g;return}}catch{}finally{}l=Lh(n,r,g,f),l!==null&&(g=Cn(),mi(l,n,f,g),tp(l,r,f))}}function Qh(n){var r=n.alternate;return n===jt||r!==null&&r===jt}function ep(n,r){Ko=rl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function tp(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Ec(n,l)}}var al={readContext:ei,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},Zv={readContext:ei,useCallback:function(n,r){return wi().memoizedState=[n,r===void 0?null:r],n},useContext:ei,useEffect:Wh,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,sl(4194308,4,Yh.bind(null,r,n),l)},useLayoutEffect:function(n,r){return sl(4194308,4,n,r)},useInsertionEffect:function(n,r){return sl(4,2,n,r)},useMemo:function(n,r){var l=wi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=wi();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=Kv.bind(null,jt,n),[f.memoizedState,n]},useRef:function(n){var r=wi();return n={current:n},r.memoizedState=n},useState:Vh,useDebugValue:Su,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=Vh(!1),r=n[0];return n=qv.bind(null,n[1]),wi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=jt,g=wi();if(Gt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),ln===null)throw Error(t(349));(Xr&30)!==0||Fh(f,r,l)}g.memoizedState=l;var y={value:l,getSnapshot:r};return g.queue=y,Wh(Bh.bind(null,f,y,n),[n]),f.flags|=2048,Jo(9,kh.bind(null,f,y,l,r),void 0,null),l},useId:function(){var n=wi(),r=ln.identifierPrefix;if(Gt){var l=zi,f=Bi;l=(f&~(1<<32-bn(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=$o++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Yv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Jv={readContext:ei,useCallback:Kh,useContext:ei,useEffect:xu,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Xh,useMemo:$h,useReducer:vu,useRef:Gh,useState:function(){return vu(Zo)},useDebugValue:Su,useDeferredValue:function(n){var r=ti();return Zh(r,nn.memoizedState,n)},useTransition:function(){var n=vu(Zo)[0],r=ti().memoizedState;return[n,r]},useMutableSource:Uh,useSyncExternalStore:Oh,useId:Jh,unstable_isNewReconciler:!1},Qv={readContext:ei,useCallback:Kh,useContext:ei,useEffect:xu,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Xh,useMemo:$h,useReducer:yu,useRef:Gh,useState:function(){return yu(Zo)},useDebugValue:Su,useDeferredValue:function(n){var r=ti();return nn===null?r.memoizedState=n:Zh(r,nn.memoizedState,n)},useTransition:function(){var n=yu(Zo)[0],r=ti().memoizedState;return[n,r]},useMutableSource:Uh,useSyncExternalStore:Oh,useId:Jh,unstable_isNewReconciler:!1};function di(n,r){if(n&&n.defaultProps){r=X({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Mu(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:X({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var ll={isMounted:function(n){return(n=n._reactInternals)?Ui(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Cn(),g=yr(n),y=Vi(f,g);y.payload=r,l!=null&&(y.callback=l),r=mr(n,y,g),r!==null&&(mi(r,n,g,f),el(r,n,g))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Cn(),g=yr(n),y=Vi(f,g);y.tag=1,y.payload=r,l!=null&&(y.callback=l),r=mr(n,y,g),r!==null&&(mi(r,n,g,f),el(r,n,g))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Cn(),f=yr(n),g=Vi(l,f);g.tag=2,r!=null&&(g.callback=r),r=mr(n,g,f),r!==null&&(mi(r,n,f,l),el(r,n,f))}};function np(n,r,l,f,g,y,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,y,T):r.prototype&&r.prototype.isPureReactComponent?!ko(l,f)||!ko(g,y):!0}function ip(n,r,l){var f=!1,g=dr,y=r.contextType;return typeof y=="object"&&y!==null?y=ei(y):(g=On(r)?Hr:xn.current,f=r.contextTypes,y=(f=f!=null)?ws(n,g):dr),r=new r(l,y),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ll,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=g,n.__reactInternalMemoizedMaskedChildContext=y),r}function rp(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&ll.enqueueReplaceState(r,r.state,null)}function Eu(n,r,l,f){var g=n.stateNode;g.props=l,g.state=n.memoizedState,g.refs={},cu(n);var y=r.contextType;typeof y=="object"&&y!==null?g.context=ei(y):(y=On(r)?Hr:xn.current,g.context=ws(n,y)),g.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Mu(n,r,y,l),g.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(r=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),r!==g.state&&ll.enqueueReplaceState(g,g.state,null),tl(n,l,g,f),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308)}function Is(n,r){try{var l="",f=r;do l+=fe(f),f=f.return;while(f);var g=l}catch(y){g=`
Error generating stack: `+y.message+`
`+y.stack}return{value:n,source:r,stack:g,digest:null}}function Tu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function wu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var e0=typeof WeakMap=="function"?WeakMap:Map;function sp(n,r,l){l=Vi(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){ml||(ml=!0,zu=f),wu(n,r)},l}function op(n,r,l){l=Vi(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var g=r.value;l.payload=function(){return f(g)},l.callback=function(){wu(n,r)}}var y=n.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){wu(n,r),typeof f!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function ap(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new e0;var g=new Set;f.set(r,g)}else g=f.get(r),g===void 0&&(g=new Set,f.set(r,g));g.has(l)||(g.add(l),n=p0.bind(null,n,r,l),r.then(n,n))}function lp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function cp(n,r,l,f,g){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Vi(-1,1),r.tag=2,mr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=g,n)}var t0=C.ReactCurrentOwner,Fn=!1;function Rn(n,r,l,f){r.child=n===null?Ch(r,null,l,f):Cs(r,n.child,l,f)}function up(n,r,l,f,g){l=l.render;var y=r.ref;return Ps(r,g),f=gu(n,r,l,f,y,g),l=_u(),n!==null&&!Fn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,Gi(n,r,g)):(Gt&&l&&Qc(r),r.flags|=1,Rn(n,r,f,g),r.child)}function fp(n,r,l,f,g){if(n===null){var y=l.type;return typeof y=="function"&&!Yu(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=y,dp(n,r,y,f,g)):(n=Sl(l.type,null,f,r,r.mode,g),n.ref=r.ref,n.return=r,r.child=n)}if(y=n.child,(n.lanes&g)===0){var T=y.memoizedProps;if(l=l.compare,l=l!==null?l:ko,l(T,f)&&n.ref===r.ref)return Gi(n,r,g)}return r.flags|=1,n=Sr(y,f),n.ref=r.ref,n.return=r,r.child=n}function dp(n,r,l,f,g){if(n!==null){var y=n.memoizedProps;if(ko(y,f)&&n.ref===r.ref)if(Fn=!1,r.pendingProps=f=y,(n.lanes&g)!==0)(n.flags&131072)!==0&&(Fn=!0);else return r.lanes=n.lanes,Gi(n,r,g)}return Au(n,r,l,f,g)}function hp(n,r,l){var f=r.pendingProps,g=f.children,y=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Us,Xn),Xn|=l;else{if((l&1073741824)===0)return n=y!==null?y.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ot(Us,Xn),Xn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=y!==null?y.baseLanes:l,Ot(Us,Xn),Xn|=f}else y!==null?(f=y.baseLanes|l,r.memoizedState=null):f=l,Ot(Us,Xn),Xn|=f;return Rn(n,r,g,l),r.child}function pp(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Au(n,r,l,f,g){var y=On(l)?Hr:xn.current;return y=ws(r,y),Ps(r,g),l=gu(n,r,l,f,y,g),f=_u(),n!==null&&!Fn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,Gi(n,r,g)):(Gt&&f&&Qc(r),r.flags|=1,Rn(n,r,l,g),r.child)}function mp(n,r,l,f,g){if(On(l)){var y=!0;Xa(r)}else y=!1;if(Ps(r,g),r.stateNode===null)ul(n,r),ip(r,l,f),Eu(r,l,f,g),f=!0;else if(n===null){var T=r.stateNode,O=r.memoizedProps;T.props=O;var z=T.context,re=l.contextType;typeof re=="object"&&re!==null?re=ei(re):(re=On(l)?Hr:xn.current,re=ws(r,re));var ge=l.getDerivedStateFromProps,Se=typeof ge=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==f||z!==re)&&rp(r,T,f,re),pr=!1;var pe=r.memoizedState;T.state=pe,tl(r,f,T,g),z=r.memoizedState,O!==f||pe!==z||Un.current||pr?(typeof ge=="function"&&(Mu(r,l,ge,f),z=r.memoizedState),(O=pr||np(r,l,O,f,pe,z,re))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=z),T.props=f,T.state=z,T.context=re,f=O):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{T=r.stateNode,Ph(n,r),O=r.memoizedProps,re=r.type===r.elementType?O:di(r.type,O),T.props=re,Se=r.pendingProps,pe=T.context,z=l.contextType,typeof z=="object"&&z!==null?z=ei(z):(z=On(l)?Hr:xn.current,z=ws(r,z));var Ie=l.getDerivedStateFromProps;(ge=typeof Ie=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==Se||pe!==z)&&rp(r,T,f,z),pr=!1,pe=r.memoizedState,T.state=pe,tl(r,f,T,g);var ze=r.memoizedState;O!==Se||pe!==ze||Un.current||pr?(typeof Ie=="function"&&(Mu(r,l,Ie,f),ze=r.memoizedState),(re=pr||np(r,l,re,f,pe,ze,z)||!1)?(ge||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,ze,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,ze,z)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&pe===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&pe===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=ze),T.props=f,T.state=ze,T.context=z,f=re):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&pe===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&pe===n.memoizedState||(r.flags|=1024),f=!1)}return bu(n,r,l,f,y,g)}function bu(n,r,l,f,g,y){pp(n,r);var T=(r.flags&128)!==0;if(!f&&!T)return g&&xh(r,l,!1),Gi(n,r,y);f=r.stateNode,t0.current=r;var O=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&T?(r.child=Cs(r,n.child,null,y),r.child=Cs(r,null,O,y)):Rn(n,r,O,y),r.memoizedState=f.state,g&&xh(r,l,!0),r.child}function gp(n){var r=n.stateNode;r.pendingContext?vh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&vh(n,r.context,!1),uu(n,r.containerInfo)}function _p(n,r,l,f,g){return Rs(),iu(g),r.flags|=256,Rn(n,r,l,f),r.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Cu(n){return{baseLanes:n,cachePool:null,transitions:null}}function vp(n,r,l){var f=r.pendingProps,g=Wt.current,y=!1,T=(r.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(g&2)!==0),O?(y=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(g|=1),Ot(Wt,g&1),n===null)return nu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=f.children,n=f.fallback,y?(f=r.mode,y=r.child,T={mode:"hidden",children:T},(f&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=T):y=Ml(T,f,0,null),n=Zr(n,f,l,null),y.return=r,n.return=r,y.sibling=n,r.child=y,r.child.memoizedState=Cu(l),r.memoizedState=Ru,n):Lu(r,T));if(g=n.memoizedState,g!==null&&(O=g.dehydrated,O!==null))return n0(n,r,T,f,O,g,l);if(y){y=f.fallback,T=r.mode,g=n.child,O=g.sibling;var z={mode:"hidden",children:f.children};return(T&1)===0&&r.child!==g?(f=r.child,f.childLanes=0,f.pendingProps=z,r.deletions=null):(f=Sr(g,z),f.subtreeFlags=g.subtreeFlags&14680064),O!==null?y=Sr(O,y):(y=Zr(y,T,l,null),y.flags|=2),y.return=r,f.return=r,f.sibling=y,r.child=f,f=y,y=r.child,T=n.child.memoizedState,T=T===null?Cu(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},y.memoizedState=T,y.childLanes=n.childLanes&~l,r.memoizedState=Ru,f}return y=n.child,n=y.sibling,f=Sr(y,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Lu(n,r){return r=Ml({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function cl(n,r,l,f){return f!==null&&iu(f),Cs(r,n.child,null,l),n=Lu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function n0(n,r,l,f,g,y,T){if(l)return r.flags&256?(r.flags&=-257,f=Tu(Error(t(422))),cl(n,r,T,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(y=f.fallback,g=r.mode,f=Ml({mode:"visible",children:f.children},g,0,null),y=Zr(y,g,T,null),y.flags|=2,f.return=r,y.return=r,f.sibling=y,r.child=f,(r.mode&1)!==0&&Cs(r,n.child,null,T),r.child.memoizedState=Cu(T),r.memoizedState=Ru,y);if((r.mode&1)===0)return cl(n,r,T,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var O=f.dgst;return f=O,y=Error(t(419)),f=Tu(y,f,void 0),cl(n,r,T,f)}if(O=(T&n.childLanes)!==0,Fn||O){if(f=ln,f!==null){switch(T&-T){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|T))!==0?0:g,g!==0&&g!==y.retryLane&&(y.retryLane=g,Hi(n,g),mi(f,n,g,-1))}return Xu(),f=Tu(Error(t(421))),cl(n,r,T,f)}return g.data==="$?"?(r.flags|=128,r.child=n.child,r=m0.bind(null,n),g._reactRetry=r,null):(n=y.treeContext,jn=ur(g.nextSibling),Wn=r,Gt=!0,fi=null,n!==null&&(Jn[Qn++]=Bi,Jn[Qn++]=zi,Jn[Qn++]=Vr,Bi=n.id,zi=n.overflow,Vr=r),r=Lu(r,f.children),r.flags|=4096,r)}function yp(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),au(n.return,r,l)}function Pu(n,r,l,f,g){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:g}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=f,y.tail=l,y.tailMode=g)}function xp(n,r,l){var f=r.pendingProps,g=f.revealOrder,y=f.tail;if(Rn(n,r,f.children,l),f=Wt.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yp(n,l,r);else if(n.tag===19)yp(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Ot(Wt,f),(r.mode&1)===0)r.memoizedState=null;else switch(g){case"forwards":for(l=r.child,g=null;l!==null;)n=l.alternate,n!==null&&nl(n)===null&&(g=l),l=l.sibling;l=g,l===null?(g=r.child,r.child=null):(g=l.sibling,l.sibling=null),Pu(r,!1,g,l,y);break;case"backwards":for(l=null,g=r.child,r.child=null;g!==null;){if(n=g.alternate,n!==null&&nl(n)===null){r.child=g;break}n=g.sibling,g.sibling=l,l=g,g=n}Pu(r,!0,l,null,y);break;case"together":Pu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ul(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Gi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Yr|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Sr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Sr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function i0(n,r,l){switch(r.tag){case 3:gp(r),Rs();break;case 5:Dh(r);break;case 1:On(r.type)&&Xa(r);break;case 4:uu(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,g=r.memoizedProps.value;Ot(Ja,f._currentValue),f._currentValue=g;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Ot(Wt,Wt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?vp(n,r,l):(Ot(Wt,Wt.current&1),n=Gi(n,r,l),n!==null?n.sibling:null);Ot(Wt,Wt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return xp(n,r,l);r.flags|=128}if(g=r.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Ot(Wt,Wt.current),f)break;return null;case 22:case 23:return r.lanes=0,hp(n,r,l)}return Gi(n,r,l)}var Sp,Nu,Mp,Ep;Sp=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Nu=function(){},Mp=function(n,r,l,f){var g=n.memoizedProps;if(g!==f){n=r.stateNode,jr(Ti.current);var y=null;switch(l){case"input":g=qe(n,g),f=qe(n,f),y=[];break;case"select":g=X({},g,{value:void 0}),f=X({},f,{value:void 0}),y=[];break;case"textarea":g=xe(n,g),f=xe(n,f),y=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Ga)}F(l,f);var T;l=null;for(re in g)if(!f.hasOwnProperty(re)&&g.hasOwnProperty(re)&&g[re]!=null)if(re==="style"){var O=g[re];for(T in O)O.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(s.hasOwnProperty(re)?y||(y=[]):(y=y||[]).push(re,null));for(re in f){var z=f[re];if(O=g!=null?g[re]:void 0,f.hasOwnProperty(re)&&z!==O&&(z!=null||O!=null))if(re==="style")if(O){for(T in O)!O.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in z)z.hasOwnProperty(T)&&O[T]!==z[T]&&(l||(l={}),l[T]=z[T])}else l||(y||(y=[]),y.push(re,l)),l=z;else re==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,O=O?O.__html:void 0,z!=null&&O!==z&&(y=y||[]).push(re,z)):re==="children"?typeof z!="string"&&typeof z!="number"||(y=y||[]).push(re,""+z):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(s.hasOwnProperty(re)?(z!=null&&re==="onScroll"&&Ft("scroll",n),y||O===z||(y=[])):(y=y||[]).push(re,z))}l&&(y=y||[]).push("style",l);var re=y;(r.updateQueue=re)&&(r.flags|=4)}},Ep=function(n,r,l,f){l!==f&&(r.flags|=4)};function Qo(n,r){if(!Gt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Mn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var g=n.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=n,g=g.sibling;else for(g=n.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=n,g=g.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function r0(n,r,l){var f=r.pendingProps;switch(eu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(r),null;case 1:return On(r.type)&&ja(),Mn(r),null;case 3:return f=r.stateNode,Ns(),kt(Un),kt(xn),hu(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&($a(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,fi!==null&&(Gu(fi),fi=null))),Nu(n,r),Mn(r),null;case 5:fu(r);var g=jr(qo.current);if(l=r.type,n!==null&&r.stateNode!=null)Mp(n,r,l,f,g),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Mn(r),null}if(n=jr(Ti.current),$a(r)){f=r.stateNode,l=r.type;var y=r.memoizedProps;switch(f[Ei]=r,f[Go]=y,n=(r.mode&1)!==0,l){case"dialog":Ft("cancel",f),Ft("close",f);break;case"iframe":case"object":case"embed":Ft("load",f);break;case"video":case"audio":for(g=0;g<zo.length;g++)Ft(zo[g],f);break;case"source":Ft("error",f);break;case"img":case"image":case"link":Ft("error",f),Ft("load",f);break;case"details":Ft("toggle",f);break;case"input":it(f,y),Ft("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!y.multiple},Ft("invalid",f);break;case"textarea":ve(f,y),Ft("invalid",f)}F(l,y),g=null;for(var T in y)if(y.hasOwnProperty(T)){var O=y[T];T==="children"?typeof O=="string"?f.textContent!==O&&(y.suppressHydrationWarning!==!0&&Va(f.textContent,O,n),g=["children",O]):typeof O=="number"&&f.textContent!==""+O&&(y.suppressHydrationWarning!==!0&&Va(f.textContent,O,n),g=["children",""+O]):s.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&Ft("scroll",f)}switch(l){case"input":at(f),lt(f,y,!0);break;case"textarea":at(f),Ge(f);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(f.onclick=Ga)}f=g,r.updateQueue=f,f!==null&&(r.flags|=4)}else{T=g.nodeType===9?g:g.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ce(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(l,{is:f.is}):(n=T.createElement(l),l==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,l),n[Ei]=r,n[Go]=f,Sp(n,r,!1,!1),r.stateNode=n;e:{switch(T=Te(l,f),l){case"dialog":Ft("cancel",n),Ft("close",n),g=f;break;case"iframe":case"object":case"embed":Ft("load",n),g=f;break;case"video":case"audio":for(g=0;g<zo.length;g++)Ft(zo[g],n);g=f;break;case"source":Ft("error",n),g=f;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),g=f;break;case"details":Ft("toggle",n),g=f;break;case"input":it(n,f),g=qe(n,f),Ft("invalid",n);break;case"option":g=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},g=X({},f,{value:void 0}),Ft("invalid",n);break;case"textarea":ve(n,f),g=xe(n,f),Ft("invalid",n);break;default:g=f}F(l,g),O=g;for(y in O)if(O.hasOwnProperty(y)){var z=O[y];y==="style"?Xe(n,z):y==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ct(n,z)):y==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&me(n,z):typeof z=="number"&&me(n,""+z):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?z!=null&&y==="onScroll"&&Ft("scroll",n):z!=null&&w(n,y,z,T))}switch(l){case"input":at(n),lt(n,f,!1);break;case"textarea":at(n),Ge(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Ae(f.value));break;case"select":n.multiple=!!f.multiple,y=f.value,y!=null?te(n,!!f.multiple,y,!1):f.defaultValue!=null&&te(n,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(n.onclick=Ga)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Mn(r),null;case 6:if(n&&r.stateNode!=null)Ep(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=jr(qo.current),jr(Ti.current),$a(r)){if(f=r.stateNode,l=r.memoizedProps,f[Ei]=r,(y=f.nodeValue!==l)&&(n=Wn,n!==null))switch(n.tag){case 3:Va(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Va(f.nodeValue,l,(n.mode&1)!==0)}y&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Ei]=r,r.stateNode=f}return Mn(r),null;case 13:if(kt(Wt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&jn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ah(),Rs(),r.flags|=98560,y=!1;else if(y=$a(r),f!==null&&f.dehydrated!==null){if(n===null){if(!y)throw Error(t(318));if(y=r.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Ei]=r}else Rs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Mn(r),y=!1}else fi!==null&&(Gu(fi),fi=null),y=!0;if(!y)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Wt.current&1)!==0?rn===0&&(rn=3):Xu())),r.updateQueue!==null&&(r.flags|=4),Mn(r),null);case 4:return Ns(),Nu(n,r),n===null&&Ho(r.stateNode.containerInfo),Mn(r),null;case 10:return ou(r.type._context),Mn(r),null;case 17:return On(r.type)&&ja(),Mn(r),null;case 19:if(kt(Wt),y=r.memoizedState,y===null)return Mn(r),null;if(f=(r.flags&128)!==0,T=y.rendering,T===null)if(f)Qo(y,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=nl(n),T!==null){for(r.flags|=128,Qo(y,!1),f=T.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)y=l,n=f,y.flags&=14680066,T=y.alternate,T===null?(y.childLanes=0,y.lanes=n,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=T.childLanes,y.lanes=T.lanes,y.child=T.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=T.memoizedProps,y.memoizedState=T.memoizedState,y.updateQueue=T.updateQueue,y.type=T.type,n=T.dependencies,y.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ot(Wt,Wt.current&1|2),r.child}n=n.sibling}y.tail!==null&&Fe()>Os&&(r.flags|=128,f=!0,Qo(y,!1),r.lanes=4194304)}else{if(!f)if(n=nl(T),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Qo(y,!0),y.tail===null&&y.tailMode==="hidden"&&!T.alternate&&!Gt)return Mn(r),null}else 2*Fe()-y.renderingStartTime>Os&&l!==1073741824&&(r.flags|=128,f=!0,Qo(y,!1),r.lanes=4194304);y.isBackwards?(T.sibling=r.child,r.child=T):(l=y.last,l!==null?l.sibling=T:r.child=T,y.last=T)}return y.tail!==null?(r=y.tail,y.rendering=r,y.tail=r.sibling,y.renderingStartTime=Fe(),r.sibling=null,l=Wt.current,Ot(Wt,f?l&1|2:l&1),r):(Mn(r),null);case 22:case 23:return ju(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(Xn&1073741824)!==0&&(Mn(r),r.subtreeFlags&6&&(r.flags|=8192)):Mn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function s0(n,r){switch(eu(r),r.tag){case 1:return On(r.type)&&ja(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ns(),kt(Un),kt(xn),hu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return fu(r),null;case 13:if(kt(Wt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Rs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return kt(Wt),null;case 4:return Ns(),null;case 10:return ou(r.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var fl=!1,En=!1,o0=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Ds(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){$t(n,r,f)}else l.current=null}function Iu(n,r,l){try{l()}catch(f){$t(n,r,f)}}var Tp=!1;function a0(n,r){if(jc=Pa,n=nh(),Fc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var g=f.anchorOffset,y=f.focusNode;f=f.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var T=0,O=-1,z=-1,re=0,ge=0,Se=n,pe=null;t:for(;;){for(var Ie;Se!==l||g!==0&&Se.nodeType!==3||(O=T+g),Se!==y||f!==0&&Se.nodeType!==3||(z=T+f),Se.nodeType===3&&(T+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)pe=Se,Se=Ie;for(;;){if(Se===n)break t;if(pe===l&&++re===g&&(O=T),pe===y&&++ge===f&&(z=T),(Ie=Se.nextSibling)!==null)break;Se=pe,pe=Se.parentNode}Se=Ie}l=O===-1||z===-1?null:{start:O,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(Xc={focusedElem:n,selectionRange:l},Pa=!1,ke=r;ke!==null;)if(r=ke,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ke=n;else for(;ke!==null;){r=ke;try{var ze=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Qt=ze.memoizedState,q=r.stateNode,G=q.getSnapshotBeforeUpdate(r.elementType===r.type?Ve:di(r.type,Ve),Qt);q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Q=r.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){$t(r,r.return,we)}if(n=r.sibling,n!==null){n.return=r.return,ke=n;break}ke=r.return}return ze=Tp,Tp=!1,ze}function ea(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&n)===n){var y=g.destroy;g.destroy=void 0,y!==void 0&&Iu(r,l,y)}g=g.next}while(g!==f)}}function dl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Du(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function wp(n){var r=n.alternate;r!==null&&(n.alternate=null,wp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ei],delete r[Go],delete r[$c],delete r[Gv],delete r[Wv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ap(n){return n.tag===5||n.tag===3||n.tag===4}function bp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ap(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uu(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Ga));else if(f!==4&&(n=n.child,n!==null))for(Uu(n,r,l),n=n.sibling;n!==null;)Uu(n,r,l),n=n.sibling}function Ou(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Ou(n,r,l),n=n.sibling;n!==null;)Ou(n,r,l),n=n.sibling}var pn=null,hi=!1;function gr(n,r,l){for(l=l.child;l!==null;)Rp(n,r,l),l=l.sibling}function Rp(n,r,l){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(In,l)}catch{}switch(l.tag){case 5:En||Ds(l,r);case 6:var f=pn,g=hi;pn=null,gr(n,r,l),pn=f,hi=g,pn!==null&&(hi?(n=pn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):pn.removeChild(l.stateNode));break;case 18:pn!==null&&(hi?(n=pn,l=l.stateNode,n.nodeType===8?Kc(n.parentNode,l):n.nodeType===1&&Kc(n,l),No(n)):Kc(pn,l.stateNode));break;case 4:f=pn,g=hi,pn=l.stateNode.containerInfo,hi=!0,gr(n,r,l),pn=f,hi=g;break;case 0:case 11:case 14:case 15:if(!En&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var y=g,T=y.destroy;y=y.tag,T!==void 0&&((y&2)!==0||(y&4)!==0)&&Iu(l,r,T),g=g.next}while(g!==f)}gr(n,r,l);break;case 1:if(!En&&(Ds(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(O){$t(l,r,O)}gr(n,r,l);break;case 21:gr(n,r,l);break;case 22:l.mode&1?(En=(f=En)||l.memoizedState!==null,gr(n,r,l),En=f):gr(n,r,l);break;default:gr(n,r,l)}}function Cp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new o0),r.forEach(function(f){var g=g0.bind(null,n,f);l.has(f)||(l.add(f),f.then(g,g))})}}function pi(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var g=l[f];try{var y=n,T=r,O=T;e:for(;O!==null;){switch(O.tag){case 5:pn=O.stateNode,hi=!1;break e;case 3:pn=O.stateNode.containerInfo,hi=!0;break e;case 4:pn=O.stateNode.containerInfo,hi=!0;break e}O=O.return}if(pn===null)throw Error(t(160));Rp(y,T,g),pn=null,hi=!1;var z=g.alternate;z!==null&&(z.return=null),g.return=null}catch(re){$t(g,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Lp(r,n),r=r.sibling}function Lp(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pi(r,n),Ai(n),f&4){try{ea(3,n,n.return),dl(3,n)}catch(Ve){$t(n,n.return,Ve)}try{ea(5,n,n.return)}catch(Ve){$t(n,n.return,Ve)}}break;case 1:pi(r,n),Ai(n),f&512&&l!==null&&Ds(l,l.return);break;case 5:if(pi(r,n),Ai(n),f&512&&l!==null&&Ds(l,l.return),n.flags&32){var g=n.stateNode;try{me(g,"")}catch(Ve){$t(n,n.return,Ve)}}if(f&4&&(g=n.stateNode,g!=null)){var y=n.memoizedProps,T=l!==null?l.memoizedProps:y,O=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{O==="input"&&y.type==="radio"&&y.name!=null&&He(g,y),Te(O,T);var re=Te(O,y);for(T=0;T<z.length;T+=2){var ge=z[T],Se=z[T+1];ge==="style"?Xe(g,Se):ge==="dangerouslySetInnerHTML"?ct(g,Se):ge==="children"?me(g,Se):w(g,ge,Se,re)}switch(O){case"input":Rt(g,y);break;case"textarea":Me(g,y);break;case"select":var pe=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!y.multiple;var Ie=y.value;Ie!=null?te(g,!!y.multiple,Ie,!1):pe!==!!y.multiple&&(y.defaultValue!=null?te(g,!!y.multiple,y.defaultValue,!0):te(g,!!y.multiple,y.multiple?[]:"",!1))}g[Go]=y}catch(Ve){$t(n,n.return,Ve)}}break;case 6:if(pi(r,n),Ai(n),f&4){if(n.stateNode===null)throw Error(t(162));g=n.stateNode,y=n.memoizedProps;try{g.nodeValue=y}catch(Ve){$t(n,n.return,Ve)}}break;case 3:if(pi(r,n),Ai(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{No(r.containerInfo)}catch(Ve){$t(n,n.return,Ve)}break;case 4:pi(r,n),Ai(n);break;case 13:pi(r,n),Ai(n),g=n.child,g.flags&8192&&(y=g.memoizedState!==null,g.stateNode.isHidden=y,!y||g.alternate!==null&&g.alternate.memoizedState!==null||(Bu=Fe())),f&4&&Cp(n);break;case 22:if(ge=l!==null&&l.memoizedState!==null,n.mode&1?(En=(re=En)||ge,pi(r,n),En=re):pi(r,n),Ai(n),f&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!ge&&(n.mode&1)!==0)for(ke=n,ge=n.child;ge!==null;){for(Se=ke=ge;ke!==null;){switch(pe=ke,Ie=pe.child,pe.tag){case 0:case 11:case 14:case 15:ea(4,pe,pe.return);break;case 1:Ds(pe,pe.return);var ze=pe.stateNode;if(typeof ze.componentWillUnmount=="function"){f=pe,l=pe.return;try{r=f,ze.props=r.memoizedProps,ze.state=r.memoizedState,ze.componentWillUnmount()}catch(Ve){$t(f,l,Ve)}}break;case 5:Ds(pe,pe.return);break;case 22:if(pe.memoizedState!==null){Ip(Se);continue}}Ie!==null?(Ie.return=pe,ke=Ie):Ip(Se)}ge=ge.sibling}e:for(ge=null,Se=n;;){if(Se.tag===5){if(ge===null){ge=Se;try{g=Se.stateNode,re?(y=g.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(O=Se.stateNode,z=Se.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,O.style.display=rt("display",T))}catch(Ve){$t(n,n.return,Ve)}}}else if(Se.tag===6){if(ge===null)try{Se.stateNode.nodeValue=re?"":Se.memoizedProps}catch(Ve){$t(n,n.return,Ve)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ge===Se&&(ge=null),Se=Se.return}ge===Se&&(ge=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:pi(r,n),Ai(n),f&4&&Cp(n);break;case 21:break;default:pi(r,n),Ai(n)}}function Ai(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Ap(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(me(g,""),f.flags&=-33);var y=bp(n);Ou(n,y,g);break;case 3:case 4:var T=f.stateNode.containerInfo,O=bp(n);Uu(n,O,T);break;default:throw Error(t(161))}}catch(z){$t(n,n.return,z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function l0(n,r,l){ke=n,Pp(n)}function Pp(n,r,l){for(var f=(n.mode&1)!==0;ke!==null;){var g=ke,y=g.child;if(g.tag===22&&f){var T=g.memoizedState!==null||fl;if(!T){var O=g.alternate,z=O!==null&&O.memoizedState!==null||En;O=fl;var re=En;if(fl=T,(En=z)&&!re)for(ke=g;ke!==null;)T=ke,z=T.child,T.tag===22&&T.memoizedState!==null?Dp(g):z!==null?(z.return=T,ke=z):Dp(g);for(;y!==null;)ke=y,Pp(y),y=y.sibling;ke=g,fl=O,En=re}Np(n)}else(g.subtreeFlags&8772)!==0&&y!==null?(y.return=g,ke=y):Np(n)}}function Np(n){for(;ke!==null;){var r=ke;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:En||dl(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!En)if(l===null)f.componentDidMount();else{var g=r.elementType===r.type?l.memoizedProps:di(r.type,l.memoizedProps);f.componentDidUpdate(g,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var y=r.updateQueue;y!==null&&Ih(r,y,f);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Ih(r,T,l)}break;case 5:var O=r.stateNode;if(l===null&&r.flags&4){l=O;var z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var ge=re.memoizedState;if(ge!==null){var Se=ge.dehydrated;Se!==null&&No(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||r.flags&512&&Du(r)}catch(pe){$t(r,r.return,pe)}}if(r===n){ke=null;break}if(l=r.sibling,l!==null){l.return=r.return,ke=l;break}ke=r.return}}function Ip(n){for(;ke!==null;){var r=ke;if(r===n){ke=null;break}var l=r.sibling;if(l!==null){l.return=r.return,ke=l;break}ke=r.return}}function Dp(n){for(;ke!==null;){var r=ke;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{dl(4,r)}catch(z){$t(r,l,z)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var g=r.return;try{f.componentDidMount()}catch(z){$t(r,g,z)}}var y=r.return;try{Du(r)}catch(z){$t(r,y,z)}break;case 5:var T=r.return;try{Du(r)}catch(z){$t(r,T,z)}}}catch(z){$t(r,r.return,z)}if(r===n){ke=null;break}var O=r.sibling;if(O!==null){O.return=r.return,ke=O;break}ke=r.return}}var c0=Math.ceil,hl=C.ReactCurrentDispatcher,Fu=C.ReactCurrentOwner,ni=C.ReactCurrentBatchConfig,wt=0,ln=null,en=null,mn=0,Xn=0,Us=fr(0),rn=0,ta=null,Yr=0,pl=0,ku=0,na=null,kn=null,Bu=0,Os=1/0,Wi=null,ml=!1,zu=null,_r=null,gl=!1,vr=null,_l=0,ia=0,Hu=null,vl=-1,yl=0;function Cn(){return(wt&6)!==0?Fe():vl!==-1?vl:vl=Fe()}function yr(n){return(n.mode&1)===0?1:(wt&2)!==0&&mn!==0?mn&-mn:Xv.transition!==null?(yl===0&&(yl=Ra()),yl):(n=Ct,n!==0||(n=window.event,n=n===void 0?16:Od(n.type)),n)}function mi(n,r,l,f){if(50<ia)throw ia=0,Hu=null,Error(t(185));bo(n,l,f),((wt&2)===0||n!==ln)&&(n===ln&&((wt&2)===0&&(pl|=l),rn===4&&xr(n,mn)),Bn(n,f),l===1&&wt===0&&(r.mode&1)===0&&(Os=Fe()+500,Ya&&hr()))}function Bn(n,r){var l=n.callbackNode;Dn(n,r);var f=Zn(n,n===ln?mn:0);if(f===0)l!==null&&Ne(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&Ne(l),r===1)n.tag===0?jv(Op.bind(null,n)):Sh(Op.bind(null,n)),Hv(function(){(wt&6)===0&&hr()}),l=null;else{switch(Rd(f)){case 1:l=ot;break;case 4:l=ut;break;case 16:l=Ut;break;case 536870912:l=Jt;break;default:l=Ut}l=Wp(l,Up.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Up(n,r){if(vl=-1,yl=0,(wt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Fs()&&n.callbackNode!==l)return null;var f=Zn(n,n===ln?mn:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=xl(n,f);else{r=f;var g=wt;wt|=2;var y=kp();(ln!==n||mn!==r)&&(Wi=null,Os=Fe()+500,Kr(n,r));do try{d0();break}catch(O){Fp(n,O)}while(!0);su(),hl.current=y,wt=g,en!==null?r=0:(ln=null,mn=0,r=rn)}if(r!==0){if(r===2&&(g=Br(n),g!==0&&(f=g,r=Vu(n,g))),r===1)throw l=ta,Kr(n,0),xr(n,f),Bn(n,Fe()),l;if(r===6)xr(n,f);else{if(g=n.current.alternate,(f&30)===0&&!u0(g)&&(r=xl(n,f),r===2&&(y=Br(n),y!==0&&(f=y,r=Vu(n,y))),r===1))throw l=ta,Kr(n,0),xr(n,f),Bn(n,Fe()),l;switch(n.finishedWork=g,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:$r(n,kn,Wi);break;case 3:if(xr(n,f),(f&130023424)===f&&(r=Bu+500-Fe(),10<r)){if(Zn(n,0)!==0)break;if(g=n.suspendedLanes,(g&f)!==f){Cn(),n.pingedLanes|=n.suspendedLanes&g;break}n.timeoutHandle=qc($r.bind(null,n,kn,Wi),r);break}$r(n,kn,Wi);break;case 4:if(xr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,g=-1;0<f;){var T=31-bn(f);y=1<<T,T=r[T],T>g&&(g=T),f&=~y}if(f=g,f=Fe()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*c0(f/1960))-f,10<f){n.timeoutHandle=qc($r.bind(null,n,kn,Wi),f);break}$r(n,kn,Wi);break;case 5:$r(n,kn,Wi);break;default:throw Error(t(329))}}}return Bn(n,Fe()),n.callbackNode===l?Up.bind(null,n):null}function Vu(n,r){var l=na;return n.current.memoizedState.isDehydrated&&(Kr(n,r).flags|=256),n=xl(n,r),n!==2&&(r=kn,kn=l,r!==null&&Gu(r)),n}function Gu(n){kn===null?kn=n:kn.push.apply(kn,n)}function u0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var g=l[f],y=g.getSnapshot;g=g.value;try{if(!ui(y(),g))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function xr(n,r){for(r&=~ku,r&=~pl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-bn(r),f=1<<l;n[l]=-1,r&=~f}}function Op(n){if((wt&6)!==0)throw Error(t(327));Fs();var r=Zn(n,0);if((r&1)===0)return Bn(n,Fe()),null;var l=xl(n,r);if(n.tag!==0&&l===2){var f=Br(n);f!==0&&(r=f,l=Vu(n,f))}if(l===1)throw l=ta,Kr(n,0),xr(n,r),Bn(n,Fe()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,$r(n,kn,Wi),Bn(n,Fe()),null}function Wu(n,r){var l=wt;wt|=1;try{return n(r)}finally{wt=l,wt===0&&(Os=Fe()+500,Ya&&hr())}}function qr(n){vr!==null&&vr.tag===0&&(wt&6)===0&&Fs();var r=wt;wt|=1;var l=ni.transition,f=Ct;try{if(ni.transition=null,Ct=1,n)return n()}finally{Ct=f,ni.transition=l,wt=r,(wt&6)===0&&hr()}}function ju(){Xn=Us.current,kt(Us)}function Kr(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,zv(l)),en!==null)for(l=en.return;l!==null;){var f=l;switch(eu(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&ja();break;case 3:Ns(),kt(Un),kt(xn),hu();break;case 5:fu(f);break;case 4:Ns();break;case 13:kt(Wt);break;case 19:kt(Wt);break;case 10:ou(f.type._context);break;case 22:case 23:ju()}l=l.return}if(ln=n,en=n=Sr(n.current,null),mn=Xn=r,rn=0,ta=null,ku=pl=Yr=0,kn=na=null,Wr!==null){for(r=0;r<Wr.length;r++)if(l=Wr[r],f=l.interleaved,f!==null){l.interleaved=null;var g=f.next,y=l.pending;if(y!==null){var T=y.next;y.next=g,f.next=T}l.pending=f}Wr=null}return n}function Fp(n,r){do{var l=en;try{if(su(),il.current=al,rl){for(var f=jt.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}rl=!1}if(Xr=0,an=nn=jt=null,Ko=!1,$o=0,Fu.current=null,l===null||l.return===null){rn=1,ta=r,en=null;break}e:{var y=n,T=l.return,O=l,z=r;if(r=mn,O.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var re=z,ge=O,Se=ge.tag;if((ge.mode&1)===0&&(Se===0||Se===11||Se===15)){var pe=ge.alternate;pe?(ge.updateQueue=pe.updateQueue,ge.memoizedState=pe.memoizedState,ge.lanes=pe.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ie=lp(T);if(Ie!==null){Ie.flags&=-257,cp(Ie,T,O,y,r),Ie.mode&1&&ap(y,re,r),r=Ie,z=re;var ze=r.updateQueue;if(ze===null){var Ve=new Set;Ve.add(z),r.updateQueue=Ve}else ze.add(z);break e}else{if((r&1)===0){ap(y,re,r),Xu();break e}z=Error(t(426))}}else if(Gt&&O.mode&1){var Qt=lp(T);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),cp(Qt,T,O,y,r),iu(Is(z,O));break e}}y=z=Is(z,O),rn!==4&&(rn=2),na===null?na=[y]:na.push(y),y=T;do{switch(y.tag){case 3:y.flags|=65536,r&=-r,y.lanes|=r;var q=sp(y,z,r);Nh(y,q);break e;case 1:O=z;var G=y.type,Q=y.stateNode;if((y.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(_r===null||!_r.has(Q)))){y.flags|=65536,r&=-r,y.lanes|=r;var we=op(y,O,r);Nh(y,we);break e}}y=y.return}while(y!==null)}zp(l)}catch(je){r=je,en===l&&l!==null&&(en=l=l.return);continue}break}while(!0)}function kp(){var n=hl.current;return hl.current=al,n===null?al:n}function Xu(){(rn===0||rn===3||rn===2)&&(rn=4),ln===null||(Yr&268435455)===0&&(pl&268435455)===0||xr(ln,mn)}function xl(n,r){var l=wt;wt|=2;var f=kp();(ln!==n||mn!==r)&&(Wi=null,Kr(n,r));do try{f0();break}catch(g){Fp(n,g)}while(!0);if(su(),wt=l,hl.current=f,en!==null)throw Error(t(261));return ln=null,mn=0,rn}function f0(){for(;en!==null;)Bp(en)}function d0(){for(;en!==null&&!Ye();)Bp(en)}function Bp(n){var r=Gp(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,r===null?zp(n):en=r,Fu.current=null}function zp(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=r0(l,r,Xn),l!==null){en=l;return}}else{if(l=s0(l,r),l!==null){l.flags&=32767,en=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,en=null;return}}if(r=r.sibling,r!==null){en=r;return}en=r=n}while(r!==null);rn===0&&(rn=5)}function $r(n,r,l){var f=Ct,g=ni.transition;try{ni.transition=null,Ct=1,h0(n,r,l,f)}finally{ni.transition=g,Ct=f}return null}function h0(n,r,l,f){do Fs();while(vr!==null);if((wt&6)!==0)throw Error(t(327));l=n.finishedWork;var g=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var y=l.lanes|l.childLanes;if(Y_(n,y),n===ln&&(en=ln=null,mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||gl||(gl=!0,Wp(Ut,function(){return Fs(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=ni.transition,ni.transition=null;var T=Ct;Ct=1;var O=wt;wt|=4,Fu.current=null,a0(n,l),Lp(l,n),Iv(Xc),Pa=!!jc,Xc=jc=null,n.current=l,l0(l),tt(),wt=O,Ct=T,ni.transition=y}else n.current=l;if(gl&&(gl=!1,vr=n,_l=g),y=n.pendingLanes,y===0&&(_r=null),ht(l.stateNode),Bn(n,Fe()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)g=r[l],f(g.value,{componentStack:g.stack,digest:g.digest});if(ml)throw ml=!1,n=zu,zu=null,n;return(_l&1)!==0&&n.tag!==0&&Fs(),y=n.pendingLanes,(y&1)!==0?n===Hu?ia++:(ia=0,Hu=n):ia=0,hr(),null}function Fs(){if(vr!==null){var n=Rd(_l),r=ni.transition,l=Ct;try{if(ni.transition=null,Ct=16>n?16:n,vr===null)var f=!1;else{if(n=vr,vr=null,_l=0,(wt&6)!==0)throw Error(t(331));var g=wt;for(wt|=4,ke=n.current;ke!==null;){var y=ke,T=y.child;if((ke.flags&16)!==0){var O=y.deletions;if(O!==null){for(var z=0;z<O.length;z++){var re=O[z];for(ke=re;ke!==null;){var ge=ke;switch(ge.tag){case 0:case 11:case 15:ea(8,ge,y)}var Se=ge.child;if(Se!==null)Se.return=ge,ke=Se;else for(;ke!==null;){ge=ke;var pe=ge.sibling,Ie=ge.return;if(wp(ge),ge===re){ke=null;break}if(pe!==null){pe.return=Ie,ke=pe;break}ke=Ie}}}var ze=y.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Qt=Ve.sibling;Ve.sibling=null,Ve=Qt}while(Ve!==null)}}ke=y}}if((y.subtreeFlags&2064)!==0&&T!==null)T.return=y,ke=T;else e:for(;ke!==null;){if(y=ke,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:ea(9,y,y.return)}var q=y.sibling;if(q!==null){q.return=y.return,ke=q;break e}ke=y.return}}var G=n.current;for(ke=G;ke!==null;){T=ke;var Q=T.child;if((T.subtreeFlags&2064)!==0&&Q!==null)Q.return=T,ke=Q;else e:for(T=G;ke!==null;){if(O=ke,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:dl(9,O)}}catch(je){$t(O,O.return,je)}if(O===T){ke=null;break e}var we=O.sibling;if(we!==null){we.return=O.return,ke=we;break e}ke=O.return}}if(wt=g,hr(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(In,n)}catch{}f=!0}return f}finally{Ct=l,ni.transition=r}}return!1}function Hp(n,r,l){r=Is(l,r),r=sp(n,r,1),n=mr(n,r,1),r=Cn(),n!==null&&(bo(n,1,r),Bn(n,r))}function $t(n,r,l){if(n.tag===3)Hp(n,n,l);else for(;r!==null;){if(r.tag===3){Hp(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(_r===null||!_r.has(f))){n=Is(l,n),n=op(r,n,1),r=mr(r,n,1),n=Cn(),r!==null&&(bo(r,1,n),Bn(r,n));break}}r=r.return}}function p0(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Cn(),n.pingedLanes|=n.suspendedLanes&l,ln===n&&(mn&l)===l&&(rn===4||rn===3&&(mn&130023424)===mn&&500>Fe()-Bu?Kr(n,0):ku|=l),Bn(n,r)}function Vp(n,r){r===0&&((n.mode&1)===0?r=1:(r=ir,ir<<=1,(ir&130023424)===0&&(ir=4194304)));var l=Cn();n=Hi(n,r),n!==null&&(bo(n,r,l),Bn(n,l))}function m0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Vp(n,l)}function g0(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,g=n.memoizedState;g!==null&&(l=g.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),Vp(n,l)}var Gp;Gp=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Un.current)Fn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Fn=!1,i0(n,r,l);Fn=(n.flags&131072)!==0}else Fn=!1,Gt&&(r.flags&1048576)!==0&&Mh(r,Ka,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;ul(n,r),n=r.pendingProps;var g=ws(r,xn.current);Ps(r,l),g=gu(null,r,f,n,g,l);var y=_u();return r.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,On(f)?(y=!0,Xa(r)):y=!1,r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,cu(r),g.updater=ll,r.stateNode=g,g._reactInternals=r,Eu(r,f,n,l),r=bu(null,r,f,!0,y,l)):(r.tag=0,Gt&&y&&Qc(r),Rn(null,r,g,l),r=r.child),r;case 16:f=r.elementType;e:{switch(ul(n,r),n=r.pendingProps,g=f._init,f=g(f._payload),r.type=f,g=r.tag=v0(f),n=di(f,n),g){case 0:r=Au(null,r,f,n,l);break e;case 1:r=mp(null,r,f,n,l);break e;case 11:r=up(null,r,f,n,l);break e;case 14:r=fp(null,r,f,di(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,g=r.pendingProps,g=r.elementType===f?g:di(f,g),Au(n,r,f,g,l);case 1:return f=r.type,g=r.pendingProps,g=r.elementType===f?g:di(f,g),mp(n,r,f,g,l);case 3:e:{if(gp(r),n===null)throw Error(t(387));f=r.pendingProps,y=r.memoizedState,g=y.element,Ph(n,r),tl(r,f,null,l);var T=r.memoizedState;if(f=T.element,y.isDehydrated)if(y={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=y,r.memoizedState=y,r.flags&256){g=Is(Error(t(423)),r),r=_p(n,r,f,l,g);break e}else if(f!==g){g=Is(Error(t(424)),r),r=_p(n,r,f,l,g);break e}else for(jn=ur(r.stateNode.containerInfo.firstChild),Wn=r,Gt=!0,fi=null,l=Ch(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Rs(),f===g){r=Gi(n,r,l);break e}Rn(n,r,f,l)}r=r.child}return r;case 5:return Dh(r),n===null&&nu(r),f=r.type,g=r.pendingProps,y=n!==null?n.memoizedProps:null,T=g.children,Yc(f,g)?T=null:y!==null&&Yc(f,y)&&(r.flags|=32),pp(n,r),Rn(n,r,T,l),r.child;case 6:return n===null&&nu(r),null;case 13:return vp(n,r,l);case 4:return uu(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=Cs(r,null,f,l):Rn(n,r,f,l),r.child;case 11:return f=r.type,g=r.pendingProps,g=r.elementType===f?g:di(f,g),up(n,r,f,g,l);case 7:return Rn(n,r,r.pendingProps,l),r.child;case 8:return Rn(n,r,r.pendingProps.children,l),r.child;case 12:return Rn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,g=r.pendingProps,y=r.memoizedProps,T=g.value,Ot(Ja,f._currentValue),f._currentValue=T,y!==null)if(ui(y.value,T)){if(y.children===g.children&&!Un.current){r=Gi(n,r,l);break e}}else for(y=r.child,y!==null&&(y.return=r);y!==null;){var O=y.dependencies;if(O!==null){T=y.child;for(var z=O.firstContext;z!==null;){if(z.context===f){if(y.tag===1){z=Vi(-1,l&-l),z.tag=2;var re=y.updateQueue;if(re!==null){re=re.shared;var ge=re.pending;ge===null?z.next=z:(z.next=ge.next,ge.next=z),re.pending=z}}y.lanes|=l,z=y.alternate,z!==null&&(z.lanes|=l),au(y.return,l,r),O.lanes|=l;break}z=z.next}}else if(y.tag===10)T=y.type===r.type?null:y.child;else if(y.tag===18){if(T=y.return,T===null)throw Error(t(341));T.lanes|=l,O=T.alternate,O!==null&&(O.lanes|=l),au(T,l,r),T=y.sibling}else T=y.child;if(T!==null)T.return=y;else for(T=y;T!==null;){if(T===r){T=null;break}if(y=T.sibling,y!==null){y.return=T.return,T=y;break}T=T.return}y=T}Rn(n,r,g.children,l),r=r.child}return r;case 9:return g=r.type,f=r.pendingProps.children,Ps(r,l),g=ei(g),f=f(g),r.flags|=1,Rn(n,r,f,l),r.child;case 14:return f=r.type,g=di(f,r.pendingProps),g=di(f.type,g),fp(n,r,f,g,l);case 15:return dp(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,g=r.pendingProps,g=r.elementType===f?g:di(f,g),ul(n,r),r.tag=1,On(f)?(n=!0,Xa(r)):n=!1,Ps(r,l),ip(r,f,g),Eu(r,f,g,l),bu(null,r,f,!0,n,l);case 19:return xp(n,r,l);case 22:return hp(n,r,l)}throw Error(t(156,r.tag))};function Wp(n,r){return se(n,r)}function _0(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,r,l,f){return new _0(n,r,l,f)}function Yu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function v0(n){if(typeof n=="function")return Yu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===le)return 11;if(n===Z)return 14}return 2}function Sr(n,r){var l=n.alternate;return l===null?(l=ii(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Sl(n,r,l,f,g,y){var T=2;if(f=n,typeof n=="function")Yu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return Zr(l.children,g,y,r);case ce:T=8,g|=8;break;case R:return n=ii(12,l,r,g|2),n.elementType=R,n.lanes=y,n;case he:return n=ii(13,l,r,g),n.elementType=he,n.lanes=y,n;case V:return n=ii(19,l,r,g),n.elementType=V,n.lanes=y,n;case ee:return Ml(l,g,y,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:T=10;break e;case ae:T=9;break e;case le:T=11;break e;case Z:T=14;break e;case ie:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ii(T,l,r,g),r.elementType=n,r.type=f,r.lanes=y,r}function Zr(n,r,l,f){return n=ii(7,n,f,r),n.lanes=l,n}function Ml(n,r,l,f){return n=ii(22,n,f,r),n.elementType=ee,n.lanes=l,n.stateNode={isHidden:!1},n}function qu(n,r,l){return n=ii(6,n,null,r),n.lanes=l,n}function Ku(n,r,l){return r=ii(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function y0(n,r,l,f,g){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ms(0),this.expirationTimes=ms(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ms(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function $u(n,r,l,f,g,y,T,O,z){return n=new y0(n,r,l,O,z),r===1?(r=1,y===!0&&(r|=8)):r=0,y=ii(3,null,null,r),n.current=y,y.stateNode=n,y.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(y),n}function x0(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function jp(n){if(!n)return dr;n=n._reactInternals;e:{if(Ui(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(On(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(On(l))return yh(n,l,r)}return r}function Xp(n,r,l,f,g,y,T,O,z){return n=$u(l,f,!0,n,g,y,T,O,z),n.context=jp(null),l=n.current,f=Cn(),g=yr(l),y=Vi(f,g),y.callback=r??null,mr(l,y,g),n.current.lanes=g,bo(n,g,f),Bn(n,f),n}function El(n,r,l,f){var g=r.current,y=Cn(),T=yr(g);return l=jp(l),r.context===null?r.context=l:r.pendingContext=l,r=Vi(y,T),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=mr(g,r,T),n!==null&&(mi(n,g,T,y),el(n,g,T)),T}function Tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Yp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Zu(n,r){Yp(n,r),(n=n.alternate)&&Yp(n,r)}function S0(){return null}var qp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ju(n){this._internalRoot=n}wl.prototype.render=Ju.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));El(n,r,null,null)},wl.prototype.unmount=Ju.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;qr(function(){El(null,n,null,null)}),r[Fi]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Pd();n={blockedOn:null,target:n,priority:r};for(var l=0;l<ar.length&&r!==0&&r<ar[l].priority;l++);ar.splice(l,0,n),l===0&&Dd(n)}};function Qu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function M0(n,r,l,f,g){if(g){if(typeof f=="function"){var y=f;f=function(){var re=Tl(T);y.call(re)}}var T=Xp(r,f,n,0,null,!1,!1,"",Kp);return n._reactRootContainer=T,n[Fi]=T.current,Ho(n.nodeType===8?n.parentNode:n),qr(),T}for(;g=n.lastChild;)n.removeChild(g);if(typeof f=="function"){var O=f;f=function(){var re=Tl(z);O.call(re)}}var z=$u(n,0,!1,null,null,!1,!1,"",Kp);return n._reactRootContainer=z,n[Fi]=z.current,Ho(n.nodeType===8?n.parentNode:n),qr(function(){El(r,z,l,f)}),z}function bl(n,r,l,f,g){var y=l._reactRootContainer;if(y){var T=y;if(typeof g=="function"){var O=g;g=function(){var z=Tl(T);O.call(z)}}El(r,T,n,g)}else T=M0(l,r,n,g,f);return Tl(T)}Cd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Kt(r.pendingLanes);l!==0&&(Ec(r,l|1),Bn(r,Fe()),(wt&6)===0&&(Os=Fe()+500,hr()))}break;case 13:qr(function(){var f=Hi(n,1);if(f!==null){var g=Cn();mi(f,n,1,g)}}),Zu(n,1)}},Tc=function(n){if(n.tag===13){var r=Hi(n,134217728);if(r!==null){var l=Cn();mi(r,n,134217728,l)}Zu(n,134217728)}},Ld=function(n){if(n.tag===13){var r=yr(n),l=Hi(n,r);if(l!==null){var f=Cn();mi(l,n,r,f)}Zu(n,r)}},Pd=function(){return Ct},Nd=function(n,r){var l=Ct;try{return Ct=n,r()}finally{Ct=l}},_e=function(n,r,l){switch(r){case"input":if(Rt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var g=Wa(f);if(!g)throw Error(t(90));ne(f),Rt(f,g)}}}break;case"textarea":Me(n,l);break;case"select":r=l.value,r!=null&&te(n,!!l.multiple,r,!1)}},mt=Wu,gt=qr;var E0={usingClientEntryPoint:!1,Events:[Wo,Es,Wa,Qe,$e,Wu]},ra={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},T0={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=oe(n),n===null?null:n.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||S0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{In=Rl.inject(T0),Tt=Rl}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0,zn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(r))throw Error(t(200));return x0(n,r,null,l)},zn.createRoot=function(n,r){if(!Qu(n))throw Error(t(299));var l=!1,f="",g=qp;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),r=$u(n,1,!1,null,null,l,!1,f,g),n[Fi]=r.current,Ho(n.nodeType===8?n.parentNode:n),new Ju(r)},zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=oe(r),n=n===null?null:n.stateNode,n},zn.flushSync=function(n){return qr(n)},zn.hydrate=function(n,r,l){if(!Al(r))throw Error(t(200));return bl(null,n,r,!0,l)},zn.hydrateRoot=function(n,r,l){if(!Qu(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,g=!1,y="",T=qp;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=Xp(r,null,n,1,l??null,g,!1,y,T),n[Fi]=r.current,Ho(n),f)for(n=0;n<f.length;n++)l=f[n],g=l._getVersion,g=g(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,g]:r.mutableSourceEagerHydrationData.push(l,g);return new wl(r)},zn.render=function(n,r,l){if(!Al(r))throw Error(t(200));return bl(null,n,r,!1,l)},zn.unmountComponentAtNode=function(n){if(!Al(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){bl(null,null,n,!1,function(){n._reactRootContainer=null,n[Fi]=null})}),!0):!1},zn.unstable_batchedUpdates=Wu,zn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Al(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return bl(n,r,l,!1,f)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var im;function D0(){if(im)return nf.exports;im=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),nf.exports=I0(),nf.exports}var rm;function U0(){if(rm)return Cl;rm=1;var o=D0();return Cl.createRoot=o.createRoot,Cl.hydrateRoot=o.hydrateRoot,Cl}var O0=U0();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ad="160",ks={ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},F0=0,sm=1,k0=2,a_=1,B0=2,Zi=3,er=0,Vn=1,xi=2,Ir=0,oo=1,om=2,am=3,lm=4,z0=5,rs=100,H0=101,V0=102,cm=103,um=104,G0=200,W0=201,j0=202,X0=203,jf=204,Xf=205,Y0=206,q0=207,K0=208,$0=209,Z0=210,J0=211,Q0=212,ey=213,ty=214,ny=0,iy=1,ry=2,uc=3,sy=4,oy=5,ay=6,ly=7,ld=0,cy=1,uy=2,Dr=0,fy=1,dy=2,hy=3,py=4,my=5,gy=6,fm="attached",_y="detached",l_=300,co=301,uo=302,Yf=303,qf=304,_c=306,fo=1e3,ai=1001,fc=1002,fn=1003,Kf=1004,ac=1005,Hn=1006,c_=1007,cs=1008,Ur=1009,vy=1010,yy=1011,cd=1012,u_=1013,Lr=1014,Ji=1015,va=1016,f_=1017,d_=1018,os=1020,xy=1021,li=1023,Sy=1024,My=1025,as=1026,ho=1027,Ey=1028,h_=1029,Ty=1030,p_=1031,m_=1033,of=33776,af=33777,lf=33778,cf=33779,dm=35840,hm=35841,pm=35842,mm=35843,g_=36196,gm=37492,_m=37496,vm=37808,ym=37809,xm=37810,Sm=37811,Mm=37812,Em=37813,Tm=37814,wm=37815,Am=37816,bm=37817,Rm=37818,Cm=37819,Lm=37820,Pm=37821,uf=36492,Nm=36494,Im=36495,wy=36283,Dm=36284,Um=36285,Om=36286,ya=2300,po=2301,ff=2302,Fm=2400,km=2401,Bm=2402,Ay=2500,by=0,__=1,$f=2,v_=3e3,ls=3001,Ry=3200,Cy=3201,ud=0,Ly=1,ci="",Zt="srgb",dn="srgb-linear",fd="display-p3",vc="display-p3-linear",dc="linear",Bt="srgb",hc="rec709",pc="p3",zs=7680,zm=519,Py=512,Ny=513,Iy=514,y_=515,Dy=516,Uy=517,Oy=518,Fy=519,Zf=35044,Hm="300 es",Jf=1035,Qi=2e3,mc=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vm=1234567;const pa=Math.PI/180,mo=180/Math.PI;function Si(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function gn(o,e,t){return Math.max(e,Math.min(t,o))}function dd(o,e){return(o%e+e)%e}function ky(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function By(o,e,t){return o!==e?(t-o)/(e-o):0}function ma(o,e,t){return(1-t)*o+t*e}function zy(o,e,t,i){return ma(o,e,1-Math.exp(-t*i))}function Hy(o,e=1){return e-Math.abs(dd(o,e*2)-e)}function Vy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Gy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Wy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function jy(o,e){return o+Math.random()*(e-o)}function Xy(o){return o*(.5-Math.random())}function Yy(o){o!==void 0&&(Vm=o);let e=Vm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qy(o){return o*pa}function Ky(o){return o*mo}function Qf(o){return(o&o-1)===0&&o!==0}function $y(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function gc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Zy(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),d=c(t/2),h=a((e+i)/2),p=c((e+i)/2),m=a((e-i)/2),_=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*p,d*m,d*_,u*h);break;case"YZY":o.set(d*_,u*p,d*m,u*h);break;case"ZXZ":o.set(d*m,d*_,u*p,u*h);break;case"XZX":o.set(u*p,d*M,d*x,u*h);break;case"YXY":o.set(d*x,u*p,d*M,u*h);break;case"ZYZ":o.set(d*M,d*x,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const x_={DEG2RAD:pa,RAD2DEG:mo,generateUUID:Si,clamp:gn,euclideanModulo:dd,mapLinear:ky,inverseLerp:By,lerp:ma,damp:zy,pingpong:Hy,smoothstep:Vy,smootherstep:Gy,randInt:Wy,randFloat:jy,randFloatSpread:Xy,seededRandom:Yy,degToRad:qy,radToDeg:Ky,isPowerOfTwo:Qf,ceilPowerOfTwo:$y,floorPowerOfTwo:gc,setQuaternionFromProperEuler:Zy,normalize:Pt,denormalize:Ci};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(e,t,i,s,a,c,u,d,h){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,h)}set(e,t,i,s,a,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],m=i[7],_=i[2],x=i[5],M=i[8],E=s[0],S=s[3],v=s[6],b=s[1],w=s[4],C=s[7],k=s[2],D=s[5],U=s[8];return a[0]=c*E+u*b+d*k,a[3]=c*S+u*w+d*D,a[6]=c*v+u*C+d*U,a[1]=h*E+p*b+m*k,a[4]=h*S+p*w+m*D,a[7]=h*v+p*C+m*U,a[2]=_*E+x*b+M*k,a[5]=_*S+x*w+M*D,a[8]=_*v+x*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*d+s*a*h-s*c*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=p*c-u*h,_=u*d-p*a,x=h*a-c*d,M=t*m+i*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=m*E,e[1]=(s*h-p*i)*E,e[2]=(u*i-s*c)*E,e[3]=_*E,e[4]=(p*t-s*d)*E,e[5]=(s*a-u*t)*E,e[6]=x*E,e[7]=(i*d-h*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-s*h,s*d,-s*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(df.makeScale(e,t)),this}rotate(e){return this.premultiply(df.makeRotation(-e)),this}translate(e,t){return this.premultiply(df.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const df=new yt;function S_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function xa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Jy(){const o=xa("canvas");return o.style.display="block",o}const Gm={};function ga(o){o in Gm||(Gm[o]=!0,console.warn(o))}const Wm=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jm=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ll={[dn]:{transfer:dc,primaries:hc,toReference:o=>o,fromReference:o=>o},[Zt]:{transfer:Bt,primaries:hc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[vc]:{transfer:dc,primaries:pc,toReference:o=>o.applyMatrix3(jm),fromReference:o=>o.applyMatrix3(Wm)},[fd]:{transfer:Bt,primaries:pc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(jm),fromReference:o=>o.applyMatrix3(Wm).convertLinearToSRGB()}},Qy=new Set([dn,vc]),bt={enabled:!0,_workingColorSpace:dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Qy.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const i=Ll[e].toReference,s=Ll[t].fromReference;return s(i(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Ll[o].primaries},getTransfer:function(o){return o===ci?dc:Ll[o].transfer}};function ao(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function hf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Hs;class M_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=xa("canvas")),Hs.width=e.width,Hs.height=e.height;const i=Hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=ao(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ao(t[i]/255)*255):t[i]=ao(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ex=0;class E_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(pf(s[c].image)):a.push(pf(s[c]))}else a=pf(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function pf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?M_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tx=0;class _n extends hs{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=ai,s=ai,a=Hn,c=cs,u=li,d=Ur,h=_n.DEFAULT_ANISOTROPY,p=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Si(),this.name="",this.source=new E_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===ls?Zt:ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zt?ls:v_}set encoding(e){ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ls?Zt:ci}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=l_;_n.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,h=d[0],p=d[4],m=d[8],_=d[1],x=d[5],M=d[9],E=d[2],S=d[6],v=d[10];if(Math.abs(p-_)<.01&&Math.abs(m-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,C=(x+1)/2,k=(v+1)/2,D=(p+_)/4,U=(m+E)/4,ce=(M+S)/4;return w>C&&w>k?w<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(w),s=D/i,a=U/i):C>k?C<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),i=D/s,a=ce/s):k<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(k),i=U/a,s=ce/a),this.set(i,s,a,t),this}let b=Math.sqrt((S-M)*(S-M)+(m-E)*(m-E)+(_-p)*(_-p));return Math.abs(b)<.001&&(b=1),this.x=(S-M)/b,this.y=(m-E)/b,this.z=(_-p)/b,this.w=Math.acos((h+x+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nx extends hs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(ga("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ls?Zt:ci),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new E_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends nx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class T_ extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ix extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let d=i[s+0],h=i[s+1],p=i[s+2],m=i[s+3];const _=a[c+0],x=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(m!==E||d!==_||h!==x||p!==M){let S=1-u;const v=d*_+h*x+p*M+m*E,b=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const k=Math.sqrt(w),D=Math.atan2(k,v*b);S=Math.sin(S*D)/k,u=Math.sin(u*D)/k}const C=u*b;if(d=d*S+_*C,h=h*S+x*C,p=p*S+M*C,m=m*S+E*C,S===1-u){const k=1/Math.sqrt(d*d+h*h+p*p+m*m);d*=k,h*=k,p*=k,m*=k}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],d=i[s+1],h=i[s+2],p=i[s+3],m=a[c],_=a[c+1],x=a[c+2],M=a[c+3];return e[t]=u*M+p*m+d*x-h*_,e[t+1]=d*M+p*_+h*m-u*x,e[t+2]=h*M+p*x+u*_-d*m,e[t+3]=p*M-u*m-d*_-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(s/2),m=u(a/2),_=d(i/2),x=d(s/2),M=d(a/2);switch(c){case"XYZ":this._x=_*p*m+h*x*M,this._y=h*x*m-_*p*M,this._z=h*p*M+_*x*m,this._w=h*p*m-_*x*M;break;case"YXZ":this._x=_*p*m+h*x*M,this._y=h*x*m-_*p*M,this._z=h*p*M-_*x*m,this._w=h*p*m+_*x*M;break;case"ZXY":this._x=_*p*m-h*x*M,this._y=h*x*m+_*p*M,this._z=h*p*M+_*x*m,this._w=h*p*m-_*x*M;break;case"ZYX":this._x=_*p*m-h*x*M,this._y=h*x*m+_*p*M,this._z=h*p*M-_*x*m,this._w=h*p*m+_*x*M;break;case"YZX":this._x=_*p*m+h*x*M,this._y=h*x*m+_*p*M,this._z=h*p*M-_*x*m,this._w=h*p*m-_*x*M;break;case"XZY":this._x=_*p*m-h*x*M,this._y=h*x*m-_*p*M,this._z=h*p*M+_*x*m,this._w=h*p*m+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],m=t[10],_=i+u+m;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(p-d)*x,this._y=(a-h)*x,this._z=(c-s)*x}else if(i>u&&i>m){const x=2*Math.sqrt(1+i-u-m);this._w=(p-d)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+h)/x}else if(u>m){const x=2*Math.sqrt(1+u-i-m);this._w=(a-h)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+m-i-u);this._w=(c-s)/x,this._x=(a+h)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+s*h-a*d,this._y=s*p+c*d+a*u-i*h,this._z=a*p+c*h+i*d-s*u,this._w=c*p-i*u-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,u),m=Math.sin((1-t)*p)/h,_=Math.sin(t*p)/h;return this._w=c*m+this._w*_,this._x=i*m+this._x*_,this._y=s*m+this._y*_,this._z=a*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(a),i*Math.cos(a),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*s-u*i),p=2*(u*t-a*s),m=2*(a*i-c*t);return this.x=t+d*h+c*m-u*p,this.y=i+d*p+u*h-a*m,this.z=s+d*m+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=s*d-a*u,this.y=a*c-i*d,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mf.copy(this).projectOnVector(e),this.sub(mf)}reflect(e){return this.sub(mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mf=new H,Xm=new Pi;class $n{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,gi):gi.fromBufferAttribute(a,c),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pl.copy(i.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Nl.subVectors(this.max,oa),Vs.subVectors(e.a,oa),Gs.subVectors(e.b,oa),Ws.subVectors(e.c,oa),Er.subVectors(Gs,Vs),Tr.subVectors(Ws,Gs),Jr.subVectors(Vs,Ws);let t=[0,-Er.z,Er.y,0,-Tr.z,Tr.y,0,-Jr.z,Jr.y,Er.z,0,-Er.x,Tr.z,0,-Tr.x,Jr.z,0,-Jr.x,-Er.y,Er.x,0,-Tr.y,Tr.x,0,-Jr.y,Jr.x,0];return!gf(t,Vs,Gs,Ws,Nl)||(t=[1,0,0,0,1,0,0,0,1],!gf(t,Vs,Gs,Ws,Nl))?!1:(Il.crossVectors(Er,Tr),t=[Il.x,Il.y,Il.z],gf(t,Vs,Gs,Ws,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ji=[new H,new H,new H,new H,new H,new H,new H,new H],gi=new H,Pl=new $n,Vs=new H,Gs=new H,Ws=new H,Er=new H,Tr=new H,Jr=new H,oa=new H,Nl=new H,Il=new H,Qr=new H;function gf(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){Qr.fromArray(o,a);const u=s.x*Math.abs(Qr.x)+s.y*Math.abs(Qr.y)+s.z*Math.abs(Qr.z),d=e.dot(Qr),h=t.dot(Qr),p=i.dot(Qr);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const rx=new $n,aa=new H,_f=new H;class Ni{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rx.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const t=aa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(aa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(_f)),this.expandByPoint(aa.copy(e.center).sub(_f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new H,vf=new H,Dl=new H,wr=new H,yf=new H,Ul=new H,xf=new H;class xo{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){vf.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(vf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Dl),u=wr.dot(this.direction),d=-wr.dot(Dl),h=wr.lengthSq(),p=Math.abs(1-c*c);let m,_,x,M;if(p>0)if(m=c*d-u,_=c*u-d,M=a*p,m>=0)if(_>=-M)if(_<=M){const E=1/p;m*=E,_*=E,x=m*(m+c*_+2*u)+_*(c*m+_+2*d)+h}else _=a,m=Math.max(0,-(c*_+u)),x=-m*m+_*(_+2*d)+h;else _=-a,m=Math.max(0,-(c*_+u)),x=-m*m+_*(_+2*d)+h;else _<=-M?(m=Math.max(0,-(-c*a+u)),_=m>0?-a:Math.min(Math.max(-a,-d),a),x=-m*m+_*(_+2*d)+h):_<=M?(m=0,_=Math.min(Math.max(-a,-d),a),x=_*(_+2*d)+h):(m=Math.max(0,-(c*a+u)),_=m>0?a:Math.min(Math.max(-a,-d),a),x=-m*m+_*(_+2*d)+h);else _=c>0?-a:a,m=Math.max(0,-(c*_+u)),x=-m*m+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(vf).addScaledVector(Dl,_),x}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const i=Xi.dot(this.direction),s=Xi.dot(Xi)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),p>=0?(a=(e.min.y-_.y)*p,c=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,c=(e.min.y-_.y)*p),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),m>=0?(u=(e.min.z-_.z)*m,d=(e.max.z-_.z)*m):(u=(e.max.z-_.z)*m,d=(e.min.z-_.z)*m),i>d||u>s)||((u>i||i!==i)&&(i=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,i,s,a){yf.subVectors(t,e),Ul.subVectors(i,e),xf.crossVectors(yf,Ul);let c=this.direction.dot(xf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;wr.subVectors(this.origin,e);const d=u*this.direction.dot(Ul.crossVectors(wr,Ul));if(d<0)return null;const h=u*this.direction.dot(yf.cross(wr));if(h<0||d+h>c)return null;const p=-u*wr.dot(xf);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,s,a,c,u,d,h,p,m,_,x,M,E,S){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,h,p,m,_,x,M,E,S)}set(e,t,i,s,a,c,u,d,h,p,m,_,x,M,E,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=s,v[1]=a,v[5]=c,v[9]=u,v[13]=d,v[2]=h,v[6]=p,v[10]=m,v[14]=_,v[3]=x,v[7]=M,v[11]=E,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/js.setFromMatrixColumn(e,0).length(),a=1/js.setFromMatrixColumn(e,1).length(),c=1/js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(s),h=Math.sin(s),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const _=c*p,x=c*m,M=u*p,E=u*m;t[0]=d*p,t[4]=-d*m,t[8]=h,t[1]=x+M*h,t[5]=_-E*h,t[9]=-u*d,t[2]=E-_*h,t[6]=M+x*h,t[10]=c*d}else if(e.order==="YXZ"){const _=d*p,x=d*m,M=h*p,E=h*m;t[0]=_+E*u,t[4]=M*u-x,t[8]=c*h,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=x*u-M,t[6]=E+_*u,t[10]=c*d}else if(e.order==="ZXY"){const _=d*p,x=d*m,M=h*p,E=h*m;t[0]=_-E*u,t[4]=-c*m,t[8]=M+x*u,t[1]=x+M*u,t[5]=c*p,t[9]=E-_*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const _=c*p,x=c*m,M=u*p,E=u*m;t[0]=d*p,t[4]=M*h-x,t[8]=_*h+E,t[1]=d*m,t[5]=E*h+_,t[9]=x*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,x=c*h,M=u*d,E=u*h;t[0]=d*p,t[4]=E-_*m,t[8]=M*m+x,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=x*m+M,t[10]=_-E*m}else if(e.order==="XZY"){const _=c*d,x=c*h,M=u*d,E=u*h;t[0]=d*p,t[4]=-m,t[8]=h*p,t[1]=_*m+E,t[5]=c*p,t[9]=x*m-M,t[2]=M*m-x,t[6]=u*p,t[10]=E*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sx,e,ox)}lookAt(e,t,i){const s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ar.crossVectors(i,Yn),Ar.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ar.crossVectors(i,Yn)),Ar.normalize(),Ol.crossVectors(Yn,Ar),s[0]=Ar.x,s[4]=Ol.x,s[8]=Yn.x,s[1]=Ar.y,s[5]=Ol.y,s[9]=Yn.y,s[2]=Ar.z,s[6]=Ol.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],m=i[5],_=i[9],x=i[13],M=i[2],E=i[6],S=i[10],v=i[14],b=i[3],w=i[7],C=i[11],k=i[15],D=s[0],U=s[4],ce=s[8],R=s[12],N=s[1],ae=s[5],le=s[9],he=s[13],V=s[2],Z=s[6],ie=s[10],ee=s[14],j=s[3],$=s[7],X=s[11],I=s[15];return a[0]=c*D+u*N+d*V+h*j,a[4]=c*U+u*ae+d*Z+h*$,a[8]=c*ce+u*le+d*ie+h*X,a[12]=c*R+u*he+d*ee+h*I,a[1]=p*D+m*N+_*V+x*j,a[5]=p*U+m*ae+_*Z+x*$,a[9]=p*ce+m*le+_*ie+x*X,a[13]=p*R+m*he+_*ee+x*I,a[2]=M*D+E*N+S*V+v*j,a[6]=M*U+E*ae+S*Z+v*$,a[10]=M*ce+E*le+S*ie+v*X,a[14]=M*R+E*he+S*ee+v*I,a[3]=b*D+w*N+C*V+k*j,a[7]=b*U+w*ae+C*Z+k*$,a[11]=b*ce+w*le+C*ie+k*X,a[15]=b*R+w*he+C*ee+k*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],m=e[6],_=e[10],x=e[14],M=e[3],E=e[7],S=e[11],v=e[15];return M*(+a*d*m-s*h*m-a*u*_+i*h*_+s*u*x-i*d*x)+E*(+t*d*x-t*h*_+a*c*_-s*c*x+s*h*p-a*d*p)+S*(+t*h*m-t*u*x-a*c*m+i*c*x+a*u*p-i*h*p)+v*(-s*u*p-t*d*m+t*u*_+s*c*m-i*c*_+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=e[9],_=e[10],x=e[11],M=e[12],E=e[13],S=e[14],v=e[15],b=m*S*h-E*_*h+E*d*x-u*S*x-m*d*v+u*_*v,w=M*_*h-p*S*h-M*d*x+c*S*x+p*d*v-c*_*v,C=p*E*h-M*m*h+M*u*x-c*E*x-p*u*v+c*m*v,k=M*m*d-p*E*d-M*u*_+c*E*_+p*u*S-c*m*S,D=t*b+i*w+s*C+a*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/D;return e[0]=b*U,e[1]=(E*_*a-m*S*a-E*s*x+i*S*x+m*s*v-i*_*v)*U,e[2]=(u*S*a-E*d*a+E*s*h-i*S*h-u*s*v+i*d*v)*U,e[3]=(m*d*a-u*_*a-m*s*h+i*_*h+u*s*x-i*d*x)*U,e[4]=w*U,e[5]=(p*S*a-M*_*a+M*s*x-t*S*x-p*s*v+t*_*v)*U,e[6]=(M*d*a-c*S*a-M*s*h+t*S*h+c*s*v-t*d*v)*U,e[7]=(c*_*a-p*d*a+p*s*h-t*_*h-c*s*x+t*d*x)*U,e[8]=C*U,e[9]=(M*m*a-p*E*a-M*i*x+t*E*x+p*i*v-t*m*v)*U,e[10]=(c*E*a-M*u*a+M*i*h-t*E*h-c*i*v+t*u*v)*U,e[11]=(p*u*a-c*m*a-p*i*h+t*m*h+c*i*x-t*u*x)*U,e[12]=k*U,e[13]=(p*E*s-M*m*s+M*i*_-t*E*_-p*i*S+t*m*S)*U,e[14]=(M*u*s-c*E*s-M*i*d+t*E*d+c*i*S-t*u*S)*U,e[15]=(c*m*s-p*u*s+p*i*d-t*m*d-c*i*_+t*u*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-s*d,h*d+s*u,0,h*u+s*d,p*u+i,p*d-s*c,0,h*d-s*u,p*d+s*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,p=c+c,m=u+u,_=a*h,x=a*p,M=a*m,E=c*p,S=c*m,v=u*m,b=d*h,w=d*p,C=d*m,k=i.x,D=i.y,U=i.z;return s[0]=(1-(E+v))*k,s[1]=(x+C)*k,s[2]=(M-w)*k,s[3]=0,s[4]=(x-C)*D,s[5]=(1-(_+v))*D,s[6]=(S+b)*D,s[7]=0,s[8]=(M+w)*U,s[9]=(S-b)*U,s[10]=(1-(_+E))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=js.set(s[0],s[1],s[2]).length();const c=js.set(s[4],s[5],s[6]).length(),u=js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],_i.copy(this);const h=1/a,p=1/c,m=1/u;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=p,_i.elements[5]*=p,_i.elements[6]*=p,_i.elements[8]*=m,_i.elements[9]*=m,_i.elements[10]*=m,t.setFromRotationMatrix(_i),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=Qi){const d=this.elements,h=2*a/(t-e),p=2*a/(i-s),m=(t+e)/(t-e),_=(i+s)/(i-s);let x,M;if(u===Qi)x=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===mc)x=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=h,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=p,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=Qi){const d=this.elements,h=1/(t-e),p=1/(i-s),m=1/(c-a),_=(t+e)*h,x=(i+s)*p;let M,E;if(u===Qi)M=(c+a)*m,E=-2*m;else if(u===mc)M=a*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const js=new H,_i=new xt,sx=new H(0,0,0),ox=new H(1,1,1),Ar=new H,Ol=new H,Yn=new H,Ym=new xt,qm=new Pi;class yc{constructor(e=0,t=0,i=0,s=yc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],d=s[1],h=s[5],p=s[9],m=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(gn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-gn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ym,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yc.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ax=0;const Km=new H,Xs=new Pi,Yi=new xt,Fl=new H,la=new H,lx=new H,cx=new Pi,$m=new H(1,0,0),Zm=new H(0,1,0),Jm=new H(0,0,1),ux={type:"added"},fx={type:"removed"};class Yt extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new H,t=new yc,i=new Pi,s=new H(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new yt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Jm,e)}translateOnAxis(e,t){return Km.copy(e).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fl.copy(e):Fl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(la,Fl,this.up):Yi.lookAt(Fl,la,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Yi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ux)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++){const u=s[a];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const m=d[h];a(e.shapes,m)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),m=c(e.shapes),_=c(e.skeletons),x=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new H(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new H,qi=new H,Sf=new H,Ki=new H,Ys=new H,qs=new H,Qm=new H,Mf=new H,Ef=new H,Tf=new H;let kl=!1;class yi{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vi.subVectors(e,t),s.cross(vi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){vi.subVectors(s,t),qi.subVectors(i,t),Sf.subVectors(e,t);const c=vi.dot(vi),u=vi.dot(qi),d=vi.dot(Sf),h=qi.dot(qi),p=qi.dot(Sf),m=c*h-u*u;if(m===0)return a.set(0,0,0),null;const _=1/m,x=(h*d-u*p)*_,M=(c*p-u*d)*_;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getUV(e,t,i,s,a,c,u,d){return kl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kl=!0),this.getInterpolation(e,t,i,s,a,c,u,d)}static getInterpolation(e,t,i,s,a,c,u,d){return this.getBarycoord(e,t,i,s,Ki)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Ki.x),d.addScaledVector(c,Ki.y),d.addScaledVector(u,Ki.z),d)}static isFrontFacing(e,t,i,s){return vi.subVectors(i,t),qi.subVectors(e,t),vi.cross(qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),vi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,a){return kl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kl=!0),yi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}getInterpolation(e,t,i,s,a){return yi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;Ys.subVectors(s,i),qs.subVectors(a,i),Mf.subVectors(e,i);const d=Ys.dot(Mf),h=qs.dot(Mf);if(d<=0&&h<=0)return t.copy(i);Ef.subVectors(e,s);const p=Ys.dot(Ef),m=qs.dot(Ef);if(p>=0&&m<=p)return t.copy(s);const _=d*m-p*h;if(_<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(Ys,c);Tf.subVectors(e,a);const x=Ys.dot(Tf),M=qs.dot(Tf);if(M>=0&&x<=M)return t.copy(a);const E=x*h-d*M;if(E<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(i).addScaledVector(qs,u);const S=p*M-x*m;if(S<=0&&m-p>=0&&x-M>=0)return Qm.subVectors(a,s),u=(m-p)/(m-p+(x-M)),t.copy(s).addScaledVector(Qm,u);const v=1/(S+E+_);return c=E*v,u=_*v,t.copy(i).addScaledVector(Ys,c).addScaledVector(qs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function wf(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=bt.workingColorSpace){if(e=dd(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=wf(c,a,e+1/3),this.g=wf(c,a,e),this.b=wf(c,a,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=Zt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=w_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}copyLinearToSRGB(e){return this.r=hf(e.r),this.g=hf(e.g),this.b=hf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return bt.fromWorkingColorSpace(wn.copy(this),e),Math.round(gn(wn.r*255,0,255))*65536+Math.round(gn(wn.g*255,0,255))*256+Math.round(gn(wn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,s=wn.g,a=wn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const m=c-u;switch(h=p<=.5?m/(c+u):m/(2-c-u),c){case i:d=(s-a)/m+(s<a?6:0);break;case s:d=(a-i)/m+2;break;case a:d=(i-s)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Zt){bt.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,s=wn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Bl);const i=ma(br.h,Bl.h,t),s=ma(br.s,Bl.s,t),a=ma(br.l,Bl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new et;et.NAMES=w_;let dx=0;class Kn extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=oo,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jf,this.blendDst=Xf,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jf&&(i.blendSrc=this.blendSrc),this.blendDst!==Xf&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Li extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new H,zl=new nt;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),a=Pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zf&&(e.usage=this.usage),e}}class A_ extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class b_ extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nt extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hx=0;const ri=new xt,Af=new Yt,Ks=new H,qn=new $n,ca=new $n,un=new H;class hn extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S_(e)?b_:A_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new yt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return Af.lookAt(e),Af.updateMatrix(),this.applyMatrix4(Af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];qn.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];ca.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(qn.min,ca.min),qn.expandByPoint(un),un.addVectors(qn.max,ca.max),qn.expandByPoint(un)):(qn.expandByPoint(ca.min),qn.expandByPoint(ca.max))}qn.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)un.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(un));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)un.fromBufferAttribute(u,h),d&&(Ks.fromBufferAttribute(e,h),un.add(Ks)),s=Math.max(s,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,a=t.normal.array,c=t.uv.array,u=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*u),4));const d=this.getAttribute("tangent").array,h=[],p=[];for(let N=0;N<u;N++)h[N]=new H,p[N]=new H;const m=new H,_=new H,x=new H,M=new nt,E=new nt,S=new nt,v=new H,b=new H;function w(N,ae,le){m.fromArray(s,N*3),_.fromArray(s,ae*3),x.fromArray(s,le*3),M.fromArray(c,N*2),E.fromArray(c,ae*2),S.fromArray(c,le*2),_.sub(m),x.sub(m),E.sub(M),S.sub(M);const he=1/(E.x*S.y-S.x*E.y);isFinite(he)&&(v.copy(_).multiplyScalar(S.y).addScaledVector(x,-E.y).multiplyScalar(he),b.copy(x).multiplyScalar(E.x).addScaledVector(_,-S.x).multiplyScalar(he),h[N].add(v),h[ae].add(v),h[le].add(v),p[N].add(b),p[ae].add(b),p[le].add(b))}let C=this.groups;C.length===0&&(C=[{start:0,count:i.length}]);for(let N=0,ae=C.length;N<ae;++N){const le=C[N],he=le.start,V=le.count;for(let Z=he,ie=he+V;Z<ie;Z+=3)w(i[Z+0],i[Z+1],i[Z+2])}const k=new H,D=new H,U=new H,ce=new H;function R(N){U.fromArray(a,N*3),ce.copy(U);const ae=h[N];k.copy(ae),k.sub(U.multiplyScalar(U.dot(ae))).normalize(),D.crossVectors(ce,ae);const he=D.dot(p[N])<0?-1:1;d[N*4]=k.x,d[N*4+1]=k.y,d[N*4+2]=k.z,d[N*4+3]=he}for(let N=0,ae=C.length;N<ae;++N){const le=C[N],he=le.start,V=le.count;for(let Z=he,ie=he+V;Z<ie;Z+=3)R(i[Z+0]),R(i[Z+1]),R(i[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new H,a=new H,c=new H,u=new H,d=new H,h=new H,p=new H,m=new H;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),p.subVectors(c,a),m.subVectors(s,a),p.cross(m),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),u.add(p),d.add(p),h.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),p.subVectors(c,a),m.subVectors(s,a),p.cross(m),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,m=u.normalized,_=new h.constructor(d.length*p);let x=0,M=0;for(let E=0,S=d.length;E<S;E++){u.isInterleavedBufferAttribute?x=d[E]*u.data.stride+u.offset:x=d[E]*p;for(let v=0;v<p;v++)_[M++]=h[x++]}return new vn(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,i=this.index.array,s=this.attributes;for(const u in s){const d=s[u],h=e(d,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let p=0,m=h.length;p<m;p++){const _=h[p],x=e(_,i);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let m=0,_=h.length;m<_;m++){const x=h[m];p.push(x.toJSON(e.data))}p.length>0&&(s[d]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],m=a[h];for(let _=0,x=m.length;_<x;_++)p.push(m[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eg=new xt,es=new xo,Hl=new Ni,tg=new H,$s=new H,Zs=new H,Js=new H,bf=new H,Vl=new H,Gl=new nt,Wl=new nt,jl=new nt,ng=new H,ig=new H,rg=new H,Xl=new H,Yl=new H;class Xt extends Yt{constructor(e=new hn,t=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Vl.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=u[d],m=a[d];p!==0&&(bf.fromBufferAttribute(m,e),c?Vl.addScaledVector(bf,p):Vl.addScaledVector(bf.sub(t),p))}t.add(Vl)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(a),es.copy(e.ray).recast(e.near),!(Hl.containsPoint(es.origin)===!1&&(es.intersectSphere(Hl,tg)===null||es.origin.distanceToSquared(tg)>(e.far-e.near)**2))&&(eg.copy(a).invert(),es.copy(e.ray).applyMatrix4(eg),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,_=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],v=c[S.materialIndex],b=Math.max(S.start,x.start),w=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let C=b,k=w;C<k;C+=3){const D=u.getX(C),U=u.getX(C+1),ce=u.getX(C+2);s=ql(this,v,e,i,h,p,m,D,U,ce),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(u.count,x.start+x.count);for(let S=M,v=E;S<v;S+=3){const b=u.getX(S),w=u.getX(S+1),C=u.getX(S+2);s=ql(this,c,e,i,h,p,m,b,w,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],v=c[S.materialIndex],b=Math.max(S.start,x.start),w=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=b,k=w;C<k;C+=3){const D=C,U=C+1,ce=C+2;s=ql(this,v,e,i,h,p,m,D,U,ce),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let S=M,v=E;S<v;S+=3){const b=S,w=S+1,C=S+2;s=ql(this,c,e,i,h,p,m,b,w,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function px(o,e,t,i,s,a,c,u){let d;if(e.side===Vn?d=i.intersectTriangle(c,a,s,!0,u):d=i.intersectTriangle(s,a,c,e.side===er,u),d===null)return null;Yl.copy(u),Yl.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Yl);return h<t.near||h>t.far?null:{distance:h,point:Yl.clone(),object:o}}function ql(o,e,t,i,s,a,c,u,d,h){o.getVertexPosition(u,$s),o.getVertexPosition(d,Zs),o.getVertexPosition(h,Js);const p=px(o,e,t,i,$s,Zs,Js,Xl);if(p){s&&(Gl.fromBufferAttribute(s,u),Wl.fromBufferAttribute(s,d),jl.fromBufferAttribute(s,h),p.uv=yi.getInterpolation(Xl,$s,Zs,Js,Gl,Wl,jl,new nt)),a&&(Gl.fromBufferAttribute(a,u),Wl.fromBufferAttribute(a,d),jl.fromBufferAttribute(a,h),p.uv1=yi.getInterpolation(Xl,$s,Zs,Js,Gl,Wl,jl,new nt),p.uv2=p.uv1),c&&(ng.fromBufferAttribute(c,u),ig.fromBufferAttribute(c,d),rg.fromBufferAttribute(c,h),p.normal=yi.getInterpolation(Xl,$s,Zs,Js,ng,ig,rg,new H),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:d,c:h,normal:new H,materialIndex:0};yi.getNormal($s,Zs,Js,m.normal),p.face=m}return p}class So extends hn{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],p=[],m=[];let _=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(p,3)),this.setAttribute("uv",new Nt(m,2));function M(E,S,v,b,w,C,k,D,U,ce,R){const N=C/U,ae=k/ce,le=C/2,he=k/2,V=D/2,Z=U+1,ie=ce+1;let ee=0,j=0;const $=new H;for(let X=0;X<ie;X++){const I=X*ae-he;for(let W=0;W<Z;W++){const Y=W*N-le;$[E]=Y*b,$[S]=I*w,$[v]=V,h.push($.x,$.y,$.z),$[E]=0,$[S]=0,$[v]=D>0?1:-1,p.push($.x,$.y,$.z),m.push(W/U),m.push(1-X/ce),ee+=1}}for(let X=0;X<ce;X++)for(let I=0;I<U;I++){const W=_+I+Z*X,Y=_+I+Z*(X+1),J=_+(I+1)+Z*(X+1),fe=_+(I+1)+Z*X;d.push(W,Y,fe),d.push(Y,J,fe),j+=6}u.addGroup(x,j,R),x+=j,_+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pn(o){const e={};for(let t=0;t<o.length;t++){const i=go(o[t]);for(const s in i)e[s]=i[s]}return e}function mx(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function R_(o){return o.getRenderTarget()===null?o.outputColorSpace:bt.workingColorSpace}const gx={clone:go,merge:Pn};var _x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_x,this.fragmentShader=vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class C_ extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nn extends C_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*i/h,s*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,eo=1;class yx extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(Qs,eo,e,t);s.layers=this.layers,this.add(s);const a=new Nn(Qs,eo,e,t);a.layers=this.layers,this.add(a);const c=new Nn(Qs,eo,e,t);c.layers=this.layers,this.add(c);const u=new Nn(Qs,eo,e,t);u.layers=this.layers,this.add(u);const d=new Nn(Qs,eo,e,t);d.layers=this.layers,this.add(d);const h=new Nn(Qs,eo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(m,_,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class L_ extends _n{constructor(e,t,i,s,a,c,u,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:co,super(e,t,i,s,a,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xx extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(ga("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ls?Zt:ci),this.texture=new L_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new So(5,5,5),a=new fs({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:Ir});a.uniforms.tEquirect.value=t;const c=new Xt(s,a),u=t.minFilter;return t.minFilter===cs&&(t.minFilter=Hn),new yx(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}const Rf=new H,Sx=new H,Mx=new yt;class bi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Rf.subVectors(i,t).cross(Sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mx.getNormalMatrix(e),s=this.coplanarPoint(Rf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Ni,Kl=new H;class pd{constructor(e=new bi,t=new bi,i=new bi,s=new bi,a=new bi,c=new bi){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qi){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],d=s[3],h=s[4],p=s[5],m=s[6],_=s[7],x=s[8],M=s[9],E=s[10],S=s[11],v=s[12],b=s[13],w=s[14],C=s[15];if(i[0].setComponents(d-a,_-h,S-x,C-v).normalize(),i[1].setComponents(d+a,_+h,S+x,C+v).normalize(),i[2].setComponents(d+c,_+p,S+M,C+b).normalize(),i[3].setComponents(d-c,_-p,S-M,C-b).normalize(),i[4].setComponents(d-u,_-m,S-E,C-w).normalize(),t===Qi)i[5].setComponents(d+u,_+m,S+E,C+w).normalize();else if(t===mc)i[5].setComponents(u,m,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Kl.x=s.normal.x>0?e.max.x:e.min.x,Kl.y=s.normal.y>0?e.max.y:e.min.y,Kl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function P_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function Ex(o,e){const t=e.isWebGL2,i=new WeakMap;function s(h,p){const m=h.array,_=h.usage,x=m.byteLength,M=o.createBuffer();o.bindBuffer(p,M),o.bufferData(p,m,_),h.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(m instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)E=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:M,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function a(h,p,m){const _=p.array,x=p._updateRange,M=p.updateRanges;if(o.bindBuffer(m,h),x.count===-1&&M.length===0&&o.bufferSubData(m,0,_),M.length!==0){for(let E=0,S=M.length;E<S;E++){const v=M[E];t?o.bufferSubData(m,v.start*_.BYTES_PER_ELEMENT,_,v.start,v.count):o.bufferSubData(m,v.start*_.BYTES_PER_ELEMENT,_.subarray(v.start,v.start+v.count))}p.clearUpdateRanges()}x.count!==-1&&(t?o.bufferSubData(m,x.offset*_.BYTES_PER_ELEMENT,_,x.offset,x.count):o.bufferSubData(m,x.offset*_.BYTES_PER_ELEMENT,_.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(o.deleteBuffer(p.buffer),i.delete(h))}function d(h,p){if(h.isGLBufferAttribute){const _=i.get(h);(!_||_.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const m=i.get(h);if(m===void 0)i.set(h,s(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:c,remove:u,update:d}}class md extends hn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(s),h=u+1,p=d+1,m=e/u,_=t/d,x=[],M=[],E=[],S=[];for(let v=0;v<p;v++){const b=v*_-c;for(let w=0;w<h;w++){const C=w*m-a;M.push(C,-b,0),E.push(0,0,1),S.push(w/u),S.push(1-v/d)}}for(let v=0;v<d;v++)for(let b=0;b<u;b++){const w=b+h*v,C=b+h*(v+1),k=b+1+h*(v+1),D=b+1+h*v;x.push(w,C,D),x.push(C,k,D)}this.setIndex(x),this.setAttribute("position",new Nt(M,3)),this.setAttribute("normal",new Nt(E,3)),this.setAttribute("uv",new Nt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
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
#endif`,Ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lx=`#ifdef USE_AOMAP
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
#endif`,Px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nx=`#ifdef USE_BATCHING
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
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fx=`#ifdef USE_IRIDESCENCE
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
#endif`,kx=`#ifdef USE_BUMPMAP
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yx=`#define PI 3.141592653589793
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
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kx=`vec3 transformedNormal = objectNormal;
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
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eS="gl_FragColor = linearToOutputTexel( gl_FragColor );",tS=`
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
}`,nS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,iS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rS=`#ifdef USE_ENVMAP
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
#endif`,sS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
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
#endif`,aS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fS=`#ifdef USE_GRADIENTMAP
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
}`,dS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gS=`uniform bool receiveShadow;
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
#endif`,_S=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,vS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MS=`PhysicalMaterial material;
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
#endif`,ES=`struct PhysicalMaterial {
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
}`,TS=`
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
#endif`,wS=`#if defined( RE_IndirectDiffuse )
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
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,LS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,PS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DS=`#if defined( USE_POINTS_UV )
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
#endif`,US=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kS=`#ifdef USE_MORPHNORMALS
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
#endif`,BS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,zS=`#ifdef USE_MORPHTARGETS
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
#endif`,HS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XS=`#ifdef USE_NORMALMAP
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
#endif`,YS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lM=`float getShadowMask() {
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
}`,cM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uM=`#ifdef USE_SKINNING
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
#endif`,fM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dM=`#ifdef USE_SKINNING
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
#endif`,hM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gM=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_M=`#ifdef USE_TRANSMISSION
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
#endif`,vM=`#ifdef USE_TRANSMISSION
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
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TM=`uniform sampler2D t2D;
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
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`#include <common>
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
}`,LM=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,PM=`#define DISTANCE
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
}`,NM=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
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
}`,kM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,BM=`#define LAMBERT
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
}`,zM=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,HM=`#define MATCAP
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
}`,VM=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,GM=`#define NORMAL
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
}`,WM=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jM=`#define PHONG
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
}`,XM=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,YM=`#define STANDARD
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
}`,qM=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,KM=`#define TOON
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
}`,$M=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ZM=`uniform float size;
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
}`,JM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,QM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,eE=`uniform vec3 color;
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
}`,tE=`uniform float rotation;
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
}`,nE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pt={alphahash_fragment:Tx,alphahash_pars_fragment:wx,alphamap_fragment:Ax,alphamap_pars_fragment:bx,alphatest_fragment:Rx,alphatest_pars_fragment:Cx,aomap_fragment:Lx,aomap_pars_fragment:Px,batching_pars_vertex:Nx,batching_vertex:Ix,begin_vertex:Dx,beginnormal_vertex:Ux,bsdfs:Ox,iridescence_fragment:Fx,bumpmap_pars_fragment:kx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Vx,color_fragment:Gx,color_pars_fragment:Wx,color_pars_vertex:jx,color_vertex:Xx,common:Yx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Kx,displacementmap_pars_vertex:$x,displacementmap_vertex:Zx,emissivemap_fragment:Jx,emissivemap_pars_fragment:Qx,colorspace_fragment:eS,colorspace_pars_fragment:tS,envmap_fragment:nS,envmap_common_pars_fragment:iS,envmap_pars_fragment:rS,envmap_pars_vertex:sS,envmap_physical_pars_fragment:_S,envmap_vertex:oS,fog_vertex:aS,fog_pars_vertex:lS,fog_fragment:cS,fog_pars_fragment:uS,gradientmap_pars_fragment:fS,lightmap_fragment:dS,lightmap_pars_fragment:hS,lights_lambert_fragment:pS,lights_lambert_pars_fragment:mS,lights_pars_begin:gS,lights_toon_fragment:vS,lights_toon_pars_fragment:yS,lights_phong_fragment:xS,lights_phong_pars_fragment:SS,lights_physical_fragment:MS,lights_physical_pars_fragment:ES,lights_fragment_begin:TS,lights_fragment_maps:wS,lights_fragment_end:AS,logdepthbuf_fragment:bS,logdepthbuf_pars_fragment:RS,logdepthbuf_pars_vertex:CS,logdepthbuf_vertex:LS,map_fragment:PS,map_pars_fragment:NS,map_particle_fragment:IS,map_particle_pars_fragment:DS,metalnessmap_fragment:US,metalnessmap_pars_fragment:OS,morphcolor_vertex:FS,morphnormal_vertex:kS,morphtarget_pars_vertex:BS,morphtarget_vertex:zS,normal_fragment_begin:HS,normal_fragment_maps:VS,normal_pars_fragment:GS,normal_pars_vertex:WS,normal_vertex:jS,normalmap_pars_fragment:XS,clearcoat_normal_fragment_begin:YS,clearcoat_normal_fragment_maps:qS,clearcoat_pars_fragment:KS,iridescence_pars_fragment:$S,opaque_fragment:ZS,packing:JS,premultiplied_alpha_fragment:QS,project_vertex:eM,dithering_fragment:tM,dithering_pars_fragment:nM,roughnessmap_fragment:iM,roughnessmap_pars_fragment:rM,shadowmap_pars_fragment:sM,shadowmap_pars_vertex:oM,shadowmap_vertex:aM,shadowmask_pars_fragment:lM,skinbase_vertex:cM,skinning_pars_vertex:uM,skinning_vertex:fM,skinnormal_vertex:dM,specularmap_fragment:hM,specularmap_pars_fragment:pM,tonemapping_fragment:mM,tonemapping_pars_fragment:gM,transmission_fragment:_M,transmission_pars_fragment:vM,uv_pars_fragment:yM,uv_pars_vertex:xM,uv_vertex:SM,worldpos_vertex:MM,background_vert:EM,background_frag:TM,backgroundCube_vert:wM,backgroundCube_frag:AM,cube_vert:bM,cube_frag:RM,depth_vert:CM,depth_frag:LM,distanceRGBA_vert:PM,distanceRGBA_frag:NM,equirect_vert:IM,equirect_frag:DM,linedashed_vert:UM,linedashed_frag:OM,meshbasic_vert:FM,meshbasic_frag:kM,meshlambert_vert:BM,meshlambert_frag:zM,meshmatcap_vert:HM,meshmatcap_frag:VM,meshnormal_vert:GM,meshnormal_frag:WM,meshphong_vert:jM,meshphong_frag:XM,meshphysical_vert:YM,meshphysical_frag:qM,meshtoon_vert:KM,meshtoon_frag:$M,points_vert:ZM,points_frag:JM,shadow_vert:QM,shadow_frag:eE,sprite_vert:tE,sprite_frag:nE},be={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Ri={basic:{uniforms:Pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Pn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Pn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new et(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Pn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Pn([be.points,be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Pn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Pn([be.common,be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Pn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Pn([be.sprite,be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Pn([be.common,be.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Pn([be.lights,be.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ri.physical={uniforms:Pn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const $l={r:0,b:0,g:0};function iE(o,e,t,i,s,a,c){const u=new et(0);let d=a===!0?0:1,h,p,m=null,_=0,x=null;function M(S,v){let b=!1,w=v.isScene===!0?v.background:null;w&&w.isTexture&&(w=(v.backgroundBlurriness>0?t:e).get(w)),w===null?E(u,d):w&&w.isColor&&(E(w,1),b=!0);const C=o.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,c):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),w&&(w.isCubeTexture||w.mapping===_c)?(p===void 0&&(p=new Xt(new So(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:go(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=bt.getTransfer(w.colorSpace)!==Bt,(m!==w||_!==w.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,m=w,_=w.version,x=o.toneMapping),p.layers.enableAll(),S.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Xt(new md(2,2),new fs({name:"BackgroundMaterial",uniforms:go(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=bt.getTransfer(w.colorSpace)!==Bt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||_!==w.version||x!==o.toneMapping)&&(h.material.needsUpdate=!0,m=w,_=w.version,x=o.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function E(S,v){S.getRGB($l,R_(o)),i.buffers.color.setClear($l.r,$l.g,$l.b,v,c)}return{getClearColor:function(){return u},setClearColor:function(S,v=1){u.set(S),d=v,E(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(S){d=S,E(u,d)},render:M}}function rE(o,e,t,i){const s=o.getParameter(o.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),c=i.isWebGL2||a!==null,u={},d=S(null);let h=d,p=!1;function m(V,Z,ie,ee,j){let $=!1;if(c){const X=E(ee,ie,Z);h!==X&&(h=X,x(h.object)),$=v(V,ee,ie,j),$&&b(V,ee,ie,j)}else{const X=Z.wireframe===!0;(h.geometry!==ee.id||h.program!==ie.id||h.wireframe!==X)&&(h.geometry=ee.id,h.program=ie.id,h.wireframe=X,$=!0)}j!==null&&t.update(j,o.ELEMENT_ARRAY_BUFFER),($||p)&&(p=!1,ce(V,Z,ie,ee),j!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function _(){return i.isWebGL2?o.createVertexArray():a.createVertexArrayOES()}function x(V){return i.isWebGL2?o.bindVertexArray(V):a.bindVertexArrayOES(V)}function M(V){return i.isWebGL2?o.deleteVertexArray(V):a.deleteVertexArrayOES(V)}function E(V,Z,ie){const ee=ie.wireframe===!0;let j=u[V.id];j===void 0&&(j={},u[V.id]=j);let $=j[Z.id];$===void 0&&($={},j[Z.id]=$);let X=$[ee];return X===void 0&&(X=S(_()),$[ee]=X),X}function S(V){const Z=[],ie=[],ee=[];for(let j=0;j<s;j++)Z[j]=0,ie[j]=0,ee[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ie,attributeDivisors:ee,object:V,attributes:{},index:null}}function v(V,Z,ie,ee){const j=h.attributes,$=Z.attributes;let X=0;const I=ie.getAttributes();for(const W in I)if(I[W].location>=0){const J=j[W];let fe=$[W];if(fe===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(fe=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(fe=V.instanceColor)),J===void 0||J.attribute!==fe||fe&&J.data!==fe.data)return!0;X++}return h.attributesNum!==X||h.index!==ee}function b(V,Z,ie,ee){const j={},$=Z.attributes;let X=0;const I=ie.getAttributes();for(const W in I)if(I[W].location>=0){let J=$[W];J===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(J=V.instanceColor));const fe={};fe.attribute=J,J&&J.data&&(fe.data=J.data),j[W]=fe,X++}h.attributes=j,h.attributesNum=X,h.index=ee}function w(){const V=h.newAttributes;for(let Z=0,ie=V.length;Z<ie;Z++)V[Z]=0}function C(V){k(V,0)}function k(V,Z){const ie=h.newAttributes,ee=h.enabledAttributes,j=h.attributeDivisors;ie[V]=1,ee[V]===0&&(o.enableVertexAttribArray(V),ee[V]=1),j[V]!==Z&&((i.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,Z),j[V]=Z)}function D(){const V=h.newAttributes,Z=h.enabledAttributes;for(let ie=0,ee=Z.length;ie<ee;ie++)Z[ie]!==V[ie]&&(o.disableVertexAttribArray(ie),Z[ie]=0)}function U(V,Z,ie,ee,j,$,X){X===!0?o.vertexAttribIPointer(V,Z,ie,j,$):o.vertexAttribPointer(V,Z,ie,ee,j,$)}function ce(V,Z,ie,ee){if(i.isWebGL2===!1&&(V.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const j=ee.attributes,$=ie.getAttributes(),X=Z.defaultAttributeValues;for(const I in $){const W=$[I];if(W.location>=0){let Y=j[I];if(Y===void 0&&(I==="instanceMatrix"&&V.instanceMatrix&&(Y=V.instanceMatrix),I==="instanceColor"&&V.instanceColor&&(Y=V.instanceColor)),Y!==void 0){const J=Y.normalized,fe=Y.itemSize,de=t.get(Y);if(de===void 0)continue;const ye=de.buffer,Ae=de.type,Le=de.bytesPerElement,Oe=i.isWebGL2===!0&&(Ae===o.INT||Ae===o.UNSIGNED_INT||Y.gpuType===u_);if(Y.isInterleavedBufferAttribute){const at=Y.data,ne=at.stride,qt=Y.offset;if(at.isInstancedInterleavedBuffer){for(let qe=0;qe<W.locationSize;qe++)k(W.location+qe,at.meshPerAttribute);V.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let qe=0;qe<W.locationSize;qe++)C(W.location+qe);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let qe=0;qe<W.locationSize;qe++)U(W.location+qe,fe/W.locationSize,Ae,J,ne*Le,(qt+fe/W.locationSize*qe)*Le,Oe)}else{if(Y.isInstancedBufferAttribute){for(let at=0;at<W.locationSize;at++)k(W.location+at,Y.meshPerAttribute);V.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let at=0;at<W.locationSize;at++)C(W.location+at);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let at=0;at<W.locationSize;at++)U(W.location+at,fe/W.locationSize,Ae,J,fe*Le,fe/W.locationSize*at*Le,Oe)}}else if(X!==void 0){const J=X[I];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(W.location,J);break;case 3:o.vertexAttrib3fv(W.location,J);break;case 4:o.vertexAttrib4fv(W.location,J);break;default:o.vertexAttrib1fv(W.location,J)}}}}D()}function R(){le();for(const V in u){const Z=u[V];for(const ie in Z){const ee=Z[ie];for(const j in ee)M(ee[j].object),delete ee[j];delete Z[ie]}delete u[V]}}function N(V){if(u[V.id]===void 0)return;const Z=u[V.id];for(const ie in Z){const ee=Z[ie];for(const j in ee)M(ee[j].object),delete ee[j];delete Z[ie]}delete u[V.id]}function ae(V){for(const Z in u){const ie=u[Z];if(ie[V.id]===void 0)continue;const ee=ie[V.id];for(const j in ee)M(ee[j].object),delete ee[j];delete ie[V.id]}}function le(){he(),p=!0,h!==d&&(h=d,x(h.object))}function he(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:m,reset:le,resetDefaultState:he,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:ae,initAttributes:w,enableAttribute:C,disableUnusedAttributes:D}}function sE(o,e,t,i){const s=i.isWebGL2;let a;function c(p){a=p}function u(p,m){o.drawArrays(a,p,m),t.update(m,a,1)}function d(p,m,_){if(_===0)return;let x,M;if(s)x=o,M="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[M](a,p,m,_),t.update(m,a,_)}function h(p,m,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<_;M++)this.render(p[M],m[M]);else{x.multiDrawArraysWEBGL(a,p,0,m,0,_);let M=0;for(let E=0;E<_;E++)M+=m[E];t.update(M,a,1)}}this.setMode=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function oE(o,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=a(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=c||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,C=c||e.has("OES_texture_float"),k=w&&C,D=c?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:a,precision:u,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:M,maxAttributes:E,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:w,floatFragmentTextures:C,floatVertexTextures:k,maxSamples:D}}function aE(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new bi,u=new yt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const x=m.length!==0||_||i!==0||s;return s=_,i=m.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,x){const M=m.clippingPlanes,E=m.clipIntersection,S=m.clipShadows,v=o.get(m);if(!s||M===null||M.length===0||a&&!S)a?p(null):h();else{const b=a?0:i,w=b*4;let C=v.clippingState||null;d.value=C,C=p(M,_,w,x);for(let k=0;k!==w;++k)C[k]=t[k];v.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,_,x,M){const E=m!==null?m.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const v=x+E*4,b=_.matrixWorldInverse;u.getNormalMatrix(b),(S===null||S.length<v)&&(S=new Float32Array(v));for(let w=0,C=x;w!==E;++w,C+=4)c.copy(m[w]).applyMatrix4(b,u),c.normal.toArray(S,C),S[C+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function lE(o){let e=new WeakMap;function t(c,u){return u===Yf?c.mapping=co:u===qf&&(c.mapping=uo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Yf||u===qf)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new xx(d.height/2);return h.fromEquirectangularTexture(o,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class gd extends C_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const io=4,sg=[.125,.215,.35,.446,.526,.582],ss=20,Cf=new gd,og=new et;let Lf=null,Pf=0,Nf=0;const is=(1+Math.sqrt(5))/2,to=1/is,ag=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,is,to),new H(0,is,-to),new H(to,0,is),new H(-to,0,is),new H(is,to,0),new H(-is,to,0)];class lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Lf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lf,Pf,Nf),e.scissorTest=!1,Zl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:va,format:li,colorSpace:dn,depthBuffer:!1},s=cg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cE(a)),this._blurMaterial=uE(a,e,t)}return s}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Cf)}_sceneToCubeUV(e,t,i,s){const u=new Nn(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,_=p.toneMapping;p.getClearColor(og),p.toneMapping=Dr,p.autoClear=!1;const x=new Li({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),M=new Xt(new So,x);let E=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,E=!0):(x.color.copy(og),E=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(u.up.set(0,d[v],0),u.lookAt(h[v],0,0)):b===1?(u.up.set(0,0,d[v]),u.lookAt(0,h[v],0)):(u.up.set(0,d[v],0),u.lookAt(0,0,h[v]));const w=this._cubeSize;Zl(s,b*w,v>2?w:0,w,w),p.setRenderTarget(s),E&&p.render(M,u),p.render(e,u)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=_,p.autoClear=m,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===co||e.mapping===uo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ug());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Xt(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Zl(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Cf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=ag[(s-1)%ag.length];this._blur(e,s-1,s,a,c)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new Xt(this._lodPlanes[s],h),_=h.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*ss-1),E=a/M,S=isFinite(a)?1+Math.floor(p*E):ss;S>ss&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ss}`);const v=[];let b=0;for(let U=0;U<ss;++U){const ce=U/E,R=Math.exp(-ce*ce/2);v.push(R),U===0?b+=R:U<S&&(b+=2*R)}for(let U=0;U<v.length;U++)v[U]=v[U]/b;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=v,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:w}=this;_.dTheta.value=M,_.mipInt.value=w-i;const C=this._sizeLods[s],k=3*C*(s>w-io?s-w+io:0),D=4*(this._cubeSize-C);Zl(t,k,D,3*C,2*C),d.setRenderTarget(t),d.render(m,Cf)}}function cE(o){const e=[],t=[],i=[];let s=o;const a=o-io+1+sg.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let d=1/u;c>o-io?d=sg[c-o+io-1]:c===0&&(d=0),i.push(d);const h=1/(u-2),p=-h,m=1+h,_=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,M=6,E=3,S=2,v=1,b=new Float32Array(E*M*x),w=new Float32Array(S*M*x),C=new Float32Array(v*M*x);for(let D=0;D<x;D++){const U=D%3*2/3-1,ce=D>2?0:-1,R=[U,ce,0,U+2/3,ce,0,U+2/3,ce+1,0,U,ce,0,U+2/3,ce+1,0,U,ce+1,0];b.set(R,E*M*D),w.set(_,S*M*D);const N=[D,D,D,D,D,D];C.set(N,v*M*D)}const k=new hn;k.setAttribute("position",new vn(b,E)),k.setAttribute("uv",new vn(w,S)),k.setAttribute("faceIndex",new vn(C,v)),e.push(k),s>io&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cg(o,e,t){const i=new us(o,e,t);return i.texture.mapping=_c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zl(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function uE(o,e,t){const i=new Float32Array(ss),s=new H(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_d(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function ug(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function fg(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function _d(){return`

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
	`}function fE(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,h=d===Yf||d===qf,p=d===co||d===uo;if(h||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let m=e.get(u);return t===null&&(t=new lg(o)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),e.set(u,m),m.texture}else{if(e.has(u))return e.get(u).texture;{const m=u.image;if(h&&m&&m.height>0||p&&m&&s(m)){t===null&&(t=new lg(o));const _=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,_),u.addEventListener("dispose",a),_.texture}else return null}}}return u}function s(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function dE(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function hE(o,e,t,i){const s={},a=new WeakMap;function c(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const E=_.morphAttributes[M];for(let S=0,v=E.length;S<v;S++)e.remove(E[S])}_.removeEventListener("dispose",c),delete s[_.id];const x=a.get(_);x&&(e.remove(x),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(m,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function d(m){const _=m.attributes;for(const M in _)e.update(_[M],o.ARRAY_BUFFER);const x=m.morphAttributes;for(const M in x){const E=x[M];for(let S=0,v=E.length;S<v;S++)e.update(E[S],o.ARRAY_BUFFER)}}function h(m){const _=[],x=m.index,M=m.attributes.position;let E=0;if(x!==null){const b=x.array;E=x.version;for(let w=0,C=b.length;w<C;w+=3){const k=b[w+0],D=b[w+1],U=b[w+2];_.push(k,D,D,U,U,k)}}else if(M!==void 0){const b=M.array;E=M.version;for(let w=0,C=b.length/3-1;w<C;w+=3){const k=w+0,D=w+1,U=w+2;_.push(k,D,D,U,U,k)}}else return;const S=new(S_(_)?b_:A_)(_,1);S.version=E;const v=a.get(m);v&&e.remove(v),a.set(m,S)}function p(m){const _=a.get(m);if(_){const x=m.index;x!==null&&_.version<x.version&&h(m)}else h(m);return a.get(m)}return{get:u,update:d,getWireframeAttribute:p}}function pE(o,e,t,i){const s=i.isWebGL2;let a;function c(x){a=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function p(x,M){o.drawElements(a,M,u,x*d),t.update(M,a,1)}function m(x,M,E){if(E===0)return;let S,v;if(s)S=o,v="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[v](a,M,u,x*d,E),t.update(M,a,E)}function _(x,M,E){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<E;v++)this.render(x[v]/d,M[v]);else{S.multiDrawElementsWEBGL(a,M,0,u,x,0,E);let v=0;for(let b=0;b<E;b++)v+=M[b];t.update(v,a,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function mE(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function gE(o,e){return o[0]-e[0]}function _E(o,e){return Math.abs(e[1])-Math.abs(o[1])}function vE(o,e,t){const i={},s=new Float32Array(8),a=new WeakMap,c=new It,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function d(h,p,m){const _=h.morphTargetInfluences;if(e.isWebGL2===!0){const M=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,E=M!==void 0?M.length:0;let S=a.get(p);if(S===void 0||S.count!==E){let Z=function(){he.dispose(),a.delete(p),p.removeEventListener("dispose",Z)};var x=Z;S!==void 0&&S.texture.dispose();const w=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,k=p.morphAttributes.color!==void 0,D=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],ce=p.morphAttributes.color||[];let R=0;w===!0&&(R=1),C===!0&&(R=2),k===!0&&(R=3);let N=p.attributes.position.count*R,ae=1;N>e.maxTextureSize&&(ae=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const le=new Float32Array(N*ae*4*E),he=new T_(le,N,ae,E);he.type=Ji,he.needsUpdate=!0;const V=R*4;for(let ie=0;ie<E;ie++){const ee=D[ie],j=U[ie],$=ce[ie],X=N*ae*4*ie;for(let I=0;I<ee.count;I++){const W=I*V;w===!0&&(c.fromBufferAttribute(ee,I),le[X+W+0]=c.x,le[X+W+1]=c.y,le[X+W+2]=c.z,le[X+W+3]=0),C===!0&&(c.fromBufferAttribute(j,I),le[X+W+4]=c.x,le[X+W+5]=c.y,le[X+W+6]=c.z,le[X+W+7]=0),k===!0&&(c.fromBufferAttribute($,I),le[X+W+8]=c.x,le[X+W+9]=c.y,le[X+W+10]=c.z,le[X+W+11]=$.itemSize===4?c.w:1)}}S={count:E,texture:he,size:new nt(N,ae)},a.set(p,S),p.addEventListener("dispose",Z)}let v=0;for(let w=0;w<_.length;w++)v+=_[w];const b=p.morphTargetsRelative?1:1-v;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",_),m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,t),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}else{const M=_===void 0?0:_.length;let E=i[p.id];if(E===void 0||E.length!==M){E=[];for(let C=0;C<M;C++)E[C]=[C,0];i[p.id]=E}for(let C=0;C<M;C++){const k=E[C];k[0]=C,k[1]=_[C]}E.sort(_E);for(let C=0;C<8;C++)C<M&&E[C][1]?(u[C][0]=E[C][0],u[C][1]=E[C][1]):(u[C][0]=Number.MAX_SAFE_INTEGER,u[C][1]=0);u.sort(gE);const S=p.morphAttributes.position,v=p.morphAttributes.normal;let b=0;for(let C=0;C<8;C++){const k=u[C],D=k[0],U=k[1];D!==Number.MAX_SAFE_INTEGER&&U?(S&&p.getAttribute("morphTarget"+C)!==S[D]&&p.setAttribute("morphTarget"+C,S[D]),v&&p.getAttribute("morphNormal"+C)!==v[D]&&p.setAttribute("morphNormal"+C,v[D]),s[C]=U,b+=U):(S&&p.hasAttribute("morphTarget"+C)===!0&&p.deleteAttribute("morphTarget"+C),v&&p.hasAttribute("morphNormal"+C)===!0&&p.deleteAttribute("morphNormal"+C),s[C]=0)}const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",s)}}return{update:d}}function yE(o,e,t,i){let s=new WeakMap;function a(d){const h=i.render.frame,p=d.geometry,m=e.get(d,p);if(s.get(m)!==h&&(e.update(m),s.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return m}function c(){s=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}class N_ extends _n{constructor(e,t,i,s,a,c,u,d,h,p){if(p=p!==void 0?p:as,p!==as&&p!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===as&&(i=Lr),i===void 0&&p===ho&&(i=os),super(null,s,a,c,u,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:fn,this.minFilter=d!==void 0?d:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const I_=new _n,D_=new N_(1,1);D_.compareFunction=y_;const U_=new T_,O_=new ix,F_=new L_,dg=[],hg=[],pg=new Float32Array(16),mg=new Float32Array(9),gg=new Float32Array(4);function Mo(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=dg[s];if(a===void 0&&(a=new Float32Array(s),dg[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function sn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function on(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function xc(o,e){let t=hg[e];t===void 0&&(t=new Int32Array(e),hg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function xE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function SE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;o.uniform2fv(this.addr,e),on(t,e)}}function ME(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;o.uniform3fv(this.addr,e),on(t,e)}}function EE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;o.uniform4fv(this.addr,e),on(t,e)}}function TE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;gg.set(i),o.uniformMatrix2fv(this.addr,!1,gg),on(t,i)}}function wE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;mg.set(i),o.uniformMatrix3fv(this.addr,!1,mg),on(t,i)}}function AE(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;pg.set(i),o.uniformMatrix4fv(this.addr,!1,pg),on(t,i)}}function bE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function RE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;o.uniform2iv(this.addr,e),on(t,e)}}function CE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;o.uniform3iv(this.addr,e),on(t,e)}}function LE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;o.uniform4iv(this.addr,e),on(t,e)}}function PE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function NE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;o.uniform2uiv(this.addr,e),on(t,e)}}function IE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;o.uniform3uiv(this.addr,e),on(t,e)}}function DE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;o.uniform4uiv(this.addr,e),on(t,e)}}function UE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);const a=this.type===o.SAMPLER_2D_SHADOW?D_:I_;t.setTexture2D(e||a,s)}function OE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||O_,s)}function FE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||F_,s)}function kE(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||U_,s)}function BE(o){switch(o){case 5126:return xE;case 35664:return SE;case 35665:return ME;case 35666:return EE;case 35674:return TE;case 35675:return wE;case 35676:return AE;case 5124:case 35670:return bE;case 35667:case 35671:return RE;case 35668:case 35672:return CE;case 35669:case 35673:return LE;case 5125:return PE;case 36294:return NE;case 36295:return IE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return OE;case 35680:case 36300:case 36308:case 36293:return FE;case 36289:case 36303:case 36311:case 36292:return kE}}function zE(o,e){o.uniform1fv(this.addr,e)}function HE(o,e){const t=Mo(e,this.size,2);o.uniform2fv(this.addr,t)}function VE(o,e){const t=Mo(e,this.size,3);o.uniform3fv(this.addr,t)}function GE(o,e){const t=Mo(e,this.size,4);o.uniform4fv(this.addr,t)}function WE(o,e){const t=Mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function jE(o,e){const t=Mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function XE(o,e){const t=Mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function YE(o,e){o.uniform1iv(this.addr,e)}function qE(o,e){o.uniform2iv(this.addr,e)}function KE(o,e){o.uniform3iv(this.addr,e)}function $E(o,e){o.uniform4iv(this.addr,e)}function ZE(o,e){o.uniform1uiv(this.addr,e)}function JE(o,e){o.uniform2uiv(this.addr,e)}function QE(o,e){o.uniform3uiv(this.addr,e)}function eT(o,e){o.uniform4uiv(this.addr,e)}function tT(o,e,t){const i=this.cache,s=e.length,a=xc(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||I_,a[c])}function nT(o,e,t){const i=this.cache,s=e.length,a=xc(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||O_,a[c])}function iT(o,e,t){const i=this.cache,s=e.length,a=xc(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||F_,a[c])}function rT(o,e,t){const i=this.cache,s=e.length,a=xc(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||U_,a[c])}function sT(o){switch(o){case 5126:return zE;case 35664:return HE;case 35665:return VE;case 35666:return GE;case 35674:return WE;case 35675:return jE;case 35676:return XE;case 5124:case 35670:return YE;case 35667:case 35671:return qE;case 35668:case 35672:return KE;case 35669:case 35673:return $E;case 5125:return ZE;case 36294:return JE;case 36295:return QE;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}class oT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BE(t.type)}}class aT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sT(t.type)}}class lT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const If=/(\w+)(\])?(\[|\.)?/g;function _g(o,e){o.seq.push(e),o.map[e.id]=e}function cT(o,e,t){const i=o.name,s=i.length;for(If.lastIndex=0;;){const a=If.exec(i),c=If.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===s){_g(t,h===void 0?new oT(u,o,e):new aT(u,o,e));break}else{let m=t.map[u];m===void 0&&(m=new lT(u),_g(t,m)),t=m}}}class lc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);cT(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function vg(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const uT=37297;let fT=0;function dT(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}function hT(o){const e=bt.getPrimaries(bt.workingColorSpace),t=bt.getPrimaries(o);let i;switch(e===t?i="":e===pc&&t===hc?i="LinearDisplayP3ToLinearSRGB":e===hc&&t===pc&&(i="LinearSRGBToLinearDisplayP3"),o){case dn:case vc:return[i,"LinearTransferOETF"];case Zt:case fd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[i,"LinearTransferOETF"]}}function yg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+dT(o.getShaderSource(e),c)}else return s}function pT(o,e){const t=hT(e);return`vec4 ${o}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mT(o,e){let t;switch(e){case fy:t="Linear";break;case dy:t="Reinhard";break;case hy:t="OptimizedCineon";break;case py:t="ACESFilmic";break;case gy:t="AgX";break;case my:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gT(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ro).join(`
`)}function _T(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ro).join(`
`)}function vT(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yT(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function ro(o){return o!==""}function xg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(o){return o.replace(xT,MT)}const ST=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function MT(o,e){let t=pt[e];if(t===void 0){const i=ST.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ed(t)}const ET=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mg(o){return o.replace(ET,TT)}function TT(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Eg(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function AT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case co:case uo:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bT(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function RT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ld:e="ENVMAP_BLENDING_MULTIPLY";break;case cy:e="ENVMAP_BLENDING_MIX";break;case uy:e="ENVMAP_BLENDING_ADD";break}return e}function CT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function LT(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=wT(t),h=AT(t),p=bT(t),m=RT(t),_=CT(t),x=t.isWebGL2?"":gT(t),M=_T(t),E=vT(a),S=s.createProgram();let v,b,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ro).join(`
`),v.length>0&&(v+=`
`),b=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ro).join(`
`),b.length>0&&(b+=`
`)):(v=[Eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),b=[x,Eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Dr?mT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,pT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),c=ed(c),c=xg(c,t),c=Sg(c,t),u=ed(u),u=xg(u,t),u=Sg(u,t),c=Mg(c),u=Mg(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,v=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const C=w+v+c,k=w+b+u,D=vg(s,s.VERTEX_SHADER,C),U=vg(s,s.FRAGMENT_SHADER,k);s.attachShader(S,D),s.attachShader(S,U),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function ce(le){if(o.debug.checkShaderErrors){const he=s.getProgramInfoLog(S).trim(),V=s.getShaderInfoLog(D).trim(),Z=s.getShaderInfoLog(U).trim();let ie=!0,ee=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,S,D,U);else{const j=yg(s,D,"vertex"),$=yg(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Program Info Log: `+he+`
`+j+`
`+$)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(V===""||Z==="")&&(ee=!1);ee&&(le.diagnostics={runnable:ie,programLog:he,vertexShader:{log:V,prefix:v},fragmentShader:{log:Z,prefix:b}})}s.deleteShader(D),s.deleteShader(U),R=new lc(s,S),N=yT(s,S)}let R;this.getUniforms=function(){return R===void 0&&ce(this),R};let N;this.getAttributes=function(){return N===void 0&&ce(this),N};let ae=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ae===!1&&(ae=s.getProgramParameter(S,uT)),ae},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=D,this.fragmentShader=U,this}let PT=0;class NT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new IT(e),t.set(e,i)),i}}class IT{constructor(e){this.id=PT++,this.code=e,this.usedTimes=0}}function DT(o,e,t,i,s,a,c){const u=new hd,d=new NT,h=[],p=s.isWebGL2,m=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return R===0?"uv":`uv${R}`}function S(R,N,ae,le,he){const V=le.fog,Z=he.geometry,ie=R.isMeshStandardMaterial?le.environment:null,ee=(R.isMeshStandardMaterial?t:e).get(R.envMap||ie),j=ee&&ee.mapping===_c?ee.image.height:null,$=M[R.type];R.precision!==null&&(x=s.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const X=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,I=X!==void 0?X.length:0;let W=0;Z.morphAttributes.position!==void 0&&(W=1),Z.morphAttributes.normal!==void 0&&(W=2),Z.morphAttributes.color!==void 0&&(W=3);let Y,J,fe,de;if($){const zt=Ri[$];Y=zt.vertexShader,J=zt.fragmentShader}else Y=R.vertexShader,J=R.fragmentShader,d.update(R),fe=d.getVertexShaderID(R),de=d.getFragmentShaderID(R);const ye=o.getRenderTarget(),Ae=he.isInstancedMesh===!0,Le=he.isBatchedMesh===!0,Oe=!!R.map,at=!!R.matcap,ne=!!ee,qt=!!R.aoMap,qe=!!R.lightMap,it=!!R.bumpMap,He=!!R.normalMap,Rt=!!R.displacementMap,lt=!!R.emissiveMap,P=!!R.metalnessMap,A=!!R.roughnessMap,te=R.anisotropy>0,xe=R.clearcoat>0,ve=R.iridescence>0,Me=R.sheen>0,Ge=R.transmission>0,Ce=te&&!!R.anisotropyMap,Ue=xe&&!!R.clearcoatMap,Ke=xe&&!!R.clearcoatNormalMap,ct=xe&&!!R.clearcoatRoughnessMap,me=ve&&!!R.iridescenceMap,St=ve&&!!R.iridescenceThicknessMap,ft=Me&&!!R.sheenColorMap,rt=Me&&!!R.sheenRoughnessMap,Xe=!!R.specularMap,Pe=!!R.specularColorMap,F=!!R.specularIntensityMap,Te=Ge&&!!R.transmissionMap,We=Ge&&!!R.thicknessMap,De=!!R.gradientMap,_e=!!R.alphaMap,B=R.alphaTest>0,Ee=!!R.alphaHash,Re=!!R.extensions,Qe=!!Z.attributes.uv1,$e=!!Z.attributes.uv2,mt=!!Z.attributes.uv3;let gt=Dr;return R.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(gt=o.toneMapping),{isWebGL2:p,shaderID:$,shaderType:R.type,shaderName:R.name,vertexShader:Y,fragmentShader:J,defines:R.defines,customVertexShaderID:fe,customFragmentShaderID:de,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:Le,instancing:Ae,instancingColor:Ae&&he.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:ye===null?o.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:dn,map:Oe,matcap:at,envMap:ne,envMapMode:ne&&ee.mapping,envMapCubeUVHeight:j,aoMap:qt,lightMap:qe,bumpMap:it,normalMap:He,displacementMap:_&&Rt,emissiveMap:lt,normalMapObjectSpace:He&&R.normalMapType===Ly,normalMapTangentSpace:He&&R.normalMapType===ud,metalnessMap:P,roughnessMap:A,anisotropy:te,anisotropyMap:Ce,clearcoat:xe,clearcoatMap:Ue,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ct,iridescence:ve,iridescenceMap:me,iridescenceThicknessMap:St,sheen:Me,sheenColorMap:ft,sheenRoughnessMap:rt,specularMap:Xe,specularColorMap:Pe,specularIntensityMap:F,transmission:Ge,transmissionMap:Te,thicknessMap:We,gradientMap:De,opaque:R.transparent===!1&&R.blending===oo,alphaMap:_e,alphaTest:B,alphaHash:Ee,combine:R.combine,mapUv:Oe&&E(R.map.channel),aoMapUv:qt&&E(R.aoMap.channel),lightMapUv:qe&&E(R.lightMap.channel),bumpMapUv:it&&E(R.bumpMap.channel),normalMapUv:He&&E(R.normalMap.channel),displacementMapUv:Rt&&E(R.displacementMap.channel),emissiveMapUv:lt&&E(R.emissiveMap.channel),metalnessMapUv:P&&E(R.metalnessMap.channel),roughnessMapUv:A&&E(R.roughnessMap.channel),anisotropyMapUv:Ce&&E(R.anisotropyMap.channel),clearcoatMapUv:Ue&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:St&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:rt&&E(R.sheenRoughnessMap.channel),specularMapUv:Xe&&E(R.specularMap.channel),specularColorMapUv:Pe&&E(R.specularColorMap.channel),specularIntensityMapUv:F&&E(R.specularIntensityMap.channel),transmissionMapUv:Te&&E(R.transmissionMap.channel),thicknessMapUv:We&&E(R.thicknessMap.channel),alphaMapUv:_e&&E(R.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(He||te),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:Qe,vertexUv2s:$e,vertexUv3s:mt,pointsUvs:he.isPoints===!0&&!!Z.attributes.uv&&(Oe||_e),fog:!!V,useFog:R.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:he.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:W,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&ae.length>0,shadowMapType:o.shadowMap.type,toneMapping:gt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Oe&&R.map.isVideoTexture===!0&&bt.getTransfer(R.map.colorSpace)===Bt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===xi,flipSided:R.side===Vn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Re&&R.extensions.derivatives===!0,extensionFragDepth:Re&&R.extensions.fragDepth===!0,extensionDrawBuffers:Re&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&R.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function v(R){const N=[];if(R.shaderID?N.push(R.shaderID):(N.push(R.customVertexShaderID),N.push(R.customFragmentShaderID)),R.defines!==void 0)for(const ae in R.defines)N.push(ae),N.push(R.defines[ae]);return R.isRawShaderMaterial===!1&&(b(N,R),w(N,R),N.push(o.outputColorSpace)),N.push(R.customProgramCacheKey),N.join()}function b(R,N){R.push(N.precision),R.push(N.outputColorSpace),R.push(N.envMapMode),R.push(N.envMapCubeUVHeight),R.push(N.mapUv),R.push(N.alphaMapUv),R.push(N.lightMapUv),R.push(N.aoMapUv),R.push(N.bumpMapUv),R.push(N.normalMapUv),R.push(N.displacementMapUv),R.push(N.emissiveMapUv),R.push(N.metalnessMapUv),R.push(N.roughnessMapUv),R.push(N.anisotropyMapUv),R.push(N.clearcoatMapUv),R.push(N.clearcoatNormalMapUv),R.push(N.clearcoatRoughnessMapUv),R.push(N.iridescenceMapUv),R.push(N.iridescenceThicknessMapUv),R.push(N.sheenColorMapUv),R.push(N.sheenRoughnessMapUv),R.push(N.specularMapUv),R.push(N.specularColorMapUv),R.push(N.specularIntensityMapUv),R.push(N.transmissionMapUv),R.push(N.thicknessMapUv),R.push(N.combine),R.push(N.fogExp2),R.push(N.sizeAttenuation),R.push(N.morphTargetsCount),R.push(N.morphAttributeCount),R.push(N.numDirLights),R.push(N.numPointLights),R.push(N.numSpotLights),R.push(N.numSpotLightMaps),R.push(N.numHemiLights),R.push(N.numRectAreaLights),R.push(N.numDirLightShadows),R.push(N.numPointLightShadows),R.push(N.numSpotLightShadows),R.push(N.numSpotLightShadowsWithMaps),R.push(N.numLightProbes),R.push(N.shadowMapType),R.push(N.toneMapping),R.push(N.numClippingPlanes),R.push(N.numClipIntersection),R.push(N.depthPacking)}function w(R,N){u.disableAll(),N.isWebGL2&&u.enable(0),N.supportsVertexTextures&&u.enable(1),N.instancing&&u.enable(2),N.instancingColor&&u.enable(3),N.matcap&&u.enable(4),N.envMap&&u.enable(5),N.normalMapObjectSpace&&u.enable(6),N.normalMapTangentSpace&&u.enable(7),N.clearcoat&&u.enable(8),N.iridescence&&u.enable(9),N.alphaTest&&u.enable(10),N.vertexColors&&u.enable(11),N.vertexAlphas&&u.enable(12),N.vertexUv1s&&u.enable(13),N.vertexUv2s&&u.enable(14),N.vertexUv3s&&u.enable(15),N.vertexTangents&&u.enable(16),N.anisotropy&&u.enable(17),N.alphaHash&&u.enable(18),N.batching&&u.enable(19),R.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.skinning&&u.enable(4),N.morphTargets&&u.enable(5),N.morphNormals&&u.enable(6),N.morphColors&&u.enable(7),N.premultipliedAlpha&&u.enable(8),N.shadowMapEnabled&&u.enable(9),N.useLegacyLights&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),R.push(u.mask)}function C(R){const N=M[R.type];let ae;if(N){const le=Ri[N];ae=gx.clone(le.uniforms)}else ae=R.uniforms;return ae}function k(R,N){let ae;for(let le=0,he=h.length;le<he;le++){const V=h[le];if(V.cacheKey===N){ae=V,++ae.usedTimes;break}}return ae===void 0&&(ae=new LT(o,N,R,a),h.push(ae)),ae}function D(R){if(--R.usedTimes===0){const N=h.indexOf(R);h[N]=h[h.length-1],h.pop(),R.destroy()}}function U(R){d.remove(R)}function ce(){d.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:C,acquireProgram:k,releaseProgram:D,releaseShaderCache:U,programs:h,dispose:ce}}function UT(){let o=new WeakMap;function e(a){let c=o.get(a);return c===void 0&&(c={},o.set(a,c)),c}function t(a){o.delete(a)}function i(a,c,u){o.get(a)[c]=u}function s(){o=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function OT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Tg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function wg(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(m,_,x,M,E,S){let v=o[e];return v===void 0?(v={id:m.id,object:m,geometry:_,material:x,groupOrder:M,renderOrder:m.renderOrder,z:E,group:S},o[e]=v):(v.id=m.id,v.object=m,v.geometry=_,v.material=x,v.groupOrder=M,v.renderOrder=m.renderOrder,v.z=E,v.group=S),e++,v}function u(m,_,x,M,E,S){const v=c(m,_,x,M,E,S);x.transmission>0?i.push(v):x.transparent===!0?s.push(v):t.push(v)}function d(m,_,x,M,E,S){const v=c(m,_,x,M,E,S);x.transmission>0?i.unshift(v):x.transparent===!0?s.unshift(v):t.unshift(v)}function h(m,_){t.length>1&&t.sort(m||OT),i.length>1&&i.sort(_||Tg),s.length>1&&s.sort(_||Tg)}function p(){for(let m=e,_=o.length;m<_;m++){const x=o[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:d,finish:p,sort:h}}function FT(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new wg,o.set(i,[c])):s>=a.length?(c=new wg,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function kT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new et};break;case"SpotLight":t={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return o[e.id]=t,t}}}function BT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let zT=0;function HT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function VT(o,e){const t=new kT,i=BT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new H);const a=new H,c=new xt,u=new xt;function d(p,m){let _=0,x=0,M=0;for(let le=0;le<9;le++)s.probe[le].set(0,0,0);let E=0,S=0,v=0,b=0,w=0,C=0,k=0,D=0,U=0,ce=0,R=0;p.sort(HT);const N=m===!0?Math.PI:1;for(let le=0,he=p.length;le<he;le++){const V=p[le],Z=V.color,ie=V.intensity,ee=V.distance,j=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=Z.r*ie*N,x+=Z.g*ie*N,M+=Z.b*ie*N;else if(V.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(V.sh.coefficients[$],ie);R++}else if(V.isDirectionalLight){const $=t.get(V);if($.color.copy(V.color).multiplyScalar(V.intensity*N),V.castShadow){const X=V.shadow,I=i.get(V);I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,s.directionalShadow[E]=I,s.directionalShadowMap[E]=j,s.directionalShadowMatrix[E]=V.shadow.matrix,C++}s.directional[E]=$,E++}else if(V.isSpotLight){const $=t.get(V);$.position.setFromMatrixPosition(V.matrixWorld),$.color.copy(Z).multiplyScalar(ie*N),$.distance=ee,$.coneCos=Math.cos(V.angle),$.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),$.decay=V.decay,s.spot[v]=$;const X=V.shadow;if(V.map&&(s.spotLightMap[U]=V.map,U++,X.updateMatrices(V),V.castShadow&&ce++),s.spotLightMatrix[v]=X.matrix,V.castShadow){const I=i.get(V);I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,s.spotShadow[v]=I,s.spotShadowMap[v]=j,D++}v++}else if(V.isRectAreaLight){const $=t.get(V);$.color.copy(Z).multiplyScalar(ie),$.halfWidth.set(V.width*.5,0,0),$.halfHeight.set(0,V.height*.5,0),s.rectArea[b]=$,b++}else if(V.isPointLight){const $=t.get(V);if($.color.copy(V.color).multiplyScalar(V.intensity*N),$.distance=V.distance,$.decay=V.decay,V.castShadow){const X=V.shadow,I=i.get(V);I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,I.shadowCameraNear=X.camera.near,I.shadowCameraFar=X.camera.far,s.pointShadow[S]=I,s.pointShadowMap[S]=j,s.pointShadowMatrix[S]=V.shadow.matrix,k++}s.point[S]=$,S++}else if(V.isHemisphereLight){const $=t.get(V);$.skyColor.copy(V.color).multiplyScalar(ie*N),$.groundColor.copy(V.groundColor).multiplyScalar(ie*N),s.hemi[w]=$,w++}}b>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=M;const ae=s.hash;(ae.directionalLength!==E||ae.pointLength!==S||ae.spotLength!==v||ae.rectAreaLength!==b||ae.hemiLength!==w||ae.numDirectionalShadows!==C||ae.numPointShadows!==k||ae.numSpotShadows!==D||ae.numSpotMaps!==U||ae.numLightProbes!==R)&&(s.directional.length=E,s.spot.length=v,s.rectArea.length=b,s.point.length=S,s.hemi.length=w,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=k,s.pointShadowMap.length=k,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=k,s.spotLightMatrix.length=D+U-ce,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=ce,s.numLightProbes=R,ae.directionalLength=E,ae.pointLength=S,ae.spotLength=v,ae.rectAreaLength=b,ae.hemiLength=w,ae.numDirectionalShadows=C,ae.numPointShadows=k,ae.numSpotShadows=D,ae.numSpotMaps=U,ae.numLightProbes=R,s.version=zT++)}function h(p,m){let _=0,x=0,M=0,E=0,S=0;const v=m.matrixWorldInverse;for(let b=0,w=p.length;b<w;b++){const C=p[b];if(C.isDirectionalLight){const k=s.directional[_];k.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(v),_++}else if(C.isSpotLight){const k=s.spot[M];k.position.setFromMatrixPosition(C.matrixWorld),k.position.applyMatrix4(v),k.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(v),M++}else if(C.isRectAreaLight){const k=s.rectArea[E];k.position.setFromMatrixPosition(C.matrixWorld),k.position.applyMatrix4(v),u.identity(),c.copy(C.matrixWorld),c.premultiply(v),u.extractRotation(c),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),k.halfWidth.applyMatrix4(u),k.halfHeight.applyMatrix4(u),E++}else if(C.isPointLight){const k=s.point[x];k.position.setFromMatrixPosition(C.matrixWorld),k.position.applyMatrix4(v),x++}else if(C.isHemisphereLight){const k=s.hemi[S];k.direction.setFromMatrixPosition(C.matrixWorld),k.direction.transformDirection(v),S++}}}return{setup:d,setupView:h,state:s}}function Ag(o,e){const t=new VT(o,e),i=[],s=[];function a(){i.length=0,s.length=0}function c(m){i.push(m)}function u(m){s.push(m)}function d(m){t.setup(i,m)}function h(m){t.setupView(i,m)}return{init:a,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function GT(o,e){let t=new WeakMap;function i(a,c=0){const u=t.get(a);let d;return u===void 0?(d=new Ag(o,e),t.set(a,[d])):c>=u.length?(d=new Ag(o,e),u.push(d)):d=u[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}class WT extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jT extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YT=`uniform sampler2D shadow_pass;
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
}`;function qT(o,e,t){let i=new pd;const s=new nt,a=new nt,c=new It,u=new WT({depthPacking:Cy}),d=new jT,h={},p=t.maxTextureSize,m={[er]:Vn,[Vn]:er,[xi]:xi},_=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:XT,fragmentShader:YT}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new hn;M.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Xt(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a_;let v=this.type;this.render=function(D,U,ce){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;const R=o.getRenderTarget(),N=o.getActiveCubeFace(),ae=o.getActiveMipmapLevel(),le=o.state;le.setBlending(Ir),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const he=v!==Zi&&this.type===Zi,V=v===Zi&&this.type!==Zi;for(let Z=0,ie=D.length;Z<ie;Z++){const ee=D[Z],j=ee.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const $=j.getFrameExtents();if(s.multiply($),a.copy(j.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/$.x),s.x=a.x*$.x,j.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/$.y),s.y=a.y*$.y,j.mapSize.y=a.y)),j.map===null||he===!0||V===!0){const I=this.type!==Zi?{minFilter:fn,magFilter:fn}:{};j.map!==null&&j.map.dispose(),j.map=new us(s.x,s.y,I),j.map.texture.name=ee.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const X=j.getViewportCount();for(let I=0;I<X;I++){const W=j.getViewport(I);c.set(a.x*W.x,a.y*W.y,a.x*W.z,a.y*W.w),le.viewport(c),j.updateMatrices(ee,I),i=j.getFrustum(),C(U,ce,j.camera,ee,this.type)}j.isPointLightShadow!==!0&&this.type===Zi&&b(j,ce),j.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(R,N,ae)};function b(D,U){const ce=e.update(E);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new us(s.x,s.y)),_.uniforms.shadow_pass.value=D.map.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(U,null,ce,_,E,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(U,null,ce,x,E,null)}function w(D,U,ce,R){let N=null;const ae=ce.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(ae!==void 0)N=ae;else if(N=ce.isPointLight===!0?d:u,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const le=N.uuid,he=U.uuid;let V=h[le];V===void 0&&(V={},h[le]=V);let Z=V[he];Z===void 0&&(Z=N.clone(),V[he]=Z,U.addEventListener("dispose",k)),N=Z}if(N.visible=U.visible,N.wireframe=U.wireframe,R===Zi?N.side=U.shadowSide!==null?U.shadowSide:U.side:N.side=U.shadowSide!==null?U.shadowSide:m[U.side],N.alphaMap=U.alphaMap,N.alphaTest=U.alphaTest,N.map=U.map,N.clipShadows=U.clipShadows,N.clippingPlanes=U.clippingPlanes,N.clipIntersection=U.clipIntersection,N.displacementMap=U.displacementMap,N.displacementScale=U.displacementScale,N.displacementBias=U.displacementBias,N.wireframeLinewidth=U.wireframeLinewidth,N.linewidth=U.linewidth,ce.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const le=o.properties.get(N);le.light=ce}return N}function C(D,U,ce,R,N){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&N===Zi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld);const he=e.update(D),V=D.material;if(Array.isArray(V)){const Z=he.groups;for(let ie=0,ee=Z.length;ie<ee;ie++){const j=Z[ie],$=V[j.materialIndex];if($&&$.visible){const X=w(D,$,R,N);D.onBeforeShadow(o,D,U,ce,he,X,j),o.renderBufferDirect(ce,null,he,X,D,j),D.onAfterShadow(o,D,U,ce,he,X,j)}}}else if(V.visible){const Z=w(D,V,R,N);D.onBeforeShadow(o,D,U,ce,he,Z,null),o.renderBufferDirect(ce,null,he,Z,D,null),D.onAfterShadow(o,D,U,ce,he,Z,null)}}const le=D.children;for(let he=0,V=le.length;he<V;he++)C(le[he],U,ce,R,N)}function k(D){D.target.removeEventListener("dispose",k);for(const ce in h){const R=h[ce],N=D.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function KT(o,e,t){const i=t.isWebGL2;function s(){let B=!1;const Ee=new It;let Re=null;const Qe=new It(0,0,0,0);return{setMask:function($e){Re!==$e&&!B&&(o.colorMask($e,$e,$e,$e),Re=$e)},setLocked:function($e){B=$e},setClear:function($e,mt,gt,Dt,zt){zt===!0&&($e*=Dt,mt*=Dt,gt*=Dt),Ee.set($e,mt,gt,Dt),Qe.equals(Ee)===!1&&(o.clearColor($e,mt,gt,Dt),Qe.copy(Ee))},reset:function(){B=!1,Re=null,Qe.set(-1,0,0,0)}}}function a(){let B=!1,Ee=null,Re=null,Qe=null;return{setTest:function($e){$e?Le(o.DEPTH_TEST):Oe(o.DEPTH_TEST)},setMask:function($e){Ee!==$e&&!B&&(o.depthMask($e),Ee=$e)},setFunc:function($e){if(Re!==$e){switch($e){case ny:o.depthFunc(o.NEVER);break;case iy:o.depthFunc(o.ALWAYS);break;case ry:o.depthFunc(o.LESS);break;case uc:o.depthFunc(o.LEQUAL);break;case sy:o.depthFunc(o.EQUAL);break;case oy:o.depthFunc(o.GEQUAL);break;case ay:o.depthFunc(o.GREATER);break;case ly:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Re=$e}},setLocked:function($e){B=$e},setClear:function($e){Qe!==$e&&(o.clearDepth($e),Qe=$e)},reset:function(){B=!1,Ee=null,Re=null,Qe=null}}}function c(){let B=!1,Ee=null,Re=null,Qe=null,$e=null,mt=null,gt=null,Dt=null,zt=null;return{setTest:function(_t){B||(_t?Le(o.STENCIL_TEST):Oe(o.STENCIL_TEST))},setMask:function(_t){Ee!==_t&&!B&&(o.stencilMask(_t),Ee=_t)},setFunc:function(_t,Ht,yn){(Re!==_t||Qe!==Ht||$e!==yn)&&(o.stencilFunc(_t,Ht,yn),Re=_t,Qe=Ht,$e=yn)},setOp:function(_t,Ht,yn){(mt!==_t||gt!==Ht||Dt!==yn)&&(o.stencilOp(_t,Ht,yn),mt=_t,gt=Ht,Dt=yn)},setLocked:function(_t){B=_t},setClear:function(_t){zt!==_t&&(o.clearStencil(_t),zt=_t)},reset:function(){B=!1,Ee=null,Re=null,Qe=null,$e=null,mt=null,gt=null,Dt=null,zt=null}}}const u=new s,d=new a,h=new c,p=new WeakMap,m=new WeakMap;let _={},x={},M=new WeakMap,E=[],S=null,v=!1,b=null,w=null,C=null,k=null,D=null,U=null,ce=null,R=new et(0,0,0),N=0,ae=!1,le=null,he=null,V=null,Z=null,ie=null;const ee=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,$=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=$>=2);let I=null,W={};const Y=o.getParameter(o.SCISSOR_BOX),J=o.getParameter(o.VIEWPORT),fe=new It().fromArray(Y),de=new It().fromArray(J);function ye(B,Ee,Re,Qe){const $e=new Uint8Array(4),mt=o.createTexture();o.bindTexture(B,mt),o.texParameteri(B,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(B,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let gt=0;gt<Re;gt++)i&&(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)?o.texImage3D(Ee,0,o.RGBA,1,1,Qe,0,o.RGBA,o.UNSIGNED_BYTE,$e):o.texImage2D(Ee+gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,$e);return mt}const Ae={};Ae[o.TEXTURE_2D]=ye(o.TEXTURE_2D,o.TEXTURE_2D,1),Ae[o.TEXTURE_CUBE_MAP]=ye(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[o.TEXTURE_2D_ARRAY]=ye(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ae[o.TEXTURE_3D]=ye(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Le(o.DEPTH_TEST),d.setFunc(uc),lt(!1),P(sm),Le(o.CULL_FACE),He(Ir);function Le(B){_[B]!==!0&&(o.enable(B),_[B]=!0)}function Oe(B){_[B]!==!1&&(o.disable(B),_[B]=!1)}function at(B,Ee){return x[B]!==Ee?(o.bindFramebuffer(B,Ee),x[B]=Ee,i&&(B===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ee),B===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function ne(B,Ee){let Re=E,Qe=!1;if(B)if(Re=M.get(Ee),Re===void 0&&(Re=[],M.set(Ee,Re)),B.isWebGLMultipleRenderTargets){const $e=B.texture;if(Re.length!==$e.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,gt=$e.length;mt<gt;mt++)Re[mt]=o.COLOR_ATTACHMENT0+mt;Re.length=$e.length,Qe=!0}}else Re[0]!==o.COLOR_ATTACHMENT0&&(Re[0]=o.COLOR_ATTACHMENT0,Qe=!0);else Re[0]!==o.BACK&&(Re[0]=o.BACK,Qe=!0);Qe&&(t.isWebGL2?o.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function qt(B){return S!==B?(o.useProgram(B),S=B,!0):!1}const qe={[rs]:o.FUNC_ADD,[H0]:o.FUNC_SUBTRACT,[V0]:o.FUNC_REVERSE_SUBTRACT};if(i)qe[cm]=o.MIN,qe[um]=o.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(qe[cm]=B.MIN_EXT,qe[um]=B.MAX_EXT)}const it={[G0]:o.ZERO,[W0]:o.ONE,[j0]:o.SRC_COLOR,[jf]:o.SRC_ALPHA,[Z0]:o.SRC_ALPHA_SATURATE,[K0]:o.DST_COLOR,[Y0]:o.DST_ALPHA,[X0]:o.ONE_MINUS_SRC_COLOR,[Xf]:o.ONE_MINUS_SRC_ALPHA,[$0]:o.ONE_MINUS_DST_COLOR,[q0]:o.ONE_MINUS_DST_ALPHA,[J0]:o.CONSTANT_COLOR,[Q0]:o.ONE_MINUS_CONSTANT_COLOR,[ey]:o.CONSTANT_ALPHA,[ty]:o.ONE_MINUS_CONSTANT_ALPHA};function He(B,Ee,Re,Qe,$e,mt,gt,Dt,zt,_t){if(B===Ir){v===!0&&(Oe(o.BLEND),v=!1);return}if(v===!1&&(Le(o.BLEND),v=!0),B!==z0){if(B!==b||_t!==ae){if((w!==rs||D!==rs)&&(o.blendEquation(o.FUNC_ADD),w=rs,D=rs),_t)switch(B){case oo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case om:o.blendFunc(o.ONE,o.ONE);break;case am:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case lm:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case oo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case om:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case am:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case lm:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}C=null,k=null,U=null,ce=null,R.set(0,0,0),N=0,b=B,ae=_t}return}$e=$e||Ee,mt=mt||Re,gt=gt||Qe,(Ee!==w||$e!==D)&&(o.blendEquationSeparate(qe[Ee],qe[$e]),w=Ee,D=$e),(Re!==C||Qe!==k||mt!==U||gt!==ce)&&(o.blendFuncSeparate(it[Re],it[Qe],it[mt],it[gt]),C=Re,k=Qe,U=mt,ce=gt),(Dt.equals(R)===!1||zt!==N)&&(o.blendColor(Dt.r,Dt.g,Dt.b,zt),R.copy(Dt),N=zt),b=B,ae=!1}function Rt(B,Ee){B.side===xi?Oe(o.CULL_FACE):Le(o.CULL_FACE);let Re=B.side===Vn;Ee&&(Re=!Re),lt(Re),B.blending===oo&&B.transparent===!1?He(Ir):He(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),d.setFunc(B.depthFunc),d.setTest(B.depthTest),d.setMask(B.depthWrite),u.setMask(B.colorWrite);const Qe=B.stencilWrite;h.setTest(Qe),Qe&&(h.setMask(B.stencilWriteMask),h.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),h.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),te(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Le(o.SAMPLE_ALPHA_TO_COVERAGE):Oe(o.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){le!==B&&(B?o.frontFace(o.CW):o.frontFace(o.CCW),le=B)}function P(B){B!==F0?(Le(o.CULL_FACE),B!==he&&(B===sm?o.cullFace(o.BACK):B===k0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Oe(o.CULL_FACE),he=B}function A(B){B!==V&&(j&&o.lineWidth(B),V=B)}function te(B,Ee,Re){B?(Le(o.POLYGON_OFFSET_FILL),(Z!==Ee||ie!==Re)&&(o.polygonOffset(Ee,Re),Z=Ee,ie=Re)):Oe(o.POLYGON_OFFSET_FILL)}function xe(B){B?Le(o.SCISSOR_TEST):Oe(o.SCISSOR_TEST)}function ve(B){B===void 0&&(B=o.TEXTURE0+ee-1),I!==B&&(o.activeTexture(B),I=B)}function Me(B,Ee,Re){Re===void 0&&(I===null?Re=o.TEXTURE0+ee-1:Re=I);let Qe=W[Re];Qe===void 0&&(Qe={type:void 0,texture:void 0},W[Re]=Qe),(Qe.type!==B||Qe.texture!==Ee)&&(I!==Re&&(o.activeTexture(Re),I=Re),o.bindTexture(B,Ee||Ae[B]),Qe.type=B,Qe.texture=Ee)}function Ge(){const B=W[I];B!==void 0&&B.type!==void 0&&(o.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ce(){try{o.compressedTexImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{o.compressedTexImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ke(){try{o.texSubImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{o.texSubImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{o.texStorage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{o.texStorage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(){try{o.texImage2D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{o.texImage3D.apply(o,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(B){fe.equals(B)===!1&&(o.scissor(B.x,B.y,B.z,B.w),fe.copy(B))}function Te(B){de.equals(B)===!1&&(o.viewport(B.x,B.y,B.z,B.w),de.copy(B))}function We(B,Ee){let Re=m.get(Ee);Re===void 0&&(Re=new WeakMap,m.set(Ee,Re));let Qe=Re.get(B);Qe===void 0&&(Qe=o.getUniformBlockIndex(Ee,B.name),Re.set(B,Qe))}function De(B,Ee){const Qe=m.get(Ee).get(B);p.get(Ee)!==Qe&&(o.uniformBlockBinding(Ee,Qe,B.__bindingPointIndex),p.set(Ee,Qe))}function _e(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),i===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},I=null,W={},x={},M=new WeakMap,E=[],S=null,v=!1,b=null,w=null,C=null,k=null,D=null,U=null,ce=null,R=new et(0,0,0),N=0,ae=!1,le=null,he=null,V=null,Z=null,ie=null,fe.set(0,0,o.canvas.width,o.canvas.height),de.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:Le,disable:Oe,bindFramebuffer:at,drawBuffers:ne,useProgram:qt,setBlending:He,setMaterial:Rt,setFlipSided:lt,setCullFace:P,setLineWidth:A,setPolygonOffset:te,setScissorTest:xe,activeTexture:ve,bindTexture:Me,unbindTexture:Ge,compressedTexImage2D:Ce,compressedTexImage3D:Ue,texImage2D:Xe,texImage3D:Pe,updateUBOMapping:We,uniformBlockBinding:De,texStorage2D:ft,texStorage3D:rt,texSubImage2D:Ke,texSubImage3D:ct,compressedTexSubImage2D:me,compressedTexSubImage3D:St,scissor:F,viewport:Te,reset:_e}}function $T(o,e,t,i,s,a,c){const u=s.isWebGL2,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let m;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,A){return x?new OffscreenCanvas(P,A):xa("canvas")}function E(P,A,te,xe){let ve=1;if((P.width>xe||P.height>xe)&&(ve=xe/Math.max(P.width,P.height)),ve<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const Me=A?gc:Math.floor,Ge=Me(ve*P.width),Ce=Me(ve*P.height);m===void 0&&(m=M(Ge,Ce));const Ue=te?M(Ge,Ce):m;return Ue.width=Ge,Ue.height=Ce,Ue.getContext("2d").drawImage(P,0,0,Ge,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ge+"x"+Ce+")."),Ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return Qf(P.width)&&Qf(P.height)}function v(P){return u?!1:P.wrapS!==ai||P.wrapT!==ai||P.minFilter!==fn&&P.minFilter!==Hn}function b(P,A){return P.generateMipmaps&&A&&P.minFilter!==fn&&P.minFilter!==Hn}function w(P){o.generateMipmap(P)}function C(P,A,te,xe,ve=!1){if(u===!1)return A;if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Me=A;if(A===o.RED&&(te===o.FLOAT&&(Me=o.R32F),te===o.HALF_FLOAT&&(Me=o.R16F),te===o.UNSIGNED_BYTE&&(Me=o.R8)),A===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(Me=o.R8UI),te===o.UNSIGNED_SHORT&&(Me=o.R16UI),te===o.UNSIGNED_INT&&(Me=o.R32UI),te===o.BYTE&&(Me=o.R8I),te===o.SHORT&&(Me=o.R16I),te===o.INT&&(Me=o.R32I)),A===o.RG&&(te===o.FLOAT&&(Me=o.RG32F),te===o.HALF_FLOAT&&(Me=o.RG16F),te===o.UNSIGNED_BYTE&&(Me=o.RG8)),A===o.RGBA){const Ge=ve?dc:bt.getTransfer(xe);te===o.FLOAT&&(Me=o.RGBA32F),te===o.HALF_FLOAT&&(Me=o.RGBA16F),te===o.UNSIGNED_BYTE&&(Me=Ge===Bt?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT_4_4_4_4&&(Me=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(Me=o.RGB5_A1)}return(Me===o.R16F||Me===o.R32F||Me===o.RG16F||Me===o.RG32F||Me===o.RGBA16F||Me===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function k(P,A,te){return b(P,te)===!0||P.isFramebufferTexture&&P.minFilter!==fn&&P.minFilter!==Hn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function D(P){return P===fn||P===Kf||P===ac?o.NEAREST:o.LINEAR}function U(P){const A=P.target;A.removeEventListener("dispose",U),R(A),A.isVideoTexture&&p.delete(A)}function ce(P){const A=P.target;A.removeEventListener("dispose",ce),ae(A)}function R(P){const A=i.get(P);if(A.__webglInit===void 0)return;const te=P.source,xe=_.get(te);if(xe){const ve=xe[A.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&N(P),Object.keys(xe).length===0&&_.delete(te)}i.remove(P)}function N(P){const A=i.get(P);o.deleteTexture(A.__webglTexture);const te=P.source,xe=_.get(te);delete xe[A.__cacheKey],c.memory.textures--}function ae(P){const A=P.texture,te=i.get(P),xe=i.get(A);if(xe.__webglTexture!==void 0&&(o.deleteTexture(xe.__webglTexture),c.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(te.__webglFramebuffer[ve]))for(let Me=0;Me<te.__webglFramebuffer[ve].length;Me++)o.deleteFramebuffer(te.__webglFramebuffer[ve][Me]);else o.deleteFramebuffer(te.__webglFramebuffer[ve]);te.__webglDepthbuffer&&o.deleteRenderbuffer(te.__webglDepthbuffer[ve])}else{if(Array.isArray(te.__webglFramebuffer))for(let ve=0;ve<te.__webglFramebuffer.length;ve++)o.deleteFramebuffer(te.__webglFramebuffer[ve]);else o.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&o.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&o.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let ve=0;ve<te.__webglColorRenderbuffer.length;ve++)te.__webglColorRenderbuffer[ve]&&o.deleteRenderbuffer(te.__webglColorRenderbuffer[ve]);te.__webglDepthRenderbuffer&&o.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ve=0,Me=A.length;ve<Me;ve++){const Ge=i.get(A[ve]);Ge.__webglTexture&&(o.deleteTexture(Ge.__webglTexture),c.memory.textures--),i.remove(A[ve])}i.remove(A),i.remove(P)}let le=0;function he(){le=0}function V(){const P=le;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),le+=1,P}function Z(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ie(P,A){const te=i.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){const xe=P.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(te,P,A);return}}t.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+A)}function ee(P,A){const te=i.get(P);if(P.version>0&&te.__version!==P.version){fe(te,P,A);return}t.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+A)}function j(P,A){const te=i.get(P);if(P.version>0&&te.__version!==P.version){fe(te,P,A);return}t.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+A)}function $(P,A){const te=i.get(P);if(P.version>0&&te.__version!==P.version){de(te,P,A);return}t.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+A)}const X={[fo]:o.REPEAT,[ai]:o.CLAMP_TO_EDGE,[fc]:o.MIRRORED_REPEAT},I={[fn]:o.NEAREST,[Kf]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[Hn]:o.LINEAR,[c_]:o.LINEAR_MIPMAP_NEAREST,[cs]:o.LINEAR_MIPMAP_LINEAR},W={[Py]:o.NEVER,[Fy]:o.ALWAYS,[Ny]:o.LESS,[y_]:o.LEQUAL,[Iy]:o.EQUAL,[Oy]:o.GEQUAL,[Dy]:o.GREATER,[Uy]:o.NOTEQUAL};function Y(P,A,te){if(te?(o.texParameteri(P,o.TEXTURE_WRAP_S,X[A.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,X[A.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,X[A.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,I[A.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,I[A.minFilter])):(o.texParameteri(P,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(P,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(A.wrapS!==ai||A.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(P,o.TEXTURE_MAG_FILTER,D(A.magFilter)),o.texParameteri(P,o.TEXTURE_MIN_FILTER,D(A.minFilter)),A.minFilter!==fn&&A.minFilter!==Hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,W[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const xe=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===fn||A.minFilter!==ac&&A.minFilter!==cs||A.type===Ji&&e.has("OES_texture_float_linear")===!1||u===!1&&A.type===va&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(o.texParameterf(P,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function J(P,A){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",U));const xe=A.source;let ve=_.get(xe);ve===void 0&&(ve={},_.set(xe,ve));const Me=Z(A);if(Me!==P.__cacheKey){ve[Me]===void 0&&(ve[Me]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,te=!0),ve[Me].usedTimes++;const Ge=ve[P.__cacheKey];Ge!==void 0&&(ve[P.__cacheKey].usedTimes--,Ge.usedTimes===0&&N(A)),P.__cacheKey=Me,P.__webglTexture=ve[Me].texture}return te}function fe(P,A,te){let xe=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=o.TEXTURE_3D);const ve=J(P,A),Me=A.source;t.bindTexture(xe,P.__webglTexture,o.TEXTURE0+te);const Ge=i.get(Me);if(Me.version!==Ge.__version||ve===!0){t.activeTexture(o.TEXTURE0+te);const Ce=bt.getPrimaries(bt.workingColorSpace),Ue=A.colorSpace===ci?null:bt.getPrimaries(A.colorSpace),Ke=A.colorSpace===ci||Ce===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const ct=v(A)&&S(A.image)===!1;let me=E(A.image,ct,!1,s.maxTextureSize);me=lt(A,me);const St=S(me)||u,ft=a.convert(A.format,A.colorSpace);let rt=a.convert(A.type),Xe=C(A.internalFormat,ft,rt,A.colorSpace,A.isVideoTexture);Y(xe,A,St);let Pe;const F=A.mipmaps,Te=u&&A.isVideoTexture!==!0&&Xe!==g_,We=Ge.__version===void 0||ve===!0,De=k(A,me,St);if(A.isDepthTexture)Xe=o.DEPTH_COMPONENT,u?A.type===Ji?Xe=o.DEPTH_COMPONENT32F:A.type===Lr?Xe=o.DEPTH_COMPONENT24:A.type===os?Xe=o.DEPTH24_STENCIL8:Xe=o.DEPTH_COMPONENT16:A.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===as&&Xe===o.DEPTH_COMPONENT&&A.type!==cd&&A.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Lr,rt=a.convert(A.type)),A.format===ho&&Xe===o.DEPTH_COMPONENT&&(Xe=o.DEPTH_STENCIL,A.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=os,rt=a.convert(A.type))),We&&(Te?t.texStorage2D(o.TEXTURE_2D,1,Xe,me.width,me.height):t.texImage2D(o.TEXTURE_2D,0,Xe,me.width,me.height,0,ft,rt,null));else if(A.isDataTexture)if(F.length>0&&St){Te&&We&&t.texStorage2D(o.TEXTURE_2D,De,Xe,F[0].width,F[0].height);for(let _e=0,B=F.length;_e<B;_e++)Pe=F[_e],Te?t.texSubImage2D(o.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,ft,rt,Pe.data):t.texImage2D(o.TEXTURE_2D,_e,Xe,Pe.width,Pe.height,0,ft,rt,Pe.data);A.generateMipmaps=!1}else Te?(We&&t.texStorage2D(o.TEXTURE_2D,De,Xe,me.width,me.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,me.width,me.height,ft,rt,me.data)):t.texImage2D(o.TEXTURE_2D,0,Xe,me.width,me.height,0,ft,rt,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Te&&We&&t.texStorage3D(o.TEXTURE_2D_ARRAY,De,Xe,F[0].width,F[0].height,me.depth);for(let _e=0,B=F.length;_e<B;_e++)Pe=F[_e],A.format!==li?ft!==null?Te?t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,me.depth,ft,Pe.data,0,0):t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,_e,Xe,Pe.width,Pe.height,me.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage3D(o.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,me.depth,ft,rt,Pe.data):t.texImage3D(o.TEXTURE_2D_ARRAY,_e,Xe,Pe.width,Pe.height,me.depth,0,ft,rt,Pe.data)}else{Te&&We&&t.texStorage2D(o.TEXTURE_2D,De,Xe,F[0].width,F[0].height);for(let _e=0,B=F.length;_e<B;_e++)Pe=F[_e],A.format!==li?ft!==null?Te?t.compressedTexSubImage2D(o.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,ft,Pe.data):t.compressedTexImage2D(o.TEXTURE_2D,_e,Xe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?t.texSubImage2D(o.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,ft,rt,Pe.data):t.texImage2D(o.TEXTURE_2D,_e,Xe,Pe.width,Pe.height,0,ft,rt,Pe.data)}else if(A.isDataArrayTexture)Te?(We&&t.texStorage3D(o.TEXTURE_2D_ARRAY,De,Xe,me.width,me.height,me.depth),t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ft,rt,me.data)):t.texImage3D(o.TEXTURE_2D_ARRAY,0,Xe,me.width,me.height,me.depth,0,ft,rt,me.data);else if(A.isData3DTexture)Te?(We&&t.texStorage3D(o.TEXTURE_3D,De,Xe,me.width,me.height,me.depth),t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ft,rt,me.data)):t.texImage3D(o.TEXTURE_3D,0,Xe,me.width,me.height,me.depth,0,ft,rt,me.data);else if(A.isFramebufferTexture){if(We)if(Te)t.texStorage2D(o.TEXTURE_2D,De,Xe,me.width,me.height);else{let _e=me.width,B=me.height;for(let Ee=0;Ee<De;Ee++)t.texImage2D(o.TEXTURE_2D,Ee,Xe,_e,B,0,ft,rt,null),_e>>=1,B>>=1}}else if(F.length>0&&St){Te&&We&&t.texStorage2D(o.TEXTURE_2D,De,Xe,F[0].width,F[0].height);for(let _e=0,B=F.length;_e<B;_e++)Pe=F[_e],Te?t.texSubImage2D(o.TEXTURE_2D,_e,0,0,ft,rt,Pe):t.texImage2D(o.TEXTURE_2D,_e,Xe,ft,rt,Pe);A.generateMipmaps=!1}else Te?(We&&t.texStorage2D(o.TEXTURE_2D,De,Xe,me.width,me.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,ft,rt,me)):t.texImage2D(o.TEXTURE_2D,0,Xe,ft,rt,me);b(A,St)&&w(xe),Ge.__version=Me.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function de(P,A,te){if(A.image.length!==6)return;const xe=J(P,A),ve=A.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+te);const Me=i.get(ve);if(ve.version!==Me.__version||xe===!0){t.activeTexture(o.TEXTURE0+te);const Ge=bt.getPrimaries(bt.workingColorSpace),Ce=A.colorSpace===ci?null:bt.getPrimaries(A.colorSpace),Ue=A.colorSpace===ci||Ge===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Ke=A.isCompressedTexture||A.image[0].isCompressedTexture,ct=A.image[0]&&A.image[0].isDataTexture,me=[];for(let _e=0;_e<6;_e++)!Ke&&!ct?me[_e]=E(A.image[_e],!1,!0,s.maxCubemapSize):me[_e]=ct?A.image[_e].image:A.image[_e],me[_e]=lt(A,me[_e]);const St=me[0],ft=S(St)||u,rt=a.convert(A.format,A.colorSpace),Xe=a.convert(A.type),Pe=C(A.internalFormat,rt,Xe,A.colorSpace),F=u&&A.isVideoTexture!==!0,Te=Me.__version===void 0||xe===!0;let We=k(A,St,ft);Y(o.TEXTURE_CUBE_MAP,A,ft);let De;if(Ke){F&&Te&&t.texStorage2D(o.TEXTURE_CUBE_MAP,We,Pe,St.width,St.height);for(let _e=0;_e<6;_e++){De=me[_e].mipmaps;for(let B=0;B<De.length;B++){const Ee=De[B];A.format!==li?rt!==null?F?t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,B,0,0,Ee.width,Ee.height,rt,Ee.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,B,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,B,0,0,Ee.width,Ee.height,rt,Xe,Ee.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,B,Pe,Ee.width,Ee.height,0,rt,Xe,Ee.data)}}}else{De=A.mipmaps,F&&Te&&(De.length>0&&We++,t.texStorage2D(o.TEXTURE_CUBE_MAP,We,Pe,me[0].width,me[0].height));for(let _e=0;_e<6;_e++)if(ct){F?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,me[_e].width,me[_e].height,rt,Xe,me[_e].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Pe,me[_e].width,me[_e].height,0,rt,Xe,me[_e].data);for(let B=0;B<De.length;B++){const Re=De[B].image[_e].image;F?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,B+1,0,0,Re.width,Re.height,rt,Xe,Re.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,B+1,Pe,Re.width,Re.height,0,rt,Xe,Re.data)}}else{F?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,rt,Xe,me[_e]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Pe,rt,Xe,me[_e]);for(let B=0;B<De.length;B++){const Ee=De[B];F?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,B+1,0,0,rt,Xe,Ee.image[_e]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,B+1,Pe,rt,Xe,Ee.image[_e])}}}b(A,ft)&&w(o.TEXTURE_CUBE_MAP),Me.__version=ve.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ye(P,A,te,xe,ve,Me){const Ge=a.convert(te.format,te.colorSpace),Ce=a.convert(te.type),Ue=C(te.internalFormat,Ge,Ce,te.colorSpace);if(!i.get(A).__hasExternalTextures){const ct=Math.max(1,A.width>>Me),me=Math.max(1,A.height>>Me);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?t.texImage3D(ve,Me,Ue,ct,me,A.depth,0,Ge,Ce,null):t.texImage2D(ve,Me,Ue,ct,me,0,Ge,Ce,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),He(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xe,ve,i.get(te).__webglTexture,0,it(A)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xe,ve,i.get(te).__webglTexture,Me),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ae(P,A,te){if(o.bindRenderbuffer(o.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let xe=u===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(te||He(A)){const ve=A.depthTexture;ve&&ve.isDepthTexture&&(ve.type===Ji?xe=o.DEPTH_COMPONENT32F:ve.type===Lr&&(xe=o.DEPTH_COMPONENT24));const Me=it(A);He(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Me,xe,A.width,A.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Me,xe,A.width,A.height)}else o.renderbufferStorage(o.RENDERBUFFER,xe,A.width,A.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const xe=it(A);te&&He(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,xe,o.DEPTH24_STENCIL8,A.width,A.height):He(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xe,o.DEPTH24_STENCIL8,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,P)}else{const xe=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ve=0;ve<xe.length;ve++){const Me=xe[ve],Ge=a.convert(Me.format,Me.colorSpace),Ce=a.convert(Me.type),Ue=C(Me.internalFormat,Ge,Ce,Me.colorSpace),Ke=it(A);te&&He(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke,Ue,A.width,A.height):He(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ke,Ue,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Le(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ie(A.depthTexture,0);const xe=i.get(A.depthTexture).__webglTexture,ve=it(A);if(A.depthTexture.format===as)He(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xe,0,ve):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xe,0);else if(A.depthTexture.format===ho)He(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xe,0,ve):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const A=i.get(P),te=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Le(A.__webglFramebuffer,P)}else if(te){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]=o.createRenderbuffer(),Ae(A.__webglDepthbuffer[xe],P,!1)}else t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),Ae(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(o.FRAMEBUFFER,null)}function at(P,A,te){const xe=i.get(P);A!==void 0&&ye(xe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&Oe(P)}function ne(P){const A=P.texture,te=i.get(P),xe=i.get(A);P.addEventListener("dispose",ce),P.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=o.createTexture()),xe.__version=A.version,c.memory.textures++);const ve=P.isWebGLCubeRenderTarget===!0,Me=P.isWebGLMultipleRenderTargets===!0,Ge=S(P)||u;if(ve){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(u&&A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)te.__webglFramebuffer[Ce][Ue]=o.createFramebuffer()}else te.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(u&&A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(Me)if(s.drawBuffers){const Ce=P.texture;for(let Ue=0,Ke=Ce.length;Ue<Ke;Ue++){const ct=i.get(Ce[Ue]);ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&P.samples>0&&He(P)===!1){const Ce=Me?A:[A];te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Ce.length;Ue++){const Ke=Ce[Ue];te.__webglColorRenderbuffer[Ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[Ue]);const ct=a.convert(Ke.format,Ke.colorSpace),me=a.convert(Ke.type),St=C(Ke.internalFormat,ct,me,Ke.colorSpace,P.isXRRenderTarget===!0),ft=it(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,ft,St,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,te.__webglColorRenderbuffer[Ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),Ae(te.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ve){t.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),Y(o.TEXTURE_CUBE_MAP,A,Ge);for(let Ce=0;Ce<6;Ce++)if(u&&A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)ye(te.__webglFramebuffer[Ce][Ue],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else ye(te.__webglFramebuffer[Ce],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);b(A,Ge)&&w(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){const Ce=P.texture;for(let Ue=0,Ke=Ce.length;Ue<Ke;Ue++){const ct=Ce[Ue],me=i.get(ct);t.bindTexture(o.TEXTURE_2D,me.__webglTexture),Y(o.TEXTURE_2D,ct,Ge),ye(te.__webglFramebuffer,P,ct,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,0),b(ct,Ge)&&w(o.TEXTURE_2D)}t.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(u?Ce=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ce,xe.__webglTexture),Y(Ce,A,Ge),u&&A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)ye(te.__webglFramebuffer[Ue],P,A,o.COLOR_ATTACHMENT0,Ce,Ue);else ye(te.__webglFramebuffer,P,A,o.COLOR_ATTACHMENT0,Ce,0);b(A,Ge)&&w(Ce),t.unbindTexture()}P.depthBuffer&&Oe(P)}function qt(P){const A=S(P)||u,te=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let xe=0,ve=te.length;xe<ve;xe++){const Me=te[xe];if(b(Me,A)){const Ge=P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ce=i.get(Me).__webglTexture;t.bindTexture(Ge,Ce),w(Ge),t.unbindTexture()}}}function qe(P){if(u&&P.samples>0&&He(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],te=P.width,xe=P.height;let ve=o.COLOR_BUFFER_BIT;const Me=[],Ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=i.get(P),Ue=P.isWebGLMultipleRenderTargets===!0;if(Ue)for(let Ke=0;Ke<A.length;Ke++)t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ke=0;Ke<A.length;Ke++){Me.push(o.COLOR_ATTACHMENT0+Ke),P.depthBuffer&&Me.push(Ge);const ct=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(ct===!1&&(P.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),Ue&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ke]),ct===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ge]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ge])),Ue){const me=i.get(A[Ke]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,te,xe,0,0,te,xe,ve,o.NEAREST),h&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Me)}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ue)for(let Ke=0;Ke<A.length;Ke++){t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ke]);const ct=i.get(A[Ke]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.TEXTURE_2D,ct,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function it(P){return Math.min(s.maxSamples,P.samples)}function He(P){const A=i.get(P);return u&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Rt(P){const A=c.render.frame;p.get(P)!==A&&(p.set(P,A),P.update())}function lt(P,A){const te=P.colorSpace,xe=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Jf||te!==dn&&te!==ci&&(bt.getTransfer(te)===Bt?u===!1?e.has("EXT_sRGB")===!0&&xe===li?(P.format=Jf,P.minFilter=Hn,P.generateMipmaps=!1):A=M_.sRGBToLinear(A):(xe!==li||ve!==Ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}this.allocateTextureUnit=V,this.resetTextureUnits=he,this.setTexture2D=ie,this.setTexture2DArray=ee,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=at,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=He}function ZT(o,e,t){const i=t.isWebGL2;function s(a,c=ci){let u;const d=bt.getTransfer(c);if(a===Ur)return o.UNSIGNED_BYTE;if(a===f_)return o.UNSIGNED_SHORT_4_4_4_4;if(a===d_)return o.UNSIGNED_SHORT_5_5_5_1;if(a===vy)return o.BYTE;if(a===yy)return o.SHORT;if(a===cd)return o.UNSIGNED_SHORT;if(a===u_)return o.INT;if(a===Lr)return o.UNSIGNED_INT;if(a===Ji)return o.FLOAT;if(a===va)return i?o.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(a===xy)return o.ALPHA;if(a===li)return o.RGBA;if(a===Sy)return o.LUMINANCE;if(a===My)return o.LUMINANCE_ALPHA;if(a===as)return o.DEPTH_COMPONENT;if(a===ho)return o.DEPTH_STENCIL;if(a===Jf)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(a===Ey)return o.RED;if(a===h_)return o.RED_INTEGER;if(a===Ty)return o.RG;if(a===p_)return o.RG_INTEGER;if(a===m_)return o.RGBA_INTEGER;if(a===of||a===af||a===lf||a===cf)if(d===Bt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===of)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===af)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===lf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===cf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===of)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===af)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===lf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===cf)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===dm||a===hm||a===pm||a===mm)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===dm)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===hm)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===pm)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===mm)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===g_)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===gm||a===_m)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(a===gm)return d===Bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===_m)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===vm||a===ym||a===xm||a===Sm||a===Mm||a===Em||a===Tm||a===wm||a===Am||a===bm||a===Rm||a===Cm||a===Lm||a===Pm)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(a===vm)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ym)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===xm)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Sm)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Mm)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Em)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Tm)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===wm)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Am)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===bm)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Rm)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Cm)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Lm)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Pm)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===uf||a===Nm||a===Im)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(a===uf)return d===Bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Nm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Im)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===wy||a===Dm||a===Um||a===Om)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(a===uf)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Dm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Um)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Om)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===os?i?o.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):o[a]!==void 0?o[a]:null}return{convert:s}}class JT extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pr extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QT={type:"move"};class Df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),v=this._getHandJoint(h,E);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],_=p.position.distanceTo(m.position),x=.02,M=.005;h.inputState.pinching&&_>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(QT)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ew extends hs{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",d=1,h=null,p=null,m=null,_=null,x=null,M=null;const E=t.getContextAttributes();let S=null,v=null;const b=[],w=[],C=new nt;let k=null;const D=new Nn;D.layers.enable(1),D.viewport=new It;const U=new Nn;U.layers.enable(2),U.viewport=new It;const ce=[D,U],R=new JT;R.layers.enable(1),R.layers.enable(2);let N=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=b[Y];return J===void 0&&(J=new Df,b[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=b[Y];return J===void 0&&(J=new Df,b[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=b[Y];return J===void 0&&(J=new Df,b[Y]=J),J.getHandSpace()};function le(Y){const J=w.indexOf(Y.inputSource);if(J===-1)return;const fe=b[J];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,h||c),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function he(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",he),s.removeEventListener("inputsourceschange",V);for(let Y=0;Y<b.length;Y++){const J=w[Y];J!==null&&(w[Y]=null,b[Y].disconnect(J))}N=null,ae=null,e.setRenderTarget(S),x=null,_=null,m=null,s=null,v=null,W.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){u=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",he),s.addEventListener("inputsourceschange",V),E.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:s.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new us(x.framebufferWidth,x.framebufferHeight,{format:li,type:Ur,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let J=null,fe=null,de=null;E.depth&&(de=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=E.stencil?ho:as,fe=E.stencil?os:Lr);const ye={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:a};m=new XRWebGLBinding(s,t),_=m.createProjectionLayer(ye),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),v=new us(_.textureWidth,_.textureHeight,{format:li,type:Ur,depthTexture:new N_(_.textureWidth,_.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Ae=e.properties.get(v);Ae.__ignoreDepthValues=_.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await s.requestReferenceSpace(u),W.setContext(s),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function V(Y){for(let J=0;J<Y.removed.length;J++){const fe=Y.removed[J],de=w.indexOf(fe);de>=0&&(w[de]=null,b[de].disconnect(fe))}for(let J=0;J<Y.added.length;J++){const fe=Y.added[J];let de=w.indexOf(fe);if(de===-1){for(let Ae=0;Ae<b.length;Ae++)if(Ae>=w.length){w.push(fe),de=Ae;break}else if(w[Ae]===null){w[Ae]=fe,de=Ae;break}if(de===-1)break}const ye=b[de];ye&&ye.connect(fe)}}const Z=new H,ie=new H;function ee(Y,J,fe){Z.setFromMatrixPosition(J.matrixWorld),ie.setFromMatrixPosition(fe.matrixWorld);const de=Z.distanceTo(ie),ye=J.projectionMatrix.elements,Ae=fe.projectionMatrix.elements,Le=ye[14]/(ye[10]-1),Oe=ye[14]/(ye[10]+1),at=(ye[9]+1)/ye[5],ne=(ye[9]-1)/ye[5],qt=(ye[8]-1)/ye[0],qe=(Ae[8]+1)/Ae[0],it=Le*qt,He=Le*qe,Rt=de/(-qt+qe),lt=Rt*-qt;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(lt),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const P=Le+Rt,A=Oe+Rt,te=it-lt,xe=He+(de-lt),ve=at*Oe/A*P,Me=ne*Oe/A*P;Y.projectionMatrix.makePerspective(te,xe,ve,Me,P,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function j(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;R.near=U.near=D.near=Y.near,R.far=U.far=D.far=Y.far,(N!==R.near||ae!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,ae=R.far);const J=Y.parent,fe=R.cameras;j(R,J);for(let de=0;de<fe.length;de++)j(fe[de],J);fe.length===2?ee(R,D,U):R.projectionMatrix.copy(D.projectionMatrix),$(Y,R,J)};function $(Y,J,fe){fe===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=mo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(Y){d=Y,_!==null&&(_.fixedFoveation=Y),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Y)};let X=null;function I(Y,J){if(p=J.getViewerPose(h||c),M=J,p!==null){const fe=p.views;x!==null&&(e.setRenderTargetFramebuffer(v,x.framebuffer),e.setRenderTarget(v));let de=!1;fe.length!==R.cameras.length&&(R.cameras.length=0,de=!0);for(let ye=0;ye<fe.length;ye++){const Ae=fe[ye];let Le=null;if(x!==null)Le=x.getViewport(Ae);else{const at=m.getViewSubImage(_,Ae);Le=at.viewport,ye===0&&(e.setRenderTargetTextures(v,at.colorTexture,_.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(v))}let Oe=ce[ye];Oe===void 0&&(Oe=new Nn,Oe.layers.enable(ye),Oe.viewport=new It,ce[ye]=Oe),Oe.matrix.fromArray(Ae.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ae.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Le.x,Le.y,Le.width,Le.height),ye===0&&(R.matrix.copy(Oe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),de===!0&&R.cameras.push(Oe)}}for(let fe=0;fe<b.length;fe++){const de=w[fe],ye=b[fe];de!==null&&ye!==void 0&&ye.update(de,J,h||c)}X&&X(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),M=null}const W=new P_;W.setAnimationLoop(I),this.setAnimationLoop=function(Y){X=Y},this.dispose=function(){}}}function tw(o,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function i(S,v){v.color.getRGB(S.fogColor.value,R_(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function s(S,v,b,w,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(S,v):v.isMeshToonMaterial?(a(S,v),m(S,v)):v.isMeshPhongMaterial?(a(S,v),p(S,v)):v.isMeshStandardMaterial?(a(S,v),_(S,v),v.isMeshPhysicalMaterial&&x(S,v,C)):v.isMeshMatcapMaterial?(a(S,v),M(S,v)):v.isMeshDepthMaterial?a(S,v):v.isMeshDistanceMaterial?(a(S,v),E(S,v)):v.isMeshNormalMaterial?a(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&u(S,v)):v.isPointsMaterial?d(S,v,b,w):v.isSpriteMaterial?h(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Vn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Vn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const b=e.get(v).envMap;if(b&&(S.envMap.value=b,S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap){S.lightMap.value=v.lightMap;const w=o._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=v.lightMapIntensity*w,t(v.lightMap,S.lightMapTransform)}v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function u(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function d(S,v,b,w){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*b,S.scale.value=w*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function m(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function _(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),e.get(v).envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function x(S,v,b){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&S.clearcoatNormalScale.value.negate())),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function E(S,v){const b=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nw(o,e,t,i){let s={},a={},c=[];const u=t.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(b,w){const C=w.program;i.uniformBlockBinding(b,C)}function h(b,w){let C=s[b.id];C===void 0&&(M(b),C=p(b),s[b.id]=C,b.addEventListener("dispose",S));const k=w.program;i.updateUBOMapping(b,k);const D=e.render.frame;a[b.id]!==D&&(_(b),a[b.id]=D)}function p(b){const w=m();b.__bindingPointIndex=w;const C=o.createBuffer(),k=b.__size,D=b.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,k,D),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,C),C}function m(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(b){const w=s[b.id],C=b.uniforms,k=b.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let D=0,U=C.length;D<U;D++){const ce=Array.isArray(C[D])?C[D]:[C[D]];for(let R=0,N=ce.length;R<N;R++){const ae=ce[R];if(x(ae,D,R,k)===!0){const le=ae.__offset,he=Array.isArray(ae.value)?ae.value:[ae.value];let V=0;for(let Z=0;Z<he.length;Z++){const ie=he[Z],ee=E(ie);typeof ie=="number"||typeof ie=="boolean"?(ae.__data[0]=ie,o.bufferSubData(o.UNIFORM_BUFFER,le+V,ae.__data)):ie.isMatrix3?(ae.__data[0]=ie.elements[0],ae.__data[1]=ie.elements[1],ae.__data[2]=ie.elements[2],ae.__data[3]=0,ae.__data[4]=ie.elements[3],ae.__data[5]=ie.elements[4],ae.__data[6]=ie.elements[5],ae.__data[7]=0,ae.__data[8]=ie.elements[6],ae.__data[9]=ie.elements[7],ae.__data[10]=ie.elements[8],ae.__data[11]=0):(ie.toArray(ae.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,ae.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(b,w,C,k){const D=b.value,U=w+"_"+C;if(k[U]===void 0)return typeof D=="number"||typeof D=="boolean"?k[U]=D:k[U]=D.clone(),!0;{const ce=k[U];if(typeof D=="number"||typeof D=="boolean"){if(ce!==D)return k[U]=D,!0}else if(ce.equals(D)===!1)return ce.copy(D),!0}return!1}function M(b){const w=b.uniforms;let C=0;const k=16;for(let U=0,ce=w.length;U<ce;U++){const R=Array.isArray(w[U])?w[U]:[w[U]];for(let N=0,ae=R.length;N<ae;N++){const le=R[N],he=Array.isArray(le.value)?le.value:[le.value];for(let V=0,Z=he.length;V<Z;V++){const ie=he[V],ee=E(ie),j=C%k;j!==0&&k-j<ee.boundary&&(C+=k-j),le.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=C,C+=ee.storage}}}const D=C%k;return D>0&&(C+=k-D),b.__size=C,b.__cache={},this}function E(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function S(b){const w=b.target;w.removeEventListener("dispose",S);const C=c.indexOf(w.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function v(){for(const b in s)o.deleteBuffer(s[b]);c=[],s={},a={}}return{bind:d,update:h,dispose:v}}class k_{constructor(e={}){const{canvas:t=Jy(),context:i=null,depth:s=!0,stencil:a=!0,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let _;i!==null?_=i.getContextAttributes().alpha:_=c;const x=new Uint32Array(4),M=new Int32Array(4);let E=null,S=null;const v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=Dr,this.toneMappingExposure=1;const w=this;let C=!1,k=0,D=0,U=null,ce=-1,R=null;const N=new It,ae=new It;let le=null;const he=new et(0);let V=0,Z=t.width,ie=t.height,ee=1,j=null,$=null;const X=new It(0,0,Z,ie),I=new It(0,0,Z,ie);let W=!1;const Y=new pd;let J=!1,fe=!1,de=null;const ye=new xt,Ae=new nt,Le=new H,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return U===null?ee:1}let ne=i;function qt(L,K){for(let oe=0;oe<L.length;oe++){const ue=L[oe],se=t.getContext(ue,K);if(se!==null)return se}return null}try{const L={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ad}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),ne===null){const K=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&K.shift(),ne=qt(K,L),ne===null)throw qt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ne instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let qe,it,He,Rt,lt,P,A,te,xe,ve,Me,Ge,Ce,Ue,Ke,ct,me,St,ft,rt,Xe,Pe,F,Te;function We(){qe=new dE(ne),it=new oE(ne,qe,e),qe.init(it),Pe=new ZT(ne,qe,it),He=new KT(ne,qe,it),Rt=new mE(ne),lt=new UT,P=new $T(ne,qe,He,lt,it,Pe,Rt),A=new lE(w),te=new fE(w),xe=new Ex(ne,it),F=new rE(ne,qe,xe,it),ve=new hE(ne,xe,Rt,F),Me=new yE(ne,ve,xe,Rt),ft=new vE(ne,it,P),ct=new aE(lt),Ge=new DT(w,A,te,qe,it,F,ct),Ce=new tw(w,lt),Ue=new FT,Ke=new GT(qe,it),St=new iE(w,A,te,He,Me,_,d),me=new qT(w,Me,it),Te=new nw(ne,Rt,it,He),rt=new sE(ne,qe,Rt,it),Xe=new pE(ne,qe,Rt,it),Rt.programs=Ge.programs,w.capabilities=it,w.extensions=qe,w.properties=lt,w.renderLists=Ue,w.shadowMap=me,w.state=He,w.info=Rt}We();const De=new ew(w,ne);this.xr=De,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const L=qe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=qe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(L){L!==void 0&&(ee=L,this.setSize(Z,ie,!1))},this.getSize=function(L){return L.set(Z,ie)},this.setSize=function(L,K,oe=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=L,ie=K,t.width=Math.floor(L*ee),t.height=Math.floor(K*ee),oe===!0&&(t.style.width=L+"px",t.style.height=K+"px"),this.setViewport(0,0,L,K)},this.getDrawingBufferSize=function(L){return L.set(Z*ee,ie*ee).floor()},this.setDrawingBufferSize=function(L,K,oe){Z=L,ie=K,ee=oe,t.width=Math.floor(L*oe),t.height=Math.floor(K*oe),this.setViewport(0,0,L,K)},this.getCurrentViewport=function(L){return L.copy(N)},this.getViewport=function(L){return L.copy(X)},this.setViewport=function(L,K,oe,ue){L.isVector4?X.set(L.x,L.y,L.z,L.w):X.set(L,K,oe,ue),He.viewport(N.copy(X).multiplyScalar(ee).floor())},this.getScissor=function(L){return L.copy(I)},this.setScissor=function(L,K,oe,ue){L.isVector4?I.set(L.x,L.y,L.z,L.w):I.set(L,K,oe,ue),He.scissor(ae.copy(I).multiplyScalar(ee).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(L){He.setScissorTest(W=L)},this.setOpaqueSort=function(L){j=L},this.setTransparentSort=function(L){$=L},this.getClearColor=function(L){return L.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(L=!0,K=!0,oe=!0){let ue=0;if(L){let se=!1;if(U!==null){const Ne=U.texture.format;se=Ne===m_||Ne===p_||Ne===h_}if(se){const Ne=U.texture.type,Ye=Ne===Ur||Ne===Lr||Ne===cd||Ne===os||Ne===f_||Ne===d_,tt=St.getClearColor(),Fe=St.getClearAlpha(),dt=tt.r,ot=tt.g,ut=tt.b;Ye?(x[0]=dt,x[1]=ot,x[2]=ut,x[3]=Fe,ne.clearBufferuiv(ne.COLOR,0,x)):(M[0]=dt,M[1]=ot,M[2]=ut,M[3]=Fe,ne.clearBufferiv(ne.COLOR,0,M))}else ue|=ne.COLOR_BUFFER_BIT}K&&(ue|=ne.DEPTH_BUFFER_BIT),oe&&(ue|=ne.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ue.dispose(),Ke.dispose(),lt.dispose(),A.dispose(),te.dispose(),Me.dispose(),F.dispose(),Te.dispose(),Ge.dispose(),De.dispose(),De.removeEventListener("sessionstart",zt),De.removeEventListener("sessionend",_t),de&&(de.dispose(),de=null),Ht.stop()};function _e(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const L=Rt.autoReset,K=me.enabled,oe=me.autoUpdate,ue=me.needsUpdate,se=me.type;We(),Rt.autoReset=L,me.enabled=K,me.autoUpdate=oe,me.needsUpdate=ue,me.type=se}function Ee(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Re(L){const K=L.target;K.removeEventListener("dispose",Re),Qe(K)}function Qe(L){$e(L),lt.remove(L)}function $e(L){const K=lt.get(L).programs;K!==void 0&&(K.forEach(function(oe){Ge.releaseProgram(oe)}),L.isShaderMaterial&&Ge.releaseShaderCache(L))}this.renderBufferDirect=function(L,K,oe,ue,se,Ne){K===null&&(K=Oe);const Ye=se.isMesh&&se.matrixWorld.determinant()<0,tt=Mc(L,K,oe,ue,se);He.setMaterial(ue,Ye);let Fe=oe.index,dt=1;if(ue.wireframe===!0){if(Fe=ve.getWireframeAttribute(oe),Fe===void 0)return;dt=2}const ot=oe.drawRange,ut=oe.attributes.position;let Ut=ot.start*dt,An=(ot.start+ot.count)*dt;Ne!==null&&(Ut=Math.max(Ut,Ne.start*dt),An=Math.min(An,(Ne.start+Ne.count)*dt)),Fe!==null?(Ut=Math.max(Ut,0),An=Math.min(An,Fe.count)):ut!=null&&(Ut=Math.max(Ut,0),An=Math.min(An,ut.count));const Jt=An-Ut;if(Jt<0||Jt===1/0)return;F.setup(se,ue,tt,oe,Fe);let In,Tt=rt;if(Fe!==null&&(In=xe.get(Fe),Tt=Xe,Tt.setIndex(In)),se.isMesh)ue.wireframe===!0?(He.setLineWidth(ue.wireframeLinewidth*at()),Tt.setMode(ne.LINES)):Tt.setMode(ne.TRIANGLES);else if(se.isLine){let ht=ue.linewidth;ht===void 0&&(ht=1),He.setLineWidth(ht*at()),se.isLineSegments?Tt.setMode(ne.LINES):se.isLineLoop?Tt.setMode(ne.LINE_LOOP):Tt.setMode(ne.LINE_STRIP)}else se.isPoints?Tt.setMode(ne.POINTS):se.isSprite&&Tt.setMode(ne.TRIANGLES);if(se.isBatchedMesh)Tt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else if(se.isInstancedMesh)Tt.renderInstances(Ut,Jt,se.count);else if(oe.isInstancedBufferGeometry){const ht=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,bn=Math.min(oe.instanceCount,ht);Tt.renderInstances(Ut,Jt,bn)}else Tt.render(Ut,Jt)};function mt(L,K,oe){L.transparent===!0&&L.side===xi&&L.forceSinglePass===!1?(L.side=Vn,L.needsUpdate=!0,nr(L,K,oe),L.side=er,L.needsUpdate=!0,nr(L,K,oe),L.side=xi):nr(L,K,oe)}this.compile=function(L,K,oe=null){oe===null&&(oe=L),S=Ke.get(oe),S.init(),b.push(S),oe.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),L!==oe&&L.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),S.setupLights(w._useLegacyLights);const ue=new Set;return L.traverse(function(se){const Ne=se.material;if(Ne)if(Array.isArray(Ne))for(let Ye=0;Ye<Ne.length;Ye++){const tt=Ne[Ye];mt(tt,oe,se),ue.add(tt)}else mt(Ne,oe,se),ue.add(Ne)}),b.pop(),S=null,ue},this.compileAsync=function(L,K,oe=null){const ue=this.compile(L,K,oe);return new Promise(se=>{function Ne(){if(ue.forEach(function(Ye){lt.get(Ye).currentProgram.isReady()&&ue.delete(Ye)}),ue.size===0){se(L);return}setTimeout(Ne,10)}qe.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let gt=null;function Dt(L){gt&&gt(L)}function zt(){Ht.stop()}function _t(){Ht.start()}const Ht=new P_;Ht.setAnimationLoop(Dt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(L){gt=L,De.setAnimationLoop(L),L===null?Ht.stop():Ht.start()},De.addEventListener("sessionstart",zt),De.addEventListener("sessionend",_t),this.render=function(L,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(K),K=De.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,K,U),S=Ke.get(L,b.length),S.init(),b.push(S),ye.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Y.setFromProjectionMatrix(ye),fe=this.localClippingEnabled,J=ct.init(this.clippingPlanes,fe),E=Ue.get(L,v.length),E.init(),v.push(E),yn(L,K,0,w.sortObjects),E.finish(),w.sortObjects===!0&&E.sort(j,$),this.info.render.frame++,J===!0&&ct.beginShadows();const oe=S.state.shadowsArray;if(me.render(oe,L,K),J===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),St.render(E,L),S.setupLights(w._useLegacyLights),K.isArrayCamera){const ue=K.cameras;for(let se=0,Ne=ue.length;se<Ne;se++){const Ye=ue[se];Ea(E,L,Ye,Ye.viewport)}}else Ea(E,L,K);U!==null&&(P.updateMultisampleRenderTarget(U),P.updateRenderTargetMipmap(U)),L.isScene===!0&&L.onAfterRender(w,L,K),F.resetDefaultState(),ce=-1,R=null,b.pop(),b.length>0?S=b[b.length-1]:S=null,v.pop(),v.length>0?E=v[v.length-1]:E=null};function yn(L,K,oe,ue){if(L.visible===!1)return;if(L.layers.test(K.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(K);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Y.intersectsSprite(L)){ue&&Le.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ye);const Ye=Me.update(L),tt=L.material;tt.visible&&E.push(L,Ye,tt,oe,Le.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Y.intersectsObject(L))){const Ye=Me.update(L),tt=L.material;if(ue&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Le.copy(L.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Le.copy(Ye.boundingSphere.center)),Le.applyMatrix4(L.matrixWorld).applyMatrix4(ye)),Array.isArray(tt)){const Fe=Ye.groups;for(let dt=0,ot=Fe.length;dt<ot;dt++){const ut=Fe[dt],Ut=tt[ut.materialIndex];Ut&&Ut.visible&&E.push(L,Ye,Ut,oe,Le.z,ut)}}else tt.visible&&E.push(L,Ye,tt,oe,Le.z,null)}}const Ne=L.children;for(let Ye=0,tt=Ne.length;Ye<tt;Ye++)yn(Ne[Ye],K,oe,ue)}function Ea(L,K,oe,ue){const se=L.opaque,Ne=L.transmissive,Ye=L.transparent;S.setupLightsView(oe),J===!0&&ct.setGlobalState(w.clippingPlanes,oe),Ne.length>0&&Fr(se,Ne,K,oe),ue&&He.viewport(N.copy(ue)),se.length>0&&Di(se,K,oe),Ne.length>0&&Di(Ne,K,oe),Ye.length>0&&Di(Ye,K,oe),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Fr(L,K,oe,ue){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;const Ne=it.isWebGL2;de===null&&(de=new us(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")?va:Ur,minFilter:cs,samples:Ne?4:0})),w.getDrawingBufferSize(Ae),Ne?de.setSize(Ae.x,Ae.y):de.setSize(gc(Ae.x),gc(Ae.y));const Ye=w.getRenderTarget();w.setRenderTarget(de),w.getClearColor(he),V=w.getClearAlpha(),V<1&&w.setClearColor(16777215,.5),w.clear();const tt=w.toneMapping;w.toneMapping=Dr,Di(L,oe,ue),P.updateMultisampleRenderTarget(de),P.updateRenderTargetMipmap(de);let Fe=!1;for(let dt=0,ot=K.length;dt<ot;dt++){const ut=K[dt],Ut=ut.object,An=ut.geometry,Jt=ut.material,In=ut.group;if(Jt.side===xi&&Ut.layers.test(ue.layers)){const Tt=Jt.side;Jt.side=Vn,Jt.needsUpdate=!0,kr(Ut,oe,ue,An,Jt,In),Jt.side=Tt,Jt.needsUpdate=!0,Fe=!0}}Fe===!0&&(P.updateMultisampleRenderTarget(de),P.updateRenderTargetMipmap(de)),w.setRenderTarget(Ye),w.setClearColor(he,V),w.toneMapping=tt}function Di(L,K,oe){const ue=K.isScene===!0?K.overrideMaterial:null;for(let se=0,Ne=L.length;se<Ne;se++){const Ye=L[se],tt=Ye.object,Fe=Ye.geometry,dt=ue===null?Ye.material:ue,ot=Ye.group;tt.layers.test(oe.layers)&&kr(tt,K,oe,Fe,dt,ot)}}function kr(L,K,oe,ue,se,Ne){L.onBeforeRender(w,K,oe,ue,se,Ne),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),se.onBeforeRender(w,K,oe,ue,L,Ne),se.transparent===!0&&se.side===xi&&se.forceSinglePass===!1?(se.side=Vn,se.needsUpdate=!0,w.renderBufferDirect(oe,K,ue,se,L,Ne),se.side=er,se.needsUpdate=!0,w.renderBufferDirect(oe,K,ue,se,L,Ne),se.side=xi):w.renderBufferDirect(oe,K,ue,se,L,Ne),L.onAfterRender(w,K,oe,ue,se,Ne)}function nr(L,K,oe){K.isScene!==!0&&(K=Oe);const ue=lt.get(L),se=S.state.lights,Ne=S.state.shadowsArray,Ye=se.state.version,tt=Ge.getParameters(L,se.state,Ne,K,oe),Fe=Ge.getProgramCacheKey(tt);let dt=ue.programs;ue.environment=L.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(L.isMeshStandardMaterial?te:A).get(L.envMap||ue.environment),dt===void 0&&(L.addEventListener("dispose",Re),dt=new Map,ue.programs=dt);let ot=dt.get(Fe);if(ot!==void 0){if(ue.currentProgram===ot&&ue.lightsStateVersion===Ye)return wa(L,tt),ot}else tt.uniforms=Ge.getUniforms(L),L.onBuild(oe,tt,w),L.onBeforeCompile(tt,w),ot=Ge.acquireProgram(tt,Fe),dt.set(Fe,ot),ue.uniforms=tt.uniforms;const ut=ue.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ut.clippingPlanes=ct.uniform),wa(L,tt),ue.needsLights=Aa(L),ue.lightsStateVersion=Ye,ue.needsLights&&(ut.ambientLightColor.value=se.state.ambient,ut.lightProbe.value=se.state.probe,ut.directionalLights.value=se.state.directional,ut.directionalLightShadows.value=se.state.directionalShadow,ut.spotLights.value=se.state.spot,ut.spotLightShadows.value=se.state.spotShadow,ut.rectAreaLights.value=se.state.rectArea,ut.ltc_1.value=se.state.rectAreaLTC1,ut.ltc_2.value=se.state.rectAreaLTC2,ut.pointLights.value=se.state.point,ut.pointLightShadows.value=se.state.pointShadow,ut.hemisphereLights.value=se.state.hemi,ut.directionalShadowMap.value=se.state.directionalShadowMap,ut.directionalShadowMatrix.value=se.state.directionalShadowMatrix,ut.spotShadowMap.value=se.state.spotShadowMap,ut.spotLightMatrix.value=se.state.spotLightMatrix,ut.spotLightMap.value=se.state.spotLightMap,ut.pointShadowMap.value=se.state.pointShadowMap,ut.pointShadowMatrix.value=se.state.pointShadowMatrix),ue.currentProgram=ot,ue.uniformsList=null,ot}function Ta(L){if(L.uniformsList===null){const K=L.currentProgram.getUniforms();L.uniformsList=lc.seqWithValue(K.seq,L.uniforms)}return L.uniformsList}function wa(L,K){const oe=lt.get(L);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function Mc(L,K,oe,ue,se){K.isScene!==!0&&(K=Oe),P.resetTextureUnits();const Ne=K.fog,Ye=ue.isMeshStandardMaterial?K.environment:null,tt=U===null?w.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:dn,Fe=(ue.isMeshStandardMaterial?te:A).get(ue.envMap||Ye),dt=ue.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ot=!!oe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),ut=!!oe.morphAttributes.position,Ut=!!oe.morphAttributes.normal,An=!!oe.morphAttributes.color;let Jt=Dr;ue.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Jt=w.toneMapping);const In=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Tt=In!==void 0?In.length:0,ht=lt.get(ue),bn=S.state.lights;if(J===!0&&(fe===!0||L!==R)){const Dn=L===R&&ue.id===ce;ct.setState(ue,L,Dn)}let Vt=!1;ue.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==bn.state.version||ht.outputColorSpace!==tt||se.isBatchedMesh&&ht.batching===!1||!se.isBatchedMesh&&ht.batching===!0||se.isInstancedMesh&&ht.instancing===!1||!se.isInstancedMesh&&ht.instancing===!0||se.isSkinnedMesh&&ht.skinning===!1||!se.isSkinnedMesh&&ht.skinning===!0||se.isInstancedMesh&&ht.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&ht.instancingColor===!1&&se.instanceColor!==null||ht.envMap!==Fe||ue.fog===!0&&ht.fog!==Ne||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==ct.numPlanes||ht.numIntersection!==ct.numIntersection)||ht.vertexAlphas!==dt||ht.vertexTangents!==ot||ht.morphTargets!==ut||ht.morphNormals!==Ut||ht.morphColors!==An||ht.toneMapping!==Jt||it.isWebGL2===!0&&ht.morphTargetsCount!==Tt)&&(Vt=!0):(Vt=!0,ht.__version=ue.version);let Oi=ht.currentProgram;Vt===!0&&(Oi=nr(ue,K,se));let ba=!1,Mi=!1,ir=!1;const Kt=Oi.getUniforms(),Zn=ht.uniforms;if(He.useProgram(Oi.program)&&(ba=!0,Mi=!0,ir=!0),ue.id!==ce&&(ce=ue.id,Mi=!0),ba||R!==L){Kt.setValue(ne,"projectionMatrix",L.projectionMatrix),Kt.setValue(ne,"viewMatrix",L.matrixWorldInverse);const Dn=Kt.map.cameraPosition;Dn!==void 0&&Dn.setValue(ne,Le.setFromMatrixPosition(L.matrixWorld)),it.logarithmicDepthBuffer&&Kt.setValue(ne,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Kt.setValue(ne,"isOrthographic",L.isOrthographicCamera===!0),R!==L&&(R=L,Mi=!0,ir=!0)}if(se.isSkinnedMesh){Kt.setOptional(ne,se,"bindMatrix"),Kt.setOptional(ne,se,"bindMatrixInverse");const Dn=se.skeleton;Dn&&(it.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),Kt.setValue(ne,"boneTexture",Dn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}se.isBatchedMesh&&(Kt.setOptional(ne,se,"batchingTexture"),Kt.setValue(ne,"batchingTexture",se._matricesTexture,P));const Ao=oe.morphAttributes;if((Ao.position!==void 0||Ao.normal!==void 0||Ao.color!==void 0&&it.isWebGL2===!0)&&ft.update(se,oe,Oi),(Mi||ht.receiveShadow!==se.receiveShadow)&&(ht.receiveShadow=se.receiveShadow,Kt.setValue(ne,"receiveShadow",se.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Zn.envMap.value=Fe,Zn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Mi&&(Kt.setValue(ne,"toneMappingExposure",w.toneMappingExposure),ht.needsLights&&Ui(Zn,ir),Ne&&ue.fog===!0&&Ce.refreshFogUniforms(Zn,Ne),Ce.refreshMaterialUniforms(Zn,ue,ee,ie,de),lc.upload(ne,Ta(ht),Zn,P)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(lc.upload(ne,Ta(ht),Zn,P),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Kt.setValue(ne,"center",se.center),Kt.setValue(ne,"modelViewMatrix",se.modelViewMatrix),Kt.setValue(ne,"normalMatrix",se.normalMatrix),Kt.setValue(ne,"modelMatrix",se.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Dn=ue.uniformsGroups;for(let Br=0,Ra=Dn.length;Br<Ra;Br++)if(it.isWebGL2){const ms=Dn[Br];Te.update(ms,Oi),Te.bind(ms,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function Ui(L,K){L.ambientLightColor.needsUpdate=K,L.lightProbe.needsUpdate=K,L.directionalLights.needsUpdate=K,L.directionalLightShadows.needsUpdate=K,L.pointLights.needsUpdate=K,L.pointLightShadows.needsUpdate=K,L.spotLights.needsUpdate=K,L.spotLightShadows.needsUpdate=K,L.rectAreaLights.needsUpdate=K,L.hemisphereLights.needsUpdate=K}function Aa(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(L,K,oe){lt.get(L.texture).__webglTexture=K,lt.get(L.depthTexture).__webglTexture=oe;const ue=lt.get(L);ue.__hasExternalTextures=!0,ue.__hasExternalTextures&&(ue.__autoAllocateDepthBuffer=oe===void 0,ue.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,K){const oe=lt.get(L);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(L,K=0,oe=0){U=L,k=K,D=oe;let ue=!0,se=null,Ne=!1,Ye=!1;if(L){const Fe=lt.get(L);Fe.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(ne.FRAMEBUFFER,null),ue=!1):Fe.__webglFramebuffer===void 0?P.setupRenderTarget(L):Fe.__hasExternalTextures&&P.rebindTextures(L,lt.get(L.texture).__webglTexture,lt.get(L.depthTexture).__webglTexture);const dt=L.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Ye=!0);const ot=lt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ot[K])?se=ot[K][oe]:se=ot[K],Ne=!0):it.isWebGL2&&L.samples>0&&P.useMultisampledRTT(L)===!1?se=lt.get(L).__webglMultisampledFramebuffer:Array.isArray(ot)?se=ot[oe]:se=ot,N.copy(L.viewport),ae.copy(L.scissor),le=L.scissorTest}else N.copy(X).multiplyScalar(ee).floor(),ae.copy(I).multiplyScalar(ee).floor(),le=W;if(He.bindFramebuffer(ne.FRAMEBUFFER,se)&&it.drawBuffers&&ue&&He.drawBuffers(L,se),He.viewport(N),He.scissor(ae),He.setScissorTest(le),Ne){const Fe=lt.get(L.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_CUBE_MAP_POSITIVE_X+K,Fe.__webglTexture,oe)}else if(Ye){const Fe=lt.get(L.texture),dt=K||0;ne.framebufferTextureLayer(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,Fe.__webglTexture,oe||0,dt)}ce=-1},this.readRenderTargetPixels=function(L,K,oe,ue,se,Ne,Ye){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=lt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ye!==void 0&&(tt=tt[Ye]),tt){He.bindFramebuffer(ne.FRAMEBUFFER,tt);try{const Fe=L.texture,dt=Fe.format,ot=Fe.type;if(dt!==li&&Pe.convert(dt)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ut=ot===va&&(qe.has("EXT_color_buffer_half_float")||it.isWebGL2&&qe.has("EXT_color_buffer_float"));if(ot!==Ur&&Pe.convert(ot)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ot===Ji&&(it.isWebGL2||qe.has("OES_texture_float")||qe.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=L.width-ue&&oe>=0&&oe<=L.height-se&&ne.readPixels(K,oe,ue,se,Pe.convert(dt),Pe.convert(ot),Ne)}finally{const Fe=U!==null?lt.get(U).__webglFramebuffer:null;He.bindFramebuffer(ne.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(L,K,oe=0){const ue=Math.pow(2,-oe),se=Math.floor(K.image.width*ue),Ne=Math.floor(K.image.height*ue);P.setTexture2D(K,0),ne.copyTexSubImage2D(ne.TEXTURE_2D,oe,0,0,L.x,L.y,se,Ne),He.unbindTexture()},this.copyTextureToTexture=function(L,K,oe,ue=0){const se=K.image.width,Ne=K.image.height,Ye=Pe.convert(oe.format),tt=Pe.convert(oe.type);P.setTexture2D(oe,0),ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,oe.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,oe.unpackAlignment),K.isDataTexture?ne.texSubImage2D(ne.TEXTURE_2D,ue,L.x,L.y,se,Ne,Ye,tt,K.image.data):K.isCompressedTexture?ne.compressedTexSubImage2D(ne.TEXTURE_2D,ue,L.x,L.y,K.mipmaps[0].width,K.mipmaps[0].height,Ye,K.mipmaps[0].data):ne.texSubImage2D(ne.TEXTURE_2D,ue,L.x,L.y,Ye,tt,K.image),ue===0&&oe.generateMipmaps&&ne.generateMipmap(ne.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(L,K,oe,ue,se=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=L.max.x-L.min.x+1,Ye=L.max.y-L.min.y+1,tt=L.max.z-L.min.z+1,Fe=Pe.convert(ue.format),dt=Pe.convert(ue.type);let ot;if(ue.isData3DTexture)P.setTexture3D(ue,0),ot=ne.TEXTURE_3D;else if(ue.isDataArrayTexture||ue.isCompressedArrayTexture)P.setTexture2DArray(ue,0),ot=ne.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,ue.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,ue.unpackAlignment);const ut=ne.getParameter(ne.UNPACK_ROW_LENGTH),Ut=ne.getParameter(ne.UNPACK_IMAGE_HEIGHT),An=ne.getParameter(ne.UNPACK_SKIP_PIXELS),Jt=ne.getParameter(ne.UNPACK_SKIP_ROWS),In=ne.getParameter(ne.UNPACK_SKIP_IMAGES),Tt=oe.isCompressedTexture?oe.mipmaps[se]:oe.image;ne.pixelStorei(ne.UNPACK_ROW_LENGTH,Tt.width),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,Tt.height),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,L.min.x),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,L.min.y),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,L.min.z),oe.isDataTexture||oe.isData3DTexture?ne.texSubImage3D(ot,se,K.x,K.y,K.z,Ne,Ye,tt,Fe,dt,Tt.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(ot,se,K.x,K.y,K.z,Ne,Ye,tt,Fe,Tt.data)):ne.texSubImage3D(ot,se,K.x,K.y,K.z,Ne,Ye,tt,Fe,dt,Tt),ne.pixelStorei(ne.UNPACK_ROW_LENGTH,ut),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,Ut),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,An),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,Jt),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,In),se===0&&ue.generateMipmaps&&ne.generateMipmap(ot),He.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?P.setTextureCube(L,0):L.isData3DTexture?P.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?P.setTexture2DArray(L,0):P.setTexture2D(L,0),He.unbindTexture()},this.resetState=function(){k=0,D=0,U=null,He.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fd?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===vc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zt?ls:v_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ls?Zt:dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class iw extends k_{}iw.prototype.isWebGL1Renderer=!0;class rw extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class sw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new H;class vd{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),a=Pt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const bg=new H,Rg=new It,Cg=new It,ow=new H,Lg=new xt,Jl=new H,Uf=new Ni,Pg=new xt,Of=new xo;class aw extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fm,this.bindMatrix=new xt,this.bindMatrixInverse=new xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingBox.expandByPoint(Jl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Jl),this.boundingSphere.expandByPoint(Jl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uf.copy(this.boundingSphere),Uf.applyMatrix4(s),e.ray.intersectsSphere(Uf)!==!1&&(Pg.copy(s).invert(),Of.copy(e.ray).applyMatrix4(Pg),!(this.boundingBox!==null&&Of.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Of)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new It,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_y?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Rg.fromBufferAttribute(s.attributes.skinIndex,e),Cg.fromBufferAttribute(s.attributes.skinWeight,e),bg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Cg.getComponent(a);if(c!==0){const u=Rg.getComponent(a);Lg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(ow.copy(bg).applyMatrix4(Lg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class B_ extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lw extends _n{constructor(e=null,t=1,i=1,s,a,c,u,d,h=fn,p=fn,m,_){super(null,c,u,d,h,p,s,a,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ng=new xt,cw=new xt;class yd{constructor(e=[],t=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new xt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new xt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:cw;Ng.multiplyMatrices(u,t[a]),Ng.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new yd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new lw(t,e,e,li,Ji);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new B_),this.bones.push(c),this.boneInverses.push(new xt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class td extends vn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const no=new xt,Ig=new xt,Ql=[],Dg=new $n,uw=new xt,ua=new Xt,fa=new Ni;class fw extends Xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new td(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,uw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,no),Dg.copy(e.boundingBox).applyMatrix4(no),this.boundingBox.union(Dg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,no),fa.copy(e.boundingSphere).applyMatrix4(no),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),e.ray.intersectsSphere(fa)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,no),Ig.multiplyMatrices(i,no),ua.matrixWorld=Ig,ua.raycast(e,Ql);for(let c=0,u=Ql.length;c<u;c++){const d=Ql[c];d.instanceId=a,d.object=this,t.push(d)}Ql.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new td(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ug=new H,Og=new H,Fg=new xt,Ff=new xo,ec=new Ni;class xd extends Yt{constructor(e=new hn,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Ug.fromBufferAttribute(t,s-1),Og.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ug.distanceTo(Og);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(s),ec.radius+=a,e.ray.intersectsSphere(ec)===!1)return;Fg.copy(s).invert(),Ff.copy(e.ray).applyMatrix4(Fg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=new H,p=new H,m=new H,_=new H,x=this.isLineSegments?2:1,M=i.index,S=i.attributes.position;if(M!==null){const v=Math.max(0,c.start),b=Math.min(M.count,c.start+c.count);for(let w=v,C=b-1;w<C;w+=x){const k=M.getX(w),D=M.getX(w+1);if(h.fromBufferAttribute(S,k),p.fromBufferAttribute(S,D),Ff.distanceSqToSegment(h,p,_,m)>d)continue;_.applyMatrix4(this.matrixWorld);const ce=e.ray.origin.distanceTo(_);ce<e.near||ce>e.far||t.push({distance:ce,point:m.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,c.start),b=Math.min(S.count,c.start+c.count);for(let w=v,C=b-1;w<C;w+=x){if(h.fromBufferAttribute(S,w),p.fromBufferAttribute(S,w+1),Ff.distanceSqToSegment(h,p,_,m)>d)continue;_.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(_);D<e.near||D>e.far||t.push({distance:D,point:m.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}const kg=new H,Bg=new H;class _o extends xd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)kg.fromBufferAttribute(t,s),Bg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+kg.distanceTo(Bg);e.setAttribute("lineDistance",new Nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dw extends xd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class so extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zg=new xt,nd=new xo,tc=new Ni,nc=new H;class cc extends Yt{constructor(e=new hn,t=new so){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(s),tc.radius+=a,e.ray.intersectsSphere(tc)===!1)return;zg.copy(s).invert(),nd.copy(e.ray).applyMatrix4(zg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=i.index,m=i.attributes.position;if(h!==null){const _=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let M=_,E=x;M<E;M++){const S=h.getX(M);nc.fromBufferAttribute(m,S),Hg(nc,S,d,s,e,t,this)}}else{const _=Math.max(0,c.start),x=Math.min(m.count,c.start+c.count);for(let M=_,E=x;M<E;M++)nc.fromBufferAttribute(m,M),Hg(nc,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Hg(o,e,t,i,s,a,c){const u=nd.distanceSqToPoint(o);if(u<t){const d=new H;nd.closestPointToPoint(o,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,object:c})}}class Sd extends hn{constructor(e=1,t=1,i=1,s=32,a=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d};const h=this;s=Math.floor(s),a=Math.floor(a);const p=[],m=[],_=[],x=[];let M=0;const E=[],S=i/2;let v=0;b(),c===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(p),this.setAttribute("position",new Nt(m,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(x,2));function b(){const C=new H,k=new H;let D=0;const U=(t-e)/i;for(let ce=0;ce<=a;ce++){const R=[],N=ce/a,ae=N*(t-e)+e;for(let le=0;le<=s;le++){const he=le/s,V=he*d+u,Z=Math.sin(V),ie=Math.cos(V);k.x=ae*Z,k.y=-N*i+S,k.z=ae*ie,m.push(k.x,k.y,k.z),C.set(Z,U,ie).normalize(),_.push(C.x,C.y,C.z),x.push(he,1-N),R.push(M++)}E.push(R)}for(let ce=0;ce<s;ce++)for(let R=0;R<a;R++){const N=E[R][ce],ae=E[R+1][ce],le=E[R+1][ce+1],he=E[R][ce+1];p.push(N,ae,he),p.push(ae,le,he),D+=6}h.addGroup(v,D,0),v+=D}function w(C){const k=M,D=new nt,U=new H;let ce=0;const R=C===!0?e:t,N=C===!0?1:-1;for(let le=1;le<=s;le++)m.push(0,S*N,0),_.push(0,N,0),x.push(.5,.5),M++;const ae=M;for(let le=0;le<=s;le++){const V=le/s*d+u,Z=Math.cos(V),ie=Math.sin(V);U.x=R*ie,U.y=S*N,U.z=R*Z,m.push(U.x,U.y,U.z),_.push(0,N,0),D.x=Z*.5+.5,D.y=ie*.5*N+.5,x.push(D.x,D.y),M++}for(let le=0;le<s;le++){const he=k+le,V=ae+le;C===!0?p.push(V,V+1,he):p.push(V+1,V,he),ce+=3}h.addGroup(v,ce,C===!0?1:2),v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Md extends Sd{constructor(e=1,t=1,i=32,s=1,a=!1,c=0,u=Math.PI*2){super(0,e,t,i,s,a,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u}}static fromJSON(e){return new Md(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Eo extends hn{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let h=0;const p=[],m=new H,_=new H,x=[],M=[],E=[],S=[];for(let v=0;v<=i;v++){const b=[],w=v/i;let C=0;v===0&&c===0?C=.5/t:v===i&&d===Math.PI&&(C=-.5/t);for(let k=0;k<=t;k++){const D=k/t;m.x=-e*Math.cos(s+D*a)*Math.sin(c+w*u),m.y=e*Math.cos(c+w*u),m.z=e*Math.sin(s+D*a)*Math.sin(c+w*u),M.push(m.x,m.y,m.z),_.copy(m).normalize(),E.push(_.x,_.y,_.z),S.push(D+C,1-w),b.push(h++)}p.push(b)}for(let v=0;v<i;v++)for(let b=0;b<t;b++){const w=p[v][b+1],C=p[v][b],k=p[v+1][b],D=p[v+1][b+1];(v!==0||c>0)&&x.push(w,C,D),(v!==i-1||d<Math.PI)&&x.push(C,k,D)}this.setIndex(x),this.setAttribute("position",new Nt(M,3)),this.setAttribute("normal",new Nt(E,3)),this.setAttribute("uv",new Nt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ed extends hn{constructor(e=1,t=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);const c=[],u=[],d=[],h=[],p=new H,m=new H,_=new H;for(let x=0;x<=i;x++)for(let M=0;M<=s;M++){const E=M/s*a,S=x/i*Math.PI*2;m.x=(e+t*Math.cos(S))*Math.cos(E),m.y=(e+t*Math.cos(S))*Math.sin(E),m.z=t*Math.sin(S),u.push(m.x,m.y,m.z),p.x=e*Math.cos(E),p.y=e*Math.sin(E),_.subVectors(m,p).normalize(),d.push(_.x,_.y,_.z),h.push(M/s),h.push(x/i)}for(let x=1;x<=i;x++)for(let M=1;M<=s;M++){const E=(s+1)*x+M-1,S=(s+1)*(x-1)+M-1,v=(s+1)*(x-1)+M,b=(s+1)*x+M;c.push(E,S,b),c.push(S,v,b)}this.setIndex(c),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ed(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Sa extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ud,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tr extends Sa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hw extends Kn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new et(16777215),this.specular=new et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ud,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ic(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function pw(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function mw(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Vg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let d=0;d!==e;++d)s[c++]=o[u+d]}return s}function z_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Ma{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gw extends Ma{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fm,endingEnd:Fm}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],d=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case km:a=e,u=2*t-i;break;case Bm:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(d===void 0)switch(this.getSettings_().endingEnd){case km:c=e,d=2*i-t;break;case Bm:c=1,d=i+s[1]-s[0];break;default:c=e-1,d=t}const h=(i-t)*.5,p=this.valueSize;this._weightPrev=h/(t-u),this._weightNext=h/(d-i),this._offsetPrev=a*p,this._offsetNext=c*p}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,h=d-u,p=this._offsetPrev,m=this._offsetNext,_=this._weightPrev,x=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,v=-_*S+2*_*E-_*M,b=(1+_)*S+(-1.5-2*_)*E+(-.5+_)*M+1,w=(-1-x)*S+(1.5+x)*E+.5*M,C=x*S-x*E;for(let k=0;k!==u;++k)a[k]=v*c[p+k]+b*c[h+k]+w*c[d+k]+C*c[m+k];return a}}class _w extends Ma{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,h=d-u,p=(i-t)/(s-t),m=1-p;for(let _=0;_!==u;++_)a[_]=c[h+_]*m+c[d+_]*p;return a}}class vw extends Ma{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ii{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ic(t,this.TimeBufferType),this.values=ic(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ic(e.times,Array),values:ic(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new vw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _w(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case po:t=this.InterpolantFactoryMethodLinear;break;case ff:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return po;case this.InterpolantFactoryMethodSmooth:return ff}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const d=i[u];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(c!==null&&c>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,d,c),e=!1;break}c=d}if(s!==void 0&&pw(s))for(let u=0,d=s.length;u!==d;++u){const h=s[u];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ff,a=e.length-1;let c=1;for(let u=1;u<a;++u){let d=!1;const h=e[u],p=e[u+1];if(h!==p&&(u!==1||h!==e[0]))if(s)d=!0;else{const m=u*i,_=m-i,x=m+i;for(let M=0;M!==i;++M){const E=t[m+M];if(E!==t[_+M]||E!==t[x+M]){d=!0;break}}}if(d){if(u!==c){e[c]=e[u];const m=u*i,_=c*i;for(let x=0;x!==i;++x)t[_+x]=t[m+x]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,d=c*i,h=0;h!==i;++h)t[d+h]=t[u+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=po;class To extends Ii{}To.prototype.ValueTypeName="bool";To.prototype.ValueBufferType=Array;To.prototype.DefaultInterpolation=ya;To.prototype.InterpolantFactoryMethodLinear=void 0;To.prototype.InterpolantFactoryMethodSmooth=void 0;class H_ extends Ii{}H_.prototype.ValueTypeName="color";class vo extends Ii{}vo.prototype.ValueTypeName="number";class yw extends Ma{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=(i-t)/(s-t);let h=e*u;for(let p=h+u;h!==p;h+=4)Pi.slerpFlat(a,0,c,h-u,c,h,d);return a}}class ds extends Ii{InterpolantFactoryMethodLinear(e){return new yw(this.times,this.values,this.getValueSize(),e)}}ds.prototype.ValueTypeName="quaternion";ds.prototype.DefaultInterpolation=po;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class wo extends Ii{}wo.prototype.ValueTypeName="string";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=ya;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends Ii{}yo.prototype.ValueTypeName="vector";class xw{constructor(e,t=-1,i,s=Ay){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(Mw(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Ii.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let d=[],h=[];d.push((u+a-1)%a,u,(u+1)%a),h.push(0,1,0);const p=mw(d);d=Vg(d,1,p),h=Vg(h,1,p),!s&&d[0]===0&&(d.push(a),h.push(h[0])),c.push(new vo(".morphTargetInfluences["+t[u].name+"]",d,h).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,d=e.length;u<d;u++){const h=e[u],p=h.name.match(a);if(p&&p.length>1){const m=p[1];let _=s[m];_||(s[m]=_=[]),_.push(h)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(m,_,x,M,E){if(x.length!==0){const S=[],v=[];z_(x,S,v,M),S.length!==0&&E.push(new m(_,S,v))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let m=0;m<h.length;m++){const _=h[m].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)x[_[M].morphTargets[E]]=-1;for(const E in x){const S=[],v=[];for(let b=0;b!==_[M].morphTargets.length;++b){const w=_[M];S.push(w.time),v.push(w.morphTarget===E?1:0)}s.push(new vo(".morphTargetInfluence["+E+"]",S,v))}d=x.length*c}else{const x=".bones["+t[m].name+"]";i(yo,x+".position",_,"pos",s),i(ds,x+".quaternion",_,"rot",s),i(yo,x+".scale",_,"scl",s)}}return s.length===0?null:new this(a,d,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Sw(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vo;case"vector":case"vector2":case"vector3":case"vector4":return yo;case"color":return H_;case"quaternion":return ds;case"bool":case"boolean":return To;case"string":return wo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Mw(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sw(o.type);if(o.times===void 0){const t=[],i=[];z_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Nr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Ew{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,a===!1&&s.onStart!==void 0&&s.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=h.length;m<_;m+=2){const x=h[m],M=h[m+1];if(x.global&&(x.lastIndex=0),x.test(p))return M}return null}}}const Tw=new Ew;class ps{constructor(e){this.manager=e!==void 0?e:Tw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class ww extends Error{constructor(e,t){super(e),this.response=t}}class Td extends ps{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Nr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:i,onError:s});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,d=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=$i[e],m=h.body.getReader(),_=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),x=_?parseInt(_):0,M=x!==0;let E=0;const S=new ReadableStream({start(v){b();function b(){m.read().then(({done:w,value:C})=>{if(w)v.close();else{E+=C.byteLength;const k=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let D=0,U=p.length;D<U;D++){const ce=p[D];ce.onProgress&&ce.onProgress(k)}v.enqueue(C),b()}})}}});return new Response(S)}else throw new ww(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return h.json();default:if(u===void 0)return h.text();{const m=/charset="?([^;"\s]*)"?/i.exec(u),_=m&&m[1]?m[1].toLowerCase():void 0,x=new TextDecoder(_);return h.arrayBuffer().then(M=>x.decode(M))}}}).then(h=>{Nr.add(e,h);const p=$i[e];delete $i[e];for(let m=0,_=p.length;m<_;m++){const x=p[m];x.onLoad&&x.onLoad(h)}}).catch(h=>{const p=$i[e];if(p===void 0)throw this.manager.itemError(e),h;delete $i[e];for(let m=0,_=p.length;m<_;m++){const x=p[m];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Aw extends ps{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Nr.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=xa("img");function d(){p(),Nr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(m){p(),s&&s(m),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class bw extends ps{constructor(e){super(e)}load(e,t,i,s){const a=new _n,c=new Aw(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Sc extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const kf=new xt,Gg=new H,Wg=new H;class wd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pd,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gg),Wg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wg),t.updateMatrixWorld(),kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rw extends wd{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=mo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cw extends Sc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new Rw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jg=new xt,da=new H,Bf=new H;class Lw extends wd{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),da.setFromMatrixPosition(e.matrixWorld),i.position.copy(da),Bf.copy(i.position),Bf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Bf),i.updateMatrixWorld(),s.makeTranslation(-da.x,-da.y,-da.z),jg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jg)}}class V_ extends Sc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pw extends wd{constructor(){super(new gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nw extends Sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Pw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Iw extends Sc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _a{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Dw extends ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Nr.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{t&&t(h),a.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const d=fetch(e,u).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return Nr.add(e,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Nr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Nr.add(e,d),a.manager.itemStart(e)}}const Ad="\\[\\]\\.:\\/",Uw=new RegExp("["+Ad+"]","g"),bd="[^"+Ad+"]",Ow="[^"+Ad.replace("\\.","")+"]",Fw=/((?:WC+[\/:])*)/.source.replace("WC",bd),kw=/(WCOD+)?/.source.replace("WCOD",Ow),Bw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bd),zw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bd),Hw=new RegExp("^"+Fw+kw+Bw+zw+"$"),Vw=["material","materials","bones","map"];class Gw{constructor(e,t,i){const s=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Lt{constructor(e,t,i){this.path=t,this.parsedPath=i||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,i):new Lt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uw,"")}static parseTrackName(e){const t=Hw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);Vw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const d=i(u.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[s];if(c===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=Gw;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class G_{constructor(e,t,i=0,s=1/0){this.ray=new xo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return id(e,this,i,t),i.sort(Xg),i}intersectObjects(e,t=!0,i=[]){for(let s=0,a=e.length;s<a;s++)id(e[s],this,i,t);return i.sort(Xg),i}}function Xg(o,e){return o.distance-e.distance}function id(o,e,t,i){if(o.layers.test(e.layers)&&o.raycast(e,t),i===!0){const s=o.children;for(let a=0,c=s.length;a<c;a++)id(s[a],e,t,!0)}}class Yg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ww extends Xt{constructor(e,t,i){const s=new Eo(t,4,2),a=new Li({wireframe:!0,fog:!1,toneMapped:!1});super(s,a),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class jw extends _o{constructor(e=10,t=10,i=4473924,s=8947848){i=new et(i),s=new et(s);const a=t/2,c=e/t,u=e/2,d=[],h=[];for(let _=0,x=0,M=-u;_<=t;_++,M+=c){d.push(-u,0,M,u,0,M),d.push(M,0,-u,M,0,u);const E=_===a?i:s;E.toArray(h,x),x+=3,E.toArray(h,x),x+=3,E.toArray(h,x),x+=3,E.toArray(h,x),x+=3}const p=new hn;p.setAttribute("position",new Nt(d,3)),p.setAttribute("color",new Nt(h,3));const m=new Or({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const rc=new $n;class Xw extends _o{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),a=new hn;a.setIndex(new vn(i,1)),a.setAttribute("position",new vn(s,3)),super(a,new Or({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&rc.setFromObject(this.object),rc.isEmpty())return;const t=rc.min,i=rc.max,s=this.geometry.attributes.position,a=s.array;a[0]=i.x,a[1]=i.y,a[2]=i.z,a[3]=t.x,a[4]=i.y,a[5]=i.z,a[6]=t.x,a[7]=t.y,a[8]=i.z,a[9]=i.x,a[10]=t.y,a[11]=i.z,a[12]=i.x,a[13]=i.y,a[14]=t.z,a[15]=t.x,a[16]=i.y,a[17]=t.z,a[18]=t.x,a[19]=t.y,a[20]=t.z,a[21]=i.x,a[22]=t.y,a[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Yw extends _o{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new hn;s.setAttribute("position",new Nt(t,3)),s.setAttribute("color",new Nt(i,3));const a=new Or({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(e,t,i){const s=new et,a=this.geometry.attributes.color.array;return s.set(e),s.toArray(a,0),s.toArray(a,3),s.set(t),s.toArray(a,6),s.toArray(a,9),s.set(i),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);const qg={type:"change"},zf={type:"start"},Kg={type:"end"},sc=new xo,$g=new bi,qw=Math.cos(70*x_.DEG2RAD);class Kw extends hs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",Ke),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ke),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(qg),i.update(),a=s.NONE},this.update=function(){const F=new H,Te=new Pi().setFromUnitVectors(e.up,new H(0,1,0)),We=Te.clone().invert(),De=new H,_e=new Pi,B=new H,Ee=2*Math.PI;return function(Qe=null){const $e=i.object.position;F.copy($e).sub(i.target),F.applyQuaternion(Te),u.setFromVector3(F),i.autoRotate&&a===s.NONE&&le(N(Qe)),i.enableDamping?(u.theta+=d.theta*i.dampingFactor,u.phi+=d.phi*i.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let mt=i.minAzimuthAngle,gt=i.maxAzimuthAngle;isFinite(mt)&&isFinite(gt)&&(mt<-Math.PI?mt+=Ee:mt>Math.PI&&(mt-=Ee),gt<-Math.PI?gt+=Ee:gt>Math.PI&&(gt-=Ee),mt<=gt?u.theta=Math.max(mt,Math.min(gt,u.theta)):u.theta=u.theta>(mt+gt)/2?Math.max(mt,u.theta):Math.min(gt,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&D||i.object.isOrthographicCamera?u.radius=X(u.radius):u.radius=X(u.radius*h),F.setFromSpherical(u),F.applyQuaternion(We),$e.copy(i.target).add(F),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let Dt=!1;if(i.zoomToCursor&&D){let zt=null;if(i.object.isPerspectiveCamera){const _t=F.length();zt=X(_t*h);const Ht=_t-zt;i.object.position.addScaledVector(C,Ht),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const _t=new H(k.x,k.y,0);_t.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Dt=!0;const Ht=new H(k.x,k.y,0);Ht.unproject(i.object),i.object.position.sub(Ht).add(_t),i.object.updateMatrixWorld(),zt=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;zt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(zt).add(i.object.position):(sc.origin.copy(i.object.position),sc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(sc.direction))<qw?e.lookAt(i.target):($g.setFromNormalAndCoplanarPoint(i.object.up,i.target),sc.intersectPlane($g,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),Dt=!0);return h=1,D=!1,Dt||De.distanceToSquared(i.object.position)>c||8*(1-_e.dot(i.object.quaternion))>c||B.distanceToSquared(i.target)>0?(i.dispatchEvent(qg),De.copy(i.object.position),_e.copy(i.object.quaternion),B.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",St),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",te),i.domElement.removeEventListener("wheel",Me),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",te),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ke),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const c=1e-6,u=new Yg,d=new Yg;let h=1;const p=new H,m=new nt,_=new nt,x=new nt,M=new nt,E=new nt,S=new nt,v=new nt,b=new nt,w=new nt,C=new H,k=new nt;let D=!1;const U=[],ce={};let R=!1;function N(F){return F!==null?2*Math.PI/60*i.autoRotateSpeed*F:2*Math.PI/60/60*i.autoRotateSpeed}function ae(F){const Te=Math.abs(F*.01);return Math.pow(.95,i.zoomSpeed*Te)}function le(F){d.theta-=F}function he(F){d.phi-=F}const V=function(){const F=new H;return function(We,De){F.setFromMatrixColumn(De,0),F.multiplyScalar(-We),p.add(F)}}(),Z=function(){const F=new H;return function(We,De){i.screenSpacePanning===!0?F.setFromMatrixColumn(De,1):(F.setFromMatrixColumn(De,0),F.crossVectors(i.object.up,F)),F.multiplyScalar(We),p.add(F)}}(),ie=function(){const F=new H;return function(We,De){const _e=i.domElement;if(i.object.isPerspectiveCamera){const B=i.object.position;F.copy(B).sub(i.target);let Ee=F.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),V(2*We*Ee/_e.clientHeight,i.object.matrix),Z(2*De*Ee/_e.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(We*(i.object.right-i.object.left)/i.object.zoom/_e.clientWidth,i.object.matrix),Z(De*(i.object.top-i.object.bottom)/i.object.zoom/_e.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ee(F){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(F){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(F,Te){if(!i.zoomToCursor)return;D=!0;const We=i.domElement.getBoundingClientRect(),De=F-We.left,_e=Te-We.top,B=We.width,Ee=We.height;k.x=De/B*2-1,k.y=-(_e/Ee)*2+1,C.set(k.x,k.y,1).unproject(i.object).sub(i.object.position).normalize()}function X(F){return Math.max(i.minDistance,Math.min(i.maxDistance,F))}function I(F){m.set(F.clientX,F.clientY)}function W(F){$(F.clientX,F.clientX),v.set(F.clientX,F.clientY)}function Y(F){M.set(F.clientX,F.clientY)}function J(F){_.set(F.clientX,F.clientY),x.subVectors(_,m).multiplyScalar(i.rotateSpeed);const Te=i.domElement;le(2*Math.PI*x.x/Te.clientHeight),he(2*Math.PI*x.y/Te.clientHeight),m.copy(_),i.update()}function fe(F){b.set(F.clientX,F.clientY),w.subVectors(b,v),w.y>0?ee(ae(w.y)):w.y<0&&j(ae(w.y)),v.copy(b),i.update()}function de(F){E.set(F.clientX,F.clientY),S.subVectors(E,M).multiplyScalar(i.panSpeed),ie(S.x,S.y),M.copy(E),i.update()}function ye(F){$(F.clientX,F.clientY),F.deltaY<0?j(ae(F.deltaY)):F.deltaY>0&&ee(ae(F.deltaY)),i.update()}function Ae(F){let Te=!1;switch(F.code){case i.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?he(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(0,i.keyPanSpeed),Te=!0;break;case i.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?he(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(0,-i.keyPanSpeed),Te=!0;break;case i.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?le(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(i.keyPanSpeed,0),Te=!0;break;case i.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?le(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(-i.keyPanSpeed,0),Te=!0;break}Te&&(F.preventDefault(),i.update())}function Le(F){if(U.length===1)m.set(F.pageX,F.pageY);else{const Te=Pe(F),We=.5*(F.pageX+Te.x),De=.5*(F.pageY+Te.y);m.set(We,De)}}function Oe(F){if(U.length===1)M.set(F.pageX,F.pageY);else{const Te=Pe(F),We=.5*(F.pageX+Te.x),De=.5*(F.pageY+Te.y);M.set(We,De)}}function at(F){const Te=Pe(F),We=F.pageX-Te.x,De=F.pageY-Te.y,_e=Math.sqrt(We*We+De*De);v.set(0,_e)}function ne(F){i.enableZoom&&at(F),i.enablePan&&Oe(F)}function qt(F){i.enableZoom&&at(F),i.enableRotate&&Le(F)}function qe(F){if(U.length==1)_.set(F.pageX,F.pageY);else{const We=Pe(F),De=.5*(F.pageX+We.x),_e=.5*(F.pageY+We.y);_.set(De,_e)}x.subVectors(_,m).multiplyScalar(i.rotateSpeed);const Te=i.domElement;le(2*Math.PI*x.x/Te.clientHeight),he(2*Math.PI*x.y/Te.clientHeight),m.copy(_)}function it(F){if(U.length===1)E.set(F.pageX,F.pageY);else{const Te=Pe(F),We=.5*(F.pageX+Te.x),De=.5*(F.pageY+Te.y);E.set(We,De)}S.subVectors(E,M).multiplyScalar(i.panSpeed),ie(S.x,S.y),M.copy(E)}function He(F){const Te=Pe(F),We=F.pageX-Te.x,De=F.pageY-Te.y,_e=Math.sqrt(We*We+De*De);b.set(0,_e),w.set(0,Math.pow(b.y/v.y,i.zoomSpeed)),ee(w.y),v.copy(b);const B=(F.pageX+Te.x)*.5,Ee=(F.pageY+Te.y)*.5;$(B,Ee)}function Rt(F){i.enableZoom&&He(F),i.enablePan&&it(F)}function lt(F){i.enableZoom&&He(F),i.enableRotate&&qe(F)}function P(F){i.enabled!==!1&&(U.length===0&&(i.domElement.setPointerCapture(F.pointerId),i.domElement.addEventListener("pointermove",A),i.domElement.addEventListener("pointerup",te)),ft(F),F.pointerType==="touch"?ct(F):xe(F))}function A(F){i.enabled!==!1&&(F.pointerType==="touch"?me(F):ve(F))}function te(F){rt(F),U.length===0&&(i.domElement.releasePointerCapture(F.pointerId),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",te)),i.dispatchEvent(Kg),a=s.NONE}function xe(F){let Te;switch(F.button){case 0:Te=i.mouseButtons.LEFT;break;case 1:Te=i.mouseButtons.MIDDLE;break;case 2:Te=i.mouseButtons.RIGHT;break;default:Te=-1}switch(Te){case ks.DOLLY:if(i.enableZoom===!1)return;W(F),a=s.DOLLY;break;case ks.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enablePan===!1)return;Y(F),a=s.PAN}else{if(i.enableRotate===!1)return;I(F),a=s.ROTATE}break;case ks.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enableRotate===!1)return;I(F),a=s.ROTATE}else{if(i.enablePan===!1)return;Y(F),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&i.dispatchEvent(zf)}function ve(F){switch(a){case s.ROTATE:if(i.enableRotate===!1)return;J(F);break;case s.DOLLY:if(i.enableZoom===!1)return;fe(F);break;case s.PAN:if(i.enablePan===!1)return;de(F);break}}function Me(F){i.enabled===!1||i.enableZoom===!1||a!==s.NONE||(F.preventDefault(),i.dispatchEvent(zf),ye(Ge(F)),i.dispatchEvent(Kg))}function Ge(F){const Te=F.deltaMode,We={clientX:F.clientX,clientY:F.clientY,deltaY:F.deltaY};switch(Te){case 1:We.deltaY*=16;break;case 2:We.deltaY*=100;break}return F.ctrlKey&&!R&&(We.deltaY*=10),We}function Ce(F){F.key==="Control"&&(R=!0,document.addEventListener("keyup",Ue,{passive:!0,capture:!0}))}function Ue(F){F.key==="Control"&&(R=!1,document.removeEventListener("keyup",Ue,{passive:!0,capture:!0}))}function Ke(F){i.enabled===!1||i.enablePan===!1||Ae(F)}function ct(F){switch(Xe(F),U.length){case 1:switch(i.touches.ONE){case Bs.ROTATE:if(i.enableRotate===!1)return;Le(F),a=s.TOUCH_ROTATE;break;case Bs.PAN:if(i.enablePan===!1)return;Oe(F),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(i.touches.TWO){case Bs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ne(F),a=s.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;qt(F),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&i.dispatchEvent(zf)}function me(F){switch(Xe(F),a){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;qe(F),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;it(F),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Rt(F),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;lt(F),i.update();break;default:a=s.NONE}}function St(F){i.enabled!==!1&&F.preventDefault()}function ft(F){U.push(F.pointerId)}function rt(F){delete ce[F.pointerId];for(let Te=0;Te<U.length;Te++)if(U[Te]==F.pointerId){U.splice(Te,1);return}}function Xe(F){let Te=ce[F.pointerId];Te===void 0&&(Te=new nt,ce[F.pointerId]=Te),Te.set(F.pageX,F.pageY)}function Pe(F){const Te=F.pointerId===U[0]?U[1]:U[0];return ce[Te]}i.domElement.addEventListener("contextmenu",St),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",te),i.domElement.addEventListener("wheel",Me,{passive:!1}),document.addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}}const $w=(o,e={})=>{const t=Et.useRef(),i=Et.useRef(),s=Et.useRef(),a=Et.useRef(),c=Et.useRef(),u=Et.useRef(),[d,h]=Et.useState(null),[p,m]=Et.useState(null);t.current||(t.current=new rw,t.current.background=new et(e.background||2767692)),i.current||(i.current=new Nn(45,1,.1,1e3),i.current.position.set(7,4,7),i.current.lookAt(0,1,0)),s.current||(s.current=new V_(16777215,1,100),s.current.position.set(e.lightX||5,e.lightY||10,e.lightZ||7),s.current.castShadow=!0,t.current.add(s.current));let _=t.current.getObjectByName("lightSphere");if(_||(_=new Xt(new Eo(.2,16,16),new Li({color:16777215})),_.name="lightSphere",_.position.copy(s.current.position),t.current.add(_)),a.current||(a.current=new Ww(s.current,.1),a.current.name="lightHelper",a.current.material&&(a.current.material.transparent=!0,a.current.material.opacity=e.showHelper!==void 0&&!e.showHelper?0:1),t.current.add(a.current)),!t.current.getObjectByName("ambientLight")){const x=new Iw(8421504,1);x.name="ambientLight",t.current.add(x)}if(!t.current.getObjectByName("gridHelper")){const x=new jw(20,20);x.name="gridHelper",x.position.y=0,t.current.add(x)}return Et.useEffect(()=>{if(!o.current)return;c.current=new k_({antialias:!0,powerPreference:"high-performance",alpha:!0}),c.current.setSize(o.current.clientWidth,o.current.clientHeight),c.current.shadowMap.enabled=!0,u.current=new Kw(i.current,c.current.domElement),u.current.enableDamping=!0,u.current.dampingFactor=.05,u.current.minDistance=3,u.current.maxDistance=20,u.current.maxPolarAngle=Math.PI/2,u.current.target.set(0,1,0),o.current.appendChild(c.current.domElement),h(c.current),m(u.current);const x=b=>{b.preventDefault(),console.log("WebGL context lost. Attempting to restore...")},M=()=>{console.log("WebGL context restored."),c.current&&o.current&&c.current.setSize(o.current.clientWidth,o.current.clientHeight)};c.current.domElement.addEventListener("webglcontextlost",x),c.current.domElement.addEventListener("webglcontextrestored",M);const E=()=>{if(!o.current)return;const b=o.current.clientWidth,w=o.current.clientHeight;i.current.aspect=b/w,i.current.updateProjectionMatrix(),c.current&&c.current.setSize(b,w)};window.addEventListener("resize",E),E();let S;const v=()=>{S=requestAnimationFrame(v),u.current&&u.current.update(),c.current&&c.current.render(t.current,i.current)};return v(),()=>{cancelAnimationFrame(S),window.removeEventListener("resize",E),c.current&&(c.current.domElement.removeEventListener("webglcontextlost",x),c.current.domElement.removeEventListener("webglcontextrestored",M),o.current&&c.current.domElement.parentNode===o.current&&o.current.removeChild(c.current.domElement),c.current.dispose(),c.current.forceContextLoss()),u.current&&u.current.dispose()}},[o]),{scene:t.current,camera:i.current,renderer:d,controls:p,light:s.current,lightHelper:a.current}},Zw=(o,e,t,i,s,a,c,u,d,h)=>{Et.useEffect(()=>{if(!o||!e||!t)return;const p=o.domElement,m=new G_,_=new nt,x=new bi(new H(0,0,1),0),M=v=>{v.preventDefault();const b=p.getBoundingClientRect();_.x=(v.clientX-b.left)/b.width*2-1,_.y=-((v.clientY-b.top)/b.height)*2+1,m.setFromCamera(_,e);let w;i&&i.material&&i.material.opacity>0?w=i:w=t.getObjectByName("lightSphere"),w&&m.intersectObject(w,!0).length>0&&(h(!0),s&&(s.enabled=!1))},E=v=>{if(!d)return;const b=p.getBoundingClientRect();_.x=(v.clientX-b.left)/b.width*2-1,_.y=-((v.clientY-b.top)/b.height)*2+1,m.setFromCamera(_,e);const w=new H;m.ray.intersectPlane(x,w),a(w.x),c(w.y),t.position.set(w.x,w.y,u),i&&i.update()},S=()=>{d&&(h(!1),s&&(s.enabled=!0))};return p.addEventListener("mousedown",M),p.addEventListener("mousemove",E),p.addEventListener("mouseup",S),()=>{p.removeEventListener("mousedown",M),p.removeEventListener("mousemove",E),p.removeEventListener("mouseup",S)}},[o,e,t,i,s,a,c,u,d,h])},Jw=(o,e,t,i,s,a)=>{Et.useEffect(()=>{if(!o||!e||!t)return;const c=o.domElement,u=new G_,d=new nt,h=new bi(new H(0,0,1),0),p=x=>{if(x.button!==0)return;x.preventDefault();const M=c.getBoundingClientRect();d.x=(x.clientX-M.left)/M.width*2-1,d.y=-((x.clientY-M.top)/M.height)*2+1,u.setFromCamera(d,e);const E=t.getObjectByName("originHelper");E&&u.intersectObject(E).length>0&&(a(!0),i&&(i.enabled=!1))},m=x=>{if(!s)return;const M=c.getBoundingClientRect();d.x=(x.clientX-M.left)/M.width*2-1,d.y=-((x.clientY-M.top)/M.height)*2+1,u.setFromCamera(d,e);const E=new H;u.ray.intersectPlane(h,E);const S=t.getObjectByName("customMesh");if(S){S.position.set(E.x,S.position.y,E.z);const v=t.getObjectByName("originHelper"),b=t.getObjectByName("axesHelper"),w=t.getObjectByName("boundingBoxHelper");v&&v.position.copy(S.position),b&&b.position.copy(S.position),w&&w.update()}},_=()=>{s&&(a(!1),i&&(i.enabled=!0))};return c.addEventListener("mousedown",p),c.addEventListener("mousemove",m),c.addEventListener("mouseup",_),()=>{c.removeEventListener("mousedown",p),c.removeEventListener("mousemove",m),c.removeEventListener("mouseup",_)}},[o,e,t,i,s,a])},Qw=({wireframe:o,setWireframe:e,objectType:t,setObjectType:i,showBounds:s,setShowBounds:a,showOrigin:c,setShowOrigin:u,showAxes:d,setShowAxes:h,showHelper:p,setShowHelper:m})=>Be.jsxs("div",{className:"space-y-3 flex flex-col items-center",children:[Be.jsx("h3",{className:"text-lg font-medium",children:"Object Controls"}),Be.jsxs("div",{className:"flex flex-wrap gap-2 justify-center",children:[Be.jsx("button",{onClick:()=>e(!o),className:`px-3 py-1 rounded text-white ${o?"bg-blue-600":"bg-gray-600"}`,children:o?"Solid Mode":"Wireframe Mode"}),Be.jsx("button",{onClick:()=>m(!p),className:`px-3 py-1 rounded text-white ${p?"bg-blue-600":"bg-gray-600"}`,children:p?"Hide Light":"Show Light"}),Be.jsx("button",{onClick:()=>a(!s),className:`px-3 py-1 rounded text-white ${s?"bg-blue-600":"bg-gray-600"}`,children:s?"Hide Bounds":"Show Bounds"}),Be.jsx("button",{onClick:()=>u(!c),className:`px-3 py-1 rounded text-white ${c?"bg-blue-600":"bg-gray-600"}`,children:c?"Hide Origin":"Show Origin"}),Be.jsx("button",{onClick:()=>h(!d),className:`px-3 py-1 rounded text-white ${d?"bg-blue-600":"bg-gray-600"}`,children:d?"Hide Axes":"Show Axes"})]}),Be.jsxs("div",{className:"space-y-1 text-center",children:[Be.jsx("p",{className:"text-sm",children:"Object Type:"}),Be.jsxs("div",{className:"flex flex-wrap gap-2 justify-center",children:[Be.jsx("button",{onClick:()=>i("cube"),className:`px-3 py-1 rounded text-white ${t==="cube"?"bg-blue-600":"bg-gray-600"}`,children:"Cube"}),Be.jsx("button",{onClick:()=>i("sphere"),className:`px-3 py-1 rounded text-white ${t==="sphere"?"bg-blue-600":"bg-gray-600"}`,children:"Sphere"}),Be.jsx("button",{onClick:()=>i("torus"),className:`px-3 py-1 rounded text-white ${t==="torus"?"bg-blue-600":"bg-gray-600"}`,children:"Torus"}),Be.jsx("button",{onClick:()=>i("cone"),className:`px-3 py-1 rounded text-white ${t==="cone"?"bg-blue-600":"bg-gray-600"}`,children:"Cone"})]})]})]}),eA=({lightX:o,setLightX:e,lightY:t,setLightY:i,lightZ:s,setLightZ:a,lightIntensity:c,setLightIntensity:u})=>Be.jsxs("div",{className:"space-y-3 flex flex-col items-center",children:[Be.jsx("h3",{className:"text-lg font-medium",children:"Light Controls"}),Be.jsx("p",{className:"text-xs text-center",children:"Drag the light helper directly in the scene or use sliders below"}),Be.jsxs("div",{className:"space-y-2 w-full",children:[Be.jsxs("div",{className:"space-y-1",children:[Be.jsxs("label",{className:"block text-sm text-center",children:["X Position: ",o.toFixed(2)]}),Be.jsx("input",{type:"range",min:"-10",max:"10",step:"0.1",value:o,onChange:d=>e(Number(d.target.value)),className:"w-full"})]}),Be.jsxs("div",{className:"space-y-1",children:[Be.jsxs("label",{className:"block text-sm text-center",children:["Y Position: ",t.toFixed(2)]}),Be.jsx("input",{type:"range",min:"-10",max:"10",step:"0.1",value:t,onChange:d=>i(Number(d.target.value)),className:"w-full"})]}),Be.jsxs("div",{className:"space-y-1",children:[Be.jsxs("label",{className:"block text-sm text-center",children:["Z Position: ",s.toFixed(2)]}),Be.jsx("input",{type:"range",min:"-10",max:"10",step:"0.1",value:s,onChange:d=>a(Number(d.target.value)),className:"w-full"})]}),Be.jsxs("div",{className:"space-y-1",children:[Be.jsxs("label",{className:"block text-sm text-center",children:["Intensity: ",c.toFixed(2)]}),Be.jsx("input",{type:"range",min:"0",max:"10",step:"0.1",value:c,onChange:d=>u(Number(d.target.value)),className:"w-full"})]})]})]}),tA=({handleFileUpload:o})=>Be.jsxs("div",{className:"space-y-1",children:[Be.jsx("p",{className:"text-sm",children:"Upload 3D Model:"}),Be.jsx("p",{className:"text-xs text-gray-500",children:"Supported formats: .gltf, .glb, .obj"}),Be.jsx("input",{type:"file",accept:".gltf,.glb,.obj",onChange:e=>{const t=e.target.files[0];if(!t)return;const i=t.name.toLowerCase(),s=new FileReader;s.onload=a=>{console.log("File loaded:",i),o(a.target.result,i)},i.endsWith(".obj")?s.readAsText(t):s.readAsArrayBuffer(t)},className:"block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white"})]}),nA=({smoothing:o,setSmoothing:e,smoothingIntensity:t,setSmoothingIntensity:i})=>Be.jsxs("div",{className:"space-y-3 flex flex-col items-center",children:[Be.jsx("h3",{className:"text-lg font-medium",children:"Model Controls"}),Be.jsxs("div",{className:"flex flex-col items-center gap-2 w-full",children:[Be.jsxs("button",{onClick:()=>e(!o),className:`px-3 py-1 rounded text-white ${o?"bg-blue-600":"bg-gray-600"}`,children:["Smoothing ",o?"ON":"OFF"]}),o&&Be.jsxs("div",{className:"w-full space-y-1",children:[Be.jsxs("label",{className:"block text-sm text-center",children:["Intensity: ",t.toFixed(1)]}),Be.jsx("input",{type:"range",min:"0",max:"10",step:"0.1",value:t,onChange:s=>i(Number(s.target.value)),className:"w-full"})]})]})]}),W_=o=>{["boundingBoxHelper","originHelper","axesHelper"].forEach(e=>{const t=o.getObjectByName(e);t&&(o.remove(t),t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose())})},iA=(o,e,t)=>{W_(o);const i=o.getObjectByName("customMesh");i&&o.remove(i);const s=new Sa({color:65280,wireframe:t});let a;switch(e){case"sphere":a=new Eo(1.5,32,32);break;case"torus":a=new Ed(1,.4,16,100);break;case"cone":a=new Md(1,2,32);break;default:a=new So(2,2,2)}const c=new Xt(a,s);c.name="customMesh",c.castShadow=!0,c.receiveShadow=!0;const d=new $n().setFromObject(c).getSize(new H);c.position.y=d.y/2,o.add(c)},Zg=o=>{const e=o.getObjectByName("customMesh");if(!e)return;const t=new Xw(e,16711680);t.name="boundingBoxHelper",o.add(t);const i=new Xt(new Eo(.1,16,16),new Li({color:16776960,depthTest:!1,transparent:!0,opacity:.8}));i.name="originHelper",i.position.copy(e.position),i.renderOrder=999,o.add(i);const s=new Yw(2);s.name="axesHelper",s.position.copy(e.position),o.add(s)};function Jg(o,e){if(e===by)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===$f||e===__){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let d=0;d<u.count;d++)c.push(d);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===$f)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class rA extends ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cA(t)}),this.register(function(t){return new vA(t)}),this.register(function(t){return new yA(t)}),this.register(function(t){return new xA(t)}),this.register(function(t){return new fA(t)}),this.register(function(t){return new dA(t)}),this.register(function(t){return new hA(t)}),this.register(function(t){return new pA(t)}),this.register(function(t){return new lA(t)}),this.register(function(t){return new mA(t)}),this.register(function(t){return new uA(t)}),this.register(function(t){return new _A(t)}),this.register(function(t){return new gA(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new SA(t)}),this.register(function(t){return new MA(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=_a.extractUrlBase(e);c=_a.resolveURL(h,this.path)}else c=_a.extractUrlBase(e);this.manager.itemStart(e);const u=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},d=new Td(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{a.parse(h,c,function(p){t(p),a.manager.itemEnd(e)},u)}catch(p){u(p)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===j_){try{c[Mt.KHR_BINARY_GLTF]=new EA(e)}catch(m){s&&s(m);return}a=JSON.parse(c[Mt.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new OA(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](h);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[m.name]=m,c[m.name]=!0}if(a.extensionsUsed)for(let p=0;p<a.extensionsUsed.length;++p){const m=a.extensionsUsed[p],_=a.extensionsRequired||[];switch(m){case Mt.KHR_MATERIALS_UNLIT:c[m]=new aA;break;case Mt.KHR_DRACO_MESH_COMPRESSION:c[m]=new TA(a,this.dracoLoader);break;case Mt.KHR_TEXTURE_TRANSFORM:c[m]=new wA;break;case Mt.KHR_MESH_QUANTIZATION:c[m]=new AA;break;default:_.indexOf(m)>=0&&u[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}h.setExtensions(c),h.setPlugins(u),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function sA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class oA{constructor(e){this.parser=e,this.name=Mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const p=new et(16777215);d.color!==void 0&&p.setRGB(d.color[0],d.color[1],d.color[2],dn);const m=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new Nw(p),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new V_(p),h.distance=m;break;case"spot":h=new Cw(p),h.distance=m,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),h.decay=2,Cr(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(d){return i._getNodeRef(t.cache,u,d)})}}class aA{constructor(){this.name=Mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Li}extendParams(e,t,i){const s=[];e.color=new et(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],dn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,Zt))}return Promise.all(s)}}class lA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class cA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(u,u)}return Promise.all(a)}}class uA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class fA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new et(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],dn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,Zt)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class dA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class hA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new et().setRGB(u[0],u[1],u[2],dn),Promise.all(a)}}class pA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class mA{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new et().setRGB(u[0],u[1],u[2],dn),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,Zt)),Promise.all(a)}}class gA{constructor(e){this.parser=e,this.name=Mt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class _A{constructor(e){this.parser=e,this.name=Mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tr}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class vA{constructor(e){this.parser=e,this.name=Mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class yA{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let d=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xA{constructor(e){this.parser=e,this.name=Mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let d=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class SA{constructor(e){this.name=Mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const d=s.byteOffset||0,h=s.byteLength||0,p=s.count,m=s.byteStride,_=new Uint8Array(u,d,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(p,m,_,s.mode,s.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(p*m);return c.decodeGltfBuffer(new Uint8Array(x),p,m,_,s.mode,s.filter),x})})}else return null}}class MA{constructor(e){this.name=Mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==oi.TRIANGLES&&h.mode!==oi.TRIANGLE_STRIP&&h.mode!==oi.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],d={};for(const h in c)u.push(this.parser.getDependency("accessor",c[h]).then(p=>(d[h]=p,d[h])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(h=>{const p=h.pop(),m=p.isGroup?p.children:[p],_=h[0].count,x=[];for(const M of m){const E=new xt,S=new H,v=new Pi,b=new H(1,1,1),w=new fw(M.geometry,M.material,_);for(let C=0;C<_;C++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,C),d.ROTATION&&v.fromBufferAttribute(d.ROTATION,C),d.SCALE&&b.fromBufferAttribute(d.SCALE,C),w.setMatrixAt(C,E.compose(S,v,b));for(const C in d)if(C==="_COLOR_0"){const k=d[C];w.instanceColor=new td(k.array,k.itemSize,k.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,d[C]);Yt.prototype.copy.call(w,M),this.parser.assignFinalMaterial(w),x.push(w)}return p.isGroup?(p.clear(),p.add(...x),p):x[0]}))}}const j_="glTF",ha=12,Qg={JSON:1313821514,BIN:5130562};class EA{constructor(e){this.name=Mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ha),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==j_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ha,a=new DataView(e,ha);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const d=a.getUint32(c,!0);if(c+=4,d===Qg.JSON){const h=new Uint8Array(e,ha+c,u);this.content=i.decode(h)}else if(d===Qg.BIN){const h=ha+c;this.body=e.slice(h,h+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class TA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},d={},h={};for(const p in c){const m=rd[p]||p.toLowerCase();u[m]=c[p]}for(const p in e.attributes){const m=rd[p]||p.toLowerCase();if(c[p]!==void 0){const _=i.accessors[e.attributes[p]],x=lo[_.componentType];h[m]=x.name,d[m]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(p){return new Promise(function(m,_){s.decodeDracoFile(p,function(x){for(const M in x.attributes){const E=x.attributes[M],S=d[M];S!==void 0&&(E.normalized=S)}m(x)},u,h,dn,_)})})}}class wA{constructor(){this.name=Mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class AA{constructor(){this.name=Mt.KHR_MESH_QUANTIZATION}}class X_ extends Ma{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=u*2,h=u*3,p=s-t,m=(i-t)/p,_=m*m,x=_*m,M=e*h,E=M-h,S=-2*x+3*_,v=x-_,b=1-S,w=v-_+m;for(let C=0;C!==u;C++){const k=c[E+C+u],D=c[E+C+d]*p,U=c[M+C+u],ce=c[M+C]*p;a[C]=b*k+w*D+S*U+v*ce}return a}}const bA=new Pi;class RA extends X_{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return bA.fromArray(a).normalize().toArray(a),a}}const oi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},e_={9728:fn,9729:Hn,9984:Kf,9985:c_,9986:ac,9987:cs},t_={33071:ai,33648:fc,10497:fo},Hf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CA={CUBICSPLINE:void 0,LINEAR:po,STEP:ya},Vf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function LA(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Sa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:er})),o.DefaultMaterial}function ns(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Cr(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function PA(o,e,t){let i=!1,s=!1,a=!1;for(let h=0,p=e.length;h<p;h++){const m=e[h];if(m.POSITION!==void 0&&(i=!0),m.NORMAL!==void 0&&(s=!0),m.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],d=[];for(let h=0,p=e.length;h<p;h++){const m=e[h];if(i){const _=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):o.attributes.position;c.push(_)}if(s){const _=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):o.attributes.normal;u.push(_)}if(a){const _=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):o.attributes.color;d.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d)]).then(function(h){const p=h[0],m=h[1],_=h[2];return i&&(o.morphAttributes.position=p),s&&(o.morphAttributes.normal=m),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function NA(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function IA(o){let e;const t=o.extensions&&o.extensions[Mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gf(t.attributes):e=o.indices+":"+Gf(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+Gf(o.targets[i]);return e}function Gf(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function sd(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function DA(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const UA=new xt;class OA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,a=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,a=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&a<98?this.textureLoader=new bw(this.options.manager):this.textureLoader=new Dw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Td(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return ns(a,u,s),Cr(u,s),Promise.all(i._invokeAll(function(d){return d.afterRoot&&d.afterRoot(u)})).then(function(){e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,d=c.length;u<d;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const d=this.associations.get(c);d!=null&&this.associations.set(u,d);for(const[h,p]of c.children.entries())a(p,u.children[h])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Mt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(_a.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=Hf[s.type],u=lo[s.componentType],d=s.normalized===!0,h=new u(s.count*c);return Promise.resolve(new vn(h,c,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],d=Hf[s.type],h=lo[s.componentType],p=h.BYTES_PER_ELEMENT,m=p*d,_=s.byteOffset||0,x=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(x&&x!==m){const v=Math.floor(_/x),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+v+":"+s.count;let w=t.cache.get(b);w||(E=new h(u,v*x,s.count*x/p),w=new sw(E,x/p),t.cache.add(b,w)),S=new vd(w,d,_%x/p,M)}else u===null?E=new h(s.count*d):E=new h(u,_,s.count*d),S=new vn(E,d,M);if(s.sparse!==void 0){const v=Hf.SCALAR,b=lo[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,k=new b(c[1],w,s.sparse.count*v),D=new h(c[2],C,s.sparse.count*d);u!==null&&(S=new vn(S.array.slice(),S.itemSize,S.normalized));for(let U=0,ce=k.length;U<ce;U++){const R=k[U];if(S.setX(R,D[U*d]),d>=2&&S.setY(R,D[U*d+1]),d>=3&&S.setZ(R,D[U*d+2]),d>=4&&S.setW(R,D[U*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const d=i.manager.getHandler(c.uri);d!==null&&(u=d)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],d=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=c.name||u.name||"",p.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(p.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return p.magFilter=e_[_.magFilter]||Hn,p.minFilter=e_[_.minFilter]||cs,p.wrapS=t_[_.wrapS]||fo,p.wrapT=t_[_.wrapT]||fo,s.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const c=s.images[e],u=self.URL||self.webkitURL;let d=c.uri||"",h=!1;if(c.bufferView!==void 0)d=i.getDependency("bufferView",c.bufferView).then(function(m){h=!0;const _=new Blob([m],{type:c.mimeType});return d=u.createObjectURL(_),d});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(d).then(function(m){return new Promise(function(_,x){let M=_;t.isImageBitmapLoader===!0&&(M=function(E){const S=new _n(E);S.needsUpdate=!0,_(S)}),t.load(_a.resolveURL(m,a.path),M,void 0,x)})}).then(function(m){return h===!0&&u.revokeObjectURL(d),m.userData.mimeType=c.mimeType||DA(c.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),m});return this.sourceCache[e]=p,p}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[Mt.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[Mt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const d=a.associations.get(c);c=a.extensions[Mt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,d)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let d=this.cache.get(u);d||(d=new so,Kn.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,d.sizeAttenuation=!1,this.cache.add(u,d)),i=d}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let d=this.cache.get(u);d||(d=new Or,Kn.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,this.cache.add(u,d)),i=d}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let d=this.cache.get(u);d||(d=i.clone(),a&&(d.vertexColors=!0),c&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(u,d),this.associations.set(d,this.associations.get(i))),i=d}e.material=i}getMaterialType(){return Sa}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},d=a.extensions||{},h=[];if(d[Mt.KHR_MATERIALS_UNLIT]){const m=s[Mt.KHR_MATERIALS_UNLIT];c=m.getMaterialType(),h.push(m.extendParams(u,a,t))}else{const m=a.pbrMetallicRoughness||{};if(u.color=new et(1,1,1),u.opacity=1,Array.isArray(m.baseColorFactor)){const _=m.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],dn),u.opacity=_[3]}m.baseColorTexture!==void 0&&h.push(t.assignTexture(u,"map",m.baseColorTexture,Zt)),u.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,u.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(u,"metalnessMap",m.metallicRoughnessTexture)),h.push(t.assignTexture(u,"roughnessMap",m.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=xi);const p=a.alphaMode||Vf.OPAQUE;if(p===Vf.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,p===Vf.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Li&&(h.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new nt(1,1),a.normalTexture.scale!==void 0)){const m=a.normalTexture.scale;u.normalScale.set(m,m)}if(a.occlusionTexture!==void 0&&c!==Li&&(h.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Li){const m=a.emissiveFactor;u.emissive=new et().setRGB(m[0],m[1],m[2],dn)}return a.emissiveTexture!==void 0&&c!==Li&&h.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,Zt)),Promise.all(h).then(function(){const m=new c(u);return a.name&&(m.name=a.name),Cr(m,a),t.associations.set(m,{materials:e}),a.extensions&&ns(s,m,a),m})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[Mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(d){return n_(d,u,t)})}const c=[];for(let u=0,d=e.length;u<d;u++){const h=e[u],p=IA(h),m=s[p];if(m)c.push(m.promise);else{let _;h.extensions&&h.extensions[Mt.KHR_DRACO_MESH_COMPRESSION]?_=a(h):_=n_(new hn,h,t),s[p]={primitive:h,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d].material===void 0?LA(this.cache):this.getDependency("material",c[d].material);u.push(p)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(d){const h=d.slice(0,d.length-1),p=d[d.length-1],m=[];for(let x=0,M=p.length;x<M;x++){const E=p[x],S=c[x];let v;const b=h[x];if(S.mode===oi.TRIANGLES||S.mode===oi.TRIANGLE_STRIP||S.mode===oi.TRIANGLE_FAN||S.mode===void 0)v=a.isSkinnedMesh===!0?new aw(E,b):new Xt(E,b),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),S.mode===oi.TRIANGLE_STRIP?v.geometry=Jg(v.geometry,__):S.mode===oi.TRIANGLE_FAN&&(v.geometry=Jg(v.geometry,$f));else if(S.mode===oi.LINES)v=new _o(E,b);else if(S.mode===oi.LINE_STRIP)v=new xd(E,b);else if(S.mode===oi.LINE_LOOP)v=new dw(E,b);else if(S.mode===oi.POINTS)v=new cc(E,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(v.geometry.morphAttributes).length>0&&NA(v,a),v.name=t.createUniqueName(a.name||"mesh_"+e),Cr(v,a),S.extensions&&ns(s,v,S),t.assignFinalMaterial(v),m.push(v)}for(let x=0,M=m.length;x<M;x++)t.associations.set(m[x],{meshes:e,primitives:x});if(m.length===1)return a.extensions&&ns(s,m[0],a),m[0];const _=new Pr;a.extensions&&ns(s,_,a),t.associations.set(_,{meshes:e});for(let x=0,M=m.length;x<M;x++)_.add(m[x]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Nn(x_.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new gd(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Cr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],d=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];if(m){u.push(m);const _=new xt;a!==null&&_.fromArray(a.array,h*16),d.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new yd(u,d)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],d=[],h=[],p=[];for(let m=0,_=s.channels.length;m<_;m++){const x=s.channels[m],M=s.samplers[x.sampler],E=x.target,S=E.node,v=s.parameters!==void 0?s.parameters[M.input]:M.input,b=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",v)),d.push(this.getDependency("accessor",b)),h.push(M),p.push(E))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d),Promise.all(h),Promise.all(p)]).then(function(m){const _=m[0],x=m[1],M=m[2],E=m[3],S=m[4],v=[];for(let b=0,w=_.length;b<w;b++){const C=_[b],k=x[b],D=M[b],U=E[b],ce=S[b];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const R=i._createAnimationTracks(C,k,D,U,ce);if(R)for(let N=0;N<R.length;N++)v.push(R[N])}return new xw(a,void 0,v)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let d=0,h=s.weights.length;d<h;d++)u.morphTargetInfluences[d]=s.weights[d]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let h=0,p=u.length;h<p;h++)c.push(i.getDependency("node",u[h]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),d]).then(function(h){const p=h[0],m=h[1],_=h[2];_!==null&&p.traverse(function(x){x.isSkinnedMesh&&x.bind(_,UA)});for(let x=0,M=m.length;x<M;x++)p.add(m[x]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],d=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&u.push(d),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){u.push(h)}),this.nodeCache[e]=Promise.all(u).then(function(h){let p;if(a.isBone===!0?p=new B_:h.length>1?p=new Pr:h.length===1?p=h[0]:p=new Yt,p!==h[0])for(let m=0,_=h.length;m<_;m++)p.add(h[m]);if(a.name&&(p.userData.name=a.name,p.name=c),Cr(p,a),a.extensions&&ns(i,p,a),a.matrix!==void 0){const m=new xt;m.fromArray(a.matrix),p.applyMatrix4(m)}else a.translation!==void 0&&p.position.fromArray(a.translation),a.rotation!==void 0&&p.quaternion.fromArray(a.rotation),a.scale!==void 0&&p.scale.fromArray(a.scale);return s.associations.has(p)||s.associations.set(p,{}),s.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new Pr;i.name&&(a.name=s.createUniqueName(i.name)),Cr(a,i),i.extensions&&ns(t,a,i);const c=i.nodes||[],u=[];for(let d=0,h=c.length;d<h;d++)u.push(s.getDependency("node",c[d]));return Promise.all(u).then(function(d){for(let p=0,m=d.length;p<m;p++)a.add(d[p]);const h=p=>{const m=new Map;for(const[_,x]of s.associations)(_ instanceof Kn||_ instanceof _n)&&m.set(_,x);return p.traverse(_=>{const x=s.associations.get(_);x!=null&&m.set(_,x)}),m};return s.associations=h(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,d=[];Rr[a.path]===Rr.weights?e.traverse(function(_){_.morphTargetInfluences&&d.push(_.name?_.name:_.uuid)}):d.push(u);let h;switch(Rr[a.path]){case Rr.weights:h=vo;break;case Rr.rotation:h=ds;break;case Rr.position:case Rr.scale:h=yo;break;default:switch(i.itemSize){case 1:h=vo;break;case 2:case 3:default:h=yo;break}break}const p=s.interpolation!==void 0?CA[s.interpolation]:po,m=this._getArrayFromAccessor(i);for(let _=0,x=d.length;_<x;_++){const M=new h(d[_]+"."+Rr[a.path],t.array,m,p);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=sd(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ds?RA:X_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function FA(o,e,t){const i=e.attributes,s=new $n;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],d=u.min,h=u.max;if(d!==void 0&&h!==void 0){if(s.set(new H(d[0],d[1],d[2]),new H(h[0],h[1],h[2])),u.normalized){const p=sd(lo[u.componentType]);s.min.multiplyScalar(p),s.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new H,d=new H;for(let h=0,p=a.length;h<p;h++){const m=a[h];if(m.POSITION!==void 0){const _=t.json.accessors[m.POSITION],x=_.min,M=_.max;if(x!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),_.normalized){const E=sd(lo[_.componentType]);d.multiplyScalar(E)}u.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Ni;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function n_(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(d){o.setAttribute(u,d)})}for(const c in i){const u=rd[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return bt.workingColorSpace!==dn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Cr(o,e),FA(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?PA(o,e.targets,t):o})}const kA=(o,e,t,i,s,a=null)=>{console.log("[GLTFLoader] Starting GLTF/GLB load...");const c=new rA;if(!(o instanceof ArrayBuffer)){console.error("[GLTFLoader] Buffer is not an ArrayBuffer:",o),s&&s("Buffer is not an ArrayBuffer");return}c.parse(o,"",u=>{console.log("[GLTFLoader] GLTF parsed successfully");const d=u.scene;i&&d.traverse(M=>{M instanceof Xt&&M.geometry&&M.geometry.computeVertexNormals()}),d.traverse(M=>{M instanceof Xt&&(Array.isArray(M.material)?M.material.forEach(E=>E.wireframe=t):M.material.wireframe=t)});const h=new $n().setFromObject(d),p=h.getSize(new H),m=h.getCenter(new H);d.position.sub(m);const x=3/Math.max(p.x,p.y,p.z);d.scale.set(x,x,x),d.position.sub(m.multiplyScalar(x)),d.name="customMesh",e.add(d),console.log("[GLTFLoader] GLTF model added to scene:",d),a&&a()},u=>{console.error("[GLTFLoader] Error parsing GLTF:",u),s&&s(`Error parsing GLTF: ${u.message}`)})},BA=/^[og]\s*(.+)?/,zA=/^mtllib /,HA=/^usemtl /,VA=/^usemap /,i_=/\s+/,r_=new H,Wf=new H,s_=new H,o_=new H,si=new H,oc=new et;function GA(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,a){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const u={index:this.materials.length,name:s||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(d){const h={index:typeof d=="number"?d:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return h.clone=this.clone.bind(h),h}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),s&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,a=this.object.geometry.vertices;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,a=this.object.geometry.normals;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,a=this.object.geometry.normals;r_.fromArray(s,e),Wf.fromArray(s,t),s_.fromArray(s,i),si.subVectors(s_,Wf),o_.subVectors(r_,Wf),si.cross(o_),si.normalize(),a.push(si.x,si.y,si.z),a.push(si.x,si.y,si.z),a.push(si.x,si.y,si.z)},addColor:function(e,t,i){const s=this.colors,a=this.object.geometry.colors;s[e]!==void 0&&a.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&a.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&a.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,a=this.object.geometry.uvs;a.push(s[e+0],s[e+1]),a.push(s[t+0],s[t+1]),a.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,a,c,u,d,h){const p=this.vertices.length;let m=this.parseVertexIndex(e,p),_=this.parseVertexIndex(t,p),x=this.parseVertexIndex(i,p);if(this.addVertex(m,_,x),this.addColor(m,_,x),u!==void 0&&u!==""){const M=this.normals.length;m=this.parseNormalIndex(u,M),_=this.parseNormalIndex(d,M),x=this.parseNormalIndex(h,M),this.addNormal(m,_,x)}else this.addFaceNormal(m,_,x);if(s!==void 0&&s!==""){const M=this.uvs.length;m=this.parseUVIndex(s,M),_=this.parseUVIndex(a,M),x=this.parseUVIndex(c,M),this.addUV(m,_,x),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const a=this.parseVertexIndex(e[i],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let a=0,c=e.length;a<c;a++)this.addVertexLine(this.parseVertexIndex(e[a],i));for(let a=0,c=t.length;a<c;a++)this.addUVLine(this.parseUVIndex(t[a],s))}};return o.startObject("",!1),o}class WA extends ps{constructor(e){super(e),this.materials=null}load(e,t,i,s){const a=this,c=new Td(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(a.parse(u))}catch(d){s?s(d):console.error(d),a.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new GA;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let u=0,d=i.length;u<d;u++){const h=i[u].trimStart();if(h.length===0)continue;const p=h.charAt(0);if(p!=="#")if(p==="v"){const m=h.split(i_);switch(m[0]){case"v":t.vertices.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),m.length>=7?(oc.setRGB(parseFloat(m[4]),parseFloat(m[5]),parseFloat(m[6])).convertSRGBToLinear(),t.colors.push(oc.r,oc.g,oc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3]));break;case"vt":t.uvs.push(parseFloat(m[1]),parseFloat(m[2]));break}}else if(p==="f"){const _=h.slice(1).trim().split(i_),x=[];for(let E=0,S=_.length;E<S;E++){const v=_[E];if(v.length>0){const b=v.split("/");x.push(b)}}const M=x[0];for(let E=1,S=x.length-1;E<S;E++){const v=x[E],b=x[E+1];t.addFace(M[0],v[0],b[0],M[1],v[1],b[1],M[2],v[2],b[2])}}else if(p==="l"){const m=h.substring(1).trim().split(" ");let _=[];const x=[];if(h.indexOf("/")===-1)_=m;else for(let M=0,E=m.length;M<E;M++){const S=m[M].split("/");S[0]!==""&&_.push(S[0]),S[1]!==""&&x.push(S[1])}t.addLineGeometry(_,x)}else if(p==="p"){const _=h.slice(1).trim().split(" ");t.addPointGeometry(_)}else if((s=BA.exec(h))!==null){const m=(" "+s[0].slice(1).trim()).slice(1);t.startObject(m)}else if(HA.test(h))t.object.startMaterial(h.substring(7).trim(),t.materialLibraries);else if(zA.test(h))t.materialLibraries.push(h.substring(7).trim());else if(VA.test(h))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=h.split(" "),s.length>1){const _=s[1].trim().toLowerCase();t.object.smooth=_!=="0"&&_!=="off"}else t.object.smooth=!0;const m=t.object.currentMaterial();m&&(m.smooth=t.object.smooth)}else{if(h==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+h+'"')}}t.finalize();const a=new Pr;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,d=t.objects.length;u<d;u++){const h=t.objects[u],p=h.geometry,m=h.materials,_=p.type==="Line",x=p.type==="Points";let M=!1;if(p.vertices.length===0)continue;const E=new hn;E.setAttribute("position",new Nt(p.vertices,3)),p.normals.length>0&&E.setAttribute("normal",new Nt(p.normals,3)),p.colors.length>0&&(M=!0,E.setAttribute("color",new Nt(p.colors,3))),p.hasUVIndices===!0&&E.setAttribute("uv",new Nt(p.uvs,2));const S=[];for(let b=0,w=m.length;b<w;b++){const C=m[b],k=C.name+"_"+C.smooth+"_"+M;let D=t.materials[k];if(this.materials!==null){if(D=this.materials.create(C.name),_&&D&&!(D instanceof Or)){const U=new Or;Kn.prototype.copy.call(U,D),U.color.copy(D.color),D=U}else if(x&&D&&!(D instanceof so)){const U=new so({size:10,sizeAttenuation:!1});Kn.prototype.copy.call(U,D),U.color.copy(D.color),U.map=D.map,D=U}}D===void 0&&(_?D=new Or:x?D=new so({size:1,sizeAttenuation:!1}):D=new hw,D.name=C.name,D.flatShading=!C.smooth,D.vertexColors=M,t.materials[k]=D),S.push(D)}let v;if(S.length>1){for(let b=0,w=m.length;b<w;b++){const C=m[b];E.addGroup(C.groupStart,C.groupCount,b)}_?v=new _o(E,S):x?v=new cc(E,S):v=new Xt(E,S)}else _?v=new _o(E,S[0]):x?v=new cc(E,S[0]):v=new Xt(E,S[0]);v.name=h.name,a.add(v)}else if(t.vertices.length>0){const u=new so({size:1,sizeAttenuation:!1}),d=new hn;d.setAttribute("position",new Nt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(d.setAttribute("color",new Nt(t.colors,3)),u.vertexColors=!0);const h=new cc(d,u);a.add(h)}return a}}const jA=(o,e,t,i,s,a=null)=>{if(console.log("[OBJLoader] Starting OBJ load..."),!o||o.length===0){const c="[OBJLoader] Buffer is empty";console.error(c),s&&s(c);return}if(!e){const c="[OBJLoader] No scene provided";console.error(c),s&&s(c);return}try{const c=new WA;console.log("[OBJLoader] Buffer received, first 200 characters:",o.substring(0,200)+"...");const u=c.parse(o);console.log("[OBJLoader] OBJ parsed successfully");let d=0,h=0;if(u.traverse(E=>{if(E instanceof Xt&&(E.material=new Sa({color:16119260,wireframe:t,roughness:.7,metalness:0,side:xi,flatShading:i,envMapIntensity:.2}),E.castShadow=!0,E.receiveShadow=!0,E.geometry)){const S=E.geometry.attributes.position?E.geometry.attributes.position.count:0;let v=0;if(E.geometry.index?v=E.geometry.index.count/3:E.geometry.attributes.position&&(v=Math.floor(E.geometry.attributes.position.count/3)),d+=S,h+=v,!E.geometry.index&&E.geometry.attributes.position){const b=E.geometry.attributes.position.array,w=[];for(let C=0;C<b.length/3;C++)w.push(C);E.geometry.setIndex(w)}i&&E.geometry.computeVertexNormals(),E.geometry.computeBoundingBox()}}),console.log("[OBJLoader] Total vertices:",d,"Total faces:",h),d===0||h===0)throw new Error("[OBJLoader] Model has no valid geometry");u.rotation.set(0,0,0),u.position.set(0,0,0),u.scale.set(1,1,1),u.updateMatrixWorld(!0);const p=new $n().setFromObject(u),m=p.getSize(new H),_=p.getCenter(new H);console.log("[OBJLoader] Pre-transform bounding box:",p),u.position.set(-_.x,-_.y,-_.z),u.position.y+=m.y/2;const M=5/Math.max(m.x,m.y,m.z);u.scale.multiplyScalar(M),u.updateMatrixWorld(!0),console.log("[OBJLoader] Final model state - position:",u.position.toArray(),"scale:",u.scale.toArray()),u.name="customMesh",e.add(u),console.log("[OBJLoader] OBJ model added to scene"),a&&a()}catch(c){console.error("[OBJLoader] Error loading OBJ:",c),s&&s(`Error loading OBJ: ${c.message}`)}},XA=()=>{const o=Et.useRef(null),[e,t]=Et.useState(!1),[i,s]=Et.useState(!1),[a,c]=Et.useState(5),[u,d]=Et.useState("cube"),[h,p]=Et.useState(!1),[m,_]=Et.useState(""),[x,M]=Et.useState(3),[E,S]=Et.useState(3.5),[v,b]=Et.useState(1),[w,C]=Et.useState(1),[k,D]=Et.useState(!1),[U,ce]=Et.useState(!1),[R,N]=Et.useState(!0),[ae,le]=Et.useState(!0),[he,V]=Et.useState(!0),[Z,ie]=Et.useState(!0),{scene:ee,camera:j,renderer:$,controls:X,light:I,lightHelper:W}=$w(o,{background:2767692,lightX:x,lightY:E,lightZ:v,showHelper:R});Et.useEffect(()=>{if(I){I.position.set(x,E,v),I.intensity=w;const J=ee.getObjectByName("lightSphere");J&&J.position.copy(I.position),W&&W.update()}},[I,x,E,v,w,W,ee]),Et.useEffect(()=>{if(I){I.visible=R,I.intensity=R?w:0;const J=ee.getObjectByName("lightSphere");J&&(J.visible=R)}},[I,R,w,ee]),Zw($,j,I,W,X,M,S,v,k,D),Jw($,j,ee,X,U,ce),Et.useEffect(()=>{ee&&u!=="custom"&&(iA(ee,u,e),Zg(ee))},[ee,u]),Et.useEffect(()=>{if(!ee)return;const J=ee.getObjectByName("customMesh");if(J){const fe=de=>{de&&(de.wireframe=e,de.needsUpdate=!0)};Array.isArray(J.material)?J.material.forEach(fe):fe(J.material),J.traverse(de=>{de instanceof Xt&&(Array.isArray(de.material)?de.material.forEach(fe):fe(de.material))})}},[e,ee]),Et.useEffect(()=>{if(ee){const J=ee.getObjectByName("boundingBoxHelper");J&&(J.visible=ae);const fe=ee.getObjectByName("originHelper");fe&&fe.material&&(fe.material.opacity=he?.8:0,fe.material.transparent=!0);const de=ee.getObjectByName("axesHelper");de&&(de.visible=Z)}},[ee,ae,he,Z]),Et.useEffect(()=>{if(!ee)return;const J=ee.getObjectByName("customMesh");J&&J.traverse(fe=>{if(fe instanceof Xt&&fe.geometry)if(i){fe.geometry.computeVertexNormals();const de=fe.geometry.attributes.normal,ye=a/2.5;for(let Ae=0;Ae<de.count;Ae++){const Le=de.getX(Ae)*(1+ye),Oe=de.getY(Ae)*(1+ye),at=de.getZ(Ae)*(1+ye),ne=Math.sqrt(Le*Le+Oe*Oe+at*at);de.setXYZ(Ae,Le/ne,Oe/ne,at/ne)}de.needsUpdate=!0}else{const ye=fe.geometry.clone();ye.computeVertexNormals(),fe.geometry.dispose(),fe.geometry=ye,fe.material.flatShading=!0}})},[i,a,ee]);const Y=(J,fe)=>{if(!ee){_("Scene not ready");return}p(!0),_("");const de=ee.getObjectByName("customMesh");de&&(W_(ee),ee.remove(de),de.geometry&&de.geometry.dispose(),de.material&&(Array.isArray(de.material)?de.material.forEach(ye=>ye.dispose()):de.material.dispose()));try{console.log("[ThreeJSViewer] Processing file:",fe);const ye=()=>{p(!1),d("custom"),Zg(ee)};fe.endsWith(".obj")?jA(J,ee,e,i,Ae=>{p(!1),_(`Error loading OBJ: ${Ae}`)},ye):fe.endsWith(".gltf")||fe.endsWith(".glb")?kA(J,ee,e,i,Ae=>{p(!1),_(`Error loading GLTF: ${Ae}`)},ye):(p(!1),_("Unsupported file format"))}catch(ye){p(!1),_(`Error loading model: ${ye.message}`)}};return Be.jsx("div",{className:"min-h-screen bg-gray-100 overflow-auto",children:Be.jsxs("div",{className:"container mx-auto px-4 py-8 flex flex-col space-y-6",children:[Be.jsxs("div",{className:"mx-auto w-full max-w-4xl rounded-xl shadow-lg overflow-hidden bg-gray-800 relative",style:{height:"600px"},children:[Be.jsx("div",{ref:o,className:"w-full h-full relative",children:h&&Be.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white",children:"Loading model..."})}),Be.jsx("div",{className:"absolute bottom-2 left-2 text-sm text-white/50 font-light pointer-events-none select-none",children:"Created by Andrew Thomas"})]}),m&&Be.jsx("div",{className:"mx-auto w-full max-w-4xl bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded",children:m}),Be.jsxs("div",{className:"mx-auto w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4",children:[Be.jsx(Qw,{wireframe:e,setWireframe:t,objectType:u,setObjectType:d,showBounds:ae,setShowBounds:le,showOrigin:he,setShowOrigin:V,showAxes:Z,setShowAxes:ie,showHelper:R,setShowHelper:N}),Be.jsx(eA,{lightX:x,setLightX:M,lightY:E,setLightY:S,lightZ:v,setLightZ:b,lightIntensity:w,setLightIntensity:C}),Be.jsx(nA,{smoothing:i,setSmoothing:s,smoothingIntensity:a,setSmoothingIntensity:c})]}),Be.jsx("div",{className:"mx-auto w-full max-w-4xl",children:Be.jsx(tA,{handleFileUpload:Y})}),Be.jsxs("div",{className:"mx-auto w-full max-w-4xl text-sm bg-white p-3 rounded shadow",children:[Be.jsx("p",{className:"font-medium",children:"Instructions:"}),Be.jsxs("ul",{className:"list-disc pl-5 mt-1 space-y-1",children:[Be.jsx("li",{children:"Click and drag to rotate the camera"}),Be.jsx("li",{children:"Scroll to zoom in/out"}),Be.jsx("li",{children:"Click and drag the light helper (white sphere) to move the light"}),Be.jsx("li",{children:"Upload your own 3D models in .gltf, .glb or .obj format"})]})]})]})})};function YA(){return Be.jsx("div",{className:"App",children:Be.jsx(XA,{})})}const qA=O0.createRoot(document.getElementById("root"));qA.render(Be.jsx(L0.StrictMode,{children:Be.jsx(YA,{})}));
