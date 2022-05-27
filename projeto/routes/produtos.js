const express = require('express');
const router = express.Router();
const { Produto } = require('../models')
const ProdutoController = require('../controllers/ProdutoController');
const {multer} = require('../middlewares');


//Listar produtos
router.get('/', ProdutoController.listar);
//Cadastar produtos
router.get('/cadastro', function (req, res, next) {
    res.render('cadastro_produtos'); 
});

router.post('/create', async function (req, res, next) {
    console.log(JSON.stringify(req.body)); 
    await ProdutoController.create(req, res, next);
    res.render('cadastro_produtos');
});

router.get('/editar/:id', ProdutoController.editar)
router.put('/editar/:id', ProdutoController.update)

router.delete('/deletar/:id', ProdutoController.deletar)


module.exports = router;

/*
function (req, res, next) {
    Produto.findAll().then(function(produtos){
        res.render('produtos', {produtos: produtos}) 
    }); 
}
*/