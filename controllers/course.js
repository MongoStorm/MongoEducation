'use strict';

var db = require('../models/index');
var Sequelize = require('sequelize');
var Course = db.Course;
var Chapter = db.Chapter;
function CourseController() {

}

CourseController.prototype.index = function(req,res) {

  Course.findAll({
    include: [{
      model: Chapter,
      where: {courseId: Sequelize.col('Course.id')}
    }]
  }).then(function (datas) {
    var courses = [];
    datas.forEach(function(data) {

      var course = data.dataValues;
      var singleCourse = {id:course.id, name:course.name, description:course.description};
      var chapters = [];
      course.Chapters.forEach(function(chapter) {
        chapters.push(chapter.dataValues);
      });
      singleCourse.chapters = chapters;
      courses.push(singleCourse);
    });
    var id = req.params.course_id;
    res.render('course/show',{course:courses[id-1]});
  });
};

module.exports = CourseController;
