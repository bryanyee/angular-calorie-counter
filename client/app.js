var app = angular.module('myApp', ['ngRoute', 'homeController']);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'homeController'
    })
}