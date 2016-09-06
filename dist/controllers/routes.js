'use strict';

var games = require('./games');

// Define handlers for application routes
module.exports = function (app) {
  app.get('/', games.home);
  app.get('/about', games.about);
  app.get('/platforms', games.platforms);
  app.get('/random', games.random);
  app.get('/find', games.find);
  app.get('/info', games.info);
  app.get('/games', games.games);
  app.get('/platform', games.platform);
};