/**
 * Created by jevgenir on 10.09.2016.
 */

angular.module('application').component('keypoint', {
  templateUrl: '/templates/components/keypoint.html',
  controller: function ($scope, $element, $attrs) {
    $scope.title = $attrs.title;
    $scope.content = "This "; //$attrs.content;
    $scope.img = $attrs.img;

  }
});
