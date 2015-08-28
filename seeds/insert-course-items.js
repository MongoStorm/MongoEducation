'use strict';

var Course = require('../models/index').Course;
var Category = require('../models/index').Category;
var Chapter = require('../models/index').Chapter;
var path = require('../config/path.json');
var Student = require('../models/index').Student;
var Teacher = require('../models/index').Teacher;

var courses = [

  {"name": "Advance French", "description": "This is an Advanced French course","categoryId": 11, "teacherId": 1},
  {"name": "Basic French", "description": "This is an Basic French course","categoryId": 11, "teacherId": 1},
  {"name": "Middle French", "description": "This is an Middle French course","categoryId": 11, "teacherId": 1},
  {"name": "English Writing1", "description": "This is an English Writing course","categoryId": 122, "teacherId": 1},
  {"name": "English Writing2", "description": "This is an English Writing course","categoryId": 122, "teacherId": 1},
  {"name": "English Writing3", "description": "This is an English Writing course","categoryId": 122, "teacherId": 1},
  {"name": "Japanese Writing1", "description": "This is an Japanese course","categoryId": 131, "teacherId": 1},
  {"name": "Japanese Writing2", "description": "This is an Japanese course","categoryId": 131, "teacherId": 1},
  {"name": "Japanese Writing3", "description": "This is an Japanese course","categoryId": 131, "teacherId": 1},
  {"name": "Android Basic", "description": "This is an Android Basic course","categoryId": 22, "teacherId": 1},
  {"name": "Android Middle", "description": "This is an Android Middle course","categoryId": 22, "teacherId": 1},
  {"name": "Android Advanced", "description": "This is an Android Advanced course","categoryId": 22, "teacherId": 1},
  {"name": "Web Basic", "description": "This is an Web Basic course","categoryId": 21, "teacherId": 1},
  {"name": "Web Middle", "description": "This is an Web Middle course","categoryId": 21, "teacherId": 1},
  {"name": "Web Advanced", "description": "This is an Web Advanced course","categoryId": 21, "teacherId": 1}

];

var categories = [{id: 1, name:'Language'},{id:2 ,name:'Computer'},
  {id:3, name:'Physics'},{id:11,name:'French',parentId:1},
  {id:12, name:'English',parentId:1},{id:13,name:'Japanese',parentId:1},
  {id:21, name:'Web',parentId:2},{id:22,name:'Android',parentId:2},
  {id:122, name:'English Writing',parentId:12},{id:131,name:'Japenese Writing',parentId:13}
];

Category.bulkCreate(categories).then(function (data) {
  Course.bulkCreate(courses).then(function(){
    Chapter.bulkCreate([{name: '1', videoUrl:path.video+'1-1.ogg', courseId: 1},
      {name: '2', videoUrl:path.video+'1-2.ogg', courseId: 1},
      {name: '3', videoUrl:path.video+'1-2.ogg', courseId: 1},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 2},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 3},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 4},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 5},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 6},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 7},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 8},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 9},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 10},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 11},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 12},
      {name: '1', videoUrl:path.video+'1-2.ogg', courseId: 13}
    ]);
  })
});

Student.bulkCreate([
  {email:'12345678@qq.com',password:'1234567'},
  {email:'zxcvbnm@163.com',password:'1234567'},
  {email:'star@163.com',password:'12345676'},
  {email:'mongo@163.com',password:'12345676'}
]);

Teacher.bulkCreate([
  {employeeId:1,password:'123456'},
  {employeeId:2,password:'123456'},
  {employeeId:3,password:'123456'},
  {employeeId:4,password:'123456'},
  {employeeId:5,password:'123456'},
  {employeeId:6,password:'123456'}
]);
