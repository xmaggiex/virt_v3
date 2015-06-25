/**
* dashboardController Module
*
* Description
*/
angular.module('dashboardController', ['ComputersService'])
	.controller('dashboardCtrl', function(Computers){
		var vm = this;

		Computers.all().success(function(data) {
			vm.computers = data.computers;
		})

		vm.updateStatusRow = function(computer, virt) {
			vm.machine = {};
			this.computer = computer || 0;
			this.virt = virt || 0;
			if(virt != '') {
				vm.machine = vm.computers[this.computer].virtuals[this.virt];
			}
		}

	});