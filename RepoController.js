(
  function(){
    var module = angular.module('githubViewer');
     module.controller("RepoController", ['$scope', '$routeParams', 'github', function($scope, $routeParams, github){
      var reponame = $routeParams.reponame;
      var username = $routeParams.username;
      var onRepo = function(data){
        $scope.repo = data;
      };
      
      var onError = function(reason){
        $scope.error = reason;
      };
      
      github.getRepoDetails(reponame, username).then(onRepo, onError);
      
    }]);
    
   
    
  }());