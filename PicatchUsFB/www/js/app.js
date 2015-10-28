// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngLocalStorage','ui.router', 'ngOpenFB', 'ngTouch', 'ngRoute', 'ngCordova', 'ti-segmented-control', 'starter.controllers', 'starter.filters', 'starter.services'])

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

      moment.locale('fr');
    });
  })


.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom'); // other values: top

  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'pages/login/login.html',
      controller: 'LoginController'
    })

    .state('first-use', {
      url: '/first-use',
      templateUrl: 'pages/first_use/first_use.html',
      controller: 'FirstUseController'
    })

    .state('editPicture', {
      url: "/editPicture",
      templateUrl:'pages/editPicture/editPicture.html',
      controller:'EditPictureController',
      params: {
        imageURI: null
      }
    })

    .state('home', {
      url: '/home',
      abstract: true,
      templateUrl: "pages/home/main.html",
      controller: 'HomeController'
    })

    .state('home.eventsFeed', {
      url: "/eventsFeed",
      views: {
        'eventsFeed-tab': {
          templateUrl:'pages/eventsFeed/eventsFeed.html',
          controller: 'EventsFeedController'
        }
      }
    })

    .state('home.userEvents', {
      url: "/userEvents",
      views: {
        'userEvents-tab': {
          templateUrl:'pages/userEvents/userEvents.html',
          controller:'UserEventsController'
        }
      }
    })

    .state('home.eventDetails', {
      url: "/eventDetails?eventId",
      views: {
        'userEvents-tab': {
          templateUrl:'pages/eventDetails/eventDetails.html',
          controller:'EventDetailsController'
        }
      }
    })
})

var app = angular.module('starter.controllers', ['starter.filters']);
var service = angular.module('starter.services', []);
