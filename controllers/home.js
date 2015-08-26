'use strict';

var db = require('../models/index');

function HomeController() {
}

HomeController.prototype.index = function (req, res) {

  db.Course.findCoursesData(function (allCourses) {
    var page = req.query.page || 1;
    var courseNum = 8;

    var totalPages = Math.ceil(allCourses.length / courseNum);

    var courses = allCourses.slice((page - 1) * courseNum, page * courseNum);

    res.render('index', {courses: courses, totalPages: totalPages});
  });

};

module.exports = HomeController;
