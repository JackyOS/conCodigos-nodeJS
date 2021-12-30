var express = require('express');
var router = express.Router();
var novedadesModel = require("./../models/novedadesModel");
//novedadesModel llama a la base de datos y con select se hace un listado de las novedades
//-modelo-

var cloudinary = require('cloudinary').v2


router.get('/', async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades(); //aca traemos las novedades   -controlador-


  // para la imagen
  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.url(novedad.img_id, {
        width: 960,
        height: 960,
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

  // para la imagen


  res.render('novedades', {
    title: 'Novedades',
    isNovedades: true,
    novedades //se visualizan las novedades en el front (en la pagina web)    -vistas-

  }); //llama a novedades.hbs
});



module.exports = router;