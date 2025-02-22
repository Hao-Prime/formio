"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  _id: '6374b809ef6e5f56bfa91978',
  title: 'hhhhhh',
  name: 'hhhhhh',
  path: 'hhhhhh',
  type: 'form',
  display: 'form',
  components: [{
    label: 'Date / Time',
    format: 'MMMM/yy',
    tableView: true,
    datePicker: {
      disableWeekends: false,
      disableWeekdays: false
    },
    enableMinDateInput: false,
    enableMaxDateInput: false,
    key: 'dateTime',
    type: 'datetime',
    input: true,
    widget: {
      type: 'calendar',
      displayInTimezone: 'viewer',
      locale: 'en',
      useLocaleSettings: false,
      allowInput: true,
      mode: 'single',
      enableTime: true,
      noCalendar: false,
      format: 'MMMM/yy',
      hourIncrement: 1,
      minuteIncrement: 1,
      'time_24hr': false,
      minDate: null,
      disableWeekends: false,
      disableWeekdays: false,
      maxDate: null
    }
  }, {
    type: 'button',
    label: 'Submit',
    key: 'submit',
    disableOnInvalid: true,
    input: true,
    tableView: false
  }],
  created: '2022-11-16T10:14:33.808Z',
  modified: '2022-11-18T10:18:51.790Z',
  machineName: 'aabvnyfwnstnovd:hhhhhh'
};
exports["default"] = _default;