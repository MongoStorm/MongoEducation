'use strict';

var Course = require('../models/index').Course;

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
  var allCategories = [{id: 1,name:'1',parentId:0},
    {id: 2,name:'2',parentId:0}, {id: 3,name:'3',parentId:0},
    {id: 11,name:'11',parentId:1},{id: 12,name:'12',parentId:1},
    {id: 21,name:'21',parentId:2},{id: 22,name:'22',parentId:2},
    {id: 31,name:'31',parentId:3},{id:331,name:'331',parentId:31}
  ];

  function find(parentId) {
    var result = [];
    allCategories.forEach(function (item) {

      if(item.parentId.toString() === parentId.toString() ) {
        result.push(item);
      }
    });

    return result;
  }

  var categories = find(req.query.id);

  res.render('category', {parentId: req.query.id,level:+req.query.level+1,categories: categories});
};

module.exports = HomeController;
