'use strict';

module.exports = function (sequelize, DataTypes) {
  var Chapter = sequelize.define('Chapter', {
    name: DataTypes.STRING,
    videoUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        Chapter.belongsTo(models.Course, {as: 'Course', foreignKey: {name:'id'}});
      },
      findChaptersData: function (callback) {
        this.findAll({attributes: ['id', 'courseId', 'name', 'videoUrl']})
          .then(function (datas) {
            callback(datas);
          });
      }
    }
  });
  return Chapter;
};
