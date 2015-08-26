'use strict';
var db = require('../models/index');

function VerifyHelper() {

  this.userInput;
  this.password;
}


VerifyHelper.prototype.verify = function (userinput, password, user) {

  if (user = 'student') {
    db.Student.findAll({
      attributes: ['id', 'name'],
      where: {
        TeacherId: 1
      }
    }).then(function (courses) {
      callback(getCourses(courses));
    });

  }
  else if (user = 'teacher') {

  }


};
