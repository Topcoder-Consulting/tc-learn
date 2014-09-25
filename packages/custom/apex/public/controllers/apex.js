'use strict';

angular.module('mean.apex').controller('ApexController', ['$scope', 'Global', 'Apex',
  function($scope, Global, Apex) {
    $scope.global = Global;
    $scope.package = {
      name: 'apex'
    };
  }
]);
