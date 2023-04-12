const express = require('express')

const crearUsuario = (req, res = express.response) => {
    const { name, email, password } = req.body
    res.status(200).json({
        ok: true,
        name, email, password
    })
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