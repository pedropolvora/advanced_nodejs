const EventEmitter = require('events');

class Server extends EventEmitter {
	constructor(client){
		super();
		this.tasks = {};
		this.taskId = 1;
		process.nextTick(()=>{
			this.emit(
				'response', 
				'Type a command ("help "to see a list of commands)'
			);
		});
		client.on('command', (command, args) => {
			console.log(`Command: ${command}`);
			switch (command){
				case 'help':
				case 'add':
				case 'ls':
				case 'delete':
					this[command](args);
					break;
				default:
					this.emit('response', 'Unknown command..');
			}
		});
	}
	tasksToString(){
		return Object.keys(this.tasks).map((key) => {
			return `${key} : ${this.tasks[key]}\n`
		});
	}
	add(args) {
		this.tasks[this.taskId] = args.join(' ');
		this.emit('response',`Task added: ${this.taskId}`);
		this.taskId++;
	}
	ls() {
		this.emit('response',`Tasks:\n ${this.tasksToString()}`);
	}
	help() {
		const help_str=`Available commands:
		add task
		ls tasks
		delete task`;
		this.emit('response', help_str);
	}
	delete(args) {
		delete(this.tasks[args[0]]);
		this.emit('response', `Deleted task ${args[0]}`);
	}
}

module.exports = (client) => new Server(client);
