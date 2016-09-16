angular
  .module('loginFactory', ['ngRoute'])
  .factory('loginFactory', loginFactory);


function loginFactory() {
  var loginContainer = { 
  "Simon" : "test123",
  "Daniel" : "phew",
  "Brian" : "moongoose"
  };
  return loginContainer;
}
