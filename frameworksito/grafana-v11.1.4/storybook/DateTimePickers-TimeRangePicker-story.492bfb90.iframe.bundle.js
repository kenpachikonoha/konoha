"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[3982],{"./src/components/DateTimePickers/TimeRangePicker.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic}});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_grafana_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../grafana-data/src/datetime/moment_wrapper.ts"),_grafana_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../grafana-data/src/types/time.ts"),_grafana_ui__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DateTimePickers/TimeRangePicker.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupported_iterable_to_array(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupported_iterable_to_array(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_array_like_to_array(o,minLen):void 0}}var to=(0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.KQ)(),from=to.subtract(6,"h"),meta={title:"Pickers and Editors/TimePickers/TimeRangePicker",component:_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.$6,args:{value:{from:from,to:to,raw:{from:"now-6h",to:"now"}},timeZone:_grafana_data__WEBPACK_IMPORTED_MODULE_5__.lE,history:[]},parameters:{controls:{exclude:["onChange","onChangeTimeZone","onChangeFiscalYearStartMonth","onMoveBackward","onMoveForward","onZoom","timeSyncButton"]}}},Basic=function(args){var updateArgs=_sliced_to_array((0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)(),2)[1];return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.$6,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},args),{onChange:function(value){(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onChange")(value),updateArgs({value:value,history:args.history?_to_consumable_array(args.history).concat([value]):[value]})},onChangeTimeZone:function(timeZone){(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onChangeTimeZone")(timeZone),updateArgs({timeZone:timeZone})},onMoveBackward:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onMoveBackward"),onMoveForward:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onMoveForward"),onZoom:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onZoom")}))};__webpack_exports__.default=meta,Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => {\n  const [, updateArgs] = useArgs();\n  return <TimeRangePicker {...args} onChange={value => {\n    action('onChange')(value);\n    updateArgs({\n      value,\n      history: args.history ? [...args.history, value] : [value]\n    });\n  }} onChangeTimeZone={timeZone => {\n    action('onChangeTimeZone')(timeZone);\n    updateArgs({\n      timeZone\n    });\n  }} onMoveBackward={action('onMoveBackward')} onMoveForward={action('onMoveForward')} onZoom={action('onZoom')} />;\n}",...Basic.parameters?.docs?.source}}}}}]);