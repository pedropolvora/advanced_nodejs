console.log('Starting...');

function slowFunction(exponent){
	var top_limit = Math.pow(10, exponent);
	console.log('running a slow function for', top_limit);
	for(var i = 0; i < top_limit; i++){
		if(i === Math.round(top_limit/2))console.log(' half !');
	}
}

process.nextTick(slowFunction,9);
process.nextTick(slowFunction,4);
console.log('hello');
