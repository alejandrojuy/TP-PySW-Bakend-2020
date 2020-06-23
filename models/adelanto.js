const mongoose = require('mongoose');
const {Schema} = mongoose;

const AdelantoSchema = new Schema({
    cobrador: {type: String, required: true},
    montoAdelanto: {type: Number, required: true},
    fecha: {type: Date , required: false}
})

module.exports = mongoose.model('Adelanto',AdelantoSchema);
