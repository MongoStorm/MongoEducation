'use strict';

var db = require('../models/index');

function CourseController() {

}

CourseController.prototype.index = function(req,res) {

  db.Course.findCoursesData(function(coursesData){
     var courses = coursesData;
    db.Chapter.findChaptersData(function(chaptersData){

       console.log(courses);
       console.log(chaptersData);
    });
  });

  res.render('course');
};

module.exports = CourseController;
