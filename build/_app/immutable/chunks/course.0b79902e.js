var C=Object.defineProperty;var S=(s,t,e)=>t in s?C(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(S(s,typeof t!="symbol"?t+"":t,e),e);import{c as x,e as U,w as $,a as p}from"./stores.ee858f52.js";import{f as E,b as u}from"./markdown.7da8b841.js";function m(s,t,e){var o,r,n,a,h;s.type==="archive"||s.type==="otherType"?s.route=(o=s.route)==null?void 0:o.replace("{{COURSEURL}}",e):s.route=(r=s.route)==null?void 0:r.replace("{{COURSEURL}}",t),s.img=(n=s.img)==null?void 0:n.replace("{{COURSEURL}}",e),s.video=(a=s.video)==null?void 0:a.replace("{{COURSEURL}}",t),s.pdf=(h=s.pdf)==null?void 0:h.replace("{{COURSEURL}}",e),s.los&&s.los.forEach(c=>{m(c,t,e)})}function b(s){let t=[];return s.forEach(e=>{t.push(e),e.los&&(t=t.concat(b(e.los)))}),t}function R(s){const t=s.lastIndexOf("#");return t>=0?s.substring(t+1):s}function y(s){for(const t of s.los)t.parentLo=s,t.los&&y(t)}function g(s,t){const e=[];for(const o of s)o.type===t&&e.push(o),(o.type==="unit"||o.type==="side")&&e.push(...g(o.los,t));return e}function w(s){const t=[];for(const e of s)e.video&&t.push(e),e.type==="unit"&&t.push(...w(e.los));return t}function H(s,t){const e=[];for(const o of t)e.push(...g(o.los,s));return e}function N(s){const t=[];for(const e of s)t.push(...w(e.los));return t}function v(s){const t=s.filter(e=>e.type==="unit");for(const e of t){const[o,r,n]=[e.los.filter(a=>a.type==="panelvideo"),e.los.filter(a=>a.type==="paneltalk"),e.los.filter(a=>a.type!=="unit"&&a.type!=="panelvideo"&&a.type!=="paneltalk")];e.los=[...o,...r,...n]}return t}function k(s){var t;s.route&&s.route[0]==="#"&&(s.route="/"+s.route.slice(1)),s.video&&s.video[0]==="#"&&(s.video="/"+s.video.slice(1)),s.route.endsWith("md")&&s.video&&(s.route=s.video),(t=s.los)==null||t.forEach(k)}class M{constructor(t,e,o){i(this,"course");i(this,"lo");i(this,"toc",[]);this.lo=t,this.course=o;const r=v(this.lo.los),n=this.lo.los.filter(l=>l.type==="side"),a=this.lo.los.filter(l=>l.type==="panelvideo"),h=this.lo.los.filter(l=>l.type==="paneltalk"),c=this.lo.los.filter(l=>l.type==="panelnote"),L=this.lo.los.filter(l=>l.type!=="unit"&&l.type!=="panelvideo"&&l.type!=="paneltalk"&&l.type!=="panelnote"&&l.type!=="side");this.toc.push(...a,...h,...c,...r,...L,...n),k(t),this.toc.forEach(l=>{l.parent=this,(l.type==="unit"||l.type==="side")&&l.los.forEach(T=>{T.parent=this})})}}class d{constructor(t,e,o){i(this,"url","");i(this,"id","");i(this,"lo");i(this,"topics",[]);i(this,"units");i(this,"sideBar");i(this,"standardLos");i(this,"allLos");i(this,"authLevel",0);i(this,"topicIndex",new Map);i(this,"hydratedLabs",new Map);i(this,"walls",new Map);i(this,"calendar");i(this,"currentWeek",null);i(this,"loIndex",new Map);i(this,"companions",{show:!0,bar:[]});i(this,"wallBar",{show:!0,bar:[]});var r,n;this.id=e,this.url=o,m(t,e,o),((r=t.properties)==null?void 0:r.auth)!==void 0&&(this.authLevel=t.properties.auth),y(t),t.route=`/course/${e}`,this.lo=t,this.initCalendar(),(n=t.properties)!=null&&n.icon&&(t.icon=t.properties.icon),this.allLos=this.lo.los,this.lo.los=this.lo.los.filter(a=>a.hide!==!0),this.populate(),this.createCompanions(),this.createWallBar()}populate(){if(this.topics=this.lo.los.map(e=>{const o=new M(e,this.url,this);return this.topicIndex.set(e.id,o),o}),b(this.lo.los).forEach(e=>this.loIndex.set(e.route,e)),!this.areVideosHidden()){const e=N(this.lo.los);e.forEach(o=>this.loIndex.set(o.video,o)),e.length>0&&this.walls.set("video",e)}["talk","note","lab","web","archive","github"].forEach(e=>this.addWall(e)),this.units=v(this.lo.los),this.sideBar=this.lo.los.filter(e=>e.type==="side"),this.standardLos=this.lo.los.filter(e=>e.type!=="unit"&&e.type!=="panelvideo"&&e.type!=="paneltalk")}addWall(t){const e=H(t,this.lo.los);e.length>0&&this.walls.set(t,e)}showAllLos(){this.lo.los=this.allLos,this.populate()}isPortfolio(){var t,e;return!!((e=(t=this==null?void 0:this.lo)==null?void 0:t.properties)!=null&&e.portfolio)}areVideosHidden(){var t,e;return!!((e=(t=this.lo)==null?void 0:t.properties)!=null&&e.hideVideos)&&this.lo.properties.hideVideos!=="false"}areLabStepsAutoNumbered(){let t=!1;return this.lo.properties.labStepsAutoNumber!==void 0&&(t=this.lo.properties.labStepsAutoNumber==!0),t}hasEnrollment(){var t;return((t=this==null?void 0:this.lo)==null?void 0:t.enrollment)!==void 0}hasWhiteList(){var e,o;const t=(o=(e=this.lo)==null?void 0:e.properties)==null?void 0:o.whitelist;return this.hasEnrollment()&&Number(t)===1}getEnrolledStudentIds(){return this.lo.enrollment}createCompanions(){const{properties:t}=this.lo;if([{key:"slack",icon:"slack",target:"_blank",tip:"Go to module Slack channel"},{key:"zoom",icon:"zoom",target:"_blank",tip:"Go to module Zoom meeting"},{key:"moodle",icon:"moodle",target:"_blank",tip:"Go to module Moodle page"},{key:"youtube",icon:"youtube",target:"_blank",tip:"Go to module YouTube channel"},{key:"teams",icon:"teams",target:"_blank",tip:"Go to module Teams meeting"}].forEach(o=>{const{key:r,icon:n,target:a,tip:h}=o;t[r]&&this.companions.bar.push({link:t[r],icon:n,target:a,tip:h})}),t.companions)for(const[o,r]of Object.entries(t.companions)){const n=r;E(o,n.icon),this.companions.bar.push({link:n.link,icon:o,target:"_blank",tip:n.title})}this.companions.show=this.companions.bar.length>0}createWallBar(){this.isPortfolio()||(this.wallBar.bar=Array.from(this.walls.keys()).map(t=>this.createWallLink(t)),this.wallBar.show=this.wallBar.bar.length>0)}createWallLink(t){return{link:`/wall/${t}/${this.url}`,icon:t,tip:`${t}s`,target:""}}initCalendar(){const t={title:"unknown",weeks:[]};this.calendar=t;try{if(this.lo.calendar){const e=this.lo.calendar;t.title=e.title,t.weeks=e.weeks.map(r=>({date:Object.keys(r)[0],title:r[Object.keys(r)[0]].title,type:r[Object.keys(r)[0]].type,dateObj:new Date(Object.keys(r)[0])}));const o=Date.now();this.currentWeek=t.weeks.find((r,n)=>{var a;return o>Date.parse(r.date)&&o<=Date.parse((a=t.weeks[n+1])==null?void 0:a.date)})}}catch{console.log("Error loading calendar")}}}function f(s){return(s==null?void 0:s.length)>16?s.substring(0,15)+"...":s}class O{constructor(t,e,o){i(this,"course");i(this,"lo",null);i(this,"url","");i(this,"objectivesHtml","");i(this,"currentChapterShortTitle","");i(this,"currentChapterTitle","");i(this,"navbarHtml","");i(this,"horizontalNavbarHtml","");i(this,"content","");i(this,"chaptersHtml",new Map);i(this,"chaptersTitles",new Map);i(this,"steps",[]);i(this,"autoNumber",!1);i(this,"vertical",!0);this.course=t,this.autoNumber=t.areLabStepsAutoNumbered(),this.url=o,this.lo=e,this.convertMdToHtml()}convertMdToHtml(){const t=this.url.replace(`/lab/${this.course.id}`,this.course.url);this.objectivesHtml=u(this.lo.los[0].contentMd,t),this.chaptersHtml=new Map(this.lo.los.map(e=>[encodeURI(e.shortTitle),u(e.contentMd,t)])),this.chaptersTitles=new Map(this.lo.los.map(e=>[e.shortTitle,R(e.title)])),this.steps=Array.from(this.chaptersHtml.keys())}refreshNav(){const t=this.autoNumber?this.lo.shortTitle+": ":"";this.navbarHtml=this.lo.los.map(o=>{const r=encodeURI(o.shortTitle)===this.currentChapterShortTitle?"font-bold bg-surface-200 dark:bg-surface-600 pl-4":"",n=this.chaptersTitles.get(o.shortTitle);return`<a href="${this.url}/${encodeURI(o.shortTitle)}"><li class="py-2 px-4 ${r} !text-black dark:!text-white">${t}${n}</li></a>`}).join("");const e=this.lo.los.findIndex(o=>encodeURI(o.shortTitle)===this.currentChapterShortTitle);if(e!==-1){const o=this.lo.los[e-1],r=o?f(this.chaptersTitles.get(o.shortTitle)):"";this.horizontalNavbarHtml=o?`<a class="btn btn-sm capitalize" href="${this.url}/${encodeURI(o.shortTitle)}"> <span aria-hidden="true">&larr;</span>&nbsp; ${t}${r} </a>`:"";const n=this.lo.los[e+1],a=n?f(this.chaptersTitles.get(n.shortTitle)):"";this.horizontalNavbarHtml+=n?`<a class="ml-auto btn btn-sm capitalize" style="margin-left: auto" href="${this.url}/${encodeURI(n.shortTitle)}"> ${t}${a} &nbsp;<span aria-hidden="true">&rarr;</span></a>`:""}else this.horizontalNavbarHtml=""}setCurrentChapter(t){this.steps.includes(t)&&(this.currentChapterShortTitle=t,this.currentChapterTitle=this.chaptersTitles.get(t),this.content=this.chaptersHtml.get(t),this.refreshNav())}setFirstPageActive(){const t=encodeURI(this.lo.los[0].shortTitle);this.setCurrentChapter(t)}setActivePage(t){this.setCurrentChapter(t)}nextStep(){const t=this.steps.indexOf(this.currentChapterShortTitle);return t<this.steps.length-1?this.steps[t+1]:""}prevStep(){const t=this.steps.indexOf(this.currentChapterShortTitle);return t>0?this.steps[t-1]:""}}const B={course:d,courses:new Map,courseUrl:"",async getOrLoadCourse(s,t){let e=this.courses.get(s),o=s;if(!e){!s.includes(".netlify.app")&&!s.includes(".tutors.dev")?o=`${s}.netlify.app`:s=s.split(".")[0];try{const r=await t(`https://${o}/tutors.json`);if(!r.ok)throw new Error(`Fetch failed with status ${r.status}`);const n=await r.json();e=new d(n,s,o),this.courses.set(s,e)}catch(r){throw console.error(`Error fetching from URL: https://${o}/tutors.json`),console.error(r),r}}return e},async readCourse(s,t){const e=await this.getOrLoadCourse(s,t);return x.set(e),U.set(e.url),$.set(e==null?void 0:e.currentWeek),this.course=e,e},async readTopic(s,t,e){const r=(await this.readCourse(s,e)).topicIndex.get(t);return p.set(r.lo),r},async readLab(s,t,e){const o=await this.readCourse(s,e);t.substring(t.lastIndexOf("/")+1).startsWith("book")||(t=t.slice(0,t.lastIndexOf("/")));const n=o.loIndex.get(t),a=o.hydratedLabs.get(t)||new O(o,n,t);return o.hydratedLabs.set(t,a),p.set(a.lo),a},async readWall(s,t,e){return(await this.readCourse(s,e)).walls.get(t)},async readLo(s,t,e){const r=(await this.readCourse(s,e)).loIndex.get(t);return p.set(r),r}};export{H as a,B as c,R as r};
