var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');


router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout',
    title: 'Login'
  });
});


//cerrar sesión
router.get("/logout", async function (req, res, next) {

  req.session.destroy(); //destruyo las variables de sesión 
  res.render("admin/login", {
    layout: "admin/layout"
  })

})


router.post('/', async (req, res, next) => {
  try {
    //creo las variables usuario y pass y almaceno lo que se escribe en el login (en user y pass)
    var usuario = req.body.usuario;
    var password = req.body.password;
    console.log(req.body);

    //pongo el usuario y el pass de arriba en la función getUser... para que haga la consulta al sql
    var data = await usuariosModel.getUserAndPassword(usuario, password);

    //hago la validación => me fijo si el usuario existe o no
    if (data != undefined) {

      req.session.id_usuario = data.id; //guardo el dato del id que tomo de la query (phpadmin)
      req.session.nombre = data.usuario;  //guardo el dato del usuario que tomo de la query (phpadmin), esto es para que me diga "HOLA (USUARIO)", al iniciar sesión
      //filtro= nos aseguramos que no se va a pasar a novedades, si no entra como una variable de sesión, es decir, si ponemos la ruta /admin/novedades sin loguearnos o iniciar sesioón

      //si existe=> me redirecciona a novedades 
      res.redirect('/admin/novedades')
    } else {
      //si no existe=> me voy a login y habilito el error para poder mandar algun mensaje.
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      })
    }

  } catch (error) {
    console.log(error)
  }

}); //cierra el post






module.exports = router;
