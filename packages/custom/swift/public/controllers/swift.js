'use strict';

angular.module('mean.swift').controller('SwiftController', ['$scope', 'Global', 'Swift',
  function($scope, Global, Swift) {
    $scope.global = Global;
    $scope.package = {
      name: 'swift'
    };
  }
]);
