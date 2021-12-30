var express = require('express');
var router = express.Router();
var contatoModels = require('./../models/contactoModel');


var nodemailer = require('nodemailer'); // para poder trabajar con el envio de mail(formulario)

router.get('/', function(req, res, next) {
  res.render('contacto', {
    title: 'Contacto',
    isContacto:true
  }); //llama a contacto.hbs
});


router.post('/', async(req, res, next)=> {
  console.log(req.body); // para ver si los datos estan pasando desde el formulario hasta el js, o no 
  // crear variables
  // console.log(req.body.nombre) me muestra lo que se escribió en el input nombre
  var nombre = req.body.nombre;
  var email = req.body.email;
  var motivo = req.body.motivo;
  var comentario = req.body.comentario;

  // ese es el mensaje que voy a recibir cuando alguien complete el formulario
  var obj = {
    to: "jacky04_20@hotmail.com",
    subject: "Contacto desde la web Con Codigos",
    html: nombre + " se contactó a traves de la web y quiere mas info a este correo " + email + ". <br> El motivo del mensaje es: " + motivo +  "<br> Ademas hizo el siguiente comentario: " + comentario
  }

  await contatoModels.insertMensaje(req.body) //guardo la info en la base de datos (ver contactoModel.js)

  // PONGO LOS DATOS DE ARCHIVO .env
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  //se espera que el trasnport envie el mail (cuando uno hace click en enviar en el formulario)
  var info = await transport.sendMail(obj);

  //una vez que se envia el mensaje ¿que pasa? => le digo que muestre tal cosa:
  //me abre contacto y me pone un mensaje: (podemos poner un alerta o lo que queramos)
  res.render('contacto', {
    isContacto:true,
    message: "Mensaje enviado correctamente"
  })
  //hay que poner  {{mesagge}} en el hbs contacto


})



module.exports = router;