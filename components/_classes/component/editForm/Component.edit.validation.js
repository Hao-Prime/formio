"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = _interopRequireDefault(require("./utils"));
var _Evaluator = _interopRequireDefault(require("../../../../utils/Evaluator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable quotes, max-len */
var _default = [{
  weight: 10,
  type: 'checkbox',
  label: 'Bắt buộc',
  tooltip: 'Trường này bắt buộc phải được điền trước khi biểu mẫu có thể được gửi đi.',
  key: 'validate.required',
  input: true
}, {
  weight: 100,
  type: 'checkbox',
  label: 'Duy nhất',
  tooltip: 'Đảm bảo rằng dữ liệu được gửi cho trường này là duy nhất và chưa được gửi trước đó.',
  key: 'unique',
  input: true
}, {
  weight: 0,
  type: 'select',
  key: 'validateOn',
  defaultValue: 'change',
  input: true,
  label: 'Xác thực Khi',
  tooltip: 'Xác định khi nào thành phần này nên kích hoạt xác thực phía trước.',
  dataSrc: 'values',
  data: {
    values: [{
      label: 'Thay đổi',
      value: 'change'
    }, {
      label: 'Mất tiêu điểm',
      value: 'blur'
    }]
  }
}, {
  weight: 190,
  type: 'textfield',
  input: true,
  key: 'errorLabel',
  label: 'Thông báo lỗi',
  placeholder: 'Thông báo lỗi',
  tooltip: 'Nhãn cho trường này khi có lỗi xảy ra.'
}, {
  weight: 200,
  key: 'validate.customMessage',
  label: 'Thông Báo Lỗi Tùy Chỉnh',
  placeholder: 'Thông Báo Lỗi Tùy Chỉnh',
  type: 'textfield',
  tooltip: 'Thông báo lỗi được hiển thị nếu xảy ra lỗi.',
  input: true
}, {
  type: 'panel',
  title: 'Xác Thực Tùy Chỉnh',
  collapsible: true,
  collapsed: true,
  style: {
    'margin-bottom': '10px'
  },
  key: 'custom-validation-js',
  weight: 300,
  customConditional: function customConditional() {
    return !_Evaluator["default"].noeval || _Evaluator["default"].protectedEval;
  },
  components: [_utils["default"].logicVariablesTable('<tr><th>input</th><td>Giá trị đã được nhập vào thành phần này</td></tr>'), {
    type: 'textarea',
    key: 'validate.custom',
    rows: 5,
    editor: 'ace',
    hideLabel: true,
    as: 'javascript',
    input: true
  }, {
    type: 'htmlelement',
    tag: 'div',
    content: "\n          <small>\n            <p>Nhập mã xác thực tùy chỉnh.</p>\n            <p>Bạn phải gán biến <strong>valid</strong> là <strong>true</strong> hoặc thông báo lỗi nếu xác thực không thành công.</p>\n            <h5>Ví dụ:</h5>\n            <pre>valid = (input === 'Joe') ? true : 'Tên của bạn phải là \"Joe\"';</pre>\n          </small>"
  }, {
    type: 'well',
    components: [{
      weight: 100,
      type: 'checkbox',
      label: 'Xác Thực Bí Mật',
      tooltip: 'Chọn mục này nếu bạn muốn thực hiện xác thực CHỈ trên phía máy chủ. Điều này giữ cho logic xác thực của bạn riêng tư và bí mật.',
      description: 'Chọn mục này nếu bạn muốn thực hiện xác thực CHỈ trên phía máy chủ. Điều này giữ cho logic xác thực của bạn riêng tư và bí mật.',
      key: 'validate.customPrivate',
      input: true
    }]
  }]
}, {
  type: 'panel',
  title: 'Xác Thực JSONLogic',
  collapsible: true,
  collapsed: true,
  key: 'json-validation-json',
  weight: 400,
  components: [{
    type: 'htmlelement',
    tag: 'div',
    /* eslint-disable prefer-template */
    content: '<p>Thực hiện logic tùy chỉnh bằng <a href="http://jsonlogic.com/" target="_blank" rel="noopener noreferrer">JSONLogic</a>.</p>' + '<h5>Ví dụ:</h5>' + '<pre>' + JSON.stringify({
      "if": [{
        "===": [{
          "var": "input"
        }, "Bob"]
      }, true, "Tên của bạn phải là 'Bob'!"]
    }, null, 2) + '</pre>'
    /* eslint-enable prefer-template */
  }, {
    type: 'textarea',
    key: 'validate.json',
    hideLabel: true,
    rows: 5,
    editor: 'ace',
    as: 'json',
    input: true
  }]
}, {
  type: 'panel',
  title: 'Lỗi Tùy Chỉnh',
  collapsible: true,
  collapsed: true,
  key: 'errors',
  weight: 400,
  components: [{
    type: 'textarea',
    key: 'errors',
    hideLabel: true,
    rows: 5,
    editor: 'ace',
    as: 'json',
    input: true
  }, {
    type: 'htmlelement',
    tag: 'div',
    content: "\n          <p>Điều này cho phép bạn đặt các thông báo lỗi tùy chỉnh khác nhau cho các lỗi khác nhau\n          (trái ngược với \u201CThông Báo Lỗi Tùy Chỉnh\u201D, chỉ cho phép bạn đặt một\n          thông báo lỗi cho tất cả các lỗi). Ví dụ:</p>\n\n<pre>{\n  \"required\": \"{<span/>{ field }} là bắt buộc. Thử lại.\",\n  \"maxLength\": \"{<span/>{ field }} quá dài. Thử lại.\"\n}</pre>\n\n          <p>Bạn có thể đặt các khóa sau (trong số các khóa khác):</p>\n          <ul>\n            <li>r<span/>equired</li>\n            <li>m<span/>in</li>\n            <li>m<span/>ax</li>\n            <li>m<span/>inLength</li>\n            <li>m<span/>axLength</li>\n            <li>m<span/>inWords</li>\n            <li>m<span/>axWords</li>\n            <li>i<span/>nvalid_email</li>\n            <li>i<span/>nvalid_date</li>\n            <li>i<span/>nvalid_day</li>\n            <li>i<span/>nvalid_regex</li>\n            <li>m<span/>ask</li>\n            <li>p<span/>attern</li>\n            <li>c<span/>ustom</li>\n          </ul>\n\n          <p>Tùy thuộc vào thông báo lỗi, một số biến mẫu sau có thể được sử dụng trong tập lệnh:</p>\n          <ul>\n           <li><code>{<span/>{ f<span/>ield }}</code> được thay thế bằng nhãn của trường.</li>\n           <li><code>{<span/>{ m<span/>in }}</code></li>\n           <li><code>{<span/>{ m<span/>ax }}</code></li>\n           <li><code>{<span/>{ l<span/>ength }}</code></li>\n           <li><code>{<span/>{ p<span/>attern }}</code></li>\n           <li><code>{<span/>{ m<span/>inDate }}</code></li>\n           <li><code>{<span/>{ m<span/>axDate }}</code></li>\n           <li><code>{<span/>{ m<span/>inYear }}</code></li>\n           <li><code>{<span/>{ m<span/>axYear }}</code></li>\n           <li><code>{<span/>{ r<span/>egex }}</code></li>\n          </ul>\n        "
  }]
}];
/* eslint-enable quotes, max-len */
exports["default"] = _default;
