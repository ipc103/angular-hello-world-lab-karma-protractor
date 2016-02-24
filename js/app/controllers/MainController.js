function MainController($scope){
  $scope.greeting = "Hello World";
}

angular.module('app')
  .controller('MainController', MainController)
