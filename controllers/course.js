'use strict';

var CourseDataHelper = require('../helpers/course-data-helper');

function CourseController() {

}

CourseController.prototype.index = function(req,res) {

  var courseDataHelper = new CourseDataHelper();

  courseDataHelper.getCourseData(function(courses) {
    console.log(courses);
    res.render('course',courses);
  });
  courseDataHelper.getChapterData(function(chapters) {
    console.log(chapters);
  });


};

module.exports = CourseController;
