var fs = require('fs');

var data = {
    name: 'Bob'
}

fs.writeFile('data.json', JSON.stringify(data), (err, result) => {
    if(err) console.log('error: ', err);
})