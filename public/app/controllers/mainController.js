angular.module('mainController', ['HttpServices'])
    .controller('mainController',['$scope', 'computerService', 'virtualService', 'testService', function($scope, computerService,virtualService, testService) {
        vm = this;
        //testService.getTest().success(function(data) {
        //    vm.test = data
        //});
        getData();
        vm.line = [{name: "costam", other: "blabla"}];
        //vm.status_line = ['danger', 'warning', 'info', 'success'];
        vm.status_object = {running: 'success', shut: 'default'};
        vm.getStatusColor = function(status) {
            return vm.status_object[status];
        };

        vm.updateStatus = function(computerIndex, virtIndex) {
            vm.computers[computerIndex].current_machine_index = virtIndex;
        }

        function getData() {
            computerService.getComputers().success(function(data) {
                vm.computers = data;
                angular.forEach(vm.computers, function(value, index) {
                    virtualService.getVirtuals(vm.computers[index].ip).success(function(data) {
                        vm.computers[index].virts = data;
                    });
                })

            });
        };
    }]);