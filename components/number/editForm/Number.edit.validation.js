"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
  key: 'unique',
  ignore: true
}, {
  key: 'validate.minLength',
  ignore: true
}, {
  key: 'validate.maxLength',
  ignore: true
}, {
  key: 'validate.minWords',
  ignore: true
}, {
  key: 'validate.maxWords',
  ignore: true
}, {
  key: 'validate.pattern',
  ignore: true
}, {
  type: 'number',
  label: 'Giá Trị Tối Thiểu',
  key: 'validate.min',
  input: true,
  placeholder: 'Giá Trị Tối Thiểu',
  tooltip: 'Giá trị tối thiểu mà trường này phải có trước khi biểu mẫu có thể được gửi đi.',
  weight: 150
}, {
  type: 'number',
  label: 'Giá Trị Tối Đa',
  key: 'validate.max',
  input: true,
  placeholder: 'Giá Trị Tối Đa',
  tooltip: 'The maximum value this field can have before the form can be submitted.',
  weight: 160
}];
exports["default"] = _default;