import { Schema, model } from 'mongoose'

const customerSchema = new Schema({
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
})

export default model('Customer', customerSchema)
