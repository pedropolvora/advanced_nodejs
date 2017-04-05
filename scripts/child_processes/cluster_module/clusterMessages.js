const cluster = require('cluster');
const os = require('os');





if (cluster.isMaster) {
	const cpus = os.cpus().length;

	console.log(`Forking for ${cpus} CPUs`);
	for(let i=0; i<cpus; i++) {
		cluster.fork();
	}
	// the following console shows the object that contains all the worker
	console.dir(cluster.workers, { depth: 0 });

	Object.values(cluster.workers).forEach(worker => {
		worker.send(`Hello Worker ${worker.id}`);
	});
} else {
	require('./serverMessage.js');
}

