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
    }
  }
);
