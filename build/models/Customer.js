"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var customerSchema = new _mongoose.Schema({
  idCliente: String,
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  fechaNacimiento: String,
  Subject: String,
  sexo: String,
  segmento: String,
  nacionalidad: String,
  rfc: String,
  tipoID: String,
  numeroID: String,
  cuenta: String,
  email: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Customer', customerSchema);

exports["default"] = _default;