var url = require('url');
// parsing the url including the query part (..,true);
var parsed_url = url.parse('http://www.gmail.com/somestuff?q=mysearch', true);
console.log(parsed_url);

