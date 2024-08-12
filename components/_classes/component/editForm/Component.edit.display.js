"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.regexp.flags.js");
/* eslint-disable max-len */
var _default = [
  {
    "weight": 0,
    "type": "textfield",
    "input": true,
    "key": "label",
    "label": "Nhãn",
    "placeholder": "Nhãn Trường",
    "tooltip": "Nhãn cho trường này sẽ xuất hiện kế bên nó.",
    "validate": {
      "required": true
    },
    "autofocus": true
  },
  {
    "type": "select",
    "input": true,
    "key": "labelPosition",
    "label": "Vị trí nhãn",
    "tooltip": "Vị trí cho nhãn của trường này.",
    "weight": 20,
    "defaultValue": "top",
    "dataSrc": "values",
    "data": {
      "values": [
        {
          "label": "Trên cùng",
          "value": "top"
        },
        {
          "label": "Bên trái (Căn trái)",
          "value": "left-left"
        },
        {
          "label": "Bên trái (Căn phải)",
          "value": "left-right"
        },
        {
          "label": "Bên phải (Căn trái)",
          "value": "right-left"
        },
        {
          "label": "Bên phải (Căn phải)",
          "value": "right-right"
        },
        {
          "label": "Dưới cùng",
          "value": "bottom"
        }
      ]
    }
  },
  {
    "type": "number",
    "input": true,
    "key": "labelWidth",
    "label": "Độ rộng nhãn",
    "tooltip": "Độ rộng của nhãn trên dòng theo phần trăm.",
    "clearOnHide": false,
    "weight": 30,
    "placeholder": "3",
    "suffix": "%",
    "validate": {
      "min": 0,
      "max": 100
    },
    "conditional": {
      "json": {
        "and": [
          {
            "!==": [
              {
                "var": "data.labelPosition"
              },
              "top"
            ]
          },
          {
            "!==": [
              {
                "var": "data.labelPosition"
              },
              "bottom"
            ]
          }
        ]
      }
    }
  },
  {
    "type": "number",
    "input": true,
    "key": "labelMargin",
    "label": "Khoảng cách nhãn",
    "tooltip": "Khoảng cách của nhãn trên dòng theo phần trăm.",
    "clearOnHide": false,
    "weight": 30,
    "placeholder": "3",
    "suffix": "%",
    "validate": {
      "min": 0,
      "max": 100
    },
    "conditional": {
      "json": {
        "and": [
          {
            "!==": [
              {
                "var": "data.labelPosition"
              },
              "top"
            ]
          },
          {
            "!==": [
              {
                "var": "data.labelPosition"
              },
              "bottom"
            ]
          }
        ]
      }
    }
  },
  {
    "weight": 100,
    "type": "textfield",
    "input": true,
    "key": "placeholder",
    "label": "Nội dung gợi ý",
    "placeholder": "Nội dung gợi ý",
    "tooltip": "Văn bản gợi ý sẽ xuất hiện khi trường này trống."
  },
  {
    "weight": 200,
    "type": "textarea",
    "input": true,
    "key": "description",
    "label": "Mô tả",
    "placeholder": "Mô tả cho trường này.",
    "tooltip": "Mô tả là văn bản sẽ xuất hiện dưới trường nhập.",
    "editor": "ace",
    "as": "html",
    "wysiwyg": {
      "minLines": 3,
      "isUseWorkerDisabled": true
    }
  },
  {
    "weight": 300,
    "type": "textarea",
    "input": true,
    "key": "tooltip",
    "label": "Chú thích",
    "placeholder": "Để thêm chú thích cho trường này, nhập văn bản vào đây.",
    "tooltip": "Thêm một chú thích vào bên cạnh trường này.",
    "editor": "ace",
    "as": "html",
    "wysiwyg": {
      "minLines": 3,
      "isUseWorkerDisabled": true
    }
  },
  {
    "weight": 500,
    "type": "textfield",
    "input": true,
    "key": "customClass",
    "label": "Lớp CSS Tùy chỉnh",
    "placeholder": "Lớp CSS Tùy chỉnh",
    "tooltip": "Lớp CSS tùy chỉnh để thêm vào thành phần này."
  },
  {
    "weight": 600,
    "type": "textfield",
    "input": true,
    "key": "tabindex",
    "label": "Thứ tự Tab",
    "placeholder": "0",
    "tooltip": "Đặt thuộc tính tabindex của thành phần này để ghi đè thứ tự tab của biểu mẫu. Xem tài liệu <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex'>MDN</a> về tabindex để biết thêm thông tin."
  },
  {
    "weight": 1100,
    "type": "checkbox",
    "label": "Ẩn",
    "tooltip": "Một trường ẩn vẫn là một phần của biểu mẫu, nhưng được ẩn khỏi tầm nhìn.",
    "key": "hidden",
    "input": true
  },
  {
    "weight": 1200,
    "type": "checkbox",
    "label": "Ẩn Nhãn",
    "tooltip": "Ẩn nhãn (tiêu đề, nếu không có nhãn) của thành phần này. Điều này cho phép bạn hiển thị nhãn trong trình xây dựng biểu mẫu, nhưng không khi nó được hiển thị.",
    "key": "hideLabel",
    "input": true
  },
  {
    "weight": 1350,
    "type": "checkbox",
    "label": "Focus Ban Đầu",
    "tooltip": "Biến trường này thành phần được tập trung ban đầu trên biểu mẫu này.",
    "key": "autofocus",
    "input": true
  },
  {
    "weight": 1370,
    "type": "checkbox",
    "label": "Hiện Nhãn trong DataGrid",
    "tooltip": "Hiển thị nhãn trong mỗi hàng khi ở chế độ DataGrid.",
    "key": "dataGridLabel",
    "input": true,
    "customConditional": function customConditional(context) {
      var _context$instance$opt, _context$instance$opt2;
      return (_context$instance$opt = context.instance.options) === null || _context$instance$opt === void 0 ? void 0 : (_context$instance$opt2 = _context$instance$opt.flags) === null || _context$instance$opt2 === void 0 ? void 0 : _context$instance$opt2.inDataGrid;
    }
  },
  {
    "weight": 1400,
    "type": "checkbox",
    "label": "Vô hiệu hóa",
    "tooltip": "Vô hiệu hóa trường nhập biểu mẫu.",
    "key": "disabled",
    "input": true
  },
  {
    "weight": 1500,
    "type": "checkbox",
    "label": "Xem Bảng",
    "tooltip": "Hiển thị giá trị này trong chế độ xem bảng của các bản ghi.",
    "key": "tableView",
    "input": true
  },
  {
    "weight": 1600,
    "type": "checkbox",
    "label": "Chỉnh sửa Modal",
    "tooltip": "Mở một hộp thoại modal để chỉnh sửa giá trị của thành phần này.",
    "key": "modalEdit",
    "input": true
  }
];
/* eslint-enable max-len */
exports["default"] = _default;