const Empresa = require('../models/empresa'); 

const empresaCtrl = {}
empresaCtrl.getEmpresas = async (req, res) => {
    empresas = await Empresa.find();
    //populate("sector"); para traer el objeto sector q es
    //atributo de un punto de interes
    res.json(empresas);
}

empresaCtrl.createEmpresa = async (req, res) => {
    const punto2empresa = new Empresa (req.body);
    //const sector = await Sector.findById(req.params.id);
    //const puntoInteres.sector = sector;
    await punto2empresa.save();
    res.json({
        'status': 'Empresa saved'
    });
}
module.exports= empresaCtrl;