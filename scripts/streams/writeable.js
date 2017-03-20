const { Writable } = require('stream');

// a trivial stream that only echos what it receives
const outStream = new Writable({
	write(chunk, encoding, callback){
		console.log(chunk.toString());
		callback();
	}
});

process.stdin.pipe(outStream);
