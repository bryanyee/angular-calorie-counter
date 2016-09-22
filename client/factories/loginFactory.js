angular
  .module('loginFactory', ['ngRoute'])
  .factory('loginFactory', loginFactory);


function loginFactory($http) {
  // console.log("inside loginFactory!!!!")
  //make a post request with the username && password
    //check db to see if user exist
  let loginContainer = {};  


  loginContainer.login = function(username, password) {

    let userObj = {username: username, password: password};
    // console.log("inside loginFactory.login", JSON.stringify(userObj));

    return $http.post('/login', JSON.stringify(userObj));
  };

  return loginContainer;

  // var loginContainer = { 
  // "Simon" : "test123",
  // "Daniel" : "phew",
  // "Brian" : "moongoose"
  // };
  // return loginContainer;
}
