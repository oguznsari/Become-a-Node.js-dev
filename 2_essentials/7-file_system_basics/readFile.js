const fs = require('fs');

const text = fs.readFileSync('./assets/Readme.md', 'utf-8');  // since this is a text file used utf-8 encoding
console.log("blocking(sync) read text: ", text);


fs.readFile('./assets/Readme.md', 'utf-8', (err, text) => {
    console.log('async read text: ', text);
})

fs.readFile('./assets/alex.jpg', (err, img) => {
    if (err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log('img: ', img);
})
