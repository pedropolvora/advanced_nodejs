const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'watchedDir');
const currentFiles = fs.readdirSync(dirname);

const logWithTime = (message) =>
	console.log(`${new Date().toUTCString()} : ${message}`);

fs.watch(dirname, (eventType, filename) => {
	// rename is for added or deleted 
	if (eventType === 'rename'){
		const index = currentFiles.indexOf(filename);
		if (index >= 0){
			currentFiles.splice(index, 1);
			logWithTime(`${filename} was deleted`);
			return;
		}

		currentFiles.push(filename);
		logWithTime(`${filename} was added`);
		return;
	}
	// otherwise it was just changed
	logWithTime(`${filename} was changed `);
});
