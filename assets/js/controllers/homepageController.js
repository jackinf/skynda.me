// The controller is a regular JavaScript function. It is called
// once when AngularJS runs into the ng-controller declaration.

angular.module('application').controller('homepageController', function ($scope) {

    $scope.dummyMessage = 'everything is awesome';
  }
);