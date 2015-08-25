'use strict';

exports.setRoutes = function(app) {
  app.use('/', require('./routers/index'));
  app.use('/courses/:course_id/chapters/:chapter_id', require('./routers/chapter'));

  app.use('/courses/:course_id', require('./routers/course'));


  app.use('/login',require('./routers/login'));


  app.use('/courseadd',require('./routers/course-add'));


  app.use('/register',require('./routers/register'));


  app.use('/profile', require('./routers/profile'));

};
