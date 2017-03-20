const fs = require('fs');
const file = fs.createWriteStream('./big_file');

for(let i=0; i < 5e6; i++){
	file.write('This is a very big file!!!!!!! woooooooow');
}

file.end();
