"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7111],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return _}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),_=a,h=p["".concat(c,".").concat(_)]||p[_]||s[_]||d;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,i=new Array(d);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<d;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6532:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),d=(n(7294),n(3905)),i=["components"],o={id:"thread-sort",title:"ThreadSort"},c=void 0,l={unversionedId:"schema/enums/thread-sort",id:"schema/enums/thread-sort",title:"ThreadSort",description:"Thread sort enums",source:"@site/docs/schema/enums/thread-sort.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/thread-sort",permalink:"/graphql-markdown/schema/enums/thread-sort",tags:[],version:"current",frontMatter:{id:"thread-sort",title:"ThreadSort"},sidebar:"basic",previous:{title:"ThreadCommentSort",permalink:"/graphql-markdown/schema/enums/thread-comment-sort"},next:{title:"UserSort",permalink:"/graphql-markdown/schema/enums/user-sort"}},u=[{value:"Values",id:"values",children:[{value:"<code>ID</code>",id:"id",children:[],level:4},{value:"<code>ID_DESC</code>",id:"id_desc",children:[],level:4},{value:"<code>TITLE</code>",id:"title",children:[],level:4},{value:"<code>TITLE_DESC</code>",id:"title_desc",children:[],level:4},{value:"<code>CREATED_AT</code>",id:"created_at",children:[],level:4},{value:"<code>CREATED_AT_DESC</code>",id:"created_at_desc",children:[],level:4},{value:"<code>UPDATED_AT</code>",id:"updated_at",children:[],level:4},{value:"<code>UPDATED_AT_DESC</code>",id:"updated_at_desc",children:[],level:4},{value:"<code>REPLIED_AT</code>",id:"replied_at",children:[],level:4},{value:"<code>REPLIED_AT_DESC</code>",id:"replied_at_desc",children:[],level:4},{value:"<code>REPLY_COUNT</code>",id:"reply_count",children:[],level:4},{value:"<code>REPLY_COUNT_DESC</code>",id:"reply_count_desc",children:[],level:4},{value:"<code>VIEW_COUNT</code>",id:"view_count",children:[],level:4},{value:"<code>VIEW_COUNT_DESC</code>",id:"view_count_desc",children:[],level:4},{value:"<code>IS_STICKY</code>",id:"is_sticky",children:[],level:4},{value:"<code>SEARCH_MATCH</code>",id:"search_match",children:[],level:4}],level:3}],s={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,d.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Thread sort enums"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ThreadSort {\n  ID\n  ID_DESC\n  TITLE\n  TITLE_DESC\n  CREATED_AT\n  CREATED_AT_DESC\n  UPDATED_AT\n  UPDATED_AT_DESC\n  REPLIED_AT\n  REPLIED_AT_DESC\n  REPLY_COUNT\n  REPLY_COUNT_DESC\n  VIEW_COUNT\n  VIEW_COUNT_DESC\n  IS_STICKY\n  SEARCH_MATCH\n}\n")),(0,d.kt)("h3",{id:"values"},"Values"),(0,d.kt)("h4",{id:"id"},(0,d.kt)("inlineCode",{parentName:"h4"},"ID")),(0,d.kt)("h4",{id:"id_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"ID_DESC")),(0,d.kt)("h4",{id:"title"},(0,d.kt)("inlineCode",{parentName:"h4"},"TITLE")),(0,d.kt)("h4",{id:"title_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"TITLE_DESC")),(0,d.kt)("h4",{id:"created_at"},(0,d.kt)("inlineCode",{parentName:"h4"},"CREATED_AT")),(0,d.kt)("h4",{id:"created_at_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"CREATED_AT_DESC")),(0,d.kt)("h4",{id:"updated_at"},(0,d.kt)("inlineCode",{parentName:"h4"},"UPDATED_AT")),(0,d.kt)("h4",{id:"updated_at_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"UPDATED_AT_DESC")),(0,d.kt)("h4",{id:"replied_at"},(0,d.kt)("inlineCode",{parentName:"h4"},"REPLIED_AT")),(0,d.kt)("h4",{id:"replied_at_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"REPLIED_AT_DESC")),(0,d.kt)("h4",{id:"reply_count"},(0,d.kt)("inlineCode",{parentName:"h4"},"REPLY_COUNT")),(0,d.kt)("h4",{id:"reply_count_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"REPLY_COUNT_DESC")),(0,d.kt)("h4",{id:"view_count"},(0,d.kt)("inlineCode",{parentName:"h4"},"VIEW_COUNT")),(0,d.kt)("h4",{id:"view_count_desc"},(0,d.kt)("inlineCode",{parentName:"h4"},"VIEW_COUNT_DESC")),(0,d.kt)("h4",{id:"is_sticky"},(0,d.kt)("inlineCode",{parentName:"h4"},"IS_STICKY")),(0,d.kt)("h4",{id:"search_match"},(0,d.kt)("inlineCode",{parentName:"h4"},"SEARCH_MATCH")))}p.isMDXComponent=!0}}]);