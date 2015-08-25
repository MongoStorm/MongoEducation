'use strict';

var express = require('express');
var TeacherController = require('../../controllers/teacher');
var router = express.Router();

var teacherController = new TeacherController();

router.get('/', teacherController.index);

module.exports = router;
