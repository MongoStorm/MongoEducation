'use strict';

var express = require('express');
var router = express.Router();

var CourseAddControllerr = require('../../controllers/course-add');
var courseAddControllerr = new CourseAddControllerr();
router.get('/',courseAddControllerr.create );


module.exports = router;
