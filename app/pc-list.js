var computers = [
{
    ip: '192.168.0.17',
    username: 'erhesto',
    password: 'test'
}
];

exports.computers = function(req, res) {
    res.status(200).json(computers);
}

exports.list = computers;
