"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[9846],{"../grafana-data/src/utils/deprecationWarning.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return deprecationWarning}});var history={},deprecationWarning=function(file,oldName,newName){var message="[Deprecation warning] ".concat(file,": ").concat(oldName," is deprecated");newName&&(message+=". Use ".concat(newName," instead"));var now=Date.now(),last=history[message];(!last||now-last>1e4)&&(console.warn(message),history[message]=now)}},"./src/components/FileDropzone/FileListItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return FileListItem}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_grafana_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../grafana-data/src/valueFormats/valueFormats.ts"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),_utils_file__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/file.ts"),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Button/Button.tsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Icon/Icon.tsx"),_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/IconButton/IconButton.tsx"),REMOVE_FILE="Remove file";function FileListItem(param){var customFile=param.file,removeFile=param.removeFile,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(getStyles),file=customFile.file,progress=customFile.progress,error=customFile.error,abortUpload=customFile.abortUpload,retryUpload=customFile.retryUpload,valueFormat=(0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.j_)("decbytes")(file.size);return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:styles.fileListContainer},react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{className:styles.fileNameWrapper},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__.I,{name:"file-blank",size:"lg","aria-hidden":!0}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{className:styles.padding},(0,_utils_file__WEBPACK_IMPORTED_MODULE_7__.i)(file.name)),react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,(0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.cN)(valueFormat))),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:styles.fileNameWrapper},error?react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{className:styles.error},error.message),retryUpload&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__.K,{name:"sync",tooltip:"Retry",tooltipPlacement:"top",onClick:retryUpload}),removeFile&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__.K,{className:retryUpload?styles.marginLeft:"",name:"trash-alt",onClick:function(){return removeFile(customFile)},tooltip:REMOVE_FILE})):progress&&file.size>progress?react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("progress",{className:styles.progressBar,max:file.size,value:progress}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{className:styles.paddingLeft},Math.round(progress/file.size*100),"%"),abortUpload&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__.$n,{variant:"secondary",type:"button",fill:"text",onClick:abortUpload},"Cancel upload")):removeFile&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__.K,{name:"trash-alt",onClick:function(){return removeFile(customFile)},tooltip:REMOVE_FILE,tooltipPlacement:"top"})))}function getStyles(theme){return{fileListContainer:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:theme.spacing(2),border:"1px dashed ".concat(theme.colors.border.medium),backgroundColor:"".concat(theme.colors.background.secondary),marginTop:theme.spacing(1)}),fileNameWrapper:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({display:"flex",flexDirection:"row",alignItems:"center"}),padding:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({padding:theme.spacing(0,1)}),paddingLeft:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({paddingLeft:theme.spacing(2)}),marginLeft:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({marginLeft:theme.spacing(1)}),error:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({paddingRight:theme.spacing(2),color:theme.colors.error.text}),progressBar:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({borderRadius:theme.shape.radius.default,height:"4px","::-webkit-progress-bar":{backgroundColor:theme.colors.border.weak,borderRadius:theme.shape.radius.default},"::-webkit-progress-value":{backgroundColor:theme.colors.primary.main,borderRadius:theme.shape.radius.default}})}}try{FileListItem.displayName="FileListItem",FileListItem.__docgenInfo={description:"",displayName:"FileListItem",props:{file:{defaultValue:null,description:"",name:"file",required:!0,type:{name:"DropzoneFile"}},removeFile:{defaultValue:null,description:"",name:"removeFile",required:!1,type:{name:"((file: DropzoneFile) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileDropzone/FileListItem.tsx#FileListItem"]={docgenInfo:FileListItem.__docgenInfo,name:"FileListItem",path:"src/components/FileDropzone/FileListItem.tsx#FileListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconButton/IconButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{K:function(){return IconButton}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_grafana_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../grafana-data/src/utils/deprecationWarning.ts"),_grafana_data__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../grafana-data/src/themes/colorManipulator.ts"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/ThemeContext.tsx"),_themes_mixins__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/themes/mixins.ts"),_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Button/Button.tsx"),_Icon_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Icon/utils.ts"),_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Tooltip/Tooltip.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var IconButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(props,ref){var limitedIconSize,_props_size=props.size,size=void 0===_props_size?"md":_props_size,_props_variant=props.variant,variant=void 0===_props_variant?"secondary":_props_variant;"xxl"===size||"xxxl"===size?((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.l)("IconButton",'size="xxl" and size="xxxl"','size="xl"'),limitedIconSize="xl"):limitedIconSize=size;var ariaLabel,buttonRef,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getStyles,limitedIconSize,variant);if("tooltip"in props){var tooltip=props.tooltip;ariaLabel="string"==typeof tooltip?tooltip:void 0}else if("ariaLabel"in props||"aria-label"in props){var deprecatedAriaLabel=props.ariaLabel;ariaLabel=props["aria-label"]||deprecatedAriaLabel,buttonRef=ref}if("tooltip"in props){var name=props.name,iconType=props.iconType,className=props.className,tooltip1=props.tooltip,tooltipPlacement=props.tooltipPlacement,restProps=_object_without_properties(props,["name","iconType","className","tooltip","tooltipPlacement"]);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_4__.m,{ref:ref,content:tooltip1,placement:tooltipPlacement},react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",_object_spread_props(_object_spread({},restProps),{ref:buttonRef,"aria-label":ariaLabel,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.button,className),type:"button"}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.Jt,{icon:name,size:limitedIconSize,className:styles.icon,iconType:iconType})))}var name1=props.name,iconType1=props.iconType,className1=props.className,restProps1=_object_without_properties(props,["name","iconType","className"]);return react__WEBPACK_IMPORTED_MODULE_1__.createElement("button",_object_spread_props(_object_spread({},restProps1),{ref:buttonRef,"aria-label":ariaLabel,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.button,className1),type:"button"}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__.Jt,{icon:name1,size:limitedIconSize,className:styles.icon,iconType:iconType1}))}));IconButton.displayName="IconButton";var getStyles=function(theme,size,variant){var hoverSize=(0,_Icon_utils__WEBPACK_IMPORTED_MODULE_6__.cs)(size)+theme.spacing.gridSize,iconColor=theme.colors.text.primary;return"primary"===variant?iconColor=theme.colors.primary.text:"destructive"===variant&&(iconColor=theme.colors.error.text),{button:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({zIndex:0,position:"relative",margin:"0 ".concat(theme.spacing.x0_5," 0 0"),boxShadow:"none",border:"none",display:"inline-flex",background:"transparent",justifyContent:"center",alignItems:"center",padding:0,color:iconColor,"&[disabled], &:disabled":{cursor:"not-allowed",color:theme.colors.action.disabledText,opacity:.65},"&:before":_define_property({zIndex:-1,position:"absolute",opacity:0,width:"".concat(hoverSize,"px"),height:"".concat(hoverSize,"px"),borderRadius:theme.shape.radius.default,content:'""'},theme.transitions.handleMotion("no-preference","reduce"),{transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionProperty:"opacity"}),"&:focus, &:focus-visible":(0,_themes_mixins__WEBPACK_IMPORTED_MODULE_7__.Hi)(theme),"&:focus:not(:focus-visible)":(0,_themes_mixins__WEBPACK_IMPORTED_MODULE_7__.cr)(theme),"&:hover":{"&:before":{backgroundColor:"secondary"===variant?theme.colors.action.hover:_grafana_data__WEBPACK_IMPORTED_MODULE_8__.X4(iconColor,.12),opacity:1}}}),icon:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({verticalAlign:"baseline"})}};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{tooltip:{defaultValue:null,description:"Tooltip content to display on hover and as the aria-label",name:"tooltip",required:!0,type:{name:"PopoverContent"}},tooltipPlacement:{defaultValue:null,description:"Position of the tooltip",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},name:{defaultValue:null,description:"Name of the icon *",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-left"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"expand-arrows-alt"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"compress-arrows"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"exclamation"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"kubernetes"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pause-circle"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'},{value:'"add-user"'},{value:'"attach"'}]}},size:{defaultValue:null,description:"Icon size - sizes xxl and xxxl are deprecated and when used being decreased to xl",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},iconType:{defaultValue:null,description:"Type of the icon - mono or default",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},variant:{defaultValue:null,description:"Variant to change the color of the Icon",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"destructive"'}]}},ariaLabel:{defaultValue:null,description:"@deprecated use aria-label instead",name:"ariaLabel",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Text available only for screen readers. No tooltip will be set in this case.",name:"aria-label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/file.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function trimFileName(fileName){var delimiter=fileName.lastIndexOf("."),extension=fileName.substring(delimiter),file=fileName.substring(0,delimiter);return file.length<16?fileName:"".concat(file.substring(0,16),"...").concat(extension)}__webpack_require__.d(__webpack_exports__,{i:function(){return trimFileName}})},"./src/components/FileDropzone/FileDropzone.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},OnlyAcceptingCertainFiles:function(){return OnlyAcceptingCertainFiles},WithCustomFileList:function(){return WithCustomFileList},default:function(){return FileDropzone_story}});var react=__webpack_require__("../../node_modules/react/index.js"),emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),lodash=__webpack_require__("../../node_modules/lodash/lodash.js"),es=__webpack_require__("../../node_modules/react-dropzone/dist/es/index.js"),utils=__webpack_require__("../../node_modules/react-dropzone/dist/es/utils/index.js"),valueFormats=__webpack_require__("../grafana-data/src/valueFormats/valueFormats.ts"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),Alert=__webpack_require__("./src/components/Alert/Alert.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),FileListItem=__webpack_require__("./src/components/FileDropzone/FileListItem.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupported_iterable_to_array(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupported_iterable_to_array(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_array_like_to_array(o,minLen):void 0}}function FileDropzone(param){var errors,options=param.options,children=param.children,readAs=param.readAs,onLoad=param.onLoad,fileListRenderer=param.fileListRenderer,onFileRemove=param.onFileRemove,_useState=_sliced_to_array((0,react.useState)([]),2),files=_useState[0],setFiles=_useState[1],_useState1=_sliced_to_array((0,react.useState)([]),2),fileErrors=_useState1[0],setErrorMessages=_useState1[1],formattedSize=(0,valueFormats.j_)("decbytes")((null==options?void 0:options.maxSize)?null==options?void 0:options.maxSize:0),setFileProperty=(0,react.useCallback)((function(customFile,action){setFiles((function(oldFiles){return oldFiles.map((function(oldFile){return oldFile.id===customFile.id?(action(oldFile),oldFile):oldFile}))}))}),[]),onDrop=(0,react.useCallback)((function(acceptedFiles,rejectedFiles,event){var customFiles=acceptedFiles.map(mapToCustomFile);if(!1===(null==options?void 0:options.multiple)?setFiles(customFiles):setFiles((function(oldFiles){return _to_consumable_array(oldFiles).concat(_to_consumable_array(customFiles))})),setErrors(rejectedFiles),null==options?void 0:options.onDrop)options.onDrop(acceptedFiles,rejectedFiles,event);else{var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_loop=function(){var customFile=_step.value,reader=new FileReader,read=function(){readAs?reader[readAs](customFile.file):reader.readAsText(customFile.file)};setFileProperty(customFile,(function(fileToModify){fileToModify.abortUpload=function(){reader.abort()},fileToModify.retryUpload=function(){setFileProperty(customFile,(function(fileToModify){fileToModify.error=null,fileToModify.progress=void 0})),read()}})),reader.onabort=function(){setFileProperty(customFile,(function(fileToModify){fileToModify.error=new DOMException("Aborted")}))},reader.onprogress=function(event){setFileProperty(customFile,(function(fileToModify){fileToModify.progress=event.loaded}))},reader.onload=function(){null==onLoad||onLoad(reader.result)},reader.onerror=function(){setFileProperty(customFile,(function(fileToModify){fileToModify.error=reader.error}))},read()},_iterator=customFiles[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)_loop()}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}}}),[onLoad,options,readAs,setFileProperty]),removeFile=function(file){var newFiles=files.filter((function(f){return file.id!==f.id}));setFiles(newFiles),null==onFileRemove||onFileRemove(file)},_useDropzone=(0,es.VB)(_object_spread_props(_object_spread({},options),{useFsAccessApi:!1,onDrop:onDrop,accept:transformAcceptToNewFormat(null==options?void 0:options.accept)})),getRootProps=_useDropzone.getRootProps,getInputProps=_useDropzone.getInputProps,isDragActive=_useDropzone.isDragActive,styles=getStyles((0,ThemeContext.$j)(),isDragActive),fileList=files.map((function(file){return fileListRenderer?fileListRenderer(file,removeFile):react.createElement(FileListItem.I,{key:file.id,file:file,removeFile:removeFile})})),setErrors=function(rejectedFiles){var errors=[];rejectedFiles.map((function(rejectedFile){rejectedFile.errors.map((function(newError){-1===errors.findIndex((function(presentError){return presentError.code===newError.code&&presentError.message===newError.message}))&&errors.push(newError)}))})),setErrorMessages(errors)},clearAlert=function(){setErrorMessages([])};return react.createElement("div",{className:styles.container},react.createElement("div",_object_spread({"data-testid":"dropzone"},getRootProps({className:styles.dropzone})),react.createElement("input",getInputProps()),null!=children?children:react.createElement(FileDropzoneDefaultChildren,{primaryText:getPrimaryText(files,options)})),fileErrors.length>0&&(errors=fileErrors,react.createElement("div",{className:styles.errorAlert},react.createElement(Alert.F,{title:"Upload failed",severity:"error",onRemove:clearAlert},errors.map((function(error){return error.code===utils.O4.FileTooLarge?react.createElement("div",{key:error.message+error.code},"File is larger than ",(0,valueFormats.cN)(formattedSize)):react.createElement("div",{key:error.message+error.code},error.message)}))))),react.createElement("small",{className:(0,emotion_css_esm.cx)(styles.small,styles.acceptContainer)},(null==options?void 0:options.maxSize)&&"Max file size: ".concat((0,valueFormats.cN)(formattedSize)),(null==options?void 0:options.maxSize)&&(null==options?void 0:options.accept)&&react.createElement("span",{className:styles.acceptSeparator},"|"),(null==options?void 0:options.accept)&&function getAcceptedFileTypeText(accept){if((0,lodash.isString)(accept))return"Accepted file type: ".concat(accept);if(Array.isArray(accept))return"Accepted file types: ".concat(accept.join(", "));return"Accepted file types: ".concat(Object.values(accept).flat().join(", "))}(options.accept)),fileList)}function getMimeTypeByExtension(ext){return["txt","json","csv","xls","yml"].some((function(e){return ext.match(e)}))?"text/plain":"application/octet-stream"}function transformAcceptToNewFormat(accept){return(0,lodash.isString)(accept)?_define_property({},getMimeTypeByExtension(accept),[accept]):Array.isArray(accept)?accept.reduce((function(prev,current){var mime=getMimeTypeByExtension(current);return prev[mime]=prev[mime]?_to_consumable_array(prev[mime]).concat([current]):[current],prev}),{}):accept}function FileDropzoneDefaultChildren(param){var _param_primaryText=param.primaryText,primaryText=void 0===_param_primaryText?"Drop file here or click to upload":_param_primaryText,_param_secondaryText=param.secondaryText,secondaryText=void 0===_param_secondaryText?"":_param_secondaryText,styles=getStyles((0,ThemeContext.$j)());return react.createElement("div",{className:(0,emotion_css_esm.cx)(styles.defaultDropZone),"data-testid":"file-drop-zone-default-children"},react.createElement(Icon.I,{className:(0,emotion_css_esm.cx)(styles.icon),name:"upload",size:"xl"}),react.createElement("h6",{className:(0,emotion_css_esm.cx)(styles.primaryText)},primaryText),react.createElement("small",{className:styles.small},secondaryText))}function getPrimaryText(files,options){return void 0===(null==options?void 0:options.multiple)||(null==options?void 0:options.multiple)?"Upload file":files.length?"Replace file":"Upload file"}function mapToCustomFile(file){return{id:(0,lodash.uniqueId)("file"),file:file,error:null}}function getStyles(theme,isDragActive){return{container:(0,emotion_css_esm.AH)({display:"flex",flexDirection:"column",width:"100%",padding:theme.spacing(2),borderRadius:theme.shape.radius.default,border:"1px dashed ".concat(theme.colors.border.strong),backgroundColor:isDragActive?theme.colors.background.secondary:theme.colors.background.primary,cursor:"pointer",alignItems:"center",justifyContent:"center"}),dropzone:(0,emotion_css_esm.AH)({height:"100%",width:"100%",display:"flex",flexDirection:"column"}),defaultDropZone:(0,emotion_css_esm.AH)({textAlign:"center"}),icon:(0,emotion_css_esm.AH)({marginBottom:theme.spacing(1)}),primaryText:(0,emotion_css_esm.AH)({marginBottom:theme.spacing(1)}),acceptContainer:(0,emotion_css_esm.AH)({textAlign:"center",margin:0}),acceptSeparator:(0,emotion_css_esm.AH)({margin:"0 ".concat(theme.spacing(1))}),small:(0,emotion_css_esm.AH)({color:theme.colors.text.secondary}),errorAlert:(0,emotion_css_esm.AH)({paddingTop:"10px"})}}try{FileDropzone.displayName="FileDropzone",FileDropzone.__docgenInfo={description:"",displayName:"FileDropzone",props:{children:{defaultValue:null,description:"Use the children property to have custom dropzone view.",name:"children",required:!1,type:{name:"ReactNode"}},options:{defaultValue:{value:"{\nmaxSize: Infinity,\nminSize: 0,\nmultiple: true,\nuseFsAccessApi: false,\nmaxFiles: 0,\n}"},description:"Use this property to override the default behaviour for the react-dropzone options.",name:"options",required:!1,type:{name:"BackwardsCompatibleDropzoneOptions"}},readAs:{defaultValue:null,description:"Use this to change the FileReader's read.",name:"readAs",required:!1,type:{name:"enum",value:[{value:'"readAsArrayBuffer"'},{value:'"readAsText"'},{value:'"readAsBinaryString"'},{value:'"readAsDataURL"'}]}},onLoad:{defaultValue:null,description:"Use the onLoad function to get the result from FileReader.",name:"onLoad",required:!1,type:{name:"((result: string | ArrayBuffer | null) => void)"}},fileListRenderer:{defaultValue:null,description:"The fileListRenderer property can be used to overwrite the list of files. To not to show\nany list return null in the function.",name:"fileListRenderer",required:!1,type:{name:"((file: DropzoneFile, removeFile: (file: DropzoneFile) => void) => ReactNode)"}},onFileRemove:{defaultValue:null,description:"",name:"onFileRemove",required:!1,type:{name:"((file: DropzoneFile) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileDropzone/FileDropzone.tsx#FileDropzone"]={docgenInfo:FileDropzone.__docgenInfo,name:"FileDropzone",path:"src/components/FileDropzone/FileDropzone.tsx#FileDropzone"})}catch(__react_docgen_typescript_loader_error){}try{getMimeTypeByExtension.displayName="getMimeTypeByExtension",getMimeTypeByExtension.__docgenInfo={description:"",displayName:"getMimeTypeByExtension",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileDropzone/FileDropzone.tsx#getMimeTypeByExtension"]={docgenInfo:getMimeTypeByExtension.__docgenInfo,name:"getMimeTypeByExtension",path:"src/components/FileDropzone/FileDropzone.tsx#getMimeTypeByExtension"})}catch(__react_docgen_typescript_loader_error){}try{transformAcceptToNewFormat.displayName="transformAcceptToNewFormat",transformAcceptToNewFormat.__docgenInfo={description:"",displayName:"transformAcceptToNewFormat",props:{get:{defaultValue:null,description:"@deprecated Use [idx]. This only exists to help migrate Vector to Array",name:"get",required:!0,type:{name:"string[] | ((idx: number) => string)"}},set:{defaultValue:null,description:"@deprecated Use [idx]. This only exists to help migrate Vector to Array",name:"set",required:!0,type:{name:"string[] | ((idx: number, value: string) => void)"}},add:{defaultValue:null,description:"@deprecated Use .push(value). This only exists to help migrate Vector to Array",name:"add",required:!0,type:{name:"string[] | ((value: string) => void)"}},toArray:{defaultValue:null,description:"@deprecated this is not necessary.  This only exists to help migrate Vector to Array",name:"toArray",required:!0,type:{name:"string[] | (() => string[])"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileDropzone/FileDropzone.tsx#transformAcceptToNewFormat"]={docgenInfo:transformAcceptToNewFormat.__docgenInfo,name:"transformAcceptToNewFormat",path:"src/components/FileDropzone/FileDropzone.tsx#transformAcceptToNewFormat"})}catch(__react_docgen_typescript_loader_error){}try{FileDropzoneDefaultChildren.displayName="FileDropzoneDefaultChildren",FileDropzoneDefaultChildren.__docgenInfo={description:"",displayName:"FileDropzoneDefaultChildren",props:{primaryText:{defaultValue:{value:"Drop file here or click to upload"},description:"",name:"primaryText",required:!1,type:{name:"string"}},secondaryText:{defaultValue:{value:""},description:"",name:"secondaryText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileDropzone/FileDropzone.tsx#FileDropzoneDefaultChildren"]={docgenInfo:FileDropzoneDefaultChildren.__docgenInfo,name:"FileDropzoneDefaultChildren",path:"src/components/FileDropzone/FileDropzone.tsx#FileDropzoneDefaultChildren"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"filedropzone",children:"FileDropzone"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A dropzone component to use for file uploads."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { FileDropzone } from '@grafana/ui';\n\n<FileDropzone onLoad={(result) => console.log(result)} />;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:FileDropzone})]})}var meta={title:"Forms/FileDropzone",component:FileDropzone,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}},Template=function(args){return react.createElement(FileDropzone,args)},Basic=Template.bind({}),WithCustomFileList=Template.bind({});WithCustomFileList.args={fileListRenderer:function(file){return react.createElement("div",null,"Custom rendered item ",file.file.name)}};var OnlyAcceptingCertainFiles=Template.bind({});OnlyAcceptingCertainFiles.args={options:{accept:{"application/json":[".json"]}}};var FileDropzone_story=meta;Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => <FileDropzone {...args} />",...Basic.parameters?.docs?.source}}},WithCustomFileList.parameters={...WithCustomFileList.parameters,docs:{...WithCustomFileList.parameters?.docs,source:{originalSource:"args => <FileDropzone {...args} />",...WithCustomFileList.parameters?.docs?.source}}},OnlyAcceptingCertainFiles.parameters={...OnlyAcceptingCertainFiles.parameters,docs:{...OnlyAcceptingCertainFiles.parameters?.docs,source:{originalSource:"args => <FileDropzone {...args} />",...OnlyAcceptingCertainFiles.parameters?.docs?.source}}}}}]);