'use strict';

module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    employeeId: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Teacher.hasMany(models.Course, {as: 'Course'})
      },
      verify:function(employeeId,password,callback){

        this.findAll({
          where: {
            employeeId: employeeId,
            password: password
          }
        }).then(function(data){

            callback(data);

        })
      }
    }
  });
  return Teacher;
};
