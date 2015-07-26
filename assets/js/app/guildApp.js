var legislatorApp = angular.module('guild', ['ngMaterial', 'ui.router' , 'ngSails', 'luegg.directives', 'pascalprecht.translate']);

legislatorApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, $translateProvider) {

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

  $translateProvider.useUrlLoader("/api/language");
  $translateProvider.preferredLanguage("es");

});
