'use strict';

var express = require('express');
var CourseAddController = require('../../controllers/course-add');

var router = express.Router();
var courseAddController = new CourseAddController();

router.get('/',courseAddController.show );
router.post('/',courseAddController.new );

module.exports = router;
