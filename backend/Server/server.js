const express = require('express')
require('dotenv').config()
const {dbConnection} = require('../database/config')
const cors = require('cors')

class Server {
    constructior() {
        // Crear Express App
        this.app = express()
        this.port = process.env.PORT

        this.paths = {
            auth: '/api/auth',
            task: '/api/task'
        }

        this.connectToDB()
        this.addMiddlewares()
        this.setRoutes()
    }

    // Base de datos
    async connectToDB() {
        await dbConnection()
    }

    addMiddlewares() {
        // CORS
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json())

        // Public folder
        this.app.use(express.static('public'))
    }

    setRoutes(){
        // Rutas
        this.app.use(this.paths.auth, require('../routes/auth'))
        this.app.use(this.paths.task, require('../routes/task'))
    }

    listen() {
        // Escuchar en puerto 4000
        this.app.listen(this.port,() => {
            console.log('Servidor corriendo en puerto', process.env.PORT)
        })
    }
}

module.exports = Server