const mongoose = require('mongoose');
const {Schema} = mongoose;
const Adelanto = require('./adelanto');
const PasajeSchema = new Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    adelanto: {type: [Adelanto.schema], required: false}
})
module.exports = mongoose.model('Pasaje', PasajeSchema);