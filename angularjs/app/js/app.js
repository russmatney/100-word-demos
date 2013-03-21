'use strict';

/* App Module */

angular.module('phonecat', ['ngSanitize']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider
  	  .when('/stories', {templateUrl: 'partials/stories.html', controller: StoriesCtrl})
      .otherwise({redirectTo: '/stories'});
}]);
