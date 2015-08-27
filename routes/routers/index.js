'use strict';

var express = require('express');
var router = express.Router();

var HomeController = require('../../controllers/home');
var homeController = new HomeController();

var User = require('../../controllers/user.js');
var user = new User();

router.get('/', homeController.index);

router.get('/page-content',homeController.page);

router.get('/category',homeController.classify);

router.get('/login', user.loginIndex);
router.post('/login', user.submit);

router.get('/register', user.registerIndex);
router.post('/register',user.addUser);
router.post('/register/judge',user.isRepeat);

router.get('/logout', user.logout);


module.exports = router;
