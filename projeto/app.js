var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
let { check, validationResult, body } = require('express-validator');
let session = require('express-session');

//let bcrypt = require('bcrypt')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'projeto7', resave: true, saveUninitialized: true}));


app.use('/', require('./routes/index'));
app.use('/usuario', require('./routes/usuario'));


//ROTAS CRIADAS
app.use('/login', require('./routes/login'));
//alteração rota produtos
app.use('/produtos', require('./routes/produtos'));

app.use('/carrinho', require('./routes/carrinho'));

app.use('/admin', require('./routes/admin'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;