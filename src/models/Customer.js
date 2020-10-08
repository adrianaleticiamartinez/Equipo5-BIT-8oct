import { Schema, model } from 'mongoose'

const customerSchema = new Schema({
    Series_reference: String,
    Period: String,
    Data_value: String,
    STATUS: String,
    UNITS: String,
    Subject: String,
    Group: String,
    Series_title_1: String,
    Series_title_2: String,
    Series_title_3: String,
    Series_title_4: String,
    Series_title_5: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Customer', customerSchema)