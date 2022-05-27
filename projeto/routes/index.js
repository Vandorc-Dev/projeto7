const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController')
const { multer } = require('../middlewares');

/* GET home page. */
router.get('/', ProdutoController.listar);


module.exports = router;
