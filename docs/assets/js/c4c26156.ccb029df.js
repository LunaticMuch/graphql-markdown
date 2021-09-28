"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[471],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=m(a),f=r,p=h["".concat(c,".").concat(f)]||h[f]||l[f]||i;return a?n.createElement(p,o(o({ref:t},d),{},{components:a})):n.createElement(p,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4246:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"media-submission-edge",title:"MediaSubmissionEdge"},c=void 0,m={unversionedId:"schema/objects/media-submission-edge",id:"schema/objects/media-submission-edge",isDocsHomePage:!1,title:"MediaSubmissionEdge",description:"No description",source:"@site/docs/schema/objects/media-submission-edge.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-submission-edge",permalink:"/graphql-markdown/schema/objects/media-submission-edge",tags:[],version:"current",frontMatter:{id:"media-submission-edge",title:"MediaSubmissionEdge"},sidebar:"schemaSidebar",previous:{title:"MediaSubmissionComparison",permalink:"/graphql-markdown/schema/objects/media-submission-comparison"},next:{title:"MediaSubmission",permalink:"/graphql-markdown/schema/objects/media-submission"}},d=[{value:"Fields",id:"fields",children:[]}],l={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaSubmissionEdge {\n  id: Int\n  characterRole: CharacterRole\n  staffRole: String\n  roleNotes: String\n  dubGroup: String\n  characterName: String\n  isMain: Boolean\n  character: Character\n  characterSubmission: Character\n  voiceActor: Staff\n  voiceActorSubmission: Staff\n  staff: Staff\n  staffSubmission: Staff\n  studio: Studio\n  media: Media\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The id of the direct submission"),(0,i.kt)("h4",{id:"characterrole-characterrole"},(0,i.kt)("inlineCode",{parentName:"h4"},"characterRole")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/character-role"},(0,i.kt)("inlineCode",{parentName:"a"},"CharacterRole")),")"),(0,i.kt)("h4",{id:"staffrole-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"staffRole")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"rolenotes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"roleNotes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"dubgroup-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"dubGroup")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"charactername-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"characterName")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"ismain-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isMain")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"character-character"},(0,i.kt)("inlineCode",{parentName:"h4"},"character")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,i.kt)("inlineCode",{parentName:"a"},"Character")),")"),(0,i.kt)("h4",{id:"charactersubmission-character"},(0,i.kt)("inlineCode",{parentName:"h4"},"characterSubmission")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/character"},(0,i.kt)("inlineCode",{parentName:"a"},"Character")),")"),(0,i.kt)("h4",{id:"voiceactor-staff"},(0,i.kt)("inlineCode",{parentName:"h4"},"voiceActor")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,i.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,i.kt)("h4",{id:"voiceactorsubmission-staff"},(0,i.kt)("inlineCode",{parentName:"h4"},"voiceActorSubmission")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,i.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,i.kt)("h4",{id:"staff-staff"},(0,i.kt)("inlineCode",{parentName:"h4"},"staff")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,i.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,i.kt)("h4",{id:"staffsubmission-staff"},(0,i.kt)("inlineCode",{parentName:"h4"},"staffSubmission")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,i.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,i.kt)("h4",{id:"studio-studio"},(0,i.kt)("inlineCode",{parentName:"h4"},"studio")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/studio"},(0,i.kt)("inlineCode",{parentName:"a"},"Studio")),")"),(0,i.kt)("h4",{id:"media-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"))}h.isMDXComponent=!0}}]);