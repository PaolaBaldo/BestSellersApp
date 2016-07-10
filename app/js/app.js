'use strict';

/* App Module */

var bestsellersApp = angular.module('bestsellersApp', [
  'ngRoute',
  'bestsellersAnimations',

  'bestsellersControllers',
  'bestsellersFilters',
  'bestsellersServices'
]);

bestsellersApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	
      when('/nonFictions', {
        templateUrl: 'partials/nonFiction-list.html',
        controller: 'NonFictionListCtrl'
      }).
      when('/nonFictions/:nonFictionTitle/:nonFictionAuthor', {
        templateUrl: 'partials/nonFiction-detail.html',
        controller: 'NonFictionDetailCtrl'
      }).
	  when('/fictions', {
        templateUrl: 'partials/fictions-list.html',
        controller: 'FictionListCtrl'
      }).
	  when('/fictions/:fictionTitle/:fictionAuthor', {
        templateUrl: 'partials/fiction-detail.html',
        controller: 'FictionDetailCtrl'
      }).
	  when('/home', {
        templateUrl: 'partials/home.html'
        
      }).
	  otherwise({
        redirectTo: '/home'
      });
  }]);
