'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('courses/chapters/chapter-1');
});

module.exports = router;
