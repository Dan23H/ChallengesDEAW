const express = require('express')


const crearUsuario = (req, res = express.response) => {
    const { name, email, password, passwordconfirm } = req.body
       
    res.status(200).json({
        ok: true,
        name, email, password, passwordconfirm
    })
}

const loginUsuario = (req, res = express.response) => {
    const { user, password, passwordconfirm } = req.body
    console.log(req.body)
    res.status(200).json({
        ok: true,
        user, password
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