'use strict';

angular.module('mean.swift').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('swift example page', {
      url: '/swift/example',
      templateUrl: 'swift/views/index.html'
    });
  }
]);
