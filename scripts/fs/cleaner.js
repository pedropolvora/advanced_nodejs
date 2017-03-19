const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files2');

const dayInMs = 24*60*60*1000;
const files = fs.readdirSync(dirname);

files.forEach( (file) => {
	let filepath = path.join(dirname, file);
	fs.stat(filepath, (err, stats) => {
		if(err) throw err;
		if(stats.mtime < (Date.now() - 7*dayInMs)){
			fs.unlink(filepath, (err) => {
				if(err) throw err;
				console.log('delete file: ', filepath);
			});
		}
	});
});
