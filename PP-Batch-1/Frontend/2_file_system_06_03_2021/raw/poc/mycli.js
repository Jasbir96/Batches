// view
// tree
// flat
// organize
// help
let viewfnObj = require("./commands/view");
let helpfnObj = require("./commands/help");
let input = process.argv.slice(2);
// console.log(input);
// console.log(input);
let cmd = input[0]
switch (cmd) {
    case "view":
        //view as tree
        // view as flat 
        // recursion
        viewfnObj.viewfn(input[1], input[2])
        break;
    case "organize":
        console.log("organize command executed");
        break;
    case "help":
        helpfnObj.helpfn();
        break;

    default:
        console.log("Wrong command . Type help to see the list of all the commands");
}




