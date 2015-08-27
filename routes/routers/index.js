'use strict';

var express = require('express');
var router = express.Router();

var HomeController = require('../../controllers/home');
var homeController = new HomeController();

var User = require('../../controllers/user.js');
var user = new User();

router.get('/', homeController.index);

router.get('/search',homeController.search);


router.get('/login', user.loginIndex);
router.post('/login', user.submit);

router.get('/register', user.RegisterIndex);
router.post('/register',user.RegisterCreate);

router.get('/logout', user.logout);

module.exports = router;
