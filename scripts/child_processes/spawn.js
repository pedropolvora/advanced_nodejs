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
wc.on('data', (data) => console.log(`We have ${data} files here`);
// wc.stdout.pipe(process.stdout); another way to output the wc command
