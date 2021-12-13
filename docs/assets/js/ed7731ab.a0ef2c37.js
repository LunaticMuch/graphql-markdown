"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[2671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"toggle-like-v2",title:"ToggleLikeV2"},c=void 0,u={unversionedId:"schema/mutations/toggle-like-v2",id:"schema/mutations/toggle-like-v2",isDocsHomePage:!1,title:"ToggleLikeV2",description:"Add or remove a like from a likeable type.",source:"@site/docs/schema/mutations/toggle-like-v2.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/toggle-like-v2",permalink:"/graphql-markdown/schema/mutations/toggle-like-v2",tags:[],version:"current",frontMatter:{id:"toggle-like-v2",title:"ToggleLikeV2"},sidebar:"basic",previous:{title:"ToggleFollow",permalink:"/graphql-markdown/schema/mutations/toggle-follow"},next:{title:"ToggleLike",permalink:"/graphql-markdown/schema/mutations/toggle-like"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>type</code> (LikeableType)",id:"type-likeabletype",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"LikeableUnion",id:"likeableunion",children:[],level:4}],level:3}],m={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add or remove a like from a likeable type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"ToggleLikeV2(\n  id: Int\n  type: LikeableType\n): LikeableUnion\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the likeable type"),(0,o.kt)("h4",{id:"type-likeabletype"},(0,o.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/likeable-type"},(0,o.kt)("inlineCode",{parentName:"a"},"LikeableType")),")"),(0,o.kt)("p",null,"The type of model to be un/liked"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"likeableunion"},(0,o.kt)("a",{parentName:"h4",href:"/schema/unions/likeable-union"},(0,o.kt)("inlineCode",{parentName:"a"},"LikeableUnion"))),(0,o.kt)("p",null,"Likeable union type"))}s.isMDXComponent=!0}}]);