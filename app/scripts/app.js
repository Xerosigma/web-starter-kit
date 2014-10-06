'use strict';

/**
 * @ngdoc overview
 * @name web-starter-kit
 * @description
 * # web-starter-kit
 *
 * Main module of the application.
 */
angular
  .module('web-starter-kit', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
