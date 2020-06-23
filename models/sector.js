const mongoose = require('mongoose');
const {Schema} = mongoose;
const Contacto = require('./contacto');

const SectorSchema = new Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    dependencia: {type: String, required: true},
    contacto: {type: Contacto.schema, required: false}
})


module.exports = mongoose.model('Sector', SectorSchema);