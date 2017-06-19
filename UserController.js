// Code goes here
(function() {

  var app = angular.module('githubViewer');

  app.controller('UserController', ['$scope', 'github', '$routeParams', function($scope, github, $routeParams) {


    var onGetUserInfoComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
      $location.hash("userDetails");
      $anchorScroll();
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };

   $scope.username = $routeParams.username;
   $scope.repoSortOrder = "-stargazers_count";
   github.getUser($scope.username).then(onGetUserInfoComplete, onError);
  

   
  }]);

}()); 