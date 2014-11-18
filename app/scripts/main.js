
var app = angular.module('Peoplelist', ['ngRoute']);

app.config( function ($routeProvider){

  $routeProvider.when('/', {})
});

app.controller('PersonController', function ($scope){



  $scope.people = [
  {
    name: 'Tim',
    age: 31
  },
  {
    name: 'Bob',
    age: 45
  },
  {
    name: 'Sam',
    age: 115
  }
];

  $scope.hello = function (n){
    alert('Hi there ' + n);
  };
});
