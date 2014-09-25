'use strict';

// The Package is past automatically as first parameter
module.exports = function(Apex, app, auth, database) {

  app.get('/apex/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/apex/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/apex/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/apex/example/render', function(req, res, next) {
    Apex.render('index', {
      package: 'apex'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
