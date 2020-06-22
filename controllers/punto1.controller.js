const Asistente = require('../models/asistente'); 

const punto1Ctrl = {}
punto1Ctrl.getAsistentes = async (req, res) => {
    asistentes = await Asistente.find();
    //populate("sector"); para traer el objeto sector q es
    //atributo de un punto de interes
    res.json(asistentes);
}

punto1Ctrl.createAsistente = async (req, res) => {
    const punto1 = new Asistente (req.body);
    //const sector = await Sector.findById(req.params.id);
    //const puntoInteres.sector = sector;
    await punto1.save();
    res.json({
        'status': 'Asistente saved'
    });
}

punto1Ctrl.editAsistente = async (req, res) => {
    /*const puntoInteres = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        urlmapa: req.body.urlmapa,
        ultimaModificacion: req.body.ultimaModificacion,
        sector: req.body.sector
    };*/
    const vAsistente =  new Asistente (req.body);
//aca la variable  va asi vAsistente si no genera error 
    await Asistente.findByIdAndUpdate(req.params.id, {$set: vAsistente}, {new: true});
    res.json({
        'status': 'Asistente updated'
    })
}

punto1Ctrl.getAsistente = async (req, res) => {
    const vAsistente = await Asistente.findById(req.params.id);
    res.json(vAsistente);
}

punto1Ctrl.deleteAsistente = async (req, res)=>{
    await Asistente.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Asistente removed'
    })
}


module.exports= punto1Ctrl;