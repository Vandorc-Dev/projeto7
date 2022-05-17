const express = require('express');
const router = express.Router();
const { Produto } = require('../models')
const ProdutoController = require('../controllers/ProdutoController');


router.get('/cadastro', function (req, res, next) {
    console.log('Chegou na rota GET /produtos/cadastro');
    res.render('cadastro_produtos'); // Renderizando Pagina de Cadastro de Produtos
});
router.get('/', function (req, res, next) {
    console.log('Chegou na rota no GET /produtos');
    Produto.findAll().then(function(produtos){
        res.render('produtos', {produtos: produtos}) 
    }); // Renderizando Pagina de Cadastro de Produtos
});
router.post('/create', async function (req, res, next) {
    console.log('Chegou na rota POST /cadastro_produtos/create');
    console.log(JSON.stringify(req.body)); // Imprimindo o Objeto que veio do Formulário

    await ProdutoController.create(req, res, next);// Chamando o Controller para Criar o Produto
    res.render('cadastro_produtos');
});

//aulascontrollers
// router.post('/cadastro_produtos/criar', ProdutoController.index);
//router.get('\ deletar', ProdutoController, deletarProduto);
module.exports = router;