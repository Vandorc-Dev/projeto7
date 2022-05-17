
const { Usuario } = require('../models');

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
    login: (req, res, next)=>{
        res.redirect('/');
    }
}
