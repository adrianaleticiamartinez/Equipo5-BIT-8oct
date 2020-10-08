import {Schema, model } form 'mongoose'

const userSchema = new Schema({
    usuario: String,
    auth: String,
    nombreCompleto: String,
    area: String,
    ubicacion: String,
    segmento: String,
    perfil: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('User', userSchema)