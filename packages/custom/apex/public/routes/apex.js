'use strict';

angular.module('mean.apex').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('apex example page', {
      url: '/apex/example',
      templateUrl: 'apex/views/index.html'
    });
  }
]);
