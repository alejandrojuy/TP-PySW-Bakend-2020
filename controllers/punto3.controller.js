const Pasaje = require('../models/pasaje'); 

const punto3Ctrl = {}
punto3Ctrl.getPasajes = async (req, res) => {
    pasajes = await Pasaje.find();
    //populate("sector"); para traer el objeto sector q es
    //atributo de un punto de interes
    res.json(pasajes);
}

punto3Ctrl.createPasaje = async (req, res) => {
    const punto3 = new Pasaje (req.body);
    //const sector = await Sector.findById(req.params.id);
    //const puntoInteres.sector = sector;
    await punto3.save();
    res.json({
        'status': 'Pasaje saved'
    });
}



module.exports= punto3Ctrl;