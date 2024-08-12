"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.regexp.flags.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _builder = _interopRequireDefault(require("../../../utils/builder"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = [{
  key: 'multiple',
  ignore: true
}, {
  key: 'dataSrc',
  data: {
    values: [{
      label: 'Values',
      value: 'values'
    }, {
      label: 'URL',
      value: 'url'
    }]
  },
  'validate': {
    'required': true
  },
  onChange: function onChange(context) {
    if (context && context.flags && context.flags && context.flags.modified) {
      context.data.values = [{
        label: '',
        value: ''
      }];
    }
  }
}, {
  type: 'datagrid',
  input: true,
  label: 'Các giá trị',
  key: 'values',
  tooltip: 'Các giá trị nút radio có thể được chọn cho trường này. Giá trị là văn bản được gửi kèm với dữ liệu biểu mẫu. Nhãn là văn bản xuất hiện kế bên nút radio trên biểu mẫu.',
  weight: 10,
  reorder: true,
  defaultValue: [{
    label: '',
    value: ''
  }],
  components: [{
    label: 'Nhãn',
    key: 'label',
    input: true,
    type: 'textfield'
  }, {
    label: 'Giá trị',
    key: 'value',
    input: true,
    type: 'textfield',
    allowCalculateOverride: true,
    calculateValue: 'value = _.camelCase(row.label);',
    validate: {
      required: true
    }
  }, {
    type: 'select',
    input: true,
    weight: 180,
    label: 'Phím tắt',
    key: 'shortcut',
    tooltip: 'Phím tắt cho tùy chọn này.',
    dataSrc: 'custom',
    valueProperty: 'value',
    customDefaultValue: function customDefaultValue() {
      return '';
    },
    template: '{{ item.label }}',
    data: {
      custom: function custom(context) {
        return _builder["default"].getAvailableShortcuts(_lodash["default"].get(context, 'instance.options.editForm', {}), _lodash["default"].get(context, 'instance.options.editComponent', {}));
      }
    }
  }],
  conditional: {
    json: {
      '===': [{
        "var": 'data.dataSrc'
      }, 'values']
    }
  }
}, {
  key: 'template',
  conditional: {
    json: {
      '===': [{
        "var": 'data.dataSrc'
      }, 'url']
    }
  }
}];
exports["default"] = _default;