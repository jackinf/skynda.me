var legislatorApp = angular.module('guild', ['ngMaterial', 'ui.router' , 'ngSails', 'luegg.directives', 'pascalprecht.translate']);

legislatorApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('lime')
    .accentPalette('grey')
    .warnPalette('blue-grey')
    .dark();

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });


  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html'
    });

  $urlRouterProvider.otherwise('/');

});
