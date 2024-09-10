"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2518],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{XI:function(){return action}});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"../grafana-data/src/utils/deprecationWarning.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return deprecationWarning}});var history={},deprecationWarning=function(file,oldName,newName){var message="[Deprecation warning] ".concat(file,": ").concat(oldName," is deprecated");newName&&(message+=". Use ".concat(newName," instead"));var now=Date.now(),last=history[message];(!last||now-last>1e4)&&(console.warn(message),history[message]=now)}},"./src/components/ContextMenu/ContextMenu.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:function(){return ContextMenu}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),react_use__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-use/esm/useClickAway.js"),_grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../grafana-e2e-selectors/src/selectors/index.ts"),_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/Menu.tsx"),_Portal_Portal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Portal/Portal.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ContextMenu=react__WEBPACK_IMPORTED_MODULE_0__.memo((function(param){var x=param.x,y=param.y,onClose=param.onClose,_param_focusOnOpen=param.focusOnOpen,focusOnOpen=void 0===_param_focusOnOpen||_param_focusOnOpen,renderMenuItems=param.renderMenuItems,renderHeader=param.renderHeader,menuRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),2),positionStyles=_useState[0],setPositionStyles=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((function(){var menuElement=menuRef.current;if(menuElement){var rect=menuElement.getBoundingClientRect(),collisions={right:window.innerWidth<x+rect.width,bottom:window.innerHeight<y+rect.height+5};setPositionStyles({position:"fixed",left:collisions.right?x-rect.width-5:x-5,top:Math.max(0,collisions.bottom?y-rect.height-5:y+5)})}}),[x,y]),(0,react_use__WEBPACK_IMPORTED_MODULE_1__.A)(menuRef,(function(){null==onClose||onClose()}));var header=null==renderHeader?void 0:renderHeader(),menuItems=null==renderMenuItems?void 0:renderMenuItems();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Portal_Portal__WEBPACK_IMPORTED_MODULE_2__.ZL,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__.W,{header:header,ref:menuRef,style:positionStyles,ariaLabel:_grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.Tp.components.Menu.MenuComponent("Context"),onOpen:function(setFocusedItem){focusOnOpen&&setFocusedItem(0)},onClick:onClose,onKeyDown:function(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),null==onClose||onClose())}},menuItems))}));ContextMenu.displayName="ContextMenu";try{ContextMenu.displayName="ContextMenu",ContextMenu.__docgenInfo={description:"",displayName:"ContextMenu",props:{x:{defaultValue:null,description:"Starting horizontal position for the menu",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"Starting vertical position for the menu",name:"y",required:!0,type:{name:"number"}},onClose:{defaultValue:null,description:"Callback for closing the menu",name:"onClose",required:!1,type:{name:"(() => void)"}},focusOnOpen:{defaultValue:null,description:"On menu open focus the first element",name:"focusOnOpen",required:!1,type:{name:"boolean"}},renderMenuItems:{defaultValue:null,description:"RenderProp function that returns menu items to display",name:"renderMenuItems",required:!1,type:{name:"(() => ReactNode)"}},renderHeader:{defaultValue:null,description:"A function that returns header element",name:"renderHeader",required:!1,type:{name:"(() => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContextMenu/ContextMenu.tsx#ContextMenu"]={docgenInfo:ContextMenu.__docgenInfo,name:"ContextMenu",path:"src/components/ContextMenu/ContextMenu.tsx#ContextMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ContextMenu/WithContextMenu.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return WithContextMenu}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_ContextMenu_ContextMenu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ContextMenu/ContextMenu.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var WithContextMenu=function(param){var children=param.children,renderMenuItems=param.renderMenuItems,_param_focusOnOpen=param.focusOnOpen,focusOnOpen=void 0===_param_focusOnOpen||_param_focusOnOpen,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isMenuOpen=_useState[0],setIsMenuOpen=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({x:0,y:0}),2),menuPosition=_useState1[0],setMenuPosition=_useState1[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children({openMenu:function(e){setIsMenuOpen(!0),setMenuPosition({x:e.pageX,y:e.pageY})}}),isMenuOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContextMenu_ContextMenu__WEBPACK_IMPORTED_MODULE_1__.t,{onClose:function(){return setIsMenuOpen(!1)},x:menuPosition.x,y:menuPosition.y,renderMenuItems:renderMenuItems,focusOnOpen:focusOnOpen}))};try{WithContextMenu.displayName="WithContextMenu",WithContextMenu.__docgenInfo={description:"",displayName:"WithContextMenu",props:{children:{defaultValue:null,description:"Menu item trigger that accepts openMenu prop",name:"children",required:!0,type:{name:"(props: { openMenu: MouseEventHandler<HTMLElement>; }) => Element"}},renderMenuItems:{defaultValue:null,description:"A function that returns an array of menu items",name:"renderMenuItems",required:!0,type:{name:"() => ReactNode"}},focusOnOpen:{defaultValue:{value:"true"},description:"On menu open focus the first element",name:"focusOnOpen",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContextMenu/WithContextMenu.tsx#WithContextMenu"]={docgenInfo:WithContextMenu.__docgenInfo,name:"WithContextMenu",path:"src/components/ContextMenu/WithContextMenu.tsx#WithContextMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconButton/IconButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{K:function(){return IconButton}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_grafana_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../grafana-data/src/utils/deprecationWarning.ts"),_grafana_data__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../grafana-data/src/themes/colorManipulator.ts"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/ThemeContext.tsx"),_themes_mixins__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/themes/mixins.ts"),_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Button/Button.tsx"),_Icon_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Icon/utils.ts"),_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Tooltip/Tooltip.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var IconButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(props,ref){var limitedIconSize,_props_size=props.size,size=void 0===_props_size?"md":_props_size,_props_variant=props.variant,variant=void 0===_props_variant?"secondary":_props_variant;"xxl"===size||"xxxl"===size?((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.l)("IconButton",'size="xxl" and size="xxxl"','size="xl"'),limitedIconSize="xl"):limitedIconSize=size;var ariaLabel,buttonRef,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getStyles,limitedIconSize,variant);if("tooltip"in props){var tooltip=props.tooltip;ariaLabel="string"==typeof tooltip?tooltip:void 0}else if("ariaLabel"in props||"aria-label"in props){var deprecatedAriaLabel=props.ariaLabel;ariaLabel=props["aria-label"]||deprecatedAriaLabel,buttonRef=ref}if("tooltip"in props){var name=props.name,iconType=props.iconType,className=props.className,tooltip1=props.tooltip,tooltipPlacement=props.tooltipPlacement,restProps=_object_without_properties(props,["name","iconType","className","tooltip","tooltipPlacement"]);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_4__.m,{ref:ref,content:tooltip1,placement:tooltipPlacement},react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",_object_spread_props(_object_spread({},restProps),{ref:buttonRef,"aria-label":ariaLabel,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.button,className),type:"button"}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.Jt,{icon:name,size:limitedIconSize,className:styles.icon,iconType:iconType})))}var name1=props.name,iconType1=props.iconType,className1=props.className,restProps1=_object_without_properties(props,["name","iconType","className"]);return react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",_object_spread_props(_object_spread({},restProps1),{ref:buttonRef,"aria-label":ariaLabel,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.button,className1),type:"button"}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.Jt,{icon:name1,size:limitedIconSize,className:styles.icon,iconType:iconType1}))}));IconButton.displayName="IconButton";var getStyles=function(theme,size,variant){var hoverSize=(0,_Icon_utils__WEBPACK_IMPORTED_MODULE_6__.cs)(size)+theme.spacing.gridSize,iconColor=theme.colors.text.primary;return"primary"===variant?iconColor=theme.colors.primary.text:"destructive"===variant&&(iconColor=theme.colors.error.text),{button:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({zIndex:0,position:"relative",margin:"0 ".concat(theme.spacing.x0_5," 0 0"),boxShadow:"none",border:"none",display:"inline-flex",background:"transparent",justifyContent:"center",alignItems:"center",padding:0,color:iconColor,"&[disabled], &:disabled":{cursor:"not-allowed",color:theme.colors.action.disabledText,opacity:.65},"&:before":_define_property({zIndex:-1,position:"absolute",opacity:0,width:"".concat(hoverSize,"px"),height:"".concat(hoverSize,"px"),borderRadius:theme.shape.radius.default,content:'""'},theme.transitions.handleMotion("no-preference","reduce"),{transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionProperty:"opacity"}),"&:focus, &:focus-visible":(0,_themes_mixins__WEBPACK_IMPORTED_MODULE_7__.Hi)(theme),"&:focus:not(:focus-visible)":(0,_themes_mixins__WEBPACK_IMPORTED_MODULE_7__.cr)(theme),"&:hover":{"&:before":{backgroundColor:"secondary"===variant?theme.colors.action.hover:_grafana_data__WEBPACK_IMPORTED_MODULE_8__.X4(iconColor,.12),opacity:1}}}),icon:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({verticalAlign:"baseline"})}};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{tooltip:{defaultValue:null,description:"Tooltip content to display on hover and as the aria-label",name:"tooltip",required:!0,type:{name:"PopoverContent"}},tooltipPlacement:{defaultValue:null,description:"Position of the tooltip",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},name:{defaultValue:null,description:"Name of the icon *",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-left"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"expand-arrows-alt"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"compress-arrows"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"exclamation"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"kubernetes"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pause-circle"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'},{value:'"add-user"'},{value:'"attach"'}]}},size:{defaultValue:null,description:"Icon size - sizes xxl and xxxl are deprecated and when used being decreased to xl",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},iconType:{defaultValue:null,description:"Type of the icon - mono or default",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},variant:{defaultValue:null,description:"Variant to change the color of the Icon",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"destructive"'}]}},ariaLabel:{defaultValue:null,description:"@deprecated use aria-label instead",name:"ariaLabel",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Text available only for screen readers. No tooltip will be set in this case.",name:"aria-label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/react-use/esm/misc/util.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{AU:function(){return off},Bd:function(){return isBrowser},lQ:function(){return noop},on:function(){return on}});var noop=function(){};function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)}function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)}var isBrowser="undefined"!=typeof window},"../../node_modules/react-use/esm/useClickAway.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_misc_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react-use/esm/misc/util.js"),defaultEvents=["mousedown","touchstart"];__webpack_exports__.A=function(ref,onClickAway,events){void 0===events&&(events=defaultEvents);var savedCallback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onClickAway);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){savedCallback.current=onClickAway}),[onClickAway]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){for(var handler=function(event){var el=ref.current;el&&!el.contains(event.target)&&savedCallback.current(event)},_i=0,events_1=events;_i<events_1.length;_i++){var eventName=events_1[_i];(0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(document,eventName,handler)}return function(){for(var _i=0,events_2=events;_i<events_2.length;_i++){var eventName=events_2[_i];(0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.AU)(document,eventName,handler)}}}),[events,ref])}},"../../node_modules/react-use/esm/useEffectOnce.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");__webpack_exports__.A=function(effect){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect,[])}},"./src/components/ContextMenu/ContextMenu.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},WithState:function(){return WithState},default:function(){return ContextMenu_story}});var dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),ContextMenu=__webpack_require__("./src/components/ContextMenu/ContextMenu.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),blocks_dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),WithContextMenu=__webpack_require__("./src/components/ContextMenu/WithContextMenu.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"contextmenu",children:"ContextMenu"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A menu displaying additional options when it's not possible to show them at all times due to a space constraint."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["There are controlled and uncontrolled versions of the component available. With the controlled component (",(0,jsx_runtime.jsx)(_components.code,{children:"ContextMenu"}),") the open/close logic needs to be handled separately. Uncontrolled component (",(0,jsx_runtime.jsx)(_components.code,{children:"WithContextMenu"}),") handles this logic internally."]}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"controlled-component",children:"Controlled component"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<ContextMenu\n  x={10}\n  y={11}\n  onClose={() => {}}\n  items={[{ label: 'Test', items: [{ label: 'First' }, { label: 'Second' }] }]}\n/>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"uncontrolled-component",children:"Uncontrolled component"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<WithContextMenu getContextMenuItems={() => [{ label: 'Test', items: [{ label: 'First' }, { label: 'Second' }] }]}>\n  {({ openMenu }) => <IconButton name=\"info-circle\" onClick={openMenu} />}\n</WithContextMenu>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props-of-contextmenu",children:"Props of ContextMenu"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.ov,{of:ContextMenu.t}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props-of-withcontextmenu",children:"Props of WithContextMenu"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.ov,{of:WithContextMenu.n})]})}var MenuGroup=__webpack_require__("./src/components/Menu/MenuGroup.tsx"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),menuItems=[{label:"Test",items:[{label:"First",ariaLabel:"First"},{label:"Second",ariaLabel:"Second"},{label:"Third",ariaLabel:"Third"},{label:"Fourth",ariaLabel:"Fourth"},{label:"Fifth",ariaLabel:"Fifth"}]}];function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var meta={title:"General/ContextMenu",component:ContextMenu.t,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},controls:{exclude:["renderMenuItems","renderHeader","onClose","children"]}},args:{x:200,y:300,focusOnOpen:!0,renderMenuItems:function(){return menuItems.map((function(group,index){return react.createElement(MenuGroup.r,{key:"".concat(group.label).concat(index),label:group.label},group.items.map((function(item){return react.createElement(MenuItem.D,{key:item.label,label:item.label})})))}))}}},renderHeader=function(){return react.createElement("h6",null,"Menu")},Basic=function(args){return react.createElement(ContextMenu.t,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},args),{onClose:function(){return(0,dist.XI)("onClose")("closed menu")},renderHeader:renderHeader}))},WithState=function(args){return react.createElement(WithContextMenu.n,args,(function(param){var openMenu=param.openMenu;return react.createElement(IconButton.K,{name:"info-circle",onClick:openMenu,tooltip:"More information"})}))},ContextMenu_story=meta;Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"(args: ContextMenuProps) => {\n  return <ContextMenu {...args} onClose={() => action('onClose')('closed menu')} renderHeader={renderHeader} />;\n}",...Basic.parameters?.docs?.source}}},WithState.parameters={...WithState.parameters,docs:{...WithState.parameters?.docs,source:{originalSource:'(args: WithContextMenuProps) => {\n  return <WithContextMenu {...args}>\n      {({\n      openMenu\n    }) => <IconButton name="info-circle" onClick={openMenu} tooltip="More information" />}\n    </WithContextMenu>;\n}',...WithState.parameters?.docs?.source}}}}}]);