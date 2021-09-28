"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4573],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return y}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),m=s(n),y=i,f=m["".concat(u,".").concat(y)]||m[y]||p[y]||o;return n?r.createElement(f,a(a({ref:e},l),{},{components:n})):r.createElement(f,a({ref:e},l))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6969:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"toggle-activity-subscription",title:"ToggleActivitySubscription"},u=void 0,s={unversionedId:"schema/mutations/toggle-activity-subscription",id:"schema/mutations/toggle-activity-subscription",isDocsHomePage:!1,title:"ToggleActivitySubscription",description:"Toggle the subscription of an activity item",source:"@site/docs/schema/mutations/toggle-activity-subscription.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/toggle-activity-subscription",permalink:"/graphql-markdown/schema/mutations/toggle-activity-subscription",tags:[],version:"current",frontMatter:{id:"toggle-activity-subscription",title:"ToggleActivitySubscription"},sidebar:"schemaSidebar",previous:{title:"SaveThread",permalink:"/graphql-markdown/schema/mutations/save-thread"},next:{title:"ToggleFavourite",permalink:"/graphql-markdown/schema/mutations/toggle-favourite"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p={toc:l};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Toggle the subscription of an activity item"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"ToggleActivitySubscription(\n  activityId: Int\n  subscribe: Boolean\n): ActivityUnion\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"activityid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"activityId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the activity to un/subscribe"),(0,o.kt)("h4",{id:"subscribe-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"subscribe")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"Whether to subscribe or unsubscribe from the activity"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"activityunion"},(0,o.kt)("a",{parentName:"h4",href:"/schema/unions/activity-union"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivityUnion"))),(0,o.kt)("p",null,"Activity union type"))}m.isMDXComponent=!0}}]);