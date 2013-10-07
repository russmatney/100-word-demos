'use strict';

/* Controllers */

function StoriesCtrl($scope, $http) {

  var loadStories = function() {
    $http({method:'JSONP', url:'http://russmatney.tumblr.com/api/read/json?callback=JSON_CALLBACK&num=50', contentType:'application/json'})
  	 .success(function(data, status) {
        sortStories(data.posts);
  	 })
  	 .error(function(data, status) {
  		  console.log("failure: "+ status);
  	 });
  };

  var sortStories = function(stories) {

    var numberOfColumns = 3;

    var cols = [];
    var colHeights = [];
    for(var j = 0; j < numberOfColumns; j++){
      cols.push([]);
      colHeights[j] = 0;
    }
    console.dir(colHeights);

    for(var i = 0; i < stories.length; i++) {
      console.log(colHeights);

      var min = _.min(colHeights);
      console.log('min: '+ min);
      
      var smallIndex = _.indexOf(colHeights, min);
      console.log('smallIndex: '+smallIndex);

      cols[smallIndex].push(stories[i]);


      if(stories[i]['regular-title']){
        colHeights[smallIndex] += stories[i]['regular-title'].length;
      }
      if(stories[i]['regular-body']){
        colHeights[smallIndex] += stories[i]['regular-body'].length;
      }
      if(stories[i]['tags']){
        colHeights[smallIndex] += stories[i]['tags'].length;
      }

    }

    $scope.cols = cols;

    for(var j = 0; j < numberOfColumns; j++) {
      console.dir(cols[j]);
    }
  };


//   $scope.whichCol = function(index) {
// //    console.log('column-'+index);
//     return 'column-'+index;
//   };

  loadStories();

}
