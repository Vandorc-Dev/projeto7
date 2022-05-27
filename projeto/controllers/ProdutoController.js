const { Produto } = require('../models')

module.exports = {
    create: async(req, res, next) => {
        console.log(JSON.stringify(req.body));
        try {
            await Produto.create(req.body)
        } catch (error) {
            console.log(error.status);
        }
        res.redirect("/"); 
    },

    listar: async (req, res) => {
        let produtos = await Produto.findAll();
        return res.render('index', {produtos: produtos})
    },

    editar: async (req, res) => {
        let { id } = req.params;
        let produto = await Produto.findByPk(id)
        return res.render('editar_produto', { produto })
    },



    update: async (req, res) => {
        let produto = req.params.id
        const { nome, marca, descricao, valor, image } = req.body;

        const resultado = await Produto.update({
            nome,
            marca,
            descricao,
            valor
        },
            {
                where: {
                    id: produto
                }
            })
        return res.redirect('/')
    },


    deletar: async (req, res) => {
        const deletar = await Produto.destroy({
            where: {
                id: req.params.id
            }
            //Obs. Colocar mensagem de deletado!
        })
        return res.redirect('/')
    },


}



/*
    insertImage: async (req, res, next) => {
        try {
            const image = `${HOST}:${PORT}/uploads/${req.file.filename}`;
            await Produto.update({ image }, { where: { id: req.params.id } });
            let produtos = await Produto.findAll();
            return res.render('index', { produtos: produtos });
        } catch (err) {
            return next(err);
        }
    },*/