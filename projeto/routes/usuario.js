const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const router = express.Router();


//Mostrar página de cadastro
router.get('/cadastro', function(req, res){
    res.render('cadastro_usuario');
})
//Criar usuario
router.post('/create', async function (req, res, next) {
    console.log(JSON.stringify(req.body));
    await UsuarioController.create(req, res, next);
    res.render('index');
});

//Buscar um usuario
router.get('/perfil/:id_usuario', UsuarioController.perfil)

module.exports = router;

//Editar usuario
router.get('/editar/:id', UsuarioController.editar)
router.put('/editar/:id', UsuarioController.update)

//Deletar usuario

router.delete('/deletar/:id', UsuarioController.deletar)



