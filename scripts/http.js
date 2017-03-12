const server = require('http').createServer();

server.on('request', (req, res) => {
	res.writeHead(200, { 'content-type': 'text/plain'});
	res.write('Hello world\n');

	setTimeout(()=>{
		res.end('Timeout! response closing\n');
	}, 2000);
});

server.setTimeout(1000);
server.listen(8000);
