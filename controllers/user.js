'use strict';
var db = require('../models/index');

function User() {

}

User.prototype.RegisterCreate = function (req, res) {
  db.Student.add(req.body.email,req.body.password);
  console.log(req.body);
  res.render('index',{})
};

User.prototype.loginIndex = function (req, res) {

  res.render('login');
};

User.prototype.RegisterIndex = function (req, res) {
  res.render('register')
};

User.prototype.submit = function (req, res) {
  //:TODO
};

module.exports = User;
