
var app = angular.module('mp3', ['ngRoute','movieController',]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/list', {'templateUrl': 'partials/list.html','controller': 'listController'})
    .when('/gallery', {'templateUrl': 'partials/gallery.html','controller': 'galleryController'})
    .when('/details/:rank', {'templateUrl': 'partials/details.html','controller': 'detailController'})
    .otherwise({'redirectTo': '/gallery'});
})

