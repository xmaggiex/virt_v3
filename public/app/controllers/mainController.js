angular.module('mainController', ['HttpServices'])
    .controller('mainController',['$scope', 'computerService', 'virtualService', function($scope, computerService,virtualService) {
        vm = this;
        getData();
        function getData() {
            computerService.getComputers().success(function(data) {
                vm.computers = data;
                for (var i = 0; i < vm.computers.length;i++) {
                    var index = i;
                    virtualService.getVirtuals().success(function(data) {
                        vm.computers[index].virts = data;
                    });
                }
            });
        };
    }]);