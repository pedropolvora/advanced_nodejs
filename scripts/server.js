const fs = require('fs');
const server = require('http').createServer();
const data = {
	"home": "stuff"
};


server.on('request', (req, res) => {
	switch(req.url) {
		case '/home':
		case '/about':
			res.writeHead(200, {'Content-type' : 'text/html' });
			console.log(`Request made to ${req.url}`);
			res.end();
			break;
		case '/data':
			res.writeHead(200, {'Content-type' : 'application/json' });
			res.end(JSON.stringify(data));
			break;
		default:
			res.writeHead(404);
			res.end();
			break;
	}
});

server.listen(8000);
