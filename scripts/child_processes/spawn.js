const { spawn } = require('child_process');

const find = spawn('find',['.','-type','f']);
const wc = spawn('wc',['-l']);

// events on the from spawn EventEmitter instance: exit, message, disconnect, close
// the process also have the standard streams, stdout stderr stdin
find.on('exit', (code,signal) => 
	console.log(`find process ended with code ${code}, signal ${signal}`));

find.stdout.pipe(process.stdout);
process.stdin.pipe(find.stdin);
// on closing up the streams, the child process will trigger the close event

find.stderr.on('data', (data)=>{
	console.error(`find process error: ${data}`);
});

// we can pipe from one child process to another
find.stdout.pipe(wc.stdin);
wc.stdout.on('data', (data) => console.log(`We have ${data} files here`));
// wc.stdout.pipe(process.stdout); another way to output the wc command


// ------------------
// SPAWN WITH OPTIONS 
// ------------------

// we can also have more complicated spawn that (cwd) changes the working directory
// and also includes a shell but still does not bufffer the result as the exec()
// command does.

const child = spawn('find . -type $TYPE | wc -l',{
	stdio: 'inherit',
	shell: true,
	cwd: '../',
	env: {
		TYPE: 'f'
	}	
});

// One more interesting option is using detached to run the process  completely independently from the parent process
// Even if the parent process finishes the child one will still be working

const childDetached = spawn('node', ['timer.js'], {
	stdio: 'ignore',
	detached: true
});

childDetached.unref();
