var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('connexion');
});

router.post('/', function(req, res, next) {
  res.render('connexion');
});

module.exports = router;
