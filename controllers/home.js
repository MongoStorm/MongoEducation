'use strict';

var allCourses = require('../seeds/courses').courses;

function HomeController() {
}

HomeController.prototype.index = function (req, res) {
  var page = req.query.page || 1;
  var courseNum = 8;

  var totalPages = Math.ceil(allCourses.length / courseNum);

  var courses = allCourses.slice((page - 1) * courseNum, page * courseNum);

  res.render('index', {courses: courses,totalPages: totalPages});
};

module.exports = HomeController;
