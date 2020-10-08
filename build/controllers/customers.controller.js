"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomerById = void 0;

var _Customers = _interopRequireDefault(require("../models/Customers"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getCustomerById = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var userType, customer, token, decoded, jsonCustomer, _jsonCustomer, _jsonCustomer2;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Customers["default"].findById(req.params.customerId);

          case 2:
            customer = _context.sent;
            token = req.headers["x-access-token"];
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);

            if (decoded.privilege == 'manager') {
              jsonCustomer = {
                "Series_reference": customer.Series_reference,
                "Period": customer.Period,
                "Data_value": customer.Data_value,
                "STATUS": customer.STATUS,
                "UNITS": customer.UNITS,
                "Subject": customer.Subject,
                "Group": customer.Group,
                "Series_title_1": customer.Series_title_1,
                "Series_title_2": customer.Series_title_2,
                "Series_title_3": customer.Series_title_3,
                "Series_title_4": customer.Series_title_4,
                "Series_title_5": customer.Series_title_5
              };
              res.json(jsonCustomer);
            }

            if (decoded.privilege == 'validador') {
              _jsonCustomer = {
                "Series_reference": customer.Series_reference,
                "Period": customer.Period,
                "Data_value": customer.Data_value.substring(0, 3) + '***********',
                "STATUS": customer.STATUS.substring(0, 3) + '***********',
                "UNITS": customer.UNITS.substring(0, 3) + '***********',
                "Subject": customer.Subject.substring(0, 3) + '***********',
                "Group": customer.Group.substring(0, 3) + '***********',
                "Series_title_1": customer.Series_title_1,
                "Series_title_2": customer.Series_title_2,
                "Series_title_3": customer.Series_title_3,
                "Series_title_4": customer.Series_title_4,
                "Series_title_5": customer.Series_title_5
              };
              res.json(_jsonCustomer);
            }

            if (decoded.privilege == 'restringido') {
              _jsonCustomer2 = {
                "Series_reference": customer.Series_reference,
                "Period": customer.Period,
                "Series_title_1": customer.Series_title_1,
                "Series_title_2": customer.Series_title_2,
                "Series_title_3": customer.Series_title_3,
                "Series_title_4": customer.Series_title_4,
                "Series_title_5": customer.Series_title_5
              };
              res.json(_jsonCustomer2);
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCustomerById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCustomerById = getCustomerById;