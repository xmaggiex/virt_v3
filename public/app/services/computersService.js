/**
* ComputersService Module
*
* Description
*/
angular.module('ComputersService', []).factory('Computers', function($http){

	var service = {};

	service.all = function() {
		return $http.get('/api/computers');
	}

	return service;
})