// Code goes here
(function() {

  var app = angular.module('githubViewer');

  app.controller('MainController', ['$scope', '$interval', '$location', function($scope, $interval, $location) {

    var countdownInterval = null;

    $scope.search = function(username) {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path('/user/'+username);
    };

    var decrementCountDown = function() {
      $scope.countdown--;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
        $scope.intervalObject = null;

      }
    };

    var startCountDown = function() {
      countdownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
    };
    
    $scope.username = 'angular';
    $scope.countdown = 5;
    startCountDown();
  }]);

}());