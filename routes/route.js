'use strict';

exports.setRoutes = function(app) {
  app.use('/', require('./routers/index'));
  app.use('/user/courses_1/chapter_1', require('./routers/user/courses/chapters/chapter-1'));

  app.use('/user/:course_id', require('./routers/user/courses/course'));

  app.use('/login',require('./routers/login'));
};
