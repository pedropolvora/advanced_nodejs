const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP server listening'));

server.on('message', (msg, rinfo) => {
	console.log(`${rinfo.address}: ${rinfo.port} - ${msg}`);
});

const PORT = '3000';
const HOST = '127.0.0.1';
server.bind(PORT, HOST);

const client = dgram.createSocket('udp4');

let message = Buffer.from('Hello world');
client.send(message, 0, message.length, PORT, HOST, (err) => {
	if(err) throw err;
	console.log('UPD message sent');
	client.close();
}
);
