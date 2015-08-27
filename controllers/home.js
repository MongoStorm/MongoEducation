'use strict';

var Course = require('../models/index').Course;
var Category = require('../models/index').Category;

function HomeController() {
}

HomeController.prototype.index = function (req, res) {

  Course.pageAll(8,req.query.page,function(totalPages,courses) {
    res.render('index', {courses: courses, totalPages: totalPages, query: ''});
  });
};

HomeController.prototype.page = function (req, res) {

  Course.queryAndPage(8,req.query.page,req.query.query,function(totalPages,courses) {
    res.render('page-content', {courses: courses, totalPages: totalPages});
  });
};

HomeController.prototype.classify = function (req, res) {

  Category.findAll({where: {parentId: req.query.id }}).then(function(categories) {
    res.render('category', {parentId: req.query.id,level:+req.query.level+1,categories: categories});
  });

};

module.exports = HomeController;
