const dns = require('dns');

dns.lookup('google.com', (err, address) => {
	console.log(address);
});

dns.resolve4('google.com', (err, address) => {
	console.log(address);
});
 
dns.resolve('google.com', 'MX', (err, address) => {
	console.log(address);
});

dns.reverse('35.161.75.227', (err, hostnames) => {
	console.log(hostnames);
});
