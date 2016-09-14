angular
  .module('loginController', ['ngRoute', 'loginFactory'])
  .controller('loginController', loginController)

  function loginController($scope, $location, loginFactory) {
    $scope.username = '';
    $scope.password = '';

    $scope.loginCheck = function() {
    if(loginFactory[$scope.username] && $scope.password === loginFactory[$scope.username]) {
        $location.path('home');
      } else {
        console.log("WRONG PASSWORD"); 
      }
    }
  }


