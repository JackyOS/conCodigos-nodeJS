var express = require('express');
var router = express.Router();
var contactoModel = require('./../../models/contactoModel');


router.get('/', async function (req, res, next) {
    var mensajes = await contactoModel.getContactos();
    //tengo los mensajes

    res.render('admin/contactos', {
        layout: 'admin/layout',
        title: 'Administrador de contactos',
        usuario: req.session.nombre,
        isContactos: true,
        mensajes //para usarlo en el hbs, para mostrar los mensajes que tenga
    });

});


//elimino la novedad
router.get("/eliminar/:id", async (req, res, next) => {
    var id = req.params.id;
    await contactoModel.deleteContactoById(id);
    res.redirect("/admin/contactos")
})





module.exports = router;