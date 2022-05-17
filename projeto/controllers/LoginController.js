


const LoginController = {
    logar: (req, res)=>{
        let {emailLogin, passwordLogin} = req.body

        if(emailLogin == email && passwordLogin == senha){
            console.log('Logado com sucesso');
            req.session.emailLogin = "email";
            res.redirect('/');
        }
    }
}

module.exports = LoginController;
