const express = require('express')
const Usuario = require('../models/Usuario')

const crearUsuario = async (req, res = express.response) => {
    const { name, email, password } = req.body
    try {
        const usuario= new Usuario(req.body)
        await usuario.save()

        res.status(200).json({
            ok: true,
            name, email, password
        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error
        })
    }
    
}

const loginUsuario = (req, res = express.response) => {
    res.json({
        ok: true
    })
}

const revalidarToken = (req, res = express.response) => {
    res.json({
        ok: true
    })
}

module.exports = {
    loginUsuario,
    crearUsuario,
    revalidarToken
}