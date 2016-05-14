var computers = [
{
    ip: '192.168.0.17',
    username: 'erhesto',
    password: 'test'
},
{
    ip: '192.168.0.15',
    username: 'erh',
    password: 'new_test'
}
];

exports.computers = function(req, res) {
    res.status(200).json(computers);
}

exports.list = computers;
