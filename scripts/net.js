process.stdout.write('\u001B[2J\u001B[0;0f');

let counter = 0;
let sockets = {};

const server = require('net').createServer();

function timestamp(){
	const currentTime = new Date();
	return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
}

server.on('connection', socket => {
	socket.id = counter++;
	console.log('Client connected');
	socket.write('Welcome new client!\n');
	socket.write('What is your name? ');

	socket.on('data', data => {
		if(!sockets[socket.id]) {
			socket.name = data.toString().trim();
			socket.write(`Welcome ${socket.name}!\n`);
			sockets[socket.id] = socket;
			return;
		}

		Object.entries(sockets).forEach(([key, sc]) => {
			if( socket.id == key ) return;
			sc.write(`${socket.name} (${timestamp()}):`);
			sc.write(data);
		});
	});

	socket.setEncoding('utf8');

	socket.on('end', () => {
		delete sockets[socket.id];
		console.log('Client disconnected');
	});
		
});

server.listen(8000, () => console.log('Server bound'));
