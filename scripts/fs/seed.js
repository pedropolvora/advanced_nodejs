const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files2');

fs.mkdirSync(dirname); // in case it does not exist create it
const ms1Day = 24*60*60*1000;

for (let i=0; i<10 ;i++){
	const filePath = path.join(dirname, `files${i}`);
	fs.writeFile(filePath, i, (err) => {
		if(err) throw err;

		// creating a time stamp of i days ago, reaching 9 days ago
		const time = (Date.now() - i*ms1Day)/1000;

		// changing the access time of both the access and the created time of the file
		fs.utimes(filePath, time, time, (err) => {
			if(err) throw err;
		});
	});
}
