var app = angular.module('ngViewapp', [
  'ngRoute',
])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
      }).
      otherwise({
        redirectTo: '/'
      });
 }]);
