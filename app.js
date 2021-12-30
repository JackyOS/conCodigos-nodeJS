var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require ('express-fileupload');

require('dotenv').config(); //es para el servidor de prueba, para trabajar con los datos del .env 
var session = require('express-session');  //primero se instala la dependencia npm i express-session
//variables de sesión: sirve para ver cuanto tiempo esta logueada una persona, 
//restringe el acceso a la parte de admin si no estas logueado, etc
//ver linea 33

var indexRouter = require('./routes/index'); //llama al index.js
var cursosRouter = require('./routes/cursos') //llama a cursos.js
var novedadesRouter = require('./routes/novedades'); //llama a novedades.js
var contactoRouter = require('./routes/contacto'); //llama a contacto.js

var loginRouter = require('./routes/admin/login');  //llama a login.js
var novedadesAdminRouter = require('./routes/admin/novedades');
var contactosAdminRouter = require('./routes/admin/contactos');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// https://www.npmjs.com/package/express-session
//este codigo va antes del app.use(todas las paginas que creamos) , sino no funciona
//es como un doble control
app.use(session({
  secret: '13fyug3214g343254GFfwrsf4h2i5ho5h', //clave secreta que nosotros inventemos
  resave: false,
  saveUninitialized: true
}))
//falta colocar el codigo  secured 
// generamos las variables de session para que tome el dato del id y del usuario y despues e implementa en el login.js 
//con esto evitamos que un usuario entre a la parte de novedades sin pasar por el login (ej: escribiendo la ruta /admin/novedades). Con esto obligamos a cualquiera a que inicie sesión si o si, para poder ir a admin/novedades 
secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);

    if (req.session.id_usuario) {
      next(); //si me logueo, paso/next a lo que sigue, en este caso, voy a admin/novedades
    } else {
      res.redirect('/admin/login')
    }

  } catch (error) {
    console.log(error)
  }
} // y ahora ponemos secured en el app.use de admin/novedades.
//ahora falta modificar el login (cuando traemos los datos, estos se guardan en variables de sesión)


//es para subir imagenes
app.use(fileUpload ({
  useTempFiles:true,
  tempFileDir:'/tmp/' 
}));


app.use('/', indexRouter);  //llama al modulo js que llama al hbs
app.use("/cursos", cursosRouter);
app.use("/novedades", novedadesRouter);
app.use("/contacto", contactoRouter);

app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, novedadesAdminRouter); 
//secured es la seguridad, se fija si estan pasando las variables de sesion, si lo estan pasando, permite entrar a admin/novedades, sinó vuelve al login

app.use('/admin/contactos', secured,  contactosAdminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
