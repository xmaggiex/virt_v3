/**
* ComputersService Module
*
* Description
*/
angular.module('ComputersService', []).factory('CompService', ['$http', function($http){

    return {
        getComputers: function() {
            return $http.get('http://localhost:7070/api/computers');
        }
    }
}]);

angular.module('ComputersService').factory('VirtService', ['$http', function($http) {
    
    return {
        getVirts: function() {
            return $http.get('http://localhost:7070/api/virtlist/192.168.017');
        }
    }
}]);