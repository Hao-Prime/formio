"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
  type: 'checkbox',
  input: true,
  key: 'enableTime',
  label: 'Cho phép chọn giờ phút',
  tooltip: 'Cho phép nhập thời gian cho trường này.',
  weight: 0
}, {
  type: 'number',
  input: true,
  key: 'timePicker.hourStep',
  label: 'Bước Thời Gian (Giờ)',
  tooltip: 'Số giờ tăng/giảm trong bộ chọn thời gian.',
  weight: 10
}, {
  type: 'number',
  input: true,
  key: 'timePicker.minuteStep',
  label: 'Bước Thời Gian (Phút)',
  tooltip: 'Số phút tăng/giảm trong bộ chọn thời gian.',
  weight: 20
}, {
  type: 'checkbox',
  input: true,
  key: 'timePicker.showMeridian',
  label: 'Thời Gian 12 Giờ (AM/PM)',
  tooltip: 'Hiển thị thời gian theo định dạng 12 giờ với AM/PM.',
  weight: 30
}];
exports["default"] = _default;