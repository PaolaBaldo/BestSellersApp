'use strict';

/* Controllers */

var bestsellersControllers = angular.module('bestsellersControllers', []);

/*bestsellersControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);*/

  bestsellersControllers.controller('NonFictionListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://api.nytimes.com/svc/books/v2/lists/combined-print-and-e-book-nonfiction.json?api-key=9857c8ab2a5cf25b6db0615fbca4a983:18:74629986').success(function(data) {
      $scope.nonFictions = data;
    });

    $scope.orderProp = 'age';
  }]);
  
/*bestsellersControllers.controller('PhoneDetailCtrl', ['$scope', '$sce', '$routeParams', 'Phone',
  function($scope, $sce, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
     
	 if(phone.reviews[0].sunday_review_link != null){
		 $scope.currentProjectUrl = $sce.trustAsResourceUrl(phone.reviews[0].sunday_review_link);
		 }
		 else
			 if(phone.reviews[0].book_review_link != null){
				 $scope.currentProjectUrl = $sce.trustAsResourceUrl(phone.reviews[0].book_review_link);
			 }
			 
	  
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);*/
  
  

bestsellersControllers.controller('NonFictionDetailCtrl', ['$scope', '$sce', '$routeParams', '$http',
  function($scope, $sce, $routeParams, $http) {
    $http.get('https://www.googleapis.com/books/v1/volumes?q='+$routeParams.nonFictionTitle+'+inauthor:'+$routeParams.nonFictionAuthor+'&key=AIzaSyCNBVoFsCE2k7vLILDlJYYF5KNIoDYO5ts').success(function(data) {
      
	  $scope.nonFiction = data;
	  $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.nonFiction.items[0].volumeInfo.previewLink + "&output=embed");
    });
  }]);
  
 
  
  
  
  
  
  /*bestsellersControllers.controller('FictionListCtrl', ['$scope', 'Fiction',
  function($scope, Fiction) {
    $scope.fictions = Fiction.query();
    $scope.orderProp = 'age';
  }]);*/
  
    bestsellersControllers.controller('FictionListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://api.nytimes.com/svc/books/v2/lists/combined-print-and-e-book-fiction.json?api-key=9857c8ab2a5cf25b6db0615fbca4a983:18:74629986').success(function(data) {
      $scope.fictions = data;
    });

    $scope.orderProp = 'age';
  }]);
  
  
  

/*bestsellersControllers.controller('FictionDetailCtrl', ['$scope', '$sce',   '$routeParams', 'Fiction',
  function($scope, $sce, $routeParams, Fiction) {
    $scope.fiction = Fiction.get({fictionId: $routeParams.fictionId}, function(fiction) {
		
		if(fiction.reviews[0].book_review_link){
		 $scope.currentProjectUrl = $sce.trustAsResourceUrl(fiction.reviews[0].book_review_link);
		 }
		 else
			 {
				 $scope.currentProjectUrl = $sce.trustAsResourceUrl(fiction.reviews[0].sunday_review_link);
			 }
      
	 
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);*/
  
  
  
bestsellersControllers.controller('FictionDetailCtrl', ['$scope', '$sce', '$routeParams', '$http',
  function($scope, $sce, $routeParams, $http) {
	 
    $http.get('https://www.googleapis.com/books/v1/volumes?q='+$routeParams.fictionTitle+'+inauthor:'+$routeParams.fictionAuthor+'&key=AIzaSyCNBVoFsCE2k7vLILDlJYYF5KNIoDYO5ts').success(function(data) {
     
	 /*'https://www.googleapis.com/books/v1/volumes?q='+$routeParams.fictionId+'&intitle='+$routeParams.fictionId+'&inauthor='+$routeParams.fictionAuthor+'&key=AIzaSyCNBVoFsCE2k7vLILDlJYYF5KNIoDYO5ts'*/
	  $scope.fiction = data;
	  /*if(data == null){
		  $http.get('https://www.googleapis.com/books/v1/volumes?q='+$routeParams.fictionTitle+'&isbn='+$routeParams.fictionId+'&key=AIzaSyCNBVoFsCE2k7vLILDlJYYF5KNIoDYO5ts').success(function(data) {
		 $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.fiction.items[0].volumeInfo.previewLink + "&output=embed");
    });
	  }*/
	  $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.fiction.items[0].volumeInfo.previewLink + "&output=embed");
    });
  }]);
  

  bestsellersControllers.controller('HomeCtrl', ['$scope', 'Home',
  function($scope, Home) {
    $scope.homes = Home.query();
    $scope.orderProp = 'age';
  }]);
  
  
bestsellersControllers.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/glyphicons-halflings-white.png';
});
  