'use strict';

var Course = require('../models/index').Course;

function HomeController() {
}

HomeController.prototype.index = function (req, res) {

  Course.pageAll(8,req.query.page-1,function(totalPages,courses) {
    res.render('index', {courses: courses, totalPages: totalPages, query: ''});
  });

};

HomeController.prototype.search = function (req, res) {

  Course.queryAndPage(8,req.query.page-1,req.query.query,function(totalPages,courses) {
    res.render('index', {courses: courses, totalPages: totalPages, query: req.query.query});
  });

};

module.exports = HomeController;
