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
  type: 'number',
  tooltip: 'Yêu cầu độ dài tối thiểu mà trường này phải đáp ứng.',
  input: true
}, {
  weight: 120,
  key: 'validate.maxLength',
  label: 'Độ Dài Tối Đa',
  placeholder: 'Độ Dài Tối Đa',
  type: 'number',
  tooltip: 'Yêu cầu độ dài tối đa mà trường này phải đáp ứng.',
  input: true
}, {
  type: 'checkbox',
  input: true,
  weight: 105,
  key: 'rowDrafts',
  label: 'Enable Row Drafts',
  tooltip: 'Allow save rows even if their data is invalid. Errors will occur when try to submit with invalid rows.'
}];
exports["default"] = _default;