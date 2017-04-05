const cluster = require('cluster');
const os = require('os');

// *** MOCK DB Call 
const numberOfUsersInDB = function() {
	this.count = this.count || 5;
	this.count = this.count * this.count;
	return this.count;
};
// ***

if (cluster.isMaster) {
	const cpus = os.cpus().length;

	console.log(`Forking for ${cpus} CPUs`);
	for(let i=0; i<cpus; i++) {
		cluster.fork();
	}
	// the following console shows the object that contains all the worker
	console.dir(cluster.workers, { depth: 0 });

	// sending messages to the workers
	Object.values(cluster.workers).forEach(worker => {
		worker.send(`Hello Worker ${worker.id}`);
	});

	const updateWorkers = () =>{
		const usersCount = numberOfUsersInDB();
		Object.values(cluster.workers).forEach( worker => {
			worker.send({ usersCount });
		});
	};

	// periodically updating workers
	updateWorkers();
	setInterval(updateWorkers, 10000);

} else {
	require('./serverMessage.js');
}

