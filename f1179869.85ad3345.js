(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"Highlight",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(95)),o={id:"instruments",title:"Instruments"},c={unversionedId:"instruments",id:"instruments",isDocsHomePage:!1,title:"Instruments",description:"<span",source:"@site/docs/instruments.md",slug:"/instruments",permalink:"/action-test/instruments",version:"current",sidebar:"someSidebar",previous:{title:"Tokens",permalink:"/action-test/tokens"},next:{title:"Webhooks",permalink:"/action-test/webhooks"}},s=[{value:'Request a <Highlight color="#25c2a0">card instrument</Highlight>',id:"request-a-card-instrument",children:[]},{value:"Get an instrument",id:"get-an-instrument",children:[]},{value:"Update an instrument",id:"update-an-instrument",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{color:n,padding:"0.2rem"}},t)},p={toc:s,Highlight:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can find a list of request body parameters and possible outcomes ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-reference.checkout.com/#tag/Instruments"}),"here"),"."),Object(i.b)("p",null,"The SDK will infer the type of the instrument, if not provided."),Object(i.b)("h2",{id:"request-a-card-instrument"},"Request a ",Object(i.b)(u,{color:"#25c2a0",mdxType:"Highlight"},"card instrument")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const instrument = await cko.instruments.create({\n    token: 'tok_bzi43qc6jeee5mmnfo4gnsnera', // token obtainer form Checkout.Frames of the mobile SDKs\n});\n")),Object(i.b)("h2",{id:"get-an-instrument"},"Get an instrument"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const instrument = await cko.instruments.get('src_udfsqsgpjykutgs26fiejgizau');\n")),Object(i.b)("h2",{id:"update-an-instrument"},"Update an instrument"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const instrumentResponse = await cko.instruments.update('src_udfsqsgpjykutgs26fiejgizau', {\n    expiry_year: 2030,\n});\n")))}l.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,d=l["".concat(o,".").concat(b)]||l[b]||m[b]||i;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);