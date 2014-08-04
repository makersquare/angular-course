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
      otherwise({
        redirectTo: '/'
      });
 }]);
