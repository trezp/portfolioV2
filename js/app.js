var app = angular.module('portfolioApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller : 'mainController'
    })
    .when('/resume', {
      templateUrl: 'resume.html',
      controller : 'mainController'
    })
    .when('/projects', {
      templateUrl: 'projects.html',
      controller : 'mainController'
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      controller : 'mainController'
    })
    .when('/personal-projects', {
      templateUrl: 'templates/personalproj.html',
      controller : 'mainController'
    })
    .when('/websites', {
      templateUrl: 'templates/websites.html',
      controller : 'mainController'
    })
    .when('/deployed', {
      templateUrl: 'templates/deployed.html',
      controller : 'mainController'
    });
});

app.controller('mainController', function($scope){
  $scope.message = "THIS IS SET UP CORRECTLY";
});
