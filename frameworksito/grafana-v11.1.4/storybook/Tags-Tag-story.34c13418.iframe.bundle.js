"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[9695],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{XI:function(){return action}});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"../grafana-data/src/types/icon.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Uo:function(){return toIconName},az:function(){return availableIconsIndex},n6:function(){return isIconName}});var availableIconsIndex={google:!0,microsoft:!0,github:!0,gitlab:!0,okta:!0,discord:!0,hipchat:!0,amazon:!0,"google-hangouts-alt":!0,pagerduty:!0,line:!0,anchor:!0,"adjust-circle":!0,"angle-double-down":!0,"angle-double-right":!0,"angle-double-left":!0,"angle-double-up":!0,"angle-down":!0,"angle-left":!0,"angle-right":!0,"angle-up":!0,"align-left":!0,"align-right":!0,"application-observability":!0,apps:!0,"archive-alt":!0,arrow:!0,"arrow-down":!0,"arrow-from-right":!0,"arrow-left":!0,"arrow-random":!0,"arrow-right":!0,"arrow-to-right":!0,"arrow-up":!0,"arrows-h":!0,"arrows-v":!0,asserts:!0,"expand-arrows":!0,"expand-arrows-alt":!0,at:!0,ai:!0,backward:!0,bars:!0,bell:!0,"bell-slash":!0,bolt:!0,book:!0,bookmark:!0,"book-open":!0,"brackets-curly":!0,bug:!0,building:!0,"calculator-alt":!0,"calendar-alt":!0,"calendar-slash":!0,camera:!0,capture:!0,"channel-add":!0,"chart-line":!0,check:!0,"check-circle":!0,"check-square":!0,circle:!0,"circle-mono":!0,"clipboard-alt":!0,"clock-nine":!0,cloud:!0,"cloud-download":!0,"cloud-upload":!0,"code-branch":!0,cog:!0,columns:!0,"comment-alt":!0,"comment-alt-message":!0,"comment-alt-share":!0,"comments-alt":!0,compass:!0,"compress-arrows":!0,copy:!0,"corner-down-right-alt":!0,"create-dashboard":!0,"credit-card":!0,crosshair:!0,cube:!0,dashboard:!0,database:!0,"dice-three":!0,docker:!0,"document-info":!0,"document-layout-left":!0,"download-alt":!0,draggabledots:!0,edit:!0,"ellipsis-v":!0,enter:!0,envelope:!0,"exchange-alt":!0,"exclamation-triangle":!0,"exclamation-circle":!0,exclamation:!0,"external-link-alt":!0,eye:!0,"eye-slash":!0,"ellipsis-h":!0,"fa fa-spinner":!0,favorite:!0,"file-alt":!0,"file-blank":!0,"file-copy-alt":!0,"file-download":!0,"file-edit-alt":!0,"file-landscape-alt":!0,filter:!0,flip:!0,folder:!0,font:!0,fire:!0,"folder-open":!0,"folder-plus":!0,"folder-upload":!0,forward:!0,"frontend-observability":!0,"gf-bar-alignment-after":!0,"gf-bar-alignment-before":!0,"gf-bar-alignment-center":!0,"gf-glue":!0,"gf-grid":!0,"gf-interpolation-linear":!0,"gf-interpolation-smooth":!0,"gf-interpolation-step-after":!0,"gf-interpolation-step-before":!0,"gf-landscape":!0,"gf-layout-simple":!0,"gf-logs":!0,"gf-ml":!0,"gf-movepane-left":!0,"gf-movepane-right":!0,"gf-portrait":!0,"gf-service-account":!0,"gf-show-context":!0,"gf-pin":!0,"gf-prometheus":!0,"gf-traces":!0,globe:!0,grafana:!0,"graph-bar":!0,heart:!0,"heart-rate":!0,"heart-break":!0,history:!0,"history-alt":!0,home:!0,"home-alt":!0,"horizontal-align-center":!0,"horizontal-align-left":!0,"horizontal-align-right":!0,hourglass:!0,import:!0,info:!0,"info-circle":!0,k6:!0,"key-skeleton-alt":!0,keyboard:!0,kubernetes:!0,"layer-group":!0,"layers-alt":!0,"library-panel":!0,"line-alt":!0,link:!0,"list-ui-alt":!0,"list-ul":!0,"list-ol":!0,lock:!0,"map-marker":!0,"map-marker-plus":!0,"map-marker-minus":!0,message:!0,minus:!0,"minus-circle":!0,"mobile-android":!0,monitor:!0,palette:!0,"panel-add":!0,paragraph:!0,"pathfinder-unite":!0,pause:!0,"pause-circle":!0,pen:!0,percentage:!0,play:!0,plug:!0,plus:!0,"plus-circle":!0,"plus-square":!0,power:!0,"presentation-play":!0,process:!0,"question-circle":!0,"record-audio":!0,repeat:!0,rocket:!0,"ruler-combined":!0,save:!0,search:!0,"search-minus":!0,"search-plus":!0,"share-alt":!0,shield:!0,"shield-exclamation":!0,signal:!0,signin:!0,signout:!0,sitemap:!0,slack:!0,"sliders-v-alt":!0,spinner:!0,"sort-amount-down":!0,"sort-amount-up":!0,"square-shape":!0,star:!0,"step-backward":!0,stopwatch:!0,"stopwatch-slash":!0,sync:!0,"sync-slash":!0,table:!0,"table-collapse-all":!0,"table-expand-all":!0,"tag-alt":!0,"telegram-alt":!0,"text-fields":!0,"thumbs-up":!0,times:!0,"times-circle":!0,"toggle-on":!0,"toggle-off":!0,"trash-alt":!0,unarchive:!0,unlock:!0,upload:!0,user:!0,"users-alt":!0,"user-arrows":!0,"vertical-align-bottom":!0,"vertical-align-center":!0,"vertical-align-top":!0,"web-section-alt":!0,"wrap-text":!0,rss:!0,x:!0,"add-user":!0,attach:!0};function isIconName(iconName){return!(!iconName||"string"!=typeof iconName)&&iconName in availableIconsIndex}function toIconName(iconName){if(isIconName(iconName))return iconName}},"./src/components/Icon/Icon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return Icon}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/react-inlinesvg/esm/index.js"),_grafana_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../grafana-data/src/types/icon.ts"),_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Icon/utils.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var getIconStyles=function(theme){return{icon:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({display:"inline-block",fill:"currentColor",flexShrink:0,label:"Icon",lineHeight:0,verticalAlign:"middle"}),orange:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({fill:theme.v1.palette.orange})}},Icon=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(_param,ref){var _param_size=_param.size,size=void 0===_param_size?"md":_param_size,_param_type=_param.type,type=void 0===_param_type?"default":_param_type,name=_param.name,className=_param.className,style=_param.style,_param_title=_param.title,title=void 0===_param_title?"":_param_title,rest=_object_without_properties(_param,["size","type","name","className","style","title"]),styles=(0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.of)(getIconStyles);(0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.n6)(name)||console.warn("Icon component passed an invalid icon name",name);var iconName="fa fa-spinner"===name?"spinner":name,iconRoot=(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Wj)(),svgSize=(0,_utils__WEBPACK_IMPORTED_MODULE_4__.cs)(size),svgHgt=svgSize,svgWid=name.startsWith("gf-bar-align")?16:name.startsWith("gf-interp")?30:svgSize,subDir=(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Xi)(iconName,type),svgPath="".concat(iconRoot).concat(subDir,"/").concat(iconName,".svg"),composedClassName=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.icon,className,"mono"===type?_define_property({},styles.orange,"favorite"===name):"","spinner"===iconName&&"fa-spin");return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__.A,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({"aria-hidden":!(void 0!==rest.tabIndex||title||rest["aria-label"]||rest["aria-labelledby"]||rest["aria-describedby"]),innerRef:ref,src:svgPath,width:svgWid,height:svgHgt,title:title,className:composedClassName,style:style},rest))}));Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-left"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"expand-arrows-alt"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"compress-arrows"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"exclamation"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"kubernetes"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pause-circle"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'},{value:'"add-user"'},{value:'"attach"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},title:{defaultValue:{value:""},description:"Give your icon a semantic meaning. The icon will be hidden from screen readers, unless this prop or an aria-label is provided.",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Wj:function(){return getIconRoot},Xi:function(){return getIconSubDir},cs:function(){return getSvgSize}});var iconRoot,alwaysMonoIcons=["grafana","favorite","heart-break","heart","panel-add","library-panel","circle-mono"];function getIconSubDir(name,type){return(null==name?void 0:name.startsWith("gf-"))?"custom":alwaysMonoIcons.includes(name)?"mono":"default"===type?"unicons":"solid"===type?"solid":"mono"}function getSvgSize(size){switch(size){case"xs":return 12;case"sm":return 14;case"md":return 16;case"lg":return 18;case"xl":return 24;case"xxl":return 36;case"xxxl":return 48}}function getIconRoot(){if(iconRoot)return iconRoot;var grafanaPublicPath="undefined"!=typeof window&&window.__grafana_public_path__;return iconRoot=grafanaPublicPath?grafanaPublicPath+"img/icons/":"public/img/icons/"}},"./src/components/Tags/Tag.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return Tag}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react-loading-skeleton/dist/index.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/tags.ts"),_utils_skeleton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/skeleton.tsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TagComponent=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_param,ref){var name=_param.name,onClick=_param.onClick,icon=_param.icon,className=_param.className,colorIndex=_param.colorIndex,rest=_object_without_properties(_param,["name","onClick","icon","className","colorIndex"]),theme=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.$j)(),styles=getTagStyles(theme,name,colorIndex),classes=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.wrapper,className,_define_property({},styles.hover,void 0!==onClick));return onClick?react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",_object_spread_props(_object_spread({},rest),{className:classes,onClick:function(event){event.preventDefault(),event.stopPropagation(),null==onClick||onClick(name,event)},ref:ref}),icon&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.I,{name:icon}),name):react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",_object_spread_props(_object_spread({},rest),{className:classes,ref:ref}),icon&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.I,{name:icon}),name)}));TagComponent.displayName="Tag";var Tag=(0,_utils_skeleton__WEBPACK_IMPORTED_MODULE_5__.j)(TagComponent,(function(param){var rootProps=param.rootProps,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(getSkeletonStyles);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__.A,_object_spread({width:60,height:22,containerClassName:styles.container},rootProps))})),getSkeletonStyles=function(){return{container:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({lineHeight:1})}},getTagStyles=function(theme,name,colorIndex){var colors;return colors=void 0===colorIndex?(0,_utils__WEBPACK_IMPORTED_MODULE_6__.MC)(name):(0,_utils__WEBPACK_IMPORTED_MODULE_6__.yC)(colorIndex),{wrapper:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({appearance:"none",borderStyle:"none",fontWeight:theme.typography.fontWeightMedium,fontSize:theme.typography.size.sm,lineHeight:theme.typography.bodySmall.lineHeight,verticalAlign:"baseline",backgroundColor:colors.color,color:theme.v1.palette.gray98,whiteSpace:"nowrap",textShadow:"none",padding:"3px 6px",borderRadius:theme.shape.radius.default}),hover:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({"&:hover":{opacity:.85,cursor:"pointer"}})}};try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{name:{defaultValue:null,description:"Name of the tag to display",name:"name",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-left"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"expand-arrows-alt"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"compress-arrows"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"exclamation"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"kubernetes"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pause-circle"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'},{value:'"add-user"'},{value:'"attach"'}]}},colorIndex:{defaultValue:null,description:"Use constant color from TAG_COLORS. Using index instead of color directly so we can match other styling.",name:"colorIndex",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"OnTagClick"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tags/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/Tags/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/tags.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{MC:function(){return getTagColorsFromName},yC:function(){return getTagColor}});var TAG_COLORS=["#D32D20","#1E72B8","#B240A2","#705DA0","#466803","#497A3C","#3D71AA","#B15415","#890F02","#6E6E6E","#0A437C","#6D1F62","#584477","#4C7A3F","#2F4F4F","#BF1B00","#7662B1","#8A2EB8","#517A00","#000000","#3F6833","#2F575E","#99440A","#AE561A","#0E4AB4","#58140C","#052B51","#511749","#3F2B5B"],TAG_BORDER_COLORS=["#FF7368","#459EE7","#E069CF","#9683C6","#6C8E29","#76AC68","#6AA4E2","#E7823D","#AF3528","#9B9B9B","#3069A2","#934588","#7E6A9D","#88C477","#557575","#E54126","#A694DD","#B054DE","#8FC426","#262626","#658E59","#557D84","#BF6A30","#FF9B53","#3470DA","#7E3A32","#2B5177","#773D6F","#655181"];function getTagColorsFromName(){var index=function getTagColorIndexFromName(){var hash=function djb2(str){for(var hash=5381,i=0;i<str.length;i++)hash=(hash<<5)+hash+str.charCodeAt(i);return hash}((arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase());return Math.abs(hash%TAG_COLORS.length)}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"");return getTagColor(index)}function getTagColor(index){return{color:TAG_COLORS[index],borderColor:TAG_BORDER_COLORS[index]}}},"../../node_modules/react-loading-skeleton/dist/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return Skeleton}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const SkeletonThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),defaultEnableAnimation=!0;function styleOptionsToCssProperties({baseColor:baseColor,highlightColor:highlightColor,width:width,height:height,borderRadius:borderRadius,circle:circle,direction:direction,duration:duration,enableAnimation:enableAnimation=defaultEnableAnimation}){const style={};return"rtl"===direction&&(style["--animation-direction"]="reverse"),"number"==typeof duration&&(style["--animation-duration"]=`${duration}s`),enableAnimation||(style["--pseudo-element-display"]="none"),"string"!=typeof width&&"number"!=typeof width||(style.width=width),"string"!=typeof height&&"number"!=typeof height||(style.height=height),"string"!=typeof borderRadius&&"number"!=typeof borderRadius||(style.borderRadius=borderRadius),circle&&(style.borderRadius="50%"),void 0!==baseColor&&(style["--base-color"]=baseColor),void 0!==highlightColor&&(style["--highlight-color"]=highlightColor),style}function Skeleton({count:count=1,wrapper:Wrapper,className:customClassName,containerClassName:containerClassName,containerTestId:containerTestId,circle:circle=!1,style:styleProp,...originalPropsStyleOptions}){var _a,_b,_c;const contextStyleOptions=react__WEBPACK_IMPORTED_MODULE_0__.useContext(SkeletonThemeContext),propsStyleOptions={...originalPropsStyleOptions};for(const[key,value]of Object.entries(originalPropsStyleOptions))void 0===value&&delete propsStyleOptions[key];const styleOptions={...contextStyleOptions,...propsStyleOptions,circle:circle},style={...styleProp,...styleOptionsToCssProperties(styleOptions)};let className="react-loading-skeleton";customClassName&&(className+=` ${customClassName}`);const inline=null!==(_a=styleOptions.inline)&&void 0!==_a&&_a,elements=[],countCeil=Math.ceil(count);for(let i=0;i<countCeil;i++){let thisStyle=style;if(countCeil>count&&i===countCeil-1){const width=null!==(_b=thisStyle.width)&&void 0!==_b?_b:"100%",fractionalPart=count%1,fractionalWidth="number"==typeof width?width*fractionalPart:`calc(${width} * ${fractionalPart})`;thisStyle={...thisStyle,width:fractionalWidth}}const skeletonSpan=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:className,style:thisStyle,key:i},"‌");inline?elements.push(skeletonSpan):elements.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:i},skeletonSpan,react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null)))}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:containerClassName,"data-testid":containerTestId,"aria-live":"polite","aria-busy":null!==(_c=styleOptions.enableAnimation)&&void 0!==_c?_c:defaultEnableAnimation},Wrapper?elements.map(((el,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,{key:i},el))):elements)}},"./src/components/Tags/Tag.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Single:function(){return Single},default:function(){return Tag_story}});var dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),Tag=__webpack_require__("./src/components/Tags/Tag.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),blocks_dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks_dist.W8,{title:"MDX|Tag",component:Tag.v}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"tag",children:"Tag"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Used for displaying metadata, for example to add more details to search results. Background and border colors are generated from the tag name."}),"\n",(0,jsx_runtime.jsx)(blocks_dist.lN,{children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Tag.v,{name:"Tag",onClick:name=>console.log(name)})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Tag } from '@grafana/ui';\n\n<Tag name=\"Tag\" onClick={(name) => console.log(name)} />;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.ov,{of:Tag.v})]})}var meta={title:"Forms/Tags/Tag",component:Tag.v,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},controls:{exclude:["onClick"]}},args:{name:"Tag",colorIndex:0}},Single=function(args){return react.createElement(Tag.v,{name:args.name,colorIndex:args.colorIndex,onClick:(0,dist.XI)("Tag clicked"),icon:args.icon})},Tag_story=meta;Single.parameters={...Single.parameters,docs:{...Single.parameters?.docs,source:{originalSource:"args => {\n  return <Tag name={args.name} colorIndex={args.colorIndex} onClick={action('Tag clicked')} icon={args.icon} />;\n}",...Single.parameters?.docs?.source}}}}}]);