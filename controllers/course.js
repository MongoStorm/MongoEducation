'use strict';

var db = require('../models/index');
var CourseHelper = require('../helpers/course-helper');
function CourseController() {

}

CourseController.prototype.index = function(req,res) {

  db.Course.findCoursesData(function(coursesData) {
    var courses = coursesData;
    db.Chapter.findChaptersData(function(chapters) {

      var courseHelper = new CourseHelper();
      var viewData = courseHelper.getFormatData(courses,chapters);
      var id = req.params.course_id;
      console.log(id);
      res.render('course',{course:viewData[id-1]});
    });
  });


};

module.exports = CourseController;
