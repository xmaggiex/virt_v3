var pclist = require('./pc-list');
var exec = require('node-ssh-exec');

exports.shutdown = function(req, res) {
    console.log(req.params.ip);

    console.log(pclist.list);

    var comp = findComputerbyIP(req.params.ip);
    console.log(comp.username);
    console.log(comp.password);

    var config = {
        host: req.params.ip,
        username: comp.username,
        password: comp.password
    };

    var command = 'echo ' + comp.password + ' | sudo -S shutdown -h now';

    exec(config, command, function(error, response) {
        if (error) {
            console.log("ERROR");
        }
        console.log(response);
        console.log('success');
    });
    res.status(200).json("success");
}

exports.snapshot = function(req, res) {
    var comp = findComputerbyIP(req.params.ip);

    var config = {
        host: req.params.config,
        username: comp.username,
        password: comp.password
    };

    var command = 'echo ' + comp.password + ' | sudo virsh -c qemu:/// snapshot ' + req.params.vm;

    exec(config, command, function(error, response) {
        if (error) {
            console.log("ERROR during creating snapshot");
        }
    });
    res.status(200).json("Successfully created snapshot");
}


exports.getVirts = function(req, res) {
    console.log(req.params.ip);

    console.log(pclist.list);

    var comp = findComputerbyIP(req.params.ip);
    console.log(comp.username);
    console.log(comp.password);

    var config = {
        host: req.params.ip,
        username: comp.username,
        password: comp.password
    };

    var command = 'perl virt_scripts/comm.pl';

    exec(config, command, function(error, response) {
        if (error) {
            console.log("ERROR");
        }
        console.log("Successful retrieval from machine");
        console.log(response);
        /*
        var responce_lines = response.trim().split("\n");
        var virt_machines = [];
        for (var i = 0; i < responce_lines.length; i++) {
            line = responce_lines[i].split(' ');
            virt_machines[i] = {name: line[0], state: line[1]};
        }
        console.log(virt_machines);
        */
        var virt_machines = JSON.parse(response);
    	res.status(200).json(virt_machines);

    });

    /*
    var virt_machines = [];
    if (req.params.ip === '192.168.0.17') {
        virt_machines = [
            {name: "vm1", status: "running"}
        ];
    }
    else {
        virt_machines = [
            {name: "vm1", status: "shut"},
            {name: "vm2", status: "running", state: "crashed"}
        ]
    }
    for (var i = 0; i < virt_machines.length; i++) {
        virt_machines[i].ip = "0009000";
        virt_machines[i].mac = "21209";
        if (!virt_machines[i].state) {
            virt_machines[i].state = "ok"
        }
        virt_machines[i].disk_size = "5 gb";
        virt_machines[i].disk_available_size = "2 gb";
        virt_machines[i].last_login = "yesterday";
        virt_machines[i].cpu = "20";
        virt_machines[i].last_change = "today";
    }
    res.status(200).json(virt_machines);
     */
}

function findComputerbyIP(ip) {
    var obj = pclist.list.filter(function(obj) {
        return obj.ip === ip;
    })[0];
    return obj;
}