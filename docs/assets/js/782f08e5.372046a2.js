"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[9498],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return f}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(i),f=a,h=p["".concat(l,".").concat(f)]||p[f]||s[f]||r;return i?n.createElement(h,o(o({ref:t},u),{},{components:i})):n.createElement(h,o({ref:t},u))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4829:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var n=i(7462),a=i(3366),r=(i(7294),i(3905)),o=["components"],c={id:"activity-like-notification",title:"ActivityLikeNotification"},l=void 0,d={unversionedId:"schema/objects/activity-like-notification",id:"schema/objects/activity-like-notification",title:"ActivityLikeNotification",description:"Notification for when a activity is liked",source:"@site/docs/schema/objects/activity-like-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/activity-like-notification",permalink:"/graphql-markdown/schema/objects/activity-like-notification",tags:[],version:"current",frontMatter:{id:"activity-like-notification",title:"ActivityLikeNotification"},sidebar:"basic",previous:{title:"UpdateUser",permalink:"/graphql-markdown/schema/mutations/update-user"},next:{title:"ActivityMentionNotification",permalink:"/graphql-markdown/schema/objects/activity-mention-notification"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>userId</code> (Int)",id:"userid-int",children:[],level:4},{value:"<code>type</code> (NotificationType)",id:"type-notificationtype",children:[],level:4},{value:"<code>activityId</code> (Int)",id:"activityid-int",children:[],level:4},{value:"<code>context</code> (String)",id:"context-string",children:[],level:4},{value:"<code>createdAt</code> (Int)",id:"createdat-int",children:[],level:4},{value:"<code>activity</code> (ActivityUnion)",id:"activity-activityunion",children:[],level:4},{value:"<code>user</code> (User)",id:"user-user",children:[],level:4}],level:3}],s={toc:u};function p(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Notification for when a activity is liked"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityLikeNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  activity: ActivityUnion\n  user: User\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the Notification"),(0,r.kt)("h4",{id:"userid-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the user who liked to the activity"),(0,r.kt)("h4",{id:"type-notificationtype"},(0,r.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,r.kt)("p",null,"The type of notification"),(0,r.kt)("h4",{id:"activityid-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"activityId")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the activity which was liked"),(0,r.kt)("h4",{id:"context-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"context")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The notification context text"),(0,r.kt)("h4",{id:"createdat-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The time the notification was created at"),(0,r.kt)("h4",{id:"activity-activityunion"},(0,r.kt)("inlineCode",{parentName:"h4"},"activity")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/unions/activity-union"},(0,r.kt)("inlineCode",{parentName:"a"},"ActivityUnion")),")"),(0,r.kt)("p",null,"The liked activity"),(0,r.kt)("h4",{id:"user-user"},(0,r.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,r.kt)("p",null,"The user who liked the activity"))}p.isMDXComponent=!0}}]);