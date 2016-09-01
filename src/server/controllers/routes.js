const games = require('./games');

// Define handlers for application routes
module.exports = app => {
  app.get('/', games.home);
  app.get('/about', games.about);
};