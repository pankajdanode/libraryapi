var express = require('express');
var router = express.Router();

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('in /routes/index.js');
}); */


 router.get('/', function(req, res) {
  res.redirect('/catalog');
}); 

module.exports = router;