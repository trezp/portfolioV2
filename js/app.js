var app = angular.module('portfolioApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'routes/about.html',
      controller : 'mainController'
    })
    .when('/personal-projects', {
      templateUrl: 'routes/personalproj.html',
      controller : 'mainController'
    })
    .when('/websites', {
      templateUrl: 'routes/websites.html',
      controller : 'mainController'
    })
    .when('/deployed', {
      templateUrl: 'routes/deployed.html',
      controller : 'mainController'
    });
});

app.controller('mainController', function($scope){
  $scope.message = "THIS IS SET UP CORRECTLY";
});
