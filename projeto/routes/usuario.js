const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const router = express.Router();

router.get('/', function(req, res){
    res.render('cadastro_usuario');
})

router.post('/create', async function (req, res, next) {
    await UsuarioController.create(req, res, next);// Chamando o Controller para Criar o Produto
    res.render('index');
});

module.exports = router;

