'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teacherProfile', function(req, res) {
  res.render('teacher-profile');
});

module.exports = router;
