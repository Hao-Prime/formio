"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
  type: 'select',
  input: true,
  weight: 20,
  tooltip: 'Select the type of widget you\'d like to use.',
  key: 'widget',
  defaultValue: 'choicesjs',
  label: 'Widget Type',
  dataSrc: 'values',
  data: {
    values: [{
      label: 'ChoicesJS',
      value: 'choicesjs'
    }, {
      label: 'HTML 5',
      value: 'html5'
    }]
  }
}, {
  weight: 1230,
  type: 'checkbox',
  label: 'Tùy chọn có giá trị duy nhất ',
  tooltip: 'Chỉ hiển thị những giá trị duy nhất',
  key: 'uniqueOptions',
  input: true
}];
exports["default"] = _default;