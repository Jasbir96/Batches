// input 
let inputArr = process.argv.slice(2);
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
// console.log(inputArr);
let cmd = inputArr[0];
switch (cmd) {
    case "help":
        helpObj.helpFn();
        break;
    case "tree":
        treeObj.treeFn(inputArr[1])
        break;
    case "organize":
        // index out of bound -> undefined
        organizeObj.organizeFn(inputArr[1]);
        break;
    default:
        console.log(`Wrong command 
        .Kindly enter help to see all the commands`);
        break;
}