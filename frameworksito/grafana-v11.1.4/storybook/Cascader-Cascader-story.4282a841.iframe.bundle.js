"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[6996],{"./src/components/Cascader/Cascader.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:function(){return Simple},WithCustomValue:function(){return WithCustomValue},WithDisplayAllSelectedLevels:function(){return WithDisplayAllSelectedLevels},WithInitialValue:function(){return WithInitialValue},WithOptionsStateUpdate:function(){return WithOptionsStateUpdate},default:function(){return Cascader_story}});var react=__webpack_require__("../../node_modules/react/index.js"),Cascader=__webpack_require__("./src/components/Cascader/Cascader.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",p:"p",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"MDX|Cascader",component:Cascader.v}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"cascader",children:"Cascader"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The cascader component is a ",(0,jsx_runtime.jsx)(_components.code,{children:"Select"})," with a cascading flyout menu. When you have lots of options in your select, they can be hard to navigate from a regular dropdown list. In that case you can use the cascader to organize your options into groups hierarchically. Just like in the ",(0,jsx_runtime.jsx)(_components.code,{children:"Select"})," component, the cascader input doubles as a search field to quickly jump to a selection without navigating the list."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["You can either use the ",(0,jsx_runtime.jsx)(_components.code,{children:"Simple"})," cascader component for an empty input as default state or use the ",(0,jsx_runtime.jsx)(_components.code,{children:"initialValue"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"allowCustomValue"})," fields to pre-fill your cascader. Initial value means that one of the options from your cascaded list is pre-selected. Custom value means that apart from existing options from the list, your users can add custom values to the list by typing them in the ",(0,jsx_runtime.jsx)(_components.code,{children:"Select"})," input."]}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:Cascader.v})]})}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var onSelect=function(val){return console.log(val)},options=[{label:"First",value:"1",items:[{label:"Second",value:"2"},{label:"Third",value:"3"},{label:"Fourth",value:"4"}]},{label:"FirstFirst",value:"5"}],meta={title:"Forms/Cascader",component:Cascader.v,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},controls:{exclude:["placeholder","initialValue","changeOnSelect","onSelect","loadData","onChange","onPopupVisibleChange","formatCreateLabel"]}},args:{onSelect:onSelect,options:options},argTypes:{width:{control:{type:"range",min:0,max:70}}}},Template=function(args){return react.createElement(Cascader.v,args)},Simple=Template.bind({});Simple.args={separator:""};var WithInitialValue=Template.bind({});WithInitialValue.args={initialValue:"3"};var WithCustomValue=Template.bind({});WithCustomValue.args={initialValue:"Custom Initial Value",allowCustomValue:!0,formatCreateLabel:function(val){return"Custom Label"+val}};var WithDisplayAllSelectedLevels=Template.bind({});WithDisplayAllSelectedLevels.args={displayAllSelectedLevels:!0,separator:","};var WithOptionsStateUpdate=function(){var _React_useState=_sliced_to_array(react.useState([{label:"Initial state option",value:"initial"}]),2),updatedOptions=_React_useState[0],setOptions=_React_useState[1];return setTimeout((function(){return setOptions(options)}),2e3),react.createElement(Cascader.v,{options:updatedOptions,onSelect:onSelect})},Cascader_story=meta;Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"args => <Cascader {...args} />",...Simple.parameters?.docs?.source}}},WithInitialValue.parameters={...WithInitialValue.parameters,docs:{...WithInitialValue.parameters?.docs,source:{originalSource:"args => <Cascader {...args} />",...WithInitialValue.parameters?.docs?.source}}},WithCustomValue.parameters={...WithCustomValue.parameters,docs:{...WithCustomValue.parameters?.docs,source:{originalSource:"args => <Cascader {...args} />",...WithCustomValue.parameters?.docs?.source}}},WithDisplayAllSelectedLevels.parameters={...WithDisplayAllSelectedLevels.parameters,docs:{...WithDisplayAllSelectedLevels.parameters?.docs,source:{originalSource:"args => <Cascader {...args} />",...WithDisplayAllSelectedLevels.parameters?.docs?.source}}},WithOptionsStateUpdate.parameters={...WithOptionsStateUpdate.parameters,docs:{...WithOptionsStateUpdate.parameters?.docs,source:{originalSource:"() => {\n  const [updatedOptions, setOptions] = React.useState<CascaderOption[]>([{\n    label: 'Initial state option',\n    value: 'initial'\n  }]);\n  setTimeout(() => setOptions(options), 2000);\n  return <Cascader options={updatedOptions} onSelect={onSelect} />;\n}",...WithOptionsStateUpdate.parameters?.docs?.source}}}}}]);