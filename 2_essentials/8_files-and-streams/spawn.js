const cp = require('child_process');

const questionApp = cp.spawn('node', ['questions.js']);

questionApp.stdin.write('Ozzy \n');
questionApp.stdin.write('İstanbul \n');
questionApp.stdin.write('Change the world \n');

questionApp.stdout.on('data', data => {
    console.log(`from the questionApp: ${data}`);
})

questionApp.on('close', () => {
    console.log(`questionApp process exited.`)
})