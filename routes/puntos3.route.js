console.log("cargo sectores.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const punto3Ctrl = require('./../controllers/punto3.controller');

// definiendo rutas
router.get('/', punto3Ctrl.getPasajes);
router.post('/', punto3Ctrl.createPasaje);
//router.get('/:id', punto3Ctrl.getSector);
//router.put('/:id', punto3Ctrl.editSector);
//router.delete('/:id', punto3Ctrl.deleteSector);

//exportacion del modulo de rutas
module.exports = router;