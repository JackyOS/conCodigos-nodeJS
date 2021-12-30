var express = require('express');
var router = express.Router();
var novedadesModel = require("./../../models/novedadesModel");

//para la imagen
var util = require('util');
var cloudinary = require('cloudinary').v2
const uploader = util.promisify(cloudinary.uploader.upload) //para poder subir la imagen
const destroy = util.promisify(cloudinary.uploader.destroy) //para poder borrar la imagen

// --para la imagen



router.get('/', async function (req, res, next) {

  if (req.url == '/') {
    var novedades = await novedadesModel.getNovedades(); //traigo las novedades de la query

    // para mostrar la imagen
    novedades = novedades.map(novedad => {
      if (novedad.img_id) {
        const imagen = cloudinary.url(novedad.img_id, {
          width: 150,
          height: 90,
          crop: 'fill' //recorta la imagen y se adapta a esos 960
          // crop: 'pad' recorta y se redimensiona la imagen a esos 960
          // crop: 'fill',  //recorta parte de la imagen a las medidas declarada arriba

        });
        return {
          ...novedad,
          imagen
        }//devuelvo la novedad y la imagen
      } else {
        return {
          ...novedad,
          imagen: ''
        }     // si no tengo una imagen, devuelvo solo la novedad
      }

    })



    res.render('admin/novedades', {
      layout: 'admin/layout',
      title: 'Administrador de novedades',
      usuario: req.session.nombre,
      isNovedades: true,
      novedades //imprimo las novedades de la query en el admin/novedades
    }); //ahora debo modificar el admin/novedades.hbs --> pongo un each para ir mostrando las novedades en la tabla 

  } else {

    var url_data = req.url.split("=")
    // console.log("aca esta la palabra buscada " + url_data[1])
    var novedadesEncontradas = await novedadesModel.getNovedadesBuscadas(url_data[1]);

    if (novedadesEncontradas.length !== 0) {

      res.render(`admin/novedades`, {
        layout: 'admin/layout',
        title: 'Administrador de novedades',
        usuario: req.session.nombre,
        novedadesEncontradas //imprimo las novedades que coinciden con la busqueda

      });


    } else {

      res.render(`admin/novedades`, {
        layout: 'admin/layout',
        title: 'Administrador de novedades',
        usuario: req.session.nombre,
        isNovedades: true,
        novedadesEncontradas, //imprimo las novedades que coinciden con la busqueda
        error: true,
        message: 'No se encontraron resultados'
      });


    }

  }

});


//llamamos a la pagina agregar
router.get('/agregar', (req, res, next) => {
  res.render("admin/agregar", { //llama al agregar.hbs
    layout: "admin/layout"
  })
})


//proceso agregar novedades a la base de datos, a traves del metodo post
router.post('/agregar', async (req, res, next) => {
  try {

    //para la imagen-----------
    var img_id = ''
    if (req.files && Object.keys(req.files).length > 0) {
      //si tengo una imagen  (lenght --> si hay algun elemento, es decir, es mayor a cero )
      //entonces subo la imagen
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;

    }
    //para la imagen----------


    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.vencimiento != "" && req.body.cuerpo != "" && req.body.url != "") {
      //con ese if me aseguro que no se deje ningún campo vacio, si o si, titulo, subtitulo y cuerpo deben tener algo escrito para que se guarde la info en la base de datos

      await novedadesModel.insertNovedad({
        ...req.body,  //me traigo el titulo, subtitulo y cuerpo y
        img_id   // me traigo la imagen
      }); // se guardan los datos en la base de datos


      res.redirect("/admin/novedades") //redirecciono a novedades con la novedad nueva


    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Complete todos los campos'
      })
    }

  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargó la novedad'
    })
  }
})


//elimino la novedad
router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;

  let novedad = await novedadesModel.getNovedadById(id)

  if (novedad.img_id) {
    await (destroy(novedad.img_id))
  }

  await novedadesModel.deleteNovedadById(id);



  res.redirect("/admin/novedades")
})



//modificar : primero me traigo la novedad que quiero modificar

router.get("/modificar/:id", async (req, res, next) => {

  var id = req.params.id;
  var novedad = await novedadesModel.getNovedadById(id);
  var imagen_url = ''

  if (novedad.img_id) {
    const imagen = cloudinary.url(novedad.img_id, {
      width: 90,
      height: 90,
      crop: 'fill'
    });
    imagen_url = imagen
  }


  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad,
    imagen_url
  })

})


//luego actualizo las modificiaciones que hice en la novedad
router.post('/modificar', async (req, res, next) => {

  try {


    //para la imagen
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === '1') {
      img_id = null;
      borrar_img_vieja = true;

    } else {
      if (req.files.imagen && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id
        borrar_img_vieja = true;
      }

    }

    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original))

    }


    let obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      vencimiento: req.body.vencimiento,
      cuerpo: req.body.cuerpo,
      url: req.body.url,
      img_id
    }

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la novedad'
    })
  }



})


module.exports = router;