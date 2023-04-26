const express = require('express')
const { validationResult } = require('express-validator')

const validarCampos = (req, res = express.response, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    next()
}

const validarPassword = (req, res = express.response, next) => {
    if(req.body.password =! req.body.passwordconfirm){
        return res.status(400).json({
            ok: false,
            message: 'La contraseñas no coinciden'
        })
    }
    next()
}

module.exports = { validarCampos, validarPassword }