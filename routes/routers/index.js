'use strict';

var express = require('express');
var router = express.Router();

var HomeController = require('../../controllers/home');
var homeController = new HomeController();

var User = require('../../controllers/user.js');
var user = new User();

var TeacherController = require('../../controllers/teacher');
var teacherController = new TeacherController();

router.get('/', homeController.index);

router.get('/search',homeController.search);


router.get('/login', user.loginIndex);
router.post('/login', user.submit);

router.get('/register', user.RegisterIndex);
router.post('/register',user.RegisterCreate);

router.get('/logout', user.logout);

router.get('/management/courses', teacherController.show);

router.post('/management/courses', teacherController.delete);

module.exports = router;
