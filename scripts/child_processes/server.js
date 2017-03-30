const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
	if(req.url == '/compute') {
		const compute = fork('compute.js');
		compute.send('start');
	} else {
		res.end('ok');
	}
});



server.listen(3000);
