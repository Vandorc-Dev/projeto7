const express = require('express');
const router = express.Router();
const { Produto } = require('../models')
const ProdutoController = require('../controllers/ProdutoController');
let multer = require('multer')


//--------------------
const uploaded = multer({ dest: '../public/uplouds' })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/uplouds')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
//-----------------------------------------
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
router.post('/create', upload.single('image'),async function (req, res, next) {
    console.log('Chegou na rota POST /cadastro_produtos/create');
    console.log(JSON.stringify(req.body)); // Imprimindo o Objeto que veio do Formulário

    await ProdutoController.create(req, res, next);// Chamando o Controller para Criar o Produto
    res.render('cadastro_produtos');
});


router.put('/:id/editar', Produto.findOne)
//aulascontrollers
// router.post('/cadastro_produtos/criar', ProdutoController.index);
//router.get('\ deletar', ProdutoController, deletarProduto);
module.exports = router;