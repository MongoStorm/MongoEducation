'use strict';

module.exports = function (sequelize, DataTypes) {
  var Chapter = sequelize.define('Chapter', {
    name: DataTypes.STRING,
    videoUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        Chapter.belongsTo(models.Course, {as: 'Course', foreignKey: 'CourseId'});
      },
      findChaptersData: function (callback) {
        this.findAll({attributes: ['id', 'CourseId', 'name', 'videoUrl']})
          .then(function (datas) {
            var result = [];

            datas.forEach(function (data) {
              result.push(data.dataValues);
            });

            callback(result);
          });
      },
      insertChapterData: function (name, courseId, videoUrl) {
        this.create({name: name, CourseId: courseId, videoUrl:videoUrl});
      }
    }
  });
  return Chapter;
};
