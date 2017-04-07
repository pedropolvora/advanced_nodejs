var CountStream = require('./countstream');
var countStream = new CountStream('book');
var http = require('http');


var test_url = "http://www.manning.com";

http.get(test_url, function(res){
	res.pipe(countStream);
});

countstream.on('total', function(count){
	console.log('Total matches: %s', count);
});
