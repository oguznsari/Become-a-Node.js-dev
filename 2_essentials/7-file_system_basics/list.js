const fs = require('fs');

console.log('started reading files.');
// const files = fs.readdirSync('./assets');
fs.readdir('./assets', (err, files) => {
    if (err) throw err;
    console.log('files: ', files);
});

console.log('started reading files.');
