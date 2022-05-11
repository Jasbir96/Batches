// 
// 1.take and input 
// nodejs cli.js help -> print Help command executed
// nodejs cli.js tree -> print tree command executed
// nodejs cli.js organize -> print tree command executed

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let dirPath = inputArr[1];
switch (command) {
    case "help":
        console.log("Help Command executed");
        break;
    case "tree":
        console.log("Tree command Executed with the path", dirPath != undefined ? dirPath : process.cwd());
        break;
    case "organize":
        console.log("Organize command executed", dirPath != undefined ? dirPath : process.cwd());
        break;
    default:
        console.log("Wrong command . Type help to see the list of all the commands");
}