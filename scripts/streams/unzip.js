const crypto = require('crypto');
const fs = require('fs');
const gzip = require('zlib');
const { Transform } = require('stream');
const file = process.argv[2];


const progress = new Transform({
	transform(chunk, encoding, callback){
		process.stdout.write('.');
		callback(null, chunk);
	}
});

const secret_key = 'some_secret';

fs.createReadStream(file)
	.pipe(crypto.createDecipher('aes192', secret_key))
	.pipe(gzip.createGunzip())
	.pipe(fs.createWriteStream(file.slice(0,-3)))
	.on('finished', () =>  console.log('We\'re done here') );
