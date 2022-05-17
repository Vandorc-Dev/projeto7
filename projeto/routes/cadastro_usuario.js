const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const router = express.Router();

router.get('/', function(req, res){
    res.render('cadastro_usuario');
})

router.post('/cadastro_usuario', [
    check('nome').isLength({min:2}).withMessage('Preencha o campo nome!'),
    check('email').isEmail().withMessage('Email inválido!'),
    check('password').isLength({min:6}).withMessage('A senha deve ter no mínimo 6 caracteres!')

], UsuarioController.create)

module.exports = router;