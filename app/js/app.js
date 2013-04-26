'use strict';


// Declare app level module which depends on filters, and services
angular.module('blogangular', ['blogServices']).
  config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.when('/home', {templateUrl: 'app/views/home/home.html', controller: HomeCtrl});
    $routeProvider.when('/posts', {templateUrl: 'app/views/posts/index.html', controller: PostsCtrl});
    $routeProvider.when('/posts/:id', {templateUrl: 'app/views/posts/show.html', controller: PostDetailCtrl});
    $routeProvider.otherwise({redirectTo: '/home'});

    $httpProvider.defaults.headers.common['Accept'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
  }]);
