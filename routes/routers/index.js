'use strict';

var express = require('express');
var router = express.Router();

var HomeController = require('../../controllers/home-controller');


var homeController = new HomeController();

router.get('/', homeController.create);


module.exports = router;
