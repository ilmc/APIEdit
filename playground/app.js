'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();

// Include the Swagger UI in the app
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // Use Swagger UI in this app
  app.use(SwaggerUi(swaggerExpress.runner.swagger));

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3000;
  app.listen('3000', '0.0.0.0');

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    //console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
