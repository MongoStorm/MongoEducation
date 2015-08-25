'use strict';

var express = require('express');
var router = express.Router();
var HomeController = require('../../controllers/home-controller');

var homeController = new HomeController();

router.get('/', homeController.create);

router.get('/teacherProfile', function(req, res) {
  res.render('teacher-profile');
});



module.exports = router;
