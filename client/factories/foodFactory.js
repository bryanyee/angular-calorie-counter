angular
  .module('foodFactory', ['ngRoute'])
  .factory('foodFactory', foodFactory);


function foodFactory() {
  var foodContainer = {};
  foodContainer.food = '';
  foodContainer.calories = 0;

  return foodContainer;
}