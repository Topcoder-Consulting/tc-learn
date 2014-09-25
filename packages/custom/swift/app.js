'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Swift = new Module('swift');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Swift.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Swift.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Swift.menus.add({
    title: 'Swift',
    link: 'swift example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  Swift.aggregateAsset('css', 'swift.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Swift.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Swift.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Swift.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Swift;
});
