import{s as P,f as d,l as Z,a as D,U as ee,g as f,h as b,m as te,d as u,c as V,V as re,j as a,a4 as X,i as L,F as c,n as ne,r as N,X as Y,W as Q,S as oe,o as se}from"../chunks/scheduler.a12d0be3.js";import{S as U,i as W,b as M,d as S,m as A,a as O,t as F,e as G}from"../chunks/index.208b70fa.js";import{m as ae}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.0f792c6b.js";import"../chunks/iconify-icon.6d541906.js";function ie(n){let e,r,t,i,_,v,o,x,w,g,m,E;return{c(){e=d("a"),r=d("div"),t=d("div"),i=d("h3"),_=Z(n[2]),v=D(),o=d("figure"),x=d("iconify-icon"),w=D(),g=d("div"),m=d("p"),E=new ee(!1),this.h()},l(p){e=f(p,"A",{href:!0,target:!0,rel:!0});var l=b(e);r=f(l,"DIV",{class:!0});var h=b(r);t=f(h,"DIV",{class:!0});var j=b(t);i=f(j,"H3",{class:!0});var $=b(i);_=te($,n[2]),$.forEach(u),j.forEach(u),v=V(h),o=f(h,"FIGURE",{class:!0});var C=b(o);x=f(C,"ICONIFY-ICON",{icon:!0,height:!0}),b(x).forEach(u),C.forEach(u),w=V(h),g=f(h,"DIV",{class:!0});var y=b(g);m=f(y,"P",{class:!0});var T=b(m);E=re(T,!1),T.forEach(u),y.forEach(u),h.forEach(u),l.forEach(u),this.h()},h(){a(i,"class","card-title font-bold text-2xl"),a(t,"class","card-header"),X(x,"icon",n[1]),X(x,"height","150"),a(o,"class","flex justify-center my-4"),E.a=null,a(m,"class","card-text"),a(g,"class","card-body m-4"),a(r,"class","card w-80 mx-auto my-4 lg:m-4 border-primary-500 border-y-8 hover:scale-105 transition-al"),a(e,"href",n[0]),a(e,"target","_blank"),a(e,"rel","noreferrer")},m(p,l){L(p,e,l),c(e,r),c(r,t),c(t,i),c(i,_),c(r,v),c(r,o),c(o,x),c(r,w),c(r,g),c(g,m),E.m(n[3],m)},p(p,[l]){l&4&&ne(_,p[2]),l&2&&X(x,"icon",p[1]),l&8&&E.p(p[3]),l&1&&a(e,"href",p[0])},i:N,o:N,d(p){p&&u(e)}}}function le(n,e,r){let{link:t=""}=e,{icon:i=""}=e,{title:_=""}=e,{content:v=""}=e;return n.$$set=o=>{"link"in o&&r(0,t=o.link),"icon"in o&&r(1,i=o.icon),"title"in o&&r(2,_=o.title),"content"in o&&r(3,v=o.content)},[t,i,_,v]}class B extends U{constructor(e){super(),W(this,e,le,ie,P,{link:0,icon:1,title:2,content:3})}}function ce(n){let e,r;return e=new B({props:{title:ue,icon:de,link:fe,content:n[0]}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p:N,i(t){r||(O(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}const ue="Developer Experience",de="ant-design:code-outlined",fe="https://tutors.dev/course/tutors-reference-manual#tutors-values";function ge(n){return[`
  The <strong><em>Developer Experience</em></strong> prioritises the specification and implementation of <strong>robust</strong>, <strong>well documented</strong>,
  <strong>loosely coupled components & services</strong>, integrated into a
  <strong>coherent toolkit</strong>
  open to contributions from <strong>diverse skill sets</strong>.
  `]}class me extends U{constructor(e){super(),W(this,e,ge,ce,P,{})}}function pe(n){let e,r;return e=new B({props:{title:ve,icon:he,link:be,content:n[0]}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p:N,i(t){r||(O(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}const he="mdi:teacher",ve="Educator Experience",be="https://tutors.dev/course/tutors-reference-manual#tutors-values";function xe(n){return[`
  The <strong><em>Educator Experience</em></strong> prioritises the creation of a
  <strong>guided paths</strong>
  through a curriculum via the creation of learning materials that are
	<strong>autonomous</strong>, <strong>structurally aligned</strong>,
	<strong>composable</strong>, <strong>auditable</strong>, <strong>extensible</strong>,
	<strong>versioned</strong>
	and <strong>independent</strong>.`]}class _e extends U{constructor(e){super(),W(this,e,xe,pe,P,{})}}function $e(n){let e,r;return e=new B({props:{title:ye,icon:ke,link:we,content:n[0]}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,i){A(e,t,i),r=!0},p:N,i(t){r||(O(e.$$.fragment,t),r=!0)},o(t){F(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}const ye="Learner Experience",ke="ph:student",we="https://tutors.dev/course/tutors-reference-manual#tutors-values";function Ee(n){return[`
The <strong><em>Learner Experience</em></strong> prioritises web interactions that are
<strong>engaging</strong>, <strong>contextual</strong>, <strong>linkable</strong>,
<strong>searchable</strong>, <strong>accessible</strong> and
<strong>responsive</strong>. In addition the experience should foster a sense of
<strong>community</strong>
and <strong>connection</strong> among fellow learners.`]}class Ie extends U{constructor(e){super(),W(this,e,Ee,$e,P,{})}}function De(n){let e,r,t,i=`<h1 class="font-bold !text-5xl inline-block my-4">An
        <span class="font-bold !text-5xl inline-block bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent box-decoration-clone">Open Learning</span>
        Web Toolkit</h1> <p class="font-bold !text-lg my-4">A collection of open source components &amp; services supporting the creation of transformative
        learning experiences using open web standards.</p> <div class="space-x-4 space-y-4"><a class="btn btn-xl bg-primary-500 text-white font-bold hover:scale-105 transition-all w-64" href="http://127.0.0.1:3000/course/reference-course" target="_blank" rel="noreferrer">View Demo</a> <a class="btn btn-xl bg-surface-100-800-token font-bold hover:scale-105 transition-all w-64" href="https://tutors.dev/course/tutors-reference-manual" target="_blank" rel="noreferrer">Documentation</a></div>`,_,v,o,x,w,g,m,E='<h2 class="font-bold !text-5xl inline-block my-4">The <span class="font-bold !text-5xl inline-block bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent box-decoration-clone">Values</span> of the project</h2>',p,l,h,j,$,C,y,T,I,J=`<div class="container lg:flex justify-center items-center mx-auto py-20"><div class="w-full px-4"><h1 class="font-bold !text-5xl inline-block my-4">A fully <span class="font-bold !text-5xl inline-block bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent box-decoration-clone">Open Source</span> project</h1> <p class="font-bold !text-lg my-4">Tutors is an open source project available for free under the MIT license on GitHub. It
        exists due to the hard work and dedication of all individuals who have contributed to
        project.</p> <a href="https://github.com/tutors-sdk/tutors/graphs/contributors" target="_blank" rel="noreferrer"><img src="https://contrib.rocks/image?repo=tutors-sdk/tutors" alt="github contributors list"/></a> <div class="my-4"><a class="btn btn-xl bg-primary-500 text-white font-bold hover:scale-105 transition-all" href="https://github.com/tutors-sdk/tutors" target="_blank" rel="noreferrer"><iconify-icon icon="mdi:github"></iconify-icon>  View Source Code</a></div></div></div>`,q;return h=new Ie({}),$=new _e({}),y=new me({}),{c(){e=d("div"),r=d("div"),t=d("div"),t.innerHTML=i,_=D(),v=d("div"),o=d("img"),w=D(),g=d("div"),m=d("div"),m.innerHTML=E,p=D(),l=d("div"),M(h.$$.fragment),j=D(),M($.$$.fragment),C=D(),M(y.$$.fragment),T=D(),I=d("div"),I.innerHTML=J,this.h()},l(s){e=f(s,"DIV",{class:!0});var k=b(e);r=f(k,"DIV",{class:!0});var z=b(r);t=f(z,"DIV",{class:!0,"data-svelte-h":!0}),Y(t)!=="svelte-1t77xsd"&&(t.innerHTML=i),_=V(z),v=f(z,"DIV",{class:!0});var K=b(v);o=f(K,"IMG",{src:!0,alt:!0}),K.forEach(u),z.forEach(u),k.forEach(u),w=V(s),g=f(s,"DIV",{class:!0});var R=b(g);m=f(R,"DIV",{class:!0,"data-svelte-h":!0}),Y(m)!=="svelte-cyhrod"&&(m.innerHTML=E),p=V(R),l=f(R,"DIV",{class:!0});var H=b(l);S(h.$$.fragment,H),j=V(H),S($.$$.fragment,H),C=V(H),S(y.$$.fragment,H),H.forEach(u),R.forEach(u),T=V(s),I=f(s,"DIV",{class:!0,"data-svelte-h":!0}),Y(I)!=="svelte-1fs95kz"&&(I.innerHTML=J),this.h()},h(){a(t,"class","lg:w-1/2 mx-4"),Q(o.src,x=n[0]?"/tutors-reader-light.png":"/tutors-reader-dark.png")||a(o,"src",x),a(o,"alt","tutors reader screenshot"),a(v,"class","w-full lg:w-1/2"),a(r,"class","container lg:flex justify-center items-center mx-auto py-32"),a(e,"class","bg-gradient-to-l from-primary-50 dark:from-primary-900 to-accent-50 dark:to-accent-900"),a(m,"class","w-full m-4"),a(l,"class","w-full lg:flex justify-center my-12"),a(g,"class","container py-20 mx-auto justify-center items-center"),a(I,"class","bg-gradient-to-l from-primary-50 dark:from-primary-900 to-accent-50 dark:to-accent-900")},m(s,k){L(s,e,k),c(e,r),c(r,t),c(r,_),c(r,v),c(v,o),L(s,w,k),L(s,g,k),c(g,m),c(g,p),c(g,l),A(h,l,null),c(l,j),A($,l,null),c(l,C),A(y,l,null),L(s,T,k),L(s,I,k),q=!0},p(s,[k]){(!q||k&1&&!Q(o.src,x=s[0]?"/tutors-reader-light.png":"/tutors-reader-dark.png"))&&a(o,"src",x)},i(s){q||(O(h.$$.fragment,s),O($.$$.fragment,s),O(y.$$.fragment,s),q=!0)},o(s){F(h.$$.fragment,s),F($.$$.fragment,s),F(y.$$.fragment,s),q=!1},d(s){s&&(u(e),u(w),u(g),u(T),u(I)),G(h),G($),G(y)}}}function Ve(n,e,r){let t;return oe(n,ae,i=>r(0,t=i)),se(()=>{localStorage.isAuthenticating&&localStorage.course_url&&(localStorage.removeItem("isAuthenticating"),window.location.href="/course/"+localStorage.course_url)}),[t]}class Le extends U{constructor(e){super(),W(this,e,Ve,De,P,{})}}export{Le as component};
