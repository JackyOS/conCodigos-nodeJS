var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Con Codigos',
    isHome:true
  });
});

module.exports = router;
