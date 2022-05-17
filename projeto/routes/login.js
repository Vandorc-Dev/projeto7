const express = require('express');
const LoginController = require('../controllers/LoginController');
const UsuarioController = require('../controllers/UsuarioController');
const { check, validationResult, body } = require('express-validator');
//const UsuarioController = require('../controllers/UsuarioController');
const router = express.Router();


//Validação do formulário
router.get('/', UsuarioController.login);


router.post('/', [
    check('email').isEmail().withMessage('Prencha o email corretamente!'),
    check('password').isLength({min:5}).withMessage('A senha deve ter um mínimo de 5 digitos!')
],UsuarioController.logar)

module.exports = router;

/*

router.get('/', function(req, res){
    res.render('login');
})


router.post('/usuario/logando',[
    check('emailLogin').isEmail().withMessage('Email inválido!'),
    check('passwordLogin').isLength({min:6}).withMessage('A senha deve ter no mínimo 6 caracteres!')
] , UsuarioController.login);

*/