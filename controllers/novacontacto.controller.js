const Contacto = require('../models/contacto'); 

const contactoCtrl = {}
contactoCtrl.getContactos = async (req, res) => {
    contactos = await Contacto.find();
    //populate("sector"); para traer el objeto sector q es
    //atributo de un punto de interes
    res.json(contactos);
}

contactoCtrl.createContacto = async (req, res) => {
    const contacto = new Contacto (req.body);
    //const sector = await Sector.findById(req.params.id);
    //const puntoInteres.sector = sector;
    await contacto.save();
    res.json({
        'status': 'Contacto guardado'
    });
}
module.exports= contactoCtrl;