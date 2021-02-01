(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"Highlight",(function(){return l})),n.d(t,"default",(function(){return v}));var r=n(3),a=n(7),o=(n(0),n(95)),i={id:"events",title:"Events"},c={unversionedId:"events",id:"events",isDocsHomePage:!1,title:"Events",description:"<span",source:"@site/docs/events.md",slug:"/events",permalink:"/action-test/events",version:"current",sidebar:"someSidebar",previous:{title:"Webhooks",permalink:"/action-test/webhooks"},next:{title:"Disputes",permalink:"/action-test/disputes"}},s=[{value:"Retrieve event types",id:"retrieve-event-types",children:[]},{value:"Retrieve events",id:"retrieve-events",children:[]},{value:"Retrieve event",id:"retrieve-event",children:[]},{value:"Retrieve event notification",id:"retrieve-event-notification",children:[]},{value:"Retry webhook",id:"retry-webhook",children:[]},{value:"Retry all webhooks",id:"retry-all-webhooks",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{color:n,padding:"0.2rem"}},t)},u={toc:s,Highlight:l};function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can find a list of request body parameters and possible outcomes ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-reference.checkout.com/#tag/Events"}),"here"),"."),Object(o.b)("h2",{id:"retrieve-event-types"},"Retrieve event types"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const events = await cko.events.retrieveEventTypes();\n")),Object(o.b)("h2",{id:"retrieve-events"},"Retrieve events"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const events = await cko.events.retrieveEvents({\n    from: '2019-03-01T00:00:00Z'\n});\n")),Object(o.b)("h2",{id:"retrieve-event"},"Retrieve event"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const event = await cko.events.retrieveEvent('evt_c2qelfixai2u3es3ksovngkx3e');\n")),Object(o.b)("h2",{id:"retrieve-event-notification"},"Retrieve event notification"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const notification = await cko.events.retrieveEventNotification({\n    eventId: 'evt_c2qelfixai2u3es3ksovngkx3e',\n    notificationId: 'ntf_wqjkqpgjy33uxoywcej4fnw6qm'\n});\n")),Object(o.b)("h2",{id:"retry-webhook"},"Retry webhook"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const retry = await cko.events.retry({\n    eventId: 'evt_c2qelfixai2u3es3ksovngkx3e',\n    webhookId: 'wh_mpkyioafmajulnhjvwmrklenb4'\n});\n")),Object(o.b)("h2",{id:"retry-all-webhooks"},"Retry all webhooks"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const retryAll = await cko.events.retryAll('evt_c2qelfixai2u3es3ksovngkx3e');\n")))}v.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},v=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),v=u(n),b=r,d=v["".concat(i,".").concat(b)]||v[b]||p[b]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);