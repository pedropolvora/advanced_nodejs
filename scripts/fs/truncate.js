
// This scrips performs the following task:
// Finds every file in a dir and remove the last half of the data.

const fs = require('fs');
const path = require('path');
// this will create a path with the current dir +/files
// note that using path.join guarantees that the code
// is platform agnostic
const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);

files.forEach(file => {
	const filePath = path.join(dirname, file);
	fs.stat(filePath, (err, stats) => {
		if (err) throw err;
		fs.truncate(filePath, stats.size/2, (err) => {
			if(err) throw err;
		});
	});
});

