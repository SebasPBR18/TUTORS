import{w as u}from"./index.b82ab7ce.js";import{a as b}from"./paths.69643c54.js";const v="1695266932539",A="sveltekit:snapshot",R="sveltekit:scroll",y="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function S(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function _(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function T(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=_(e)}}function x(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!s||k(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:s,download:l}}function O(e){let t=null,n=null,s=null,r=null,l=null,a=null,o=e;for(;o&&o!==document.documentElement;)s===null&&(s=c(o,"preload-code")),r===null&&(r=c(o,"preload-data")),t===null&&(t=c(o,"keepfocus")),n===null&&(n=c(o,"noscroll")),l===null&&(l=c(o,"reload")),a===null&&(a=c(o,"replacestate")),o=_(o);function i(g){switch(g){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[s??"off"],preload_data:d[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(l),replace_state:i(a)}}function p(e){const t=u(e);let n=!0;function s(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function l(a){let o;return t.subscribe(i=>{(o===void 0||n&&i!==o)&&a(o=i)})}return{notify:s,set:r,subscribe:l}}function m(){const{set:e,subscribe:t}=u(!1);let n;async function s(){clearTimeout(n);try{const r=await fetch(`${b}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==v;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:s}}function k(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let h;function U(e){h=e.client}function L(e){return(...t)=>h[e](...t)}const N={url:p({}),page:p({}),navigating:u(null),updated:m()};export{y as I,f as P,R as S,A as a,x as b,O as c,S as d,U as e,T as f,I as g,L as h,k as i,N as s};
