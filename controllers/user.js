'use strict';

var db = require('../models/index');

var VerifyHelper = require('../helpers/verify-helper');

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
  var userinput = req.body.data.userInput;
  var password = req.body.data.password;
  var user = req.body.data.user;

  var verifyhelper = new VerifyHelper();
  var isTrue = verifyhelper.verify(userinput,password,user);

  if(isTrue){

  }
  else{

  }

};

User.prototype.logout = function (req, res) {
  res.clearCookie('id', { path: '/' });
  res.clearCookie('type', { path: '/' });
  res.redirect('/');
};

module.exports = User;
