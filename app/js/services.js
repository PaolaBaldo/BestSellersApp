'use strict';

/* Services */

var bestsellersServices = angular.module('bestsellersServices', ['ngResource']);

bestsellersServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('books/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'books'}, isArray:true}
    });
  }]);

  bestsellersServices.factory('List', ['$resource',
  function($resource){
    return $resource('lists/:listId.json', {}, {
      query: {method:'GET', params:{listId:'lists'}, isArray:true}
    });
  }]);
  
    bestsellersServices.factory('Fiction', ['$resource',
  function($resource){
    return $resource('fictions/:fictionId.json', {}, {
      query: {method:'GET', params:{fictionId:'fictions'}, isArray:true}
    });
  }]);
  
  bestsellersServices.factory('Home', ['$resource',
  function($resource){
    return $resource('homes/:homeId.json', {}, {
      query: {method:'GET', params:{homeId:'homes'}, isArray:true}
    });
  }]);