'use strict';

exports.setRoutes = function(app) {
  app.use('/', require('./routers/index'));

  app.use('/courses', require('./routers/chapter'));

  app.use('/courses', require('./routers/course'));

  app.use('/management', require('./routers/management'));

};
