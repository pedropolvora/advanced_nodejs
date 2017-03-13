const http = require('http');

// http.request() returns and event
// and the response, that is passed into the callback is also an event

// req is an instance of the http.ClientRequest class
const req = http.request({ 
	hostname: 'www.google.com' }, 
	(res) => { 
		res.on('data', (data) => console.log(data.toString()));
	}
);

const req_get = http.get(
	'http://www.google.com' ,
	(res) => {
		// res is an instance of the http.IncomingMessage class
		res.on('data', (data) => console.log(data.toString()));
	}
);


req.on('error', (err) => console.error(err));
req.end();

console.log(req.agent);
