'use strict';

var express = require('express');
var router = express.Router();

var User = require('../../controllers/user.js');
var user = new User();

router.get('/', user.loginIndex);
router.post('/', user.submit);

module.exports = router;
