/**
* dashboardController Module
*
* Description
*/
angular.module('dashboardController', ['ComputersService'])
	.controller('dashboardCtrl', function($scope, Computers){
		var vm = this;

		getData();

		vm.updateStatusRow = function(computer, virt) {
			if(!vm.machine) {
				vm.machine = {};	
			}
			this.computer = computer || 0;
			this.virt = virt || 0;
			if(virt != '') {
				var index = 2;
				vm.machine[this.computer] = vm.computers[this.computer].virtuals[this.virt];
			}
			else {
				vm.machine[this.computer] = {};
			}
		}

		vm.makeSnapshot = function(machine, ip) {
			if(machine) {
				console.log("Push snapshot request");
				console.log("machine Name: " + machine.name);
				console.log("IP Physical machine: " + ip);
			}
		}
		vm.clone = function(machine, ip) {
			if(machine) {
				console.log("Push clone request");
				console.log("machine Name: " + machine.name);
				console.log("IP Physical machine: " + ip);
			}
		}
		vm.startVirt = function(machine, ip) {
			if(machine) {
				console.log("Push startVirt request");
				console.log("machine Name: " + machine.name);
				console.log("IP Physical machine: " + ip);
			}
		}
		vm.stopVirt = function(machine, ip) {
			if(machine) {
				console.log("Push stopVirt request");
				console.log("machine Name: " + machine.name);
				console.log("IP Physical machine: " + ip);
			}
		}
		function getData() {
			Computers.all().success(function(data) {
				vm.computers = data.computers;
			})
		}

		vm.refreshData = function() {
			getData();
		}
	});