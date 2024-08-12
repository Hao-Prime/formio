"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
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
  weight: 125,
  key: 'validate.minWords',
  label: 'Độ Dài Tối Thiểu Của Từ',
  placeholder: 'Độ Dài Tối Thiểu Của Từ',
  type: 'number',
  tooltip: 'Số lượng từ tối thiểu có thể được thêm vào trường này.',
  input: true
}, {
  weight: 126,
  key: 'validate.maxWords',
  label: 'Độ Dài Tối Đa Của Từ',
  placeholder: 'Độ Dài Tối Đa Của Từ',
  type: 'number',
  tooltip: 'Số lượng từ tối đa có thể được thêm vào trường này.',
  input: true
}, {
  weight: 130,
  key: 'validate.pattern',
  label: 'Mẫu Biểu Thức Chính Quy',
  placeholder: 'Mẫu Biểu Thức Chính Quy',
  type: 'textfield',
  tooltip: 'Kiểm tra mẫu biểu thức chính quy mà giá trị trường phải vượt qua trước khi biểu mẫu có thể được gửi.',
  input: true
}];
exports["default"] = _default;