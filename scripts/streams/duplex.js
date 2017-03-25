const { Duplex } = require('stream');

// with duplex streams we have to 
// implement both the read and the write 
// methods
const inOutStream = new Duplex({
	write(chunk,encoding,callback){
		console.log(chunk.toString());
		callback();
	},

	read(size){
		if(this.currentCharCode > 90){
			this.push(null);
			return;
		}
		this.push(String.fromCharCode(this.currentCharCode++));
	}
});

inOutStream.currentCharCode = 65;
process.stdin.pipe(inOutStream).pipe(process.stdout);


// Note: the read and the write part of the stream work pretty much independently 
