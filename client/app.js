var app = angular.module('myApp', ['ngRoute', 'homeController', 'loginController']);

app.config(configFunction);


function configFunction($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'client/partials/login.html',
      controller: 'loginController'
    }),
  $routeProvider
    .when('/home', {
      templateUrl: 'client/partials/home.html',
      controller: 'homeController'
    })
}