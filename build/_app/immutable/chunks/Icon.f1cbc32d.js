import{s as q,e as b,i as w,d as m,f as C,g as E,h as N,j as u}from"./scheduler.a12d0be3.js";import{S as z,i as B,g as S,t as h,c as j,a as g,b as d,d as p,m as v,e as I}from"./index.208b70fa.js";import{a as _}from"./markdown.7da8b841.js";import{I as A}from"./Icon.24b4d7b9.js";function D(i){let e,r;return e=new A({props:{icon:i[1],color:i[2],width:i[5],height:i[6]}}),{c(){d(e.$$.fragment)},l(n){p(e.$$.fragment,n)},m(n,t){v(e,n,t),r=!0},p(n,t){const o={};t&2&&(o.icon=n[1]),t&4&&(o.color=n[2]),t&32&&(o.width=n[5]),t&64&&(o.height=n[6]),e.$set(o)},i(n){r||(g(e.$$.fragment,n),r=!0)},o(n){h(e.$$.fragment,n),r=!1},d(n){I(e,n)}}}function F(i){let e,r,n;return r=new A({props:{icon:i[1],color:i[2],width:i[5],height:i[6]}}),{c(){e=C("a"),d(r.$$.fragment),this.h()},l(t){e=E(t,"A",{target:!0,href:!0});var o=N(e);p(r.$$.fragment,o),o.forEach(m),this.h()},h(){u(e,"target",i[4]),u(e,"href",i[3])},m(t,o){w(t,e,o),v(r,e,null),n=!0},p(t,o){const f={};o&2&&(f.icon=t[1]),o&4&&(f.color=t[2]),o&32&&(f.width=t[5]),o&64&&(f.height=t[6]),r.$set(f),(!n||o&16)&&u(e,"target",t[4]),(!n||o&8)&&u(e,"href",t[3])},i(t){n||(g(r.$$.fragment,t),n=!0)},o(t){h(r.$$.fragment,t),n=!1},d(t){t&&m(e),I(r)}}}function G(i){let e,r,n,t;const o=[J,H],f=[];function s(l,a){return l[3]?0:1}return e=s(i),r=f[e]=o[e](i),{c(){r.c(),n=b()},l(l){r.l(l),n=b()},m(l,a){f[e].m(l,a),w(l,n,a),t=!0},p(l,a){let c=e;e=s(l),e===c?f[e].p(l,a):(S(),h(f[c],1,1,()=>{f[c]=null}),j(),r=f[e],r?r.p(l,a):(r=f[e]=o[e](l),r.c()),g(r,1),r.m(n.parentNode,n))},i(l){t||(g(r),t=!0)},o(l){h(r),t=!1},d(l){l&&m(n),f[e].d(l)}}}function H(i){let e,r;return e=new A({props:{icon:_(i[0]).icon,color:k(_(i[0]).colour),width:i[5],height:i[6]}}),{c(){d(e.$$.fragment)},l(n){p(e.$$.fragment,n)},m(n,t){v(e,n,t),r=!0},p(n,t){const o={};t&1&&(o.icon=_(n[0]).icon),t&1&&(o.color=k(_(n[0]).colour)),t&32&&(o.width=n[5]),t&64&&(o.height=n[6]),e.$set(o)},i(n){r||(g(e.$$.fragment,n),r=!0)},o(n){h(e.$$.fragment,n),r=!1},d(n){I(e,n)}}}function J(i){let e,r,n;return r=new A({props:{icon:_(i[0]).icon,color:k(_(i[0]).colour),width:i[5],height:i[6]}}),{c(){e=C("a"),d(r.$$.fragment),this.h()},l(t){e=E(t,"A",{target:!0,href:!0});var o=N(e);p(r.$$.fragment,o),o.forEach(m),this.h()},h(){u(e,"target",i[4]),u(e,"href",i[3])},m(t,o){w(t,e,o),v(r,e,null),n=!0},p(t,o){const f={};o&1&&(f.icon=_(t[0]).icon),o&1&&(f.color=k(_(t[0]).colour)),o&32&&(f.width=t[5]),o&64&&(f.height=t[6]),r.$set(f),(!n||o&16)&&u(e,"target",t[4]),(!n||o&8)&&u(e,"href",t[3])},i(t){n||(g(r.$$.fragment,t),n=!0)},o(t){h(r.$$.fragment,t),n=!1},d(t){t&&m(e),I(r)}}}function K(i){let e,r,n,t;const o=[G,F,D],f=[];function s(l,a){return l[0]?0:l[3]?1:2}return e=s(i),r=f[e]=o[e](i),{c(){r.c(),n=b()},l(l){r.l(l),n=b()},m(l,a){f[e].m(l,a),w(l,n,a),t=!0},p(l,[a]){let c=e;e=s(l),e===c?f[e].p(l,a):(S(),h(f[c],1,1,()=>{f[c]=null}),j(),r=f[e],r?r.p(l,a):(r=f[e]=o[e](l),r.c()),g(r,1),r.m(n.parentNode,n))},i(l){t||(g(r),t=!0)},o(l){h(r),t=!1},d(l){l&&m(n),f[e].d(l)}}}function k(i){return i==="info"?"rgba(var(--color-primary-500))":i==="success"?"rgba(var(--color-success-500))":i==="warning"?"rgba(var(--color-warning-500))":i==="error"?"rgba(var(--color-error-500))":"rgba(var(--color-primary-500))"}function L(i,e,r){let{type:n=""}=e,{icon:t=""}=e,{color:o=""}=e,{link:f=""}=e,{target:s=""}=e,{width:l=""}=e,{height:a="20"}=e;return i.$$set=c=>{"type"in c&&r(0,n=c.type),"icon"in c&&r(1,t=c.icon),"color"in c&&r(2,o=c.color),"link"in c&&r(3,f=c.link),"target"in c&&r(4,s=c.target),"width"in c&&r(5,l=c.width),"height"in c&&r(6,a=c.height)},[n,t,o,f,s,l,a]}class R extends z{constructor(e){super(),B(this,e,L,K,q,{type:0,icon:1,color:2,link:3,target:4,width:5,height:6})}}export{R as I};
