#! /usr/bin/env node

// npm init -y 
// shebang syntax
// bin property 
// npm link
// C:\Users\Ritik Singh\Desktop\Batches\PAB\
// 2_File_System_10_02_2021\activity\mycli.js
let helperFile = require("./commands/help.js");
let viewFile = require("./commands/view");
let organizeFile = require("./commands/organize");
let input = process.argv.slice(2);
// mycli view "fname" tree
// node mycli.js [view ,dirName]
let command = input[0];
// path
// console.log(process.cwd());-> execute
// console.log(__filename);-> where is the file
// console.log(__dirname);-> directory name of file

switch (command) {
    case "view":
        viewFile.fn(input[1], input[2]);
        break;
    case "organize":
        organizeFile.fn(input[1]);
        break;
    case "help":
        helperFile.fn();
        break;
    default:
        console.log("wrong command type help for all the commands");
        break;
}
//view
//organize
//help