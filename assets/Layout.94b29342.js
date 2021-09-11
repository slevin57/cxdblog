var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&o(e,a,t[a]);if(l)for(var a of l(t))r.call(t,a)&&o(e,a,t[a]);return e},i=(e,l)=>t(e,a(l));import{d as u,f as c,g as v,h as d,i as p,j as m,k as h,l as b,r as k,o as g,c as f,w as L,m as y,b as w,t as x,n as N,p as T,q as C,s as $,v as M,x as P,a as S,F as A,y as O,z as B,A as R,e as I,B as H,C as z,D as E,E as j,G as D,H as _,I as F,J as G,K as U,L as W,u as q,M as V,N as X,O as Y,P as J,T as K,Q,R as Z}from"./app.e41b64c2.js";var ee=u({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=c(),a=b(),{item:l}=v(e),n=d((()=>p(l.value.link))),r=d((()=>m(l.value.link)||h(l.value.link))),o=d((()=>{if(!r.value)return l.value.target?l.value.target:n.value?"_blank":void 0})),s=d((()=>"_blank"===o.value)),i=d((()=>!n.value&&!r.value&&!s.value)),u=d((()=>{if(!r.value)return l.value.rel?l.value.rel:s.value?"noopener noreferrer":void 0})),k=d((()=>l.value.ariaLabel||l.value.text)),g=d((()=>{const e=Object.keys(a.value.locales);return e.length?!e.some((e=>e===l.value.link)):"/"!==l.value.link})),f=d((()=>!!g.value&&t.path.startsWith(l.value.link)));return{isActive:d((()=>!!i.value&&(l.value.activeMatch?new RegExp(l.value.activeMatch).test(t.path):f.value))),isBlankTarget:s,isRouterLink:i,linkRel:u,linkTarget:o,linkAriaLabel:k}}});ee.render=function(e,t,a,l,n,r){const o=k("RouterLink"),s=k("OutboundLink");return e.isRouterLink?(g(),f(o,N({key:0,class:["nav-link",{"router-link-active":e.isActive}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:L((()=>[y(e.$slots,"before"),w(" "+x(e.item.text)+" ",1),y(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):(g(),f("a",N({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[y(e.$slots,"before"),w(" "+x(e.item.text)+" ",1),e.isBlankTarget?(g(),f(s,{key:0})):T("",!0),y(e.$slots,"after")],16,["href","rel","target","aria-label"]))};var te=u({name:"Home",components:{NavLink:ee},setup(){const e=C(),t=$(),a=d((()=>e.value.heroImage?M(e.value.heroImage):null)),l=d((()=>null===e.value.heroText?null:e.value.heroText||t.value.title||"Hello")),n=d((()=>e.value.heroAlt||l.value||"hero")),r=d((()=>null===e.value.tagline?null:e.value.tagline||t.value.description||"Welcome to your VuePress site")),o=d((()=>P(e.value.actions)?e.value.actions.map((({text:e,link:t,type:a="primary"})=>({text:e,link:t,type:a}))):[])),s=d((()=>P(e.value.features)?e.value.features:[])),i=d((()=>e.value.footer)),u=d((()=>e.value.footerHtml));return{heroImage:a,heroAlt:n,heroText:l,tagline:r,actions:o,features:s,footer:i,footerHtml:u}}});const ae={class:"hero"},le={key:1,id:"main-title"},ne={key:2,class:"description"},re={key:3,class:"actions"},oe={key:0,class:"features"},se={class:"theme-default-content custom"};te.render=function(e,t,a,l,n,r){const o=k("NavLink"),s=k("Content");return g(),f("main",{class:"home","aria-labelledby":e.heroText?"main-title":void 0},[S("header",ae,[e.heroImage?(g(),f("img",{key:0,src:e.heroImage,alt:e.heroAlt},null,8,["src","alt"])):T("",!0),e.heroText?(g(),f("h1",le,x(e.heroText),1)):T("",!0),e.tagline?(g(),f("p",ne,x(e.tagline),1)):T("",!0),e.actions.length?(g(),f("p",re,[(g(!0),f(A,null,O(e.actions,(e=>(g(),f(o,{key:e.text,class:["action-button",[e.type]],item:e},null,8,["class","item"])))),128))])):T("",!0)]),e.features.length?(g(),f("div",oe,[(g(!0),f(A,null,O(e.features,(e=>(g(),f("div",{key:e.title,class:"feature"},[S("h2",null,x(e.title),1),S("p",null,x(e.details),1)])))),128))])):T("",!0),S("div",se,[S(s)]),e.footer?(g(),f(A,{key:1},[e.footerHtml?(g(),f("div",{key:0,class:"footer",innerHTML:e.footer},null,8,["innerHTML"])):(g(),f("div",{key:1,class:"footer",textContent:x(e.footer)},null,8,["textContent"]))],64)):T("",!0)],8,["aria-labelledby"])};const ie=e=>!p(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,ue={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ce=()=>{const e=I(),t=H(),a=C();return d((()=>{var l,n;if(!(null==(n=null!=(l=a.value.editLink)?l:e.value.editLink)||n))return null;const{repo:r,docsRepo:o=r,docsBranch:s="main",docsDir:i="",editLinkText:u}=e.value;if(!o)return null;const c=(({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:l,editLinkPattern:n})=>{const r=ie(e);let o;return n?o=n:null!==r&&(o=ue[r]),o?o.replace(/:repo/,p(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,B(`${R(a)}/${l}`)):null})({docsRepo:o,docsBranch:s,docsDir:i,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=u?u:"Edit this page",link:c}:null}))};var ve=u({name:"PageMeta",components:{NavLink:ee},setup:()=>({themeLocale:I(),editNavLink:ce(),lastUpdated:(()=>{const e=$(),t=I(),a=H(),l=C();return d((()=>{var n,r,o,s;return(null==(r=null!=(n=l.value.lastUpdated)?n:t.value.lastUpdated)||r)&&(null==(o=a.value.git)?void 0:o.updatedTime)?new Date(null==(s=a.value.git)?void 0:s.updatedTime).toLocaleString(e.value.lang):null}))})(),contributors:(()=>{const e=I(),t=H(),a=C();return d((()=>{var l,n,r,o;return null!=(n=null!=(l=a.value.contributors)?l:e.value.contributors)&&!n||null==(o=null==(r=t.value.git)?void 0:r.contributors)?null:o}))})()})});const de={class:"page-meta"},pe={key:0,class:"meta-item edit-link"},me={key:1,class:"meta-item last-updated"},he={class:"meta-item-label"},be={class:"meta-item-info"},ke={key:2,class:"meta-item contributors"},ge={class:"meta-item-label"},fe={class:"meta-item-info"},Le=w(", ");ve.render=function(e,t,a,l,n,r){const o=k("NavLink");return g(),f("footer",de,[e.editNavLink?(g(),f("div",pe,[S(o,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])])):T("",!0),e.lastUpdated?(g(),f("div",me,[S("span",he,x(e.themeLocale.lastUpdatedText)+": ",1),S("span",be,x(e.lastUpdated),1)])):T("",!0),e.contributors&&e.contributors.length?(g(),f("div",ke,[S("span",ge,x(e.themeLocale.contributorsText)+": ",1),S("span",fe,[(g(!0),f(A,null,O(e.contributors,((t,a)=>(g(),f(A,{key:a},[S("span",{class:"contributor",title:`email: ${t.email}`},x(t.name),9,["title"]),a!==e.contributors.length-1?(g(),f(A,{key:0},[Le],64)):T("",!0)],64)))),128))])])):T("",!0)])};const ye=e=>!1===e?null:E(e)?j(e):!!D(e)&&e,we=(e,t,a)=>{const l=e.findIndex((e=>e.link===t));if(-1!==l){const t=e[l+a];return(null==t?void 0:t.link)?t:null}for(const n of e)if(n.children){const e=we(n.children,t,a);if(e)return e}return null};var xe=u({name:"PageNav",components:{NavLink:ee},setup(){const e=C(),t=z(),a=c();return{prevNavLink:d((()=>{const l=ye(e.value.prev);return!1!==l?l:we(t.value,a.path,-1)})),nextNavLink:d((()=>{const l=ye(e.value.next);return!1!==l?l:we(t.value,a.path,1)}))}}});const Ne={key:0,class:"page-nav"},Te={class:"inner"},Ce={key:0,class:"prev"},$e=w(" ← "),Me={key:1,class:"next"},Pe=w(" → ");xe.render=function(e,t,a,l,n,r){const o=k("NavLink");return e.prevNavLink||e.nextNavLink?(g(),f("nav",Ne,[S("p",Te,[e.prevNavLink?(g(),f("span",Ce,[$e,S(o,{item:e.prevNavLink},null,8,["item"])])):T("",!0),e.nextNavLink?(g(),f("span",Me,[S(o,{item:e.nextNavLink},null,8,["item"]),Pe])):T("",!0)])])):T("",!0)};const Se=u({name:"Page",components:{PageMeta:ve,PageNav:xe}}),Ae={class:"page"},Oe={class:"theme-default-content"};Se.render=function(e,t,a,l,n,r){const o=k("Content"),s=k("PageMeta"),i=k("PageNav");return g(),f("main",Ae,[y(e.$slots,"top"),S("div",Oe,[S(o)]),S(s),S(i),y(e.$slots,"bottom")])};var Be=u({name:"DropdownLink",components:{NavLink:ee},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=v(e),a=d((()=>t.value.ariaLabel||t.value.text)),l=_(!1),n=c();F((()=>n.path),(()=>{l.value=!1}));return{open:l,dropdownAriaLabel:a,handleDropdown:e=>{const t=0===e.detail;l.value=!!t&&!l.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});const Re={class:"title"},Ie=S("span",{class:"arrow down"},null,-1),He={class:"title"},ze={class:"nav-dropdown"},Ee={class:"dropdown-subtitle"},je={key:1},De={class:"dropdown-subitem-wrapper"};Be.render=function(e,t,a,l,n,r){const o=k("NavLink");return g(),f("div",{class:["dropdown-wrapper",{open:e.open}]},[S("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[S("span",Re,x(e.item.text),1),Ie],8,["aria-label"]),S("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[2]||(t[2]=t=>e.open=!e.open)},[S("span",He,x(e.item.text),1),S("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),G(S("ul",ze,[(g(!0),f(A,null,O(e.item.children,((t,a)=>(g(),f("li",{key:t.link||a,class:"dropdown-item"},[t.children?(g(),f(A,{key:0},[S("h4",Ee,[t.link?(g(),f(o,{key:0,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):(g(),f("span",je,x(t.text),1))]),S("ul",De,[(g(!0),f(A,null,O(t.children,(a=>(g(),f("li",{key:a.link,class:"dropdown-subitem"},[S(o,{item:a,onFocusout:l=>e.isLastItemOfArray(a,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):(g(),f(o,{key:1,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[U,e.open]])],2)};const _e=e=>E(e)?j(e):e.children?i(s({},e),{children:e.children.map(_e)}):e;var Fe=u({name:"NavbarLinks",components:{NavLink:ee,DropdownLink:Be},setup(){const e=(()=>{const e=I();return d((()=>(e.value.navbar||[]).map(_e)))})(),t=(()=>{const e=W(),t=q(),a=$(),l=I();return d((()=>{var n,r;const o=Object.keys(a.value.locales);if(o.length<2)return[];const s=e.currentRoute.value.path,i=e.currentRoute.value.fullPath;return[{text:null!=(n=l.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(r=l.value.selectLanguageAriaLabel)?r:"unkown language",children:o.map((n=>{var r,o,u,c,v,d;const p=null!=(o=null==(r=a.value.locales)?void 0:r[n])?o:{},m=null!=(c=null==(u=l.value.locales)?void 0:u[n])?c:{},h=`${p.lang}`,b=null!=(v=m.selectLanguageName)?v:h;let k;if(h===a.value.lang)k=i;else{const a=s.replace(t.value,n);k=e.getRoutes().some((e=>e.path===a))?a:null!=(d=m.home)?d:n}return{text:b,link:k}}))}]}))})(),a=(()=>{const e=I(),t=d((()=>e.value.repo)),a=d((()=>t.value?ie(t.value):null)),l=d((()=>t.value&&!p(t.value)?`https://github.com/${t.value}`:t.value)),n=d((()=>l.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return d((()=>l.value&&n.value?[{text:n.value,link:l.value}]:[]))})();return{navbarLinks:d((()=>[...e.value,...t.value,...a.value]))}}});const Ge={key:0,class:"navbar-links"};Fe.render=function(e,t,a,l,n,r){const o=k("DropdownLink"),s=k("NavLink");return e.navbarLinks.length?(g(),f("nav",Ge,[(g(!0),f(A,null,O(e.navbarLinks,(e=>(g(),f("div",{key:e.text,class:"navbar-links-item"},[e.children?(g(),f(o,{key:0,item:e},null,8,["item"])):(g(),f(s,{key:1,item:e},null,8,["item"]))])))),128))])):T("",!0)};const Ue={class:"icon",focusable:"false",viewBox:"0 0 32 32"},We=S("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"},null,-1),qe=S("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"},null,-1),Ve=S("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"},null,-1),Xe=S("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),Ye=S("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"},null,-1),Je=S("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"},null,-1),Ke=S("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"},null,-1),Qe=S("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),Ze=S("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"},null,-1),et={class:"icon",focusable:"false",viewBox:"0 0 32 32"},tt=S("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1);var at=u({setup(e){const t=V(),a=()=>{t.value=!t.value};return(e,l)=>(g(),f("button",{class:"toggle-dark-button",onClick:a},[G((g(),f("svg",Ue,[We,qe,Ve,Xe,Ye,Je,Ke,Qe,Ze],512)),[[U,!X(t)]]),G((g(),f("svg",et,[tt],512)),[[U,X(t)]])]))}}),lt=u({name:"ToggleSidebarButton",emits:["toggle"]});const nt=S("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[S("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"})],-1);lt.render=function(e,t,a,l,n,r){return g(),f("div",{class:"toggle-sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[nt])};var rt=u({emits:["toggle-sidebar"],setup(e){const t=q(),a=$(),l=I(),n=_(null),r=_(null),o=d((()=>l.value.home||t.value)),s=d((()=>l.value.logo)),i=d((()=>a.value.title)),u=_(0),c=d((()=>u.value?{maxWidth:u.value+"px"}:{})),v=d((()=>l.value.darkMode));function p(e,t){var a,l,n;const r=null==(n=null==(l=null==(a=null==e?void 0:e.ownerDocument)?void 0:a.defaultView)?void 0:l.getComputedStyle(e,null))?void 0:n[t],o=Number.parseInt(r,10);return Number.isNaN(o)?0:o}return Y((()=>{const e=p(n.value,"paddingLeft")+p(n.value,"paddingRight"),t=()=>{var t;window.innerWidth<=719?u.value=0:u.value=n.value.offsetWidth-e-((null==(t=r.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1),window.addEventListener("orientationchange",t,!1)})),(e,t)=>{const a=k("RouterLink"),l=k("NavbarSearch");return g(),f("header",{ref:n,class:"navbar"},[S(lt,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle-sidebar"))}),S("span",{ref:r},[S(a,{to:X(o)},{default:L((()=>[X(s)?(g(),f("img",{key:0,class:"logo",src:X(M)(X(s)),alt:X(i)},null,8,["src","alt"])):T("",!0),X(i)?(g(),f("span",{key:1,class:["site-name",{"can-hide":X(s)}]},x(X(i)),3)):T("",!0)])),_:1},8,["to"])],512),S("div",{class:"navbar-links-wrapper",style:X(c)},[y(e.$slots,"before"),S(Fe,{class:"can-hide"}),y(e.$slots,"after"),X(v)?(g(),f(at,{key:0})):T("",!0),S(l)],4)],512)}}});const ot=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),st=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||ot(e.path)===ot(t)))(e,t.link)||!!t.children&&t.children.some((t=>st(e,t))),it=(e,t)=>e.link?J(ee,i(s({},t),{item:e})):J("p",t,e.text),ut=(e,t)=>{var a;return(null===(a=e.children)||void 0===a?void 0:a.length)?J("ul",{class:{"sidebar-sub-items":t>0}},e.children.map((e=>J("li",J(ct,{item:e,depth:t+1}))))):null},ct=({item:e,depth:t=0})=>{const a=c(),l=st(a,e);return[it(e,{class:{"sidebar-heading":0===t,"sidebar-item":!0,active:l}}),ut(e,t)]};ct.displayName="SidebarChild",ct.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};var vt=u({name:"Sidebar",components:{NavbarLinks:Fe,SidebarChild:ct},setup:()=>({sidebarItems:z()})});const dt={class:"sidebar"},pt={class:"sidebar-links"};vt.render=function(e,t,a,l,n,r){const o=k("NavbarLinks"),s=k("SidebarChild");return g(),f("aside",dt,[S(o),y(e.$slots,"top"),S("ul",pt,[(g(!0),f(A,null,O(e.sidebarItems,(e=>(g(),f(s,{key:e.link||e.text,item:e},null,8,["item"])))),128))]),y(e.$slots,"bottom")])};var mt=u({name:"Layout",components:{Home:te,Page:Se,Navbar:rt,Sidebar:vt,Transition:K},setup(){const e=H(),t=C(),a=I(),l=d((()=>!1!==t.value.navbar&&!1!==a.value.navbar)),n=z(),r=_(!1),o=e=>{r.value="boolean"==typeof e?e:!r.value},s={x:0,y:0},i=d((()=>[{"no-navbar":!l.value,"no-sidebar":!n.value.length,"sidebar-open":r.value},t.value.pageClass]));let u;Y((()=>{const e=W();u=e.afterEach((()=>{o(!1)}))})),Q((()=>{u()}));const c=Z(),v=c.resolve,p=c.pending;return{frontmatter:t,page:e,containerClass:i,shouldShowNavbar:l,toggleSidebar:o,onTouchStart:e=>{s.x=e.changedTouches[0].clientX,s.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-s.x,a=e.changedTouches[0].clientY-s.y;Math.abs(t)>Math.abs(a)&&Math.abs(t)>40&&(t>0&&s.x<=80?o(!0):o(!1))},onBeforeEnter:v,onBeforeLeave:p}}});mt.render=function(e,t,a,l,n,r){const o=k("Navbar"),s=k("Sidebar"),i=k("Home"),u=k("Page");return g(),f("div",{class:["theme-container",e.containerClass],onTouchstart:t[2]||(t[2]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchend:t[3]||(t[3]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t))},[e.shouldShowNavbar?(g(),f(o,{key:0,onToggleSidebar:e.toggleSidebar},{before:L((()=>[y(e.$slots,"navbar-before")])),after:L((()=>[y(e.$slots,"navbar-after")])),_:1},8,["onToggleSidebar"])):T("",!0),S("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=t=>e.toggleSidebar(!1))}),S(s,null,{top:L((()=>[y(e.$slots,"sidebar-top")])),bottom:L((()=>[y(e.$slots,"sidebar-bottom")])),_:1}),e.frontmatter.home?(g(),f(i,{key:1})):(g(),f(K,{key:2,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e.onBeforeEnter,onBeforeLeave:e.onBeforeLeave},{default:L((()=>[S(u,{key:e.page.path},{top:L((()=>[y(e.$slots,"page-top")])),bottom:L((()=>[y(e.$slots,"page-bottom")])),_:1})])),_:1},8,["onBeforeEnter","onBeforeLeave"]))],34)};export default mt;
