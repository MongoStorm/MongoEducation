'use strict';
var bcrypt = require('../node_modules/bcrypt-nodejs/bCrypt');

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      verify: function (email, password, callback) {
        var salt = bcrypt.genSaltSync(8);
        var hash = bcrypt.hashSync(password,salt,null);
        this.findAll({
          where: {
            email: email,
            password: hash
          }
        }).then(function (data) {
          callback(data.length > 0);
        })
      },
      judge: function (email,callback) {
        this.findAll({
          where: {
            email: email
          }
        }).then(function (result) {
          callback(result.length > 0);
        });
      },
      add:function(email,password){
        var salt = bcrypt.genSaltSync(8);
        var hash = bcrypt.hashSync(password,salt,null);
        this.create({email: email, password: hash});
      }
    }
  });
  return Student;
};
