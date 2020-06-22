const Sector = require('../models/sector'); 

const sectorCtrl = {}

sectorCtrl.getSectores = async (req, res) => {
    sectores = await Sector.find();
    //find trae todos los objetos sectores
    res.json(sectores);
}

sectorCtrl.createSector = async (req, res) => {
    console.log("entro create sector");
    const sector = new Sector (req.body);
    //const sector creo un eskema con el nuevo dato q viene el objeto
    // luego lo guardo  con sector.save
    await sector.save();

    res.json({
        'status': 'Sector saved'
    });
}

sectorCtrl.getSector = async (req, res) => {
    //findById busca un ojbeto q conincida cn el id
    const sector = await Sector.findById(req.params.id);
    res.json(sector);
}

sectorCtrl.editSector = async (req, res) => {
    /*const sector = {
        nombre: req.body.nombre,
        mail: req.body.email,
        dependencia: req.body.dependencia,
    };*/
    const vSector =  new Sector (req.body);
    await Sector.findByIdAndUpdate(req.params.id, {$set: vSector}, {new: true});
    //await Sector.findByIdAndUpdate(req.params.id, {$set: vPuntoInteres}, {new: true});
   
    res.json({
        'status': 'Sector updated'
    })
}
sectorCtrl.deleteSector = async (req, res)=>{
    await Sector.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Sector removed'
    })
}
module.exports= sectorCtrl;