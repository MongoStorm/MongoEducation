'use strict';

function User() {

}

User.prototype.RegisterCreate = function (req, res) {
  console.log(req.body);
  res.render('index')
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
