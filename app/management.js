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

    // var command = './script.sh';
    /*
    exec(config, command, function(error, response) {
        if (error) {
            console.log("ERROR");
        }
        console.log("Successful retrieval from machine");
        console.log(response);

        var responce_lines = response.trim().split("\n");
        var virt_machines = [];
        for (var i = 0; i < responce_lines.length; i++) {
            line = responce_lines[i].split(' ');
            virt_machines[i] = {name: line[0], state: line[1]};
        }
        console.log(virt_machines);
    	res.status(200).json(virt_machines);

    });
    */
    var virt_machines = [];
    if (req.params.ip === '192.168.0.17') {
        virt_machines = [
            {name: "vm1", status: "running"}
        ];
    }
    else {
        virt_machines = [
            {name: "vm2", status: "shut"}
        ]
    }
    res.status(200).json(virt_machines);
}

function findComputerbyIP(ip) {
    var obj = pclist.list.filter(function(obj) {
        return obj.ip === ip;
    })[0];
    return obj;
}