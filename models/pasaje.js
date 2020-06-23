const mongoose = require('mongoose');
const {Schema} = mongoose;

const PasajeSchema = new Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true}
})
module.exports = mongoose.model('Pasaje', PasajeSchema);