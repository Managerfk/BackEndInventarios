const express = require('express');// importamos express
const { getConnection } = require('./db/db-conenction-mongo.js'); //se importa el método para la conexión de la base de datos en este principal
const cors = require('cors');//importar cors
require('dotenv').config();

const app = express();//crea función app
const host = '0.0.0.0';
const port = process.env.PORT; //crea la constante puerto 3000.



//Implementamos cors, através de middleware
app.use(cors());

getConnection();// se realiza la acción con la aplicación cuando se corra index.js

//se parsea los datos en formato Json
app.use(express.json());

app.use('/usuario', require('./router/Usuario'));
app.use('/estadoequipo', require('./router/EstadoEquipo'));
app.use('/marca', require('./router/Marca'));
app.use('/tipoequipo', require('./router/TipoEquipo'));
app.use('/inventario', require('./router/Inventario'));

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  
  app.listen(port, ()=>{
    console.log('oskafnak')

  });