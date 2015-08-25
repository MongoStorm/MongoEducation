'use strict';
var db = require('./index');

function Register(){

}
Register.prototype.insert = function(email,password){
  db.Students.create({email:email,password:password})
};


