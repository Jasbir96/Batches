let helpFileObj = require("./commands/help");
let viewFileObj = require("./commands/view");
let organizeFileObj = require("./commands/organize");
// input 
let input = process.argv.slice(2);
// node mycli.js view <dirname> tree
// node mycli.js view <dirname> flat
// node mycli.js organize <dirname> 
// node mycli.js help
let cmd = input[0];
switch (cmd) {
    case "view":
        viewFileObj.viewFun(input[1], input[2]);
        break;
    case "organize":
        organizeFileObj.organizeFun(input[1]);
        break;
    case "help":
        helpFileObj.helperFun();
        break;
    default:
        console.log(`Wrong command 
        :( type help to see the list of all the commands`);
}

