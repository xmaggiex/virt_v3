var computers = [
{
    name: 'Desktop',
    ip: '192.168.0.17',
    username: 'erhesto',
    password: 'adminpass'
},
];

exports.computers = function(req, res) {
    res.status(200).json(computers);
}

exports.list = computers;
