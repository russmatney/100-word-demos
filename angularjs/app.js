angular.module('app', [])
  .factory("getJson", function(){
    var data = {
      name: {
        first: "Sir",
        last: "Lancelot"
      },
      quest: "The grail"
    };

    return data;
  });

function MainCtrl($scope, $http, getJson) {
  $scope.data = getJson;

  $scope.stories = [];

  var getStories = function() {
    $http.jsonp('http://russmatney.tumblr.com/api/read/json?callback=JSON_CALLBACK').success(function(response){
      $scope.stories = response.posts;
    });
  };

  getStories();
}

