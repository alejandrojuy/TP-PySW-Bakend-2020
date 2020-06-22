var express = require('express');
var app = express();

const {mongoose} = require('./database')
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas para puntos
// en esta uri va a escuchar pedidos de puntos
app.use('/api/puntos', require('./routes/puntos.route'));
//
app.use('/api/sectores', require('./routes/sectores.route'));
app.use('/api/puntos1', require('./routes/puntos1.route'));

//setting
app.set('port', process.env.PORT || 3000);

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});