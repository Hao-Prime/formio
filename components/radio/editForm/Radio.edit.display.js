"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
  key: 'placeholder',
  ignore: true
}, {
  type: 'select',
  input: true,
  label: 'Vị trí nhãn tùy chọn',
  key: 'optionsLabelPosition',
  tooltip: 'Vị trí nhãn cho các tùy chọn trong trường này.',
  dataSrc: 'values',
  weight: 32,
  defaultValue: 'right',
  data: {
    values: [{
      label: 'Trên',
      value: 'top'
    }, {
      label: 'Trái',
      value: 'left'
    }, {
      label: 'Phải',
      value: 'right'
    }, {
      label: 'Dưới',
      value: 'bottom'
    }]
  }
}, {
  type: 'checkbox',
  input: true,
  key: 'inline',
  label: 'Hiển thị 1 hàng',
  tooltip: 'Hiển thị các hộp kiểm/nút radio theo chiều ngang.',
  weight: 650
}];
exports["default"] = _default;