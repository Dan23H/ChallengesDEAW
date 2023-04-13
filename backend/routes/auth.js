const express = require('express')
const router = express.Router()

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

router.post('/', loginUsuario)

router.post('/new', crearUsuario)
router.get('/renew', revalidarToken)

module.exports = router