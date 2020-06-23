//Realice UNA sola API en el backend que soporte diferentes rutas para
//los siguientes puntos (ej. /api/punto1/; /api/punto2; /api/punto3/; etc)
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const punto2Ctrl = require('./../controllers/punto2.controller');
const empresaCtrl = require('./../controllers/empresa.controller');
//const contactoCtrl = require('./../controllers/contacto.controller');

// definiendo rutas
router.get('/empresas/', empresaCtrl.getEmpresas);
router.post('/empresa/', empresaCtrl.createEmpresa);
//router.get('/contactos/', contactoCtrl.getContactos);
//router.post('/contactos/', contactoCtrl.createContacto);
router.get('/', punto2Ctrl.getMensajes);
router.post('/', punto2Ctrl.createMensaje);
 //router.get('/:id', punto1Ctrl.getAsistente);
 //router.put('/:id', punto1Ctrl.editAsistente);
 //router.delete('/:id', punto1Ctrl.deleteAsistente);

//exportacion del modulo de rutas
module.exports = router;