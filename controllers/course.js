'use strict';

var db = require('../models/index');
var Sequelize = require('sequelize');
function CourseController() {

}

CourseController.prototype.index = function(req,res) {

  db.Course.findAll({
        include: [{
          model: db.Chapter,
          where: {courseId: Sequelize.col('db.Course.id')}
      }]
  }).then(function (datas) {
    res.render('course',datas);
  });

};

module.exports = CourseController;
