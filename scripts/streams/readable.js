const { Readable } = require('stream');

const inStream = new Readable();

inStream.push("some data");
inStream.push(null);

// this is a not very efficient stream 
// because it sends all the data in one go
inStream.pipe(process.stdout);



// this is a stream that pushes a char at a time
const inStreamEfficient = new Readable({
	read(size){
		setTimeout(() => {
			if(this.currentCharCode > 90){
				this.push(null);
				return;
			}
			this.push(String.fromCharCode(this.currentCharCode++));
		},100);
	}
});



inStreamEfficient.currentCharCode = 65;
inStreamEfficient.pipe(process.stdout);

// if we run this script as node readable.js | head 20
// we can get only some of the characters and this 
// will be displyed with the console.error above

process.on('exit', () => {
	console.error(
		`\n\ncurrentCharCode is ${inStreamEfficient.currentCharCode}`
	);
});

// this hack prevents the error from displaying..even if it still happening
process.stdout.on('error', process.exit);
