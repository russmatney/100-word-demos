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



function MainCtrl($scope, getJson) {
  $scope.data = getJson;

}

