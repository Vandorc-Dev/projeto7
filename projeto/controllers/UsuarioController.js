const bcrypt = require('bcryptjs')
const { Usuario } = require('../models');

module.exports = {
    //Criar usuario
    create: async (req, res, next) => {
        try {
            await Usuario.create(req.body)
        } catch (error) {
            console.log("ERRO: ", JSON.stringify(error?.parent?.sqlMessage));
        }
        res.redirect("/");
    },

    //Exibir perfil de usuario logado
    perfil: async (req, res, next) => {
        let { id_usuario } = req.params
        let usuarioPerfil = await Usuario.findOne({
            where: {
                id: id_usuario
            }
        })
        return res.render('perfil', { usuarioPerfil })
    },
    //Editar usuario
    editar: async (req, res) => {
        let { id } = req.params;
        let usuario = await Usuario.findByPk(id)
        return res.render('editar_usuario', { usuario })
    },
    update: async (req, res) => {
        let id_user = req.params.id
        const { nome, email, password } = req.body;

        const resultado = await Usuario.update({
            nome,
            email,
            password
        },
            {
                where: {
                    id: id_user
                }
            })
        return res.redirect('/')
    },
    //Deletar usuário
    deletar: async (req, res) => {
        const deletar = await Usuario.destroy({
            where: {
                id: req.params.id
            }
            //Obs. Colocar mensagem de deletado!
        })
        return res.redirect('/')
    },
    //Login usuario
    logar: async (req, res) => {
        let { emailLogin, passwordLogin } = req.body;
        let email = emailLogin;
        let password = passwordLogin;
        let usuario = await Usuario.findOne({
            where: {
                email,
                password
            }
        })
        if (!usuario) {
            //res.redirect('/login');
            let status = false;
            return res.render('login', {status})
        } else {
            if (emailLogin == usuario.email && passwordLogin == usuario.password) {
                console.log('Logado com sucesso');
                req.session.emailLogin = "email";
                res.redirect('/');
            }
        }
    }

}
