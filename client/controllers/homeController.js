angular
  .module('homeController', ['ngRoute', 'foodFactory'])
  .controller('homeController', homeController)


function homeController($scope, foodFactory) {
  $scope.food = foodFactory.food;
  $scope.calories = foodFactory.calories;
  $scope.container = [];
  $scope.total = 0; 

  $scope.post = function() {
    const entry = {}; 
    entry.food = $scope.food;
    entry.calories = $scope.calories; 
    $scope.container.push(entry); 
    $scope.total += Number($scope.calories);   
  }

}