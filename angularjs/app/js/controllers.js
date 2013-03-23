'use strict';

/* Controllers */

function StoriesCtrl($scope, $http) {
  var data = {};

  $http({method:'JSONP', url:'http://russmatney.tumblr.com/api/read/json?callback=JSON_CALLBACK&num=50', contentType:'application/json'})
  	.success(function(data, status) {
  		console.dir(data.posts);
  		$scope.stories = data.posts;

  	})
  	.error(function(data, status) {
  		console.log("failure: "+ status);
  	});

  $scope.column = function(index) {
  	console.log(index);
  	if(index%3 === 0){
	  	return 'column-one';  		
  	} else if(index%3 === 1) {
  		return 'column-two';
  	} else if(index%3 === 2) {
  		return 'column-three';
  	}
  };

}