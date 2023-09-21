import{c as Z}from"../chunks/course.0b79902e.js";import{s as $,f as o,a as N,U as j,_ as B,g as i,d as a,c as O,h as u,V as P,j as r,F as v,i as L,r as R,S as Q,o as Y,Z as ee}from"../chunks/scheduler.a12d0be3.js";import{g as ae}from"../chunks/globals.7f7f1b26.js";import{S as te,i as se}from"../chunks/index.208b70fa.js";import{p as le}from"../chunks/stores.0392801f.js";import{a as re,g as W}from"../chunks/navigation.a50e4eb6.js";const ne=!1,oe=async({url:c,params:n,fetch:f})=>{const s=await Z.readLab(n.courseid,c.pathname,f),t=c.pathname.substring(c.pathname.lastIndexOf("/")+1);return t.startsWith("book")?s.setFirstPageActive():s.setActivePage(t),{lab:s,lo:s.lo}},he=Object.freeze(Object.defineProperty({__proto__:null,load:oe,ssr:ne},Symbol.toStringTag,{value:"Module"})),{document:J}=ae;function ie(c){let n,f,s,t,m,e=c[0].lab.horizontalNavbarHtml+"",p,_,h,b,w,y,E,A,D=c[0].lab.navbarHtml+"",H,g,k,x,I,S=c[0].lab.content+"";return{c(){n=o("link"),f=N(),s=o("div"),t=o("nav"),m=new j(!1),p=N(),_=o("div"),h=o("div"),b=o("div"),w=o("div"),y=o("nav"),E=o("ul"),A=new j(!1),H=N(),g=o("div"),k=o("div"),x=o("article"),I=new j(!1),this.h()},l(l){const d=B("svelte-binlg6",J.head);n=i(d,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),d.forEach(a),f=O(l),s=i(l,"DIV",{class:!0});var T=u(s);t=i(T,"NAV",{class:!0});var U=u(t);m=P(U,!1),U.forEach(a),T.forEach(a),p=O(l),_=i(l,"DIV",{class:!0});var q=u(_);h=i(q,"DIV",{class:!0});var V=u(h);b=i(V,"DIV",{class:!0});var z=u(b);w=i(z,"DIV",{class:!0});var C=u(w);y=i(C,"NAV",{class:!0});var X=u(y);E=i(X,"UL",{});var M=u(E);A=P(M,!1),M.forEach(a),X.forEach(a),C.forEach(a),z.forEach(a),H=O(V),g=i(V,"DIV",{id:!0,class:!0});var F=u(g);k=i(F,"DIV",{class:!0});var G=u(k);x=i(G,"ARTICLE",{class:!0});var K=u(x);I=P(K,!1),K.forEach(a),G.forEach(a),F.forEach(a),V.forEach(a),q.forEach(a),this.h()},h(){r(n,"rel","stylesheet"),r(n,"href","https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"),r(n,"integrity","sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"),r(n,"crossorigin","anonymous"),m.a=null,r(t,"class","flex flex-wrap justify-between p-2"),r(s,"class","block fixed w-full mx-auto bottom-0 lg:hidden bg-primary-50-900-token z-30"),A.a=null,r(y,"class","nav-list"),r(w,"class","sticky h-auto card bg-surface-100-800-token py-4 m-2 rounded-xl top-6 w-full"),r(b,"class","hidden lg:block h-auto w-72 mr-2"),I.a=null,r(x,"class","mx-auto prose dark:prose-invert max-w-none w-[80%]"),r(k,"class","card bg-surface-100-800-token p-8 lg:px-4 py-8 m-2 rounded-xl"),r(g,"id","lab-panel"),r(g,"class","flex-1 w-1/2 min-h-screen"),r(h,"class","flex lg:w-10/12 2xl:w-3/4 mx-auto"),r(_,"class","w-full")},m(l,d){v(J.head,n),L(l,f,d),L(l,s,d),v(s,t),m.m(e,t),L(l,p,d),L(l,_,d),v(_,h),v(h,b),v(b,w),v(w,y),v(y,E),A.m(D,E),v(h,H),v(h,g),v(g,k),v(k,x),I.m(S,x)},p(l,[d]){d&1&&e!==(e=l[0].lab.horizontalNavbarHtml+"")&&m.p(e),d&1&&D!==(D=l[0].lab.navbarHtml+"")&&A.p(D),d&1&&S!==(S=l[0].lab.content+"")&&I.p(S)},i:R,o:R,d(l){l&&(a(f),a(s),a(p),a(_)),a(n)}}}function ce(c,n,f){let s;Q(c,le,e=>f(1,s=e));let{data:t}=n;Y(async()=>{window.addEventListener("keydown",m)}),ee(()=>{window.removeEventListener("keydown",m)}),re(()=>{if(!s.url.hash){const e=document.querySelector("#page");e&&(e.scrollTop=0)}});async function m(e){if(e.key==="ArrowRight"||e.key==="ArrowDown"){e.preventDefault();let p=t.lab.nextStep();W(`${t.lab.url}/${p}`)}else if(e.key==="ArrowLeft"||e.key==="ArrowUp"){e.preventDefault();let p=t.lab.prevStep();W(`${t.lab.url}/${p}`)}}return c.$$set=e=>{"data"in e&&f(0,t=e.data)},[t]}class _e extends te{constructor(n){super(),se(this,n,ce,ie,$,{data:0})}}export{_e as component,he as universal};
