const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('entrou no index');
  res.render('index');
});

module.exports = router;
