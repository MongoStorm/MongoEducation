'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('partials/_course');
});

module.exports = router;
