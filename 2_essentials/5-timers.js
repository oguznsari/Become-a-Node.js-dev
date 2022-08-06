const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

let incTime = () => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime / 1000} seconds`);
}

console.log(`setting a ${waitTime / 1000} seconds delay.`);

const timerFinished = () => {
    clearInterval(interval);
    console.log('done');
} 

setTimeout(timerFinished, waitTime);
const interval = setInterval(incTime, waitInterval);