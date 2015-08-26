'use strict';

var db = require('../models/index');

var VerifyHelper = require('../helpers/verify-helper');

function User() {

}

User.prototype.RegisterCreate = function (req, res) {
  db.Student.add(req.body.email,req.body.password);

  res.render('index',{})
};

User.prototype.loginIndex = function (req, res) {

  res.render('login');
};

User.prototype.RegisterIndex = function (req, res) {
  res.render('register')
};

User.prototype.submit = function (req, res) {

  var userinput = req.body.userInput;
  var password = req.body.password;
  var user = req.body.user;

  var verifyhelper = new VerifyHelper();

  verifyhelper.verify(userinput,password,user,function(isTrue){
    console.log(isTrue);
    if(isTrue){
      res.cookie('type', user, { expires: new Date(Date.now() + 1800000)});
      res.cookie('id', userinput, { expires: new Date(Date.now() + 1800000)});
      res.send({judge:true});
    }
    else{
      res.send({judge:false});
    }
  });



};

User.prototype.logout = function (req, res) {
  res.clearCookie('id', { path: '/' });
  res.clearCookie('type', { path: '/' });
  res.redirect('/');
};

module.exports = User;
