var app = angular.module('ngViewapp', [
  'ngRoute',
])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
      }).
      when('/somepage', {
        templateUrl: 'views/another_page.html',
      }).
      when('/page/:number', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
 }]);
