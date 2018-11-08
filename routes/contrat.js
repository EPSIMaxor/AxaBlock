var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contrat');
});


router.post('/', function(req, res, next) {
    res.render('contrat');
  });
module.exports = router;
