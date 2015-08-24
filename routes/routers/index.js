'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teacherProfile', function(req, res) {
  res.render('teacher-profile');
});

router.get('/courseadd', function(req, res) {
  res.render('course-add');
});


module.exports = router;
