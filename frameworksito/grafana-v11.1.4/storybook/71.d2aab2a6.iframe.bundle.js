"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[71],{"./src/components/Card/Card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Card}});var emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react=__webpack_require__("../../node_modules/react/index.js"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),mixins=__webpack_require__("./src/themes/mixins.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var CardInner=function(param){var children=param.children,href=param.href,inner=(0,ThemeContext.of)(getCardInnerStyles).inner;return href?react.createElement("a",{className:inner,href:href},children):react.createElement(react.Fragment,null,children)},getCardInnerStyles=function(theme){return{inner:(0,emotion_css_esm.AH)({display:"flex",width:"100%",padding:theme.spacing(2)})}},CardContainer=function(_param){var children=_param.children,disableEvents=_param.disableEvents,disableHover=_param.disableHover,isSelected=_param.isSelected,className=_param.className,href=_param.href,props=_object_without_properties(_param,["children","disableEvents","disableHover","isSelected","className","href"]),oldContainer=(0,ThemeContext.of)(getCardContainerStyles,disableEvents,disableHover,isSelected).oldContainer;return react.createElement("div",_object_spread_props(_object_spread({},props),{className:(0,emotion_css_esm.cx)(oldContainer,className)}),react.createElement(CardInner,{href:href},children))},getCardContainerStyles=function(theme){var disabled=arguments.length>1&&void 0!==arguments[1]&&arguments[1],disableHover=arguments.length>2&&void 0!==arguments[2]&&arguments[2],isSelected=arguments.length>3?arguments[3]:void 0,isCompact=arguments.length>4?arguments[4]:void 0,isSelectable=void 0!==isSelected;return{container:(0,emotion_css_esm.AH)(_object_spread(_define_property({display:"grid",position:"relative",gridTemplateColumns:"auto 1fr auto",gridTemplateRows:"1fr auto auto auto",gridAutoColumns:"1fr",gridAutoFlow:"row",gridTemplateAreas:'\n        "Figure Heading Tags"\n        "Figure Meta Tags"\n        "Figure Description Tags"\n        "Figure Actions Secondary"',width:"100%",padding:theme.spacing(isCompact?1:2),background:theme.colors.background.secondary,borderRadius:theme.shape.radius.default,marginBottom:"8px",pointerEvents:disabled?"none":"auto"},theme.transitions.handleMotion("no-preference","reduce"),{transition:theme.transitions.create(["background-color","box-shadow","border-color","color"],{duration:theme.transitions.duration.short})}),!disableHover&&{"&:hover":{background:theme.colors.emphasize(theme.colors.background.secondary,.03),cursor:"pointer",zIndex:1},"&:focus":mixins.Hi(theme)},isSelectable&&{cursor:"pointer"},isSelected&&{outline:"solid 2px ".concat(theme.colors.primary.border)})),oldContainer:(0,emotion_css_esm.AH)(_object_spread(_define_property({display:"flex",width:"100%",background:theme.colors.background.secondary,borderRadius:theme.shape.radius.default,position:"relative",pointerEvents:disabled?"none":"auto",marginBottom:theme.spacing(1)},theme.transitions.handleMotion("no-preference","reduce"),{transition:theme.transitions.create(["background-color","box-shadow","border-color","color"],{duration:theme.transitions.duration.short})}),!disableHover&&{"&:hover":{background:theme.colors.emphasize(theme.colors.background.secondary,.03),cursor:"pointer",zIndex:1},"&:focus":mixins.Hi(theme)}))}};try{CardContainer.displayName="CardContainer",CardContainer.__docgenInfo={description:"",displayName:"CardContainer",props:{disableEvents:{defaultValue:null,description:"Disable pointer events for the Card, e.g. click events",name:"disableEvents",required:!1,type:{name:"boolean"}},disableHover:{defaultValue:null,description:"No style change on hover",name:"disableHover",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:'Makes the card selectable, set to "true" to apply selected styles',name:"isSelected",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom container styles",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/CardContainer.tsx#CardContainer"]={docgenInfo:CardContainer.__docgenInfo,name:"CardContainer",path:"src/components/Card/CardContainer.tsx#CardContainer"})}catch(__react_docgen_typescript_loader_error){}function Card_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Card_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){Card_define_property(target,key,source[key])}))}return target}function Card_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function Card_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function Card_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function Card_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var CardContext=react.createContext(null),Card=function(_param){var disabled=_param.disabled,href=_param.href,onClick=_param.onClick,children=_param.children,isSelected=_param.isSelected,isCompact=_param.isCompact,className=_param.className,htmlProps=Card_object_without_properties(_param,["disabled","href","onClick","children","isSelected","isCompact","className"]),hasHeadingComponent=(0,react.useMemo)((function(){return react.Children.toArray(children).some((function(c){return react.isValidElement(c)&&c.type===Heading}))}),[children]),disableHover=disabled||!onClick&&!href,onCardClick=onClick&&!disabled?onClick:void 0,styles=(0,ThemeContext.of)(getCardContainerStyles,disabled,disableHover,isSelected,isCompact);return react.createElement(CardContainer,Card_object_spread({disableEvents:disabled,disableHover:disableHover,isSelected:isSelected,className:(0,emotion_css_esm.cx)(styles.container,className)},htmlProps),react.createElement(CardContext.Provider,{value:{href:href,onClick:onCardClick,disabled:disabled,isSelected:isSelected}},!hasHeadingComponent&&react.createElement(Heading,null),children))},Heading=function(param){var children=param.children,className=param.className,ariaLabel=param["aria-label"],context=(0,react.useContext)(CardContext),styles=(0,ThemeContext.of)(getHeadingStyles),_ref=null!=context?context:{href:void 0,onClick:void 0,isSelected:void 0},href=_ref.href,onClick=_ref.onClick,isSelected=_ref.isSelected;return react.createElement("h2",{className:(0,emotion_css_esm.cx)(styles.heading,className)},href?react.createElement("a",{href:href,className:styles.linkHack,"aria-label":ariaLabel,onClick:onClick},children):onClick?react.createElement("button",{onClick:onClick,className:styles.linkHack,"aria-label":ariaLabel,type:"button"},children):react.createElement(react.Fragment,null,children),void 0!==isSelected&&react.createElement("input",{"aria-label":"option",type:"radio",checked:isSelected,readOnly:!0}))};Heading.displayName="Heading";var getHeadingStyles=function(theme){return{heading:(0,emotion_css_esm.AH)({gridArea:"Heading",justifySelf:"start",display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:0,fontSize:theme.typography.size.md,letterSpacing:"inherit",lineHeight:theme.typography.body.lineHeight,color:theme.colors.text.primary,fontWeight:theme.typography.fontWeightMedium,"& input[readonly]":{cursor:"inherit"}}),linkHack:(0,emotion_css_esm.AH)({all:"unset","&::after":{position:"absolute",content:'""',top:0,bottom:0,left:0,right:0,borderRadius:theme.shape.radius.default},"&:focus-visible":{outline:"none",outlineOffset:0,boxShadow:"none","&::after":Card_object_spread_props(Card_object_spread({},(0,mixins.Hi)(theme)),{zIndex:1})}})}},Tags=function(param){var children=param.children,className=param.className,styles=(0,ThemeContext.of)(getTagStyles);return react.createElement("div",{className:(0,emotion_css_esm.cx)(styles.tagList,className)},children)};Tags.displayName="Tags";var getTagStyles=function(theme){return{tagList:(0,emotion_css_esm.AH)({position:"relative",gridArea:"Tags",alignSelf:"center"})}},Description=function(param){var children=param.children,className=param.className,styles=(0,ThemeContext.of)(getDescriptionStyles);return react.createElement("p",{className:(0,emotion_css_esm.cx)(styles.description,className)},children)};Description.displayName="Description";var getDescriptionStyles=function(theme){return{description:(0,emotion_css_esm.AH)({width:"100%",gridArea:"Description",margin:theme.spacing(1,0,0),color:theme.colors.text.secondary,lineHeight:theme.typography.body.lineHeight})}},Figure=function(param){var children=param.children,_param_align=param.align,align=void 0===_param_align?"start":_param_align,className=param.className,styles=(0,ThemeContext.of)(getFigureStyles);return react.createElement("div",{className:(0,emotion_css_esm.cx)(styles.media,className,(0,emotion_css_esm.AH)({alignSelf:align}))},children)};Figure.displayName="Figure";var getFigureStyles=function(theme){return{media:(0,emotion_css_esm.AH)({position:"relative",gridArea:"Figure",marginRight:theme.spacing(2),width:"40px","> img":{width:"100%"},"&:empty":{display:"none"}})}},Meta=(0,react.memo)((function(param){var children=param.children,className=param.className,_param_separator=param.separator,separator=void 0===_param_separator?"|":_param_separator,styles=(0,ThemeContext.of)(getMetaStyles),meta=children,filtered=react.Children.toArray(children).filter(Boolean);return filtered.length?(meta=filtered.map((function(element,i){return react.createElement("div",{key:"element_".concat(i),className:styles.metadataItem},element)})),filtered.length>1&&separator&&(meta=filtered.reduce((function(prev,curr,i){return[prev,react.createElement("span",{key:"separator_".concat(i),className:styles.separator},separator),curr]}))),react.createElement("div",{className:(0,emotion_css_esm.cx)(styles.metadata,className)},meta)):null}));Meta.displayName="Meta";var getMetaStyles=function(theme){return{metadata:(0,emotion_css_esm.AH)({gridArea:"Meta",display:"flex",alignItems:"center",width:"100%",fontSize:theme.typography.size.sm,color:theme.colors.text.secondary,margin:theme.spacing(.5,0,0),lineHeight:theme.typography.bodySmall.lineHeight,overflowWrap:"anywhere"}),metadataItem:(0,emotion_css_esm.AH)({zIndex:0}),separator:(0,emotion_css_esm.AH)({margin:"0 ".concat(theme.spacing(1))})}},BaseActions=function(param){var children=param.children,disabled=param.disabled,variant=param.variant,className=param.className,styles=(0,ThemeContext.of)(getActionStyles),context=(0,react.useContext)(CardContext),isDisabled=(null==context?void 0:context.disabled)||disabled,css="primary"===variant?styles.actions:styles.secondaryActions;return react.createElement("div",{className:(0,emotion_css_esm.cx)(css,className)},react.Children.map(children,(function(child){return react.isValidElement(child)?(0,react.cloneElement)(child,Card_object_spread({disabled:isDisabled},child.props)):null})))},getActionStyles=function(theme){return{actions:(0,emotion_css_esm.AH)({display:"flex",flexDirection:"row",flexWrap:"wrap",gap:theme.spacing(1),gridArea:"Actions",marginTop:theme.spacing(2)}),secondaryActions:(0,emotion_css_esm.AH)({alignSelf:"center",color:theme.colors.text.secondary,display:"flex",flexDirection:"row",flexWrap:"wrap",gap:theme.spacing(1),gridArea:"Secondary",marginTop:theme.spacing(2)})}},Actions=function(param){var children=param.children,disabled=param.disabled,className=param.className;return react.createElement(BaseActions,{variant:"primary",disabled:disabled,className:className},children)};Actions.displayName="Actions";var SecondaryActions=function(param){var children=param.children,disabled=param.disabled,className=param.className;return react.createElement(BaseActions,{variant:"secondary",disabled:disabled,className:className},children)};SecondaryActions.displayName="SecondaryActions";Card.Heading=Heading,Card.Tags=Tags,Card.Figure=Figure,Card.Meta=Meta,Card.Actions=Actions,Card.SecondaryActions=SecondaryActions,Card.Description=Description;try{Card.displayName="Heading",Card.__docgenInfo={description:"Generic card component",displayName:"Heading",props:{disabled:{defaultValue:null,description:"Indicates if the card and all its actions can be interacted with",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"Link to redirect to on card click. If provided, the Card inner content will be rendered inside `a`",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"On click handler for the Card",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLElement, MouseEvent>) => void)"}},heading:{defaultValue:null,description:"@deprecated Use `Card.Heading` instead",name:"heading",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"@deprecated Use `Card.Description` instead",name:"description",required:!1,type:{name:"string"}},isSelected:{defaultValue:null,description:'Makes the card selectable, set to "true" to apply selected styles',name:"isSelected",required:!1,type:{name:"boolean"}},isCompact:{defaultValue:null,description:"If true, the padding of the Card will be smaller",name:"isCompact",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom container styles",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/Card/Card.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}try{Heading.displayName="Card.Heading",Heading.__docgenInfo={description:"Main heading for the card",displayName:"Card.Heading",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card.Heading"]={docgenInfo:Card.Heading.__docgenInfo,name:"Card.Heading",path:"src/components/Card/Card.tsx#Card.Heading"})}catch(__react_docgen_typescript_loader_error){}try{Tags.displayName="Card.Tags",Tags.__docgenInfo={description:"",displayName:"Card.Tags",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card.Tags"]={docgenInfo:Card.Tags.__docgenInfo,name:"Card.Tags",path:"src/components/Card/Card.tsx#Card.Tags"})}catch(__react_docgen_typescript_loader_error){}try{Figure.displayName="Card.Figure",Figure.__docgenInfo={description:"",displayName:"Card.Figure",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"start"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card.Figure"]={docgenInfo:Card.Figure.__docgenInfo,name:"Card.Figure",path:"src/components/Card/Card.tsx#Card.Figure"})}catch(__react_docgen_typescript_loader_error){}try{Meta.displayName="Card.Meta",Meta.__docgenInfo={description:"",displayName:"Card.Meta",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card.Meta"]={docgenInfo:Card.Meta.__docgenInfo,name:"Card.Meta",path:"src/components/Card/Card.tsx#Card.Meta"})}catch(__react_docgen_typescript_loader_error){}try{Actions.displayName="Card.Actions",Actions.__docgenInfo={description:"",displayName:"Card.Actions",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card.Actions"]={docgenInfo:Card.Actions.__docgenInfo,name:"Card.Actions",path:"src/components/Card/Card.tsx#Card.Actions"})}catch(__react_docgen_typescript_loader_error){}try{SecondaryActions.displayName="Card.SecondaryActions",SecondaryActions.__docgenInfo={description:"",displayName:"Card.SecondaryActions",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card.SecondaryActions"]={docgenInfo:Card.SecondaryActions.__docgenInfo,name:"Card.SecondaryActions",path:"src/components/Card/Card.tsx#Card.SecondaryActions"})}catch(__react_docgen_typescript_loader_error){}try{Description.displayName="Card.Description",Description.__docgenInfo={description:"Card description text",displayName:"Card.Description",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card.Description"]={docgenInfo:Card.Description.__docgenInfo,name:"Card.Description",path:"src/components/Card/Card.tsx#Card.Description"})}catch(__react_docgen_typescript_loader_error){}}}]);