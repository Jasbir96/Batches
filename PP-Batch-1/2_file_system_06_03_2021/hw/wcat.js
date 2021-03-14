let input = process.argv.slice(2);
let fs = require("fs");
let options = [];
let filepaths = [];
for (let i = 0; i < input.length; i++) {
    if (input[i].charAt(0) == "-") {
        options.push(input[i]);
    } else {
        filepaths.push(input[i]);
    }
}

// 1st edge -> file /path does not exist
for (let i = 0; i < filepaths.length; i++) {
    if (fs.existsSync(filepaths[i]) == false) {
        console.log(filepaths[i], "does not exist");
        return;
    }
}

let AllfilesContent = "";
for (let i = 0; i < filepaths.length; i++) {
    AllfilesContent += fs.readFileSync(filepaths[i]);
    AllfilesContent += "\r\n";
}
let allcontentArr = AllfilesContent.split("\r\n");
console.log(allcontentArr);
// console.log(allcontentArr)
// let strString = allcontentArr.join("\n");
// console.log("``````````````````````````````````````");
// console.log(strString)
// console.log("````````````````````````````````````````````````");
// allcontentArr=strString.split("\n");
// console.log(allcontentArr);
let isSpresent = includes(options, "-s");
let length = allcontentArr.length;
if (isSpresent) {
    for (let i = 1; i < length; i++) {
        if (allcontentArr[i] == "" && allcontentArr[i - 1] == "") {
            allcontentArr[i] = null;
        } else if (allcontentArr[i] == "" && allcontentArr[i - 1] == null) {
            allcontentArr[i] = null;
        }
    }
    let tempArr = [];
    for (let i = 0; i < allcontentArr.length; i++) {
        if (allcontentArr[i] != null) {
            tempArr.push(allcontentArr[i]);
        }
    }
    allcontentArr = tempArr
}
// // -n ,-b
let finalOption = "";

if (options.includes("-b")) {
    // 
    if (options.includes("-n")) {
        if (options.indexOf("-b") < options.indexOf("-n")) {
            finalOption = "-b"
        } else {
            finalOption = "-n";
        }
    } else {

        finalOption = "-b";
    }
}
if (options.includes("-n")) {
    if (options.includes("-b")) {
        if (options.indexOf("-n") < options.indexOf("-b")) {
            finalOption = "-n"
        } else {
            finalOption = "-b"
        }
    } else {
        finalOption = "-n";
    }
}

if (finalOption != "") {
    if (finalOption == "-b") {
        console.log(allcontentArr);
        console.log("``````````````````");
        addLineToContent(allcontentArr);
    } else {
        addLineToEveryOne(allcontentArr);
    }
}

function addLineToContent(arr) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '') {
            let strArr = arr[i].split("");
            strArr.unshift(counter + 1 + " ");
            arr[i] = strArr.join("");
            counter++;

        }
    }
}

function addLineToEveryOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        let strArr = arr[i].split("");
        strArr.unshift(i + 1 + " ");
        arr[i] = strArr.join("");
    }

}
console.log("````````````````````````````")

console.log(allcontentArr.join("\n"));




function includes(arr, elem) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            return true;
        }
    }
    return false;
}
