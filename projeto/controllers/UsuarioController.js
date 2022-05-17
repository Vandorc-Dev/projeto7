
//const bcrypt = require('bcryptjs/dist/bcrypt');
const req = require('express/lib/request');
const { Usuario } = require('../models');
const { check, validationResult, body } = require('express-validator');

module.exports = {
    create: async (req, res, next) => {
        try {
            await Usuario.create(req.body)
        } catch (error) {
            
            console.log(">>>> ERRO: ", JSON.stringify(error?.parent?.sqlMessage)); //Saber o erro do sequelize
            console.log("-------------------------------");
        }
        res.redirect("/"); // Redirecionando para a Página de Produtos
    },
    login: (req, res)=>{
        res.render('login')
    },

    logar: async (req, res)=> {
        let listaErrors = validationResult(req)
        console.log(req.body)
        if(listaErrors.isEmpty()){
            await Usuario.findOne({
                attributes: ['id', 'email', 'password'],
                
            })

            if(req.body.email && req.body.password){
                console.log('usuarios logado com sicesso')
                logado = req.session
                res.rendirect('/')
            }
        }else{
            return res.render('login', {errors: listaErrors.errors})
        }  
    }
}
