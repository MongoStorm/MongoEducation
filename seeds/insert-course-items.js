'use strict';

var Course = require('../models/index').Course;
var Category = require('../models/index').Category;
var Chapter = require('../models/index').Chapter;
var video = require('../config/video.json');

var courses = [
  {"name": "Math1", "description": "This is an English course","categoryId": 1},
  {"name": "Math2", "description": "This is an English course","categoryId": 2},
  {"name": "Math3", "description": "This is an English course","categoryId": 3},
  {"name": "Math4", "description": "This is an English course","categoryId": 11},
  {"name": "Math5", "description": "This is an English course","categoryId": 11},
  {"name": "Math6", "description": "This is an English course","categoryId": 1},
  {"name": "Math7", "description": "This is an English course","categoryId": 2},
  {"name": "Math8", "description": "This is an English course","categoryId": 3},
  {"name": "Math9", "description": "This is an English course","categoryId": 12},
  {"name": "Math10", "description": "This is an English course","categoryId": 13},
  {"name": "Math11", "description": "This is an English course","categoryId": 13 },
  {"name": "Math12", "description": "This is an English course","categoryId": 3},
  {"name": "Math13", "description": "This is an English course","categoryId": 21},
  {"name": "Math14", "description": "This is an English course","categoryId":11 },
  {"name": "Math15", "description": "This is an English course","categoryId": 13},
  {"name": "Math16", "description": "This is an English course","categoryId": 13 },
  {"name": "Math17", "description": "This is an English course","categoryId": 11},
  {"name": "Math18", "description": "This is an English course","categoryId": 11},
  {"name": "Math19", "description": "This is an English course","categoryId": 11},
  {"name": "Math20", "description": "This is an English course","categoryId": 11},
  {"name": "Math21", "description": "This is an English course","categoryId": 12},
  {"name": "Math22", "description": "This is an English course","categoryId": 12},
  {"name": "Math23", "description": "This is an English course","categoryId": 21},
  {"name": "Math24", "description": "This is an English course","categoryId": 21},
  {"name": "Math25", "description": "This is an English course","categoryId": 22},
  {"name": "Math26", "description": "This is an English course","categoryId": 13},
  {"name": "Math27", "description": "This is an English course","categoryId": 11},
  {"name": "Math28", "description": "This is an English course","categoryId": 12},
  {"name": "Math29", "description": "This is an English course","categoryId": 12},
  {"name": "Math30", "description": "This is an English course","categoryId": 122},
  {"name": "Math31", "description": "This is an English course","categoryId": 21},
  {"name": "Math32", "description": "This is an English course","categoryId": 22},
  {"name": "Math33", "description": "This is an English course","categoryId": 11},
  {"name": "Math34", "description": "This is an English course","categoryId": 21},
  {"name": "Math35", "description": "This is an English course","categoryId": 13},
  {"name": "Math36", "description": "This is an English course","categoryId": 121},
  {"name": "Math37", "description": "This is an English course","categoryId": 122},
  {"name": "Math38", "description": "This is an English course","categoryId": 131},
  {"name": "Math39", "description": "This is an English course","categoryId": 13}

];

var categories = [{id: 1, name:'1'},{id:2 ,name:'2'},
  {id:3, name:'3'},{id:11,name:'11',parentId:1},
  {id:12, name:'12',parentId:1},{id:13,name:'13',parentId:1},
  {id:21, name:'21',parentId:2},{id:22,name:'22',parentId:2},
  {id:122, name:'122',parentId:12},{id:131,name:'131',parentId:13}
];

Category.bulkCreate(categories).then(function (data) {
  Course.bulkCreate(courses).then(function(){
    Chapter.bulkCreate([{name: '1', videoUrl:video.path+'1-1.ogg', courseId: 1},
      {name: '2', videoUrl:video.path+'1-2.ogg', courseId: 1},
      {name: '3', videoUrl:video.path+'1-2.ogg', courseId: 1},
      {name: '1', videoUrl:video.path+'1-2.ogg', courseId: 2},
      {name: '2', videoUrl:video.path+'1-2.ogg', courseId: 2},
      {name: '3', videoUrl:video.path+'1-2.ogg', courseId: 2}]);
  })
});


