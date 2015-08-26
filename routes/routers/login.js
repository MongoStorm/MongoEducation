'use strict';

var express = require('express');
var router = express.Router();

var User = require('../../controllers/user.js');
var user = new User();

router.get('/', user.loginIndex);
router.post('/', user.submit);
router.get('/logout', user.logout);

module.exports = router;
