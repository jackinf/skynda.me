angular.module('application').service('carService', function ($scope, $http) {
    var carEndpoint = '/api/car';
    this.getCars = function (params){
      var config = {
        params: params,
        headers : {'Accept' : 'application/json'}
      };

      return $http.get(carEndpoint, config);
    }
  }
);