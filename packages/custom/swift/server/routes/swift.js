'use strict';

// The Package is past automatically as first parameter
module.exports = function(Swift, app, auth, database) {

  app.get('/swift/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/swift/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/swift/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/swift/example/render', function(req, res, next) {
    Swift.render('index', {
      package: 'swift'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
