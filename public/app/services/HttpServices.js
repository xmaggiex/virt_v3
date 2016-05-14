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
            getVirtuals: function(ip_addr) {
                return $http.get('http://localhost:7070/api/virtlist/' + ip_addr);
            }
        };
    }]);

angular.module('HttpServices')
    .factory('testService', ['$http', function($http) {
        return {
            getTest: function() {
                return $http.jsonp('https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero')
            }
        };
    }])