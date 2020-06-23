const Mensaje = require('../models/mensaje'); 

const punto2Ctrl = {}
punto2Ctrl.getMensajes = async (req, res) => {
    mensajes = await Mensaje.find();
    //populate("sector"); para traer el objeto sector q es
    //atributo de un punto de interes
    res.json(mensajes);
}

punto2Ctrl.createMensaje = async (req, res) => {
    const punto2 = new Mensaje (req.body);
    //const sector = await Sector.findById(req.params.id);
    //const puntoInteres.sector = sector;
    await punto2.save();
    res.json({
        'status': 'Mensaje saved'
    });
}



module.exports= punto2Ctrl;