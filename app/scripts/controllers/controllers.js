'use strict';

/**
 * @ngdoc function
 * @name sippycupclubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sippycupclubApp
 */
angular.module('sippycupclubApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'location'
    ];
    $scope.isActive = function(route) {
        return route === $location.path();
    }
  });
