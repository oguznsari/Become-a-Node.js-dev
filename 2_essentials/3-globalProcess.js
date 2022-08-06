const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

// console.log("process pid: ", process.pid);
// console.log("node version: ", process.versions.node);
// console.log("argument variables: ", process.argv);

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);
 // node globalProcess --user osari --greeting "Hidely Hoe"