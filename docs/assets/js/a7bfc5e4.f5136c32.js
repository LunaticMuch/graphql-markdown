"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5727],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8327:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"page-info",title:"PageInfo"},c=void 0,p={unversionedId:"schema/objects/page-info",id:"schema/objects/page-info",isDocsHomePage:!1,title:"PageInfo",description:"No description",source:"@site/docs/schema/objects/page-info.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/page-info",permalink:"/graphql-markdown/schema/objects/page-info",tags:[],version:"current",frontMatter:{id:"page-info",title:"PageInfo"},sidebar:"basic",previous:{title:"NotificationOption",permalink:"/graphql-markdown/schema/objects/notification-option"},next:{title:"Page",permalink:"/graphql-markdown/schema/objects/page"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>total</code> (Int)",id:"total-int",children:[],level:4},{value:"<code>perPage</code> (Int)",id:"perpage-int",children:[],level:4},{value:"<code>currentPage</code> (Int)",id:"currentpage-int",children:[],level:4},{value:"<code>lastPage</code> (Int)",id:"lastpage-int",children:[],level:4},{value:"<code>hasNextPage</code> (Boolean)",id:"hasnextpage-boolean",children:[],level:4}],level:3}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageInfo {\n  total: Int\n  perPage: Int\n  currentPage: Int\n  lastPage: Int\n  hasNextPage: Boolean\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"total-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"total")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The total number of items"),(0,o.kt)("h4",{id:"perpage-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"perPage")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The count on a page"),(0,o.kt)("h4",{id:"currentpage-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"currentPage")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The current page"),(0,o.kt)("h4",{id:"lastpage-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"lastPage")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The last page"),(0,o.kt)("h4",{id:"hasnextpage-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"hasNextPage")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If there is another page"))}d.isMDXComponent=!0}}]);