/* Sample Controller */

var movieController = angular.module('movieController', []);

movieController.controller('detailController', ['$scope', '$http', '$routeParams',function($scope, $http, $routeParams) {
    $http.get('./data/imdb250.json').then(function(response) {
      var movie = response.data;
      for (var i in movie) {
        var m = movie[i];
        if (m.rank == $routeParams.rank) {
            $scope.movie = m;
        }
      }
    });
  },
]);

movieController.controller('galleryController', ['$scope', '$http', function($scope, $http) {
  $http.get('./data/imdb250.json').then(function(response) {
    $scope.movies = response.data;
    $scope.filters = {};
  });
  },
]);

movieController.controller('listController', ['$scope', '$http', function($scope, $http) {
    $http.get('./data/imdb250.json').then(function(response) {
      $scope.movies = response.data
    });
  },
]);