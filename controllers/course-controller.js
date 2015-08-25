'use strict';

var CourseDataHelper = require('../helpers/course-data-helper');

function CourseController() {

}

CourseController.prototype.index = function(req,res) {

  var courseDataHelper = new CourseDataHelper();
  courseDataHelper.getCourseData(function(data){
    console.log(data);
  });

  res.render('_course');
};

module.exports = CourseController;
