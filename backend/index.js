const express = require('express')
require('dotenv').config()
const {dbConnection} = require('./database/config')

const bodyParser = require('body-parser')

// Crear Express App
const app = express();

// Base de datos
dbConnection();

app.use(express.static('public'))

// Lectura y parseo del body
app.use(bodyParser.json())

// Rutas
app.use('/api/auth', require('./routes/auth') )
app.get('/',(req,res) => {
    res.json({
        ok: true
    })
})

// Escuchar en puerto 4000
app.listen(process.env.PORT,() => {
    console.log('Servidor corriendo en puerto',process.env.PORT)
})