"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[5502],{"./src/components/PanelContainer/PanelContainer.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},default:function(){return PanelContainer_story}});var react=__webpack_require__("../../node_modules/react/index.js"),emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var PanelContainer=function(_param){var children=_param.children,className=_param.className,props=_object_without_properties(_param,["children","className"]),styles=(0,ThemeContext.of)(getStyles);return react.createElement("div",function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({className:(0,emotion_css_esm.cx)(styles,className)},props),children)},getStyles=function(theme){return(0,emotion_css_esm.AH)({backgroundColor:theme.components.panel.background,border:"1px solid ".concat(theme.components.panel.borderColor),borderRadius:theme.shape.radius.default})};try{PanelContainer.displayName="PanelContainer",PanelContainer.__docgenInfo={description:"",displayName:"PanelContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelContainer/PanelContainer.tsx#PanelContainer"]={docgenInfo:PanelContainer.__docgenInfo,name:"PanelContainer",path:"src/components/PanelContainer/PanelContainer.tsx#PanelContainer"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={h1:"h1",p:"p",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"MDX|PanelContainer",component:PanelContainer}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"panelcontainer",children:"PanelContainer"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The PanelContainer is used as a simple background for storing other components."})]})}var Basic=function(){return react.createElement(PanelContainer,null,react.createElement("h1",null,"Here could be your component"))},PanelContainer_story={title:"General/PanelContainer",component:PanelContainer,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"() => {\n  return <PanelContainer>\n      <h1>Here could be your component</h1>\n    </PanelContainer>;\n}",...Basic.parameters?.docs?.source}}}}}]);