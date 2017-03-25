const crypto = require('crypto');
const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

const { Transform } = require('stream');

const progress = new Transform({
	transform(chunk, encoding, callback){
		process.stdout.write('.');
		callback(null,chunk); // ensures that it passes the data along
	}
});

const secret_key = 'some_secret';

fs.createReadStream(file)
	.pipe(zlib.createGzip())
	.pipe(crypto.createCipher('aes192', secret_key))
	.pipe(progress)
	.pipe(fs.createWriteStream(file+'.gz'))
	.on('finish', () =>  console.log('\nDone!'));
