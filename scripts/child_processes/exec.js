const { exec } = require('child_process');

const command = 'find . -type f | wc';


// since the exec command buffers the whole output
// it might be very efficient in cases with a lot of data
exec(command, (err, stdout, stderr) => {
	if(err){
		console.err(err);
		return;
	}
	
	console.log(`the number of files is ${stdout}`);
});
