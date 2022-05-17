const express = require('express')
const multer = require('multer')

const router = express.Router()

const axios = require('axios').default

const { Produto } = require('../models')

const upload = multer({
    dest: 'public/uploads/'
})

router.get('/produtos', async function(req, res) {
    const obj = {
        produtos: await Produto.findAll()
    }
    res.render('admin/produtos', obj)
})

router.get('/categorias', async function(req, res) {

    const obj = {
        categorias: await Categoria.findAll()
    }
    res.render('admin/categorias', obj)
})





function validaCadastroProduto(req, res, next) {
    if (!req.body.nome || !req.body.descricao || !req.body.valor) {
        res.render('erro-validacao', { mensagemErro: 'Preencha todos os campos' })
        return
    }
    if (req.body.nome.length <= 3) {
        res.render('erro-validacao', { mensagemErro: 'O tamanho do nome deve ser maior do que 3 caracteres' })
        return
    }
    if (req.body.descricao.length <= 10) {
        res.render('erro-validacao', { mensagemErro: 'O tamanho da descrição deve ser maior do que 3 caracteres' })
        return
    }
    if (isNaN(req.body.valor)) {
        res.render('erro-validacao', { mensagemErro: 'O preço não é um número válido' })
        return
    }
    next()
}

router.post('/produtos/criar', upload.single('imagemProduto'), validaCadastroProduto, async function(req, res) {
    req.body.imagem = req.file.filename

    await Produto.create(req.body)

    res.redirect('/admin/produtos')
})





router.get('/meus-dados', function(req, res) {
    res.render('admin/meus-dados')

})

router.get('/produtos/:idProduto/remover', async function(req, res) {

    const idProduto = req.params.idProduto
    await Produto.destroy({
        where: {
            id: idProduto
        }
    })

    res.redirect('/admin/produtos')
})



router.get('/produtos/:idProduto/editar', async function(req, res) {
    const idProduto = req.params.idProduto
    const produto = await Produto.findByPk(idProduto, {
        include: {
            model: Categoria,
            as: 'categoria'
        }
    })

    if (!produto) {
        res.render('erro-validacao', { mensagemErro: 'Produto não existe' })
        return
    }

    const obj = {
        produto: produto
    }

    res.render('admin/editar-produto', obj)
})

router.post('/produtos/:idProduto/editar', async function(req, res) {

    const idProduto = req.params.idProduto

    await Produto.update(req.body, {
        where: {
            id: idProduto
        }
    })

    res.redirect('/admin/produtos')
})

module.exports = router