'use strict';

var express = require('express');
var router = express.Router();
var User = require('../../controllers/user');
var user = new User();

router.get('/', user.RegisterIndex);

router.post('/',user.RegisterCreate);

module.exports = router;

