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

  var id = req.query.categoryId || '';
  Course.queryAndPage(8,req.query.page,req.query.query,id ,function(totalPages,courses) {
    res.render('page-content', {courses: courses, totalPages: totalPages});
  });
};

HomeController.prototype.classify = function (req, res) {

  var id = req.query.id || null;
  Category.findAll({where: {parentId: id }}).then(function(categories) {
    res.render('category', {parentId: id,level:+req.query.level+1,categories: categories});
  });

};

module.exports = HomeController;
