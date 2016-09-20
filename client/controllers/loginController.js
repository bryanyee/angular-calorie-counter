angular
  .module('loginController', ['ngRoute', 'loginFactory'])
  .controller('loginController', loginController)

  function loginController($scope, $location, loginFactory) {
    $scope.username = '';
    $scope.password = '';

    $scope.loginCheck = function() {
      //call loginFactory to post the username /password
      //if response is true send to home, else sign up
      loginFactory.login($scope.username, $scope.password).then(function(result) {
        console.log("inside login", result);
        if(result.data) {
          $location.path('home');
        } else {
          console.log("WRONG PASSWORD"); 
        }
      }).catch(function(err) {
			    console.log('post err', err);
		  });
    };

    // if(loginFactory[$scope.username] && $scope.password === loginFactory[$scope.username]) {
    //     $location.path('home');
    //   } else {
    //     console.log("WRONG PASSWORD"); 
    //   }
    // }
  }


