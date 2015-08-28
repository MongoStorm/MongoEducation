'use strict';

var db = require('../models/index');
var Course = db.Course;
var Chapter = db.Chapter;

var Sequelize = require('sequelize');
var CourseHelper = require('../helpers/course-helper');

function CourseController() {

}

CourseController.prototype.index = function(req,res) {

  Course.findAll({

    include: [{
      model: Chapter,
      where: {courseId: Sequelize.col('Course.id')}

    }]
  }).then(function (datas) {

    var courseHelper = new CourseHelper();
    var courses = courseHelper.getFormatData(datas);
    var id = req.params.course_id;
    res.render('course/show',{course:courses[id-1]});

  });
};

module.exports = CourseController;
