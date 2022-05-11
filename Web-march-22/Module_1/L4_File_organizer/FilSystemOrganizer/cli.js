// 1.take and input 
// nodejs cli.js help -> print Help command executed
// nodejs cli.js tree -> print tree command executed
// nodejs cli.js organize -> print tree command executed
let helpFnObj = require("./commands/help");
let treeFnObj = require("./commands/tree");
let organizeFnObj = require("./commands/organize");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let dirPath = inputArr[1];
// let listofThingsInCurrentFolder = fs.readdirSync(__dirname);
switch (command) {
    case "help":
        helpFnObj.helpFn();
        break;
    case "tree":
        treeFnObj.treeFn(dirPath);
        break;
    case "organize":
        organizeFnObj.organizeFn(dirPath);
        break;
    default:
        console.log("Wrong command . Type help to see the list of all the commands");
}