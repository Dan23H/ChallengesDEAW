const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarPassword } = require('../middlewares/validar-password')

router.post(
    '/',
    [
        check('user', 'El campo usuario no puede estar vacío. Prueba con el nombre o con el email').not().isEmpty(),
        check('password', 'La contraseña debe ser de mínimo 6 caracteres').isLength({ min: 6 }),
        validarPassword,
        validarCampos
    ], 
    loginUsuario)

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe ser de mínimo 6 caracteres').isLength({ min: 6 }),
        validarPassword,
        validarCampos
    ],
    crearUsuario)

router.get('/renew', revalidarToken)

module.exports = router