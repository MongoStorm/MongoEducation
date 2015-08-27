'use strict';

var express = require('express');
var router = express.Router();

var TeacherController = require('../../controllers/teacher');
var teacherController = new TeacherController();

router.get('/courses', teacherController.show);

router.post('/courses', teacherController.delete);

router.get('/courses/new',teacherController.new );
router.post('/courses/create',teacherController.create);

module.exports = router;
