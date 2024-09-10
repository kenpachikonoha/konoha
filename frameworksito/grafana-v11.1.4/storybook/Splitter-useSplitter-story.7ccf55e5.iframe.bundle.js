/*! For license information please see Splitter-useSplitter-story.7ccf55e5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[3661],{"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R:function(){return useMDXComponents},x:function(){return MDXProvider}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/DragHandle/DragHandle.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return getDragStyles}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),getDragStyles=function(theme,handlePosition){var position=handlePosition||"middle",baseColor=theme.colors.emphasize(theme.colors.background.secondary,.15),hoverColor=theme.colors.primary.border,clickTargetSize=theme.spacing(2),verticalOffset="50%",horizontalOffset="50%";switch(position){case"start":verticalOffset="0%",horizontalOffset="0%";break;case"end":verticalOffset="100%",horizontalOffset="100%"}var dragHandleBase=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({position:"relative","&:before":{content:'""',position:"absolute",transition:theme.transitions.create("border-color"),zIndex:1},"&:after":{background:baseColor,content:'""',position:"absolute",transition:theme.transitions.create("background"),transform:"translate(-50%, -50%)",borderRadius:theme.shape.radius.pill,zIndex:1},"&:hover":{"&:before":{borderColor:hoverColor},"&:after":{background:hoverColor}}});return{dragHandleVertical:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(dragHandleBase,(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({cursor:"col-resize",width:clickTargetSize,"&:before":{borderRight:"1px solid transparent",height:"100%",left:verticalOffset,transform:"translateX(-50%)"},"&:after":{left:verticalOffset,top:"50%",height:200,width:4}})),dragHandleHorizontal:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(dragHandleBase,(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({height:clickTargetSize,cursor:"row-resize","&:before":{borderTop:"1px solid transparent",top:horizontalOffset,transform:"translateY(-50%)",width:"100%"},"&:after":{left:"50%",top:horizontalOffset,height:4,width:200}}))}}},"./src/components/Layout/Box/Box.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return Box}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layout/utils/responsiveness.tsx"),_utils_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Layout/utils/styles.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Box=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(props,ref){var children=props.children,margin=props.margin,marginX=props.marginX,marginY=props.marginY,marginTop=props.marginTop,marginBottom=props.marginBottom,marginLeft=props.marginLeft,marginRight=props.marginRight,padding=props.padding,paddingX=props.paddingX,paddingY=props.paddingY,paddingTop=props.paddingTop,paddingBottom=props.paddingBottom,paddingLeft=props.paddingLeft,paddingRight=props.paddingRight,display=props.display,backgroundColor=props.backgroundColor,grow=props.grow,shrink=props.shrink,basis=props.basis,flex=props.flex,borderColor=props.borderColor,borderStyle=props.borderStyle,borderRadius=props.borderRadius,direction=props.direction,justifyContent=props.justifyContent,alignItems=props.alignItems,boxShadow=props.boxShadow,element=props.element,gap=props.gap,width=props.width,minWidth=props.minWidth,maxWidth=props.maxWidth,height=props.height,minHeight=props.minHeight,maxHeight=props.maxHeight,rest=_object_without_properties(props,["children","margin","marginX","marginY","marginTop","marginBottom","marginLeft","marginRight","padding","paddingX","paddingY","paddingTop","paddingBottom","paddingLeft","paddingRight","display","backgroundColor","grow","shrink","basis","flex","borderColor","borderStyle","borderRadius","direction","justifyContent","alignItems","boxShadow","element","gap","width","minWidth","maxWidth","height","minHeight","maxHeight"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(getStyles,margin,marginX,marginY,marginTop,marginBottom,marginLeft,marginRight,padding,paddingX,paddingY,paddingTop,paddingBottom,paddingLeft,paddingRight,display,backgroundColor,grow,shrink,basis,flex,borderColor,borderStyle,borderRadius,direction,justifyContent,alignItems,boxShadow,gap),sizeStyles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(_utils_styles__WEBPACK_IMPORTED_MODULE_3__.E,width,minWidth,maxWidth,height,minHeight,maxHeight),Element=null!=element?element:"div";return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Element,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref:ref,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.root,sizeStyles)},rest),children)}));Box.displayName="Box";var customBorderColor=function(color,theme){switch(color){case"error":case"success":case"info":case"warning":return theme.colors[color].borderTransparent;default:return color?theme.colors.border[color]:void 0}},customBackgroundColor=function(color,theme){switch(color){case"error":case"success":case"info":case"warning":return theme.colors[color].transparent;default:return color?theme.colors.background[color]:void 0}},getStyles=function(theme,margin,marginX,marginY,marginTop,marginBottom,marginLeft,marginRight,padding,paddingX,paddingY,paddingTop,paddingBottom,paddingLeft,paddingRight,display,backgroundColor,grow,shrink,basis,flex,borderColor,borderStyle,borderRadius,direction,justifyContent,alignItems,boxShadow,gap){return{root:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)([(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,margin,(function(val){return{margin:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,marginX,(function(val){return{marginLeft:theme.spacing(val),marginRight:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,marginY,(function(val){return{marginTop:theme.spacing(val),marginBottom:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,marginTop,(function(val){return{marginTop:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,marginBottom,(function(val){return{marginBottom:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,marginLeft,(function(val){return{marginLeft:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,marginRight,(function(val){return{marginRight:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,padding,(function(val){return{padding:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,paddingX,(function(val){return{paddingLeft:theme.spacing(val),paddingRight:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,paddingY,(function(val){return{paddingTop:theme.spacing(val),paddingBottom:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,paddingTop,(function(val){return{paddingTop:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,paddingBottom,(function(val){return{paddingBottom:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,paddingLeft,(function(val){return{paddingLeft:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,paddingRight,(function(val){return{paddingRight:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,display,(function(val){return{display:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,backgroundColor,(function(val){return{backgroundColor:customBackgroundColor(val,theme)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,direction,(function(val){return{flexDirection:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,grow,(function(val){return{flexGrow:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,shrink,(function(val){return{flexShrink:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,basis,(function(val){return{flexBasis:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,flex,(function(val){return{flex:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,borderStyle,(function(val){return{borderStyle:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,borderColor,(function(val){return{borderColor:customBorderColor(val,theme)}})),(borderStyle||borderColor)&&{borderWidth:"1px"},(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,justifyContent,(function(val){return{justifyContent:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,alignItems,(function(val){return{alignItems:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,borderRadius,(function(val){return{borderRadius:theme.shape.radius[val]}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,boxShadow,(function(val){return{boxShadow:theme.shadows[val]}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_4__.Y)(theme,gap,(function(val){return{gap:theme.spacing(val)}}))])}};try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{margin:{defaultValue:null,description:"Sets the property `margin`",name:"margin",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginX:{defaultValue:null,description:"Sets the properties `margin-top` and `margin-bottom`. Higher priority than margin.",name:"marginX",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginY:{defaultValue:null,description:"Sets the properties `margin-left` and `margin-right`. Higher priority than margin.",name:"marginY",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginTop:{defaultValue:null,description:"Sets the property `margin-top`. Higher priority than margin and marginY.",name:"marginTop",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginBottom:{defaultValue:null,description:"Sets the property `margin-bottom`. Higher priority than margin and marginXY",name:"marginBottom",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginLeft:{defaultValue:null,description:"Sets the property `margin-left`. Higher priority than margin and marginX.",name:"marginLeft",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginRight:{defaultValue:null,description:"Sets the property `margin-right`. Higher priority than margin and marginX.",name:"marginRight",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},padding:{defaultValue:null,description:"Sets the property `padding`",name:"padding",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingX:{defaultValue:null,description:"Sets the properties `padding-top` and `padding-bottom`. Higher priority than padding.",name:"paddingX",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingY:{defaultValue:null,description:"Sets the properties `padding-left` and `padding-right`. Higher priority than padding.",name:"paddingY",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingTop:{defaultValue:null,description:"Sets the property `padding-top`. Higher priority than padding and paddingY.",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingBottom:{defaultValue:null,description:"Sets the property `padding-bottom`. Higher priority than padding and paddingY.",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingLeft:{defaultValue:null,description:"Sets the property `padding-left`. Higher priority than padding and paddingX.",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingRight:{defaultValue:null,description:"Sets the property `padding-right`. Higher priority than padding and paddingX.",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"ResponsiveProp<BorderStyle>"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveProp<BorderColor>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveProp<keyof Radii>"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<AlignItems>"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ResponsiveProp<Direction>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<JustifyContent>"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"ResponsiveProp<BackgroundColor>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveProp<Display>"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveProp<keyof ThemeShadows>"}},element:{defaultValue:null,description:"Sets the HTML element that will be rendered as a Box. Defaults to 'div'",name:"element",required:!1,type:{name:"ElementType"}},grow:{defaultValue:null,description:"Sets the property `flex-grow`",name:"grow",required:!1,type:{name:"ResponsiveProp<number>"}},shrink:{defaultValue:null,description:"Sets the property `flex-shrink`",name:"shrink",required:!1,type:{name:"ResponsiveProp<number>"}},basis:{defaultValue:null,description:"Sets the property `flex-basis`",name:"basis",required:!1,type:{name:"ResponsiveProp<FlexBasis>"}},flex:{defaultValue:null,description:"Sets the property `flex`",name:"flex",required:!1,type:{name:"ResponsiveProp<Flex>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<MinWidth<number>>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<MaxWidth<number>>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<Width<number>>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<MinHeight<number>>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<MaxHeight<number>>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<Height<number>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/Layout/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/utils/responsiveness.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function breakpointCSS(theme,prop,getCSS,key){var value=prop[key];if(null!=value)return function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},theme.breakpoints.up(key),getCSS(value))}function getResponsiveStyle(theme,prop,getCSS){return null==prop?null:"object"==typeof prop&&"xs"in prop?[breakpointCSS(theme,prop,getCSS,"xs"),breakpointCSS(theme,prop,getCSS,"sm"),breakpointCSS(theme,prop,getCSS,"md"),breakpointCSS(theme,prop,getCSS,"lg"),breakpointCSS(theme,prop,getCSS,"xl"),breakpointCSS(theme,prop,getCSS,"xxl")]:getCSS(prop)}__webpack_require__.d(__webpack_exports__,{Y:function(){return getResponsiveStyle}});try{getResponsiveStyle.displayName="getResponsiveStyle",getResponsiveStyle.__docgenInfo={description:"Function that converts a ResponsiveProp object into CSS",displayName:"getResponsiveStyle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"]={docgenInfo:getResponsiveStyle.__docgenInfo,name:"getResponsiveStyle",path:"src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/utils/styles.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return getSizeStyles}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_responsiveness__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Layout/utils/responsiveness.tsx"),getSizeStyles=function(theme,width,minWidth,maxWidth,height,minHeight,maxHeight){return(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)([(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,width,(function(val){return{width:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,minWidth,(function(val){return{minWidth:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,maxWidth,(function(val){return{maxWidth:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,height,(function(val){return{height:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,minHeight,(function(val){return{minHeight:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,maxHeight,(function(val){return{maxHeight:theme.spacing(val)}}))])}},"./src/utils/storybook/DashboardStoryCanvas.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{s:function(){return DashboardStoryCanvas}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),DashboardStoryCanvas=function(param){var children=param.children,theme=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.$j)(),style=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({width:"100%",height:"100%",padding:"32px",background:theme.colors.background.canvas,overflow:"auto"});return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:style},children)};DashboardStoryCanvas.displayName="DashboardStoryCanvas";try{DashboardStoryCanvas.displayName="DashboardStoryCanvas",DashboardStoryCanvas.__docgenInfo={description:"",displayName:"DashboardStoryCanvas",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"]={docgenInfo:DashboardStoryCanvas.__docgenInfo,name:"DashboardStoryCanvas",path:"src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Splitter/useSplitter.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},default:function(){return useSplitter_story}});var react=__webpack_require__("../../node_modules/react/index.js"),Box=__webpack_require__("./src/components/Layout/Box/Box.tsx"),DashboardStoryCanvas=__webpack_require__("./src/utils/storybook/DashboardStoryCanvas.tsx"),emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),lodash=__webpack_require__("../../node_modules/lodash/lodash.js"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),DragHandle=__webpack_require__("./src/components/DragHandle/DragHandle.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var VERTICAL_KEYS=new Set(["ArrowUp","ArrowDown"]),HORIZONTAL_KEYS=new Set(["ArrowLeft","ArrowRight"]),propsForDirection={row:{dim:"width",axis:"clientX",min:"minWidth",max:"maxWidth"},column:{dim:"height",axis:"clientY",min:"minHeight",max:"maxHeight"}};function useSplitter(options){var direction=options.direction,_options_initialSize=options.initialSize,initialSize=void 0===_options_initialSize?.5:_options_initialSize,_options_dragPosition=options.dragPosition,dragPosition=void 0===_options_dragPosition?"middle":_options_dragPosition,onResizing=options.onResizing,onSizeChanged=options.onSizeChanged,splitterRef=(0,react.useRef)(null),firstPaneRef=(0,react.useRef)(null),secondPaneRef=(0,react.useRef)(null),containerRef=(0,react.useRef)(null),containerSize=(0,react.useRef)(null),primarySizeRef=(0,react.useRef)("1fr"),firstPaneMeasurements=(0,react.useRef)(void 0),savedPos=(0,react.useRef)(void 0),measurementProp=propsForDirection[direction].dim,clientAxis=propsForDirection[direction].axis,minDimProp=propsForDirection[direction].min,maxDimProp=propsForDirection[direction].max;!function useResizeObserver(target,cb){var throttleWait=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,deps=arguments.length>3?arguments[3]:void 0,throttledCallback=(0,lodash.throttle)(cb,throttleWait);(0,react.useLayoutEffect)((function(){if(target){var resizeObserver=new ResizeObserver(throttledCallback);return resizeObserver.observe(target,{box:"device-pixel-content-box"}),function(){return resizeObserver.disconnect()}}}),deps)}(containerRef.current,(function(entries){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=entries[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){if(!_step.value.target.isSameNode(containerRef.current))return;if(!firstPaneRef.current)return;var curSize=firstPaneRef.current.getBoundingClientRect()[measurementProp],newDims=measureElement(firstPaneRef.current);splitterRef.current.ariaValueNow=ariaValue(curSize,newDims[minDimProp],newDims[maxDimProp])}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}}),500,[maxDimProp,minDimProp,direction,measurementProp]);var _obj,dragStart=(0,react.useRef)(null),onPointerDown=(0,react.useCallback)((function(e){firstPaneRef.current&&(primarySizeRef.current=firstPaneRef.current.getBoundingClientRect()[measurementProp],containerSize.current=containerRef.current.getBoundingClientRect()[measurementProp],dragStart.current=e[clientAxis],splitterRef.current.setPointerCapture(e.pointerId),firstPaneMeasurements.current=measureElement(firstPaneRef.current),savedPos.current=void 0)}),[measurementProp,clientAxis]),onPointerMove=(0,react.useCallback)((function(e){if(null!==dragStart.current&&"1fr"!==primarySizeRef.current){var diff=e[clientAxis]-dragStart.current,dims=firstPaneMeasurements.current,newSize=(0,lodash.clamp)(primarySizeRef.current+diff,dims[minDimProp],dims[maxDimProp]),newFlex=newSize/(containerSize.current-16);firstPaneRef.current.style.flexGrow="".concat(newFlex),secondPaneRef.current.style.flexGrow="".concat(1-newFlex),splitterRef.current.ariaValueNow=ariaValue(newSize,dims[minDimProp],dims[maxDimProp]),null==onResizing||onResizing(newFlex,newSize)}}),[16,clientAxis,minDimProp,maxDimProp,onResizing]),onPointerUp=(0,react.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),splitterRef.current.releasePointerCapture(e.pointerId),dragStart.current=null,"number"==typeof primarySizeRef.current&&(null==onSizeChanged||onSizeChanged(parseFloat(firstPaneRef.current.style.flexGrow),primarySizeRef.current))}),[onSizeChanged]),pressedKeys=(0,react.useRef)(new Set),keysLastHandledAt=(0,react.useRef)(null),handlePressedKeys=(0,react.useCallback)((function(time){if(0===pressedKeys.current.size)keysLastHandledAt.current=null;else if("1fr"!==primarySizeRef.current){var _keysLastHandledAt_current,dx=.3*(time-(null!==(_keysLastHandledAt_current=keysLastHandledAt.current)&&void 0!==_keysLastHandledAt_current?_keysLastHandledAt_current:time)),sizeChange=0;"row"===direction?(pressedKeys.current.has("ArrowLeft")&&(sizeChange-=dx),pressedKeys.current.has("ArrowRight")&&(sizeChange+=dx)):(pressedKeys.current.has("ArrowUp")&&(sizeChange-=dx),pressedKeys.current.has("ArrowDown")&&(sizeChange+=dx));var firstPaneDims=firstPaneMeasurements.current,curSize=firstPaneRef.current.getBoundingClientRect()[measurementProp],newSize=(0,lodash.clamp)(curSize+sizeChange,firstPaneDims[minDimProp],firstPaneDims[maxDimProp]),newFlex=newSize/(containerSize.current-16);firstPaneRef.current.style.flexGrow="".concat(newFlex),secondPaneRef.current.style.flexGrow="".concat(1-newFlex),splitterRef.current.ariaValueNow=ariaValue(newSize,firstPaneDims[minDimProp],firstPaneDims[maxDimProp]),null==onResizing||onResizing(newFlex,newSize),keysLastHandledAt.current=time,window.requestAnimationFrame(handlePressedKeys)}}),[direction,16,minDimProp,maxDimProp,measurementProp,onResizing]),onKeyDown=(0,react.useCallback)((function(e){if(firstPaneRef.current&&secondPaneRef.current&&splitterRef.current&&containerRef.current)if("Enter"!==e.key){if("Home"===e.key){firstPaneMeasurements.current=measureElement(firstPaneRef.current),containerSize.current=containerRef.current.getBoundingClientRect()[measurementProp];var newFlex=firstPaneMeasurements.current[minDimProp]/(containerSize.current-16);return firstPaneRef.current.style.flexGrow="".concat(newFlex),secondPaneRef.current.style.flexGrow="".concat(1-newFlex),void(splitterRef.current.ariaValueNow="0")}if("End"===e.key){firstPaneMeasurements.current=measureElement(firstPaneRef.current),containerSize.current=containerRef.current.getBoundingClientRect()[measurementProp];var newFlex1=firstPaneMeasurements.current[maxDimProp]/(containerSize.current-16);return firstPaneRef.current.style.flexGrow="".concat(newFlex1),secondPaneRef.current.style.flexGrow="".concat(1-newFlex1),void(splitterRef.current.ariaValueNow="100")}if(("column"===direction&&VERTICAL_KEYS.has(e.key)||"row"===direction&&HORIZONTAL_KEYS.has(e.key))&&!pressedKeys.current.has(e.key))if(savedPos.current=void 0,e.preventDefault(),e.stopPropagation(),primarySizeRef.current=firstPaneRef.current.getBoundingClientRect()[measurementProp],containerSize.current=containerRef.current.getBoundingClientRect()[measurementProp],firstPaneMeasurements.current=measureElement(firstPaneRef.current),!pressedKeys.current.has(e.key)){var initiateAnimationLoop=0===pressedKeys.current.size;pressedKeys.current.add(e.key),initiateAnimationLoop&&window.requestAnimationFrame(handlePressedKeys)}}else void 0===savedPos.current?(savedPos.current=firstPaneRef.current.style.flexGrow,firstPaneRef.current.style.flexGrow="0",secondPaneRef.current.style.flexGrow="1"):(firstPaneRef.current.style.flexGrow=savedPos.current,secondPaneRef.current.style.flexGrow="".concat(1-parseFloat(savedPos.current)),savedPos.current=void 0)}),[direction,handlePressedKeys,16,maxDimProp,measurementProp,minDimProp]),onKeyUp=(0,react.useCallback)((function(e){"row"===direction&&!HORIZONTAL_KEYS.has(e.key)||"column"===direction&&!VERTICAL_KEYS.has(e.key)||(pressedKeys.current.delete(e.key),"number"==typeof primarySizeRef.current&&(null==onSizeChanged||onSizeChanged(parseFloat(firstPaneRef.current.style.flexGrow),primarySizeRef.current)))}),[direction,onSizeChanged]),onDoubleClick=(0,react.useCallback)((function(){if(firstPaneRef.current&&secondPaneRef.current){firstPaneRef.current.style.flexGrow="0.5",secondPaneRef.current.style.flexGrow="0.5";var dim=measureElement(firstPaneRef.current);firstPaneMeasurements.current=dim,primarySizeRef.current=firstPaneRef.current.getBoundingClientRect()[measurementProp],splitterRef.current.ariaValueNow="".concat(ariaValue(primarySizeRef.current,dim[minDimProp],dim[maxDimProp]))}}),[maxDimProp,measurementProp,minDimProp]),onBlur=(0,react.useCallback)((function(){pressedKeys.current.size>0&&(pressedKeys.current.clear(),dragStart.current=null,"number"==typeof primarySizeRef.current&&(null==onSizeChanged||onSizeChanged(parseFloat(firstPaneRef.current.style.flexGrow),primarySizeRef.current)))}),[onSizeChanged]),styles=(0,ThemeContext.of)(getStyles,direction),dragStyles=(0,ThemeContext.of)(DragHandle.l,dragPosition),dragHandleStyle="column"===direction?dragStyles.dragHandleHorizontal:dragStyles.dragHandleVertical,id=(0,react.useId)();return{containerProps:{ref:containerRef,className:styles.container},primaryProps:{ref:firstPaneRef,className:styles.panel,style:(_obj={},_define_property(_obj,minDimProp,"min-content"),_define_property(_obj,"flexGrow",(0,lodash.clamp)(null!=initialSize?initialSize:.5,0,1)),_obj)},secondaryProps:{ref:secondPaneRef,className:styles.panel,style:_define_property({flexGrow:(0,lodash.clamp)(1-initialSize,0,1)},minDimProp,"min-content")},splitterProps:{onPointerUp:onPointerUp,onPointerDown:onPointerDown,onPointerMove:onPointerMove,onKeyDown:onKeyDown,onKeyUp:onKeyUp,onDoubleClick:onDoubleClick,onBlur:onBlur,ref:splitterRef,style:_define_property({},measurementProp,"".concat(16,"px")),role:"separator","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":100*initialSize,"aria-controls":"start-panel-".concat(id),"aria-label":"Pane resize widget",tabIndex:0,className:dragHandleStyle}}}function ariaValue(value,min,max){return"".concat((0,lodash.clamp)((value-min)/(max-min)*100,0,100))}function measureElement(ref){var savedBodyOverflow=document.body.style.overflow,savedWidth=ref.style.width,savedHeight=ref.style.height,savedFlex=ref.style.flexGrow;document.body.style.overflow="hidden",ref.style.flexGrow="0";var _ref_getBoundingClientRect=ref.getBoundingClientRect(),minWidth=_ref_getBoundingClientRect.width,minHeight=_ref_getBoundingClientRect.height;ref.style.flexGrow="100";var _ref_getBoundingClientRect1=ref.getBoundingClientRect(),maxWidth=_ref_getBoundingClientRect1.width,maxHeight=_ref_getBoundingClientRect1.height;return document.body.style.overflow=savedBodyOverflow,ref.style.width=savedWidth,ref.style.height=savedHeight,ref.style.flexGrow=savedFlex,{minWidth:minWidth,maxWidth:maxWidth,minHeight:minHeight,maxHeight:maxHeight}}function getStyles(theme,direction){return{container:(0,emotion_css_esm.AH)({display:"flex",flexDirection:"row"===direction?"row":"column",width:"100%",flexGrow:1,overflow:"hidden"}),panel:(0,emotion_css_esm.AH)({display:"flex",position:"relative",flexBasis:0})}}var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");function _createMdxContent(props){const _components={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"usesplitter",children:"useSplitter"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The splitter creates two resizable panes, either horizontally or vertically."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:'import { useSplitter } from \'@grafana/ui\';\n\nconst { containerProps, primaryProps, secondaryProps, splitterProps } = useSplitter({\n  direction: \'row\',\n  initialSize: 0.5,\n  dragPosition: \'end\',\n});\n\nreturn (\n  <div {...containerProps}>\n    <div {...primaryProps}>\n      <Box display="flex" grow={1} backgroundColor="primary" padding={2}>\n        Primary\n      </Box>\n    </div>\n    <div {...splitterProps} />\n    <div {...secondaryProps}>\n      <Box display="flex" grow={1} backgroundColor="primary" padding={2}>\n        Secondary\n      </Box>\n    </div>\n  </div>\n);\n'})})]})}function useSplitter_story_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var meta={title:"General/Layout/useSplitter",parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},controls:{exclude:[]}},argTypes:{initialSize:{control:{type:"number",min:.1,max:1}},direction:{control:{type:"radio"},options:["row","column"]},dragPosition:{control:{type:"radio"},options:["start","middle","end"]},hasSecondPane:{type:"boolean",options:[!0,!1]}}},Basic=function(options){var _useSplitter=useSplitter(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){useSplitter_story_define_property(target,key,source[key])}))}return target}({},options)),containerProps=_useSplitter.containerProps,primaryProps=_useSplitter.primaryProps,secondaryProps=_useSplitter.secondaryProps,splitterProps=_useSplitter.splitterProps;return options.hasSecondPane||(primaryProps.style.flexGrow=1),react.createElement(DashboardStoryCanvas.s,null,react.createElement("div",{style:{display:"flex",width:"700px",height:"500px"}},react.createElement("div",containerProps,react.createElement("div",primaryProps,react.createElement(Box.a,{display:"flex",grow:1,backgroundColor:"primary",padding:2},"Primary")),options.hasSecondPane&&react.createElement(react.Fragment,null,react.createElement("div",splitterProps),react.createElement("div",secondaryProps,react.createElement(Box.a,{display:"flex",grow:1,backgroundColor:"primary",padding:2},"Secondary"))))))};Basic.args={direction:"row",dragPosition:"middle",hasSecondPane:!0};var useSplitter_story=meta;Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'options => {\n  const {\n    containerProps,\n    primaryProps,\n    secondaryProps,\n    splitterProps\n  } = useSplitter({\n    ...options\n  });\n  if (!options.hasSecondPane) {\n    primaryProps.style.flexGrow = 1;\n  }\n  return <DashboardStoryCanvas>\n      <div style={{\n      display: \'flex\',\n      width: \'700px\',\n      height: \'500px\'\n    }}>\n        <div {...containerProps}>\n          <div {...primaryProps}>\n            <Box display="flex" grow={1} backgroundColor="primary" padding={2}>\n              Primary\n            </Box>\n          </div>\n          {options.hasSecondPane && <>\n              <div {...splitterProps} />\n              <div {...secondaryProps}>\n                <Box display="flex" grow={1} backgroundColor="primary" padding={2}>\n                  Secondary\n                </Box>\n              </div>\n            </>}\n        </div>\n      </div>\n    </DashboardStoryCanvas>;\n}',...Basic.parameters?.docs?.source}}}}}]);