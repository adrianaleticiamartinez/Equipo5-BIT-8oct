"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _customersRoutes = _interopRequireDefault(require("./routes/customers.routes.js"));

var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('port', process.env.PORT || 3000);
app.set('pkg', _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json({
    Project: app.get('pkg').name,
    Autor: app.get('pkg').autor,
    Description: app.get('pkg').description,
    Version: app.get('pkg').version
  });
});
app.use('/api/customers', _customersRoutes["default"]);
app.use('/api/auth', _authRoutes["default"]);
app.get('*', function (req, res) {
  res.status(404).send('What happened?');
});
var _default = app;
exports["default"] = _default;