var fs = require('fs');
var data = require('./data.json');

console.log('data req: ', data.name);

fs.readFile('./data.json', 'utf-8', (err, data) => {
    var data = JSON.parse(data);
    console.log("data fs: ", data.name);
})