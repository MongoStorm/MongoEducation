'use strict';

var db = require('../models/index');
var video = require('../config/video.json');

db.Course.create({name: 'bootstrap', description: 'Bootstrap'}).then(function (bootstrap) {
  db.Chapter.bulkCreate([{name: 'first', videoUrl:video.path+'1-1.ogg'}, {name: 'second', videoUrl:video.path+'1-2.ogg'}])
    .then(function () {
      db.Chapter.findAll().then(function (chapters) {
        bootstrap.setChapter(chapters);
      });
    });
});

db.Course.create({name: 'Sequlize', description: 'Sequelize is a promise-based ORM for Node.js and io.js. '});

db.Teacher.create({EmployeeId: 131232113, password: '123456'}).then(function(teacher) {
  db.Course.findAll().then(function(courses) {
    teacher.setCourse(courses);
  });
});
