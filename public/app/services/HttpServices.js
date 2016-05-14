angular.module('HttpServices', [])
    .factory('computerService', ['$http', function($http) {
        return {
            getComputers: function() {
                return $http.get('http://localhost:7070/api/computers');
            }
        }
    }]);

angular.module('HttpServices')
    .factory('virtualService', ['$http', function($http) {
        return {
            getVirtuals: function() {
                return $http.get('http://localhost:7070/api/virtlist/192.168.0.17');
            }
        };
    }]);