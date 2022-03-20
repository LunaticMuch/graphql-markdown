"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[228],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(h,o(o({ref:t},s),{},{components:n})):i.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7719:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"airing-schedule",title:"AiringSchedule"},d=void 0,l={unversionedId:"schema/objects/airing-schedule",id:"schema/objects/airing-schedule",title:"AiringSchedule",description:"Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.",source:"@site/docs/schema/objects/airing-schedule.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/airing-schedule",permalink:"/graphql-markdown/schema/objects/airing-schedule",tags:[],version:"current",frontMatter:{id:"airing-schedule",title:"AiringSchedule"},sidebar:"basic",previous:{title:"AiringScheduleEdge",permalink:"/graphql-markdown/schema/objects/airing-schedule-edge"},next:{title:"AniChartUser",permalink:"/graphql-markdown/schema/objects/ani-chart-user"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>airingAt</code> (<code>Int</code>)",id:"airingat-int",level:4},{value:"<code>timeUntilAiring</code> (<code>Int</code>)",id:"timeuntilairing-int",level:4},{value:"<code>episode</code> (<code>Int</code>)",id:"episode-int",level:4},{value:"<code>mediaId</code> (<code>Int</code>)",id:"mediaid-int",level:4},{value:"<code>media</code> (<code>Media</code>)",id:"media-media",level:4}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AiringSchedule {\n  id: Int!\n  airingAt: Int!\n  timeUntilAiring: Int!\n  episode: Int!\n  mediaId: Int!\n  media: Media\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The id of the airing schedule item"),(0,a.kt)("h4",{id:"airingat-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"airingAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The time the episode airs at"),(0,a.kt)("h4",{id:"timeuntilairing-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"timeUntilAiring")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"Seconds until episode starts airing"),(0,a.kt)("h4",{id:"episode-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"episode")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The airing episode number"),(0,a.kt)("h4",{id:"mediaid-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The associate media id of the airing episode"),(0,a.kt)("h4",{id:"media-media"},(0,a.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,a.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,a.kt)("p",null,"The associate media of the airing episode"))}m.isMDXComponent=!0}}]);