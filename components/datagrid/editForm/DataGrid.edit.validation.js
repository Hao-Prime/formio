"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
  ignore: true,
  key: 'unique'
}, {
  weight: 110,
  key: 'validate.minLength',
  label: 'Độ Dài Tối Thiểu',
  placeholder: 'Độ Dài Tối Thiểu',
  type: 'textfield',
  tooltip: 'Yêu cầu độ dài tối thiểu mà trường này phải đáp ứng.',
  input: true
}, {
  weight: 120,
  key: 'validate.maxLength',
  label: 'Độ Dài Tối Đa',
  placeholder: 'Độ Dài Tối Đa',
  type: 'textfield',
  tooltip: 'Yêu cầu độ dài tối đa mà trường này phải đáp ứng.',
  input: true
}];
exports["default"] = _default;