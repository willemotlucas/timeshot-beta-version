// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngLocalStorage', 'ngOpenFB', 'ngTouch', 'ngRoute', 'ngCordova', 'starter.controllers', 'starter.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
    })

    .state('first-use', {
      url: '/first-use',
      templateUrl: 'templates/first_use.html',
      controller: 'FirstUseController'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })

    .state('event', {
      url: '/event/:eventId',
      templateUrl: 'templates/event.html',
      controller: 'EventController'
    });

    $urlRouterProvider.otherwise('/login');
  });
