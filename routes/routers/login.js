'use strict';

var express = require('express');
var router = express.Router();
var LoginController = require('../../controllers/login.js');

var loginController = new LoginController();
router.get('/',loginController.index);

module.exports = router;
