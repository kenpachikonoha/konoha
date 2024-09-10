"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[4166],{"./src/components/Button/ButtonGroup.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{e:function(){return ButtonGroup}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ButtonGroup=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_param,ref){var className=_param.className,children=_param.children,rest=_object_without_properties(_param,["className","children"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(getStyles);return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref:ref,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)("button-group",styles.wrapper,className)},rest),children)}));ButtonGroup.displayName="ButtonGroup";var getStyles=function(theme){return{wrapper:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({display:"flex","> .button-group:not(:first-child) > button, > button:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"> .button-group:not(:last-child) > button, > button:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0,borderRightWidth:0}})}};try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"src/components/Button/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/Stack/Stack.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return Stack}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layout/utils/responsiveness.tsx"),_utils_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Layout/utils/styles.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Stack=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(props,ref){var _props_gap=props.gap,gap=void 0===_props_gap?1:_props_gap,alignItems=props.alignItems,justifyContent=props.justifyContent,direction=props.direction,wrap=props.wrap,children=props.children,grow=props.grow,shrink=props.shrink,basis=props.basis,flex=props.flex,width=props.width,minWidth=props.minWidth,maxWidth=props.maxWidth,height=props.height,minHeight=props.minHeight,maxHeight=props.maxHeight,rest=_object_without_properties(props,["gap","alignItems","justifyContent","direction","wrap","children","grow","shrink","basis","flex","width","minWidth","maxWidth","height","minHeight","maxHeight"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(getStyles,gap,alignItems,justifyContent,direction,wrap,grow,shrink,basis,flex),sizeStyles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(_utils_styles__WEBPACK_IMPORTED_MODULE_3__.E,width,minWidth,maxWidth,height,minHeight,maxHeight);return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref:ref,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flex,sizeStyles)},rest),children)}));Stack.displayName="Stack";var getStyles=function(theme,gap,alignItems,justifyContent,direction,wrap,grow,shrink,basis,flex){return{flex:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)([{display:"flex"},(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,direction,(function(val){return{flexDirection:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,wrap,(function(val){return{flexWrap:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,alignItems,(function(val){return{alignItems:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,justifyContent,(function(val){return{justifyContent:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,gap,(function(val){return{gap:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,grow,(function(val){return{flexGrow:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,shrink,(function(val){return{flexShrink:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,basis,(function(val){return{flexBasis:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,flex,(function(val){return{flex:val}}))])}};try{Stack.displayName="Stack",Stack.__docgenInfo={description:"",displayName:"Stack",props:{gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<AlignItems>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<JustifyContent>"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ResponsiveProp<Direction>"}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"ResponsiveProp<Wrap>"}},grow:{defaultValue:null,description:"Sets the property `flex-grow`",name:"grow",required:!1,type:{name:"ResponsiveProp<number>"}},shrink:{defaultValue:null,description:"Sets the property `flex-shrink`",name:"shrink",required:!1,type:{name:"ResponsiveProp<number>"}},basis:{defaultValue:null,description:"Sets the property `flex-basis`",name:"basis",required:!1,type:{name:"ResponsiveProp<FlexBasis>"}},flex:{defaultValue:null,description:"Sets the property `flex`",name:"flex",required:!1,type:{name:"ResponsiveProp<Flex>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<MinWidth<number>>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<MaxWidth<number>>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<Width<number>>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<MinHeight<number>>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<MaxHeight<number>>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<Height<number>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Stack/Stack.tsx#Stack"]={docgenInfo:Stack.__docgenInfo,name:"Stack",path:"src/components/Layout/Stack/Stack.tsx#Stack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/utils/responsiveness.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function breakpointCSS(theme,prop,getCSS,key){var value=prop[key];if(null!=value)return function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},theme.breakpoints.up(key),getCSS(value))}function getResponsiveStyle(theme,prop,getCSS){return null==prop?null:"object"==typeof prop&&"xs"in prop?[breakpointCSS(theme,prop,getCSS,"xs"),breakpointCSS(theme,prop,getCSS,"sm"),breakpointCSS(theme,prop,getCSS,"md"),breakpointCSS(theme,prop,getCSS,"lg"),breakpointCSS(theme,prop,getCSS,"xl"),breakpointCSS(theme,prop,getCSS,"xxl")]:getCSS(prop)}__webpack_require__.d(__webpack_exports__,{Y:function(){return getResponsiveStyle}});try{getResponsiveStyle.displayName="getResponsiveStyle",getResponsiveStyle.__docgenInfo={description:"Function that converts a ResponsiveProp object into CSS",displayName:"getResponsiveStyle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"]={docgenInfo:getResponsiveStyle.__docgenInfo,name:"getResponsiveStyle",path:"src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/utils/styles.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return getSizeStyles}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_responsiveness__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Layout/utils/responsiveness.tsx"),getSizeStyles=function(theme,width,minWidth,maxWidth,height,minHeight,maxHeight){return(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)([(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,width,(function(val){return{width:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,minWidth,(function(val){return{minWidth:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,maxWidth,(function(val){return{maxWidth:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,height,(function(val){return{height:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,minHeight,(function(val){return{minHeight:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,maxHeight,(function(val){return{maxHeight:theme.spacing(val)}}))])}},"./src/utils/storybook/DashboardStoryCanvas.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{s:function(){return DashboardStoryCanvas}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),DashboardStoryCanvas=function(param){var children=param.children,theme=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.$j)(),style=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({width:"100%",height:"100%",padding:"32px",background:theme.colors.background.canvas,overflow:"auto"});return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:style},children)};DashboardStoryCanvas.displayName="DashboardStoryCanvas";try{DashboardStoryCanvas.displayName="DashboardStoryCanvas",DashboardStoryCanvas.__docgenInfo={description:"",displayName:"DashboardStoryCanvas",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"]={docgenInfo:DashboardStoryCanvas.__docgenInfo,name:"DashboardStoryCanvas",path:"src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ToolbarButton/ToolbarButton.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicWithIcon:function(){return BasicWithIcon},BasicWithText:function(){return BasicWithText},Examples:function(){return Examples},default:function(){return ToolbarButton_story}});var react=__webpack_require__("../../node_modules/react/index.js"),DashboardStoryCanvas=__webpack_require__("./src/utils/storybook/DashboardStoryCanvas.tsx"),ButtonGroup=__webpack_require__("./src/components/Button/ButtonGroup.tsx"),Stack=__webpack_require__("./src/components/Layout/Stack/Stack.tsx"),ToolbarButton=__webpack_require__("./src/components/ToolbarButton/ToolbarButton.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"toolbarbutton",children:"ToolbarButton"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Multiple buttons that form a toolbar. Each button can contain an icon, image and text.\nThere are three variants of the ",(0,jsx_runtime.jsx)(_components.code,{children:"ToolbarButton"}),": default, primary and destructive."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["This example shows how to use several buttons in a ",(0,jsx_runtime.jsx)(_components.code,{children:"ToolbarButtonRow"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<ToolbarButtonRow>\n  <ToolbarButton variant="default" iconOnly={false} isOpen={false}>\n    Last 6 hours\n  </ToolbarButton>\n  <ButtonGroup>\n    <ToolbarButton icon="search-minus" variant="default" />\n    <ToolbarButton icon="search-plus" variant="default" />\n  </ButtonGroup>\n  <ToolbarButton icon="sync" isOpen={false} variant="primary" />\n</ToolbarButtonRow>\n'})}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:ToolbarButton.I})]})}var ToolbarButtonRow=__webpack_require__("./src/components/ToolbarButton/ToolbarButtonRow.tsx"),meta={title:"Buttons/ToolbarButton",component:ToolbarButton.I,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},controls:{exclude:["imgSrc","imgAlt","narrow"]}},args:{variant:"default",fullWidth:!1,disabled:!1,children:"Just text",icon:"cloud",isOpen:!1,tooltip:"This is a tooltip",isHighlighted:!1,imgSrc:"",imgAlt:""},argTypes:{variant:{control:{type:"select"},options:["default","primary","active","destructive"]},icon:{control:{type:"select",options:["sync","cloud"]}}}},BasicWithText=function(args){return react.createElement(ToolbarButton.I,{variant:args.variant,disabled:args.disabled,fullWidth:args.fullWidth,icon:args.icon,tooltip:args.tooltip,isOpen:args.isOpen,isHighlighted:args.isHighlighted,imgSrc:args.imgSrc,imgAlt:args.imgAlt},args.children)};BasicWithText.args={icon:void 0,iconOnly:!1};var BasicWithIcon=function(args){return react.createElement(ToolbarButton.I,{variant:args.variant,icon:args.icon,isOpen:args.isOpen,tooltip:args.tooltip,disabled:args.disabled,fullWidth:args.fullWidth,isHighlighted:args.isHighlighted,imgSrc:args.imgSrc,imgAlt:args.imgAlt})};BasicWithIcon.args={iconOnly:!0};var Examples=function(args){return react.createElement(DashboardStoryCanvas.s,null,react.createElement(Stack.B,{direction:"column",gap:1.5},"Button states",react.createElement(ToolbarButtonRow.U,null,react.createElement(ToolbarButton.I,{variant:"canvas"},"Just text"),react.createElement(ToolbarButton.I,{variant:"canvas",icon:"sync",tooltip:"Sync"}),react.createElement(ToolbarButton.I,{variant:"canvas",imgSrc:"./grafana_icon.svg"},"With imgSrc"),react.createElement(ToolbarButton.I,{variant:"canvas",icon:"cloud",isOpen:!0},"isOpen"),react.createElement(ToolbarButton.I,{variant:"canvas",icon:"cloud",isOpen:!1},"isOpen = false")),react.createElement("br",null),"disabled",react.createElement(ToolbarButtonRow.U,null,react.createElement(ToolbarButton.I,{variant:"canvas",icon:"sync",disabled:!0},"Disabled")),react.createElement("br",null),"Variants",react.createElement(ToolbarButtonRow.U,null,["default","canvas","active","primary","destructive"].map((function(variant){return react.createElement(ToolbarButton.I,{icon:"sync",tooltip:"Sync",variant:variant,key:variant},variant)}))),react.createElement("br",null),"Wrapped in noSpacing ButtonGroup",react.createElement(ButtonGroup.e,null,react.createElement(ToolbarButton.I,{variant:"active",icon:"clock-nine",tooltip:"Time picker"},"2020-10-02"),react.createElement(ToolbarButton.I,{variant:"active",icon:"search-minus"})),react.createElement("br",null),react.createElement(ButtonGroup.e,null,react.createElement(ToolbarButton.I,{variant:"canvas",icon:"sync"}),react.createElement(ToolbarButton.I,{variant:"canvas",isOpen:!1,narrow:!0})),react.createElement("br",null),"Inside button group",react.createElement(Stack.B,null,react.createElement(ButtonGroup.e,null,react.createElement(ToolbarButton.I,{variant:"primary",icon:"sync"},"Run query"),react.createElement(ToolbarButton.I,{isOpen:!1,narrow:!0,variant:"primary"})),react.createElement(ButtonGroup.e,null,react.createElement(ToolbarButton.I,{variant:"destructive",icon:"sync"},"Run query"),react.createElement(ToolbarButton.I,{isOpen:!1,narrow:!0,variant:"destructive"})))))},ToolbarButton_story=meta;BasicWithText.parameters={...BasicWithText.parameters,docs:{...BasicWithText.parameters?.docs,source:{originalSource:"args => {\n  return <ToolbarButton variant={args.variant} disabled={args.disabled} fullWidth={args.fullWidth} icon={args.icon} tooltip={args.tooltip} isOpen={args.isOpen} isHighlighted={args.isHighlighted} imgSrc={args.imgSrc} imgAlt={args.imgAlt}>\n      {args.children}\n    </ToolbarButton>;\n}",...BasicWithText.parameters?.docs?.source}}},BasicWithIcon.parameters={...BasicWithIcon.parameters,docs:{...BasicWithIcon.parameters?.docs,source:{originalSource:"args => {\n  return <ToolbarButton variant={args.variant} icon={args.icon} isOpen={args.isOpen} tooltip={args.tooltip} disabled={args.disabled} fullWidth={args.fullWidth} isHighlighted={args.isHighlighted} imgSrc={args.imgSrc} imgAlt={args.imgAlt} />;\n}",...BasicWithIcon.parameters?.docs?.source}}},Examples.parameters={...Examples.parameters,docs:{...Examples.parameters?.docs,source:{originalSource:'args => {\n  const variants: ToolbarButtonVariant[] = [\'default\', \'canvas\', \'active\', \'primary\', \'destructive\'];\n  return <DashboardStoryCanvas>\n      <Stack direction="column" gap={1.5}>\n        Button states\n        <ToolbarButtonRow>\n          <ToolbarButton variant="canvas">Just text</ToolbarButton>\n          <ToolbarButton variant="canvas" icon="sync" tooltip="Sync" />\n          <ToolbarButton variant="canvas" imgSrc="./grafana_icon.svg">\n            With imgSrc\n          </ToolbarButton>\n          <ToolbarButton variant="canvas" icon="cloud" isOpen={true}>\n            isOpen\n          </ToolbarButton>\n          <ToolbarButton variant="canvas" icon="cloud" isOpen={false}>\n            isOpen = false\n          </ToolbarButton>\n        </ToolbarButtonRow>\n        <br />\n        disabled\n        <ToolbarButtonRow>\n          <ToolbarButton variant="canvas" icon="sync" disabled>\n            Disabled\n          </ToolbarButton>\n        </ToolbarButtonRow>\n        <br />\n        Variants\n        <ToolbarButtonRow>\n          {variants.map(variant => <ToolbarButton icon="sync" tooltip="Sync" variant={variant} key={variant}>\n              {variant}\n            </ToolbarButton>)}\n        </ToolbarButtonRow>\n        <br />\n        Wrapped in noSpacing ButtonGroup\n        <ButtonGroup>\n          <ToolbarButton variant="active" icon="clock-nine" tooltip="Time picker">\n            2020-10-02\n          </ToolbarButton>\n          <ToolbarButton variant="active" icon="search-minus" />\n        </ButtonGroup>\n        <br />\n        <ButtonGroup>\n          <ToolbarButton variant="canvas" icon="sync" />\n          <ToolbarButton variant="canvas" isOpen={false} narrow />\n        </ButtonGroup>\n        <br />\n        Inside button group\n        <Stack>\n          <ButtonGroup>\n            <ToolbarButton variant="primary" icon="sync">\n              Run query\n            </ToolbarButton>\n            <ToolbarButton isOpen={false} narrow variant="primary" />\n          </ButtonGroup>\n          <ButtonGroup>\n            <ToolbarButton variant="destructive" icon="sync">\n              Run query\n            </ToolbarButton>\n            <ToolbarButton isOpen={false} narrow variant="destructive" />\n          </ButtonGroup>\n        </Stack>\n      </Stack>\n    </DashboardStoryCanvas>;\n}',...Examples.parameters?.docs?.source}}}}}]);