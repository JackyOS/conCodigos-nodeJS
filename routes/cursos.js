var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cursos', {
    title: 'Cursos',
    isCursos:true
  }); //llama a cursos.hbs
});

module.exports = router;
