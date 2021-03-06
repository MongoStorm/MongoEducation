'use strict';

var db = require('../models/index');

function UserController() {
}

UserController.prototype.addUser = function (req, res) {
  db.Student.add(req.body.email, req.body.password);
  res.cookie('type', 'student', {expires: new Date(Date.now() + 1800000)});
  res.cookie('id', req.body.email, {expires: new Date(Date.now() + 1800000)});
  res.redirect('/');

};

UserController.prototype.loginIndex = function (req, res) {
  res.render('./user/login');
};

UserController.prototype.registerIndex = function (req, res) {
  res.render('./user/register')
};

UserController.prototype.submit = function (req, res) {
  var userInput = req.body.userInput;
  var password = req.body.password;
  var user = req.body.userType;

  if (user === 'student') {

    db.Student.verify(userInput, password, function (data) {

      if (data) {
        res.cookie('studentId', data.dataValues.id, {expires: new Date(Date.now() + 1800000)});
        res.cookie('type', user, {expires: new Date(Date.now() + 1800000)});
        res.cookie('id', userInput, {expires: new Date(Date.now() + 1800000)});
        res.send({isTrue: true});
      }
      else {
        res.send({isTrue: false});
      }
    });

  }
  else if (user === 'teacher') {
    var teacherIdValidation = /^[0-9]\d*$/;
    if (teacherIdValidation.test(userInput)) {
      db.Teacher.verify(userInput, password, function (data) {
        if (data) {
          res.cookie('teacherId', data.dataValues.id, {expires: new Date(Date.now() + 1800000)});
          res.cookie('type', user, {expires: new Date(Date.now() + 1800000)});
          res.cookie('id', userInput, {expires: new Date(Date.now() + 1800000)});
          res.send({isTrue: true});
        }
        else {
          res.send({isTrue: false});
        }
      });

    }
    else {
      res.send({isTrue: false});
    }
  }
};

UserController.prototype.logout = function (req, res) {
  res.clearCookie('id', {path: '/'});
  res.clearCookie('type', {path: '/'});
  res.clearCookie('teacherId', {path: '/'});
  res.redirect('/');
};

UserController.prototype.isQualified = function (req, res) {
  db.Student.registerVerify(req.param('email'), req.param('password'), function (verify) {
    res.send(verify);
  });
};

module.exports = UserController;
