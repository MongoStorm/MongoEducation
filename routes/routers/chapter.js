'use strict';

var express = require('express');
var router = express.Router();
var Controller = require('../../controllers/chapter');

var controller = new Controller();
router.get('/:course_id/chapters/:chapter_id',controller.show);

module.exports = router;
