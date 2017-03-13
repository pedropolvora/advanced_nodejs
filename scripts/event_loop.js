console.log('Starting...');

function slowFunction(exponent, msg){
	var top_limit = Math.pow(10, exponent);
	console.log('running a slow function for', top_limit);
	for(var i = 0; i < top_limit; i++){
		if(i === Math.round(top_limit/2))console.log(`half way.. ${msg}`);
	}
}

process.nextTick(slowFunction,9,1);
process.nextTick(slowFunction,4,2);
console.log('hello');
slowFunction(9,3);
slowFunction(9,4);
slowFunction(9,5);
