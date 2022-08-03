fs = require('fs');

data = fs.readdirSync('c:/');
console.log('data: ', data);
console.log('Comes after data');
