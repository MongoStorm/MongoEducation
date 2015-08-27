'use strict';

exports.setRoutes = function(app) {
  app.use('/', require('./routers/index'));

  app.use('/courses', require('./routers/chapter'));

  app.use('/courses', require('./routers/course'));





  app.use('/new',require('./routers/course-add'));





  app.use('/management', require('./routers/management'));

};
