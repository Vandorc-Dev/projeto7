const express = require('express');
const { check } = require('express-validator');
const { route } = require('../app');
const UsuarioController = require('../controllers/UsuarioController');
const router = express.Router();

router.get('/', function(req, res){
    res.render('login');
})

//Validação do formulário
router.post('/logar', UsuarioController.logar);

module.exports = router;

//[
    //check('emailLogin').isEmail().withMessage('Email inválido!'),
    //check('passwordLogin').isLength({min:6}).withMessage('A senha deve ter no mínimo 6 caracteres!')
//], 