'use strict';

function User() {

}

User.prototype.create = function (req, res) {
  //:TODO
};

User.prototype.loginIndex = function (req, res) {
  //:TODO
  res.render('login');
};

User.prototype.loginRegister = function (req, res) {
  //:TODO
};

User.prototype.submit = function (req, res) {
  //:TODO
};

module.exports = User;
