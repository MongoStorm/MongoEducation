'use strict';

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      verify: function (email, password, callback) {
        this.findAll({
          where: {
            email: email,
            password: password
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

      }
    }
  });
  return Student;
};
