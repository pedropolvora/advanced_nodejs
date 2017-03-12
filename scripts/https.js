// to generate a test certificate run
// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
const fs = require('fs');
const server = require('https').createServer({
	key: fs.readFileSync('./key.pem'),
	cert: fs.readFileSync('./cert.pem')
});

server.on('request', (req, res) => {
	res.writeHead(200, { 'content-type': 'text/plain'});
	res.write('Hello world\n');

	setTimeout(()=>{
		res.end('Timeout! response closing\n');
	}, 2000);
});

server.setTimeout(3000);
server.listen(443);
