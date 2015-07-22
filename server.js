var express = require('express'),
	bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false } ));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/app/views/index.html');
})

app.get('/api/computers', function(req, res) {
	var computers = {
	"computers" : [
		{
			"name":"Komp1",
			"ip": "192.192.192.192",
			"status" : false,
			"virtuals": [
					{
						"name" : "virt1",
						"status":"running",
						"lastLogin": "15:28 08.06.2015",
						"ip": "192.192.192.192",
						"macAddress": "MAC ADDRESS",
						"cpu" : "50%"
					},{
						"name" : "virt2",
						"status":"crashed",
						"lastLogin": "10:28 08.06.2015",
						"ip": "192.192.192.193",
						"macAddress": "MAC ADDRESS",
						"cpu" : "20%"
					}
				]
			},
					{
			"name":"Komp2",
			"ip": "192.192.192.192",
			"status" : true,
			"virtuals": [
					{
						"name" : "virt1",
						"status":"running",
						"lastLogin": "15:28 08.06.2015",
						"ip": "192.192.192.192",
						"macAddress": "MAC ADDRESS",
						"cpu" : "50%"
					},{
						"name" : "virt2",
						"status":"crashed",
						"lastLogin": "10:28 08.06.2015",
						"ip": "192.192.192.193",
						"macAddress": "MAC ADDRESS",
						"cpu" : "20%"
					}
				]
			},
					{
			"name":"Komp3",
			"ip": "192.192.142.192",
			"status" : true,
			"virtuals": [
					{
						"name" : "virt1",
						"status":"running",
						"lastLogin": "15:28 08.06.2015",
						"ip": "192.192.192.192",
						"macAddress": "MAC ADDRESS",
						"cpu" : "50%"
					},{
						"name" : "virt2",
						"status":"crashed",
						"lastLogin": "10:28 08.06.2015",
						"ip": "192.192.192.193",
						"macAddress": "MAC ADDRESS",
						"cpu" : "20%"
					}
				]
			},
					{
			"name":"Komp4",
			"ip": "192.192.192.162",
			"status" : true,
			"virtuals": [
					{
						"name" : "virt1",
						"status":"running",
						"lastLogin": "15:28 08.06.2015",
						"ip": "192.192.192.192",
						"macAddress": "MAC ADDRESS",
						"cpu" : "50%"
					},{
						"name" : "virt2",
						"status":"crashed",
						"lastLogin": "10:28 08.06.2015",
						"ip": "192.192.192.193",
						"macAddress": "MAC ADDRESS",
						"cpu" : "20%"
					}
				]
			}
		]
	};

	res.status(200).json(computers);
});

app.listen(7070, function() {
    console.log("Server listening on port %d", 7070);
});