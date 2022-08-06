const fs = require('fs');

const writeStream = fs.createWriteStream('./assets/myFile.txt', 'utf-8');
const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'utf8');

// writeStream.write('hello');
// writeStream.write(' world!\n');

/*
process.stdin.on('data', data => {
    writeStream.write(data);
});
*/

/*
readStream.on('data', data => {
    writeStream.write(data);
});
*/

// process.stdin.pipe(writeStream);
readStream.pipe(writeStream);