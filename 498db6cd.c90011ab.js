(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"Highlight",(function(){return d})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(7),c=(n(0),n(95)),a={id:"disputes",title:"Disputes"},s={unversionedId:"disputes",id:"disputes",isDocsHomePage:!1,title:"Disputes",description:"<span",source:"@site/docs/disputes.md",slug:"/disputes",permalink:"/ioan-ghisoi-cko/action-test/disputes",version:"current",sidebar:"someSidebar",previous:{title:"Events",permalink:"/ioan-ghisoi-cko/action-test/events"},next:{title:"Files",permalink:"/ioan-ghisoi-cko/action-test/files"}},o=[{value:"Get disputes",id:"get-disputes",children:[]},{value:"Get dispute details",id:"get-dispute-details",children:[]},{value:"Accept dispute",id:"accept-dispute",children:[]},{value:"Provide dispute evidence",id:"provide-dispute-evidence",children:[]},{value:"Get dispute evidence",id:"get-dispute-evidence",children:[]},{value:"Submit dispute evidence",id:"submit-dispute-evidence",children:[]}],d=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{color:n,padding:"0.2rem"}},t)},p={toc:o,Highlight:d};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"You can find a list of request body parameters and possible outcomes ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://api-reference.checkout.com/#tag/Disputes"}),"here"),"."),Object(c.b)("h2",{id:"get-disputes"},"Get disputes"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const disputes = await cko.disputes.get({\n    limit: 5,\n    id: 'dsp_bc94ebda8d275i461229'\n});\n")),Object(c.b)("h2",{id:"get-dispute-details"},"Get dispute details"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const disputeDetails = await cko.disputes.getDetails('dsp_bc94ebda8d275i461229');\n")),Object(c.b)("h2",{id:"accept-dispute"},"Accept dispute"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const accept = await cko.disputes.accept('dsp_bc94ebda8d275i461229');\n")),Object(c.b)("h2",{id:"provide-dispute-evidence"},"Provide dispute evidence"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const evidence = await cko.disputes.provideEvidence('dsp_bc94ebda8d275i461229', {\n    proof_of_delivery_or_service_text: 'http://checkout.com/document.pdf'\n});\n")),Object(c.b)("h2",{id:"get-dispute-evidence"},"Get dispute evidence"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const getEvidence = await cko.disputes.getEvidence('dsp_bc94ebda8d275i461229');\n")),Object(c.b)("h2",{id:"submit-dispute-evidence"},"Submit dispute evidence"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const submitEvidence = await cko.disputes.submit('dsp_bc94ebda8d275i461229');\n")))}u.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),b=i,m=u["".concat(a,".").concat(b)]||u[b]||l[b]||c;return n?r.a.createElement(m,s(s({ref:t},d),{},{components:n})):r.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<c;d++)a[d]=n[d];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);