/**
 * Created by jevgenir on 10.09.2016.
 */

angular.module('application').component('simple', {
  templateUrl: '/js/components/simple.html',
  controller: function ($scope, $element, $attrs) {
    console.log('simpel component initialized');
    $scope.title = "hello";
    console.log($attrs);
  }
});
