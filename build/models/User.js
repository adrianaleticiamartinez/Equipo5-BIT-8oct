"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  usuario: {
    type: String,
    unique: true
  },
  auth: {
    type: String,
    required: true
  },
  nombreCompleto: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  segmento: {
    type: String,
    required: true
  },
  perfil: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;