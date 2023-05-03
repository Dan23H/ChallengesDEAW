const express = require('express')

const validarPassword = (req, res = express.response, next) => {
    if(req.body.password =! req.body.passwordconfirm){
        return res.status(400).json({
            ok: false,
            message: 'La contraseñas no coinciden'
        })
    }
    next()
}

module.exports = { validarPassword }