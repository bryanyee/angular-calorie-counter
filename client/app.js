var app = angular.module('myApp', ['ngRoute', 'homeController', 'loginController']);

app.config(configFunction);


function configFunction($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: './partials/home.html',
      controller: 'homeController'
    }),
  $routeProvider
    .when('/', {
      templateUrl: './partials/login.html',
      controller: 'loginController'
    })
}