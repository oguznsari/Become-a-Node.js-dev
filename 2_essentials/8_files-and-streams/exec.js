const cp = require('child_process');

// cp.exec('open http://www.linkedin.com/learning');
// cp.exec('open -a Terminal .');

/*
cp.exec('ls', (err, data, stderr) => {              // dir for win
    console.log("stderr: ", stderr);
    if(err) throw err;
    console.log("ls: ", data);
})
*/

cp.exec('node readStreams', (err, data, stderr) => {   
    console.log("data: ", data);
})