angular.module('mainController', ['HttpServices'])
    .controller('mainController',['$scope', 'computerService', 'virtualService', 'testService', function($scope, computerService,virtualService, testService) {
        vm = this;

        getData();
        vm.current_computer = {ip: 10, status: "ok"};
        vm.lines = ['costam', 'inne', 'other'];
        vm.virt_list = [];
        vm.status_color = {running: 'success', shut: 'default', ok: 'info', crashed: 'danger'};
        vm.getStatusColor = function(status) {
            return vm.status_object[status];
        };

        vm.updateStatus = function(computerIndex, virtIndex) {
            vm.computers[computerIndex].current_machine_index = virtIndex;
        }

        vm.updateCurrentComputer = function(computerIndex) {
            vm.current_computer.ip = vm.computers[computerIndex].ip;
            vm.current_computer.status = vm.computers[computerIndex].status;
        }

        vm.updateComputers2Virt = function(virtName) {
            var computerList = [];
            for (var compIndex = 0; compIndex < vm.computers.length; compIndex++) {
                for (var virtIndex = 0; virtIndex < vm.computers[compIndex].virts.length; virtIndex++) {
                    if (vm.computers[compIndex].virts[virtIndex].name === virtName) {
                        computerList.push(vm.computers[compIndex]);
                    }
                }
            }
            vm.computer2Virt = computerList;
        }

        function getData() {
            computerService.getComputers().success(function(data) {
                vm.computers = data;
                angular.forEach(vm.computers, function(value, index) {
                    virtualService.getVirtuals(vm.computers[index].ip).success(function(data) {
                        vm.computers[index].virts = data;
                        for (var i = 0; i < vm.computers[index].virts.length; i++) {
                            var on_the_list = false;
                            for (var j = 0; j < vm.virt_list.length; j++) {
                                if(vm.computers[index].virts[i].name === vm.virt_list[j]) {
                                    on_the_list = true;
                                    break;
                                }
                            }
                            if (!on_the_list) {
                                vm.virt_list.unshift(vm.computers[index].virts[i].name);
                            }
                        }
                    });
                })
            });
        };
    }]);