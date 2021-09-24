
// 1- node wcat.js filepath => displays content of the file in the terminal 
// 2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal in (contactinated form) in the given order.
let fs = require("fs");
let inputArr = process.argv.slice(2);
// console.log(inputArr);
// segregate -> - -> option 
// segregate ->  -> file 
let optionArr = [];
let filesArr = [];

// *****files path , options diffrentiate *******************
for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-") {
        optionArr.push(inputArr[i]);
    } else {
        filesArr.push(inputArr[i]);
    }
}
// *************check if all the files are present************
for (let i = 0; i < filesArr.length; i++) {
    let ans = fs.existsSync(filesArr[i]);
    if (ans == false) {
        console.log("File doesn't exist");
        return;
    }
}
// *************content append**************** 
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let cFileContent = fs.readFileSync(filesArr[i])
    content = content + cFileContent + "\r\n";
}
console.log(content)
let contentArr = content.split("\r\n")
// console.log(contentArr);
// console.log(optionArr);
// -s check 
let isSPresent = optionArr.includes("-s");
if (isSPresent) {
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] !== null) {
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
}
// -n-> idx  , -b-> idx
let indexOfN = optionArr.indexOf("-n");
let indexofB = optionArr.indexOf("-b");
let finalOption = "";
// both are present 
// *******solve whether to implement -n or -s
if (indexOfN > -1 && indexofB > -1) {
    // index -> smaller
    if (indexOfN < indexofB) {
        finalOption = "-n";
    } else {
        finalOption = "-b";
    }

} else {
    // is there any option-> -n ,-b
    if (indexOfN > -1) {
        finalOption = "-n";

    } else if (indexofB > -1) {
        finalOption = "-b";
    }
}
if (finalOption != "") {
    if (finalOption == "-n") {
        modifyContentByN();
    } else if (finalOption == "-b") {
        // implement
        modifyContentByB();

    }
}

function modifyContentByN() {
    for (let i = 1; i <= contentArr.length; i++) {
        contentArr[i] = i + " " + contentArr[i];
    }
}
function modifyContentByB() {
    let count = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            contentArr[i] = count +" " + contentArr[i];
            count++;
        }
    }
}
// console.log("final option", finalOption);
// console.log(contentArr)
// console.log("```````````````");
console.log(contentArr.join("\r\n"));