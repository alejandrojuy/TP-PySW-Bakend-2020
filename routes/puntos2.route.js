//Realice UNA sola API en el backend que soporte diferentes rutas para
//los siguientes puntos (ej. /api/punto1/; /api/punto2; /api/punto3/; etc)
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const punto1Ctrl = require('./../controllers/punto1.controller');

// definiendo rutas
router.get('/', punto1Ctrl.getAsistentes);
router.post('/', punto1Ctrl.createAsistente);
 router.get('/:id', punto1Ctrl.getAsistente);
 router.put('/:id', punto1Ctrl.editAsistente);
 router.delete('/:id', punto1Ctrl.deleteAsistente);

//exportacion del modulo de rutas
module.exports = router;