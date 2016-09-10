angular.module('application').service('carService', function ($scope, $http) {
    this.getCars = function (){
      return $http.get("/api/car");
    }
  }
);