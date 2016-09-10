/**
 * Created by jevgenir on 10.09.2016.
 */



angular.module('application').controller('carDetailsController', function ($scope) {
    $scope.labels = {
      main: 'Car name'
    };

    $scope.block1 = {
      header: "What's The Model About?",
      description: "Bacon ipsum dolor amet ground round bresaola cupim frankfurter, rump tail chicken spare ribs short loin. Corned beef bresaola pork venison pancetta shoulder. Swine bacon short ribs doner kielbasa strip steak. Filet mignon salami leberkas, jerky turkey tongue pastrami doner tail. Prosciutto pork loin chuck turducken ham hock salami beef flank."
    };

    $scope.block2 = {
      header: "We have it in excellent condition",
      description: "Bacon ipsum dolor amet ground round bresaola cupim frankfurter, rump tail chicken spare ribs short loin. Corned beef bresaola pork venison pancetta shoulder. Swine bacon short ribs doner kielbasa strip steak. Filet mignon salami leberkas, jerky turkey tongue pastrami doner tail. Prosciutto pork loin chuck turducken ham hock salami beef flank."
    };

    // TODO
    $scope.block3
      = $scope.block4
      = $scope.block5
      = $scope.block6
      = $scope.block7
      = $scope.block8
      = $scope.block9
      = $scope.block10 = {
      header: "TODO",
      description: "TODO"
    };

  }
);
