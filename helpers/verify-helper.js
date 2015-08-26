'use strict';
var db = require('../models/index');

function VerifyHelper() {

  this.userInput;
  this.password;
}


VerifyHelper.prototype.verify = function (userinput, password, user, callback) {
  
  if (user = 'student') {
    db.Student.findAll({
      where: {
        email: userinput,
        password: password
      }
    }).then(function (evt) {
      callback(evt.length > 0);
    });

  }
  else if (user = 'teacher') {
    db.Teacher.findAll({
      where: {
        EmployeeId: userinput,
        password: password
      }
    }).then(function (evt) {
      callback(evt.length > 0);
    });
  }


};

module.exports = VerifyHelper;
