"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  type: 'form',
  components: [{
    label: 'Select Boxes',
    dataSrc: 'url',
    data: {
      url: 'https://cdn.rawgit.com/mshafrir/2646763/raw/states_titlecase.json'
    },
    valueProperty: 'abbreviation',
    template: '<span>{{ item.name }}</span>',
    key: 'selectBoxes',
    type: 'selectboxes',
    input: true,
    inputType: 'checkbox'
  }, {
    label: 'Submit',
    showValidations: false,
    alwaysEnabled: false,
    tableView: false,
    key: 'submit',
    type: 'button',
    input: true
  }],
  title: 'test selectBoxes Url',
  display: 'form',
  name: 'testSelectBoxesUrl',
  path: 'testSelectBoxesUrl'
};
exports["default"] = _default;