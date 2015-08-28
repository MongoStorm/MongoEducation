'use strict';
var bcrypt = require('../node_modules/bcrypt-nodejs/bCrypt');

module.exports = function (sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      verify: function (email, password, callback) {
        this.find({
          where: {
            email: email
          }
        }).then(function (data) {
            console.log(data);
          if (data) {
            var hash = data.dataValues.password;
            var isTrue = bcrypt.compareSync(password, hash);
            isTrue === true ? callback(true) : callback(false);
          }
          else {
            callback(false);
          }
        })
      },
      judge: function (email, callback) {
        this.findAll({
          where: {
            email: email
          }
        }).then(function (result) {
          callback(result.length > 0);
        });
      },
      add: function (email, password) {
        var salt = bcrypt.genSaltSync(8);
        var hash = bcrypt.hashSync(password, salt, null);
        this.create({email: email, password: hash});
      }
    }
  });
  return Student;
};
