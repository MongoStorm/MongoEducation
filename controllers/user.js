'use strict';

var db = require('../models/index');

function User() {

}

User.prototype.RegisterCreate = function (req, res) {
  db.Student.add(req.body.email, req.body.password);

  res.render('index', {})
};

User.prototype.loginIndex = function (req, res) {

  res.render('login');
};

User.prototype.RegisterIndex = function (req, res) {
  res.render('register')
};

User.prototype.submit = function (req, res) {

  var userInput = req.body.userInput;
  var password = req.body.password;
  var user = req.body.userIdentity;

  if (user === 'student') {
    db.Student.verify(userInput, password, function (isTrue) {

      if (isTrue) {
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

    db.Teacher.verify(userInput, password, function (isTrue) {
      if (isTrue) {
        res.cookie('type', user, {expires: new Date(Date.now() + 1800000)});
        res.cookie('id', userInput, {expires: new Date(Date.now() + 1800000)});
        res.send({isTrue: true});
      }
      else {
        res.send({isTrue: false});
      }
    });
  }

};

User.prototype.logout = function (req, res) {
  res.clearCookie('id', {path: '/'});
  res.clearCookie('type', {path: '/'});
  res.redirect('/');
};

module.exports = User;
