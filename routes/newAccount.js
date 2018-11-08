var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newAccount');
});


router.post('/', function(req, res, next) {
    res.render('newAccount');
  });
module.exports = router;
