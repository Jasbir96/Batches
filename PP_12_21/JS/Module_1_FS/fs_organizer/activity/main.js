
let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch (command) {
    case "tree":
        // node main.js tree "C:\Users\Ritik Singh\Desktop\Batches\PP_12_21\JS\Module_1_FS\randomFolder"   
        treeObj.treefxn(inputArr[1]);
        break;
        //  input -> node main.js organize "C:\Users\Ritik Singh\Desktop\Batches\PP_12_21\JS\Module_1_FS\randomFolder"
    case "organize":
        organizeObj.organizefxn(inputArr[1])
        break;
    case "help":
        helpObj.helpfxn();
        break;
    default:
        console.log("🙏 kindly enter the correct cmd");
        break;
}
// main input
//  input -> node main.js tree "path"
// Print-> tree command executed with path ""
// Print -> organize command executed with path ""
//  input -> node main.js help 

 // Print -> list of all the commands
            // 1. node main.js tree "path"

            // 2. node main.js organize "path"
            // 3. node main.js help