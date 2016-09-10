/**
 * Created by jevgenir on 10.09.2016.
 */

function blockController($scope, $element, $attrs) {}

angular.module("application").component("block", {
  transclude: true,
  templateUrl: '/js/components/block/block.html',
  controller: blockController,
  bindings: {
    header: '<'
  }
});
