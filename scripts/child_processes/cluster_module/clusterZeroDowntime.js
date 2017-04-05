const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
	const cpus = os.cpus().length;

	console.log(`Forking for ${cpus}`);
	for(let i=0; i<cpus; i++) {
		cluster.fork();
	}

	console.log(`Master PID: ${process.pid}`);

	cluster.on('exit', (worker, code, signal) => {
		if(code !== 0 && !worker.exitedAfterDisconnect){
			console.log(`Worker ${worker.id} crashed.`
				+ `Starting a new worker`);}
		cluster.fork();
	});

	// code to restart all the workers 
	// using kill -SIGUSR2 passes a signal to the process but does not kill it
	process.on('SIGUSR2', () => {
		const workers = Object.values(cluster.workers);
		const restartWorker = (workerIndex) => {
			const worker = workers[workerIndex];
			if (!worker) return;
			worker.on('exit', () => {
				if (!worker.exitedAfterDisconnect) return;
				console.log(`Exited process ${worker.process.pid}`);
				cluster.fork().on('listening', () => {
					restartWorker(workerIndex + 1);
				});
			});
			worker.disconnect();
		};

		restartWorker(0);
	});
} else {
	require('./serverZeroDowntime.js');
}

